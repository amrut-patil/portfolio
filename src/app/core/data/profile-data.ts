import { Profile, SkillGroup, Company, EducationEntry, Project } from '../models/profile.model';

export const PROFILE: Profile = {
  name: 'Amrut Patil',
  title: 'Full Stack Developer · Angular Specialist',
  tagline: '15+ years architecting enterprise web & desktop applications',
  summary: [
    'Full Stack Developer with 15+ years of experience developing and maintaining enterprise applications across web and desktop platforms. Strong expertise in front-end technologies including Angular, AngularJS, TypeScript, JavaScript, HTML, CSS and Delphi, with working experience in back-end development using Core Java, Spring Boot, GraphQL, and REST APIs.',
    'Experienced in delivering software solutions throughout the development lifecycle — requirements analysis, design, development, testing, deployment, and production support. Skilled in building responsive user interfaces, integrating applications with backend services, and collaborating with cross-functional teams in Agile environments.',
  ],
  social: {
    linkedin: 'https://www.linkedin.com/in/amrut-patil-70469250',
    github: 'https://github.com/amrut-patil',
    email: 'amrut.patil@hotmail.com',
    phone: '+91 97650 00206',
    location: 'Pune, Maharashtra, India',
  },
  resumeUrl: 'assets/resume/amrut-patil-resume.pdf',
};

export const SKILL_GROUPS: SkillGroup[] = [
  {
    category: 'Frontend',
    skills: ['Angular', 'AngularJS', 'TypeScript', 'JavaScript', 'HTML', 'CSS', 'Delphi'],
  },
  {
    category: 'Backend',
    skills: ['Core Java', 'Spring Boot', 'REST APIs', 'GraphQL', 'gRPC', 'WebSockets'],
  },
  {
    category: 'Build Tools',
    skills: ['NPM', 'Webpack', 'Maven'],
  },
  {
    category: 'Testing',
    skills: ['JUnit', 'Mockito', 'Selenium', 'Jasmine', 'Karma', 'Postman'],
  },
  {
    category: 'Version Control',
    skills: ['Git', 'GitHub', 'Bitbucket', 'StarTeam'],
  },
  {
    category: 'Practices',
    skills: ['Agile', 'Scrum', 'Kanban', 'CI/CD', 'DevOps', 'Microservices', 'REST API Design'],
  },
  {
    category: 'Also Familiar With',
    skills: ['AWS', 'Jenkins CI/CD', 'Power BI'],
  },
];

export const COMPANIES: Company[] = [
  {
    name: 'TriplePoint Technology',
    location: 'Pune, Maharashtra, India',
    totalDuration: '18 yrs 5 mos',
    current: true,
    roles: [
      { role: 'Senior Software Architect', dateRange: 'Apr 2014 – Jun 2026' },
      { role: 'Software Architect', dateRange: 'Jan 2011 – Apr 2014' },
      { role: 'Senior Software Engineer', dateRange: 'Feb 2008 – Dec 2010' },
    ],
    bullets: [
      'Built enterprise web and desktop applications using Angular, TypeScript, JavaScript, Core Java, Spring Boot, GraphQL, and REST APIs.',
      'Resolved production issues through strong problem-solving, debugging, and troubleshooting.',
      'Worked across the full SDLC, from requirements to production support.',
    ],
  },
  {
    name: 'Ness Technologies India Pvt. Ltd.',
    location: 'Mumbai, Maharashtra, India',
    totalDuration: '1 yr 4 mos',
    current: false,
    roles: [{ role: 'Software Engineer', dateRange: 'Oct 2006 – Jan 2008' }],
    bullets: [
      'Developed Delphi-based components and supported application maintenance.',
      'Fixed defects and assisted with deployment and troubleshooting.',
    ],
  },
  {
    name: 'MicroWorld Software Services Pvt. Ltd.',
    location: 'Mumbai, Maharashtra, India',
    totalDuration: '2 yrs',
    current: false,
    roles: [{ role: 'Software Developer', dateRange: 'Oct 2004 – Sep 2006' }],
    bullets: [
      'Built and maintained enterprise application modules.',
      'Contributed to development, testing, debugging, and issue resolution.',
    ],
  },
];

export const EDUCATION: EducationEntry[] = [
  {
    school: 'Institute of Management & Entrepreneurship Development, Pune',
    degree: 'Master of Computer Applications (M.C.A.)',
    years: '2002 – 2005',
  },
  {
    school: 'Vivekanand College, Kolhapur',
    degree: 'Bachelor of Science (B.Sc.), Mathematics',
    years: '1999 – 2002',
  },
];

export const PROJECTS: Project[] = [
  {
    name: 'TriplePoint UX',
    description:
      'Web-based user interface layer for the TriplePoint suite, unifying design patterns and shared component architecture across products.',
    tags: ['Angular', 'TypeScript', 'Spring Boot', 'GraphQL', 'REST APIs'],
  },
  {
    name: 'Foundation',
    description:
      'In-house application development framework providing shared building blocks, conventions, and tooling for product teams to build on.',
    tags: ['Angular', 'TypeScript', 'Spring Boot', 'GraphQL', 'REST APIs', 'Framework Design'],
  },
  {
    name: 'TriplePoint CTRM',
    description:
      'Commodity trading and risk management platform used by enterprise trading desks — led front-end architecture and Delphi module design across the application.',
    tags: ['Delphi', 'Core Java'],
  },
  {
    name: 'QMastor',
    description:
      'CTRM application supporting commodity trading workflows, built and maintained across multiple release cycles.',
    tags: ['Angular', 'Java', 'Enterprise'],
  },
  {
    name: 'TestPilot',
    description:
      'Internal load testing and performance measurement tool used to validate application performance under production-scale conditions.',
    tags: ['Performance Testing', 'Tooling'],
  },
  {
    name: 'Retalix',
    description: 'Point-of-sale (POS) application supporting retail transaction workflows.',
    tags: ['Delphi', 'Desktop', 'POS'],
  },
  {
    name: 'eConceal',
    description:
      'Personal firewall software installed on end-user PCs, providing network protection at the endpoint level.',
    tags: ['Delphi', 'WinpkFilter', 'Security', 'Systems'],
  },
];
