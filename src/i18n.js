import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import translationEN from "./locales/en.json";
import translationRU from "./locales/ru.json";
import translationHI from "./locales/hi.json";

// Translation resources
const resources = {
  en: {
    translation: translationEN,
  },
  ru: {
    translation: translationRU,
  },
  hi: {
    translation: translationHI,
  },
  es: {
    translation: {
      // Navigation
      home: "Inicio",
      products: "Productos",
      integration: "Integración",
      invest: "Invertir",
      devices: "Dispositivos",
      join: "Únete",

      // Banner
      welcome: "Bienvenido",
      getStarted: "Comenzar",

      // Footer
      contactUs: "Contáctenos",
      privacy: "Política de Privacidad",
      terms: "Términos de Servicio",
      // Add more translations as needed
    },
  },
};
i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "en",
    lng: "en",
    supportedLngs: ["en", "ru", "hi"],
    detection: {
      order: ["localStorage", "navigator"],
      caches: ["localStorage"],
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
