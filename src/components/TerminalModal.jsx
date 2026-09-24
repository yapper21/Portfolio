import React, { useState, useRef, useEffect } from 'react';
import { X, Code, CornerDownLeft } from 'lucide-react';
import { projectsData, partnerProfiles, technicalSkills } from '../data/projectsData';

export default function TerminalModal({ isOpen, onClose }) {
  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState([
    { text: "Yazish Safa & Uneeb Zia - Project Specification Inspector v1.0", type: "system" },
    { text: "Type 'help' or 'projects' to view detailed project code & architecture...", type: "system" }
  ]);
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  if (!isOpen) return null;

  const handleCommand = (e) => {
    e.preventDefault();
    const cmd = inputVal.trim();
    if (!cmd) return;

    const newHistory = [...history, { text: `> ${cmd}`, type: "user" }];
    const parts = cmd.toLowerCase().split(' ');
    const mainCmd = parts[0];
    const arg = parts[1];

    switch (mainCmd) {
      case 'help':
        newHistory.push({
          text: `AVAILABLE COMMANDS:
  help               - Show available inspection commands
  projects (or ls)   - List all software engineering projects
  cat <project-id>   - Print project specification & code (e.g. 'cat minios' or 'cat aegis-7')
  skills             - View engineering skills matrix
  bio                - View developer background & partners profile
  contact            - View email and phone contacts
  clear              - Clear output area`,
          type: "output"
        });
        break;

      case 'projects':
      case 'ls':
        newHistory.push({
          text: projectsData.map((p, idx) => `[${idx + 1}] ${p.id.padEnd(28)} | ${p.badge.padEnd(20)} | ${p.title}`).join('\n'),
          type: "output"
        });
        break;

      case 'cat':
        if (!arg) {
          newHistory.push({ text: "Error: Please specify a project ID (e.g. 'cat minios' or 'cat aegis-7').", type: "error" });
        } else {
          const found = projectsData.find(p => p.id.toLowerCase() === arg || p.slug.toLowerCase() === arg);
          if (found) {
            newHistory.push({
              text: `=== ${found.title.toUpperCase()} ===
Category : ${found.category} (${found.badge})
Stack    : ${found.stack.join(', ')}
Summary  : ${found.fullDesc}

[KEY METRICS]
${Object.entries(found.metrics).map(([k, v]) => `• ${k}: ${v}`).join('\n')}

[CODE SNIPPET]
${found.codeSnippet}`,
              type: "output"
            });
          } else {
            newHistory.push({ text: `Project '${arg}' not found. Type 'projects' for available IDs.`, type: "error" });
          }
        }
        break;

      case 'skills':
        newHistory.push({
          text: `LANGUAGES: ${technicalSkills.languages.join(', ')}
WEB & FRAMEWORKS: ${technicalSkills.webFrameworks.join(', ')}
AI & DATA: ${technicalSkills.aiData.join(', ')}
DATABASES: ${technicalSkills.databases.join(', ')}
TOOLS: ${technicalSkills.tools.join(', ')}`,
          type: "output"
        });
        break;

      case 'bio':
        newHistory.push({
          text: `PARTNERS PROFILE:
1. ${partnerProfiles.yazish.name} (${partnerProfiles.yazish.role})
   Education: ${partnerProfiles.yazish.education}
2. ${partnerProfiles.uneeb.name} (${partnerProfiles.uneeb.role})
   Education: ${partnerProfiles.uneeb.education}`,
          type: "output"
        });
        break;

      case 'contact':
        newHistory.push({
          text: `CONTACT DETAILS:
Yazish Safa: ${partnerProfiles.yazish.email} | ${partnerProfiles.yazish.phone}
Uneeb Zia  : ${partnerProfiles.uneeb.email} | ${partnerProfiles.uneeb.phone}`,
          type: "output"
        });
        break;

      case 'clear':
        setHistory([]);
        setInputVal('');
        return;

      default:
        newHistory.push({ text: `Command not recognized: '${cmd}'. Type 'help' for options.`, type: "error" });
        break;
    }

    setHistory(newHistory);
    setInputVal('');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-sky-950/40 backdrop-blur-xs font-serif">
      <div 
        className="w-full max-w-3xl h-[550px] rounded-xl bg-white border border-sky-300 shadow-2xl flex flex-col overflow-hidden text-sm"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="bg-sky-600 px-4 py-3 text-white flex items-center justify-between">
          <div className="flex items-center gap-2 font-serif text-sm font-bold">
            <Code className="w-4 h-4" />
            <span>Project Inspector - Yazish Safa & Uneeb Zia</span>
          </div>

          <button onClick={onClose} className="text-white hover:text-sky-100">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Output Area */}
        <div className="flex-1 p-4 overflow-y-auto space-y-3 bg-sky-50/50 font-mono text-xs">
          {history.map((item, idx) => (
            <div
              key={idx}
              className={`whitespace-pre-wrap leading-relaxed ${
                item.type === 'user'
                  ? 'text-sky-900 font-bold'
                  : item.type === 'error'
                  ? 'text-rose-600'
                  : item.type === 'system'
                  ? 'text-sky-700 font-bold'
                  : 'text-slate-800'
              }`}
            >
              {item.text}
            </div>
          ))}
          <div ref={bottomRef} />
        </div>

        {/* Command Form Input */}
        <form onSubmit={handleCommand} className="p-3 bg-white border-t border-sky-200 flex items-center gap-2">
          <span className="text-sky-800 font-bold font-mono">&gt;</span>
          <input
            type="text"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            placeholder="Type 'help', 'projects', 'cat aegis-7'..."
            className="flex-1 bg-transparent text-slate-900 focus:outline-none font-mono text-xs"
            autoFocus
          />
          <button type="submit" className="text-sky-700 hover:text-sky-900">
            <CornerDownLeft className="w-4 h-4" />
          </button>
        </form>
      </div>
    </div>
  );
}
