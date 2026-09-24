import React from 'react';
import { X, Download, Mail, MapPin, Globe, Share2, BookOpen } from 'lucide-react';
import confetti from 'canvas-confetti';
import { userProfile, projectsData, skillsCategories } from '../data/projectsData';

export default function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const handleDownload = () => {
    confetti({
      particleCount: 60,
      spread: 60,
      origin: { y: 0.6 }
    });
    
    // Simulate downloading resume
    const element = document.createElement("a");
    const file = new Blob([
      `YAZISH SAFA - SOFTWARE ENGINEERING RESUME\n\n` +
      `Role: ${userProfile.role}\n` +
      `Status: ${userProfile.status}\n` +
      `Email: ${userProfile.email}\n` +
      `GitHub: ${userProfile.github}\n\n` +
      `PORTFOLIO PROJECTS (11 Total):\n` +
      projectsData.map(p => `• ${p.title} (${p.badge}): ${p.shortDesc}`).join('\n')
    ], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = "Yazish_Safa_Software_Engineering_CV.txt";
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-sky-950/40 backdrop-blur-xs overflow-y-auto font-serif">
      <div 
        className="sky-card max-w-4xl w-full max-h-[90vh] overflow-y-auto rounded-xl border border-sky-300 shadow-2xl relative bg-white"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Controls */}
        <div className="sticky top-0 z-20 bg-white/95 backdrop-blur-sm px-6 py-4 border-b border-sky-200 flex items-center justify-between">
          <div className="flex items-center gap-2 text-sky-900 font-serif text-sm font-bold">
            <BookOpen className="w-4 h-4 text-sky-600" />
            <span>Yazish_Safa_Software_Engineering_CV.pdf</span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handleDownload}
              className="flex items-center gap-2 bg-sky-600 text-white font-serif font-bold px-4 py-2 rounded text-xs hover:bg-sky-700 transition-colors shadow-sm"
            >
              <Download className="w-4 h-4" />
              <span>Download CV</span>
            </button>

            <button onClick={onClose} className="p-1.5 rounded bg-sky-50 text-slate-600 hover:text-sky-900 border border-sky-200">
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Content */}
        <div className="p-8 space-y-8 text-slate-800 font-serif">
          
          {/* Header */}
          <div className="border-b border-sky-200 pb-6 space-y-2">
            <h1 className="text-3xl font-bold text-sky-950">{userProfile.name}</h1>
            <p className="text-sky-700 font-bold text-sm">{userProfile.role}</p>
            <div className="flex flex-wrap items-center gap-4 text-xs font-serif text-slate-600 pt-2">
              <span className="flex items-center gap-1.5"><Mail className="w-3.5 h-3.5 text-sky-600" />{userProfile.email}</span>
              <span className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5 text-sky-600" />{userProfile.location}</span>
              <span className="flex items-center gap-1.5"><Globe className="w-3.5 h-3.5 text-sky-600" />{userProfile.github}</span>
            </div>
          </div>

          {/* Education */}
          <div className="space-y-3">
            <h2 className="text-lg font-bold text-sky-950 border-b border-sky-200 pb-1">EDUCATION</h2>
            <div>
              <div className="flex justify-between text-sm font-bold text-slate-900">
                <span>Bachelor of Science in Software Engineering</span>
                <span className="text-sky-700 font-mono text-xs">2023 - Present</span>
              </div>
              <p className="text-xs text-slate-600">Department of Software Engineering</p>
            </div>
          </div>

          {/* Project Portfolio */}
          <div className="space-y-4">
            <h2 className="text-lg font-bold text-sky-950 border-b border-sky-200 pb-1">PORTFOLIO PROJECTS (11)</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {projectsData.map((p) => (
                <div key={p.id} className="p-3 bg-sky-50/70 rounded border border-sky-200 space-y-1">
                  <div className="flex items-center justify-between text-xs font-bold text-sky-950">
                    <span>{p.title}</span>
                    <span className="text-[10px] font-mono text-sky-700">{p.badge}</span>
                  </div>
                  <p className="text-xs text-slate-600 line-clamp-2">{p.shortDesc}</p>
                  <div className="text-[11px] font-serif text-sky-800 pt-1">
                    Stack: {p.stack.slice(0, 3).join(', ')}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Skills */}
          <div className="space-y-3">
            <h2 className="text-lg font-bold text-sky-950 border-b border-sky-200 pb-1">TECHNICAL SKILLS</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-serif">
              {skillsCategories.map((c) => (
                <div key={c.name} className="space-y-1">
                  <div className="font-bold text-sky-900">{c.name}</div>
                  <ul className="text-slate-600 space-y-0.5">
                    {c.skills.map(s => <li key={s.name}>• {s.name}</li>)}
                  </ul>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
