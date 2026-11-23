// All site copy lives here. Keep it plain and specific: what was built, what happened, numbers.
// Search for "TODO" to find the facts only Samia can fill in.

export type Link = { label: string; href: string }

export const profile = {
  name: 'Samia Rahman',
  greeting: 'hi, I’m Samia',
  sentence: 'I research reinforcement learning for robots, build ML pipelines, and make a very good strawberry matcha.',
  status: 'Graduating 2027 · open to grad programs and new-grad roles',
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
  'I’m a fourth-year Computing Science student at the University of Alberta with two years of internship experience and ongoing research in robotics and machine learning. My research focuses on making robot control problems smaller so agents learn faster, and I’ve built data and ML pipelines for the City of Edmonton and Capital Power. Right now I’m learning system design, and I’m curious about how AI is changing the way people think, feel and go about their day.'

// Fun fact map. Order is the route. `id` picks the map point in data/worldMap.ts.
export const waypoints = [
  { id: 'moscow', region: 'Eastern Europe', line: 'Born in Eastern Europe.' },
  { id: 'dhaka', region: 'South Asia', line: 'Spent my teenage years in Dhaka, Bangladesh, and finished high school there.' },
  { id: 'edmonton', region: 'North America', line: 'Finishing my bachelor’s at the University of Alberta in Edmonton.' },
] as const

// Work experience, current role first, then newest first.
// `tools` feeds the Skills and tools counts: only tools named in the bullets (Python counted where PyTorch/PyOD/Pandas are used).
export type Role = { title: string; org: string; dates: string; points: string[]; tools: string[] }

export const experience: Role[] = [
  {
    title: 'Machine Learning & Robotics Research Assistant',
    org: 'University of Alberta',
    dates: 'Sep 2024 – present',
    points: [
      'Built VAE-based state-conditioned linear (SCL) action maps in PyTorch that cut a robot’s control space from 6-D to 3-D, with 80× lower reconstruction error.',
      'Improved reinforcement learning efficiency by 50% with a Soft Actor-Critic agent acting in the smaller space, and explored transfer across robot morphologies.',
      'Ran and documented experiments with faculty mentors using Robosuite, SAC and PPO.',
    ],
    tools: ['Python', 'PyTorch', 'VAEs', 'SAC', 'PPO', 'Robosuite'],
  },
  {
    title: 'Data Science Intern',
    org: 'Capital Power',
    dates: 'May – Aug 2026',
    points: [
      'Built a turbine failure prediction pipeline for a 1.6 GW plant on Snowflake, Databricks and Azure DevOps. It shows which pieces of equipment drive each failure, for root-cause analysis.',
      'Benchmarked PyOD anomaly detectors, including Isolation Forest, against statistical baselines for early fault detection.',
    ],
    tools: ['Python', 'Snowflake', 'Databricks', 'Azure DevOps', 'PyOD'],
  },
  {
    title: 'Undergraduate Teaching Assistant',
    org: 'Faculty of Computing Science, University of Alberta',
    dates: 'Jan – Apr 2026',
    points: ['Ran Python labs on automation, testing and responsible use of AI tools.'],
    tools: ['Python'],
  },
  {
    title: 'Software Engineer Intern',
    org: 'City of Edmonton, Financial & Corporate Services',
    dates: 'May – Dec 2025',
    points: [
      'Built Python (Pandas, SQLAlchemy) and SQL Server pipelines on 20 SAP Ariba REST APIs, processing millions of procurement records for 500+ users.',
      'Added automated validation and monitoring. Reporting discrepancies across supply chain systems fell by 30%.',
    ],
    tools: ['Python', 'Pandas', 'SQLAlchemy', 'SQL'],
  },
  {
    title: 'Machine Learning Engineer Intern',
    org: 'Process Data Analytics and Smart Automation Lab (PDASA)',
    dates: 'Jan – Apr 2025',
    points: [
      'Deployed an A3C reinforcement learning agent with CNN-LSTM encoders for closed-loop valve control on an industrial bitumen extraction line, using camera input.',
      'Cut manual monitoring by 80%.',
      'Migrated the legacy system from TensorFlow 1.x to PyTorch and rebuilt the training pipeline, making training 35% faster.',
    ],
    tools: ['Python', 'PyTorch', 'TensorFlow', 'A3C', 'CNNs'],
  },
]

// Projects. Rendered as: title, context line, one paragraph (problem, built, result), stack, links, media.
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
  problem: string
  built: string
  result: string
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
    problem:
      'A health support chatbot can sound kind and still ignore what the person asked. Telling someone who says "I just want information" that they need to quit can push them away from help.',
    built:
      'A review tool that tracks what the person has said they want, runs 18 rule-based checks on every chatbot reply, and flags replies that pressure, miss danger signs, give medical advice or cite unsupported services. Clinicians and peer support workers make the final call, with an AI second opinion clearly labelled. It runs entirely in the browser with no network calls.',
    result:
      'On 59 labelled practice conversations, the checks caught 42 of 44 problem replies, including all 17 critical ones, and flagged none of the good replies. Early results; clinician review is next.',
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
    problem:
      'Travel sites treat accessibility as a single checkbox. Someone using a wheelchair, someone with sensory sensitivities and someone recovering from an injury all get the same unhelpful filter.',
    built:
      'A platform where travellers enter their accessibility needs and get matched with hotels and services at their destination. It covers mobility, sensory, cognitive and neurodivergent needs, plus temporary ones like injury or fatigue, and works for caregivers planning on someone’s behalf. Built with FastAPI and plain HTML, CSS and JavaScript.',
    result: 'Placed 3rd at natIgnite 2026.',
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
    problem: 'Invoices, payments and documents for 50+ artists were handled by hand, and the documents included personal information covered by PIPEDA.',
    built:
      'A multi-tenant portal in React, Node.js and PostgreSQL with OAuth2 sign-in, role-based access, an invoice approval pipeline and PIPEDA-compliant document storage on AWS S3.',
    result: 'In production for 50+ artists. The manual admin steps are gone.',
    stack: ['React', 'Node.js', 'PostgreSQL', 'OAuth2', 'AWS S3'],
    links: [],
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
    problem: 'Logging groceries by hand takes long enough that people stop doing it, and then food expires unnoticed.',
    built: 'A React Native app that sends a receipt photo to Gemini, gets back structured line items and syncs them through Firebase.',
    result: 'Manual entry dropped by about 90%: one photo replaces typing each item.',
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
    problem: 'Popular events fill in seconds, so a first-come sign-up rewards whoever refreshes fastest and lets duplicate entries in.',
    built:
      'The backend of an Android lottery app on Firebase Realtime Database: geolocation checks, QR code validation, and atomic transactions so two sign-ups cannot claim the same slot.',
    result: 'No duplicate entries with 10+ users signing up at the same time.',
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
    problem: 'A smart home system has to keep device state consistent, and that logic is easy to break without noticing.',
    built: 'A test-driven suite of black-box and boundary-value tests in JUnit 5, run in Docker on GitHub Actions for every commit.',
    result: '80%+ branch coverage on the state consistency logic.',
    stack: ['Java', 'JUnit 5', 'Docker', 'GitHub Actions'],
    links: [],
    media: [],
  },
  {
    id: 'mongodb',
    date: '2024-03', // Winter 2024 (from the repo name)
    title: 'MongoDB schema redesign',
    tagline: 'Faster reads and less storage for a live database',
    context: 'Course project',
    problem: 'Reads were slow and the database used more storage than it needed to.',
    built: 'Redesigned the MongoDB schemas, data models and indexes, using Python and SQL.',
    result: 'Reads 30% faster and storage down 22%.',
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

export const leadership: Omit<Role, 'tools'>[] = [
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
