import { BookOpen, BookMarked, Flag, Zap, DollarSign, ScrollText } from 'lucide-react';
import { useCountUp } from '@/hooks/useCountUp';

const stats = [
  { value: 9.28, label: 'Semester 1 SGPA', icon: BookOpen, isDecimal: true },
  { value: 8.5, label: 'Semester 2 SGPA', icon: BookMarked, isDecimal: true },
  { textValue: 'Hult Prize', label: 'National-Level Selection', icon: Flag },
  { textValue: 'SIH', label: 'Project Selected', icon: Zap },
  { textValue: 'SoilGuard', label: 'Revenue Generating', icon: DollarSign },
  { textValue: 'Patent', label: 'Process Underway', icon: ScrollText },
];

function StatCard({ stat, index }: { stat: typeof stats[number]; index: number }) {
  const { count, ref } = useCountUp(stat.isDecimal ? stat.value : 0, 2000);

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className="reveal-scale relative group"
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <div className="relative px-6 py-8 text-center">
        <div className="flex items-center justify-center mb-3">
          <div className="w-10 h-10 rounded-lg glass flex items-center justify-center group-hover:scale-110 transition-transform">
            <stat.icon className="w-5 h-5 text-accent-green" />
          </div>
        </div>
        <div className="text-2xl sm:text-3xl lg:text-4xl font-bold gradient-text-green">
          {stat.textValue ?? (stat.isDecimal ? count.toFixed(stat.value.toString().split('.')[1]?.length ?? 2) : count)}
        </div>
        <div className="mt-2 text-xs text-slate-500 light:text-slate-600 leading-snug max-w-[140px] mx-auto">
          {stat.label}
        </div>
      </div>
      {/* Divider */}
      {index < stats.length - 1 && (
        <div className="hidden md:block absolute top-1/2 -right-px -translate-y-1/2 h-12 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent" />
      )}
    </div>
  );
}

export default function AchievementStats() {
  return (
    <section className="relative py-8 border-y border-white/5">
      <div className="absolute inset-0 bg-gradient-to-r from-accent-green/5 via-transparent to-accent-cyan/5" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-px bg-white/5 rounded-2xl overflow-hidden glass">
          {stats.map((stat, i) => (
            <StatCard key={i} stat={stat} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
