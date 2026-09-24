import React, { useState, useEffect } from 'react';
import { Code, Menu, X, Users } from 'lucide-react';

export default function Navbar({ onOpenInspector }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact Us', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
      scrolled 
        ? 'bg-white/95 backdrop-blur-sm border-b border-sky-200 py-3 shadow-sm' 
        : 'bg-sky-50 py-4 border-b border-sky-100'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Name - Both Partners */}
          <a href="#" className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-sky-600 flex items-center justify-center text-white shadow-sm">
              <Users className="w-5 h-5" />
            </div>
            <div>
              <span className="font-serif font-bold text-xl text-sky-950 tracking-tight">
                Yazish Safa & Uneeb Zia
              </span>
              <div className="text-xs text-sky-700 font-serif">
                Full-Stack & Systems Engineering Partners
              </div>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="font-serif text-base text-slate-700 hover:text-sky-700 transition-colors py-1 border-b-2 border-transparent hover:border-sky-600"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Project Inspector Action */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={onOpenInspector}
              className="flex items-center gap-2 bg-sky-600 hover:bg-sky-700 text-white font-serif px-4 py-2 rounded text-sm transition-colors shadow-sm"
            >
              <Code className="w-4 h-4" />
              <span>Project Inspector</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-sky-700"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 pb-4 border-t border-sky-200 pt-3 space-y-2 bg-white rounded-lg p-4 shadow-lg">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block font-serif text-base text-slate-800 hover:text-sky-700 py-1"
              >
                {link.name}
              </a>
            ))}
            <button
              onClick={() => { setMobileMenuOpen(false); onOpenInspector(); }}
              className="w-full mt-2 flex items-center justify-center gap-2 bg-sky-600 text-white font-serif py-2 rounded text-sm"
            >
              <Code className="w-4 h-4" />
              <span>Project Inspector</span>
            </button>
          </div>
        )}

      </div>
    </nav>
  );
}
