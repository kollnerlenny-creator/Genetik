import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { GlossarySection } from './components/GlossarySection';
import { MendelSection } from './components/MendelSection';
import { MutationSection } from './components/MutationSection';
import { PedigreeSection } from './components/PedigreeSection';
import { DiseasesSection } from './components/DiseasesSection';
import { ExamTrainerSection } from './components/ExamTrainerSection';
import { downloadWordDocument } from './utils/wordExport';
import { FileText, Printer, CheckCircle, Dna, Sparkles, BookOpen, GitBranch, HeartPulse, GraduationCap } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('lexikon');

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col selection:bg-teal-100 selection:text-teal-900">
      {/* 3-Zone Navigation Header */}
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        
        {/* Hero Section Banner */}
        <section className="bg-gradient-to-br from-teal-900 via-teal-800 to-slate-900 text-white rounded-2xl p-6 sm:p-8 shadow-sm relative overflow-hidden">
          <div className="relative z-10 max-w-3xl space-y-3">
            <div className="flex items-center gap-2 text-xs text-teal-200">
              <span className="font-semibold text-teal-300">Biologie Leistungskontrolle</span>
              <span aria-hidden="true">&middot;</span>
              <span>Kompakt &amp; Vollständig</span>
              <span aria-hidden="true">&middot;</span>
              <span>Fachlich exakt</span>
            </div>
            
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white leading-tight">
              Klassische &amp; Molekulare Genetik Lernportal
            </h1>
            
            <p className="text-slate-200 text-xs sm:text-sm leading-relaxed max-w-2xl">
              Interaktive Vorbereitung für deine Biologie-Klausur: 25 Fachbegriffe mit Karteikarten, Mendel-Kreuzungsquadrate (9:3:3:1 &amp; 1:1:1:1), DNA-Mutationsstudio, 2-Schritte-Stammbaumanalyse und vollständige Krankheits-Steckbriefe der Stationsarbeit.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-2">
              <button
                onClick={() => setActiveTab('klausurtrainer')}
                className="px-4 py-2 bg-teal-500 hover:bg-teal-400 text-slate-950 font-semibold rounded-lg text-xs transition-all shadow-xs flex items-center gap-1.5 active:scale-95"
              >
                <GraduationCap className="w-4 h-4" />
                <span>Klausurtrainer starten</span>
              </button>

              <button
                onClick={downloadWordDocument}
                className="px-4 py-2 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-lg text-xs transition-all border border-white/20 flex items-center gap-1.5 active:scale-95"
              >
                <FileText className="w-4 h-4" />
                <span>Word-Skript (.doc) herunterladen</span>
              </button>
            </div>
          </div>

          {/* Decorative background vectors */}
          <div className="absolute -right-8 -bottom-8 opacity-10 pointer-events-none select-none">
            <svg width="280" height="280" viewBox="0 0 100 100" fill="currentColor">
              <path d="M50 0 C70 30, 90 30, 90 50 C90 70, 70 70, 50 100 C30 70, 10 70, 10 50 C10 30, 30 30, 50 0 Z" />
            </svg>
          </div>
        </section>

        {/* Tab Module Content */}
        <div className="min-h-[500px]">
          {activeTab === 'lexikon' && <GlossarySection />}
          {activeTab === 'mendel' && <MendelSection />}
          {activeTab === 'mutationen' && <MutationSection />}
          {activeTab === 'stammbaum' && <PedigreeSection />}
          {activeTab === 'stationen' && <DiseasesSection />}
          {activeTab === 'klausurtrainer' && <ExamTrainerSection />}
        </div>

      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 mt-12 py-6 text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="font-bold text-slate-900">BioGenetik</span>
            <span aria-hidden="true">&middot;</span>
            <span>Vollständiges Lernportal für die Leistungskontrolle</span>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={downloadWordDocument}
              className="text-teal-700 hover:text-teal-900 font-semibold transition-colors flex items-center gap-1"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Word-Export (.doc)</span>
            </button>
            <button
              onClick={() => window.print()}
              className="hover:text-slate-900 transition-colors flex items-center gap-1"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Drucken</span>
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}
