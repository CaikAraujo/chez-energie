import { useLocale } from '../contexts/LocaleContext';
import frMessages from './locales/fr.json';
import enMessages from './locales/en.json';

type Messages = typeof frMessages;

const messages: Record<'fr' | 'en', Messages> = {
    fr: frMessages,
    en: enMessages,
};

export function useTranslations<T extends keyof Messages>(namespace: T) {
    const { locale } = useLocale();

    const t = (key: string, params?: Record<string, string | number>): string => {
        const keys = key.split('.');
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        let value: any = messages[locale][namespace];

        for (const k of keys) {
            if (value && typeof value === 'object') {
                value = value[k];
            } else {
                return key; // Return key if translation not found
            }
        }

        if (typeof value === 'string') {
            if (params) {
                return Object.entries(params).reduce((acc, [key, val]) => {
                    return acc.replace(new RegExp(`{{${key}}}`, 'g'), String(val));
                }, value);
            }
            return value;
        }

        return key;
    };

    return { t, messages: messages[locale][namespace] };
}
