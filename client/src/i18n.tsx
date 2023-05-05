import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

import translationFrench from './shared/translations/FR.json';
import translationEnglish from './shared/translations/EN.json';

const resources = {
  en: {
    app: translationEnglish,
  },
  fr: {
    app: translationFrench,
  },
};

i18next.use(initReactI18next).init({ resources, lng: 'en' });

export default i18next;
