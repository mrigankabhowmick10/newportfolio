import { navSections } from '@/data/content';

export default function Footer() {
  const handleNav = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-white/10 py-12 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-ink-950" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-64 bg-accent-green/5 rounded-full blur-[100px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-accent-green to-accent-cyan flex items-center justify-center font-bold text-ink-950 text-sm">
                MB
              </div>
              <span className="font-display font-semibold text-sm">Mriganka Bhowmick</span>
            </div>
            <p className="text-xs text-slate-500 leading-relaxed max-w-xs">
              AI/ML • Full-Stack • IoT • Entrepreneurship
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wide text-slate-400 mb-4">
              Quick Links
            </h4>
            <div className="grid grid-cols-2 gap-x-4 gap-y-2">
              {navSections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => handleNav(section.id)}
                  className="text-xs text-slate-500 hover:text-accent-green transition-colors text-left"
                >
                  {section.label}
                </button>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wide text-slate-400 mb-4">
              Contact
            </h4>
            <div className="space-y-1.5">
              <p className="text-xs text-slate-500">mrigankabhowmick2026@gmail.com</p>
              <p className="text-xs text-slate-500">+91-8145270585</p>
              <p className="text-xs text-slate-500">Dumdum, Kolkata, India</p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-6" />

        {/* Copyright */}
        <div className="text-center">
          <p className="text-xs text-slate-500">
            © 2026 Mriganka Bhowmick. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
