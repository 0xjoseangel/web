export const siteConfig = {
  name: "José Ángel Carretero Montes",
  title: "Ingeniería Informática & ADE | Data Science",
  description: "Portfolio de José Ángel Carretero Montes — Ingeniería Informática y ADE, Universidad de Granada",
  accentColor: "#00ff9f",
  social: {
    email: "joseangelcarretero300@gmail.com",
    linkedin: "https://www.linkedin.com/in/jos%C3%A9-%C3%A1ngel-carretero-montes-476008202/",
    twitter: "https://x.com/0xjoseangel",
    github: "https://github.com/0xjoseangel",
  },
  github: {
    username: "0xjoseangel",
    maxRepos: 6,
  },
  cv: {
    enabled: true,
    pdfPath: "/web/cv.pdf",
  },
  aboutMe:
    "Estudiante de cuarto año del doble grado en Ingeniería Informática (Computación y Sistemas Inteligentes) y ADE en la Universidad de Granada. Me especializo en Ciencia de Datos y algoritmos de inteligencia artificial, con experiencia en desarrollo full-stack, automatización de infraestructura y sistemas distribuidos. Busco aplicar modelos analíticos y técnicas de machine learning a problemas reales en el ámbito financiero y empresarial.",
  skills: ["C++", "C", "Python", "Java", "JavaScript", "Docker", "Ansible", "Ruby", "Linux", "Bash", "Django", "React"],
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

  education: [
    {
      school: "Universidad de Granada",
      degree: "Doble grado en Ingeniería Informática + ADE",
      dateRange: "2021 - Presente",
      achievements: [
        "Especialidad en Computación y Sistemas Inteligentes",
      ],
    },
  ],
};
