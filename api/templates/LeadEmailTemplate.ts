
const colors = {
    brandBlue: '#2563eb',
    brandGreen: '#10b981',
    slate900: '#0f172a',
    slate50: '#f8fafc',
    slate100: '#f1f5f9',
    slate200: '#e2e8f0',
    slate400: '#94a3b8',
    slate500: '#64748b',
    slate900text: '#0f172a',
};

// Simple SVG Icons as strings
const Icons = {
    Zap: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>`,
    Ruler: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Z"/><line x1="14.5" y1="9.5" x2="18.5" y2="5.5"/><line x1="12" y1="12" x2="16" y2="8"/><line x1="9.5" y1="14.5" x2="13.5" y2="10.5"/></svg>`,
    Home: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>`,
    Sun: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41-1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>`,
    Battery: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="16" height="10" x="2" y="7" rx="2" ry="2"/><line x1="22" x2="22" y1="11" y2="13"/></svg>`,
    Mail: `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>`,
    Phone: `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>`,
    MessageSquare: `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>`
};

const renderDetail = (label: string, value: any, iconSvg: string, suffix: string = '') => {
    if (!value) return '';
    return `
    <div style="display:inline-block; width: 48%; vertical-align: top; margin-bottom: 10px;">
        <div style="border: 1px solid ${colors.slate100}; background-color: white; border-radius: 12px; padding: 16px; display: flex; align-items: center;">
            <div style="padding: 8px; border-radius: 8px; margin-right: 12px; background-color: #eff6ff; color: ${colors.brandBlue}; flex-shrink: 0;">
                ${iconSvg}
            </div>
            <div style="display: flex; flex-direction: column;">
                <p style="font-size: 10px; font-weight: 800; color: ${colors.slate400}; text-transform: uppercase; letter-spacing: 0.1em; margin: 0 0 4px 0;">${label}</p>
                <p style="font-size: 16px; font-weight: 700; color: ${colors.slate900text}; line-height: 1; margin: 0;">
                    ${value}<span style="font-size: 12px; font-weight: 500; color: ${colors.slate500}; margin-left: 2px;">${suffix}</span>
                </p>
            </div>
        </div>
    </div>
    `;
};

// Helper: Ensure we have strings for all fields
const safe = (val: any) => val || '';

export const getLeadEmailHtml = (data: any) => {
    const { name, email, phone, projectType, message, ...dynamicFields } = data;
    const receivedAt = new Date().toLocaleDateString('fr-FR', { weekday: 'long', day: 'numeric', month: 'long', hour: '2-digit', minute: '2-digit' });

    // Map dynamic fields to specific icons/labels
    // Note: The key names here must match what comes from the form
    const detailsHtml = [
        renderDetail('Consommation', dynamicFields.monthlyConsumption, Icons.Zap, ' kWh'),
        renderDetail('Surface Dispo', dynamicFields.availableArea, Icons.Ruler, ' m²'),
        renderDetail('Chauffage Actuel', dynamicFields.currentHeatingType, Icons.Home),
        renderDetail('Système Existant', dynamicFields.existingSolarSystem, Icons.Sun),
        renderDetail('Stockage', dynamicFields.storageCapacity, Icons.Battery, ' kWh'),
        renderDetail('Puissance Désirée', dynamicFields.desiredPower, Icons.Zap),
        renderDetail('Distance Panneau', dynamicFields.distanceToPanel, Icons.Ruler, ' m'),
        renderDetail('Nombre de Pièces', dynamicFields.numberOfRooms, Icons.Home),
    ].join('');

    return `
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<style>
    body { font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; margin: 0; padding: 0; background-color: #f8fafc; }
    .container { max-width: 600px; margin: 0 auto; background-color: white; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1); border: 1px solid #f1f5f9; margin-top: 32px; margin-bottom: 32px; }
    .header { background-color: #0f172a; padding: 32px; padding-bottom: 48px; position: relative; color: white; }
    .header-content { display: flex; justify-content: space-between; align-items: center; position: relative; z-index: 10; }
    .logo-text { font-size: 24px; font-weight: 900; line-height: 1; letter-spacing: -1px; }
    .logo-chez { color: #22d3ee; }
    .logo-energy { color: #10b981; font-style: italic; }
    .logo-sub { font-size: 10px; text-transform: uppercase; letter-spacing: 0.15em; font-weight: 700; margin-top: 4px; display: block; color: white; }
    .badge { display: inline-flex; align-items: center; gap: 8px; padding: 4px 12px; border-radius: 9999px; background-color: rgba(16, 185, 129, 0.2); border: 1px solid rgba(16, 185, 129, 0.3); color: #86efac; font-size: 10px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; }
    .badge-dot { width: 8px; height: 8px; border-radius: 50%; background-color: #4ade80; display: inline-block; margin-right: 6px; }
    .date { color: #94a3b8; font-size: 12px; margin-top: 8px; font-weight: 500; text-align: right; }
    .content { padding: 32px; margin-top: -24px; position: relative; z-index: 20; background-color: transparent; }
    .card { background-color: white; border-radius: 12px; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1); border: 1px solid #f1f5f9; padding: 24px; margin-bottom: 24px; }
    .avatar { width: 64px; height: 64px; border-radius: 50%; background: linear-gradient(135deg, #2563eb, #1d4ed8); color: white; display: flex; align-items: center; justify-content: center; font-size: 24px; font-weight: 700; float: left; margin-right: 16px; }
    .contact-info { overflow: hidden; }
    .name { font-size: 20px; font-weight: 700; color: #0f172a; margin: 0; }
    .project-type { display: flex; align-items: center; gap: 8px; color: #2563eb; font-weight: 500; font-size: 14px; margin-top: 4px; }
    .contact-links { margin-top: 16px; padding-top: 16px; border-top: 1px solid #f1f5f9; }
    .contact-link { display: inline-flex; align-items: center; gap: 8px; color: #475569; text-decoration: none; font-size: 14px; margin-right: 16px; }
    .contact-link:hover { color: #2563eb; }
    .section-title { font-size: 10px; font-weight: 700; color: #94a3b8; text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 16px; display: flex; align-items: center; gap: 8px; }
    .message-box { background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 12px; padding: 24px; font-style: italic; color: #334155; font-weight: 500; position: relative; }
    .footer { background-color: #f8fafc; border-top: 1px solid #f1f5f9; padding: 24px; text-align: center; color: #94a3b8; font-size: 12px; }
    .btn { display: inline-block; background-color: #2563eb; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: 600; font-size: 14px; text-align: center; margin-right: 12px; }
</style>
</head>
<body>
    <div class="container">
        <!-- Header -->
        <div class="header">
            <div class="header-content">
                <div>
                    <div class="logo-text">
                        <span class="logo-chez">CHEZ</span>
                        <span class="logo-energy">ENERGY</span>
                    </div>
                    <span class="logo-sub">L'écologie commence par nous</span>
                </div>
                <div style="text-align: right;">
                    <div class="badge">
                        <span class="badge-dot"></span>
                        Nouvelle Demande
                    </div>
                    <div class="date">Reçu le ${receivedAt}</div>
                </div>
            </div>
        </div>

        <!-- Main Content -->
        <div class="content">
            
            <!-- Contact Card -->
            <div class="card">
                <div class="avatar">
                    ${name.charAt(0).toUpperCase()}
                </div>
                <div class="contact-info">
                    <h2 class="name">${name}</h2>
                    <div class="project-type">
                        ${Icons.Sun} <span>${projectType}</span>
                    </div>
                    <div class="contact-links">
                        <a href="mailto:${email}" class="contact-link" style="color: #475569; text-decoration: none;">
                            <span style="display:inline-block; vertical-align:middle; margin-right:4px;">${Icons.Mail}</span> ${email}
                        </a>
                        <a href="tel:${phone}" class="contact-link" style="color: #475569; text-decoration: none;">
                            <span style="display:inline-block; vertical-align:middle; margin-right:4px;">${Icons.Phone}</span> ${phone}
                        </a>
                    </div>
                </div>
            </div>

            <!-- Details Grid -->
            ${detailsHtml ? `
            <div>
                <div class="section-title">
                    ${Icons.Ruler} <span>Détails du Projet</span>
                </div>
                <div style="font-size: 0;">
                    ${detailsHtml}
                </div>
            </div>
            <div style="height: 24px;"></div>
            ` : ''}

            <!-- Message -->
            ${message ? `
            <div>
                <div class="section-title">
                    ${Icons.MessageSquare} <span>Message du Client</span>
                </div>
                <div class="message-box">
                    "${message}"
                </div>
            </div>
            ` : ''}

            <!-- Actions -->
            <div style="margin-top: 32px; text-align: center;">
                <a href="mailto:${email}" class="btn">Répondre</a>
                <a href="tel:${phone}" class="btn" style="background-color: white; color: #334155; border: 1px solid #e2e8f0;">Appeler</a>
            </div>

        </div>

        <!-- Footer -->
        <div class="footer">
            Envoyé depuis <strong style="color: #2563eb;">chez-energy.ch</strong>
        </div>
    </div>
</body>
</html>
    `;
};
