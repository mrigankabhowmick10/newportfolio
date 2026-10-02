export interface Achievement {
  title: string;
  detail: string;
  icon: string;
  rank?: string;
  color: string;
}

export const achievements: Achievement[] = [
  {
    title: 'Hult Prize',
    detail: '1st Place Winner Certificate',
    icon: 'Trophy',
    rank: '1st Place',
    color: 'gold',
  },
  {
    title: 'Hult Prize National-Level Selection',
    detail: 'SoilGuard selected for the Hult Prize national-level stage associated with IIT Bombay',
    icon: 'Flag',
    rank: 'National Level',
    color: 'gold',
  },
  {
    title: 'Smart India Hackathon',
    detail: 'Project Selected',
    icon: 'Zap',
    rank: 'Selected',
    color: 'cyan',
  },
  {
    title: 'Escape Incubation',
    detail: 'Top 10 + Winner',
    icon: 'Rocket',
    rank: 'Winner',
    color: 'green',
  },
  {
    title: 'UEM Urekon',
    detail: 'Winner',
    icon: 'Award',
    rank: 'Winner',
    color: 'green',
  },
  {
    title: 'Sanjeevani Innovation Competition',
    detail: '1st Place',
    icon: 'Medal',
    rank: '1st Place',
    color: 'gold',
  },
  {
    title: 'Ideachain Competition',
    detail: '1st Place',
    icon: 'Medal',
    rank: '1st Place',
    color: 'gold',
  },
  {
    title: 'Reel Competition',
    detail: '1st Place',
    icon: 'Video',
    rank: '1st Place',
    color: 'gold',
  },
  {
    title: 'GreenLeaf Ideathon',
    detail: '2nd Place',
    icon: 'Leaf',
    rank: '2nd Place',
    color: 'cyan',
  },
  {
    title: 'IBM Innovation Challenge',
    detail: '2nd Place',
    icon: 'Cpu',
    rank: '2nd Place',
    color: 'blue',
  },
  {
    title: 'Eureka',
    detail: '2nd Place',
    icon: 'Lightbulb',
    rank: '2nd Place',
    color: 'cyan',
  },
  {
    title: 'TechXtreme',
    detail: '3rd Place',
    icon: 'Code2',
    rank: '3rd Place',
    color: 'blue',
  },
  {
    title: 'National Science Day Model Competition',
    detail: 'Winner',
    icon: 'FlaskConical',
    rank: 'Winner',
    color: 'green',
  },
];

export interface CertCategory {
  name: string;
  icon: string;
  certs: string[];
}

export const certificationCategories: CertCategory[] = [
  {
    name: 'AI / Data',
    icon: 'BrainCircuit',
    certs: [
      'Python 101 for Data Science',
      'Gemini AI Academy Certification',
      'AWS Machine Learning Specialty Overview',
    ],
  },
  {
    name: 'AWS / Cloud',
    icon: 'Cloud',
    certs: [
      'AWS Blockchain Solutions',
      'AWS Developer Associate Exam Preparation',
      'AWS Database Migration to Aurora',
    ],
  },
  {
    name: 'Web / Creative',
    icon: 'Globe',
    certs: [
      'Website Designing',
      'Website Development',
      'Graphic Designing',
      'Digital Marketing',
      'Content Writing',
      'Public Speaking',
    ],
  },
  {
    name: 'Hackathons / Innovation',
    icon: 'Rocket',
    certs: [
      'Ranchi Hacks Hackathon',
      'Techgayan Hackathon',
      'Idea Ignition Innovation',
      'Solution Challenge',
      'Techno India University Technical Participation',
    ],
  },
];

export const generalCertificates = [
  'Certificate of Appreciation',
  'Certificate of Achievement',
  'Certificate of Winner',
  'Certificate of Participation',
  'Innovation Project Recognition',
  'Academic Technical Participation',
];

export const certFilters = ['All', 'AI / Data', 'AWS / Cloud', 'Web / Creative', 'Hackathons / Innovation'];

export interface LeadershipItem {
  title: string;
  icon: string;
  description: string;
}

export const leadershipItems: LeadershipItem[] = [
  {
    title: 'Ideathon Winner',
    icon: 'Trophy',
    description: 'Led the winning team at the Ideathon competition with a strong pitch and execution strategy.',
  },
  {
    title: 'Marketing & Ideathon Head',
    icon: 'Megaphone',
    description: 'Headed marketing initiatives and organized ideathon events, driving participation and engagement.',
  },
  {
    title: 'GDG Campus Collaboration',
    icon: 'Users',
    description: 'Collaborated with Google Developer Groups on campus for tech events and community building.',
  },
  {
    title: 'Project Management',
    icon: 'ClipboardList',
    description: 'Managed multiple technical projects from concept to completion, coordinating teams and timelines.',
  },
  {
    title: 'Innovation & Hackathon Participation',
    icon: 'Rocket',
    description: 'Active participant in hackathons and innovation challenges across healthcare, agriculture, and sustainability.',
  },
  {
    title: 'IoT Research / Innovation',
    icon: 'Cpu',
    description: 'Conducted IoT research and built smart monitoring systems for real-world applications.',
  },
  {
    title: 'Takshila Selection',
    icon: 'CheckCircle2',
    description: 'Selected for the Takshila program after a competitive technical interview process.',
  },
];

export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  icon: string;
}

export const timelineEvents: TimelineEvent[] = [
  {
    year: '2024',
    title: 'B.Tech CSE + AI/ML Begins',
    description: 'Started Computer Science & Engineering with specialization in Artificial Intelligence & Machine Learning at Techno India University.',
    icon: 'GraduationCap',
  },
  {
    year: '',
    title: 'Project Development',
    description: 'Built MediReach, CampusX, GreenLeaf, and AgriSky across healthcare, education, sustainability, and agriculture domains.',
    icon: 'Code2',
  },
  {
    year: '',
    title: 'Innovation Competitions',
    description: 'Participated and won recognition in multiple innovation competitions and hackathons.',
    icon: 'Trophy',
  },
  {
    year: '',
    title: 'SoilGuard — Co-Founder',
    description: 'Co-founded SoilGuard, a smart soil monitoring platform for intelligent agricultural decision-making.',
    icon: 'Sprout',
  },
  {
    year: '',
    title: 'Escape — Top 10 + Incubation Winner',
    description: 'SoilGuard reached the Top 10 and won the Escape Incubation program.',
    icon: 'Rocket',
  },
  {
    year: '',
    title: 'Hult Prize — National-Level Selection',
    description: 'SoilGuard selected for the Hult Prize national-level stage associated with IIT Bombay.',
    icon: 'Flag',
  },
  {
    year: '',
    title: 'Smart India Hackathon — Selected',
    description: 'Project selected for the Smart India Hackathon (SIH).',
    icon: 'Zap',
  },
  {
    year: 'Current',
    title: 'Revenue-Generating + Growing',
    description: 'SoilGuard is now a revenue-generating, growing venture with real-world traction.',
    icon: 'TrendingUp',
  },
  {
    year: 'Next',
    title: 'Patent Process Underway',
    description: 'Currently progressing through the patent process for SoilGuard technology.',
    icon: 'ScrollText',
  },
];

export const aboutTimeline = [
  { phase: 'Learn', icon: 'BookOpen' },
  { phase: 'Build', icon: 'Hammer' },
  { phase: 'Compete', icon: 'Trophy' },
  { phase: 'Incubate', icon: 'Building2' },
  { phase: 'Launch', icon: 'Rocket' },
  { phase: 'Grow', icon: 'TrendingUp' },
];

export const achievementStats = [
  { value: 9.28, label: 'Semester 1 SGPA', icon: 'BookOpen', isDecimal: true },
  { value: 8.5, label: 'Semester 2 SGPA', icon: 'BookMarked', isDecimal: true },
  { value: 0, label: 'Hult Prize National-Level', icon: 'Flag', isText: true, textValue: 'Hult Prize' },
  { value: 0, label: 'Smart India Hackathon', icon: 'Zap', isText: true, textValue: 'SIH' },
  { value: 0, label: 'SoilGuard Revenue Generating', icon: 'DollarSign', isText: true, textValue: 'SoilGuard' },
  { value: 0, label: 'Patent Process Underway', icon: 'ScrollText', isText: true, textValue: 'Patent' },
];

export const whyWorkWithMe = [
  {
    title: 'Build',
    icon: 'Hammer',
    description: 'I turn ideas into working technology — from concept to deployed product.',
    color: 'green',
  },
  {
    title: 'Innovate',
    icon: 'Lightbulb',
    description: 'I participate in innovation challenges and hackathons, pushing boundaries across domains.',
    color: 'cyan',
  },
  {
    title: 'Lead',
    icon: 'Users',
    description: 'I combine technical skills with project management, marketing, and collaboration.',
    color: 'blue',
  },
  {
    title: 'Scale',
    icon: 'TrendingUp',
    description: 'Through SoilGuard, I am gaining experience taking a technology project toward real-world adoption and revenue.',
    color: 'green',
  },
];

export const navSections = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'soilguard', label: 'SoilGuard' },
  { id: 'projects', label: 'Projects' },
  { id: 'achievements', label: 'Achievements' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'contact', label: 'Contact' },
];
