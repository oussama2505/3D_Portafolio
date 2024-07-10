import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          nav: {
            home: 'Home',
            about: 'About',
            experience: 'Experience',
            tech: 'Tech',
            works: 'Works',
            feedbacks: 'Feedbacks',
            contact: 'Contact',
          },
          // Add more translations for other sections here
        },
      },
      es: {
        translation: {
          nav: {
            home: 'Inicio',
            about: 'Acerca de',
            experience: 'Experiencia',
            tech: 'Tecnología',
            works: 'Proyectos',
            feedbacks: 'Comentarios',
            contact: 'Contacto',
          },
          // Add more translations for other sections here
        },
      },
    },
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
