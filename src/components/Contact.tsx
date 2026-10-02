import { Mail, Phone, MapPin, ArrowRight, Linkedin, Github } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 overflow-hidden">
      <div className="absolute top-0 right-1/4 w-80 h-80 bg-accent-cyan/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-accent-green/5 rounded-full blur-[120px]" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="reveal inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-xs font-medium text-accent-green border border-accent-green/20 mb-4">
            <Mail className="w-3 h-3" />
            Get In Touch
          </div>
          <h2 className="reveal text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Let's Build Something <span className="gradient-text-green">Meaningful</span>
          </h2>
          <p className="reveal delay-100 text-sm text-slate-400 light:text-slate-600 max-w-xl mx-auto">
            Have an idea, project, research opportunity, internship opportunity, or collaboration in mind?
            Let's connect.
          </p>
        </div>

        {/* Contact cards */}
        <div className="grid sm:grid-cols-3 gap-5 mb-10">
          <a
            href="mailto:mrigankabhowmick2026@gmail.com?subject=Portfolio%20Inquiry&body=Hi%20Mriganka%2C%0A%0AI%20found%20your%20portfolio%20and%20would%20like%20to%20connect%20about%20a%20project%20or%20opportunity."
            className="reveal card-lift glass rounded-2xl p-6 border border-white/10 hover:border-accent-green/30 group text-center"
          >
            <div className="w-12 h-12 rounded-xl bg-accent-green/10 border border-accent-green/20 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
              <Mail className="w-6 h-6 text-accent-green" />
            </div>
            <h3 className="text-xs font-semibold uppercase tracking-wide text-slate-400 mb-2">Email</h3>
            <p className="text-sm font-medium break-all">mrigankabhowmick2026@gmail.com</p>
          </a>

          <a
            href="https://wa.me/918145270585?text=Hi%20Mriganka%2C%20I%20found%20your%20portfolio%20and%20would%20like%20to%20connect%20with%20you."
            target="_blank"
            rel="noreferrer"
            className="reveal delay-100 card-lift glass rounded-2xl p-6 border border-white/10 hover:border-accent-cyan/30 group text-center"
          >
            <div className="w-12 h-12 rounded-xl bg-accent-cyan/10 border border-accent-cyan/20 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
              <Phone className="w-6 h-6 text-accent-cyan" />
            </div>
            <h3 className="text-xs font-semibold uppercase tracking-wide text-slate-400 mb-2">Phone</h3>
            <p className="text-sm font-medium">+91-8145270585</p>
          </a>

          <div className="reveal delay-200 card-lift glass rounded-2xl p-6 border border-white/10 hover:border-accent-blue/30 group text-center">
            <div className="w-12 h-12 rounded-xl bg-accent-blue/10 border border-accent-blue/20 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
              <MapPin className="w-6 h-6 text-accent-blue" />
            </div>
            <h3 className="text-xs font-semibold uppercase tracking-wide text-slate-400 mb-2">Location</h3>
            <p className="text-sm font-medium">Dumdum, Kolkata</p>
            <p className="text-xs text-slate-500">India</p>
          </div>
        </div>

        {/* CTA buttons */}
        <div className="reveal flex flex-wrap justify-center gap-3">
          <a
            href="mailto:mrigankabhowmick2026@gmail.com?subject=Portfolio%20Inquiry&body=Hi%20Mriganka%2C%0A%0AI%20want%20to%20connect%20regarding%20a%20project%20or%20opportunity.%0A%0AThanks%2C%0A[Your%20Name]"
            className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-accent-green to-accent-cyan text-ink-950 font-semibold text-sm hover:shadow-lg hover:shadow-accent-green/30 transition-all hover:scale-105"
          >
            Email Me
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="https://www.linkedin.com/in/mriganka-bhowmick-07545b315"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl glass border border-white/10 hover:border-accent-blue/30 font-semibold text-sm transition-all hover:scale-105"
          >
            <Linkedin className="w-4 h-4 text-accent-blue" />
            LinkedIn
          </a>
          <a
            href="https://github.com/mrigankabhowmick10"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl glass border border-white/10 hover:border-accent-green/30 font-semibold text-sm transition-all hover:scale-105"
          >
            <Github className="w-4 h-4 text-accent-green" />
            GitHub
          </a>
        </div>

      </div>
    </section>
  );
}
