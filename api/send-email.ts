import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method not allowed' });
    }

    const { name, email, phone, projectType, message, ...dynamicFields } = req.body;

    try {
        const data = await resend.emails.send({
            from: 'Chez Énergie <info@chezenergy.ch>',
            to: ['info@chezenergy.ch'],
            subject: `Nouveau Prospect: ${projectType} - ${name}`,
            html: `
        <h1>Nouveau Message du Site Web</h1>
        <p><strong>Nom:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Téléphone:</strong> ${phone}</p>
        <p><strong>Type de Projet:</strong> ${projectType}</p>
        
        <h2>Détails du Projet</h2>
        <ul>
          ${Object.entries(dynamicFields).map(([key, value]) => `<li><strong>${key}:</strong> ${value}</li>`).join('')}
        </ul>

        <h2>Message</h2>
        <p>${message}</p>
      `
        });

        return res.status(200).json(data);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Failed to send email' });
    }
}
