import { Resend } from 'resend';
import { getLeadEmailHtml } from './templates/LeadEmailTemplate.js';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
    // Add CORS headers
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader('Access-Control-Allow-Origin', '*'); // Adjust this to your domain in production
    res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
    res.setHeader(
        'Access-Control-Allow-Headers',
        'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
    );

    if (req.method === 'OPTIONS') {
        res.status(200).end();
        return;
    }

    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method not allowed' });
    }

    if (!process.env.RESEND_API_KEY) {
        return res.status(500).json({ error: 'RESEND_API_KEY is missing' });
    }

    const { name, email, phone, projectType, message, ...dynamicFields } = req.body;

    // Use the template to generating HTML
    const emailHtml = getLeadEmailHtml({
        name,
        email,
        phone,
        projectType,
        message,
        ...dynamicFields
    });

    try {
        const data = await resend.emails.send({
            from: 'Chez Énergie <info@chezenergy.ch>',
            to: ['info@chezenergy.ch'],
            subject: `Nouveau Prospect: ${projectType} - ${name}`,
            html: emailHtml,
        });

        return res.status(200).json(data);
    } catch (error) {
        console.error('Resend Error:', error);
        return res.status(500).json({ error: error.message || 'Failed to send email', details: error });
    }
}
