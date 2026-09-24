import React, { useState } from 'react';
import { Search, Eye, ArrowUpRight, BookOpen } from 'lucide-react';
import { projectsData } from '../data/projectsData';

export default function Projects({ onSelectProject }) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    'All',
    'AI & Backend',
    'Systems & Security',
    'Full-Stack Web',
    'Mobile & UI',
    'AI & Platform'
  ];

  const filteredProjects = projectsData.filter((project) => {
    const matchesCategory = selectedCategory === 'All' || project.category === selectedCategory;
    const matchesSearch = 
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.shortDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.stack.some((tech) => tech.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesCategory && matchesSearch;
  });

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 border-b border-sky-100 pb-6">
          <div>
            <div className="text-sky-700 font-serif text-sm font-bold uppercase tracking-wider mb-1">
              Selected Works
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-sky-950">
              Software Engineering Projects
            </h2>
            <p className="text-slate-600 font-serif text-base mt-1 max-w-xl">
              Explored and implemented across OS kernels, cybersecurity detectors, AI APIs, and full-stack web platforms.
            </p>
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search by stack or title..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 rounded-md bg-sky-50 border border-sky-200 text-slate-900 font-serif text-sm focus:outline-none focus:border-sky-600 transition-colors"
            />
          </div>
        </div>

        {/* Filter Categories */}
        <div className="flex flex-wrap items-center gap-2 mb-8 overflow-x-auto pb-2">
          {categories.map((cat) => {
            const count = cat === 'All' 
              ? projectsData.length 
              : projectsData.filter((p) => p.category === cat).length;

            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-md font-serif text-sm transition-colors flex items-center gap-2 ${
                  selectedCategory === cat
                    ? 'bg-sky-600 text-white font-bold shadow-sm'
                    : 'bg-sky-50 text-slate-700 hover:bg-sky-100 border border-sky-200'
                }`}
              >
                <span>{cat}</span>
                <span className={`px-1.5 py-0.2 rounded text-xs font-mono ${
                  selectedCategory === cat ? 'bg-sky-700 text-white' : 'bg-sky-200 text-sky-900'
                }`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => onSelectProject(project)}
              className="sky-card rounded-lg overflow-hidden border border-sky-200 flex flex-col cursor-pointer group bg-white"
            >
              {/* Screenshot Header */}
              <div className="relative h-48 bg-sky-50 overflow-hidden border-b border-sky-100">
                <img
                  src={project.screenshots[0]}
                  alt={project.title}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                />
                
                {/* Category Badge */}
                <div className="absolute top-3 left-3 flex items-center gap-2">
                  <span className="px-2.5 py-1 rounded bg-white/90 text-sky-800 text-xs font-serif font-bold border border-sky-200 shadow-sm">
                    {project.badge}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <h3 className="text-xl font-serif font-bold text-sky-950 group-hover:text-sky-700 transition-colors flex items-center justify-between">
                    <span>{project.title}</span>
                    <ArrowUpRight className="w-4 h-4 text-sky-600 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </h3>
                  <p className="text-slate-600 font-serif text-sm line-clamp-2 leading-relaxed">
                    {project.shortDesc}
                  </p>
                </div>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {project.stack.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded bg-sky-50 text-sky-900 text-xs font-serif border border-sky-200"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.stack.length > 4 && (
                    <span className="px-2 py-0.5 rounded bg-sky-50 text-sky-700 text-xs font-serif border border-sky-200">
                      +{project.stack.length - 4}
                    </span>
                  )}
                </div>

                {/* Action Footer */}
                <div className="pt-3 border-t border-sky-100 flex items-center justify-between text-xs font-serif text-sky-800">
                  <span className="flex items-center gap-1 font-bold">
                    <Eye className="w-3.5 h-3.5 text-sky-600" />
                    <span>View Specifications</span>
                  </span>
                  <span className="text-slate-500">
                    {Object.values(project.metrics)[0]}
                  </span>
                </div>

              </div>
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12 text-slate-500 font-serif">
            No projects found matching query "{searchQuery}".
          </div>
        )}

      </div>
    </section>
  );
}
