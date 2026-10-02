import {
  Trophy, Zap, Award, Medal, Video, DollarSign, TrendingUp, ScrollText,
  ArrowRight, Mail, Sprout, Lightbulb, Rocket, Target, Flag,
  type LucideIcon,
} from 'lucide-react';
import { soilGuardJourney, soilGuardBadges } from '@/data/projects';

const journeyIconMap: Record<string, LucideIcon> = {
  Lightbulb, Trophy, Award, Rocket, Target, Flag, Zap, DollarSign, TrendingUp, ScrollText,
};

const badgeIconMap: Record<string, LucideIcon> = {
  Trophy, Zap, Award, Medal, Video, DollarSign, TrendingUp, ScrollText,
};

const emphasisStyles: Record<string, string> = {
  high: 'border-accent-green/40 bg-accent-green/10',
  medium: 'border-white/15 bg-white/5',
};

export default function FeaturedProject() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="soilguard" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent-green/5 to-transparent" />
      <div className="absolute top-1/3 -left-20 w-96 h-96 bg-accent-green/8 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/3 -right-20 w-96 h-96 bg-accent-cyan/8 rounded-full blur-[120px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="reveal inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-xs font-medium text-accent-green border border-accent-green/30 mb-4">
            <Sprout className="w-3 h-3" />
            Featured Project
          </div>
          <h2 className="reveal text-3xl sm:text-4xl lg:text-5xl font-bold mb-3">
            <span className="gradient-text-green">SoilGuard</span>
          </h2>
          <p className="reveal delay-100 text-sm text-slate-400 light:text-slate-600">
            Smart Soil Monitoring • AgriTech • IoT • Entrepreneurship
          </p>
        </div>

        {/* Main featured card */}
        <div className="reveal-scale gradient-border p-8 lg:p-10 mb-10">
          <div className="grid lg:grid-cols-3 gap-8 items-start">
            {/* Left: info */}
            <div className="lg:col-span-2 space-y-5">
              <div className="flex items-center gap-3">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-accent-green/20 to-accent-cyan/20 border border-accent-green/30 flex items-center justify-center">
                  <Sprout className="w-7 h-7 text-accent-green" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">SoilGuard</h3>
                  <p className="text-xs text-slate-500">Role: Co-Founder</p>
                </div>
              </div>
              <p className="text-sm sm:text-base text-slate-400 light:text-slate-600 leading-relaxed">
                SoilGuard is a smart soil monitoring platform designed to help improve agricultural
                decision-making through technology, monitoring, and intelligent insights. What began as an
                innovation project has grown into a revenue-generating venture now progressing through the
                patent process.
              </p>

              {/* Status badges */}
              <div className="flex flex-wrap gap-3">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-accent-green/10 border border-accent-green/40">
                  <DollarSign className="w-4 h-4 text-accent-green" />
                  <span className="text-xs font-semibold text-accent-green">Revenue Generating</span>
                </div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-accent-cyan/10 border border-accent-cyan/40">
                  <TrendingUp className="w-4 h-4 text-accent-cyan" />
                  <span className="text-xs font-semibold text-accent-cyan">Growing Venture</span>
                </div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-accent-blue/10 border border-accent-blue/40">
                  <ScrollText className="w-4 h-4 text-accent-blue" />
                  <span className="text-xs font-semibold text-accent-blue">Patent Process Underway</span>
                </div>
              </div>

              {/* CTA buttons */}
              <div className="flex flex-wrap gap-3 pt-2">
                <button
                  onClick={() => scrollTo('contact')}
                  className="group inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-accent-green to-accent-cyan text-ink-950 font-semibold text-sm hover:shadow-lg hover:shadow-accent-green/30 transition-all hover:scale-105"
                >
                  Contact for Collaboration
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
                <a
                  href="https://soilguardd.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl glass border border-white/10 hover:border-accent-green/30 font-semibold text-sm transition-all hover:scale-105"
                >
                  Visit Website
                </a>
                <button
                  onClick={() => scrollTo('entrepreneurship')}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl glass border border-white/10 hover:border-accent-green/30 font-semibold text-sm transition-all hover:scale-105"
                >
                  Learn More
                </button>
              </div>
            </div>

            {/* Right: journey mini-timeline */}
            <div className="glass rounded-2xl p-5 max-h-[420px] overflow-y-auto">
              <h4 className="text-xs font-semibold uppercase tracking-wide text-slate-400 mb-4">
                SoilGuard Journey
              </h4>
              <div className="space-y-0">
                {soilGuardJourney.map((step, i) => {
                  const Icon = journeyIconMap[step.icon] ?? Lightbulb;
                  return (
                    <div key={i} className="flex items-start gap-3 group">
                      <div className="flex flex-col items-center pt-0.5">
                        <div className="w-7 h-7 rounded-lg bg-accent-green/10 border border-accent-green/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                          <Icon className="w-3.5 h-3.5 text-accent-green" />
                        </div>
                        {i < soilGuardJourney.length - 1 && (
                          <div className="w-px h-6 bg-gradient-to-b from-accent-green/30 to-transparent" />
                        )}
                      </div>
                      <span className="text-xs text-slate-300 light:text-slate-700 pb-1.5 leading-tight">
                        {step.phase}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Achievement badges grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {soilGuardBadges.map((badge, idx) => {
            const Icon = badgeIconMap[badge.icon] ?? Trophy;
            return (
              <div
                key={badge.label}
                className={`reveal card-lift rounded-xl p-4 border ${emphasisStyles[badge.emphasis] ?? emphasisStyles.medium}`}
                style={{ transitionDelay: `${idx * 50}ms` }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-4 h-4 text-accent-gold" />
                  </div>
                  <span className="text-xs font-medium leading-tight">{badge.label}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
