export type Language = "en" | "es";

export type LocalizedValue<T> = T | Partial<Record<Language, T>>;

export const DEFAULT_LANGUAGE: Language = "en";

export const languageNames: Record<Language, string> = {
  en: "English",
  es: "Spanish",
};

export const i18n = {
  en: {
    navigation: {
      home: "Home",
      about: "About",
      projects: "Projects",
      skills: "Skills",
      workEducation: "Work & Education",
      recommendations: "Recommendations",
      navigation: "Navigation",
      toggleMenu: "Toggle menu",
    },
    sections: {
      introduction: "Introduction",
      about: "About",
      projects: "Projects",
      skills: "Skills",
      resume: "Resume",
      recommendations: "Recommendations",
      linkedinRecommendations: "LinkedIn Recommendations",
      workExperience: "Work Experience",
      education: "Education",
      certifications: "Certifications & Courses",
      workProjects: "Work Projects",
      personalProjects: "Personal Projects",
      allProjects: "All Projects",
      projectGallery: "Project Gallery",
      technologiesUsed: "Technologies Used",
      keyFeatures: "Key Features",
      projectHighlights: "Project Highlights",
    },
    actions: {
      downloadResume: "Download Resume",
      downloadCoverLetter: "Download Cover Letter",
      viewAllProjects: "View All Projects",
      backToPortfolio: "Back to Portfolio",
      allProjects: "All projects",
      visitWebsite: "Visit Website",
      viewLiveDemo: "View Live Demo",
      viewOnGithub: "View on GitHub",
      viewOnLinkedin: "View on LinkedIn",
      showLess: "Show less",
      showAllPhotos: (count: number) => `Show all (${count} photos)`,
    },
    labels: {
      specialization: "Specialization:",
      basedIn: "Based in:",
      email: "Email:",
      courseBy: "Course by",
      at: "at",
      timeline: "Timeline:",
      role: "Role:",
      team: "Team:",
      profileImageAlt: "Profile",
      previousRecommendation: "Previous recommendation",
      nextRecommendation: "Next recommendation",
      goToRecommendation: (index: number) => `Go to recommendation ${index}`,
      closeModal: "Close modal",
      previousImage: "Previous image",
      nextImage: "Next image",
      imageAlt: (title: string, index: number) => `${title} - Image ${index}`,
    },
    pages: {
      projectsTitle: "My Projects",
      projectsDescription: (count: number) =>
        `A collection of ${count} projects showcasing web applications, mobile apps, and SaaS platforms built with modern technologies and best practices.`,
    },
    fallback: {
      loadProjects:
        "We couldn't load the projects in time. Please check your connection and try again.",
      projectDetails: "The project details took too long to load.",
    },
    footer: "© 2025 Carlos Aracena. All rights reserved.",
  },
  es: {
    navigation: {
      home: "Inicio",
      about: "Sobre mi",
      projects: "Proyectos",
      skills: "Habilidades",
      workEducation: "Trabajo y educacion",
      recommendations: "Recomendaciones",
      navigation: "Navegacion",
      toggleMenu: "Alternar menu",
    },
    sections: {
      introduction: "Introduccion",
      about: "Sobre mi",
      projects: "Proyectos",
      skills: "Habilidades",
      resume: "Curriculum",
      recommendations: "Recomendaciones",
      linkedinRecommendations: "Recomendaciones de LinkedIn",
      workExperience: "Experiencia laboral",
      education: "Educacion",
      certifications: "Certificaciones y cursos",
      workProjects: "Proyectos profesionales",
      personalProjects: "Proyectos personales",
      allProjects: "Todos los proyectos",
      projectGallery: "Galeria del proyecto",
      technologiesUsed: "Tecnologias usadas",
      keyFeatures: "Funciones clave",
      projectHighlights: "Puntos destacados",
    },
    actions: {
      downloadResume: "Descargar CV",
      downloadCoverLetter: "Descargar carta",
      viewAllProjects: "Ver todos",
      backToPortfolio: "Volver al portfolio",
      allProjects: "Todos los proyectos",
      visitWebsite: "Visitar sitio",
      viewLiveDemo: "Ver demo",
      viewOnGithub: "Ver en GitHub",
      viewOnLinkedin: "Ver en LinkedIn",
      showLess: "Mostrar menos",
      showAllPhotos: (count: number) => `Mostrar todas (${count} fotos)`,
    },
    labels: {
      specialization: "Especializacion:",
      basedIn: "Base:",
      email: "Email:",
      courseBy: "Curso por",
      at: "en",
      timeline: "Tiempo:",
      role: "Rol:",
      team: "Equipo:",
      profileImageAlt: "Perfil",
      previousRecommendation: "Recomendacion anterior",
      nextRecommendation: "Siguiente recomendacion",
      goToRecommendation: (index: number) => `Ir a recomendacion ${index}`,
      closeModal: "Cerrar modal",
      previousImage: "Imagen anterior",
      nextImage: "Siguiente imagen",
      imageAlt: (title: string, index: number) => `${title} - Imagen ${index}`,
    },
    pages: {
      projectsTitle: "Mis proyectos",
      projectsDescription: (count: number) =>
        `Una coleccion de ${count} proyectos que muestran aplicaciones web, apps moviles y plataformas SaaS creadas con tecnologias modernas y buenas practicas.`,
    },
    fallback: {
      loadProjects:
        "No pudimos cargar los proyectos a tiempo. Revisa tu conexion e intenta de nuevo.",
      projectDetails: "Los detalles del proyecto tardaron demasiado en cargar.",
    },
    footer: "© 2025 Carlos Aracena. Todos los derechos reservados.",
  },
} as const;

function isLocalizedObject<T>(
  value: LocalizedValue<T> | null | undefined
): value is Partial<Record<Language, T>> {
  return (
    !!value &&
    typeof value === "object" &&
    !Array.isArray(value) &&
    ("en" in value || "es" in value)
  );
}

export function localize<T>(
  value: LocalizedValue<T> | null | undefined,
  language: Language,
  fallbackLanguage: Language = DEFAULT_LANGUAGE
): T | undefined {
  if (!isLocalizedObject(value)) {
    return value ?? undefined;
  }

  return value[language] ?? value[fallbackLanguage] ?? value.en ?? value.es;
}

export function localizeArray<T>(
  value: LocalizedValue<T[]> | null | undefined,
  language: Language
): T[] {
  return localize(value, language) ?? [];
}
