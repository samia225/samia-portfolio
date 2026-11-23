// All site copy lives here. Keep it plain and specific: what was built, what happened, numbers.
// Search for "TODO" to find the facts only Samia can fill in.

export type Link = { label: string; href: string }

export const profile = {
  name: 'Samia Rahman',
  greeting: 'hi, I’m Samia',
  sentence: 'I build software and ML systems for real-world problems, from robot control research to production data pipelines.',
  status: 'Computing Science, University of Alberta · Graduating May 2027 · Open to new-grad roles in software, data and ML',
  email: 'samia5@ualberta.ca',
  personalEmail: 'samia.rahman2205@gmail.com',
  github: 'https://github.com/samia225',
  linkedin: 'https://linkedin.com/in/samia-rahman-3264281b2',
  resume: '/samia-rahman-resume.pdf',
  // Circle photo in the hero window. Hidden until this file exists in /public.
  photo: { src: '/images/samia-photo.jpg', alt: 'Samia Rahman' }, // TODO add the photo
}

// Formspree: paste your form ID here (the part after formspree.io/f/).
export const FORMSPREE_ID = 'mwlowvjk'

export const about =
  'I build software for complex, real-world systems. I’m a Computing Science student at the University of Alberta with two years of internship experience across software engineering, data systems and applied machine learning, plus ongoing research in robotics and ML. At the City of Edmonton I automated 20 enterprise REST APIs and built Python and SQL pipelines processing millions of procurement records for 500+ users. At Capital Power I built an anomaly-detection workflow for equipment-risk analysis at a 1.6 GW plant. I’m also curious about how AI is changing the way people think, feel and go about their day.'

// Quick-facts card beside the About text. `href` makes the value a link.
export const quickFacts: { label: string; value: string; href?: string }[] = [
  { label: 'Location', value: 'Edmonton, Alberta' },
  { label: 'Education', value: 'University of Alberta' },
  { label: 'Graduation', value: 'May 2027' },
  { label: 'Current role', value: 'ML & Robotics Research Assistant' },
  { label: 'Focus', value: 'Software, data and applied ML' },
  { label: 'Contact', value: 'samia5@ualberta.ca', href: 'mailto:samia5@ualberta.ca' },
]

// Fun fact map. Order is the route. `id` picks the map point in data/worldMap.ts.
export const waypoints = [
  { id: 'moscow', region: 'Eastern Europe', line: 'Born in Eastern Europe.' },
  { id: 'dhaka', region: 'South Asia', line: 'Spent my teenage years in Dhaka, Bangladesh, and finished high school there.' },
  { id: 'edmonton', region: 'North America', line: 'Finishing my bachelor’s at the University of Alberta in Edmonton.' },
] as const

// Work experience, current role first, then newest first.
// `tools` feeds the Skills and tools counts: only tools named in the bullets (Python counted where PyTorch/PyOD/Pandas are used).
export type Role = { title: string; org: string; dates: string; summary?: string; points: string[] }

export const experience: Role[] = [
  {
    title: 'Data Science Intern',
    org: 'Capital Power',
    dates: 'May – Aug 2026',
    summary: 'Built ML systems for predictive maintenance at a 1.6 GW energy facility.',
    points: [
      'Built an end-to-end MLOps pipeline for turbine failure prediction using Snowflake, Databricks and Azure DevOps to identify equipment-level failure drivers for root-cause analysis',
      'Benchmarked PyOD anomaly detection models, including Isolation Forest, against statistical baselines for early fault detection',
    ],
  },
  {
    title: 'Undergraduate Teaching Assistant',
    org: 'University of Alberta, Faculty of Computing Science',
    dates: 'Jan – Apr 2026',
    summary: 'Helped CS students build reliable, ethical software systems.',
    points: [
      'Ran Python lab sessions covering automation, testing and responsible AI use',
      'Guided students in designing structured, testable systems with trustworthy use of AI tools',
    ],
  },
  {
    title: 'Software Engineer Intern',
    org: 'City of Edmonton, Financial & Corporate Services',
    dates: 'May – Dec 2025',
    summary: 'Built data infrastructure for supply chain reporting at one of Canada’s largest municipal governments.',
    points: [
      'Automated processing of millions of records for 500+ users with backend data pipelines integrating 20 SAP Ariba REST APIs, using Python (Pandas, NumPy, SQLAlchemy) and SQL Server',
      'Reduced reporting discrepancies by 30% with automated validation, monitoring and data quality controls',
    ],
  },
  {
    title: 'Machine Learning Engineer Intern',
    org: 'Process Data Analytics and Smart Automation Lab (PDASA)',
    dates: 'Jan – Apr 2025',
    summary: 'Built real-time ML control systems for industrial oil and gas operations with industry partners.',
    points: [
      'Reduced manual bitumen extraction monitoring by 80% with a PyTorch A3C reinforcement learning agent using CNN-LSTM encoders for closed-loop valve control from camera sensors',
      'Cut training time by 35% by migrating a legacy RL system from TensorFlow 1.x to PyTorch',
    ],
  },
  {
    title: 'ML & Robotics Research Assistant',
    org: 'University of Alberta',
    dates: 'Sep 2024 – present',
    summary: 'Researching compact action representations for robot control.',
    points: [
      'Improved reinforcement learning efficiency by 50% on robot control tasks with state-conditioned linear (SCL) action maps built on VAEs, cutting control complexity from 6-D to 3-D',
      'Achieved 80× lower reconstruction error by comparing VAEs across latent sizes to find the best action representation',
    ],
  },
]

// Projects. Rendered as: title, one-liner, stack (closed); context line, paragraph, links, media (open).
// Media paths are relative to /public. width/height are the file's real pixel size (prevents layout shift).
type MediaBase = { src: string; alt: string; width: number; height: number }
export type Media =
  | (MediaBase & { kind: 'image' })
  | (MediaBase & { kind: 'video'; poster: string }) // muted, controls, no autoplay
  | (MediaBase & { kind: 'gif'; still: string }) // still frame shown when reduced motion is on

export type Project = {
  id: string
  title: string
  date: string // YYYY-MM, used only to sort newest first
  tagline: string // one short line on the closed card
  context: string
  description: string // the paragraph inside the open card
  stack: string[] // also feeds the Skills and tools counts
  links: Link[]
  linkNote?: string
  media: Media[]
}

const allProjects: Project[] = [
  {
    id: 'trustytalker',
    date: '2026-11',
    title: 'TrustyTalker',
    tagline: 'Flags chatbot replies that miss what people asked for',
    context: 'natHacks 2026 · Team lead · Problem from MCRC Health',
    description:
      'A health support chatbot can sound kind and still ignore what the person asked. Telling someone who says "I just want information" that they need to quit can push them away from help. A review tool that tracks what the person has said they want, runs 18 rule-based checks on every chatbot reply, and flags replies that pressure, miss danger signs, give medical advice or cite unsupported services. Clinicians and peer support workers make the final call, with an AI second opinion clearly labelled. It runs entirely in the browser with no network calls. On 59 labelled practice conversations, the checks caught 42 of 44 problem replies, including all 17 critical ones, and flagged none of the good replies. Early results; clinician review is next.',
    stack: ['JavaScript', 'Node.js', 'OpenAI API'],
    links: [],
    linkNote: 'Code and demo available on request.',
    media: [
      {
        kind: 'image',
        src: '/images/projects/trusty-talker/Screenshot 2026-11-22 193420.png',
        width: 1406,
        height: 910,
        alt: 'TrustyTalker sign-in page with the headline "Catch the replies that miss what people asked for" and three points: follows the person, flags with evidence, you decide.',
      },
    ],
  },
  {
    id: 'inclusitrip',
    date: '2026-05',
    title: 'InclusiTrip',
    tagline: 'Matches travellers to hotels by accessibility needs',
    context: 'natIgnite 2026 · 3rd place · Team of 5',
    description:
      'Improved accessibility-aware travel discovery with a FastAPI platform that matches travellers to services based on mobility, sensory, cognitive, neurodivergent and temporary needs. Placed 3rd at natIgnite 2026.',
    stack: ['FastAPI', 'Python', 'JavaScript'],
    links: [
      { label: 'View code', href: 'https://github.com/ipsamanhas/InclusiTrip' },
      { label: 'Slides', href: 'https://canva.link/f0lhn01v1evphzi' },
    ],
    media: [
      {
        kind: 'image',
        src: '/images/projects/inclusitrip-app/Screenshot 2026-11-22 194637.png',
        width: 1080,
        height: 914,
        alt: 'InclusiTrip results for Canada: 33 hotels matched to needs such as remote-controlled doors and lights, each with a match score and a note of which requested needs it cannot confirm.',
      },
    ],
  },
  {
    id: 'untapped',
    date: '2026-04',
    title: 'UNTAPPED',
    tagline: 'Invoicing and payments portal for 50+ artists',
    context: 'Client project for ACPA Foundation',
    description:
      'Built and deployed a production multi-tenant portal for ACPA Foundation serving 50+ artists, replacing manual admin work with invoice approval pipelines, role-based access control and PIPEDA-compliant AWS S3 document storage.',
    stack: ['React', 'Node.js', 'PostgreSQL', 'OAuth2', 'AWS S3'],
    links: [],
    linkNote: 'Code available on request',
    media: [
      {
        kind: 'image',
        src: '/images/projects/untapped-app/untapped-app.png',
        width: 872,
        height: 442,
        alt: 'UNTAPPED landing page reading "The platform artists actually needed", beside a card showing an approved $750 performance-fee invoice.',
      },
    ],
  },
  {
    id: 'foodminder',
    date: '2025-01',
    title: 'FoodMinder',
    tagline: 'Turns a receipt photo into a grocery list',
    context: 'HackED 2025',
    description:
      'Cut manual grocery entry by 90% with a React Native app that uses Google Gemini to read receipts and extract structured items, with real-time Firebase sync.',
    stack: ['TypeScript', 'React Native', 'Gemini API', 'Firebase'],
    links: [{ label: 'View code', href: 'https://github.com/samia225/FoodMinder' }],
    media: [
      {
        kind: 'gif',
        src: '/videos/food-minder/foodminder-app.gif',
        still: '/videos/food-minder/foodminder-app.still.webp',
        width: 350,
        height: 712,
        alt: 'FoodMinder dashboard scrolling through items expiring soon, past recipes and the remaining grocery budget.',
      },
      {
        kind: 'video',
        src: '/videos/food-minder/foodminder-app-2.mp4',
        poster: '/videos/food-minder/foodminder-app-2.poster.webp',
        width: 262,
        height: 532,
        alt: 'Scrolling the FoodMinder recipe list and opening the smoothie bowl and grilled cheese recipes with ingredients and steps.',
      },
      {
        kind: 'gif',
        src: '/videos/food-minder/foodminder-app-3.gif',
        still: '/videos/food-minder/foodminder-app-3.still.webp',
        width: 198,
        height: 402,
        alt: 'FoodMinder analysis tab switching between a pie chart of February spending by food category and a line chart of monthly spending.',
      },
    ],
  },
  {
    id: 'lottery',
    date: '2024-09', // Fall 2024
    title: 'Event Lottery',
    tagline: 'Fair sign-ups for events that fill in seconds',
    context: 'Team project · I led the backend',
    description:
      'Led backend development of an Android event lottery app on Firebase Realtime Database, with geolocation checks, QR code validation and atomic transactions that prevent duplicate entries with 10+ concurrent users.',
    stack: ['Java', 'Android', 'Firebase'],
    links: [{ label: 'View code', href: 'https://github.com/samia225/Lottery-Event-App' }],
    media: [
      {
        kind: 'video',
        src: '/videos/event-lottery-app/event-lottery-demo.mp4',
        poster: '/videos/event-lottery-app/event-lottery-demo.poster.webp',
        width: 1080,
        height: 1920,
        alt: 'Event Lottery demo: an organizer opens an event, runs a lottery for two attendees, and the selected participants appear with notify and remove buttons.',
      },
    ],
  },
  {
    id: 'iot-tests',
    date: '2025-09', // Fall 2025
    title: 'IoT smart home test suite',
    tagline: 'Automated tests that run on every commit',
    context: 'Software testing project',
    description:
      'Reached 80%+ branch coverage on state consistency logic with a TDD test suite (black-box and boundary value analysis), automated with Docker and GitHub Actions on every commit.',
    stack: ['Java', 'JUnit 5', 'Docker', 'GitHub Actions'],
    links: [],
    linkNote: 'Code available on request',
    media: [],
  },
  {
    id: 'mongodb',
    date: '2024-03', // Winter 2024 (from the repo name)
    title: 'MongoDB schema redesign',
    tagline: 'Faster reads and less storage for a live database',
    context: 'Course project',
    description:
      'Cut query and read times by 30% and storage by 22% by redesigning MongoDB schemas, data models and indexes using Python and SQL.',
    stack: ['MongoDB', 'Python', 'SQL'],
    links: [{ label: 'View code', href: 'https://github.com/samia225/w24-mp2-mongominds--copy' }],
    media: [],
  },
]

// Newest first.
export const projects = [...allProjects].sort((x, y) => y.date.localeCompare(x.date))

// ---------- Skills and tools ----------
// How much each language is used. Bar width = percent.
export const languages: { name: string; percent: number }[] = [
  { name: 'Python', percent: 95 },
  { name: 'SQL', percent: 86 },
  { name: 'JavaScript', percent: 78 },
  { name: 'Java', percent: 74 },
  { name: 'TypeScript', percent: 68 },
  { name: 'C', percent: 52 },
]

export const toolLines: { label: string; items: string }[] = [
  { label: 'Frontend', items: 'React, React Native, HTML, CSS' },
  { label: 'Backend', items: 'Node.js, Express, FastAPI, REST APIs, OAuth2, SQLAlchemy' },
  { label: 'Databases', items: 'PostgreSQL, SQL Server, MongoDB, Firebase' },
  {
    label: 'Machine learning and AI',
    items: 'PyTorch, TensorFlow, scikit-learn, PyOD, CNNs, Transformers, VAEs, reinforcement learning, LLMs, RAG, embeddings',
  },
  { label: 'Robotics and research', items: 'Robosuite, PPO, SAC, A3C, CNN-LSTM, MPC, CVXPY' },
  { label: 'Data and analytics', items: 'Pandas, NumPy, ETL pipelines, Snowflake, Databricks, Power BI, Tableau, SAP Ariba' },
  { label: 'Cloud and DevOps', items: 'AWS (S3), Docker, GitHub Actions, Git, Linux, CI/CD' },
  { label: 'Testing', items: 'JUnit 5, Selenium, unit and integration testing, TDD' },
]

export const leadership: Role[] = [
  {
    title: 'Co-lead, AdaHacks',
    org: 'Ada’s Team, University of Alberta',
    dates: '[dates]', // TODO
    points: [
      'Co-lead AdaHacks, Alberta’s largest hackathon focused on women and gender-diverse students.',
      'Lead sponsorship: reach out to companies, pitch partnerships and manage sponsor relationships, plus help run event logistics.',
    ],
  },
  {
    title: 'VP Conference Finance',
    org: 'Ada’s Team, University of Alberta',
    dates: 'May 2025 – present',
    points: [
      'Manage $45K+ in conference budgets, sponsorships and logistics.',
      'Plan delegations to GHC, CAN-CWiC and QTQ, including travel, registration and sponsored spots.',
      'Supported 200+ underrepresented computing students through conference opportunities.',
    ],
  },
]

// Signature matcha. TODO fill in the [amount]s.
export type Recipe = {
  id: string
  name: string
  ingredients: { amount: string; item: string }[]
  steps: string[]
  image: { src: string; alt: string }
}

const BASE = [
  { amount: '4 g', item: 'matcha (Yugen)' },
  { amount: '40 ml', item: 'water' },
  { amount: '100 ml', item: 'oat milk' },
]

export const recipes: Recipe[] = [
  {
    id: 'strawberry',
    name: 'Strawberry matcha latte',
    ingredients: [...BASE, { amount: '40 g', item: 'strawberry purée' }],
    steps: ['Spoon purée into the glass.', 'Add ice and oat milk.', 'Whisk matcha with water, pour on top.'],
    image: { src: '/images/matcha/matcha-strawberry.webp', alt: 'Strawberry iced matcha latte' },
  },
  {
    id: 'banana-bread',
    name: 'Banana bread matcha latte',
    ingredients: [...BASE, { amount: '[amount]', item: 'banana bread syrup' }],
    steps: ['Pour syrup into the glass.', 'Add ice and oat milk.', 'Whisk matcha with water, pour on top.'],
    image: { src: '/images/matcha/matcha-banana-bread.webp', alt: 'Banana bread iced matcha latte' },
  },
  {
    id: 'honey-vanilla',
    name: 'Honey vanilla matcha latte',
    ingredients: [...BASE, { amount: '[amount]', item: 'honey' }, { amount: '[amount]', item: 'vanilla bean paste' }],
    steps: ['Whisk matcha, water, honey, vanilla.', 'Add ice and oat milk.', 'Pour the matcha on top.'],
    image: { src: '/images/matcha/matcha-honey-vanilla.webp', alt: 'Honey vanilla iced matcha latte' },
  },
]

export const sections = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Work' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'leadership', label: 'Leadership' },
  { id: 'more', label: 'More' },
  { id: 'contact', label: 'Contact' },
] as const
