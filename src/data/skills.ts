export interface SkillCategory {
  name: string;
  icon: string;
  color: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    name: 'Programming',
    icon: 'Code2',
    color: 'green',
    skills: ['Python', 'JavaScript', 'C', 'HTML', 'CSS'],
  },
  {
    name: 'Frontend',
    icon: 'Layout',
    color: 'cyan',
    skills: ['React', 'Next.js', 'Tailwind CSS'],
  },
  {
    name: 'Backend',
    icon: 'Server',
    color: 'blue',
    skills: ['Node.js', 'Express.js'],
  },
  {
    name: 'AI / ML',
    icon: 'BrainCircuit',
    color: 'green',
    skills: ['TensorFlow', 'Scikit-learn', 'Dialogflow', 'NLP', 'Data Analysis', 'AI Integration'],
  },
  {
    name: 'IoT / Hardware',
    icon: 'Cpu',
    color: 'cyan',
    skills: ['IoT', 'Robotics', 'Smart Monitoring Systems'],
  },
  {
    name: 'Tools',
    icon: 'Wrench',
    color: 'blue',
    skills: ['Git', 'GitHub', 'WhatsApp API', 'Trello'],
  },
  {
    name: 'Business / Management',
    icon: 'Briefcase',
    color: 'green',
    skills: ['Project Management', 'Market Analysis', 'Project Portfolio Management', 'Entrepreneurship', 'Marketing'],
  },
];

export const allSkillTabs = ['All', 'Programming', 'Frontend', 'Backend', 'AI / ML', 'IoT / Hardware', 'Tools', 'Business / Management'];
