/* ══════════════════════════════════════════════════════════════
   PORTAFOLIO — Ignacio Bustos Soto
   i18n.js · Traducciones ES / EN
   ──────────────────────────────────────────────────────────────
   Separado de main.js para facilitar edición de contenido sin
   tocar la lógica de la aplicación.
   Para añadir un idioma nuevo: agregar una clave al objeto con
   las mismas keys que 'es' y 'en'.
   ══════════════════════════════════════════════════════════════ */

"use strict";

/* global window */
window.translations = {
  es: {
    // Accesibilidad
    skip_link: "Saltar al contenido principal",

    // Navbar
    nav_about: "Sobre mí",
    nav_experience: "Experiencia",
    nav_education: "Educación",
    nav_skills: "Habilidades",
    nav_projects: "Proyectos",
    nav_contact: "Contacto",

    // Hero
    hero_greeting: "Hola, soy",
    hero_title: "Ingeniero de Software",
    hero_subtitle: "Full Stack Developer",
    hero_cloud: "AWS Cloud Practitioner",
    hero_wip: "en proceso",
    hero_cta_projects: "Ver Proyectos",
    hero_cta_contact: "Contacto",

    // About
    about_title: "Sobre mí",
    about_p1:
      "Soy desarrollador Full Stack en búsqueda de nuevos retos profesionales, con una base sólida " +
      "y una gran pasión por la tecnología. Mis estudios me han permitido adquirir habilidades en " +
      "programación y desarrollo web.",
    about_p2:
      "Mi experiencia como docente me proporcionó competencias como la comunicación efectiva, " +
      "trabajo en equipo y gestión de proyectos, lo que me convierte en un candidato valioso para " +
      "cualquier equipo de desarrollo. Soy proactivo, curioso, autodidacta y con un fuerte enfoque " +
      "en el aprendizaje continuo.",
    about_p3:
      "Actualmente iniciando mi camino en cloud computing con AWS, con conocimientos en los " +
      "servicios fundamentales de la plataforma (EC2, S3, IAM, RDS, Lambda), modelos de " +
      "responsabilidad compartida, seguridad básica y modelos de costo. En proceso de obtener " +
      "la certificación AWS Certified Cloud Practitioner (CLF-C02).",
    stat_years: "Años de experiencia",
    stat_techs: "Tecnologías",
    stat_certs: "Certificaciones",

    // Experiencia
    exp_title: "Experiencia",
    exp1_role: "Ingeniero de Software",
    exp1_date: "jul. 2026 – Presente",
    exp1_desc:
      "Soporte y desarrollo en Microsoft Dynamics 365. Participación en proyectos de ingeniería de software para clientes de la empresa.",
    exp2_role: "Pasantía — Test Automation Engineer",
    exp2_date: "ago. 2025 – sep. 2025",
    exp2_desc:
      "Pasantía en automatización de pruebas, trabajando con herramientas de QA modernas como Playwright y Appium para pruebas E2E y mobile.",
    exp3_role: "Profesor de Ciencias",
    exp3_date: "may. 2025 – ago. 2025",
    exp3_desc:
      "Docencia en ciencias naturales. Planificación de clases, evaluaciones y gestión de documentación curricular.",
    exp4_role: "Profesor Particular",
    exp4_date: "mar. 2023 – ago. 2025",
    exp4_desc:
      "Clases particulares de ciencias y tecnología. Durante este período también realicé el bootcamp de desarrollo Full Stack en Desafío Latam.",
    exp4_company: "Autónomo",
    exp5_role: "Profesor de Ciencias — Secundaria",
    exp5_date: "mar. 2020 – dic. 2022",
    exp5_desc:
      "Profesor de biología y ciencias naturales en educación secundaria. Comunicación efectiva, trabajo en equipo y organización de documentación académica.",

    // Tags genéricos
    tag_teaching: "Docencia",
    tag_planning: "Planificación",
    tag_freelance: "Freelance",
    tag_tutoring: "Tutorías",
    tag_communication: "Comunicación",

    // Educación
    edu_title: "Educación & Certificaciones",
    edu1_degree: "Desarrollador Full Stack JavaScript",
    edu1_period: "mar. 2023 – abr. 2024",
    edu1_desc:
      "Desarrollo de páginas web, contenido digital/multimedia y recursos informáticos. Bootcamp intensivo Full Stack con JavaScript, Node.js, React y PostgreSQL.",
    edu2_degree: "Profesor de Biología y Ciencias Naturales",
    edu2_period: "mar. 2008 – ene. 2013",
    edu2_desc:
      "Licenciatura en Educación con mención en Biología y Ciencias Naturales. Formación en pedagogía, comunicación y gestión educativa.",
    certs_title: "Certificaciones",
    cert_aws: "AWS Cloud Practitioner (CLF-C02)",

    // Habilidades
    skills_title: "Habilidades",
    skills_frontend: "Frontend",
    skills_backend: "Backend",
    skills_qa: "QA & Testing",
    skills_tools: "Herramientas",
    skills_soft: "Habilidades Blandas",
    skills_cloud: "Cloud (AWS)",
    skill_shared_resp: "Responsabilidad compartida",
    skill_cloud_cost: "Modelos de costo",
    soft_communication: "Comunicación efectiva",
    soft_teamwork: "Trabajo en equipo",
    soft_selflearning: "Autodidacta",
    soft_proactive: "Proactividad",
    soft_docs: "Gestión de documentación",

    // Proyectos
    proj_title: "Proyectos",
    proj1_desc:
      "Suite de pruebas de API usando Postman para el programa de formación ADL Test Automation Engineer. Incluye colecciones de tests, variables de entorno y reportes.",
    proj2_desc:
      "Pruebas de frontend automatizadas con Playwright para el programa ADL Test Automation Engineer. Tests E2E sobre interfaces web reales.",
    proj3_desc:
      "Repositorio de pruebas end-to-end con Playwright. Implementación de patrones POM (Page Object Model) y buenas prácticas de automatización de QA.",
    proj4_desc:
      "API RESTful construida con Node.js y Express. Implementación de endpoints CRUD, manejo de rutas, middlewares y conexión a base de datos.",
    proj5_desc:
      "Aplicación fullstack con sistema de likes. Frontend dinámico, backend con Node.js + Express y base de datos PostgreSQL. Operaciones CRUD completas.",
    proj_more: "Ver más proyectos en GitHub",
    proj_github_btn: "Ver perfil",

    // Contacto
    contact_title: "Contacto",
    contact_intro:
      "¿Tienes un proyecto en mente o quieres trabajar juntos? No dudes en escribirme.",

    // Footer
    footer_made: "Hecho con",
    footer_by: "por",
  },

  en: {
    // Accesibilidad
    skip_link: "Skip to main content",

    // Navbar
    nav_about: "About",
    nav_experience: "Experience",
    nav_education: "Education",
    nav_skills: "Skills",
    nav_projects: "Projects",
    nav_contact: "Contact",

    // Hero
    hero_greeting: "Hi, I'm",
    hero_title: "Software Engineer",
    hero_subtitle: "Full Stack Developer",
    hero_cloud: "AWS Cloud Practitioner",
    hero_wip: "in progress",
    hero_cta_projects: "View Projects",
    hero_cta_contact: "Contact",

    // About
    about_title: "About me",
    about_p1:
      "I'm a Full Stack Developer looking for new professional challenges, with a solid foundation " +
      "and a great passion for technology. My studies have allowed me to acquire skills in " +
      "programming and web development.",
    about_p2:
      "My experience as a teacher provided me with skills such as effective communication, " +
      "teamwork and project management, making me a valuable candidate for any development team. " +
      "I'm proactive, curious, self-taught and strongly focused on continuous learning.",
    about_p3:
      "Currently starting my cloud computing journey with AWS, with foundational knowledge of " +
      "core platform services (EC2, S3, IAM, RDS, Lambda), shared responsibility models, basic " +
      "security and cost models. In the process of obtaining the AWS Certified Cloud Practitioner " +
      "(CLF-C02) certification.",
    stat_years: "Years of experience",
    stat_techs: "Technologies",
    stat_certs: "Certifications",

    // Experience
    exp_title: "Experience",
    exp1_role: "Software Engineer",
    exp1_date: "Jul. 2026 – Present",
    exp1_desc:
      "Support and development on Microsoft Dynamics 365. Participation in software engineering projects for the company's clients.",
    exp2_role: "Internship — Test Automation Engineer",
    exp2_date: "Aug. 2025 – Sep. 2025",
    exp2_desc:
      "Internship in test automation, working with modern QA tools such as Playwright and Appium for E2E and mobile testing.",
    exp3_role: "Science Teacher",
    exp3_date: "May. 2025 – Aug. 2025",
    exp3_desc:
      "Natural sciences teaching. Lesson planning, assessments and curricular documentation management.",
    exp4_role: "Private Tutor",
    exp4_date: "Mar. 2023 – Aug. 2025",
    exp4_desc:
      "Private tutoring in science and technology. During this period I also completed the Full Stack Development bootcamp at Desafío Latam.",
    exp4_company: "Freelance",
    exp5_role: "High School Science Teacher",
    exp5_date: "Mar. 2020 – Dec. 2022",
    exp5_desc:
      "Biology and natural sciences teacher in secondary education. Effective communication, teamwork and academic documentation management.",

    // Generic tags
    tag_teaching: "Teaching",
    tag_planning: "Planning",
    tag_freelance: "Freelance",
    tag_tutoring: "Tutoring",
    tag_communication: "Communication",

    // Education
    edu_title: "Education & Certifications",
    edu1_degree: "Full Stack JavaScript Developer",
    edu1_period: "Mar. 2023 – Apr. 2024",
    edu1_desc:
      "Web development, digital/multimedia content and computer resources. Intensive Full Stack bootcamp with JavaScript, Node.js, React and PostgreSQL.",
    edu2_degree: "Biology and Natural Sciences Teacher",
    edu2_period: "Mar. 2008 – Jan. 2013",
    edu2_desc:
      "Education degree with a focus on Biology and Natural Sciences. Training in pedagogy, communication and educational management.",
    certs_title: "Certifications",
    cert_aws: "AWS Cloud Practitioner (CLF-C02)",

    // Skills
    skills_title: "Skills",
    skills_frontend: "Frontend",
    skills_backend: "Backend",
    skills_qa: "QA & Testing",
    skills_tools: "Tools",
    skills_soft: "Soft Skills",
    skills_cloud: "Cloud (AWS)",
    skill_shared_resp: "Shared responsibility model",
    skill_cloud_cost: "Cost models",
    soft_communication: "Effective communication",
    soft_teamwork: "Teamwork",
    soft_selflearning: "Self-taught",
    soft_proactive: "Proactivity",
    soft_docs: "Documentation management",

    // Projects
    proj_title: "Projects",
    proj1_desc:
      "API testing suite using Postman for the ADL Test Automation Engineer training program. Includes test collections, environment variables and reports.",
    proj2_desc:
      "Automated frontend testing with Playwright for the ADL Test Automation Engineer program. E2E tests on real web interfaces.",
    proj3_desc:
      "End-to-end testing repository with Playwright. Implementation of POM (Page Object Model) patterns and QA automation best practices.",
    proj4_desc:
      "RESTful API built with Node.js and Express. CRUD endpoint implementation, route handling, middlewares and database connection.",
    proj5_desc:
      "Fullstack application with a likes system. Dynamic frontend, Node.js + Express backend and PostgreSQL database. Full CRUD operations.",
    proj_more: "See more projects on GitHub",
    proj_github_btn: "View profile",

    // Contact
    contact_title: "Contact",
    contact_intro:
      "Have a project in mind or want to work together? Feel free to reach out.",

    // Footer
    footer_made: "Made with",
    footer_by: "by",
  },
};
