import React, { useState, useMemo } from 'react';
import { Search, RotateCw, CheckCircle2, BookOpen, Layers, Sparkles } from 'lucide-react';
import { GLOSSARY_TERMS, GlossaryTerm } from '../data/glossaryData';

export const GlossarySection: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('Alle');
  const [viewMode, setViewMode] = useState<'table' | 'flashcards'>('table');
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [isCardFlipped, setIsCardFlipped] = useState(false);
  const [masteredIds, setMasteredIds] = useState<Set<string>>(new Set());

  const categories = ['Alle', 'Grundlagen', 'Zellgenetik', 'Vererbung', 'Genexpression'];

  const filteredTerms = useMemo(() => {
    return GLOSSARY_TERMS.filter((term) => {
      const matchesCategory = selectedCategory === 'Alle' || term.category === selectedCategory;
      const query = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !query ||
        term.term.toLowerCase().includes(query) ||
        term.definition.toLowerCase().includes(query) ||
        (term.example && term.example.toLowerCase().includes(query)) ||
        (term.examTip && term.examTip.toLowerCase().includes(query));
      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, selectedCategory]);

  const activeCard: GlossaryTerm | undefined = filteredTerms[currentCardIndex];

  const handleNextCard = () => {
    setIsCardFlipped(false);
    setCurrentCardIndex((prev) => (prev + 1) % Math.max(1, filteredTerms.length));
  };

  const handlePrevCard = () => {
    setIsCardFlipped(false);
    setCurrentCardIndex((prev) => (prev - 1 + filteredTerms.length) % Math.max(1, filteredTerms.length));
  };

  const toggleMastered = (id: string) => {
    setMasteredIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  return (
    <div className="space-y-6">
      {/* Section Header */}
      <div className="border-b border-slate-200 pb-4">
        <h2 className="text-2xl font-bold tracking-tight text-slate-900">
          Fachbegriffe &amp; genetisches Glossar
        </h2>
        <div className="flex items-center gap-2 text-xs text-slate-500 mt-1">
          <span>25 Klausur-Definitionen</span>
          <span aria-hidden="true">&middot;</span>
          <span>Präzise Fachsprache</span>
          <span aria-hidden="true">&middot;</span>
          <span>Interaktiver Karteikarten-Modus</span>
        </div>
      </div>

      {/* Control Deck: Search, Categories & View Toggle */}
      <div className="bg-white rounded-xl border border-slate-200 p-4 space-y-3 shadow-xs">
        <div className="flex flex-col sm:flex-row items-center gap-3">
          <div className="relative w-full sm:flex-1">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setCurrentCardIndex(0);
              }}
              placeholder="Begriff suchen (z. B. Allel, heterozygot, Konduktorin, Phänotyp)..."
              className="w-full pl-9 pr-4 py-2 text-sm bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600 focus:bg-white transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600"
              >
                Löschen
              </button>
            )}
          </div>

          {/* View Mode Switcher */}
          <div className="flex items-center p-1 bg-slate-100 rounded-lg border border-slate-200 w-full sm:w-auto justify-center">
            <button
              onClick={() => setViewMode('table')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-all flex items-center gap-1.5 ${
                viewMode === 'table'
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>Übersichtstabelle</span>
            </button>
            <button
              onClick={() => {
                setViewMode('flashcards');
                setIsCardFlipped(false);
                setCurrentCardIndex(0);
              }}
              className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-all flex items-center gap-1.5 ${
                viewMode === 'flashcards'
                  ? 'bg-white text-teal-800 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>Karteikarten</span>
            </button>
          </div>
        </div>

        {/* Filter Categories */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 pt-1 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setSelectedCategory(cat);
                setCurrentCardIndex(0);
              }}
              className={`px-3 py-1 text-xs font-medium rounded-md whitespace-nowrap transition-colors ${
                selectedCategory === cat
                  ? 'bg-teal-700 text-white shadow-xs'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
          <span className="text-xs text-slate-400 ml-auto pl-2 font-mono tabular-nums whitespace-nowrap">
            {filteredTerms.length} Begriffe
          </span>
        </div>
      </div>

      {/* VIEW 1: TABLE VIEW */}
      {viewMode === 'table' && (
        <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-xs">
          {filteredTerms.length === 0 ? (
            <div className="p-12 text-center text-slate-500">
              <p className="text-sm">Kein Fachbegriff gefunden für "{searchQuery}".</p>
              <button
                onClick={() => { setSearchQuery(''); setSelectedCategory('Alle'); }}
                className="mt-2 text-xs text-teal-700 font-semibold hover:underline"
              >
                Filter zurücksetzen
              </button>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-sm">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200 text-slate-700 font-semibold text-xs">
                    <th className="py-3 px-4 w-44">Fachbegriff</th>
                    <th className="py-3 px-4 w-28">Kategorie</th>
                    <th className="py-3 px-4">Klausur-Definition</th>
                    <th className="py-3 px-4 w-60">Beispiel &amp; Prüfungsfalle</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {filteredTerms.map((term) => {
                    const isMastered = masteredIds.has(term.id);
                    return (
                      <tr key={term.id} className="hover:bg-slate-50/80 transition-colors">
                        <td className="py-3 px-4 font-semibold text-slate-900 align-top">
                          <div className="flex items-center gap-1.5">
                            <button
                              onClick={() => toggleMastered(term.id)}
                              title={isMastered ? 'Als noch zu wiederholen markieren' : 'Als gelernt markieren'}
                              className="text-slate-300 hover:text-emerald-600 transition-colors"
                            >
                              <CheckCircle2 className={`w-4 h-4 ${isMastered ? 'text-emerald-600 fill-emerald-50' : ''}`} />
                            </button>
                            <span className={isMastered ? 'line-through text-slate-400' : ''}>
                              {term.term}
                            </span>
                          </div>
                        </td>
                        <td className="py-3 px-4 align-top text-xs text-slate-500 font-medium">
                          {term.category}
                        </td>
                        <td className="py-3 px-4 text-slate-700 align-top leading-relaxed text-sm">
                          {term.definition}
                        </td>
                        <td className="py-3 px-4 align-top text-xs space-y-1.5">
                          {term.example && (
                            <div className="text-slate-600">
                              <span className="font-semibold text-slate-800">Bsp.:</span> {term.example}
                            </div>
                          )}
                          {term.examTip && (
                            <div className="text-teal-800 bg-teal-50/70 rounded p-1.5 border border-teal-100">
                              <span className="font-semibold text-teal-900">Tipp:</span> {term.examTip}
                            </div>
                          )}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          )}
        </div>
      )}

      {/* VIEW 2: FLASHCARD VIEW */}
      {viewMode === 'flashcards' && (
        <div className="max-w-2xl mx-auto space-y-4">
          {filteredTerms.length === 0 ? (
            <div className="p-12 text-center text-slate-500 bg-white rounded-xl border border-slate-200">
              <p className="text-sm">Keine Karteikarten für diese Filterauswahl vorhanden.</p>
            </div>
          ) : (
            <>
              {/* Card Meta & Progress */}
              <div className="flex items-center justify-between text-xs text-slate-500 px-1">
                <span>
                  Karte <span className="font-mono font-bold text-slate-800">{currentCardIndex + 1}</span> von{' '}
                  <span className="font-mono">{filteredTerms.length}</span>
                </span>
                <div className="flex items-center gap-2">
                  <span>
                    Gelernt: <strong className="text-emerald-700 font-mono">{masteredIds.size}</strong>/{GLOSSARY_TERMS.length}
                  </span>
                </div>
              </div>

              {/* The Interactive Flashcard */}
              <div
                onClick={() => setIsCardFlipped(!isCardFlipped)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => { if (e.key === ' ' || e.key === 'Enter') setIsCardFlipped(!isCardFlipped); }}
                className="bg-white rounded-2xl border-2 border-slate-200 p-8 min-h-[300px] flex flex-col justify-between cursor-pointer hover:border-teal-500 hover:shadow-md transition-all select-none relative group"
              >
                <div className="flex items-center justify-between text-xs text-slate-400">
                  <span className="text-slate-500 font-medium">
                    {activeCard?.category}
                  </span>
                  <span className="flex items-center gap-1 text-teal-700 font-semibold text-xs">
                    <RotateCw className="w-3 h-3 group-hover:rotate-180 transition-transform duration-300" />
                    <span>{isCardFlipped ? 'Zurückdrehen' : 'Klicken zum Aufdecken'}</span>
                  </span>
                </div>

                <div className="my-auto text-center py-4">
                  {!isCardFlipped ? (
                    <div>
                      <h3 className="text-3xl font-bold text-slate-900 tracking-tight">
                        {activeCard?.term}
                      </h3>
                      <p className="text-xs text-slate-400 mt-4">
                        Drücke Leertaste oder klicke, um die Definition anzuzeigen
                      </p>
                    </div>
                  ) : (
                    <div className="space-y-4 text-left">
                      <h4 className="text-lg font-bold text-teal-800 border-b border-teal-100 pb-1">
                        {activeCard?.term}
                      </h4>
                      <p className="text-slate-800 text-sm leading-relaxed">
                        {activeCard?.definition}
                      </p>
                      {activeCard?.example && (
                        <p className="text-xs text-slate-600 bg-slate-50 p-2.5 rounded-lg border border-slate-200">
                          <strong className="text-slate-900">Beispiel:</strong> {activeCard.example}
                        </p>
                      )}
                      {activeCard?.examTip && (
                        <p className="text-xs text-teal-900 bg-teal-50 p-2.5 rounded-lg border border-teal-200">
                          <strong className="text-teal-950">Klausur-Tipp:</strong> {activeCard.examTip}
                        </p>
                      )}
                    </div>
                  )}
                </div>

                <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
                  <span>Tastatur: Leertaste = Drehen</span>
                  {activeCard && (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleMastered(activeCard.id);
                      }}
                      className={`flex items-center gap-1 font-semibold px-2 py-1 rounded transition-colors ${
                        masteredIds.has(activeCard.id)
                          ? 'bg-emerald-50 text-emerald-700'
                          : 'text-slate-500 hover:text-emerald-700'
                      }`}
                    >
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>{masteredIds.has(activeCard.id) ? 'Als gelernt markiert' : 'Ich weiß das'}</span>
                    </button>
                  )}
                </div>
              </div>

              {/* Navigation Controls */}
              <div className="flex items-center justify-between gap-3">
                <button
                  onClick={handlePrevCard}
                  className="px-4 py-2 bg-white border border-slate-200 rounded-lg text-xs font-semibold text-slate-700 hover:bg-slate-50 transition-colors"
                >
                  &larr; Vorherige Karte
                </button>
                <button
                  onClick={() => setIsCardFlipped(!isCardFlipped)}
                  className="px-4 py-2 bg-slate-100 hover:bg-slate-200 rounded-lg text-xs font-semibold text-slate-700 transition-colors"
                >
                  Antwort {isCardFlipped ? 'verstecken' : 'zeigen'}
                </button>
                <button
                  onClick={handleNextCard}
                  className="px-4 py-2 bg-teal-700 hover:bg-teal-800 text-white rounded-lg text-xs font-semibold transition-colors"
                >
                  Nächste Karte &rarr;
                </button>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
};
