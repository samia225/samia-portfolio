export const portfolioData = {
  name: 'Samia Rahman',
  title: 'AI/ML Engineer & Software Developer',
  bio: 'Computing Science student at the University of Alberta with experience in AI/ML, data engineering, and full-stack software development.',
  email: 'samia5@ualberta.ca',
  phone: '437-983-6021',
  social: {
    github: 'https://github.com/samia225',
    linkedin: 'https://linkedin.com/in/samia-rahman-3264281b2',
  },
  // Upload your latest resume into /public as resume.pdf.
  resumeUrl: '/resume.pdf',
  funFacts: [
    {
      emoji: '🌌',
      title: 'Northern Lights Dream',
      fact: 'I want to build immersive AI visuals inspired by aurora skies and use them in creative products.',
    },
    {
      emoji: '🤖',
      title: 'Robot Brain Mode',
      fact: 'I have worked on reinforcement learning systems that improve control behavior and training efficiency.',
    },
    {
      emoji: '📊',
      title: 'Data to Decisions',
      fact: 'I enjoy turning messy enterprise data into clear dashboards people can actually make decisions with.',
    },
    {
      emoji: '☕',
      title: 'Build Ritual',
      fact: 'My favorite workflow is: sketch idea, prototype quickly, then polish the experience with thoughtful details.',
    },
    {
      emoji: '✨',
      title: 'Design + Engineering',
      fact: 'I care about how software feels, not just whether it works.',
    },
  ],
  about: `I am a Computing Science student at the University of Alberta interested in building intelligent systems that combine machine learning, robotics, and software engineering. My work focuses on reinforcement learning, robotic control, and data systems, where I design models and software that can learn from data and operate reliably in real-world environments.

Alongside my research in ML and robotics, I have industry experience developing scalable data pipelines and analytics systems. I have worked with Python, SQL, and APIs to build ETL pipelines, dashboards, and automation tools used in real operational settings. I enjoy building systems end-to-end, from machine learning models to the software and data infrastructure that support them.`,
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
    'Data Engineering & Analytics': ['ETL Pipelines', 'Pandas', 'NumPy', 'Power BI', 'Tableau', 'Jupyter Notebook'],
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
    'Cloud & DevOps': ['AWS', 'Docker', 'Firebase', 'Linux', 'Git', 'GitHub Actions', 'CI/CD'],
  },
  projects: [
    {
      id: 1,
      title: 'UNTAPPED: Artist Management Web App',
      description:
        'Building a full-stack web platform for artist onboarding, invoice workflows, payment tracking, and secure document storage with a scalable SaaS-style architecture.',
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
        'Designed a TDD-focused test suite with black-box and boundary-value analysis, achieving 80%+ branch coverage and automating validation with CI/CD.',
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
        'Built an LLM-powered React Native app using Google Gemini for receipt OCR and structured data extraction, reducing manual entry by 90% with Firebase sync.',
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
        'Redesigned and optimized MongoDB schemas, data models, and indexing strategy using Python and SQL, reducing query/read times by 30% and cutting storage usage by 22%.',
      tech: ['Python', 'SQL', 'MongoDB'],
      github: 'https://github.com/samia225/w24-mp2-mongominds--copy',
      demo: '#',
      icon: '🗃️',
    },
  ],
  experience: [
    {
      role: 'Undergraduate Teaching Assistant',
      company: 'University of Alberta',
      period: 'Jan 2026 – Present',
      description: '',
      highlights: [
        'Facilitated Python-based lab sessions focused on automation, testing, and responsible AI usage.',
        'Guided students in building structured, reliable systems while emphasizing trustworthy and ethical AI practices.',
      ],
    },
    {
      role: 'Data Engineer Intern',
      company: 'City of Edmonton',
      period: 'May 2025 – Dec 2025',
      description: '',
      highlights: [
        'Designed and deployed AI-driven automation workflows integrating 20 SAP Ariba REST APIs using Python (Pandas, NumPy, SQLAlchemy), SQL Server, and Gemini API for scalable reporting and operations support across 500+ users.',
        'Engineered analytics and reporting infrastructure with monitoring and data quality controls, reducing reporting discrepancies by 30% and enabling stronger executive decision support.',
      ],
    },
    {
      role: 'Machine Learning Developer Co-op',
      company: 'Process Data Analytics and Smart Automation Lab (PDASA)',
      period: 'Jan 2025 – Apr 2025',
      description: '',
      highlights: [
        'Designed and deployed a real-time AI control system in PyTorch for monitoring bitumen extraction and debris detection in Primary Separation Vessels (PSVs) with closed-loop valve regulation.',
        'Implemented an A3C actor-critic architecture with CNN-LSTM encoders and structured performance monitoring, improving response time and reducing training time by 35% after migrating from TensorFlow.',
      ],
    },
    {
      role: 'Undergraduate Student Researcher - ML/Robotics',
      company: 'University of Alberta',
      period: 'Sep 2024 – Present',
      description: '',
      highlights: [
        'Designed a VAE integrated with Soft Actor-Critic (SAC) in PyTorch to improve policy generalization and cross-task transfer in robotic control, reducing training data by 40%.',
        'Optimized linear Model Predictive Control (MPC) for UAV navigation (thrust, pitch, roll), achieving 27% faster response, 41% better stability, and 18% lower computational overhead.',
      ],
    },
  ],
}
