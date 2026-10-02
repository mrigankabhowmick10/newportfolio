export interface Project {
  id: string;
  name: string;
  category: string;
  categoryLabel: string;
  description: string;
  achievements: string[];
  tags: string[];
  icon: string;
  color: string;
  highlight?: string;
}

export const projects: Project[] = [
  {
    id: 'medireach',
    name: 'MediReach',
    category: 'healthtech',
    categoryLabel: 'HealthTech',
    description:
      'Rural healthcare application focused on improving access to healthcare technology for underserved communities.',
    achievements: [
      'TechXtreme — 3rd Place',
      'Eureka — 2nd Place',
      'IBM Innovation Challenge Winner',
    ],
    tags: ['React', 'Node.js', 'Healthcare', 'AI Integration'],
    icon: 'HeartPulse',
    color: 'rose',
  },
  {
    id: 'agrisky',
    name: 'AgriSky',
    category: 'agritech',
    categoryLabel: 'AgriTech / Environmental Monitoring',
    description:
      'Bio-environment monitoring project for tracking and analyzing ecological conditions in real time.',
    achievements: ['Sanjeevani Innovation Competition — 1st Place'],
    tags: ['IoT', 'Data Analysis', 'Environmental', 'Sensors'],
    icon: 'CloudSun',
    color: 'cyan',
  },
  {
    id: 'greenleaf',
    name: 'GreenLeaf',
    category: 'sustainability',
    categoryLabel: 'Sustainability',
    description:
      'Sustainability project promoting eco-friendly solutions and environmental consciousness.',
    achievements: ['Ideathon — 2nd Place'],
    tags: ['Sustainability', 'Green Tech', 'Web'],
    icon: 'Leaf',
    color: 'green',
  },
  {
    id: 'campusx',
    name: 'CampusX',
    category: 'edtech',
    categoryLabel: 'EdTech / SaaS',
    description:
      'Online learning SaaS platform designed to enhance the educational experience for students.',
    achievements: ['Positive Google Feedback'],
    tags: ['React', 'Next.js', 'SaaS', 'Education'],
    icon: 'GraduationCap',
    color: 'blue',
  },
  {
    id: 'microplast',
    name: 'Microplast Detector',
    category: 'environmental',
    categoryLabel: 'Environmental Technology / Hackathon',
    description:
      'Environmental technology project for detecting microplastic contamination, built for the Smart India Hackathon.',
    achievements: ['Smart India Hackathon'],
    tags: ['IoT', 'AI/ML', 'Environmental', 'Hackathon'],
    icon: 'FlaskConical',
    color: 'cyan',
  },
];

export const projectFilters = [
  { id: 'all', label: 'All Projects' },
  { id: 'healthtech', label: 'HealthTech' },
  { id: 'agritech', label: 'AgriTech' },
  { id: 'sustainability', label: 'Sustainability' },
  { id: 'edtech', label: 'EdTech' },
  { id: 'environmental', label: 'Environmental' },
];

export const soilGuardJourney = [
  { phase: 'Innovation', icon: 'Lightbulb' },
  { phase: 'Competition Recognition', icon: 'Trophy' },
  { phase: 'Escape Top 10', icon: 'Award' },
  { phase: 'Escape Incubation Winner', icon: 'Rocket' },
  { phase: 'Hult Prize Project', icon: 'Target' },
  { phase: 'Hult Prize National-Level Selection', icon: 'Flag' },
  { phase: 'Smart India Hackathon Selection', icon: 'Zap' },
  { phase: 'Revenue Generation', icon: 'DollarSign' },
  { phase: 'Growth', icon: 'TrendingUp' },
  { phase: 'Patent Process', icon: 'ScrollText' },
];

export const soilGuardBadges = [
  { label: 'Hult Prize National-Level Selection', icon: 'Trophy', emphasis: 'high' },
  { label: 'Smart India Hackathon Selected', icon: 'Zap', emphasis: 'high' },
  { label: 'Escape Incubation Winner', icon: 'Award', emphasis: 'medium' },
  { label: 'Escape Top 10', icon: 'Medal', emphasis: 'medium' },
  { label: 'Reel Competition — 1st Place', icon: 'Video', emphasis: 'medium' },
  { label: 'Revenue Generating', icon: 'DollarSign', emphasis: 'high' },
  { label: 'Growing Venture', icon: 'TrendingUp', emphasis: 'high' },
  { label: 'Patent Process Underway', icon: 'ScrollText', emphasis: 'high' },
];

export const entrepreneurshipSteps = [
  { phase: 'Idea', icon: 'Lightbulb' },
  { phase: 'Prototype', icon: 'Wrench' },
  { phase: 'Competition Recognition', icon: 'Trophy' },
  { phase: 'Incubation', icon: 'Building2' },
  { phase: 'National-Level Selection', icon: 'Flag' },
  { phase: 'Market Validation', icon: 'CheckCircle2' },
  { phase: 'Revenue', icon: 'DollarSign' },
  { phase: 'Growth', icon: 'TrendingUp' },
  { phase: 'Patent Process', icon: 'ScrollText' },
];
