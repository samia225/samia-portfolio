export const portfolioData = {
  name: 'Samia Rahman',
  title: 'Software Engineer & Machine Learning Developer',
  bio: 'CS student at UAlberta specializing in ML, full-stack development, and data engineering — with 3 internships across software, ML research, and enterprise data systems.',
  email: 'samia5@ualberta.ca',
  phone: '437-983-6021',
  social: {
    github: 'https://github.com/samia225',
    linkedin: 'https://linkedin.com/in/samia-rahman-3264281b2',
  },
  resumeUrl: '/Samia_Rahman_Resume.pdf',

  about: `I am a Computing Science student at the University of Alberta specializing in software engineering, machine learning, and data systems. I build end-to-end systems from full-stack web applications to reinforcement learning models that operate in real industrial environments.

My industry experience spans data engineering at the City of Edmonton, ML systems development at PDASA, and production software for real clients. At PDASA, I deployed a real-time A3C reinforcement learning agent for oil and gas operations. At the City of Edmonton, I built backend pipelines processing millions of records for 500+ users.

I also build production software for real clients including UNTAPPED, an artist management platform for FALAC and ACPA Foundation that helps 50+ artists submit invoices, track payments, and manage documents.`,
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
    'Cloud & DevOps': ['AWS (S3)', 'Docker', 'Firebase', 'Linux', 'Git', 'GitHub Actions', 'CI/CD'],
  },
  projects: [
    {
      id: 1,
      title: 'UNTAPPED: Artist Management Web App',
      description:
        'Built a production artist management portal for FALAC and ACPA Foundation enabling 50+ artists to submit invoices, track payment status, and manage onboarding documents. Features role-based access control, invoice approval workflows, and PIPEDA-compliant AWS S3 document storage replacing a fully manual email and spreadsheet process.',
      tech: ['React', 'Node.js', 'PostgreSQL', 'OAuth2', 'AWS S3'],
      github: '#',
      demo: '#',
      private: true,
      icon: '🎵',
    },
    {
      id: 2,
      title: 'IoT Smart Home Test Automation',
      description:
        'Achieved 80%+ branch coverage across state consistency logic including heating/cooling exclusivity, sensor accuracy, and alarm triggers by designing a TDD test suite using black-box and boundary value analysis in JUnit 5. Eliminated manual test execution by building a Docker and GitHub Actions CI/CD pipeline that runs coverage analysis on every commit.',
      tech: ['Java', 'JUnit 5', 'Docker', 'GitHub Actions'],
      github: '#',
      demo: '#',
      private: true,
      icon: '🏠',
    },
    {
      id: 3,
      title: 'FoodMinder: Smart Grocery Management',
      description:
        'Reduced grocery manual entry by 90% by building an LLM-powered React Native app using Google Gemini for receipt OCR and structured data extraction, with real-time Firebase sync.',
      tech: ['TypeScript', 'React Native', 'Gemini API', 'Firebase'],
      github: 'https://github.com/samia225/FoodMinder',
      demo: '#',
      icon: '🛒',
    },
    {
      id: 4,
      title: 'Event Lottery System Application',
      description:
        'Led backend development of an Android event lottery system using Firebase Realtime Database, implementing geolocation queries, QR code validation, and atomic transactions to prevent race conditions and duplicate entries while supporting 10+ concurrent users.',
      tech: ['Java', 'Android Studio', 'Firebase Realtime DB', 'QR Scanning'],
      github: 'https://github.com/samia225/Lottery-Event-App',
      demo: '#',
      icon: '🎟️',
    },
    {
      id: 5,
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
      role: 'Undergraduate Teaching Assistant',
      company: 'University of Alberta – Faculty of Computing Science',
      period: 'Jan 2026 – Present',
      description: 'Supporting the next generation of CS students in building reliable, ethical software systems.',
      highlights: [
        'Facilitated Python-based lab sessions covering automation, testing, and responsible AI usage for Computing Science students.',
        'Guided students in designing structured, testable systems while emphasizing ethical and trustworthy application of AI tools.',
      ],
    },
    {
      role: 'Data Engineer Intern',
      company: 'City of Edmonton – Financial & Corporate Services',
      period: 'May 2025 – Dec 2025',
      description: 'Built scalable data infrastructure supporting supply chain reporting and operations for one of Canada\'s largest municipal governments.',
      highlights: [
        'Automated processing of millions of records for 500+ users by building scalable backend data pipelines integrating 20 SAP Ariba REST APIs using Python (Pandas, NumPy, SQLAlchemy) and SQL Server.',
        'Improved data reliability by implementing automated validation, monitoring, and data quality controls, reducing reporting discrepancies by 30% across supply chain systems.',
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
      description: 'Researching transferable robotic control systems using deep learning and reinforcement learning in the Autonomous Robotics and Perception Lab.',
      highlights: [
        'Reduced training data requirements by 40% by developing PyTorch ML pipelines combining variational autoencoders (VAE) and Soft Actor-Critic (SAC) to improve policy generalization across robotic control environments (Robosuite).',
        'Improved UAV control performance achieving 27% faster response, 41% increased stability, and 18% lower computational overhead by implementing and optimizing Model Predictive Control (MPC) algorithms.',
      ],
    },
  ],
}