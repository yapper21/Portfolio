import React from 'react';
import { ArrowRight, Code, Layers, Cpu, Award } from 'lucide-react';
import { partnerProfiles } from '../data/projectsData';

export default function Hero({ onOpenInspector }) {
  return (
    <section id="about" className="pt-32 pb-16 bg-sky-50 border-b border-sky-200 font-serif">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-6">
          
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-sky-300 text-sky-900 text-sm shadow-sm font-serif">
            <span className="w-2.5 h-2.5 rounded-full bg-sky-600"></span>
            <span>Software Engineering Partners • Open for Work</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-6xl font-bold text-sky-950 tracking-tight leading-tight">
            {partnerProfiles.yazish.name} <span className="text-sky-600 font-normal">&</span> {partnerProfiles.uneeb.name}
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-sky-900 font-bold">
            Full-Stack Developers | PHP/Laravel & Web Development | AI-Driven Applications
          </p>

          {/* Bio paragraph */}
          <p className="text-slate-700 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
            We are Software Engineering developers from Lahore, Pakistan, building production web applications, machine learning cybersecurity pipelines, custom OS kernels, and AI-driven platforms.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <a
              href="#projects"
              className="flex items-center gap-2 bg-sky-600 hover:bg-sky-700 text-white font-bold px-7 py-3 rounded text-base shadow-sm transition-colors"
            >
              <span>Explore Our Projects</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <button
              onClick={onOpenInspector}
              className="flex items-center gap-2 bg-white hover:bg-sky-100 text-sky-800 border border-sky-300 px-6 py-3 rounded text-base transition-colors shadow-sm"
            >
              <Code className="w-4 h-4 text-sky-600" />
              <span>Project Inspector</span>
            </button>

            <a
              href="#contact"
              className="flex items-center gap-2 bg-sky-100 hover:bg-sky-200 text-sky-900 border border-sky-300 px-6 py-3 rounded text-base transition-colors"
            >
              <span>Contact Us</span>
            </a>
          </div>

          {/* Stats Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8 text-left">
            <div className="sky-card p-5 rounded border border-sky-200">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded bg-sky-100 flex items-center justify-center text-sky-700">
                  <Code className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-sky-950">9+</div>
                  <div className="text-xs text-slate-600">Built Projects</div>
                </div>
              </div>
            </div>

            <div className="sky-card p-5 rounded border border-sky-200">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded bg-sky-100 flex items-center justify-center text-sky-700">
                  <Cpu className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-sky-950">x86 to AI</div>
                  <div className="text-xs text-slate-600">Tech Range</div>
                </div>
              </div>
            </div>

            <div className="sky-card p-5 rounded border border-sky-200">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded bg-sky-100 flex items-center justify-center text-sky-700">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-sky-950">2x</div>
                  <div className="text-xs text-slate-600">Hackathon Winners</div>
                </div>
              </div>
            </div>

            <div className="sky-card p-5 rounded border border-sky-200">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded bg-sky-100 flex items-center justify-center text-sky-700">
                  <Layers className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-sky-950">UCP</div>
                  <div className="text-xs text-slate-600">B.Sc. CS 2023-27</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
