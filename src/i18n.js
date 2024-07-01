import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';

i18n
  .use(HttpApi)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    supportedLngs: ['en', 'es'],
    fallbackLng: 'en',
    detection: {
      order: ['querystring', 'cookie'],
      caches: ['cookie'],
    },
    backend: {
      loadPath: 'src/locales/{{lng}}/translation.json',
    },
  });

export default i18n;
