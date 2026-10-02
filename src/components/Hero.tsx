import { ArrowRight, Download, Mail, Github, Linkedin, Sparkles } from 'lucide-react';
import ParticleNetwork from './ParticleNetwork';

export default function Hero() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 pb-12 overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40" />
      <div className="absolute inset-0 dotted-bg opacity-60" />
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-accent-green/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent-cyan/10 rounded-full blur-[120px]" />
      <div className="absolute top-1/2 left-1/3 w-72 h-72 bg-accent-blue/8 rounded-full blur-[100px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-6">
            {/* Badge */}
            <div className="reveal inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-xs font-medium text-accent-green border border-accent-green/20">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Available for Internships & Collaboration</span>
              <span className="w-1.5 h-1.5 rounded-full bg-accent-green animate-pulse" />
            </div>

            {/* Heading */}
            <div className="space-y-3">
              <h1 className="reveal text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
                Hi, I'm{' '}
                <span className="gradient-text">Mriganka Bhowmick</span>
              </h1>
              <p className="reveal delay-100 text-2xl sm:text-3xl lg:text-4xl font-semibold text-slate-200 dark:text-slate-200 light:text-slate-800 leading-tight">
                I Build Technology That{' '}
                <span className="gradient-text-green">Solves Real Problems</span>
              </p>
            </div>

            {/* Tags */}
            <div className="reveal delay-200 flex flex-wrap gap-2">
              {['AI/ML', 'Full-Stack Development', 'IoT', 'Robotics', 'Entrepreneurship'].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1.5 rounded-lg text-xs font-medium glass border border-white/10 text-slate-300 light:text-slate-600"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Description */}
            <p className="reveal delay-300 text-sm sm:text-base text-slate-400 light:text-slate-600 max-w-xl leading-relaxed">
              Computer Science & Engineering student specializing in AI/ML, building intelligent software,
              IoT systems, and technology-driven products. Co-founder of{' '}
              <span className="text-accent-green font-medium">SoilGuard</span>, a growing revenue-generating
              AgriTech venture.
            </p>

            {/* CTA Buttons */}
            <div className="reveal delay-400 flex flex-wrap gap-3 pt-2">
              <button
                onClick={() => scrollTo('projects')}
                className="group inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-accent-green to-accent-cyan text-ink-950 font-semibold text-sm hover:shadow-lg hover:shadow-accent-green/30 transition-all hover:scale-105"
              >
                Explore My Work
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => scrollTo('resume')}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl glass border border-white/10 hover:border-accent-green/30 font-semibold text-sm transition-all hover:scale-105"
              >
                <Download className="w-4 h-4 text-accent-green" />
                Download Resume
              </button>
              <button
                onClick={() => scrollTo('contact')}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl glass border border-white/10 hover:border-accent-cyan/30 font-semibold text-sm transition-all hover:scale-105"
              >
                <Mail className="w-4 h-4 text-accent-cyan" />
                Let's Connect
              </button>
            </div>

            {/* Social icons */}
            <div className="reveal delay-500 flex items-center gap-3 pt-4">
              <span className="text-xs text-slate-500">Find me on:</span>
              <a
                href="#contact"
                onClick={(e) => { e.preventDefault(); scrollTo('contact'); }}
                className="p-2 rounded-lg glass hover:border-accent-blue/30 hover:scale-110 transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4 text-slate-400 hover:text-accent-blue" />
              </a>
              <a
                href="#contact"
                onClick={(e) => { e.preventDefault(); scrollTo('contact'); }}
                className="p-2 rounded-lg glass hover:border-accent-green/30 hover:scale-110 transition-all"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4 text-slate-400 hover:text-accent-green" />
              </a>
            </div>
          </div>

          {/* Right visual */}
          <div className="reveal-right relative h-[400px] sm:h-[500px] lg:h-[560px] hidden md:block">
            <div className="absolute inset-0 rounded-[32px] overflow-hidden border border-white/10 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 shadow-[0_30px_80px_rgba(34,224,122,0.12)]">
              <ParticleNetwork />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-950/80 via-transparent to-transparent" />

              {/* Floating cards */}
              <div className="absolute top-6 left-6 glass-strong rounded-xl px-4 py-3 animate-float">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-accent-green/20 flex items-center justify-center">
                    <Sparkles className="w-4 h-4 text-accent-green" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold">AI / ML</div>
                    <div className="text-[10px] text-slate-500">Intelligent Systems</div>
                  </div>
                </div>
              </div>
              <div className="absolute top-1/3 right-6 glass-strong rounded-xl px-4 py-3 animate-float-slow">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-accent-cyan/20 flex items-center justify-center">
                    <span className="text-xs font-mono text-accent-cyan">{"</>"}</span>
                  </div>
                  <div>
                    <div className="text-xs font-semibold">Full-Stack</div>
                    <div className="text-[10px] text-slate-500">React • Node.js</div>
                  </div>
                </div>
              </div>
              <div className="absolute bottom-20 left-8 glass-strong rounded-xl px-4 py-3 animate-float">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-accent-blue/20 flex items-center justify-center">
                    <span className="text-xs text-accent-blue">IoT</span>
                  </div>
                  <div>
                    <div className="text-xs font-semibold">Connected Devices</div>
                    <div className="text-[10px] text-slate-500">Smart Monitoring</div>
                  </div>
                </div>
              </div>
              <div className="absolute bottom-6 right-8 glass-strong rounded-xl px-4 py-3 animate-float-slow">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-accent-green/20 flex items-center justify-center">
                    <span className="text-xs">🌱</span>
                  </div>
                  <div>
                    <div className="text-xs font-semibold">AgriTech</div>
                    <div className="text-[10px] text-slate-500">SoilGuard</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-500">
        <span className="text-[10px] uppercase tracking-widest">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-accent-green to-transparent animate-pulse" />
      </div>
    </section>
  );
}
