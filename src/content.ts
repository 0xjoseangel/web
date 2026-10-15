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
        name: "Habla con tu dinero — Asistente Financiero con IA",
        description:
          "Asistente financiero conversacional para el reto de la Cátedra Unicaja (UGR): consultas en lenguaje natural sobre tus movimientos con gráficos generados por el LLM, y operaciones (Bizum, inversiones) que el agente solo propone — un paso determinista valida fondos y límites y nada se ejecuta sin tu aprobación. Incluye dashboard proactivo nocturno, memoria de usuario y modo voz 100% local. 86,4% de precisión en consultas y respuesta completa en ~4,2 s (mediana).",
        link: "https://github.com/0xjoseangel/reto-unicaja",
        skills: ["Python", "FastAPI", "LangGraph", "React", "Docker"],
      },
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

    certifications: [
      {
        name: "Aptis ESOL — Inglés C1",
        issuer: "British Council",
        date: "Septiembre 2026",
        details: [
          "Nivel global C1 (MCER) · 179/200",
          "Listening C1 · Reading C1 (50/50) · Speaking B2 · Writing B2",
        ],
        link: "https://credentials.britishcouncil.org/28379ba7-48f4-48de-9bec-4a27901aebc4?key=904660ccf4df4f33d680e802a8130aace31f119fae33bb6c3fc9628da4798365",
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
        name: "Talk to Your Money — AI Financial Assistant",
        description:
          "Conversational financial assistant built for the Cátedra Unicaja challenge (University of Granada): natural-language queries over your bank transactions with LLM-generated charts, and operations (Bizum transfers, investments) that the agent only proposes — a deterministic step checks funds and limits, and nothing runs without your explicit approval. Includes a nightly proactive dashboard, user memory, and a fully local voice mode. 86.4% accuracy on natural-language queries and ~4.2 s median full response time.",
        link: "https://github.com/0xjoseangel/reto-unicaja",
        skills: ["Python", "FastAPI", "LangGraph", "React", "Docker"],
      },
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

    certifications: [
      {
        name: "Aptis ESOL — English C1",
        issuer: "British Council",
        date: "September 2026",
        details: [
          "Overall CEFR level C1 · 179/200",
          "Listening C1 · Reading C1 (50/50) · Speaking B2 · Writing B2",
        ],
        link: "https://credentials.britishcouncil.org/28379ba7-48f4-48de-9bec-4a27901aebc4?key=904660ccf4df4f33d680e802a8130aace31f119fae33bb6c3fc9628da4798365",
      },
    ],
  },
} as const;

export type Locale = keyof typeof content;
