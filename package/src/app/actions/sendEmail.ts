'use server'

import nodemailer from 'nodemailer'
import { z } from 'zod'
import DOMPurify from 'isomorphic-dompurify'

const schema = z.object({
    name: z.string().min(2, "Le nom doit contenir au moins 2 caractères"),
    email: z.string().email("Email invalide"),
    projectType: z.string(),
    _honey: z.string().optional() // Honeypot field
})

interface EmailState {
    success: boolean
    message: string
}

export async function sendEmail(formData: FormData): Promise<EmailState> {
    const rawData = {
        name: formData.get('name'),
        email: formData.get('email'),
        projectType: formData.get('projectType'),
        _honey: formData.get('_check_val') // We'll call the honeypot field '_check_val' in the form
    }

    // 1. Honeypot Check (Anti-Spam)
    if (rawData._honey) {
        // If the bad bot filled this hidden field, just return success to trick them
        return { success: true, message: 'Email envoyé avec succès !' }
    }

    // 2. Validation with Zod
    const result = schema.safeParse(rawData)

    if (!result.success) {
        return {
            success: false,
            message: result.error.errors[0].message
        }
    }

    const { name, email, projectType } = result.data

    // 3. Sanitization (Defense in Depth)
    const cleanName = DOMPurify.sanitize(name)
    const cleanEmail = DOMPurify.sanitize(email)
    const cleanProjectType = DOMPurify.sanitize(projectType)

    const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS } = process.env

    if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) {
        console.error('Missing SMTP configuration')
        return { success: false, message: 'Erreur de configuration du serveur email.' }
    }

    const port = parseInt(SMTP_PORT || '587')
    const secure = port === 465

    try {
        const transporter = nodemailer.createTransport({
            host: SMTP_HOST,
            port: port,
            secure: secure,
            auth: {
                user: SMTP_USER,
                pass: SMTP_PASS,
            },
        })

        // Email to the business owner
        await transporter.sendMail({
            from: `"${cleanName}" <${SMTP_USER}>`,
            to: 'contact@gositepro.fr',
            replyTo: cleanEmail,
            subject: `Nouveau projet de ${cleanName} - Offre ${cleanProjectType}`,
            text: `
                Nouveau prospect :
                Nom : ${cleanName}
                Email : ${cleanEmail}
                Type de projet : ${cleanProjectType}
            `,
            html: `
                <h1>Nouvelle demande de projet</h1>
                <p><strong>Nom :</strong> ${cleanName}</p>
                <p><strong>Email :</strong> ${cleanEmail}</p>
                <p><strong>Offre sélectionnée :</strong> ${cleanProjectType}</p>
            `,
        })

        return { success: true, message: 'Email envoyé avec succès !' }
    } catch (error) {
        console.error('Email error:', error)
        return { success: false, message: "Une erreur est survenue lors de l'envoi." }
    }
}
