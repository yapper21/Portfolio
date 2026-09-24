import React, { useState } from 'react';
import { Mail, Phone, MapPin, Globe, Share2, Send, Check, Copy } from 'lucide-react';
import { partnerProfiles } from '../data/projectsData';

export default function Contact() {
  const [copiedYazish, setCopiedYazish] = useState(false);
  const [copiedUneeb, setCopiedUneeb] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleCopy = (email, setter) => {
    navigator.clipboard.writeText(email);
    setter(true);
    setTimeout(() => setter(false), 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 4000);
  };

  return (
    <section id="contact" className="py-20 bg-sky-50 font-serif border-b border-sky-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        <div className="text-center max-w-2xl mx-auto">
          <div className="text-sky-700 text-sm font-bold uppercase tracking-wider mb-1">
            Get In Touch
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-sky-950">
            Contact Information
          </h2>
          <p className="text-slate-600 text-base mt-1">
            Reach out directly to Yazish Safa or Uneeb Zia for software engineering inquiries, project work, or collaborations.
          </p>
        </div>

        {/* Contact Cards Grid for Both Partners */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          
          {/* Yazish Safa Contact Card */}
          <div className="sky-card p-6 rounded border border-sky-200 bg-white space-y-4">
            <div className="flex items-center justify-between border-b border-sky-100 pb-3">
              <div>
                <h3 className="text-2xl font-bold text-sky-950">{partnerProfiles.yazish.name}</h3>
                <div className="text-xs text-sky-700 font-bold">{partnerProfiles.yazish.role}</div>
              </div>
              <span className="px-2.5 py-1 rounded bg-sky-100 text-sky-800 text-xs font-bold border border-sky-200">
                Co-Engineer
              </span>
            </div>

            <div className="space-y-3 text-sm">
              <div className="flex items-center justify-between p-3 rounded bg-sky-50 border border-sky-200">
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-sky-700" />
                  <span className="font-bold text-sky-950">{partnerProfiles.yazish.email}</span>
                </div>
                <button
                  onClick={() => handleCopy(partnerProfiles.yazish.email, setCopiedYazish)}
                  className="p-1.5 rounded bg-white text-sky-700 hover:bg-sky-100 border border-sky-200 text-xs"
                >
                  {copiedYazish ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              <div className="flex items-center gap-2 p-3 rounded bg-sky-50 border border-sky-200 text-sky-950 font-bold">
                <Phone className="w-4 h-4 text-sky-700" />
                <span>{partnerProfiles.yazish.phone}</span>
              </div>

              <div className="flex items-center gap-2 p-3 rounded bg-sky-50 border border-sky-200 text-slate-700">
                <MapPin className="w-4 h-4 text-sky-700" />
                <span>{partnerProfiles.yazish.location}</span>
              </div>
            </div>

            <div className="pt-2 flex items-center gap-3">
              <a
                href={partnerProfiles.yazish.github}
                target="_blank"
                rel="noreferrer"
                className="flex-1 flex items-center justify-center gap-2 p-2.5 rounded bg-sky-50 text-sky-800 hover:bg-sky-100 border border-sky-200 text-xs font-bold transition-colors"
              >
                <Globe className="w-4 h-4 text-sky-700" />
                <span>GitHub Profile</span>
              </a>

              <a
                href={partnerProfiles.yazish.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex-1 flex items-center justify-center gap-2 p-2.5 rounded bg-sky-50 text-sky-800 hover:bg-sky-100 border border-sky-200 text-xs font-bold transition-colors"
              >
                <Share2 className="w-4 h-4 text-sky-700" />
                <span>LinkedIn Profile</span>
              </a>
            </div>
          </div>

          {/* Uneeb Zia Contact Card */}
          <div className="sky-card p-6 rounded border border-sky-200 bg-white space-y-4">
            <div className="flex items-center justify-between border-b border-sky-100 pb-3">
              <div>
                <h3 className="text-2xl font-bold text-sky-950">{partnerProfiles.uneeb.name}</h3>
                <div className="text-xs text-sky-700 font-bold">{partnerProfiles.uneeb.role}</div>
              </div>
              <span className="px-2.5 py-1 rounded bg-sky-100 text-sky-800 text-xs font-bold border border-sky-200">
                Portfolio Partner
              </span>
            </div>

            <div className="space-y-3 text-sm">
              <div className="flex items-center justify-between p-3 rounded bg-sky-50 border border-sky-200">
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-sky-700" />
                  <span className="font-bold text-sky-950">{partnerProfiles.uneeb.email}</span>
                </div>
                <button
                  onClick={() => handleCopy(partnerProfiles.uneeb.email, setCopiedUneeb)}
                  className="p-1.5 rounded bg-white text-sky-700 hover:bg-sky-100 border border-sky-200 text-xs"
                >
                  {copiedUneeb ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              <div className="flex items-center gap-2 p-3 rounded bg-sky-50 border border-sky-200 text-sky-950 font-bold">
                <Phone className="w-4 h-4 text-sky-700" />
                <span>{partnerProfiles.uneeb.phone}</span>
              </div>

              <div className="flex items-center gap-2 p-3 rounded bg-sky-50 border border-sky-200 text-slate-700">
                <MapPin className="w-4 h-4 text-sky-700" />
                <span>{partnerProfiles.uneeb.location}</span>
              </div>
            </div>

            <div className="pt-2">
              <div className="p-3 rounded bg-sky-50 border border-sky-200 text-xs text-slate-600 text-center">
                Co-Engineered all 11 portfolio projects with Yazish Safa
              </div>
            </div>
          </div>

        </div>

        {/* Direct Message Form */}
        <div className="sky-card p-8 rounded border border-sky-200 bg-white max-w-5xl mx-auto">
          {submitted ? (
            <div className="text-center py-8 space-y-3">
              <div className="w-12 h-12 rounded-full bg-sky-100 text-sky-700 flex items-center justify-center mx-auto border border-sky-300">
                <Check className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-sky-950">Message Sent!</h3>
              <p className="text-slate-600 text-sm">
                Thank you. Yazish Safa & Uneeb Zia will reply to your message shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <h3 className="text-xl font-bold text-sky-950 mb-2">Send a Message to Both Engineers</h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-serif text-slate-600 uppercase mb-1">Your Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Recruiter / Client Name"
                    className="w-full px-4 py-2.5 rounded bg-sky-50 border border-sky-200 text-slate-900 text-sm focus:outline-none focus:border-sky-600 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-serif text-slate-600 uppercase mb-1">Your Email</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="email@example.com"
                    className="w-full px-4 py-2.5 rounded bg-sky-50 border border-sky-200 text-slate-900 text-sm focus:outline-none focus:border-sky-600 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-serif text-slate-600 uppercase mb-1">Message</label>
                <textarea
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Enter project inquiry, job offer, or message..."
                  className="w-full px-4 py-2.5 rounded bg-sky-50 border border-sky-200 text-slate-900 text-sm focus:outline-none focus:border-sky-600 transition-colors"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded bg-sky-600 hover:bg-sky-700 text-white font-serif font-bold text-sm shadow-sm transition-colors flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                <span>Send Message to Yazish & Uneeb</span>
              </button>
            </form>
          )}
        </div>

      </div>
    </section>
  );
}
