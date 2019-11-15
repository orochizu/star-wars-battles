import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import Backend from 'i18next-xhr-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n.use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        backend: {
            loadPath: './locales/{{lng}}.json',
        },
        lng: 'en',
        fallbackLng: 'en',
        debug: false,

        interpolation: {
            escapeValue: false,
        },
        react: {
            useSuspense: false, //   <---- this will do the magic
        },
    });

export default i18n;
