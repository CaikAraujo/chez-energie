import { useEffect } from 'react';

interface DocumentTitleProps {
    title: string;
    description?: string;
}

/**
 * Lightweight SEO component that updates document title and meta description
 * Compatible with React 19 - uses native DOM API instead of react-helmet
 */
export const DocumentTitle: React.FC<DocumentTitleProps> = ({ title, description }) => {
    useEffect(() => {
        // Update title
        document.title = `${title} | Chez Énergie`;

        // Update meta description if provided
        if (description) {
            let metaDescription = document.querySelector('meta[name="description"]');
            if (!metaDescription) {
                metaDescription = document.createElement('meta');
                metaDescription.setAttribute('name', 'description');
                document.head.appendChild(metaDescription);
            }
            metaDescription.setAttribute('content', description);
        }

        // Cleanup function to restore default title
        return () => {
            document.title = 'Chez Énergie - Solutions Énergétiques Durables';
        };
    }, [title, description]);

    return null;
};

export default DocumentTitle;
