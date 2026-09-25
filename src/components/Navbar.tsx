import React from 'react';
import { FileText, Printer, BookOpen, Dna, GitBranch, HeartPulse, GraduationCap, Sparkles } from 'lucide-react';
import { downloadWordDocument } from '../utils/wordExport';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeTab, setActiveTab }) => {
  const navItems = [
    { id: 'lexikon', label: 'Fachbegriffe', icon: BookOpen },
    { id: 'mendel', label: 'Mendel-Labor', icon: Sparkles },
    { id: 'mutationen', label: 'Mutationen', icon: Dna },
    { id: 'stammbaum', label: 'Stammbäume', icon: GitBranch },
    { id: 'stationen', label: 'Erbkrankheiten', icon: HeartPulse },
    { id: 'klausurtrainer', label: 'Klausurtrainer', icon: GraduationCap },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        {/* Zone 1: Single text element wordmark */}
        <a 
          href="#top" 
          onClick={(e) => { e.preventDefault(); setActiveTab('lexikon'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          className="text-xl font-bold tracking-tight text-slate-900 flex items-center gap-2 hover:text-teal-700 transition-colors"
        >
          <span className="w-8 h-8 rounded-lg bg-teal-600 text-white flex items-center justify-center font-mono font-bold text-sm shadow-sm">
            BG
          </span>
          <span>BioGenetik</span>
        </a>

        {/* Zone 2: 4-6 clean text navigation links with active state */}
        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`px-3.5 py-2 text-sm font-medium rounded-lg transition-colors flex items-center gap-1.5 whitespace-nowrap ${
                  isActive
                    ? 'bg-teal-50 text-teal-800 font-semibold'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/70'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-teal-600' : 'text-slate-400'}`} />
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>

        {/* Zone 3: 1-2 primary actions */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => window.print()}
            title="Drucken / Als PDF speichern"
            className="p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors flex items-center gap-1.5 text-xs font-medium"
          >
            <Printer className="w-4 h-4" />
            <span className="hidden sm:inline">Drucken</span>
          </button>

          <button
            onClick={downloadWordDocument}
            title="Word-Dokument herunterladen (.doc)"
            className="px-3.5 py-2 text-xs font-semibold text-white bg-teal-700 hover:bg-teal-800 rounded-lg shadow-sm transition-all flex items-center gap-1.5 whitespace-nowrap active:scale-95"
          >
            <FileText className="w-4 h-4" />
            <span>Word-Export</span>
          </button>
        </div>
      </div>

      {/* Mobile Sub-Navigation Bar */}
      <div className="lg:hidden border-t border-slate-100 px-2 py-1.5 flex items-center gap-1 overflow-x-auto no-scrollbar">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`px-3 py-1.5 text-xs font-medium rounded-md whitespace-nowrap transition-colors flex items-center gap-1 shrink-0 ${
                isActive
                  ? 'bg-teal-600 text-white font-semibold'
                  : 'text-slate-600 hover:bg-slate-100'
              }`}
            >
              <Icon className="w-3.5 h-3.5" />
              <span>{item.label}</span>
            </button>
          );
        })}
      </div>
    </header>
  );
};
