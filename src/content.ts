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
        items: ["C++", "C", "Python", "SQL", "Java", "JavaScript", "Ruby", "Bash"],
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
          "Asistente financiero conversacional para el reto de la Cátedra Unicaja (UGR): preguntas en lenguaje natural sobre tus movimientos con gráficos generados por el LLM, y operaciones (Bizum, inversiones) que nunca se ejecutan sin tu aprobación.",
        highlights: [
          "Grafo de LangGraph que separa decidir de ejecutar: el LLM solo propone, un paso determinista valida fondos y límites, el grafo se pausa hasta tu aprobación y ejecuta en una única transacción idempotente.",
          "Sin SQL libre: el agente elige entre 18 herramientas, cada una una consulta SQLAlchemy parametrizada, lo que elimina la inyección SQL por construcción.",
          "86,4 % de aciertos en una evaluación sobre el pipeline real, contrastada con valores calculados por SQL directo; respuesta completa en ~4,2 s (mediana).",
          "Dashboard proactivo nocturno, memoria de usuario (RAG), modo voz 100 % local y 56 tests con pytest.",
        ],
        link: "https://github.com/0xjoseangel/reto-unicaja",
        skills: ["Python", "FastAPI", "LangGraph", "SQLAlchemy", "React", "Docker"],
      },
      {
        name: "Selección de Carteras con Metaheurísticas",
        description:
          "Implementación en C++17 y comparación experimental de 14 metaheurísticas (Greedy, búsqueda local, ILS, enfriamiento simulado, genéticos y meméticos) para construir carteras de inversión que maximizan rentabilidad frente a riesgo.",
        highlights: [
          "Evaluado sobre IBEX 35, S&P 100 y S&P 500 (hasta 457 activos): entrenamiento con datos 2015-2024 y validación fuera de muestra en 2025, con 50 semillas por algoritmo.",
          "El memético AM-Best obtiene el mejor resultado en entrenamiento y en test en los tres índices.",
          "Evaluación O(N²) paralelizada con OpenMP y compilación optimizada (hasta ~40× más rápida) y CI multiplataforma con GitHub Actions.",
          "Estudios de sensibilidad de parámetros (α de BLX-α, temperatura y vecindario del enfriamiento simulado) documentados en tres memorias técnicas.",
        ],
        link: "https://github.com/0xjoseangel/portfolio",
        skills: ["C++", "OpenMP", "Metaheurísticas", "Optimización"],
      },
      {
        name: "Danger Theory — Detección de Crisis Financieras",
        description:
          "Investigación que aplica la Teoría del Peligro de la inmunología a la detección temprana de crisis cambiarias: un algoritmo genético evoluciona agentes que aprenden sus propias reglas a partir de señales de estrés del mercado.",
        highlights: [
          "El agente predice el «Miércoles Negro» (crisis de la libra, 1992) con un día de antelación, basándose casi solo en la intervención del Banco de Inglaterra y el desempleo, sin mirar el precio.",
          "Validado con una prueba sintética («trampa de valor») y por transferencia a la crisis del peso mexicano (1994), donde recalibra su umbral, evita falsos positivos y predice el colapso.",
          "Paper académico y libro interactivo publicado en GitHub Pages, en coautoría y bajo la supervisión del Dr. José Luis Sáez Lozano (UGR).",
        ],
        link: "https://github.com/0xjoseangel/DANGER-THEORY-DT-",
        skills: ["Python", "Pandas", "Algoritmos genéticos", "Jupyter"],
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
        items: ["C++", "C", "Python", "SQL", "Java", "JavaScript", "Ruby", "Bash"],
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
          "Conversational financial assistant built for the Cátedra Unicaja challenge (University of Granada): natural-language questions about your transactions with LLM-generated charts, and operations (Bizum transfers, investments) that never run without your approval.",
        highlights: [
          "LangGraph graph that separates deciding from executing: the LLM only proposes, a deterministic step checks funds and limits, the graph pauses until you approve, and execution happens in a single idempotent transaction.",
          "No free-form SQL: the agent picks from 18 tools, each a parameterized SQLAlchemy query, which rules out SQL injection by design.",
          "86.4% accuracy in an evaluation on the real pipeline, checked against values computed with direct SQL; ~4.2 s median full response time.",
          "Nightly proactive dashboard, user memory (RAG), fully local voice mode, and 56 pytest tests.",
        ],
        link: "https://github.com/0xjoseangel/reto-unicaja",
        skills: ["Python", "FastAPI", "LangGraph", "SQLAlchemy", "React", "Docker"],
      },
      {
        name: "Portfolio Selection with Metaheuristics",
        description:
          "C++17 implementation and experimental comparison of 14 metaheuristics (Greedy, local search, ILS, simulated annealing, genetic and memetic algorithms) to build investment portfolios that maximize return against risk.",
        highlights: [
          "Evaluated on the IBEX 35, S&P 100, and S&P 500 (up to 457 assets): trained on 2015-2024 data with out-of-sample validation on 2025, 50 seeds per algorithm.",
          "The memetic AM-Best algorithm achieves the best training and test results on all three indices.",
          "O(N²) evaluation parallelized with OpenMP and optimized builds (up to ~40× faster), with multi-platform CI on GitHub Actions.",
          "Parameter sensitivity studies (BLX-α's α, simulated annealing temperature and neighborhood) documented in three technical reports.",
        ],
        link: "https://github.com/0xjoseangel/portfolio",
        skills: ["C++", "OpenMP", "Metaheuristics", "Optimization"],
      },
      {
        name: "Danger Theory — Financial Crisis Detection",
        description:
          "Research applying immunology's Danger Theory to early detection of currency crises: a genetic algorithm evolves agents that learn their own rules from market stress signals.",
        highlights: [
          "The agent predicts \"Black Wednesday\" (the 1992 sterling crisis) one day in advance, relying almost entirely on Bank of England intervention and unemployment, without looking at the price.",
          "Validated with a synthetic \"value trap\" test and by transfer to the 1994 Mexican peso crisis, where it recalibrates its threshold, avoids false positives, and predicts the collapse.",
          "Academic paper and interactive book published on GitHub Pages, co-authored and supervised by Dr. José Luis Sáez Lozano (University of Granada).",
        ],
        link: "https://github.com/0xjoseangel/DANGER-THEORY-DT-",
        skills: ["Python", "Pandas", "Genetic Algorithms", "Jupyter"],
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
