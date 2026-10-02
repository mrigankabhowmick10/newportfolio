import { BookOpen, Hammer, Trophy, Building2, Rocket, TrendingUp, GraduationCap, MapPin, Mail, Phone } from 'lucide-react';
import { aboutTimeline } from '@/data/content';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  BookOpen, Hammer, Trophy, Building2, Rocket, TrendingUp,
};

export default function About() {
  return (
    <section id="about" className="relative py-24 overflow-hidden">
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-accent-blue/5 rounded-full blur-[120px]" />
      <div className="absolute inset-0 dotted-bg opacity-30" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="reveal inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-xs font-medium text-accent-cyan border border-accent-cyan/20 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan" />
            About Me
          </div>
          <h2 className="reveal text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Turning Ideas Into <span className="gradient-text">Real Products</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Left: text */}
          <div className="lg:col-span-3 space-y-4 lg:col-start-2">
            <p className="reveal text-sm sm:text-base text-slate-400 light:text-slate-600 leading-relaxed">
              I am a Computer Science & Engineering student specializing in{' '}
              <span className="text-accent-green font-medium">Artificial Intelligence & Machine Learning</span>,
              with hands-on experience across full-stack development, AI/ML, IoT, robotics, data analysis,
              project management, and entrepreneurship.
            </p>
            <p className="reveal delay-100 text-sm sm:text-base text-slate-400 light:text-slate-600 leading-relaxed">
              I enjoy turning ideas into real products and building technology around meaningful real-world
              problems. My work spans healthcare, agriculture, sustainability, education, AI, and
              environmental technology. I have participated in hackathons and innovation competitions and
              have built multiple recognized projects.
            </p>
            <p className="reveal delay-200 text-sm sm:text-base text-slate-400 light:text-slate-600 leading-relaxed">
              I am also the{' '}
              <span className="text-accent-cyan font-medium">Co-Founder of SoilGuard</span>, a smart soil
              monitoring venture that has progressed from an innovation project into a growing
              revenue-generating venture and is currently progressing through the patent process.
            </p>

            {/* Info cards */}
            <div className="reveal delay-300 grid sm:grid-cols-3 gap-4 pt-4">
              <div className="glass rounded-xl p-4">
                <div className="flex items-center gap-2 text-accent-green mb-2">
                  <GraduationCap className="w-4 h-4" />
                  <span className="text-xs font-semibold uppercase tracking-wide">Education</span>
                </div>
                <p className="text-sm font-medium">B.Tech CSE (AI/ML)</p>
                <p className="text-xs text-slate-500">Techno India University • 2024–2028</p>
              </div>
              <div className="glass rounded-xl p-4">
                <div className="flex items-center gap-2 text-accent-cyan mb-2">
                  <MapPin className="w-4 h-4" />
                  <span className="text-xs font-semibold uppercase tracking-wide">Location</span>
                </div>
                <p className="text-sm font-medium">Dumdum, Kolkata</p>
                <p className="text-xs text-slate-500">India</p>
              </div>
              <div className="glass rounded-xl p-4">
                <div className="flex items-center gap-2 text-accent-blue mb-2">
                  <Mail className="w-4 h-4" />
                  <span className="text-xs font-semibold uppercase tracking-wide">Contact</span>
                </div>
                <p className="text-sm font-medium truncate">mrigankabhowmick2026</p>
                <p className="text-xs text-slate-500">@gmail.com</p>
              </div>
            </div>
          </div>

          {/* Right: visual timeline */}
          <div className="lg:col-span-2">
            <div className="reveal-right glass rounded-2xl p-6">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-400 mb-6">
                The Journey
              </h3>
              <div className="space-y-0">
                {aboutTimeline.map((item, i) => {
                  const Icon = iconMap[item.icon] ?? BookOpen;
                  return (
                    <div key={item.phase} className="flex items-center gap-4 group">
                      <div className="flex flex-col items-center">
                        <div className="w-10 h-10 rounded-xl glass flex items-center justify-center group-hover:scale-110 group-hover:border-accent-green/40 transition-all">
                          <Icon className="w-4 h-4 text-accent-green" />
                        </div>
                        {i < aboutTimeline.length - 1 && (
                          <div className="w-px h-8 bg-gradient-to-b from-accent-green/30 to-transparent" />
                        )}
                      </div>
                      <div className="pb-2">
                        <span className="text-sm font-medium text-slate-200 light:text-slate-800">{item.phase}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
