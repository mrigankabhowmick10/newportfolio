import { useEffect, useState } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { navSections } from '@/data/content';
import { useActiveSection } from '@/hooks/useActiveSection';

interface NavbarProps {
  theme: 'dark' | 'light';
  onToggleTheme: () => void;
}

export default function Navbar({ theme, onToggleTheme }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const sectionIds = navSections.map((s) => s.id);
  const active = useActiveSection(sectionIds);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (id: string) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass-strong shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-18">
          {/* Logo */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-2 group"
          >
            <div className="relative w-9 h-9 rounded-lg bg-gradient-to-br from-accent-green to-accent-cyan flex items-center justify-center font-bold text-ink-950 text-sm transition-transform group-hover:scale-110">
              MB
            </div>
            <span className="hidden sm:block font-display font-semibold text-sm tracking-wide">
              Mriganka Bhowmick
            </span>
          </button>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navSections.map((section) => (
              <button
                key={section.id}
                onClick={() => handleNavClick(section.id)}
                className={`relative px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                  active === section.id
                    ? 'text-accent-green'
                    : 'text-slate-400 hover:text-white dark:hover:text-white light:hover:text-ink-900'
                }`}
              >
                {section.label}
                {active === section.id && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-accent-green" />
                )}
              </button>
            ))}
          </div>

          {/* Right actions */}
          <div className="flex items-center gap-2">
            <button
              onClick={onToggleTheme}
              className="p-2 rounded-lg glass hover:bg-white/10 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-accent-gold" />
              ) : (
                <Moon className="w-4 h-4 text-accent-blue" />
              )}
            </button>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden p-2 rounded-lg glass hover:bg-white/10 transition-colors"
              aria-label="Toggle menu"
            >
              {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? 'max-h-96 glass-strong border-t border-white/10' : 'max-h-0'
        }`}
      >
        <div className="px-4 py-4 space-y-1">
          {navSections.map((section) => (
            <button
              key={section.id}
              onClick={() => handleNavClick(section.id)}
              className={`block w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                active === section.id
                  ? 'text-accent-green bg-accent-green/10'
                  : 'text-slate-400 hover:text-white hover:bg-white/5'
              }`}
            >
              {section.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
