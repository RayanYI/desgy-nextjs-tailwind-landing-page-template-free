'use server'

import nodemailer from 'nodemailer'

interface EmailState {
    success: boolean
    message: string
}

export async function sendEmail(formData: FormData): Promise<EmailState> {
    const name = formData.get('name') as string
    const email = formData.get('email') as string
    const projectType = formData.get('projectType') as string

    if (!name || !email || !projectType) {
        return { success: false, message: 'Veuillez remplir tous les champs.' }
    }

    const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS } = process.env

    if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) {
        console.error('Missing SMTP configuration')
        return { success: false, message: 'Erreur de configuration du serveur email.' }
    }

    const port = parseInt(SMTP_PORT || '587')
    const secure = port === 465 // true for 465, false for other ports

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
            from: `"${name}" <${SMTP_USER}>`, // Sender address (must be authenticated user usually)
            to: 'contact@gositepro.fr', // Business email
            replyTo: email,
            subject: `Nouveau projet de ${name} - Offre ${projectType}`,
            text: `
                Nouveau prospect :
                Nom : ${name}
                Email : ${email}
                Type de projet : ${projectType}
            `,
            html: `
                <h1>Nouvelle demande de projet</h1>
                <p><strong>Nom :</strong> ${name}</p>
                <p><strong>Email :</strong> ${email}</p>
                <p><strong>Offre sélectionnée :</strong> ${projectType}</p>
            `,
        })

        return { success: true, message: 'Email envoyé avec succès !' }
    } catch (error) {
        console.error('Email error:', error)
        return { success: false, message: "Une erreur est survenue lors de l'envoi." }
    }
}
