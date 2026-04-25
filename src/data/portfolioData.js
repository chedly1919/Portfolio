import portraitImg from "../assets/portrait.jpg";

const sharedLinks = {
  cv: "/bi-the-way/cv-chedly-bahles.pdf",
  linkedin: "https://www.linkedin.com/in/med-chedly-bahles-569b89272",
};

const sharedProjects = {
  biTheWay: {
    id: "bi-the-way",
    year: "2025",
    cover: "/bi-the-way/4.png?v=1",
    gallery: [
      "/bi-the-way/1.png",
      "/bi-the-way/2.png",
      "/bi-the-way/3.png",
      "/bi-the-way/4.png",
      "/bi-the-way/5.png",
      "/bi-the-way/6.png",
      "/bi-the-way/7.png",
      "/bi-the-way/8.png",
      "/bi-the-way/9.png",
      "/bi-the-way/10.png",
    ],
    tags: ["BI", "ML/DL", "Flask", "Angular", "Power BI", "Talend"],
  },
  sdlProject: {
    id: "sdl-2d",
    year: "2022",
    cover: "/bi-the-way/jeux.jpg?v=1",
    gallery: ["/bi-the-way/jeux2.png", "/bi-the-way/jeux3.png", "/bi-the-way/jeux4.png"],
    tags: ["C", "SDL", "2D Game"],
  },
  tuniTroc: {
    id: "tuni-troc",
    year: "2022",
    cover: "/bi-the-way/troc.png?v=1",
    gallery: ["/bi-the-way/troc.png"],
    tags: ["PHP 7", "JavaScript", "Oracle", "CSS"],
  },
  centreVisite: {
    id: "centre-visite",
    year: "2023",
    cover: "/bi-the-way/centre.png?v=1",
    gallery: ["/bi-the-way/centre.png"],
    tags: ["C++", "Qt", "Arduino", "Desktop"],
  },
  mrbeastShop: {
    id: "mrbeast-shop",
    year: "2024",
    cover: "/bi-the-way/mrbeastlogo.png",
    gallery: [
      "/bi-the-way/mrbest1.PNG",
      "/bi-the-way/mrbest2.PNG",
      "/bi-the-way/mrbest3.PNG",
      "/bi-the-way/mrbest4.PNG",
    ],
    tags: ["JavaFX", "FlutterFlow", "Symfony", "Web"],
  },
  agroPredict: {
    id: "agro-predict",
    year: "2024",
    cover: "/bi-the-way/agro6.PNG?v=1",
    gallery: [
      "/bi-the-way/agro1.PNG",
      "/bi-the-way/agro2.PNG",
      "/bi-the-way/agro3.PNG",
      "/bi-the-way/agro4.PNG",
      "/bi-the-way/agro5.PNG",
      "/bi-the-way/agro6.PNG",
    ],
    tags: ["Flask", "ML", "Power BI"],
  },
};

export const portfolioContent = {
  fr: {
    ui: {
      home: "Accueil",
      about: "A propos",
      aboutMe: "A propos de moi",
      experiences: "Experiences",
      experienceLead:
        "Des stages qui montrent une progression constante entre immersion, pratique metier et environnement data/BI.",
      projects: "Realisations",
      projectsSubtitle:
        "Une selection de projets ou je combine business intelligence, engineering, machine learning et produit.",
      contact: "Contact",
      resume: "Resume",
      resumeTitle: "Resume",
      resumeLead: "Consulte mon CV directement dans le portfolio ou telecharge-le en un clic.",
      resumeCardTitle: "CV de Mohamed Chedly Bahles",
      resumeCardText:
        "Cette page te permet de parcourir mon CV sans quitter le site. Le bouton de telechargement ouvre la version PDF complete.",
      education: "Education",
      skills: "Competences",
      languages: "Langues",
      downloadCV: "Telecharger le CV",
      send: "Envoyer le message",
      name: "Nom",
      message: "Message",
      backToTop: "Retour en haut",
      rights: "Tous droits reserves.",
      close: "Fermer",
      keyFeatures: "Fonctionnalites cles",
      stack: "Technologies",
      gallery: "Galerie",
      contactLead:
        "Pour un stage PFE, une collaboration ou une opportunite a forte dimension data, on peut echanger facilement.",
      primaryCta: "Voir mes projets",
      secondaryCta: "Me contacter",
      letsTalk: "Discutons de ton besoin",
      themeToggle: "Basculer le theme",
    },
    identity: {
      brand: "Mohamed Chedly Bahles",
      eyebrow: "Business Intelligence and AI",
      greeting: "Salut !",
      greetingEmoji: "👋",
      nameLead: "Je suis",
      nameAccent: "Chedly Bahles",
      subtitle:
        "Je travaille sur toute la chaine de valeur de la donnee, de l'integration a la visualisation, avec une attention particuliere a l'impact metier, la lisibilite et la qualite d'execution.",
      focus: "Power BI, Talend, Python, Machine Learning, data products",
      currentStatusLabel: "Actualite",
      currentStatusTitle: "Stage PFE en cours chez Sofrecom Tunisie",
      currentStatusText:
        "Mission de 6 mois, du 9 fevrier 2026 au 9 aout 2026, dans un cadre professionnel oriente data et transformation.",
      valueLabel: "Positionnement",
      valueText:
        "Profil hybride entre Data Engineer, BI Analyst, Data Scientist et Developpeur Full Stack, avec une preference forte pour les solutions concretes et exploitables.",
      heroRoles: [
        "Ingenieur Business Intelligence",
        "Developpeur Full Stack",
        "Data Analyst",
        "Data Scientist",
        "Data Engineer",
      ],
      heroChip: "Disponible en echange",
      heroCard: "PFE en cours chez Sofrecom Tunisie",
      email: "medchedly.bahles@esprit.tn",
      portrait: portraitImg,
      stats: [
        { value: "6+", label: "projets presentes" },
        { value: "4", label: "stages realises" },
        { value: "PFE", label: "en cours chez Sofrecom" },
      ],
    },
    links: sharedLinks,
    about: {
      intro:
        "Un profil polyvalent, structure et oriente resultat, entre Data Engineer, BI Analyst et Data Scientist.",
      bio:
        "Etudiant en 3eme annee du cycle ingenieur a ESPRIT, specialite Business Intelligence, je developpe des solutions qui relient integration de donnees, analyse, visualisation et modelisation predictive.\n\nMon objectif est de transformer des donnees complexes en outils de pilotage utiles, lisibles et directement exploitables par les equipes metier.\n\nJe suis actuellement en stage de fin d'etudes (PFE) chez Sofrecom Tunisie pour une duree de 6 mois, du 9 fevrier 2026 au 9 aout 2026.",
      education: [
        {
          title: "Baccalaureat Sciences Techniques",
          place: "Lycee IAD - La Marsa",
          period: "2020 - 2021",
        },
        {
          title: "Diplome d'ingenieur en informatique (en cours)",
          place: "ESPRIT",
          period: "2021 - Present",
        },
      ],
      skills: [
        "Power BI",
        "SQL",
        "Talend",
        "Python",
        "Flask",
        "Machine Learning",
        "Deep Learning",
        "Java",
        "PHP",
        "Spring Boot",
        "C/C++",
        "HTML/CSS",
        "JavaScript",
        "Symfony",
        "FlutterFlow",
        "Angular",
      ],
      languages: [
        { name: "Francais", level: "B2 professionnel" },
        { name: "Anglais", level: "B2 courant" },
        { name: "Arabe", level: "Langue maternelle" },
      ],
    },
    contact: {
      lead:
        "Je peux contribuer sur des sujets BI, dashboards, data apps, pipelines, reporting decisionnel et machine learning applique.",
      availabilityLabel: "Disponibilite",
      availabilityText:
        "Actuellement en stage PFE chez Sofrecom Tunisie jusqu'au 9 aout 2026.",
      quickFacts: [
        { label: "Telephone", value: "+216 29 218 186" },
        {
          label: "Email",
          value: "medchedly.bahles@esprit.tn",
          href: "mailto:medchedly.bahles@esprit.tn",
        },
        { label: "Localisation", value: "Tunis, La Marsa" },
        {
          label: "LinkedIn",
          value: "Voir le profil",
          href: sharedLinks.linkedin,
        },
      ],
    },
    experiences: [
      {
        role: "Stagiaire PFE",
        org: "Sofrecom Tunisie",
        period: "09/02/2026 - 09/08/2026",
        badge: "Experience actuelle",
        highlight: true,
        desc: "Stage de fin d'etudes en cours sur 6 mois dans un environnement professionnel oriente transformation et execution.",
      },
      {
        role: "Stagiaire ingenieur",
        org: "OMD Tunisia",
        period: "01/07/2025 - 31/08/2025",
        desc: "Stage en Business Intelligence et Machine Learning. Realisation de tableaux de bord Power BI pour MG et Tunisie Telecom, developpement de modeles predictifs et conception d'un module NLP pour la classification automatique des campagnes publicitaires.",
      },
      {
        role: "Stagiaire",
        org: "Monetique Tunisie (SMT)",
        period: "01/08/2024 - 15/09/2024",
        desc: "Stage en Business Intelligence axe sur la conception de tableaux de bord analytiques sous Power BI et la creation de mesures avancees en DAX. Contribution a la visualisation des donnees transactionnelles et a l'optimisation du reporting decisionnel.",
      },
      {
        role: "Stagiaire",
        org: "Arab Tunisian Bank (ATB)",
        period: "01/08/2023 - 31/08/2023",
        desc: "Premiere immersion dans le monde professionnel au sein d'une institution bancaire. Stage d'observation ayant permis de comprendre le fonctionnement des services financiers et la relation client en agence.",
      },
    ],
    projects: [
      {
        ...sharedProjects.biTheWay,
        title: "BI The Way - Plateforme BI et IA pour cliniques",
        summary:
          "Plateforme d'aide a la decision pour cliniques privees: dashboards par role, modeles IA/ML, DWH Talend, APIs Flask et front Angular.",
        details: {
          paragraphs: [
            "Plateforme complete de Business Intelligence et d'Intelligence Artificielle concue pour soutenir les decisions dans une clinique privee.",
            "Deux profils principaux sont pris en charge: administrateur et chef de service, chacun avec des indicateurs et des vues adaptees.",
            "Le projet relie data engineering, modelisation predictive, visualisation et une experience applicative exploitable.",
          ],
          features: [
            "Modeles IA/ML autour du length of stay, du cancer, de l'AVC, de l'analyse de sentiments et du suivi du staff.",
            "Dashboards Power BI sur les flux patients, les ressources, la satisfaction et la rentabilite.",
            "DWH en schema en etoile avec Talend, nettoyage, transformations et collecte de donnees supplementaires.",
            "APIs Flask, front Angular et logique de contenu adaptee au profil utilisateur.",
          ],
          stack: [
            "Python, Scikit-learn, TensorFlow",
            "Flask",
            "Angular",
            "Talend",
            "Power BI",
            "Face Recognition",
          ],
        },
      },
      {
        ...sharedProjects.mrbeastShop,
        title: "MrBeast - Boutique desktop, mobile et web",
        summary:
          "Suite e-commerce multi-plateforme avec JavaFX, FlutterFlow, Symfony et dashboard d'administration.",
        details: {
          paragraphs: [
            "Projet de boutique d'articles de sport declinant une meme idee sur desktop, mobile et web.",
            "L'objectif etait de couvrir plusieurs environnements tout en gardant une logique produit coherente.",
          ],
          stack: ["JavaFX", "FlutterFlow", "Symfony"],
        },
      },
      {
        ...sharedProjects.agroPredict,
        title: "AgroPredict - Application web ML et BI",
        summary:
          "Prediction et recommandation de cultures avec KNN, visualisation Power BI, chatbot et interface Flask securisee.",
        details: {
          paragraphs: [
            "Application web intelligente pour la prediction de production et la recommandation de cultures en Inde.",
            "Le projet melangeait modele ML, dashboards BI et experience utilisateur guidee par des formulaires dynamiques.",
          ],
          stack: ["Python", "Flask", "KNN", "Power BI"],
        },
      },
      {
        ...sharedProjects.centreVisite,
        title: "Gestion des equipements d'un centre de visite",
        summary:
          "Application desktop en C++/Qt avec maquette RFID Arduino pour un centre de visite technique.",
        details: {
          paragraphs: [
            "Application de gestion dediee a un centre de visite technique de vehicules.",
            "Le projet combinait interface desktop, logique metier et integration d'une maquette RFID.",
          ],
          stack: ["C++", "Qt", "Arduino"],
        },
      },
      {
        ...sharedProjects.sdlProject,
        title: "SDL Project - Jeu 2D",
        summary: "Jeu 2D en C/SDL avec affichage, collisions, assets et gameplay.",
        details: {
          paragraphs: [
            "Projet academique axe sur le developpement de mecanismes de jeu 2D avec SDL.",
            "Travail sur la logique de rendu, l'interaction, les collisions et l'integration des assets.",
          ],
          stack: ["C", "SDL"],
        },
      },
      {
        ...sharedProjects.tuniTroc,
        title: "Tuni-Troc - Plateforme d'echange de meubles",
        summary:
          "Plateforme web avec annonces, photos, recherche multicritere et messagerie integree.",
        details: {
          paragraphs: [
            "Application web orientee marketplace pour faciliter l'echange de meubles entre utilisateurs.",
            "Le projet couvrait le catalogue, la recherche filtree, les annonces et la communication entre membres.",
          ],
          stack: ["PHP 7", "JavaScript", "Oracle", "CSS"],
        },
      },
    ],
  },
  en: {
    ui: {
      home: "Home",
      about: "About",
      aboutMe: "About me",
      experiences: "Experience",
      experienceLead:
        "Internships that show steady progression from immersion to hands-on delivery in business and data contexts.",
      projects: "Projects",
      projectsSubtitle:
        "Selected work across business intelligence, engineering, machine learning and product thinking.",
      contact: "Contact",
      resume: "Resume",
      resumeTitle: "Resume",
      resumeLead: "View my resume directly inside the portfolio or download the full PDF in one click.",
      resumeCardTitle: "Mohamed Chedly Bahles Resume",
      resumeCardText:
        "This page lets you preview my resume without leaving the portfolio. The download button opens the full PDF version.",
      education: "Education",
      skills: "Skills",
      languages: "Languages",
      downloadCV: "Download CV",
      send: "Send message",
      name: "Name",
      message: "Message",
      backToTop: "Back to top",
      rights: "All rights reserved.",
      close: "Close",
      keyFeatures: "Key features",
      stack: "Tech stack",
      gallery: "Gallery",
      contactLead:
        "For internships, collaborations or product-oriented data opportunities, feel free to reach out.",
      primaryCta: "Explore projects",
      secondaryCta: "Get in touch",
      letsTalk: "Let's talk",
      themeToggle: "Toggle theme",
    },
    identity: {
      brand: "Mohamed Chedly Bahles",
      eyebrow: "Business Intelligence and AI",
      greeting: "Hi there!",
      greetingEmoji: "👋",
      nameLead: "I'm",
      nameAccent: "Chedly Bahles",
      subtitle:
        "I work across the full data value chain, from integration to analytics and dashboards, with a strong focus on business usefulness, clarity and execution quality.",
      focus: "Power BI, Talend, Python, Machine Learning, data products",
      currentStatusLabel: "Current role",
      currentStatusTitle: "Final internship currently in progress at Sofrecom Tunisia",
      currentStatusText:
        "6-month final internship running from February 9, 2026 to August 9, 2026 in a professional data and transformation environment.",
      valueLabel: "Positioning",
      valueText:
        "Hybrid profile across data engineering, BI analysis, data science and full stack development, with a preference for concrete and deployable solutions.",
      heroRoles: [
        "Business Intelligence Engineer",
        "Full Stack Developer",
        "Data Analyst",
        "Data Scientist",
        "Data Engineer",
      ],
      heroChip: "Open to connect",
      heroCard: "Final internship at Sofrecom Tunisia",
      email: "medchedly.bahles@esprit.tn",
      portrait: portraitImg,
      stats: [
        { value: "6+", label: "featured projects" },
        { value: "4", label: "internships completed" },
        { value: "PFE", label: "currently at Sofrecom" },
      ],
    },
    links: sharedLinks,
    about: {
      intro:
        "A structured, versatile and delivery-oriented profile across data engineering, BI analysis and data science.",
      bio:
        "I am a third-year engineering student at ESPRIT, specializing in Business Intelligence, and I build solutions that connect data integration, analytics, visualization and predictive modeling.\n\nMy goal is to turn complex information into clear decision tools that are useful to business teams and usable in real contexts.\n\nI am currently completing a 6-month final internship at Sofrecom Tunisia, from February 9, 2026 to August 9, 2026.",
      education: [
        {
          title: "Technical Sciences Baccalaureate",
          place: "IAD High School - La Marsa",
          period: "2020 - 2021",
        },
        {
          title: "Computer Engineering Degree (ongoing)",
          place: "ESPRIT",
          period: "2021 - Present",
        },
      ],
      skills: [
        "Power BI",
        "SQL",
        "Talend",
        "Python",
        "Flask",
        "Machine Learning",
        "Deep Learning",
        "Java",
        "PHP",
        "Spring Boot",
        "C/C++",
        "HTML/CSS",
        "JavaScript",
        "Symfony",
        "FlutterFlow",
        "Angular",
      ],
      languages: [
        { name: "French", level: "Professional B2" },
        { name: "English", level: "Fluent B2" },
        { name: "Arabic", level: "Native" },
      ],
    },
    contact: {
      lead:
        "I can contribute to BI initiatives, dashboards, analytics apps, data pipelines, decision reporting and applied machine learning work.",
      availabilityLabel: "Availability",
      availabilityText:
        "Currently completing a final internship at Sofrecom Tunisia until August 9, 2026.",
      quickFacts: [
        { label: "Phone", value: "+216 29 218 186" },
        {
          label: "Email",
          value: "medchedly.bahles@esprit.tn",
          href: "mailto:medchedly.bahles@esprit.tn",
        },
        { label: "Location", value: "Tunis, La Marsa" },
        {
          label: "LinkedIn",
          value: "Open profile",
          href: sharedLinks.linkedin,
        },
      ],
    },
    experiences: [
      {
        role: "Final Internship Trainee",
        org: "Sofrecom Tunisia",
        period: "Feb 9, 2026 - Aug 9, 2026",
        badge: "Current experience",
        highlight: true,
        desc: "Ongoing 6-month final internship in a professional environment focused on transformation and delivery.",
      },
      {
        role: "Engineering Intern",
        org: "OMD Tunisia",
        period: "07/01/2025 - 08/31/2025",
        desc: "Business Intelligence and Machine Learning internship. Built Power BI dashboards for MG and Tunisie Telecom, developed predictive models, and created an NLP module for automatic advertising campaign classification.",
      },
      {
        role: "Intern",
        org: "Monetique Tunisie (SMT)",
        period: "08/01/2024 - 09/15/2024",
        desc: "Business Intelligence internship focused on Power BI analytical dashboards and advanced DAX measures. Contributed to transactional data visualization and decision-reporting optimization.",
      },
      {
        role: "Intern",
        org: "Arab Tunisian Bank (ATB)",
        period: "08/01/2023 - 08/31/2023",
        desc: "First professional immersion within a banking institution. Observation internship focused on understanding financial services operations and customer relations in a branch environment.",
      },
    ],
    projects: [
      {
        ...sharedProjects.biTheWay,
        title: "BI The Way - BI and AI platform for clinics",
        summary:
          "Decision-support platform for private clinics with role-based dashboards, AI/ML models, Talend DWH, Flask APIs and Angular front-end.",
        details: {
          paragraphs: [
            "A complete BI and AI platform designed to support decision-making in private clinics.",
            "The system serves administrators and department heads with role-specific insights and dashboards.",
            "It connects data engineering, predictive models, analytics and a usable application layer.",
          ],
          features: [
            "AI and ML models for length of stay, cancer detection, stroke, sentiment analysis and staff tracking.",
            "Power BI dashboards covering patient flow, resources, satisfaction and profitability.",
            "Star-schema data warehouse with Talend, plus data cleaning and transformation workflows.",
            "Flask APIs, Angular front-end and profile-aware application content.",
          ],
          stack: [
            "Python, Scikit-learn, TensorFlow",
            "Flask",
            "Angular",
            "Talend",
            "Power BI",
            "Face Recognition",
          ],
        },
      },
      {
        ...sharedProjects.mrbeastShop,
        title: "MrBeast - Desktop, mobile and web shop",
        summary:
          "Multi-platform commerce suite with JavaFX, FlutterFlow, Symfony and an admin dashboard.",
        details: {
          paragraphs: [
            "A sports e-commerce concept delivered across desktop, mobile and web.",
            "The goal was to adapt one product idea to multiple platforms while keeping the experience coherent.",
          ],
          stack: ["JavaFX", "FlutterFlow", "Symfony"],
        },
      },
      {
        ...sharedProjects.agroPredict,
        title: "AgroPredict - ML and BI web app",
        summary:
          "Crop prediction and recommendation app with KNN, Power BI dashboards, chatbot support and secure Flask UI.",
        details: {
          paragraphs: [
            "An intelligent web app for crop production forecasting and recommendation in India.",
            "The product combined machine learning, BI dashboards and guided user flows.",
          ],
          stack: ["Python", "Flask", "KNN", "Power BI"],
        },
      },
      {
        ...sharedProjects.centreVisite,
        title: "Vehicle inspection center equipment management",
        summary:
          "Desktop application in C++/Qt with an Arduino RFID prototype for technical inspection workflows.",
        details: {
          paragraphs: [
            "Management software dedicated to a vehicle technical inspection center.",
            "The project combined desktop UI, business logic and RFID prototype integration.",
          ],
          stack: ["C++", "Qt", "Arduino"],
        },
      },
      {
        ...sharedProjects.sdlProject,
        title: "SDL Project - 2D game",
        summary: "2D game in C/SDL with rendering, collisions, assets and gameplay.",
        details: {
          paragraphs: [
            "Academic project focused on building a 2D game with SDL.",
            "It covered rendering logic, collisions, interactivity and asset integration.",
          ],
          stack: ["C", "SDL"],
        },
      },
      {
        ...sharedProjects.tuniTroc,
        title: "Tuni-Troc - Furniture exchange platform",
        summary:
          "Web platform with listings, photos, filtered search and integrated messaging.",
        details: {
          paragraphs: [
            "Marketplace-oriented web application designed to simplify furniture exchange between users.",
            "It included catalog browsing, filtered search, posting flows and messaging.",
          ],
          stack: ["PHP 7", "JavaScript", "Oracle", "CSS"],
        },
      },
    ],
  },
};
