import React, { useState } from 'react';
import { HeartPulse, ChevronDown, ChevronUp, AlertCircle, FileText, Sparkles, BookOpen } from 'lucide-react';
import { DISEASES_DATA, DiseaseProfile } from '../data/diseasesData';

export const DiseasesSection: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>('Alle');
  const [expandedId, setExpandedId] = useState<string>('huntington');

  const filters = [
    'Alle',
    'Autosomal-dominant',
    'Autosomal-rezessiv',
    'X-chromosomal-rezessiv',
    'Chromosomenmutation'
  ];

  const filteredDiseases = DISEASES_DATA.filter((d) => {
    if (selectedFilter === 'Alle') return true;
    return d.inheritance === selectedFilter;
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="border-b border-slate-200 pb-4">
        <h2 className="text-2xl font-bold tracking-tight text-slate-900">
          Stationsarbeit: Erbkrankheiten &amp; Syndrome
        </h2>
        <div className="flex items-center gap-2 text-xs text-slate-500 mt-1">
          <span>Stationen 1 bis 6</span>
          <span aria-hidden="true">&middot;</span>
          <span>Genorte &amp; Chromosomen</span>
          <span aria-hidden="true">&middot;</span>
          <span>Molekulare Ursachen</span>
          <span aria-hidden="true">&middot;</span>
          <span>Symptome &amp; Klausur-Schlüsselbegriffe</span>
        </div>
      </div>

      {/* Filter Bar */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-1 no-scrollbar">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setSelectedFilter(f)}
            className={`px-3 py-1.5 text-xs font-semibold rounded-lg whitespace-nowrap transition-colors ${
              selectedFilter === f
                ? 'bg-teal-700 text-white shadow-xs'
                : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50'
            }`}
          >
            {f}
          </button>
        ))}
        <span className="text-xs text-slate-400 ml-auto pl-2 font-mono whitespace-nowrap">
          {filteredDiseases.length} Krankheits-Dossiers
        </span>
      </div>

      {/* Diseases List */}
      <div className="space-y-4">
        {filteredDiseases.map((d) => {
          const isExpanded = expandedId === d.id;
          return (
            <div
              key={d.id}
              className={`bg-white rounded-xl border transition-all ${
                isExpanded ? 'border-teal-600 shadow-sm ring-1 ring-teal-600/20' : 'border-slate-200 hover:border-slate-300'
              }`}
            >
              {/* Card Header Accordion Trigger */}
              <button
                onClick={() => setExpandedId(isExpanded ? '' : d.id)}
                className="w-full text-left p-5 flex items-center justify-between gap-4 cursor-pointer select-none"
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-xs text-slate-500">
                    <span className="font-semibold text-teal-800">Station {d.stationNumber}</span>
                    <span aria-hidden="true">&middot;</span>
                    <span className="font-mono text-slate-600">{d.chromosome}</span>
                    <span aria-hidden="true">&middot;</span>
                    <span className="text-slate-600">{d.prevalence}</span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                    <span>{d.name}</span>
                    <span className="text-xs text-slate-500 font-normal">({d.germanAlias})</span>
                  </h3>
                </div>

                <div className="flex items-center gap-3 shrink-0">
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-slate-100 text-slate-800 border border-slate-200">
                    {d.inheritance}
                  </span>
                  {isExpanded ? (
                    <ChevronUp className="w-5 h-5 text-slate-400" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-slate-400" />
                  )}
                </div>
              </button>

              {/* Card Body */}
              {isExpanded && (
                <div className="p-5 pt-0 border-t border-slate-100 space-y-4 text-xs">
                  {/* Molecular Cause */}
                  <div className="mt-4 p-3.5 bg-slate-50 rounded-lg border border-slate-200 space-y-1">
                    <h4 className="font-bold text-slate-900 text-sm">Molekulare &amp; Genetische Ursache:</h4>
                    <p className="text-slate-700 leading-relaxed">{d.molecularCause}</p>
                  </div>

                  {/* Symptoms & Key Concepts Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Symptoms */}
                    <div className="p-3.5 bg-slate-50 rounded-lg border border-slate-200 space-y-2">
                      <h4 className="font-bold text-slate-900 text-sm">Symptome &amp; Phänotyp:</h4>
                      <ul className="space-y-1 text-slate-700 pl-3 list-disc">
                        {d.symptoms.map((s, idx) => (
                          <li key={idx}>{s}</li>
                        ))}
                      </ul>
                    </div>

                    {/* Key Concepts */}
                    <div className="p-3.5 bg-teal-50/50 rounded-lg border border-teal-200 space-y-2">
                      <h4 className="font-bold text-teal-950 text-sm">Klausurrelevante Schlüsselbegriffe:</h4>
                      <div className="space-y-2">
                        {d.keyExamConcepts.map((k, idx) => (
                          <div key={idx} className="bg-white p-2.5 rounded border border-teal-100">
                            <span className="font-bold text-teal-900 block">{k.term}:</span>
                            <span className="text-slate-700">{k.explanation}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Pedigree Clue & Fact */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs pt-1">
                    <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg text-blue-950">
                      <strong>Stammbaum-Hinweis:</strong> {d.pedigreeClue}
                    </div>
                    <div className="p-3 bg-amber-50 border border-amber-200 rounded-lg text-amber-950">
                      <strong>Klinischer / Historischer Kontext:</strong> {d.historicalOrClinicalFact}
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
