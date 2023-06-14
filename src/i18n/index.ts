import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import en from './en';
import ua from './ua';

export const resources = {
  ua: { translation: ua },
  en: { translation: en },
};

export const appLocales = Object.keys(resources);
const options = {
  order: ['localStorage'],
  lookupLocalStorage: 'i18nextLng',
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    react: {
      useSuspense: true,
    },
    detection: options,
  });

export default i18n;
