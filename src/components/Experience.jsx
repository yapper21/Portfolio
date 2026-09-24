import React from 'react';
import { Award, Briefcase, GraduationCap, CheckCircle2 } from 'lucide-react';
import { workExperiences, hackathonsAndAchievements, certificationsList, partnerProfiles } from '../data/projectsData';

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-white border-b border-sky-200 font-serif">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto">
          <div className="text-sky-700 text-sm font-bold uppercase tracking-wider mb-1">
            Experience & Achievements
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-sky-950">
            Professional Experience & Hackathons
          </h2>
          <p className="text-slate-600 text-base mt-1">
            Production industry internship, client freelance software projects, and award-winning hackathon achievements.
          </p>
        </div>

        {/* Work Experience */}
        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-sky-950 flex items-center gap-2 border-b border-sky-200 pb-2">
            <Briefcase className="w-6 h-6 text-sky-700" />
            <span>Professional Experience</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {workExperiences.map((exp, idx) => (
              <div key={idx} className="sky-card p-6 rounded border border-sky-200 bg-sky-50/50 space-y-3">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="text-xl font-bold text-sky-950">{exp.role}</h4>
                    <div className="text-sm font-bold text-sky-700">{exp.company}</div>
                  </div>
                  <span className="px-2.5 py-1 rounded bg-sky-100 text-sky-900 text-xs font-mono font-bold border border-sky-200">
                    {exp.period}
                  </span>
                </div>

                <ul className="space-y-2 pt-2">
                  {exp.points.map((pt, i) => (
                    <li key={i} className="flex items-start gap-2 text-slate-700 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-sky-600 mt-2 flex-shrink-0"></span>
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Hackathons & Education */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
          
          {/* Hackathons & Achievements */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-sky-950 flex items-center gap-2 border-b border-sky-200 pb-2">
              <Award className="w-6 h-6 text-sky-700" />
              <span>Achievements & Hackathons</span>
            </h3>

            <div className="space-y-3">
              {hackathonsAndAchievements.map((item, i) => (
                <div key={i} className="sky-card p-4 rounded border border-sky-200 bg-white flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded bg-sky-100 text-sky-700 font-bold">
                      🏆
                    </div>
                    <span className="font-bold text-sky-950 text-base">{item.title}</span>
                  </div>
                  <span className="text-xs text-sky-700 font-mono font-bold bg-sky-50 px-2 py-1 rounded border border-sky-200">
                    {item.date}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Certifications */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-sky-950 flex items-center gap-2 border-b border-sky-200 pb-2">
              <GraduationCap className="w-6 h-6 text-sky-700" />
              <span>Education & Certifications</span>
            </h3>

            <div className="sky-card p-5 rounded border border-sky-200 bg-white space-y-3">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="text-lg font-bold text-sky-950">B.Sc. Computer Science</h4>
                  <div className="text-sm font-bold text-sky-700">University of Central Punjab, Lahore</div>
                </div>
                <span className="text-xs font-mono text-sky-800 font-bold bg-sky-50 px-2 py-1 rounded border border-sky-200">
                  2023 – 2027 (Expected)
                </span>
              </div>

              <div className="pt-2">
                <div className="text-sm font-bold text-sky-900 mb-2">Professional Certifications:</div>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700 font-serif">
                  {certificationsList.map((cert, cIdx) => (
                    <li key={cIdx} className="flex items-center gap-2 bg-sky-50 p-2 rounded border border-sky-200">
                      <CheckCircle2 className="w-4 h-4 text-sky-600 flex-shrink-0" />
                      <span>{cert}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
