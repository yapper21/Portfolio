import React from 'react';
import { ArrowUp, Users } from 'lucide-react';
import { partnerProfiles } from '../data/projectsData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white border-t border-sky-200 py-8 font-serif">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          
          <div className="flex items-center gap-2">
            <Users className="w-4 h-4 text-sky-700" />
            <span className="font-bold text-sky-950 text-sm">
              {partnerProfiles.yazish.name} & {partnerProfiles.uneeb.name} • Portfolio 2026
            </span>
          </div>

          <div className="text-xs text-slate-600">
            © 2026 Yazish Safa & Uneeb Zia. All rights reserved.
          </div>

          <button
            onClick={scrollToTop}
            className="p-2 rounded bg-sky-50 text-sky-700 hover:bg-sky-100 border border-sky-200 transition-colors"
            title="Scroll to Top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>

        </div>
      </div>
    </footer>
  );
}
