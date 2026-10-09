import { createI18n } from 'vue-i18n';
import en from './locales/en.json';
import es from './locales/es.json';

export const SUPPORTED_LOCALES = ['en', 'es'];

export const DEFAULT_LOCALE = 'en';

const numberFormats = {
    en: {
        decimal: { style: 'decimal', maximumFractionDigits: 2 },
        percent: { style: 'percent', maximumFractionDigits: 0 },
    },
    es: {
        decimal: { style: 'decimal', maximumFractionDigits: 2 },
        percent: { style: 'percent', maximumFractionDigits: 0 },
    },
};

const datetimeFormats = {
    en: {
        date: { year: 'numeric', month: '2-digit', day: '2-digit' },
        weekday: { weekday: 'short' },
        short: { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' },
        long: { year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' },
    },
    es: {
        date: { year: 'numeric', month: '2-digit', day: '2-digit' },
        weekday: { weekday: 'short' },
        short: { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' },
        long: { year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' },
    },
};

const i18n = createI18n({
    legacy: false,
    locale: DEFAULT_LOCALE,
    fallbackLocale: DEFAULT_LOCALE,
    messages: { en, es },
    numberFormats,
    datetimeFormats,
});

export default i18n;