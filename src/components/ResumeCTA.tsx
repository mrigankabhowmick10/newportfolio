import { Download, FileText } from 'lucide-react';

export default function ResumeCTA() {
  return (
    <section id="resume" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent-green/5 to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-accent-green/8 rounded-full blur-[140px]" />

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="reveal-scale gradient-border p-10 text-center">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent-green/20 to-accent-cyan/20 border border-accent-green/30 flex items-center justify-center mx-auto mb-6">
            <FileText className="w-8 h-8 text-accent-green" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            Want to know more about my work?
          </h2>
          <p className="text-sm text-slate-400 light:text-slate-600 max-w-xl mx-auto mb-8 leading-relaxed">
            Download my resume to explore my education, technical skills, projects, achievements,
            certifications, and innovation journey.
          </p>
          <button
            className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-accent-green to-accent-cyan text-ink-950 font-semibold text-sm hover:shadow-lg hover:shadow-accent-green/30 transition-all hover:scale-105"
            onClick={() => {
              // Placeholder — the actual resume PDF can be linked here
              const link = document.createElement('a');
              link.href = '/resume.pdf';
              link.download = 'Mriganka_Bhowmick_Resume.pdf';
              link.click();
            }}
          >
            <Download className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
            Download Resume
          </button>
          <p className="text-xs text-slate-500 mt-4">
            Resume PDF will be linked here when available.
          </p>
        </div>
      </div>
    </section>
  );
}
