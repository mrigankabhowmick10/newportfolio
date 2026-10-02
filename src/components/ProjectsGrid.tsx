import { useState } from 'react';
import {
  HeartPulse, CloudSun, Leaf, GraduationCap, FlaskConical,
  ArrowRight, Trophy, type LucideIcon,
} from 'lucide-react';
import { projects, projectFilters } from '@/data/projects';

const iconMap: Record<string, LucideIcon> = {
  HeartPulse, CloudSun, Leaf, GraduationCap, FlaskConical,
};

const colorMap: Record<string, { text: string; bg: string; border: string }> = {
  rose: { text: 'text-accent-rose', bg: 'bg-accent-rose/10', border: 'border-accent-rose/30' },
  cyan: { text: 'text-accent-cyan', bg: 'bg-accent-cyan/10', border: 'border-accent-cyan/30' },
  green: { text: 'text-accent-green', bg: 'bg-accent-green/10', border: 'border-accent-green/30' },
  blue: { text: 'text-accent-blue', bg: 'bg-accent-blue/10', border: 'border-accent-blue/30' },
};

export default function ProjectsGrid() {
  const [filter, setFilter] = useState('all');

  const filtered = filter === 'all'
    ? projects
    : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 dotted-bg opacity-30" />
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-accent-cyan/5 rounded-full blur-[120px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="reveal inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-xs font-medium text-accent-cyan border border-accent-cyan/20 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan" />
            Project Showcase
          </div>
          <h2 className="reveal text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Projects That <span className="gradient-text">Make an Impact</span>
          </h2>
          <p className="reveal delay-100 text-sm text-slate-500 max-w-lg mx-auto">
            From healthcare to sustainability to education — each project tackles a real-world problem.
          </p>
        </div>

        {/* Filter buttons */}
        <div className="reveal flex flex-wrap justify-center gap-2 mb-10">
          {projectFilters.map((f) => (
            <button
              key={f.id}
              onClick={() => setFilter(f.id)}
              className={`px-4 py-2 rounded-lg text-xs font-medium transition-all ${
                filter === f.id
                  ? 'bg-gradient-to-r from-accent-cyan to-accent-blue text-ink-950'
                  : 'glass text-slate-400 hover:text-white light:hover:text-ink-900'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Project cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project, idx) => {
            const Icon = iconMap[project.icon] ?? Leaf;
            const c = colorMap[project.color] ?? colorMap.green;
            return (
              <div
                key={project.id}
                className="reveal-scale card-lift group glass rounded-2xl overflow-hidden border border-white/10 hover:border-white/20"
                style={{ transitionDelay: `${idx * 80}ms` }}
              >
                {/* Card header with icon */}
                <div className={`relative h-32 ${c.bg} flex items-center justify-center overflow-hidden`}>
                  <div className="absolute inset-0 bg-grid-pattern opacity-30" />
                  <div className={`w-16 h-16 rounded-2xl ${c.bg} ${c.border} border-2 flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <Icon className={`w-8 h-8 ${c.text}`} />
                  </div>
                  <span className={`absolute top-3 right-3 px-2.5 py-1 rounded-full text-[10px] font-medium ${c.bg} ${c.border} border ${c.text}`}>
                    {project.categoryLabel}
                  </span>
                </div>

                {/* Card body */}
                <div className="p-5 space-y-4">
                  <h3 className="text-lg font-bold group-hover:text-accent-green transition-colors">
                    {project.name}
                  </h3>
                  <p className="text-xs text-slate-400 light:text-slate-600 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Achievements */}
                  {project.achievements.length > 0 && (
                    <div className="space-y-1.5">
                      {project.achievements.map((ach) => (
                        <div key={ach} className="flex items-center gap-2 text-xs">
                          <Trophy className="w-3.5 h-3.5 text-accent-gold flex-shrink-0" />
                          <span className="text-slate-300 light:text-slate-700">{ach}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 rounded-md text-[10px] font-medium bg-white/5 text-slate-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
