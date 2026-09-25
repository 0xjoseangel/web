// Contenido dependiente del idioma. Los datos que no cambian entre idiomas
// (nombre, redes sociales, usuario de GitHub, color de acento) siguen en `config.ts`.

export const content = {
  es: {
    title: "Ingeniería Informática & ADE | Data Science",
    description:
      "Portfolio de José Ángel Carretero Montes — Ingeniería Informática y ADE, Universidad de Granada",
    ogLocale: "es_ES",
    availability: "Prácticas ahora · Incorporación completa verano 2027",

    cv: {
      enabled: true,
      pdfPath: "/cv.pdf",
    },

    aboutMe:
      "Estudiante de quinto año del doble grado en Ingeniería Informática (Computación y Sistemas Inteligentes) y ADE en la Universidad de Granada. Me especializo en Ciencia de Datos y algoritmos de inteligencia artificial, con experiencia en desarrollo full-stack, automatización de infraestructura y sistemas distribuidos. Busco aplicar modelos analíticos y técnicas de machine learning a problemas reales en el ámbito financiero y empresarial.",

    skills: [
      {
        category: "Lenguajes",
        items: ["C++", "C", "Python", "Java", "JavaScript", "Ruby", "Bash"],
      },
      {
        category: "Frameworks",
        items: ["Django", "React", "Vite"],
      },
      {
        category: "Infraestructura",
        items: ["Docker", "Ansible", "Linux", "Oracle"],
      },
      {
        category: "Data Science",
        items: ["Jupyter", "Pandas", "NumPy", "Matplotlib"],
      },
    ],

    projects: [
      {
        name: "Casino Online",
        description:
          "Plataforma de casino online con arquitectura headless. Backend en Django con base de datos Oracle y frontend en React + Vite. Incluye gestión de usuarios, catálogo de juegos, sistema de transacciones, torneos y control de sesiones.",
        link: "https://github.com/0xjoseangel/Casino",
        skills: ["JavaScript", "React", "Django", "Python", "Oracle"],
      },
      {
        name: "Danger Theory — Detección de Crisis Financieras",
        description:
          "Aplicación de la Teoría del Peligro para detectar crisis cambiarias mediante algoritmos evolutivos inspirados en inmunología biológica. Incluye paper académico, libro interactivo y pipeline de análisis de datos económicos.",
        link: "https://github.com/0xjoseangel/DANGER-THEORY-DT-",
        skills: ["Python", "Jupyter", "Data Science"],
      },
      {
        name: "Agentes Reactivos y Deliberativos",
        description:
          "Implementación de agentes inteligentes con comportamiento reactivo y deliberativo para navegación autónoma en entornos simulados. Desarrollo de la lógica de decisión y planificación de los agentes.",
        link: "https://github.com/0xjoseangel/practica2IA",
        skills: ["C++", "IA"],
      },
    ],

    experience: [] as { title: string; company: string; dateRange: string; bullets: string[] }[],

    education: [
      {
        school: "Universidad de Granada",
        degree: "Doble grado en Ingeniería Informática + ADE",
        dateRange: "2022 - Presente",
        achievements: ["Especialidad en Computación y Sistemas Inteligentes"],
      },
    ],
  },

  en: {
    title: "Computer Engineering & Business Administration | Data Science",
    description:
      "Portfolio of José Ángel Carretero Montes — Computer Engineering and Business Administration, University of Granada",
    ogLocale: "en_US",
    availability: "Open to internships now · Full-time availability summer 2027",

    cv: {
      enabled: true,
      pdfPath: "/cv-en.pdf",
    },

    aboutMe:
      "Fifth-year student of the double degree in Computer Engineering (Computation and Intelligent Systems) and Business Administration at the University of Granada. I specialize in Data Science and artificial intelligence algorithms, with experience in full-stack development, infrastructure automation, and distributed systems. I'm looking to apply analytical models and machine learning techniques to real-world problems in finance and business.",

    skills: [
      {
        category: "Languages",
        items: ["C++", "C", "Python", "Java", "JavaScript", "Ruby", "Bash"],
      },
      {
        category: "Frameworks",
        items: ["Django", "React", "Vite"],
      },
      {
        category: "Infrastructure",
        items: ["Docker", "Ansible", "Linux", "Oracle"],
      },
      {
        category: "Data Science",
        items: ["Jupyter", "Pandas", "NumPy", "Matplotlib"],
      },
    ],

    projects: [
      {
        name: "Casino Online",
        description:
          "Online casino platform with a headless architecture. Django backend with an Oracle database and a React + Vite frontend. Includes user management, game catalog, transaction system, tournaments, and session control.",
        link: "https://github.com/0xjoseangel/Casino",
        skills: ["JavaScript", "React", "Django", "Python", "Oracle"],
      },
      {
        name: "Danger Theory — Financial Crisis Detection",
        description:
          "Application of Danger Theory to detect currency crises using evolutionary algorithms inspired by biological immunology. Includes an academic paper, an interactive book, and an economic data analysis pipeline.",
        link: "https://github.com/0xjoseangel/DANGER-THEORY-DT-",
        skills: ["Python", "Jupyter", "Data Science"],
      },
      {
        name: "Reactive and Deliberative Agents",
        description:
          "Implementation of intelligent agents with reactive and deliberative behavior for autonomous navigation in simulated environments. Development of the agents' decision-making and planning logic.",
        link: "https://github.com/0xjoseangel/practica2IA",
        skills: ["C++", "AI"],
      },
    ],

    experience: [] as { title: string; company: string; dateRange: string; bullets: string[] }[],

    education: [
      {
        school: "University of Granada",
        degree: "Double Degree in Computer Engineering + Business Administration",
        dateRange: "2022 - Present",
        achievements: ["Specialization in Computation and Intelligent Systems"],
      },
    ],
  },
} as const;

export type Locale = keyof typeof content;
