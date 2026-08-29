import {
  PersonalInfo,
  StatItem,
  SkillCategory,
  Project,
  ExperienceItem,
  EducationItem,
  CertificationItem,
  ServiceItem,
  WhyWorkItem,
} from '../types';

export const personalInfo: PersonalInfo = {
  name: 'Muhammad Hamza',
  title: 'Software Engineer | Full-Stack Developer | AI Enthusiast',
  coreTech: ['React.js', 'Node.js', 'PostgreSQL', 'REST APIs', 'AI/ML'],
  location: 'Abbottabad, Pakistan',
  email: 'iamhamxaqureshi@gmail.com',
  phone: '03324454542',
  linkedin: 'https://www.linkedin.com/in/muhammad-hamza-7518a533',
  github: 'https://github.com/MuhammadHamxaQureshi',
  tagline: 'Building scalable software. Exploring intelligent systems. Solving real-world problems.',
  intro:
    'I’m a Software Engineer and Full-Stack Developer passionate about building modern, scalable, and user-focused web applications. I specialize in developing responsive interfaces, robust backend systems, RESTful APIs, and database-driven solutions while continuously exploring AI/ML to create intelligent and impactful software.',
  avatarUrl: '/profile.jpg',
  resumeUrl: '/resume.pdf',
};

export const aboutContent = {
  paragraphs: [
    'I’m a Software Engineering student and aspiring Software Engineer with a strong interest in Full-Stack Development, Artificial Intelligence, and modern software engineering practices. I enjoy turning ideas and real-world problems into practical, reliable, and user-friendly software solutions.',
    'My development journey has been shaped through a combination of university education, online learning, hands-on projects, technical courses, and internship experiences. This combination has helped me develop both theoretical knowledge and practical experience in building software applications.',
    'I work with modern technologies including React.js, Node.js, PostgreSQL, REST APIs, JavaScript, and other software development tools. I’m also continuously expanding my knowledge of AI/ML and exploring how intelligent technologies can be integrated into real-world applications.',
    'My long-term goal is to become a highly skilled Software Engineer capable of designing and developing scalable full-stack systems and AI-powered applications that solve meaningful real-world problems. I aim to continuously learn, contribute to impactful projects, and grow as a professional in the software industry.',
  ],
  stats: [
    { value: '3.10 / 4.00', label: 'Current CGPA', sublabel: 'COMSATS University' },
    { value: '3.80 / 4.00', label: 'Latest Semester GPA', sublabel: 'Academic Excellence' },
    { value: '5th', label: 'Current Semester', sublabel: 'BS Software Engineering' },
    { value: '6+', label: 'Featured Projects', sublabel: 'Full-Stack & AI Systems' },
  ] as StatItem[],
};

export const skillCategories: SkillCategory[] = [
  {
    title: 'Programming',
    skills: [
      { name: 'C' },
      { name: 'C++' },
      { name: 'Java' },
      { name: 'C#' },
      { name: 'Python' },
      { name: 'JavaScript' },
    ],
  },
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML5' },
      { name: 'CSS3' },
      { name: 'JavaScript' },
      { name: 'React.js' },
      { name: 'Tailwind CSS' },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node.js' },
      { name: 'Express.js' },
      { name: 'Spring Boot' },
      { name: 'Laravel' },
    ],
  },
  {
    title: 'Database',
    skills: [
      { name: 'PostgreSQL' },
      { name: 'MySQL' },
      { name: 'MongoDB' },
      { name: 'SQL' },
    ],
  },
  {
    title: 'APIs & Tools',
    skills: [
      { name: 'REST APIs' },
      { name: 'Git' },
      { name: 'GitHub' },
      { name: 'VS Code' },
      { name: 'Postman' },
    ],
  },
  {
    title: 'Data & AI',
    skills: [
      { name: 'Excel' },
      { name: 'Power BI' },
      { name: 'AI/ML' },
    ],
  },
];

export const projectsData: Project[] = [
  {
    id: 'veyrivo-personalize-ai',
    title: 'Veyrivo PersonalizeAI',
    subtitle: 'Enterprise Recommendation Engine',
    category: 'AI / Recommendation System / Full-Stack',
    filterCategory: ['AI/ML', 'Full-Stack'],
    isInternship: true,
    statusBadge: 'Internship Project',
    description:
      'Veyrivo PersonalizeAI is a multi-tenant, real-time personalization and recommendation engine designed for e-commerce stores, streaming platforms, and digital businesses. It combines collaborative filtering, semantic vector embeddings, content-based matching, and real-time behavioral boosting into a hybrid recommendation pipeline.',
    architecture: [
      'API Gateway / Ingress with rate limiting',
      'JWT Authentication & bcrypt security',
      'API Key validation for external integrations',
      'Multi-tenant database isolation',
      'Analytics & event tracking pipeline',
      'Hybrid scoring recommendation engine',
      'PostgreSQL & pgvector for semantic search',
      'Redis caching for low latency',
      'Prisma ORM for schema and data layer',
    ],
    pipeline: [
      '1. Vector Similarity (semantic representation via OpenAI text-embedding-3-small)',
      '2. Collaborative Filtering (user-item interaction matrix)',
      '3. Content-Based Matching (metadata & attribute alignment)',
      '4. Real-Time Behavioral Boost (in-session activity weighting)',
      '5. Diversity & Novelty Filters (serendipity & catalog exploration)',
    ],
    aiCapabilities: [
      'OpenAI text-embedding-3-small',
      'Semantic vector similarity search',
      'Collaborative filtering algorithms',
      'Content-based attribute matching',
      'Real-time session boosting',
      'Intelligent cold-start handling strategy',
    ],
    productCapabilities: [
      'Recommended For You personalized carousels',
      'Frequently Bought Together co-occurrence widgets',
      'Similar Items similarity modules',
      'Trending Now real-time velocity tracking',
      'Live dynamic catalog & real-time filtering',
      'Add to cart & product rating tracking',
      'Guest-to-user session identity stitching',
    ],
    analytics: [
      'Conversion funnel tracking & CTR metrics',
      'Revenue attribution models',
      'Precision@K & Recall@K evaluation',
      'MAP (Mean Average Precision)',
      'NDCG@K (Normalized Discounted Cumulative Gain)',
      'Intra-List Diversity & Catalog Coverage metrics',
      'Item Novelty calculation',
    ],
    enterpriseCapabilities: [
      'Multi-tenant architecture with tenant isolation',
      'Role-Based Access Control (RBAC)',
      'A/B testing experimentation framework',
      'Model versioning, deployment & rollback',
      'REST APIs ready for mobile apps & Shopify/WooCommerce',
    ],
    features: [
      'Hybrid 5-stage recommendation pipeline',
      'Semantic vector embeddings with pgvector',
      'Real-time session behavioral boosting',
      'Multi-tenant isolation & API key management',
      'Comprehensive ranking evaluation metrics (NDCG, MAP, Recall@K)',
    ],
    technologies: [
      'Node.js',
      'PostgreSQL',
      'pgvector',
      'Redis',
      'Prisma',
      'REST APIs',
      'OpenAI Embeddings',
      'JWT',
    ],
    githubUrl: 'https://github.com/MuhammadHamxaQureshi/Veyrivo-RecommendAI.git',
  },
  {
    id: 'smart-surveillance-threat-detection',
    title: 'Smart Surveillance Threat Detection System',
    category: 'AI / Computer Vision',
    filterCategory: ['AI/ML', 'Computer Vision'],
    description:
      'An AI-powered surveillance solution designed to monitor live camera feeds and video streams, identify potentially dangerous or suspicious situations, and trigger automated alerts and evidence collection.',
    threatDetection: [
      'Weapons detection',
      'Fire & flame identification',
      'Fighting / physical violence detection',
      'Intrusion / unauthorized zone entry',
      'Suspicious activity & anomalous person behavior',
    ],
    workflow: [
      'Live Camera Feed',
      'Video Frame Processing',
      'AI Detection (YOLO / TensorFlow)',
      'Threat Identified & Classified',
      'Real-Time Alert Triggered',
      'Evidence Screenshot Captured',
      'Incident Video Recording',
      'Automated Email Notification Sent',
    ],
    features: [
      'Live multi-stream camera monitoring',
      'AI-based multi-threat classification (weapons, fire, intrusion)',
      'Automated screenshot & incident recording',
      'Real-time alert dispatch with email notifications',
      'Centralized monitoring dashboard & event logging',
    ],
    technologies: [
      'Python',
      'OpenCV',
      'YOLO',
      'TensorFlow',
      'NumPy',
      'Pandas',
      'SMTP Email',
    ],
    githubUrl: 'https://github.com/MuhammadHamxaQureshi/-Smart-Surveillance-Threat-Detection-System.git',
  },
  {
    id: 'smart-attendance-master-system',
    title: 'Smart Attendance Master System',
    category: 'AI / Computer Vision / Automation',
    filterCategory: ['AI/ML', 'Computer Vision'],
    description:
      'An intelligent attendance management system that uses camera-based facial recognition to identify students and automate attendance recording and reporting.',
    workflow: [
      'Camera Check',
      'Student Registration',
      'Multi-Angle Image Capture',
      'Face Model Training',
      'Live Face Recognition',
      'Automatic Attendance Record',
      'Excel Report Generation',
      'Automated Email Delivery',
    ],
    features: [
      'Camera functionality & hardware verification',
      'Student profile registration with name & registration number',
      'Multi-angle dataset image capture',
      'Haar Cascade / OpenCV facial training pipeline',
      'Automated instant attendance logging to database',
      'Excel spreadsheet report generation',
      'Automated SMTP email delivery to faculty/administrators',
    ],
    technologies: [
      'Python',
      'OpenCV',
      'Tkinter',
      'NumPy',
      'Pandas',
      'Excel Automation',
      'SMTP',
    ],
    githubUrl: 'https://github.com/MuhammadHamxaQureshi/smart-attendance-master-system.git',
  },
  {
    id: 'online-hotel-booking-system',
    title: 'Online Hotel Booking System',
    category: 'Full-Stack Web Development',
    filterCategory: ['Full-Stack'],
    description:
      'A database-driven hotel booking platform that allows users to discover available hotels and rooms, search and filter options, view room details, and make bookings through an interactive web interface.',
    features: [
      'User registration & authentication system',
      'Hotel catalog & room availability explorer',
      'Dynamic search and multi-criteria filtering',
      'Comprehensive room details with pricing and amenities',
      'Interactive room booking and reservation workflow',
      'User booking management and history dashboard',
      'Administrative panel for room & booking management',
      'Payment handling and relational MySQL database integration',
    ],
    technologies: [
      'HTML5',
      'CSS3',
      'JavaScript',
      'PHP',
      'MySQL',
    ],
  },
  {
    id: 'makeup-ordering-system',
    title: 'Makeup Ordering System',
    category: 'E-Commerce / Full-Stack',
    filterCategory: ['E-Commerce', 'Full-Stack'],
    description:
      'An e-commerce web application designed for browsing and purchasing makeup products. The system provides customers with product discovery, search and filtering, detailed product information, cart and checkout functionality, while providing administrative features for managing products, inventory, users, and orders.',
    features: [
      'Customer account registration & secure authentication',
      'Product catalog organized by beauty categories',
      'Real-time product search and attribute filtering',
      'Detailed product view with specifications & imagery',
      'Persistent shopping cart & checkout pipeline',
      'Customer order tracking & receipt management',
      'Admin control panel for product catalog & inventory control',
      'User management & order status lifecycle handling',
    ],
    technologies: [
      'JavaScript',
      'HTML5',
      'CSS3',
      'PHP / Backend',
      'Relational Database',
      'Payment Flow',
    ],
  },
  {
    id: 'student-portal-management-system',
    title: 'Student Portal Management System',
    category: 'Software Development / C',
    filterCategory: ['Full-Stack'],
    description:
      'A student management system developed in C to organize and manage student-related academic information. The system provides functionality for managing student records, courses, grades, attendance, and administrative operations.',
    features: [
      'Student registration & secure authentication',
      'CRUD operations for student academic records',
      'Course enrollment & curriculum management',
      'Marks, grading metrics & calculation logic',
      'Attendance tracking and percentage verification',
      'Fast student record search algorithms',
      'Admin privilege control and file handling persistence',
    ],
    technologies: [
      'C',
      'Data Structures',
      'File Handling',
      'Algorithms',
    ],
    githubUrl: 'https://github.com/MuhammadHamxaQureshi/student-portal-management-system.git',
  },
];

export const experienceData: ExperienceItem[] = [
  {
    role: 'AI Developer',
    company: 'Veyrivo Technologies',
    period: '20 August 2026 – 20 September 2026',
    location: 'Remote',
    type: 'Internship',
    description:
      'Working as an AI Developer on a real-world end-to-end project, responsible for developing and completing the assigned project while applying AI and software engineering concepts.',
    relatedProjectId: 'veyrivo-personalize-ai',
    skillsUsed: ['AI/ML', 'Vector Embeddings', 'Recommendation Systems', 'Node.js', 'PostgreSQL', 'Redis'],
  },
  {
    role: 'Web Developer',
    company: 'Zidio',
    period: '03 August 2026 – 03 November 2026',
    location: 'Remote',
    type: 'Internship',
    status: 'Currently Working',
    description:
      'Working as a Web Developer Intern, contributing to real-world web development tasks and gaining hands-on experience with modern development workflows and technologies.',
    skillsUsed: ['Web Development', 'JavaScript', 'Frontend Frameworks', 'REST APIs', 'Git Workflows'],
  },
];

export const educationData: EducationItem = {
  degree: 'BS Software Engineering',
  institution: 'COMSATS University Islamabad',
  campus: 'Abbottabad Campus',
  period: '2024 – 2028',
  status: '5th Semester',
  cgpa: '3.10 / 4.00',
  latestGpa: '3.80 / 4.00',
};

export const certificationsData: CertificationItem[] = [
  {
    id: 'cert-1',
    title: 'Web Development',
    category: 'Full-Stack & Frontend',
    certificateUrl: '#',
  },
  {
    id: 'cert-2',
    title: 'Graphic Design',
    category: 'UI/UX & Creative',
    certificateUrl: '#',
  },
  {
    id: 'cert-3',
    title: 'Data Analytics & Business Intelligence',
    category: 'Data & Insights',
    certificateUrl: '#',
  },
  {
    id: 'cert-4',
    title: 'Artificial Intelligence and Applications',
    category: 'AI & Machine Learning',
    certificateUrl: '#',
  },
];

export const servicesData: ServiceItem[] = [
  {
    id: 'fullstack',
    title: 'Full-Stack Web Development',
    description: 'Modern, responsive and scalable web applications designed for stability, performance, and optimal user experiences.',
    iconName: 'Layout',
    deliverables: ['End-to-end web apps', 'Single-page applications (SPA)', 'Responsive UI & state management'],
  },
  {
    id: 'frontend',
    title: 'Frontend Development',
    description: 'Interactive, responsive interfaces using React.js, Tailwind CSS, and modern frontend design engineering principles.',
    iconName: 'Code2',
    deliverables: ['React.js component systems', 'Pixel-perfect mobile responsiveness', 'Smooth micro-interactions'],
  },
  {
    id: 'backend',
    title: 'Backend Development',
    description: 'Backend systems, REST APIs and server-side applications using Node.js, Express.js and related server technologies.',
    iconName: 'Server',
    deliverables: ['RESTful API architecture', 'Authentication & authorization (JWT)', 'Middleware & error handling'],
  },
  {
    id: 'database',
    title: 'Database Development',
    description: 'Database-driven applications leveraging structured schemas and efficient queries in PostgreSQL, MySQL and SQL.',
    iconName: 'Database',
    deliverables: ['Relational schema design', 'Query optimization & indexing', 'ORM integration (Prisma)'],
  },
  {
    id: 'aiml',
    title: 'AI/ML Solutions',
    description: 'Intelligent software solutions and AI-powered application features integrated directly into web workflows.',
    iconName: 'BrainCircuit',
    deliverables: ['Vector similarity & embeddings', 'Hybrid recommendation engines', 'Intelligent data pipelines'],
  },
  {
    id: 'vision',
    title: 'Computer Vision',
    description: 'AI-powered recognition, detection, and surveillance applications built with OpenCV, YOLO, and Python.',
    iconName: 'Eye',
    deliverables: ['Real-time object & threat detection', 'Facial recognition & verification', 'Video stream processing'],
  },
  {
    id: 'ecommerce',
    title: 'E-Commerce Development',
    description: 'Modern online stores, product catalogs, inventory management, shopping carts, and streamlined checkout systems.',
    iconName: 'ShoppingBag',
    deliverables: ['Product catalog & filtering', 'Cart & checkout architectures', 'Admin management dashboards'],
  },
];

export const whyWorkData: WhyWorkItem[] = [
  {
    title: 'Problem Solving',
    description: 'Focused on turning real-world problems into practical, reliable, and user-friendly software solutions.',
    iconName: 'Lightbulb',
  },
  {
    title: 'Continuous Learning',
    description: 'Continuously improving through university education, online technical courses, practical projects, and internships.',
    iconName: 'GraduationCap',
  },
  {
    title: 'Full-Stack Perspective',
    description: 'Comfortable working across frontend interfaces, backend servers, REST APIs, and database layers.',
    iconName: 'Layers',
  },
  {
    title: 'AI Exploration',
    description: 'Actively exploring AI/ML, computer vision, embeddings, and intelligent software systems for real-world use.',
    iconName: 'Sparkles',
  },
];
