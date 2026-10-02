import { useState } from 'react';
import {
  Code2, Layout, Server, BrainCircuit, Cpu, Wrench, Briefcase,
  type LucideIcon,
} from 'lucide-react';
import { skillCategories, allSkillTabs } from '@/data/skills';

const iconMap: Record<string, LucideIcon> = {
  Code2, Layout, Server, BrainCircuit, Cpu, Wrench, Briefcase,
};

const colorMap: Record<string, { text: string; bg: string; border: string; dot: string }> = {
  green: { text: 'text-accent-green', bg: 'bg-accent-green/10', border: 'border-accent-green/30', dot: 'bg-accent-green' },
  cyan: { text: 'text-accent-cyan', bg: 'bg-accent-cyan/10', border: 'border-accent-cyan/30', dot: 'bg-accent-cyan' },
  blue: { text: 'text-accent-blue', bg: 'bg-accent-blue/10', border: 'border-accent-blue/30', dot: 'bg-accent-blue' },
};

export default function Skills() {
  const [activeTab, setActiveTab] = useState('All');

  const filtered = activeTab === 'All'
    ? skillCategories
    : skillCategories.filter((c) => c.name === activeTab);

  return (
    <section id="skills" className="relative py-24 overflow-hidden">
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-accent-green/5 rounded-full blur-[100px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="reveal inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-xs font-medium text-accent-green border border-accent-green/20 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-green" />
            Technical Skills
          </div>
          <h2 className="reveal text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            What I <span className="gradient-text">Work With</span>
          </h2>
          <p className="reveal delay-100 text-sm text-slate-500 max-w-lg mx-auto">
            A toolkit spanning AI/ML, full-stack development, IoT hardware, and business management.
          </p>
        </div>

        {/* Filter tabs */}
        <div className="reveal flex flex-wrap justify-center gap-2 mb-10">
          {allSkillTabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-lg text-xs font-medium transition-all ${
                activeTab === tab
                  ? 'bg-gradient-to-r from-accent-green to-accent-cyan text-ink-950'
                  : 'glass text-slate-400 hover:text-white light:hover:text-ink-900'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Skill category cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((cat, idx) => {
            const Icon = iconMap[cat.icon] ?? Code2;
            const c = colorMap[cat.color] ?? colorMap.green;
            return (
              <div
                key={cat.name}
                className="reveal-scale card-lift glass rounded-2xl p-6 border border-white/10 hover:border-white/20 group"
                style={{ transitionDelay: `${idx * 60}ms` }}
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className={`w-11 h-11 rounded-xl ${c.bg} ${c.border} border flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <Icon className={`w-5 h-5 ${c.text}`} />
                  </div>
                  <h3 className="text-base font-semibold">{cat.name}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className={`px-3 py-1.5 rounded-lg text-xs font-medium glass border border-white/5 hover:${c.border} hover:scale-105 transition-all cursor-default`}
                    >
                      <span className={`inline-block w-1.5 h-1.5 rounded-full ${c.dot} mr-1.5`} />
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
