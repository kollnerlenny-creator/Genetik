import React, { useState } from 'react';
import { Dna, AlertTriangle, ArrowRight, ShieldCheck, RefreshCw } from 'lucide-react';

export const MutationSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'gen' | 'chromosom' | 'genom'>('gen');
  const [selectedGeneMutation, setSelectedGeneMutation] = useState<'wildtyp' | 'silent' | 'missense' | 'nonsense' | 'frameshift_del' | 'frameshift_ins'>('wildtyp');
  const [selectedChromMutation, setSelectedChromMutation] = useState<'normal' | 'deletion' | 'duplication' | 'inversion' | 'translocation'>('normal');
  const [nondisjunctionStage, setNondisjunctionStage] = useState<'meiose1' | 'meiose2'>('meiose1');

  // Gene mutation details
  const geneMutationData = {
    wildtyp: {
      title: 'Wildtyp (Normalzustand ohne Mutation)',
      dna: 'TAC - TTC - CTC - GAC - ACT',
      mrna: 'AUG - AAG - GAG - CUG - UGA',
      protein: ['Met (Start)', 'Lys', 'Glu', 'Leu', 'STOP'],
      effect: 'Voll funktionsfähiges Polypeptid mit korrekter Faltung und Aktivität.',
      severity: 'Normal',
      type: 'Keine Mutation'
    },
    silent: {
      title: 'Stumme Mutation (Silent Mutation)',
      dna: 'TAC - TTT - CTC - GAC - ACT',
      mrna: 'AUG - AAA - GAG - CUG - UGA',
      protein: ['Met (Start)', 'Lys', 'Glu', 'Leu', 'STOP'],
      effect: 'Basenaustausch im 2. Codon (AAG -> AAA). Wegen der Degeneration des genetischen Codes codieren beide Tripletts für dieselbe Aminosäure (Lysin). Die Aminosäuresequenz bleibt identisch. Keine phänotypische Konsequenz.',
      severity: 'Harmlos',
      type: 'Punktmutation (Basensubstitution)'
    },
    missense: {
      title: 'Missense-Mutation (Fehlsinn-Mutation)',
      dna: 'TAC - TTC - CAC - GAC - ACT',
      mrna: 'AUG - AAG - GUG - CUG - UGA',
      protein: ['Met (Start)', 'Lys', 'Val', 'Leu', 'STOP'],
      effect: 'Basenaustausch im 3. Codon (GAG -> GUG). Statt der sauren Aminosäure Glutaminsäure wird die unpolare Aminosäure Valin eingebaut (analog zur Sichelzellanämie). Kann die Tertiärstruktur und Funktion des Proteins verändern.',
      severity: 'Mittel bis Schwer',
      type: 'Punktmutation (Basensubstitution)'
    },
    nonsense: {
      title: 'Nonsense-Mutation (Unsinn-Mutation)',
      dna: 'TAC - ATC - CTC - GAC - ACT',
      mrna: 'AUG - UAG - GAG - CUG - UGA',
      protein: ['Met (Start)', 'STOP (Abbruch!)'],
      effect: 'Basenaustausch im 2. Codon verwandelt ein Aminosäure-Codon in ein verfrühtes Stopp-Codon (UAG). Die Translation bricht nach nur einer Aminosäure sofort ab. Das Protein ist extrem verkürzt und vollkommen funktionslos.',
      severity: 'Sehr schwer / Funktionsverlust',
      type: 'Punktmutation (vorzeitiger Kettenabbruch)'
    },
    frameshift_del: {
      title: 'Rastermutation: Deletion (Verlust einer Base)',
      dna: 'TAC - TC... (eine Base gelöscht)',
      mrna: 'AUG - AGG - AGC - UGU - GA...',
      protein: ['Met (Start)', 'Arg', 'Ser', 'Cys', '???'],
      effect: 'Durch den Verlust von 1 Base (nicht durch 3 teilbar) verschiebt sich das gesamte Leseraster nach der Mutationsstelle vollständig. Ab der Deletion entstehen völlig andere Aminosäuren, meist gefolgt von einem baldigen Stopp-Codon. Protein verliert jegliche Funktion.',
      severity: 'Katastrophal / Vollständiger Ausfall',
      type: 'Rastermutation (Frameshift Deletion)'
    },
    frameshift_ins: {
      title: 'Rastermutation: Insertion (Einfügen einer Base)',
      dna: 'TAC - TTG - CCT - CGA - CAC - T...',
      mrna: 'AUG - AAC - GGA - GCU - GUG - A...',
      protein: ['Met (Start)', 'Asn', 'Gly', 'Ala', 'Val', '...'],
      effect: 'Das Einfügen einer zusätzlichen Base (G) verschiebt ebenfalls das gesamte Codon-Raster. Die nachfolgenden Tripletts werden völlig falsch abgelesen.',
      severity: 'Katastrophal / Vollständiger Ausfall',
      type: 'Rastermutation (Frameshift Insertion)'
    }
  };

  const activeGeneData = geneMutationData[selectedGeneMutation];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="border-b border-slate-200 pb-4">
        <h2 className="text-2xl font-bold tracking-tight text-slate-900">
          Mutations-Studio &amp; Strukturanalyse
        </h2>
        <div className="flex items-center gap-2 text-xs text-slate-500 mt-1">
          <span>Genmutationen (Punkt- &amp; Raster)</span>
          <span aria-hidden="true">&middot;</span>
          <span>Chromosomenmutationen (Struktur)</span>
          <span aria-hidden="true">&middot;</span>
          <span>Genommutationen (Zahl &amp; Nondisjunction)</span>
        </div>
      </div>

      {/* Level Selector Tabs */}
      <div className="flex items-center p-1 bg-slate-100 rounded-lg border border-slate-200 max-w-xl">
        <button
          onClick={() => setActiveTab('gen')}
          className={`flex-1 py-1.5 text-xs font-semibold rounded-md transition-all ${
            activeTab === 'gen' ? 'bg-white text-teal-900 shadow-xs' : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          1. Genmutationen (Molekular)
        </button>
        <button
          onClick={() => setActiveTab('chromosom')}
          className={`flex-1 py-1.5 text-xs font-semibold rounded-md transition-all ${
            activeTab === 'chromosom' ? 'bg-white text-teal-900 shadow-xs' : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          2. Chromosomenmutationen
        </button>
        <button
          onClick={() => setActiveTab('genom')}
          className={`flex-1 py-1.5 text-xs font-semibold rounded-md transition-all ${
            activeTab === 'genom' ? 'bg-white text-teal-900 shadow-xs' : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          3. Genommutationen
        </button>
      </div>

      {/* TAB 1: GENMUTATIONEN */}
      {activeTab === 'gen' && (
        <div className="space-y-6">
          <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-xs space-y-6">
            <div>
              <h3 className="text-lg font-bold text-slate-900">
                Interaktiver Codon- &amp; Translations-Simulator
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Wähle eine Mutationsart aus, um die molekulare Veränderung von DNA über mRNA bis zum Polypeptid live zu beobachten:
              </p>
            </div>

            {/* Mutation Selectors */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
              <button
                onClick={() => setSelectedGeneMutation('wildtyp')}
                className={`p-2 rounded-lg text-xs font-semibold text-center border transition-all ${
                  selectedGeneMutation === 'wildtyp' ? 'bg-slate-900 text-white border-slate-900' : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                }`}
              >
                Wildtyp
              </button>
              <button
                onClick={() => setSelectedGeneMutation('silent')}
                className={`p-2 rounded-lg text-xs font-semibold text-center border transition-all ${
                  selectedGeneMutation === 'silent' ? 'bg-teal-700 text-white border-teal-700' : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                }`}
              >
                Stumme Mutation
              </button>
              <button
                onClick={() => setSelectedGeneMutation('missense')}
                className={`p-2 rounded-lg text-xs font-semibold text-center border transition-all ${
                  selectedGeneMutation === 'missense' ? 'bg-amber-600 text-white border-amber-600' : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                }`}
              >
                Missense
              </button>
              <button
                onClick={() => setSelectedGeneMutation('nonsense')}
                className={`p-2 rounded-lg text-xs font-semibold text-center border transition-all ${
                  selectedGeneMutation === 'nonsense' ? 'bg-rose-700 text-white border-rose-700' : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                }`}
              >
                Nonsense
              </button>
              <button
                onClick={() => setSelectedGeneMutation('frameshift_del')}
                className={`p-2 rounded-lg text-xs font-semibold text-center border transition-all ${
                  selectedGeneMutation === 'frameshift_del' ? 'bg-purple-700 text-white border-purple-700' : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                }`}
              >
                Raster: Deletion
              </button>
              <button
                onClick={() => setSelectedGeneMutation('frameshift_ins')}
                className={`p-2 rounded-lg text-xs font-semibold text-center border transition-all ${
                  selectedGeneMutation === 'frameshift_ins' ? 'bg-purple-700 text-white border-purple-700' : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                }`}
              >
                Raster: Insertion
              </button>
            </div>

            {/* Sequence Stage */}
            <div className="bg-slate-900 text-white rounded-xl p-5 space-y-4 font-mono text-xs shadow-inner">
              <div className="flex items-center justify-between border-b border-slate-700 pb-2">
                <span className="text-teal-400 font-bold">{activeGeneData.title}</span>
                <span className="text-slate-400 text-[11px]">{activeGeneData.type}</span>
              </div>

              {/* DNA Row */}
              <div className="space-y-1">
                <span className="text-slate-400 text-[11px] block">DNA-Codogener Strang (3' &rarr; 5'):</span>
                <div className="p-2.5 bg-slate-800/80 rounded border border-slate-700 tracking-wider text-sm text-cyan-300">
                  {activeGeneData.dna}
                </div>
              </div>

              {/* mRNA Row */}
              <div className="space-y-1">
                <span className="text-slate-400 text-[11px] block">mRNA-Transkript (5' &rarr; 3'):</span>
                <div className="p-2.5 bg-slate-800/80 rounded border border-slate-700 tracking-wider text-sm text-emerald-300">
                  {activeGeneData.mrna}
                </div>
              </div>

              {/* Protein Row */}
              <div className="space-y-1">
                <span className="text-slate-400 text-[11px] block">Aminosäurekette (Polypeptid):</span>
                <div className="flex flex-wrap items-center gap-1.5 p-2.5 bg-slate-800/80 rounded border border-slate-700">
                  {activeGeneData.protein.map((aa, idx) => {
                    const isStop = aa.includes('STOP');
                    const isMutated = selectedGeneMutation === 'missense' && aa === 'Val';
                    return (
                      <span
                        key={idx}
                        className={`px-2 py-1 rounded text-xs font-bold ${
                          isStop
                            ? 'bg-rose-900 text-rose-200 border border-rose-600'
                            : isMutated
                            ? 'bg-amber-800 text-amber-200 border border-amber-500'
                            : 'bg-teal-900 text-teal-200 border border-teal-700'
                        }`}
                      >
                        {aa}
                      </span>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Explanation Box */}
            <div className="p-4 bg-slate-50 border border-slate-200 rounded-lg space-y-2 text-xs">
              <div className="flex items-center justify-between">
                <span className="font-bold text-slate-900 text-sm">Auswirkung auf das Protein:</span>
                <span className="text-slate-600 font-medium">Schweregrad: <strong>{activeGeneData.severity}</strong></span>
              </div>
              <p className="text-slate-700 leading-relaxed">{activeGeneData.effect}</p>
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: CHROMOSOMENMUTATIONEN */}
      {activeTab === 'chromosom' && (
        <div className="space-y-6">
          <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-xs space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <h3 className="text-lg font-bold text-slate-900">
                  Chromosomen-Strukturmutationen &amp; Balanciertheit
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Klicke auf die Mutationen, um die strukturelle Veränderung am Chromosomenmodell zu sehen:
                </p>
              </div>

              {/* Mutation Mode Buttons */}
              <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-lg overflow-x-auto no-scrollbar">
                <button
                  onClick={() => setSelectedChromMutation('normal')}
                  className={`px-2.5 py-1 text-xs font-semibold rounded ${
                    selectedChromMutation === 'normal' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600'
                  }`}
                >
                  Normal
                </button>
                <button
                  onClick={() => setSelectedChromMutation('deletion')}
                  className={`px-2.5 py-1 text-xs font-semibold rounded ${
                    selectedChromMutation === 'deletion' ? 'bg-rose-700 text-white shadow-xs' : 'text-slate-600'
                  }`}
                >
                  Deletion
                </button>
                <button
                  onClick={() => setSelectedChromMutation('duplication')}
                  className={`px-2.5 py-1 text-xs font-semibold rounded ${
                    selectedChromMutation === 'duplication' ? 'bg-teal-700 text-white shadow-xs' : 'text-slate-600'
                  }`}
                >
                  Duplikation
                </button>
                <button
                  onClick={() => setSelectedChromMutation('inversion')}
                  className={`px-2.5 py-1 text-xs font-semibold rounded ${
                    selectedChromMutation === 'inversion' ? 'bg-amber-600 text-white shadow-xs' : 'text-slate-600'
                  }`}
                >
                  Inversion
                </button>
                <button
                  onClick={() => setSelectedChromMutation('translocation')}
                  className={`px-2.5 py-1 text-xs font-semibold rounded ${
                    selectedChromMutation === 'translocation' ? 'bg-indigo-700 text-white shadow-xs' : 'text-slate-600'
                  }`}
                >
                  Translokation
                </button>
              </div>
            </div>

            {/* Interactive SVG Chromosome Graphic */}
            <div className="bg-slate-50 rounded-xl border border-slate-200 p-6 flex flex-col items-center justify-center">
              <svg width="480" height="170" viewBox="0 0 480 170" className="max-w-full">
                {/* Normal Chromosome on Left */}
                <g transform="translate(60, 20)">
                  <text x="35" y="-5" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#475569">
                    Referenz (Normal)
                  </text>
                  <rect x="15" y="10" width="40" height="18" fill="#3b82f6" rx="3" />
                  <text x="35" y="23" textAnchor="middle" fontSize="10" fill="white" fontWeight="bold">A</text>
                  <rect x="15" y="30" width="40" height="18" fill="#60a5fa" rx="3" />
                  <text x="35" y="43" textAnchor="middle" fontSize="10" fill="white" fontWeight="bold">B</text>
                  <rect x="15" y="50" width="40" height="18" fill="#0284c7" rx="3" />
                  <text x="35" y="63" textAnchor="middle" fontSize="10" fill="white" fontWeight="bold">C</text>
                  {/* Centromere */}
                  <circle cx="35" cy="74" r="5" fill="#1e3a8a" />
                  <rect x="15" y="80" width="40" height="18" fill="#0ea5e9" rx="3" />
                  <text x="35" y="93" textAnchor="middle" fontSize="10" fill="white" fontWeight="bold">D</text>
                  <rect x="15" y="100" width="40" height="18" fill="#38bdf8" rx="3" />
                  <text x="35" y="113" textAnchor="middle" fontSize="10" fill="white" fontWeight="bold">E</text>
                  <rect x="15" y="120" width="40" height="18" fill="#7dd3fc" rx="3" />
                  <text x="35" y="133" textAnchor="middle" fontSize="10" fill="#0f172a" fontWeight="bold">F</text>
                </g>

                <path d="M 180 85 L 230 85" stroke="#94a3b8" strokeWidth="2" strokeDasharray="4 4" markerEnd="url(#arrow)" />

                {/* Mutated Chromosome on Right */}
                <g transform="translate(290, 20)">
                  <text x="35" y="-5" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#0f172a">
                    {selectedChromMutation.toUpperCase()}
                  </text>

                  {selectedChromMutation === 'normal' && (
                    <>
                      <rect x="15" y="10" width="40" height="18" fill="#3b82f6" rx="3" /><text x="35" y="23" textAnchor="middle" fontSize="10" fill="white" fontWeight="bold">A</text>
                      <rect x="15" y="30" width="40" height="18" fill="#60a5fa" rx="3" /><text x="35" y="43" textAnchor="middle" fontSize="10" fill="white" fontWeight="bold">B</text>
                      <rect x="15" y="50" width="40" height="18" fill="#0284c7" rx="3" /><text x="35" y="63" textAnchor="middle" fontSize="10" fill="white" fontWeight="bold">C</text>
                      <circle cx="35" cy="74" r="5" fill="#1e3a8a" />
                      <rect x="15" y="80" width="40" height="18" fill="#0ea5e9" rx="3" /><text x="35" y="93" textAnchor="middle" fontSize="10" fill="white" fontWeight="bold">D</text>
                      <rect x="15" y="100" width="40" height="18" fill="#38bdf8" rx="3" /><text x="35" y="113" textAnchor="middle" fontSize="10" fill="white" fontWeight="bold">E</text>
                      <rect x="15" y="120" width="40" height="18" fill="#7dd3fc" rx="3" /><text x="35" y="133" textAnchor="middle" fontSize="10" fill="#0f172a" fontWeight="bold">F</text>
                    </>
                  )}

                  {selectedChromMutation === 'deletion' && (
                    <>
                      <rect x="15" y="10" width="40" height="18" fill="#3b82f6" rx="3" /><text x="35" y="23" textAnchor="middle" fontSize="10" fill="white" fontWeight="bold">A</text>
                      <rect x="15" y="30" width="40" height="18" fill="#60a5fa" rx="3" /><text x="35" y="43" textAnchor="middle" fontSize="10" fill="white" fontWeight="bold">B</text>
                      {/* C and D lost! */}
                      <circle cx="35" cy="54" r="5" fill="#1e3a8a" />
                      <rect x="15" y="60" width="40" height="18" fill="#38bdf8" rx="3" /><text x="35" y="73" textAnchor="middle" fontSize="10" fill="white" fontWeight="bold">E</text>
                      <rect x="15" y="80" width="40" height="18" fill="#7dd3fc" rx="3" /><text x="35" y="93" textAnchor="middle" fontSize="10" fill="#0f172a" fontWeight="bold">F</text>
                      <text x="70" y="55" fontSize="11" fill="#dc2626" fontWeight="bold">&larr; C &amp; D verloren (5p- Deletion!)</text>
                    </>
                  )}

                  {selectedChromMutation === 'duplication' && (
                    <>
                      <rect x="15" y="5" width="40" height="15" fill="#3b82f6" rx="2" /><text x="35" y="16" textAnchor="middle" fontSize="9" fill="white" fontWeight="bold">A</text>
                      <rect x="15" y="22" width="40" height="15" fill="#60a5fa" rx="2" /><text x="35" y="33" textAnchor="middle" fontSize="9" fill="white" fontWeight="bold">B</text>
                      <rect x="15" y="39" width="40" height="15" fill="#0284c7" rx="2" stroke="#047857" strokeWidth="2" /><text x="35" y="50" textAnchor="middle" fontSize="9" fill="white" fontWeight="bold">C</text>
                      <rect x="15" y="56" width="40" height="15" fill="#0284c7" rx="2" stroke="#047857" strokeWidth="2" /><text x="35" y="67" textAnchor="middle" fontSize="9" fill="white" fontWeight="bold">C (doppelt)</text>
                      <circle cx="35" cy="77" r="4" fill="#1e3a8a" />
                      <rect x="15" y="83" width="40" height="15" fill="#0ea5e9" rx="2" /><text x="35" y="94" textAnchor="middle" fontSize="9" fill="white" fontWeight="bold">D</text>
                      <rect x="15" y="100" width="40" height="15" fill="#38bdf8" rx="2" /><text x="35" y="111" textAnchor="middle" fontSize="9" fill="white" fontWeight="bold">E</text>
                      <rect x="15" y="117" width="40" height="15" fill="#7dd3fc" rx="2" /><text x="35" y="128" textAnchor="middle" fontSize="9" fill="#0f172a" fontWeight="bold">F</text>
                    </>
                  )}

                  {selectedChromMutation === 'inversion' && (
                    <>
                      <rect x="15" y="10" width="40" height="18" fill="#3b82f6" rx="3" /><text x="35" y="23" textAnchor="middle" fontSize="10" fill="white" fontWeight="bold">A</text>
                      {/* B-C-D inverted to D-C-B */}
                      <rect x="15" y="30" width="40" height="18" fill="#0ea5e9" rx="3" stroke="#d97706" strokeWidth="1.5" /><text x="35" y="43" textAnchor="middle" fontSize="10" fill="white" fontWeight="bold">D</text>
                      <rect x="15" y="50" width="40" height="18" fill="#0284c7" rx="3" stroke="#d97706" strokeWidth="1.5" /><text x="35" y="63" textAnchor="middle" fontSize="10" fill="white" fontWeight="bold">C</text>
                      <circle cx="35" cy="74" r="5" fill="#1e3a8a" />
                      <rect x="15" y="80" width="40" height="18" fill="#60a5fa" rx="3" stroke="#d97706" strokeWidth="1.5" /><text x="35" y="93" textAnchor="middle" fontSize="10" fill="white" fontWeight="bold">B</text>
                      <rect x="15" y="100" width="40" height="18" fill="#38bdf8" rx="3" /><text x="35" y="113" textAnchor="middle" fontSize="10" fill="white" fontWeight="bold">E</text>
                      <rect x="15" y="120" width="40" height="18" fill="#7dd3fc" rx="3" /><text x="35" y="133" textAnchor="middle" fontSize="10" fill="#0f172a" fontWeight="bold">F</text>
                      <text x="70" y="65" fontSize="11" fill="#d97706" fontWeight="bold">&larr; Um 180&deg; gedreht</text>
                    </>
                  )}

                  {selectedChromMutation === 'translocation' && (
                    <>
                      <rect x="15" y="10" width="40" height="18" fill="#3b82f6" rx="3" /><text x="35" y="23" textAnchor="middle" fontSize="10" fill="white" fontWeight="bold">A</text>
                      <rect x="15" y="30" width="40" height="18" fill="#60a5fa" rx="3" /><text x="35" y="43" textAnchor="middle" fontSize="10" fill="white" fontWeight="bold">B</text>
                      <circle cx="35" cy="54" r="5" fill="#1e3a8a" />
                      {/* Foreign chromosome piece from Chr. 22 */}
                      <rect x="15" y="60" width="40" height="24" fill="#a855f7" rx="3" stroke="#6b21a8" strokeWidth="2" /><text x="35" y="76" textAnchor="middle" fontSize="9" fill="white" fontWeight="bold">Chr. 22 Stück</text>
                      <rect x="15" y="86" width="40" height="18" fill="#38bdf8" rx="3" /><text x="35" y="99" textAnchor="middle" fontSize="10" fill="white" fontWeight="bold">E</text>
                      <text x="70" y="75" fontSize="11" fill="#a855f7" fontWeight="bold">&larr; Translokation</text>
                    </>
                  )}
                </g>
              </svg>
            </div>

            {/* Balanciert vs. Unbalanciert Fact Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div className="p-4 bg-teal-50 border border-teal-200 rounded-xl space-y-1">
                <span className="font-bold text-teal-900 text-sm block">Balancierte Chromosomenmutation</span>
                <p className="text-teal-800">
                  <strong>Inversion &amp; balancierte Translokation:</strong> Die <strong>Gesamtmenge</strong> der Erbinformation bleibt unverändert (keine Basen gehen verloren, keine kommen hinzu). Die Gene sind lediglich anders angeordnet.
                </p>
                <p className="text-teal-700 text-[11px] pt-1">
                  Träger sind phänotypisch oft gesund, haben aber ein hohes Risiko für Fehlgeburten oder geschädigte Nachkommen.
                </p>
              </div>

              <div className="p-4 bg-rose-50 border border-rose-200 rounded-xl space-y-1">
                <span className="font-bold text-rose-900 text-sm block">Unbalancierte Chromosomenmutation</span>
                <p className="text-rose-900">
                  <strong>Deletion &amp; Duplikation:</strong> Die Menge des Erbguts ändert sich quantitativ! Bei Deletion geht DNA verloren (z. B. Cri-du-chat 5p-), bei Duplikation liegt Erbgut überzählig vor.
                </p>
                <p className="text-rose-800 text-[11px] pt-1">
                  Führt fast immer zu schweren Fehlbildungen oder Letalität durch Gendosis-Effekte.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 3: GENOMMUTATIONEN */}
      {activeTab === 'genom' && (
        <div className="space-y-6">
          <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-xs space-y-6">
            <div>
              <h3 className="text-lg font-bold text-slate-900">
                Genommutationen: Aneuploidie vs. Polyploidie
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Veränderung der Anzahl ganzer Chromosomen durch Teilungsfehler in der Meiose:
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-2 text-xs">
                <span className="font-bold text-slate-900 text-sm block">Aneuploidie (Zahl einzelner Chromosomen verändert)</span>
                <p className="text-slate-600">
                  Entsteht durch <strong>Nondisjunction</strong> (Nicht-Trennung von homologen Chromosomen oder Chromatiden) während der Meiose:
                </p>
                <ul className="list-disc pl-4 space-y-1 text-slate-700">
                  <li><strong>Trisomie (2n + 1):</strong> Ein Chromosom ist dreifach vorhanden (z. B. Trisomie 21 / Down-Syndrom, Trisomie 18).</li>
                  <li><strong>Monosomie (2n - 1):</strong> Ein Chromosom fehlt (z. B. Turner-Syndrom 45,X0). Autosomal beim Menschen immer letal!</li>
                </ul>
              </div>

              <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-2 text-xs">
                <span className="font-bold text-slate-900 text-sm block">Polyploidie (Vervielfachung ganzer Sätze)</span>
                <p className="text-slate-600">
                  Vervielfachung des gesamten Chromosomensatzes (3n, 4n, 6n):
                </p>
                <ul className="list-disc pl-4 space-y-1 text-slate-700">
                  <li><strong>Mensch &amp; Säugetiere:</strong> Nicht lebensfähig (spontaner Abort).</li>
                  <li><strong>Kulturpflanzen (z. B. tetraploider Roggen 4n):</strong> Erwünschter Gigas-Effekt! Führt zu größeren Zellen, erhöhter Robustheit gegen Kälte und Trockenheit sowie signifikant höheren Kornerträgen.</li>
                </ul>
              </div>
            </div>

            {/* Nondisjunction Visualizer */}
            <div className="border border-slate-200 rounded-xl p-5 bg-slate-50 space-y-4">
              <div className="flex items-center justify-between">
                <h4 className="font-bold text-slate-900 text-xs sm:text-sm">
                  Fehlermechanismus: Nondisjunction in Meiose I vs. Meiose II
                </h4>
                <div className="flex items-center gap-1 bg-white p-1 rounded-lg border border-slate-200 text-xs">
                  <button
                    onClick={() => setNondisjunctionStage('meiose1')}
                    className={`px-3 py-1 rounded transition-colors font-medium ${
                      nondisjunctionStage === 'meiose1' ? 'bg-teal-700 text-white' : 'text-slate-600'
                    }`}
                  >
                    Fehler in Meiose I
                  </button>
                  <button
                    onClick={() => setNondisjunctionStage('meiose2')}
                    className={`px-3 py-1 rounded transition-colors font-medium ${
                      nondisjunctionStage === 'meiose2' ? 'bg-teal-700 text-white' : 'text-slate-600'
                    }`}
                  >
                    Fehler in Meiose II
                  </button>
                </div>
              </div>

              {nondisjunctionStage === 'meiose1' ? (
                <div className="p-4 bg-white rounded-lg border border-slate-200 text-xs space-y-2">
                  <div className="font-semibold text-rose-800">
                    Nondisjunction in Meiose I (Homologe Chromosomen trennen sich nicht):
                  </div>
                  <p className="text-slate-600">
                    Beide homologen Chromosomen wandern gemeinsam zu einem Zellpol. Folge: <strong>100 % aller entstehenden Keimzellen sind aneuploid!</strong>
                  </p>
                  <div className="grid grid-cols-4 gap-2 text-center font-mono font-bold mt-2">
                    <div className="p-2 bg-rose-100 text-rose-900 rounded border border-rose-300">n + 1 (25%)</div>
                    <div className="p-2 bg-rose-100 text-rose-900 rounded border border-rose-300">n + 1 (25%)</div>
                    <div className="p-2 bg-rose-100 text-rose-900 rounded border border-rose-300">n - 1 (25%)</div>
                    <div className="p-2 bg-rose-100 text-rose-900 rounded border border-rose-300">n - 1 (25%)</div>
                  </div>
                </div>
              ) : (
                <div className="p-4 bg-white rounded-lg border border-slate-200 text-xs space-y-2">
                  <div className="font-semibold text-amber-800">
                    Nondisjunction in Meiose II (Schwesterchromatiden trennen sich nicht):
                  </div>
                  <p className="text-slate-600">
                    Meiose I verlief normal. In einer Tochterzelle trennen sich die Chromatiden nicht. Folge: <strong>50 % der Keimzellen sind aneuploid, 50 % normal!</strong>
                  </p>
                  <div className="grid grid-cols-4 gap-2 text-center font-mono font-bold mt-2">
                    <div className="p-2 bg-rose-100 text-rose-900 rounded border border-rose-300">n + 1 (25%)</div>
                    <div className="p-2 bg-rose-100 text-rose-900 rounded border border-rose-300">n - 1 (25%)</div>
                    <div className="p-2 bg-emerald-100 text-emerald-900 rounded border border-emerald-300">n (normal, 25%)</div>
                    <div className="p-2 bg-emerald-100 text-emerald-900 rounded border border-emerald-300">n (normal, 25%)</div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
