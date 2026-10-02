import {
  GraduationCap, Code2, Trophy, Sprout, Rocket, Flag, Zap, TrendingUp, ScrollText,
  type LucideIcon,
} from 'lucide-react';
import { timelineEvents } from '@/data/content';

const iconMap: Record<string, LucideIcon> = {
  GraduationCap, Code2, Trophy, Sprout, Rocket, Flag, Zap, TrendingUp, ScrollText,
};

export default function Timeline() {
  return (
    <section id="timeline" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 dotted-bg opacity-20" />
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-accent-cyan/5 rounded-full blur-[120px]" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="reveal inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-xs font-medium text-accent-cyan border border-accent-cyan/20 mb-4">
            <TrendingUp className="w-3 h-3" />
            Experience & Journey
          </div>
          <h2 className="reveal text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            The <span className="gradient-text">Road So Far</span>
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-accent-green via-accent-cyan to-accent-blue sm:-translate-x-px" />

          <div className="space-y-8">
            {timelineEvents.map((event, idx) => {
              const Icon = iconMap[event.icon] ?? GraduationCap;
              const isLeft = idx % 2 === 0;
              return (
                <div
                  key={idx}
                  className={`reveal relative flex items-center gap-6 ${
                    isLeft ? 'sm:flex-row' : 'sm:flex-row-reverse'
                  }`}
                >
                  {/* Node */}
                  <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 z-10">
                    <div className="w-9 h-9 rounded-xl glass border border-accent-green/30 flex items-center justify-center">
                      <Icon className="w-4 h-4 text-accent-green" />
                    </div>
                  </div>

                  {/* Content card */}
                  <div className={`flex-1 ml-12 sm:ml-0 ${isLeft ? 'sm:pr-12 sm:text-right' : 'sm:pl-12'}`}>
                    <div className="glass rounded-2xl p-5 card-lift border border-white/10 hover:border-white/20">
                      {event.year && (
                        <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r from-accent-green/20 to-accent-cyan/20 text-accent-green mb-2">
                          {event.year}
                        </span>
                      )}
                      <h3 className="text-sm font-bold mb-1.5">{event.title}</h3>
                      <p className="text-xs text-slate-400 light:text-slate-600 leading-relaxed">
                        {event.description}
                      </p>
                    </div>
                  </div>

                  {/* Spacer for other side */}
                  <div className="hidden sm:block flex-1" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
