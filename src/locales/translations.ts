export const translations = {
  en: {
    nav: {
      home: 'Home',
      resume: 'Resume',
      work: 'Work',
      contact: 'Contact'
    },
    home: {
      title: 'Software Developer',
      greeting: 'Hello I am',
      name: 'Wanderson Oliveira',
      description: 'I am a fullstack software developer with over five years of experience in high-impact, high-performance projects. I have worked on complex systems, Android applications, and video streaming solutions, always focused on efficiency and quality.',
      downloadCV: 'Download CV',
      viewProjects: 'View Projects',
    },
    work: {
      title: 'Featured Projects',
      subtitle: 'Showcasing my best work deployed on Vercel',
      viewLive: 'View Live',
      sourceCode: 'Source Code',
      technologies: 'Technologies',
      projectCard: {
        project1: {
          name: 'Modern Portfolio',
          description: 'A stunning portfolio website built with React, TypeScript, and Tailwind CSS featuring smooth animations and multi-language support.',
        },
        project2: {
          name: 'E-Commerce Platform',
          description: 'Full-stack e-commerce solution with payment integration, admin dashboard, and real-time inventory management.',
        },
        project3: {
          name: 'Task Management App',
          description: 'Collaborative task management application with real-time updates, user authentication, and advanced filtering.',
        },
      },
    },
    resume: {
      title: 'Professional Experience',
      subtitle: 'My journey as a developer',
      experience: 'Experience',
      skills: 'Skills',
      education: 'Education',
    },
    contact: {
      title: 'Get in Touch',
      subtitle: 'Let\'s create something amazing together',
      email: 'Email',
      message: 'Message',
      send: 'Send Message',
      phone: 'Phone',
      location: 'Location',
    }
  },
  pt: {
    nav: {
      home: 'Início',
      resume: 'Currículo',
      work: 'Projetos',
      contact: 'Contato',
    },
    home: {
      title: 'Desenvolvedor de Software',
      greeting: 'Olá, eu sou',
      name: 'Wanderson Oliveira',
      description: 'Sou um desenvolvedor fullstack com mais de cinco anos de experiência em projetos de alto impacto e alto desempenho. Trabalhei com sistemas complexos, aplicações Android e soluções de streaming de vídeo, sempre focado em eficiência e qualidade.',
      downloadCV: 'Baixar CV',
      viewProjects: 'Ver Projetos',
    },
    work: {
      title: 'Projetos em Destaque',
      subtitle: 'Meus melhores trabalhos implantados no Vercel',
      viewLive: 'Ver ao Vivo',
      sourceCode: 'Código Fonte',
      technologies: 'Tecnologias',
      projectCard: {
        project1: {
          name: 'Portfólio Moderno',
          description: 'Um impressionante website de portfólio construído com React, TypeScript e Tailwind CSS com animações suaves e suporte multi-idioma.',
        },
        project2: {
          name: 'Plataforma E-Commerce',
          description: 'Solução e-commerce full-stack com integração de pagamento, painel administrativo e gerenciamento de inventário em tempo real.',
        },
        project3: {
          name: 'Aplicativo de Gerenciamento de Tarefas',
          description: 'Aplicação colaborativa de gerenciamento de tarefas com atualizações em tempo real, autenticação de usuários e filtros avançados.',
        },
      },
    },
    resume: {
      title: 'Experiência Profissional',
      subtitle: 'Minha jornada como desenvolvedor',
      experience: 'Experiência',
      skills: 'Habilidades',
      education: 'Educação',
    },
    contact: {
      title: 'Entre em Contato',
      subtitle: 'Vamos criar algo incrível juntos',
      email: 'Email',
      message: 'Mensagem',
      send: 'Enviar Mensagem',
      phone: 'Telefone',
      location: 'Localização',
    }
  },
  it: {
    nav: {
      home: 'Home',
      resume: 'Curriculum',
      work: 'Progetti',
      contact: 'Contatti'
    },
    home: {
      title: 'Sviluppatore Software',
      greeting: 'Ciao, sono',
      name: 'Wanderson Oliveira',
      description: 'Sono uno sviluppatore fullstack con oltre cinque anni di esperienza in progetti ad alto impatto e alte prestazioni. Ho lavorato su sistemi complessi, applicazioni Android e soluzioni di streaming video, sempre focalizzato su efficienza e qualità.',
      downloadCV: 'Scarica CV',
      viewProjects: 'Visualizza Progetti',
    },
    work: {
      title: 'Progetti in Evidenza',
      subtitle: 'I miei migliori lavori distribuiti su Vercel',
      viewLive: 'Visualizza in Diretta',
      sourceCode: 'Codice Sorgente',
      technologies: 'Tecnologie',
      projectCard: {
        project1: {
          name: 'Portfolio Moderno',
          description: 'Un sito portfolio straordinario costruito con React, TypeScript e Tailwind CSS con animazioni fluide e supporto multilingue.',
        },
        project2: {
          name: 'Piattaforma E-Commerce',
          description: 'Soluzione e-commerce full-stack con integrazione pagamenti, dashboard amministrativo e gestione inventario in tempo reale.',
        },
        project3: {
          name: 'App di Gestione Attività',
          description: 'Applicazione collaborativa di gestione attività con aggiornamenti in tempo reale, autenticazione utenti e filtri avanzati.',
        },
      },
    },
    resume: {
      title: 'Esperienza Professionale',
      subtitle: 'Il mio viaggio come sviluppatore',
      experience: 'Esperienza',
      skills: 'Competenze',
      education: 'Educazione',
    },
    contact: {
      title: 'Mettiamoci in Contatto',
      subtitle: 'Creiamo insieme qualcosa di straordinario',
      email: 'Email',
      message: 'Messaggio',
      send: 'Invia Messaggio',
      phone: 'Telefono',
      location: 'Ubicazione',
    }
  },
};

export type TranslationKey = keyof typeof translations.en;
