"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

type Language = "es" | "en";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [language, setLanguage] = useState<Language>("es");

  // Load language from localStorage
  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") as Language;
    if (savedLanguage && (savedLanguage === "es" || savedLanguage === "en")) {
      setLanguage(savedLanguage);
    }
  }, []);

  // Save language to localStorage
  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem("language", lang);
  };

  const t = (key: string): string => {
    const keys = key.split(".");
    let value: any = translations[language];

    for (const k of keys) {
      if (value && typeof value === "object") {
        value = value[k];
      } else {
        return key;
      }
    }

    return typeof value === "string" ? value : key;
  };

  return (
    <LanguageContext.Provider
      value={{ language, setLanguage: handleSetLanguage, t }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

const translations: Record<Language, any> = {
  es: {
    hero: {
      title1: "Sembrando Esperanza,",
      title2: "Cosechando Vida",
      description:
        "Acompañamos a familias vulnerables en La Unión, Valle del Cauca, brindando alimentación, educación y amor desde la fe en Jesús.",
      donateNow: "Donar Ahora",
      howToHelp: "Cómo Ayudar",
    },
    mission: {
      title: "Nuestra Misión",
      description:
        "Somos una fundación cristiana sin ánimo de lucro, comprometida con el desarrollo integral de niños, adolescentes y familias en situación de vulnerabilidad en La Unión, Valle del Cauca.",
      faithLove: "Fe y Amor",
      faithLoveDesc:
        "Compartimos el amor de Jesús a través de acciones concretas que transforman vidas y restauran esperanzas.",
      community: "Comunidad",
      communityDesc:
        "Construimos una red de apoyo donde cada familia encuentra dignidad, respeto y oportunidades de crecimiento.",
      education: "Educación",
      educationDesc:
        "Fortalecemos capacidades a través de formación, acompañamiento y herramientas para un futuro mejor.",
      vision: "Nuestra Visión",
      visionDesc:
        "Ser reconocidos en Colombia como un modelo de transformación social cristiana, donde cada persona descubre su valor y potencial en Cristo, construyendo comunidades prósperas y llenas de esperanza.",
      values: "Nuestros Valores",
      value1: "Amor: Base de todo nuestro servicio",
      value2: "Dignidad: Respeto a cada persona",
      value3: "Transparencia: Gestión honesta de recursos",
      value4: "Excelencia: Compromiso con la calidad",
    },
    problem: {
      title: "El Desafío que Enfrentamos",
      intro:
        "En La Unión, Valle del Cauca, cientos de familias enfrentan diariamente la dura realidad de la pobreza extrema, la desnutrición infantil y la falta de oportunidades educativas.",
      subtitle: "La realidad que queremos cambiar:",
      point1: "Niños que asisten a la escuela sin haber desayunado",
      point2: "Madres cabeza de hogar sin recursos para alimentar a sus hijos",
      point3:
        "Familias viviendo en condiciones precarias sin acceso a servicios básicos",
      point4:
        "Jóvenes sin oportunidades educativas o laborales que construyan un futuro digno",
      conclusion:
        "Esta situación no solo afecta la salud física de las familias, sino también su dignidad, autoestima y esperanza. Pero creemos que juntos podemos cambiar esta historia.",
      verse: '"Yo soy el pan de vida; el que a mí viene, nunca tendrá hambre"',
      verseRef: "Juan 6:35",
    },
    impact: {
      title: "Nuestro Impacto",
      description:
        "Cada donación, cada hora de voluntariado, cada oración... todo se transforma en vidas restauradas y esperanzas renovadas.",
      stat1: "Familias Beneficiadas",
      stat1Desc: "Acompañamiento mensual",
      stat2: "Niños y Adolescentes",
      stat2Desc: "En programas educativos",
      stat3: "Impacto Estimado",
      stat3Desc: "Intervención en la comunidad local",
      stat4: "De Compromiso",
      stat4Desc: "Transformando la comunidad",
      stories: "Historias de Transformación",
      testimony1:
        '"Antes mis hijos iban a la escuela sin desayunar. Ahora, gracias a la fundación, no solo reciben alimentación, sino también apoyo con sus tareas y valores cristianos."',
      testimony1Author: "— María, madre de 3 niños",
      testimony2:
        "\"El programa 'Escalando Peldaños' me dio la oportunidad de continuar mis estudios. Hoy estoy en la universidad gracias al apoyo de la fundación.\"",
      testimony2Author: "— Julián, beneficiario del programa",
      activities: "Nuestras Actividades Diarias",
      activity1: "Desayunos y almuerzos nutritivos para niños y familias",
      activity2: "Apoyo escolar y refuerzo académico",
      activity3: "Talleres de valores y formación cristiana",
      activity4: "Acompañamiento psicosocial a familias",
      activity5: "Capacitación en oficios y emprendimiento",
      activity6: "Entrega de kits escolares y útiles",
    },
    escalando: {
      title: "Escalando Peldaños",
      description:
        "Nuestro programa insignia que acompaña a niños y jóvenes en su camino hacia un futuro lleno de oportunidades, escalando paso a paso hacia sus sueños y metas.",
      description2:
        'Cada "peldaño" representa una etapa de crecimiento: desde el apoyo nutricional y académico básico, hasta becas educativas y orientación vocacional para jóvenes que aspiran a la educación superior.',
      badge1: "Transformando Futuros",
      badge2: "Un peldaño a la vez",
      objectives: "Objetivos del Programa",
      obj1: "Garantizar alimentación diaria nutritiva",
      obj2: "Mejorar rendimiento académico",
      obj3: "Desarrollar habilidades para la vida",
      obj4: "Fomentar valores cristianos",
      components: "Componentes Clave",
      comp1: "Programa nutricional completo",
      comp2: "Refuerzo escolar personalizado",
      comp3: "Talleres de arte y recreación",
      comp4: "Apoyo psicosocial familiar",
      results: "Resultados Esperados",
      res1: "Niños bien alimentados y sanos",
      res2: "Mejora en calificaciones escolares",
      res3: "Jóvenes con proyecto de vida claro",
      res4: "Familias fortalecidas y esperanzadas",
    },
    howToHelp: {
      title: "Cómo Puedes Ayudar",
      description:
        "Hay muchas formas de ser parte de esta transformación. Cada gesto de amor cuenta y multiplica la esperanza.",
      donate: "Dona",
      donateDesc:
        "Tu donación económica permite que más familias reciban alimentación, educación y acompañamiento integral. Cada aporte transforma vidas.",
      donateNow: "Donar Ahora",
      volunteer: "Voluntariado",
      volunteerDesc:
        "Comparte tu tiempo y talentos. Necesitamos voluntarios para cocina, apoyo escolar, talleres, acompañamiento y actividades recreativas.",
      volunteerBtn: "Ser Voluntario",
      partnerships: "Alianzas",
      partnershipsDesc:
        "Si representas una empresa, iglesia o institución, podemos construir alianzas estratégicas para multiplicar el impacto en la comunidad.",
      partnershipsBtn: "Crear Alianza",
      otherWays: "Otras Formas de Apoyar",
      way1: "Donaciones en especie: Alimentos no perecederos, útiles escolares, ropa",
      way2: "Apadrinamiento: Patrocina la educación de un niño específico",
      way3: "Eventos solidarios: Organiza eventos para recaudar fondos",
      way4: "Difusión: Comparte nuestra misión en redes sociales",
      way5: "Oración: Intercede por las familias y nuestro trabajo",
      way6: "Capacitación: Comparte tus conocimientos profesionales",
      donationInfo: "Información para Donaciones",
      bankData: "Datos Bancarios",
      bank: "Banco:",
      accountType: "Tipo de cuenta:",
      accountNumber: "Número:",
      holder: "Titular:",
      nit: "NIT:",
      contact: "Contacto",
      taxDeductible:
        "* Las donaciones son deducibles de impuestos según la normativa colombiana",
    },
    footer: {
      description:
        "Fundación cristiana sin ánimo de lucro comprometida con el desarrollo integral de familias vulnerables en La Unión, Valle del Cauca.",
      quickLinks: "Enlaces Rápidos",
      home: "Inicio",
      about: "Quiénes Somos",
      programs: "Programas",
      howToHelp: "Cómo Ayudar",
      donate: "Donar",
      contact: "Contacto",
      nitLabel: "NIT:",
      legalPersonality: "Personería Jurídica:",
      character: "Carácter:",
      nonprofit: "Sin ánimo de lucro - ESAL",
      legalRep: "Representante Legal:",
      targetPop: "Población Objetivo:",
      targetPopValue: "Niños, adolescentes y familias vulnerables",
      coverage: "Cobertura:",
      coverageValue: "La Unión, Valle del Cauca",
      madeWith: "Hecho con",
      forLives: "para transformar vidas",
      rights: "Todos los derechos reservados.",
    },
  },
  en: {
    hero: {
      title1: "Sowing Hope,",
      title2: "Harvesting Life",
      description:
        "We support vulnerable families in La Unión, Valle del Cauca, providing food, education, and love through faith in Jesus.",
      donateNow: "Donate Now",
      howToHelp: "How to Help",
    },
    mission: {
      title: "Our Mission",
      description:
        "We are a Christian non-profit foundation committed to the integral development of children, adolescents, and families in vulnerable situations in La Unión, Valle del Cauca.",
      faithLove: "Faith & Love",
      faithLoveDesc:
        "We share Jesus' love through concrete actions that transform lives and restore hope.",
      community: "Community",
      communityDesc:
        "We build a support network where every family finds dignity, respect, and opportunities for growth.",
      education: "Education",
      educationDesc:
        "We strengthen capacities through training, support, and tools for a better future.",
      vision: "Our Vision",
      visionDesc:
        "To be recognized in Colombia as a model of Christian social transformation, where every person discovers their value and potential in Christ, building prosperous communities full of hope.",
      values: "Our Values",
      value1: "Love: Foundation of all our service",
      value2: "Dignity: Respect for every person",
      value3: "Transparency: Honest resource management",
      value4: "Excellence: Commitment to quality",
    },
    problem: {
      title: "The Challenge We Face",
      intro:
        "In La Unión, Valle del Cauca, hundreds of families face daily the harsh reality of extreme poverty, child malnutrition, and lack of educational opportunities.",
      subtitle: "The reality we want to change:",
      point1: "Children going to school without breakfast",
      point2: "Single mothers without resources to feed their children",
      point3:
        "Families living in precarious conditions without access to basic services",
      point4:
        "Young people without educational or job opportunities to build a dignified future",
      conclusion:
        "This situation not only affects families' physical health but also their dignity, self-esteem, and hope. But we believe that together we can change this story.",
      verse:
        '"I am the bread of life; whoever comes to me will never be hungry"',
      verseRef: "John 6:35",
    },
    impact: {
      title: "Our Impact",
      description:
        "Every donation, every volunteer hour, every prayer... everything transforms into restored lives and renewed hope.",
      stat1: "Families Benefited",
      stat1Desc: "Monthly support",
      stat2: "Children and Adolescents",
      stat2Desc: "In educational programs",
      stat3: "Estimated Impact",
      stat3Desc: "Local community intervention",
      stat4: "Of Commitment",
      stat4Desc: "Transforming the community",
      stories: "Transformation Stories",
      testimony1:
        '"Before, my children went to school without breakfast. Now, thanks to the foundation, they not only receive food but also help with their homework and Christian values."',
      testimony1Author: "— María, mother of 3 children",
      testimony2:
        "\"The 'Climbing Steps' program gave me the opportunity to continue my studies. Today I am in university thanks to the foundation's support.\"",
      testimony2Author: "— Julián, program beneficiary",
      activities: "Our Daily Activities",
      activity1: "Nutritious breakfasts and lunches for children and families",
      activity2: "School support and academic reinforcement",
      activity3: "Values workshops and Christian formation",
      activity4: "Psychosocial support for families",
      activity5: "Trade and entrepreneurship training",
      activity6: "School kits and supplies distribution",
    },
    escalando: {
      title: "Climbing Steps",
      description:
        "Our flagship program that accompanies children and youth on their path to a future full of opportunities, climbing step by step towards their dreams and goals.",
      description2:
        'Each "step" represents a stage of growth: from basic nutritional and academic support to educational scholarships and vocational guidance for young people aspiring to higher education.',
      badge1: "Transforming Futures",
      badge2: "One step at a time",
      objectives: "Program Objectives",
      obj1: "Ensure daily nutritious meals",
      obj2: "Improve academic performance",
      obj3: "Develop life skills",
      obj4: "Foster Christian values",
      components: "Key Components",
      comp1: "Complete nutritional program",
      comp2: "Personalized school reinforcement",
      comp3: "Art and recreation workshops",
      comp4: "Family psychosocial support",
      results: "Expected Results",
      res1: "Well-fed and healthy children",
      res2: "Improved school grades",
      res3: "Youth with clear life projects",
      res4: "Strengthened and hopeful families",
    },
    howToHelp: {
      title: "How You Can Help",
      description:
        "There are many ways to be part of this transformation. Every gesture of love counts and multiplies hope.",
      donate: "Donate",
      donateDesc:
        "Your financial donation allows more families to receive food, education, and comprehensive support. Every contribution transforms lives.",
      donateNow: "Donate Now",
      volunteer: "Volunteer",
      volunteerDesc:
        "Share your time and talents. We need volunteers for cooking, school support, workshops, mentoring, and recreational activities.",
      volunteerBtn: "Become a Volunteer",
      partnerships: "Partnerships",
      partnershipsDesc:
        "If you represent a company, church, or institution, we can build strategic partnerships to multiply impact in the community.",
      partnershipsBtn: "Create Partnership",
      otherWays: "Other Ways to Support",
      way1: "In-kind donations: Non-perishable food, school supplies, clothing",
      way2: "Sponsorship: Sponsor the education of a specific child",
      way3: "Charity events: Organize fundraising events",
      way4: "Outreach: Share our mission on social media",
      way5: "Prayer: Intercede for families and our work",
      way6: "Training: Share your professional knowledge",
      donationInfo: "Donation Information",
      bankData: "Bank Details",
      bank: "Bank:",
      accountType: "Account type:",
      accountNumber: "Number:",
      holder: "Holder:",
      nit: "Tax ID:",
      contact: "Contact",
      taxDeductible:
        "* Donations are tax deductible according to Colombian regulations",
    },
    footer: {
      description:
        "Christian non-profit foundation committed to the integral development of vulnerable families in La Unión, Valle del Cauca.",
      quickLinks: "Quick Links",
      home: "Home",
      about: "About Us",
      programs: "Programs",
      howToHelp: "How to Help",
      donate: "Donate",
      contact: "Contact",
      nitLabel: "Tax ID:",
      legalPersonality: "Legal Personality:",
      character: "Character:",
      nonprofit: "Non-profit - ESAL",
      legalRep: "Legal Representative:",
      targetPop: "Target Population:",
      targetPopValue: "Children, adolescents, and vulnerable families",
      coverage: "Coverage:",
      coverageValue: "La Unión, Valle del Cauca",
      madeWith: "Made with",
      forLives: "to transform lives",
      rights: "All rights reserved.",
    },
  },
};
