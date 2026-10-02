import { useState } from 'react';
import {
  BrainCircuit, Cloud, Globe, Rocket, Award,
  type LucideIcon,
} from 'lucide-react';
import { certificationCategories, generalCertificates, certFilters } from '@/data/content';

const iconMap: Record<string, LucideIcon> = {
  BrainCircuit, Cloud, Globe, Rocket,
};

export default function Certifications() {
  const [filter, setFilter] = useState('All');
  const [search, setSearch] = useState('');

  const filteredCats = filter === 'All'
    ? certificationCategories
    : certificationCategories.filter((c) => c.name === filter);

  const filteredCerts = filteredCats.map((cat) => ({
    ...cat,
    certs: cat.certs.filter((c) => c.toLowerCase().includes(search.toLowerCase())),
  })).filter((cat) => cat.certs.length > 0);

  return (
    <section id="certifications" className="relative py-24 overflow-hidden">
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-accent-blue/5 rounded-full blur-[120px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="reveal inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-xs font-medium text-accent-blue border border-accent-blue/20 mb-4">
            <Award className="w-3 h-3" />
            Certifications
          </div>
          <h2 className="reveal text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Continuous <span className="gradient-text">Learning</span>
          </h2>
          <p className="reveal delay-100 text-sm text-slate-500 max-w-lg mx-auto">
            Certifications across AI, cloud, web development, and innovation.
          </p>
        </div>

        {/* Search + filters */}
        <div className="flex flex-col sm:flex-row gap-3 justify-between items-center mb-8">
          <div className="reveal flex flex-wrap gap-2">
            {certFilters.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-4 py-2 rounded-lg text-xs font-medium transition-all ${
                  filter === f
                    ? 'bg-gradient-to-r from-accent-blue to-accent-cyan text-ink-950'
                    : 'glass text-slate-400 hover:text-white light:hover:text-ink-900'
                }`}
              >
                {f}
              </button>
            ))}
          </div>
          <input
            type="text"
            placeholder="Search certifications..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="reveal w-full sm:w-64 px-4 py-2.5 rounded-xl glass border border-white/10 text-sm placeholder:text-slate-500 focus:border-accent-blue/40 outline-none transition-colors"
          />
        </div>

        {/* Certification cards by category */}
        <div className="grid sm:grid-cols-2 gap-5 mb-6">
          {filteredCerts.map((cat, idx) => {
            const Icon = iconMap[cat.icon] ?? Award;
            return (
              <div
                key={cat.name}
                className="reveal-scale glass rounded-2xl p-5 border border-white/10"
                style={{ transitionDelay: `${idx * 60}ms` }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-accent-blue/10 border border-accent-blue/20 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-accent-blue" />
                  </div>
                  <h3 className="text-sm font-semibold">{cat.name}</h3>
                </div>
                <div className="space-y-2">
                  {cat.certs.map((cert) => (
                    <div
                      key={cert}
                      className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 hover:bg-white/8 transition-colors"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-accent-blue flex-shrink-0" />
                      <span className="text-xs text-slate-300 light:text-slate-700">{cert}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* General certificates */}
        {(filter === 'All' || search) && (
          <div className="reveal glass rounded-2xl p-5 border border-white/10">
            <h3 className="text-xs font-semibold uppercase tracking-wide text-slate-400 mb-4">
              General Certificates
            </h3>
            <div className="flex flex-wrap gap-2">
              {generalCertificates
                .filter((c) => c.toLowerCase().includes(search.toLowerCase()))
                .map((cert) => (
                  <span
                    key={cert}
                    className="px-3 py-2 rounded-lg text-xs font-medium glass border border-white/5 hover:border-accent-green/20 transition-colors"
                  >
                    {cert}
                  </span>
                ))}
            </div>
          </div>
        )}

        {filteredCerts.length === 0 && (
          <div className="text-center py-12 text-slate-500 text-sm">
            No certifications found matching your search.
          </div>
        )}
      </div>
    </section>
  );
}
