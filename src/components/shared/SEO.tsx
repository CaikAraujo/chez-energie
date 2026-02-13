import React from 'react';
// import { Helmet } from 'react-helmet-async';

interface SEOProps {
    title: string;
    description: string;
    canonical?: string;
    type?: 'website' | 'article';
    name?: string;
    image?: string;
}

const SEO: React.FC<SEOProps> = ({
    title,
    description,
    canonical,
    type = 'website',
    name = 'Chez Énergie',
    image = '/img/panneau_installation.webp' // Default share image
}) => {
    // React 19 Compatibility: Helmet currently disabled
    // const fullCanonical = canonical ? `${siteUrl}${canonical}` : siteUrl;
    // const fullImage = image.startsWith('http') ? image : `${siteUrl}${image}`;

    return null;
    /*
    return (
        <Helmet>
            <title>{title} | Chez Énergie</title>
            <meta name="description" content={description} />
            <link rel="canonical" href={fullCanonical} />

            <meta property="og:type" content={type} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={fullImage} />
            <meta property="og:url" content={fullCanonical} />
            <meta property="og:site_name" content={name} />

            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={fullImage} />
        </Helmet>
    );
    */
};

export default SEO;
