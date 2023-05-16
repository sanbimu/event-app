import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import backend from 'i18next-http-backend';
import detector from 'i18next-browser-languagedetector';

import fr from './shared/translations/FR.json';
import en from './shared/translations/EN.json';

i18next
  .use(backend)
  .use(detector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    debug: true,
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: { translation: en },
      fr: { translation: fr },
    },
  });

export default i18next;
