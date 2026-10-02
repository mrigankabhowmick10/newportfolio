import { Hammer, Lightbulb, Users, TrendingUp, type LucideIcon } from 'lucide-react';
import { whyWorkWithMe } from '@/data/content';

const iconMap: Record<string, LucideIcon> = {
  Hammer, Lightbulb, Users, TrendingUp,
};

const colorMap: Record<string, { text: string; bg: string; border: string }> = {
  green: { text: 'text-accent-green', bg: 'bg-accent-green/10', border: 'border-accent-green/30' },
  cyan: { text: 'text-accent-cyan', bg: 'bg-accent-cyan/10', border: 'border-accent-cyan/30' },
  blue: { text: 'text-accent-blue', bg: 'bg-accent-blue/10', border: 'border-accent-blue/30' },
};

export default function WhyWorkWithMe() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute top-0 left-1/4 w-80 h-80 bg-accent-blue/5 rounded-full blur-[120px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="reveal inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-xs font-medium text-accent-blue border border-accent-blue/20 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-blue" />
            Why Work With Me
          </div>
          <h2 className="reveal text-3xl sm:text-4xl lg:text-5xl font-bold">
            What I <span className="gradient-text">Bring</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {whyWorkWithMe.map((item, idx) => {
            const Icon = iconMap[item.icon] ?? Hammer;
            const c = colorMap[item.color] ?? colorMap.green;
            return (
              <div
                key={item.title}
                className="reveal-scale card-lift group glass rounded-2xl p-6 border border-white/10 hover:border-white/20 text-center"
                style={{ transitionDelay: `${idx * 80}ms` }}
              >
                <div className={`w-14 h-14 rounded-2xl ${c.bg} ${c.border} border flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                  <Icon className={`w-7 h-7 ${c.text}`} />
                </div>
                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                <p className="text-xs text-slate-400 light:text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
