import {
  Lightbulb, Wrench, Trophy, Building2, Flag, CheckCircle2,
  DollarSign, TrendingUp, ScrollText, Sprout,
  type LucideIcon,
} from 'lucide-react';
import { entrepreneurshipSteps } from '@/data/projects';

const iconMap: Record<string, LucideIcon> = {
  Lightbulb, Wrench, Trophy, Building2, Flag, CheckCircle2, DollarSign, TrendingUp, ScrollText,
};

export default function Entrepreneurship() {
  return (
    <section id="entrepreneurship" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent-green/5 to-transparent" />
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-accent-green/8 rounded-full blur-[120px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="reveal inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-xs font-medium text-accent-green border border-accent-green/30 mb-4">
            <Sprout className="w-3 h-3" />
            Entrepreneurship
          </div>
          <h2 className="reveal text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            From Project to <span className="gradient-text-green">Product</span>
          </h2>
          <p className="reveal delay-100 text-sm text-slate-400 light:text-slate-600 max-w-2xl mx-auto leading-relaxed">
            "I believe technology becomes meaningful when it moves beyond demonstration and creates
            measurable real-world value."
          </p>
        </div>

        {/* Headline */}
        <div className="reveal text-center mb-12">
          <h3 className="text-xl sm:text-2xl font-bold gradient-text">
            Building Beyond the Prototype
          </h3>
        </div>

        {/* Horizontal flow timeline */}
        <div className="reveal-scale mb-12">
          <div className="flex flex-wrap items-center justify-center gap-2">
            {entrepreneurshipSteps.map((step, i) => {
              const Icon = iconMap[step.icon] ?? Lightbulb;
              const isHighlight = ['Revenue', 'Growth', 'Patent Process'].includes(step.phase);
              return (
                <div key={step.phase} className="flex items-center gap-2">
                  <div
                    className={`flex flex-col items-center gap-2 px-4 py-4 rounded-2xl border min-w-[110px] ${
                      isHighlight
                        ? 'bg-accent-green/10 border-accent-green/40 glow-green'
                        : 'glass border-white/10'
                    }`}
                  >
                    <div className={`w-9 h-9 rounded-lg flex items-center justify-center ${
                      isHighlight ? 'bg-accent-green/20' : 'bg-white/5'
                    }`}>
                      <Icon className={`w-4 h-4 ${isHighlight ? 'text-accent-green' : 'text-slate-400'}`} />
                    </div>
                    <span className={`text-xs font-medium text-center leading-tight ${
                      isHighlight ? 'text-accent-green' : 'text-slate-300 light:text-slate-700'
                    }`}>
                      {step.phase}
                    </span>
                  </div>
                  {i < entrepreneurshipSteps.length - 1 && (
                    <svg width="24" height="12" viewBox="0 0 24 12" className="text-accent-green/40 flex-shrink-0">
                      <path d="M2 6h20M18 2l4 4-4 4" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Status highlights */}
        <div className="grid sm:grid-cols-3 gap-5 max-w-3xl mx-auto">
          {[
            { label: 'Revenue Generating', icon: DollarSign, color: 'green' },
            { label: 'Growing', icon: TrendingUp, color: 'cyan' },
            { label: 'Patent Process Underway', icon: ScrollText, color: 'blue' },
          ].map((item, idx) => {
            const colorClasses: Record<string, string> = {
              green: 'border-accent-green/30 bg-accent-green/10 text-accent-green',
              cyan: 'border-accent-cyan/30 bg-accent-cyan/10 text-accent-cyan',
              blue: 'border-accent-blue/30 bg-accent-blue/10 text-accent-blue',
            };
            return (
              <div
                key={item.label}
                className={`reveal-scale rounded-2xl p-6 border text-center ${colorClasses[item.color]}`}
                style={{ transitionDelay: `${idx * 100}ms` }}
              >
                <item.icon className="w-8 h-8 mx-auto mb-3" />
                <div className="text-sm font-bold">{item.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
