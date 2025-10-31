export const portfolioData = {
  name: 'Samia Rahman',
  title: 'ML/Data Engineer & CS Student',
  bio: '4th year Computer Science student at University of Alberta with expertise in Machine Learning, Data Engineering, and Software Development.',
  email: 'samia5@ualberta.ca',
  phone: '437-983-6021',
  social: {
    github: 'https://github.com/samia225',
    linkedin: 'https://linkedin.com/in/samia-rahman-3264281b2',
  },
  about: `I'm a passionate Computer Science student at the University of Alberta with a strong focus on Machine Learning, Data Engineering, and Software Development. With experience building ETL pipelines, training RL agents, and developing full-stack applications, I love solving complex problems with elegant code.

My journey spans from automating corporate procurement pipelines to optimizing robotic control systems. I'm particularly interested in the intersection of AI and practical applications.`,
  skills: {
    'Machine Learning': ['PyTorch', 'TensorFlow', 'Reinforcement Learning', 'Neural Networks', 'Computer Vision'],
    'Data Engineering': ['Python', 'SQL', 'ETL Pipelines', 'Tableau', 'Power BI'],
    'Web Development': ['React', 'React Native', 'TypeScript', 'Node.js', 'Firebase'],
    'Databases': ['MongoDB', 'SQL Server', 'Firebase'],
    'Languages': ['Python', 'Java', 'C', 'JavaScript', 'TypeScript', 'SQL', 'R'],
    'Tools': ['Git', 'Docker', 'Linux', 'Android Studio', 'VS Code'],
  },
  projects: [
    {
      id: 1,
      title: 'FoodMinder: Smart Grocery Management',
      description: 'Scalable data integration and analytics solution for enterprise procurement.',
      tech: ['React Native', 'TypeScript', 'OCR', 'Gemini API'],
      github: '#',
      demo: '#',
      icon: '🛒',
    },
    {
      id: 2,
      title: 'Event Lottery System',
      description: 'Android app for event lottery sign-ups with real-time updates and Firebase integration. Achieved 98% user satisfaction with zero critical bugs.',
      tech: ['Java', 'Android Studio', 'Firebase', 'Figma'],
      github: '#',
      demo: '#',
      icon: '🎰',
    },
    {
      id: 3,
      title: 'Database Optimization & Query Performance',
      description: 'Optimized MongoDB schemas and indexing strategy, reducing query times by 30% and storage usage by 22% using Python and SQL.',
      tech: ['Python', 'MongoDB', 'SQL'],
      github: '#',
      demo: '#',
      icon: '⚡',
    },
    {
      id: 4,
      title: 'RL Process Control System Migration',
      description: 'Migrated TensorFlow-based RL system to PyTorch for industrial PSV control, cutting training time by 35% with improved accuracy.',
      tech: ['PyTorch', 'TensorFlow', 'Python', 'MPC'],
      github: '#',
      demo: '#',
      icon: '🤖',
    },
    {
      id: 5,
      title: 'Autoencoder-Based Action Maps for Robotics',
      description: 'Designed VAE-based action maps with reinforcement learning for improved robotic control transferability and reduced training data requirements.',
      tech: ['Python', 'PyTorch', 'RL', 'VAE'],
      github: '#',
      demo: '#',
      icon: '🦾',
    },
    {
      id: 6,
      title: 'ETL Pipeline for Corporate Procurement',
      description: 'Automated ETL pipelines with Python and SQL Server for the City of Edmonton. Improved reporting accuracy by 25% and enabled real-time dashboards.',
      tech: ['Python', 'SQL Server', 'SAP Ariba API', 'Tableau'],
      github: '#',
      demo: '#',
      icon: '📊',
    },
  ],
  experience: [
    {
      role: 'Data Engineer Intern',
      company: 'City of Edmonton',
      period: 'May 2025 – Present',
      description: '',
      highlights: [
        'Built scalable ETL pipeline integrating 20 SAP Ariba REST APIs for operational sourcing and procurement using Python (Pandas, NumPy, SQLAlchemy) with OAuth authentication, retry logic, post-load validation with duplicate detection, and incremental loading to serve 500+ users processing millions of records daily.',
        'Developed 4 Tableau/Power BI dashboards with automated pipeline alerts and data quality monitoring, reducing reporting discrepancies by 30% and enabling multi-million-dollar procurement decisions.'
      ],
    },
    {
      role: 'ML Developer Co-op',
      company: 'PDASA Lab, University of Alberta',
      period: 'Jan 2025 – Apr 2025',
      description: '',
      highlights: [
        'Migrated RL system TensorFlow → PyTorch, implemented A3C with CNN-LSTM, reducing training time by 35%.',
        'Deployed real-time object detection for liquid level monitoring in Primary Separation Vessel (PSV), enabling autonomous valve adjustments in oil & gas operations.'
      ],
    },
    {
      role: 'Undergraduate Researcher',
      company: 'Robotics Lab, University of Alberta',
      period: 'Sep 2024 – Present',
      description: 'Designed autoencoder-based action maps for robotic control with improved transferability.',
      highlights: ['Designed custom VAE with Soft Actor-Critic (SAC) in PyTorch, tested on RobotSuite. Improved model transferability and reduced training data by 40%.',
        'Optimized linear MPC for UAV control (thrust, pitch, roll), achieving 27% faster response, 41% stability improvement, 18% lower overhead.'
      ],
    },
  ],
}
