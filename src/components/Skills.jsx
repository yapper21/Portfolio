import React from 'react';
import { Code, Layers, Database, Cpu, Wrench } from 'lucide-react';
import { technicalSkills } from '../data/projectsData';

export default function Skills() {
  const skillCategories = [
    { name: "Programming Languages", icon: Code, items: technicalSkills.languages },
    { name: "Web & Frameworks", icon: Layers, items: technicalSkills.webFrameworks },
    { name: "AI & Data Science", icon: Cpu, items: technicalSkills.aiData },
    { name: "Databases & ER Design", icon: Database, items: technicalSkills.databases },
    { name: "Tools & DevOps", icon: Wrench, items: technicalSkills.tools },
  ];

  return (
    <section id="skills" className="py-20 bg-sky-50 border-b border-sky-200 font-serif">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="text-sky-700 text-sm font-bold uppercase tracking-wider mb-1">
            Technical Stack
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-sky-950">
            Skills & Technology Matrix
          </h2>
          <p className="text-slate-600 text-base mt-1">
            Core technical proficiencies across software development, AI models, database architecture, and developer tools.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat) => {
            const IconComponent = cat.icon;
            return (
              <div key={cat.name} className="sky-card p-6 rounded border border-sky-200 bg-white space-y-4">
                <div className="flex items-center gap-3 border-b border-sky-100 pb-3">
                  <div className="p-2 rounded bg-sky-100 text-sky-700">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-sky-950">{cat.name}</h3>
                </div>

                <div className="flex flex-wrap gap-2 pt-1">
                  {cat.items.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1.5 rounded bg-sky-50 text-sky-950 text-sm font-serif border border-sky-200"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
