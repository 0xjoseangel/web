export const languages = { es: "ES", en: "EN" } as const;
export type Lang = keyof typeof languages;
export const defaultLang: Lang = "es";

export const ui = {
  es: {
    "nav.about": "Sobre Mí",
    "nav.projects": "Proyectos",
    "nav.github": "GitHub",
    "nav.experience": "Experiencia",
    "nav.education": "Educación",
    "nav.switchTo": "Cambiar a inglés",

    "hero.cv": "Descargar CV",
    "hero.contact": "Contactar",

    "about.title": "Sobre Mí",

    "projects.title": "Proyectos",
    "projects.readme": "Ver README",
    "projects.loading": "Cargando...",
    "projects.readmeError": "No se pudo cargar el README.",

    "github.title": "GitHub",
    "github.subtitle": "Repositorios públicos destacados",
    "github.readme": "Ver README",
    "github.loading": "Cargando...",
    "github.readmeError": "No se pudo cargar el README.",

    "contributions.title": "Actividad",
    "contributions.suffix": "contribuciones en el último año",
    "contributions.less": "Menos",
    "contributions.more": "Más",
    "contributions.months": ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"],
    "contributions.unitSingular": "contribución",
    "contributions.unitPlural": "contribuciones",

    "experience.title": "Experiencia",
    "education.title": "Educación",
  },
  en: {
    "nav.about": "About",
    "nav.projects": "Projects",
    "nav.github": "GitHub",
    "nav.experience": "Experience",
    "nav.education": "Education",
    "nav.switchTo": "Switch to Spanish",

    "hero.cv": "Download CV",
    "hero.contact": "Contact",

    "about.title": "About Me",

    "projects.title": "Projects",
    "projects.readme": "View README",
    "projects.loading": "Loading...",
    "projects.readmeError": "Couldn't load the README.",

    "github.title": "GitHub",
    "github.subtitle": "Featured public repositories",
    "github.readme": "View README",
    "github.loading": "Loading...",
    "github.readmeError": "Couldn't load the README.",

    "contributions.title": "Activity",
    "contributions.suffix": "contributions in the last year",
    "contributions.less": "Less",
    "contributions.more": "More",
    "contributions.months": ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    "contributions.unitSingular": "contribution",
    "contributions.unitPlural": "contributions",

    "experience.title": "Experience",
    "education.title": "Education",
  },
} as const;

export type UiKey = keyof typeof ui.es;

export function useTranslations(lang: Lang) {
  return function t(key: UiKey): any {
    return ui[lang]?.[key] ?? ui[defaultLang][key];
  };
}

/** Path to the equivalent page in the other language. Single-page site, so it's always the root of that locale. */
export function getAltLangPath(lang: Lang): string {
  return lang === "es" ? "/en/" : "/";
}
