import { getRequestConfig } from 'next-intl/server';

export const locales = ['fr', 'en'] as const;
export const defaultLocale = 'fr' as const;

export type Locale = (typeof locales)[number];

export default getRequestConfig(async ({ locale }) => {
    return {
        locale,
        messages: (await import(`./locales/${locale}.json`)).default
    };
});
