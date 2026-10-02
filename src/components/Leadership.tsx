import {
  Trophy, Megaphone, Users, ClipboardList, Rocket, Cpu, CheckCircle2,
  type LucideIcon,
} from 'lucide-react';
import { leadershipItems } from '@/data/content';

const iconMap: Record<string, LucideIcon> = {
  Trophy, Megaphone, Users, ClipboardList, Rocket, Cpu, CheckCircle2,
};

export default function Leadership() {
  return (
    <section id="leadership" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 dotted-bg opacity-20" />
      <div className="absolute top-0 left-1/3 w-80 h-80 bg-accent-green/5 rounded-full blur-[120px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="reveal inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-xs font-medium text-accent-green border border-accent-green/20 mb-4">
            <Users className="w-3 h-3" />
            Leadership
          </div>
          <h2 className="reveal text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Beyond <span className="gradient-text-green">Coding</span>
          </h2>
          <p className="reveal delay-100 text-sm text-slate-500 max-w-lg mx-auto">
            Leadership, marketing, collaboration, and project management experience that complements my technical work.
          </p>
        </div>

        {/* Leadership grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {leadershipItems.map((item, idx) => {
            const Icon = iconMap[item.icon] ?? Users;
            return (
              <div
                key={item.title}
                className="reveal-scale card-lift glass rounded-2xl p-5 border border-white/10 hover:border-accent-green/20 group"
                style={{ transitionDelay: `${idx * 60}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-accent-green/10 border border-accent-green/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Icon className="w-5 h-5 text-accent-green" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold mb-1.5">{item.title}</h3>
                    <p className="text-xs text-slate-400 light:text-slate-600 leading-relaxed">
                      {item.description}
                    </p>
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
