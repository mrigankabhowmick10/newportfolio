import {
  Trophy, Flag, Zap, Rocket, Award, Medal, Video, Leaf,
  Cpu, Lightbulb, Code2, FlaskConical,
  type LucideIcon,
} from 'lucide-react';
import { achievements } from '@/data/content';

const iconMap: Record<string, LucideIcon> = {
  Trophy, Flag, Zap, Rocket, Award, Medal, Video, Leaf, Cpu, Lightbulb, Code2, FlaskConical,
};

const colorMap: Record<string, { text: string; bg: string; border: string; glow: string }> = {
  gold: { text: 'text-accent-gold', bg: 'bg-accent-gold/10', border: 'border-accent-gold/30', glow: 'glow-cyan' },
  green: { text: 'text-accent-green', bg: 'bg-accent-green/10', border: 'border-accent-green/30', glow: 'glow-green' },
  cyan: { text: 'text-accent-cyan', bg: 'bg-accent-cyan/10', border: 'border-accent-cyan/30', glow: 'glow-cyan' },
  blue: { text: 'text-accent-blue', bg: 'bg-accent-blue/10', border: 'border-accent-blue/30', glow: 'glow-cyan' },
};

export default function Achievements() {
  return (
    <section id="achievements" className="relative py-24 overflow-hidden">
      <div className="absolute top-0 right-1/4 w-80 h-80 bg-accent-gold/5 rounded-full blur-[120px]" />
      <div className="absolute inset-0 dotted-bg opacity-20" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="reveal inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-xs font-medium text-accent-gold border border-accent-gold/20 mb-4">
            <Trophy className="w-3 h-3" />
            Achievement Wall
          </div>
          <h2 className="reveal text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Recognition & <span className="gradient-text">Awards</span>
          </h2>
          <p className="reveal delay-100 text-sm text-slate-500 max-w-lg mx-auto">
            A track record of wins across innovation competitions, hackathons, and technical challenges.
          </p>
        </div>

        {/* Achievement grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {achievements.map((item, idx) => {
            const Icon = iconMap[item.icon] ?? Trophy;
            const c = colorMap[item.color] ?? colorMap.green;
            return (
              <div
                key={item.title}
                className="reveal-scale card-lift group glass rounded-2xl p-5 border border-white/10 hover:border-white/20 relative overflow-hidden"
                style={{ transitionDelay: `${idx * 50}ms` }}
              >
                {/* Rank badge */}
                {item.rank && (
                  <div className={`absolute top-0 right-0 px-3 py-1 rounded-bl-xl text-[10px] font-bold ${c.bg} ${c.text}`}>
                    {item.rank}
                  </div>
                )}

                <div className="flex items-start gap-4 pt-2">
                  <div className={`w-12 h-12 rounded-xl ${c.bg} ${c.border} border flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                    <Icon className={`w-6 h-6 ${c.text}`} />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold leading-tight mb-1">{item.title}</h3>
                    <p className="text-xs text-slate-400 light:text-slate-600 leading-relaxed">
                      {item.detail}
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
