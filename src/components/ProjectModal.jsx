import React, { useState } from 'react';
import { X, CheckCircle2, Copy, Check, Layers, Cpu, Code } from 'lucide-react';

export default function ProjectModal({ project, onClose }) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [copied, setCopied] = useState(false);

  if (!project) return null;

  const handleCopyCode = () => {
    navigator.clipboard.writeText(project.codeSnippet);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-sky-950/40 backdrop-blur-xs overflow-y-auto">
      <div 
        className="sky-card max-w-4xl w-full max-h-[90vh] overflow-y-auto rounded-xl border border-sky-300 shadow-2xl relative bg-white font-serif"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Bar Controls */}
        <div className="sticky top-0 z-20 bg-white/95 backdrop-blur-sm px-6 py-4 border-b border-sky-200 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 rounded bg-sky-100 text-sky-800 text-xs font-serif font-bold border border-sky-200">
              {project.badge}
            </span>
            <span className="text-slate-500 font-serif text-xs hidden sm:inline">
              Project Specification
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded bg-sky-50 text-slate-600 hover:text-sky-900 hover:bg-sky-100 border border-sky-200 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 sm:p-8 space-y-8">
          
          {/* Main Screenshot Carousel */}
          <div className="space-y-3">
            <div className="relative rounded-lg overflow-hidden bg-sky-50 border border-sky-200 h-64 sm:h-96">
              <img
                src={project.screenshots[activeImageIndex]}
                alt={`${project.title} Screenshot`}
                className="w-full h-full object-contain bg-sky-50"
              />
            </div>

            {/* Thumbnail selector */}
            {project.screenshots.length > 1 && (
              <div className="flex items-center gap-3 overflow-x-auto pb-2">
                {project.screenshots.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImageIndex(idx)}
                    className={`h-16 w-28 rounded overflow-hidden border-2 transition-all flex-shrink-0 ${
                      activeImageIndex === idx ? 'border-sky-600 ring-2 ring-sky-200' : 'border-sky-200 opacity-70 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt="Thumbnail" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Title & Full Description */}
          <div className="space-y-3">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-sky-950">
              {project.title}
            </h2>
            <p className="text-slate-700 font-serif text-base leading-relaxed">
              {project.fullDesc}
            </p>
          </div>

          {/* Key Metrics Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {Object.entries(project.metrics).map(([key, val]) => (
              <div key={key} className="p-4 rounded-lg bg-sky-50 border border-sky-200">
                <div className="text-xs font-serif text-slate-500 uppercase">{key}</div>
                <div className="text-lg font-bold text-sky-900 font-serif mt-0.5">{val}</div>
              </div>
            ))}
          </div>

          {/* Features Checklist */}
          <div className="space-y-3">
            <h3 className="text-lg font-serif font-bold text-sky-950 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-sky-600" />
              <span>Key Features</span>
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {project.features.map((feat, i) => (
                <li key={i} className="flex items-start gap-2.5 text-slate-700 text-sm bg-sky-50/70 p-3 rounded-lg border border-sky-100">
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-600 mt-2 flex-shrink-0" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Architecture Data Flow */}
          <div className="space-y-2">
            <h3 className="text-lg font-serif font-bold text-sky-950 flex items-center gap-2">
              <Layers className="w-5 h-5 text-sky-700" />
              <span>Architecture & Data Flow</span>
            </h3>
            <div className="p-4 rounded-lg bg-sky-50 border border-sky-200 font-mono text-xs text-sky-900 overflow-x-auto">
              {project.architecture}
            </div>
          </div>

          {/* Tech Stack */}
          <div className="space-y-2">
            <h3 className="text-lg font-serif font-bold text-sky-950 flex items-center gap-2">
              <Cpu className="w-5 h-5 text-sky-700" />
              <span>Technologies</span>
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded bg-sky-100 text-sky-900 text-xs font-serif border border-sky-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Code Snippet Highlight */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-serif font-bold text-sky-950 flex items-center gap-2">
                <Code className="w-5 h-5 text-sky-700" />
                <span>Code Highlight</span>
              </h3>
              <button
                onClick={handleCopyCode}
                className="flex items-center gap-1 px-3 py-1 rounded bg-sky-100 text-sky-800 hover:bg-sky-200 border border-sky-300 text-xs font-serif transition-colors"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'Copied' : 'Copy Code'}</span>
              </button>
            </div>
            <pre className="p-4 rounded-lg bg-slate-50 border border-sky-200 font-mono text-xs text-slate-800 overflow-x-auto leading-relaxed">
              <code>{project.codeSnippet}</code>
            </pre>
          </div>

        </div>
      </div>
    </div>
  );
}
