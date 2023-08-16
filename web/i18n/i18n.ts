import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import enUS from "../public/locales/en-US.json";
import ptBR from "../public/locales/pt-BR.json";

const localStorage = window.localStorage;

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: enUS },
    pt: { translation: ptBR },
    // Adicione mais idiomas e seus arquivos JSON de tradução aqui
  },
  lng: localStorage.getItem("language") || "pt-BR",
  fallbackLng: "pt-BR", // Idioma de fallback caso não seja encontrado
  interpolation: {
    escapeValue: false, // Não escapar strings que contenham HTML
  },
});

export default i18n;

export const saveLanguageToLocalStorage = (language: string) => {
  localStorage.setItem("language", language);
};

// Função para obter o idioma do localStorage
export const getLanguageFromLocalStorage = () => {
  return localStorage.getItem("language") || "pt-BR"; // Defina o idioma padrão aqui
};

export function handlePortugueseLanguage() {
  i18n.changeLanguage("pt-BR");
  saveLanguageToLocalStorage("pt-BR");
  window.location.reload();
}

export function handleEnglishLanguage() {
  i18n.changeLanguage("en-US");
  saveLanguageToLocalStorage("en-US");
  window.location.reload();
}
