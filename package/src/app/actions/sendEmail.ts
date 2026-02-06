'use server'

import nodemailer from 'nodemailer'
import { z } from 'zod'
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
        name: formData.get('name')?.toString() || '',
        email: formData.get('email')?.toString() || '',
        projectType: formData.get('projectType')?.toString() || '',
        _honey: formData.get('_check_val')?.toString() || '' // Honeypot
    }

    // 1. Honeypot Check (Anti-Spam)
    if (rawData._honey) {
        // If the bad bot filled this hidden field, just return success to trick them
        return { success: true, message: 'Email envoyé avec succès !' }
    }

    // 2. Validation with Zod
    const result = schema.safeParse(rawData)

    if (!result.success) {
        console.error('Validation error:', JSON.stringify(result.error, null, 2))
        const errorMessage = result.error.issues[0]?.message || 'Une erreur de validation est survenue'
        return {
            success: false,
            message: errorMessage
        }
    }

    const { name, email, projectType } = result.data

    // 3. Sanitization (Defense in Depth)
    const cleanName = name
    const cleanEmail = email
    const cleanProjectType = projectType

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
    } catch (error: any) {
        console.error('Email error:', error)
        // Return actual error for debugging
        return { success: false, message: `Erreur: ${error.message || 'Problème technique'}` }
    }
}
