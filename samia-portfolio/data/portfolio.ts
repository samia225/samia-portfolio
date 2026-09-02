export const portfolioData = {
  name: 'Samia Rahman',
  title: 'Software Engineer focused on data-intensive and intelligent systems',
  bio: 'CS student at UAlberta building software, data, and machine learning systems for real-world problems — seeking 2027 new-grad opportunities.',
  email: 'samia5@ualberta.ca',
  phone: '437-983-6021',
  social: {
    github: 'https://github.com/samia225',
    linkedin: 'https://linkedin.com/in/samia-rahman-3264281b2',
  },
  resumeUrl: '/Samia_Rahman_Resume.pdf',

  about: `I am a Computing Science student at the University of Alberta building software, data, and machine learning systems for real-world problems.

My experience spans full-stack development, data engineering, and applied machine learning. At Capital Power, I developed an end-to-end anomaly-detection workflow for equipment-risk analysis at a 1.6GW power-generation facility. At the City of Edmonton, I automated 20 enterprise REST APIs and built Python and SQL pipelines processing millions of procurement records for 500+ users. At PDASA, I rebuilt an industrial reinforcement learning pipeline in PyTorch, accelerating training by 35% and reducing manual monitoring by 80%.

I also build user-facing software for external clients, including UNTAPPED, a multi-tenant artist operations platform built with React, Node.js, PostgreSQL, and AWS S3 to support invoice, payment, and document workflows for 50+ artists.

I'm currently seeking 2027 new-grad opportunities in software engineering, data engineering, and applied machine learning.`,
  skills: {
    'Full-Stack Development': [
      'Python',
      'Java',
      'C',
      'TypeScript',
      'JavaScript',
      'SQL',
      'R',
      'React',
      'React Native',
      'Node.js',
      'Express',
      'HTML/CSS',
      'REST APIs',
      'PostgreSQL',
      'MongoDB',
    ],
    'Data Engineering & Analytics': ['ETL Pipelines', 'Pandas', 'NumPy', 'SQLAlchemy', 'Power BI', 'Tableau', 'Jupyter Notebook'],
    'AI/ML': [
      'Machine Learning',
      'Reinforcement Learning',
      'Large Language Models (LLMs)',
      'Generative AI',
      'Prompt Engineering',
      'RAG',
      'Embeddings',
      'PyTorch',
      'TensorFlow',
      'Scikit-learn',
    ],
    'Cloud & DevOps': ['AWS (S3)', 'Docker', 'Firebase', 'Linux', 'Git', 'GitHub Actions', 'CI/CD', 'Snowflake', 'Databricks'],
  },
  projects: [
    {
      id: 1,
      title: 'InclusiTrip: Accessible Travel Matching Platform',
      description:
        'Improved accessibility-aware travel discovery by building a FastAPI platform that matches travelers to services based on mobility, sensory, cognitive, neurodivergent, and temporary accessibility needs.',
      tech: ['FastAPI', 'Python', 'HTML', 'CSS', 'JavaScript'],
      github: 'https://github.com/samia225/InclusiTrip',
      demo: '#',
      icon: '🧭',
    },
    {
      id: 2,
      title: 'UNTAPPED: Artist Management Web App',
      description:
        'Built and deployed a production multi-tenant portal for ACPA Foundation serving 50+ artists, eliminating manual admin workflows through invoice approval pipelines, role-based access control, and PIPEDA-compliant AWS S3 document storage.',
      tech: ['React', 'Node.js', 'PostgreSQL', 'OAuth2', 'AWS S3'],
      github: '#',
      demo: '#',
      private: true,
      icon: '🎵',
    },
    {
      id: 3,
      title: 'IoT Smart Home Test Automation',
      description:
        'Achieved 80%+ branch coverage on state consistency logic by designing a TDD test suite (black-box, boundary value analysis) and automating it with a Docker + GitHub Actions CI/CD pipeline running on every commit.',
      tech: ['Java', 'JUnit 5', 'Docker', 'GitHub Actions'],
      github: '#',
      demo: '#',
      private: true,
      icon: '🏠',
    },
    {
      id: 4,
      title: 'FoodMinder: Smart Grocery Management',
      description:
        'Reduced grocery manual entry by 90% by building an LLM-powered React Native app using Google Gemini for receipt OCR and structured data extraction, with real-time Firebase sync.',
      tech: ['TypeScript', 'React Native', 'Gemini API', 'Firebase'],
      github: 'https://github.com/samia225/FoodMinder',
      demo: '#',
      icon: '🛒',
    },
    {
      id: 5,
      title: 'Event Lottery System Application',
      description:
        'Led backend development of an Android event lottery system using Firebase Realtime Database, implementing geolocation queries, QR code validation, and atomic transactions to prevent race conditions and duplicate entries while supporting 10+ concurrent users.',
      tech: ['Java', 'Android Studio', 'Firebase Realtime DB', 'QR Scanning'],
      github: 'https://github.com/samia225/Lottery-Event-App',
      demo: '#',
      icon: '🎟️',
    },
    {
      id: 6,
      title: 'Database Optimization and Query Performance',
      description:
        'Reduced query and read times by 30% and cut storage usage by 22% by redesigning and optimizing MongoDB schemas, data models, and indexing strategy using Python and SQL.',
      tech: ['Python', 'SQL', 'MongoDB'],
      github: 'https://github.com/samia225/w24-mp2-mongominds--copy',
      demo: '#',
      icon: '🗃️',
    },
  ],
  experience: [
    {
      role: 'Data Science Intern',
      company: 'Capital Power',
      period: 'May 2026 – Aug 2026',
      description: 'Built ML systems for predictive maintenance at a 1.6GW energy facility, supporting equipment-level root-cause analysis.',
      highlights: [
        'Built an end-to-end MLOps pipeline for turbine failure prediction at a 1.6GW energy facility using Snowflake, Databricks, and Azure DevOps to identify equipment-level failure drivers for root-cause analysis.',
        'Benchmarked PyOD anomaly detection models (Isolation Forest and others) against statistical baselines for early fault detection.',
      ],
    },
    {
      role: 'Undergraduate Teaching Assistant',
      company: 'University of Alberta – Faculty of Computing Science',
      period: 'Jan 2026 – Apr 2026',
      description: 'Supporting the next generation of CS students in building reliable, ethical software systems.',
      highlights: [
        'Facilitated Python-based lab sessions covering automation, testing, and responsible AI usage for Computing Science students.',
        'Guided students in designing structured, testable systems while emphasizing ethical and trustworthy application of AI tools.',
      ],
    },
    {
      role: 'Software Engineer Intern',
      company: 'City of Edmonton – Financial & Corporate Services',
      period: 'May 2025 – Dec 2025',
      description: 'Built scalable data infrastructure supporting supply chain reporting and operations for one of Canada\'s largest municipal governments.',
      highlights: [
        'Automated processing of millions of records for 500+ users by designing and testing scalable backend data pipelines integrating 20 SAP Ariba REST APIs with Python (Pandas, NumPy, SQLAlchemy) and SQL Server.',
        'Reduced reporting discrepancies by 30% across supply chain systems by implementing automated validation, monitoring, and data quality controls.',
      ],
    },
    {
      role: 'Machine Learning Engineer Intern',
      company: 'Process Data Analytics and Smart Automation Lab (PDASA)',
      period: 'Jan 2025 – Apr 2025',
      description: 'Developed real-time ML control systems for industrial oil & gas operations in collaboration with industry partners.',
      highlights: [
        'Reduced manual bitumen extraction monitoring by 80% by deploying a PyTorch-based A3C reinforcement learning agent with CNN-LSTM encoders to automate closed-loop valve regulation via camera sensors.',
        'Reduced training time by 35% by migrating a legacy RL system from TensorFlow 1.x to PyTorch, redesigning training pipelines and model components.',
      ],
    },
    {
      role: 'ML & Robotics Research Assistant',
      company: 'University of Alberta – Faculty of Science',
      period: 'Sep 2024 – Present',
      description: 'Researching compact latent action representations for robotic control in the Autonomous Robotics and Perception Lab.',
      highlights: [
        'Improved reinforcement learning efficiency by 50% on robotic control tasks by building State-Conditioned Linear (SCL) action maps with VAEs, reducing control complexity from 6D to 3D.',
        'Achieved 80x lower reconstruction error by training VAEs across 6 latent dimensions to identify the optimal action representation for robot control.',
      ],
    },
  ],
}