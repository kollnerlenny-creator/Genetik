import React, { useState } from 'react';
import { Sparkles, SlidersHorizontal, ArrowRight, Info, Check } from 'lucide-react';

export const MendelSection: React.FC = () => {
  // Preset selection for the interactive calculator
  const [selectedPreset, setSelectedPreset] = useState<'f2_dihybrid' | 'testcross_dihybrid' | 'monohybrid' | 'lethal_x'>('f2_dihybrid');
  const [rule1Mode, setRule1Mode] = useState<'dominant' | 'intermediaer' | 'kodominant'>('dominant');
  const [activeDihybridFilter, setActiveDihybridFilter] = useState<'all' | '9' | '3_green' | '3_yellow' | '1'>('all');

  // Gametes calculation for presets
  // Preset 1: Dihybrid F1 Selbstung (RrGg x RrGg)
  const gametesDihybrid = ['RG', 'Rg', 'rG', 'rg'];

  // Preset 2: Testkreuzung (RrGg x rrgg)
  const gametesTestP1 = ['RG', 'Rg', 'rG', 'rg'];
  const gametesTestP2 = ['rg'];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="border-b border-slate-200 pb-4">
        <h2 className="text-2xl font-bold tracking-tight text-slate-900">
          Mendelsche Regeln &amp; Interaktives Kreuzungs-Labor
        </h2>
        <div className="flex items-center gap-2 text-xs text-slate-500 mt-1">
          <span>1. Uniformität</span>
          <span aria-hidden="true">&middot;</span>
          <span>2. Spaltung (3:1 / 1:2:1)</span>
          <span aria-hidden="true">&middot;</span>
          <span>3. Unabhängigkeit (9:3:3:1)</span>
          <span aria-hidden="true">&middot;</span>
          <span>Rückkreuzung (1:1:1:1)</span>
        </div>
      </div>

      {/* SECTION 1: DIE 3 MENDEL-REGELN IM DETAIL */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* 1. Regel Card */}
        <div className="bg-white rounded-xl border border-slate-200 p-5 space-y-4 shadow-xs flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono font-semibold text-teal-700">Regel 01</span>
              <span className="text-xs text-slate-500">P &rarr; F1</span>
            </div>
            <h3 className="text-lg font-bold text-slate-900 mt-1">Uniformitätsregel</h3>
            <p className="text-xs text-slate-600 mt-2 leading-relaxed">
              Kreuzt man zwei <strong>reinerbige (homozygote)</strong> Eltern, die sich in einem Merkmal unterscheiden, so sind alle Nachkommen der F1-Generation bezüglich dieses Merkmals <strong>phänotypisch und genotypisch gleich (uniform)</strong>.
            </p>

            {/* Mode Selector for Rule 1 */}
            <div className="mt-4 p-1 bg-slate-100 rounded-lg flex items-center justify-between text-xs font-medium">
              <button
                onClick={() => setRule1Mode('dominant')}
                className={`flex-1 py-1 rounded text-center transition-colors ${
                  rule1Mode === 'dominant' ? 'bg-white text-slate-900 font-semibold shadow-xs' : 'text-slate-600'
                }`}
              >
                Dominant
              </button>
              <button
                onClick={() => setRule1Mode('intermediaer')}
                className={`flex-1 py-1 rounded text-center transition-colors ${
                  rule1Mode === 'intermediaer' ? 'bg-white text-slate-900 font-semibold shadow-xs' : 'text-slate-600'
                }`}
              >
                Intermediär
              </button>
              <button
                onClick={() => setRule1Mode('kodominant')}
                className={`flex-1 py-1 rounded text-center transition-colors ${
                  rule1Mode === 'kodominant' ? 'bg-white text-slate-900 font-semibold shadow-xs' : 'text-slate-600'
                }`}
              >
                Kodominant
              </button>
            </div>

            {/* Visual Scheme */}
            <div className="mt-4 p-3 bg-slate-50 rounded-lg border border-slate-100 text-xs space-y-2">
              {rule1Mode === 'dominant' && (
                <>
                  <div className="flex items-center justify-between font-mono">
                    <span className="p-1.5 bg-rose-100 text-rose-800 rounded font-semibold">P: Rot (AA)</span>
                    <span className="text-slate-400">&times;</span>
                    <span className="p-1.5 bg-slate-200 text-slate-800 rounded font-semibold">P: Weiß (aa)</span>
                  </div>
                  <div className="text-center text-slate-400 font-mono text-[11px]">&darr; Gameten A und a</div>
                  <div className="p-2 bg-rose-100 border border-rose-300 text-rose-900 rounded font-semibold text-center">
                    F1: 100 % Rot (Aa) &mdash; Uniform!
                  </div>
                </>
              )}
              {rule1Mode === 'intermediaer' && (
                <>
                  <div className="flex items-center justify-between font-mono">
                    <span className="p-1.5 bg-rose-100 text-rose-800 rounded font-semibold">P: Rot (RR)</span>
                    <span className="text-slate-400">&times;</span>
                    <span className="p-1.5 bg-slate-200 text-slate-800 rounded font-semibold">P: Weiß (WW)</span>
                  </div>
                  <div className="text-center text-slate-400 font-mono text-[11px]">&darr; Gameten R und W</div>
                  <div className="p-2 bg-pink-100 border border-pink-300 text-pink-900 rounded font-semibold text-center">
                    F1: 100 % Rosa (RW) &mdash; Mischform!
                  </div>
                </>
              )}
              {rule1Mode === 'kodominant' && (
                <>
                  <div className="flex items-center justify-between font-mono">
                    <span className="p-1.5 bg-blue-100 text-blue-800 rounded font-semibold">Blutgruppe A (I^A I^A)</span>
                    <span className="text-slate-400">&times;</span>
                    <span className="p-1.5 bg-amber-100 text-amber-800 rounded font-semibold">Blutgruppe B (I^B I^B)</span>
                  </div>
                  <div className="text-center text-slate-400 font-mono text-[11px]">&darr; Gameten I^A und I^B</div>
                  <div className="p-2 bg-purple-100 border border-purple-300 text-purple-900 rounded font-semibold text-center">
                    F1: 100 % Blutgruppe AB (I^A I^B)
                  </div>
                </>
              )}
            </div>
          </div>
          <div className="text-[11px] text-slate-500 pt-2 border-t border-slate-100">
            <strong>Reziprozitätsregel:</strong> Es macht keinen Unterschied, welches Geschlecht Träger welcher Eigenschaft war.
          </div>
        </div>

        {/* 2. Regel Card */}
        <div className="bg-white rounded-xl border border-slate-200 p-5 space-y-4 shadow-xs flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono font-semibold text-teal-700">Regel 02</span>
              <span className="text-xs text-slate-500">F1 &times; F1 &rarr; F2</span>
            </div>
            <h3 className="text-lg font-bold text-slate-900 mt-1">Spaltungsregel</h3>
            <p className="text-xs text-slate-600 mt-2 leading-relaxed">
              Kreuzt man die Individuen der F1-Generation untereinander, spalten sich die Nachkommen der F2-Generation in einem <strong>festen mathematischen Zahlenverhältnis</strong> auf.
            </p>

            {/* Punnett Square 2x2 */}
            <div className="mt-4 bg-slate-50 p-3 rounded-lg border border-slate-100">
              <table className="w-full text-center text-xs font-mono">
                <thead>
                  <tr>
                    <th className="p-1 text-slate-400">Gameten</th>
                    <th className="p-1 text-teal-700 bg-teal-50 rounded">A (50%)</th>
                    <th className="p-1 text-slate-600 bg-slate-100 rounded">a (50%)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th className="p-1 text-teal-700 bg-teal-50 rounded">A</th>
                    <td className="p-1.5 bg-rose-100 text-rose-900 border border-white rounded font-bold">
                      AA (25%)
                    </td>
                    <td className="p-1.5 bg-rose-100 text-rose-900 border border-white rounded font-bold">
                      Aa (25%)
                    </td>
                  </tr>
                  <tr>
                    <th className="p-1 text-slate-600 bg-slate-100 rounded">a</th>
                    <td className="p-1.5 bg-rose-100 text-rose-900 border border-white rounded font-bold">
                      Aa (25%)
                    </td>
                    <td className="p-1.5 bg-slate-200 text-slate-900 border border-white rounded font-bold">
                      aa (25%)
                    </td>
                  </tr>
                </tbody>
              </table>

              <div className="grid grid-cols-2 gap-2 mt-3 text-xs">
                <div className="bg-white p-2 rounded border border-slate-200 text-center">
                  <span className="text-[10px] text-slate-500 block">Genotyp-Verhältnis</span>
                  <span className="font-mono font-bold text-slate-900">1 : 2 : 1</span>
                  <span className="text-[10px] text-slate-500 block mt-0.5">1 AA : 2 Aa : 1 aa</span>
                </div>
                <div className="bg-white p-2 rounded border border-slate-200 text-center">
                  <span className="text-[10px] text-slate-500 block">Phänotyp (dominant)</span>
                  <span className="font-mono font-bold text-teal-800">3 : 1</span>
                  <span className="text-[10px] text-slate-500 block mt-0.5">75% rot : 25% weiß</span>
                </div>
              </div>
            </div>
          </div>
          <div className="text-[11px] text-slate-500 pt-2 border-t border-slate-100">
            <strong>Bei intermediärem Erbgang:</strong> Phänotyp spaltet exakt wie Genotyp im Verhältnis <strong>1 : 2 : 1</strong> auf (1 rot : 2 rosa : 1 weiß).
          </div>
        </div>

        {/* 3. Regel Card */}
        <div className="bg-white rounded-xl border border-slate-200 p-5 space-y-4 shadow-xs flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono font-semibold text-teal-700">Regel 03</span>
              <span className="text-xs text-slate-500">Dihybrid (2 Gene)</span>
            </div>
            <h3 className="text-lg font-bold text-slate-900 mt-1">Unabhängigkeitsregel</h3>
            <p className="text-xs text-slate-600 mt-2 leading-relaxed">
              Zwei oder mehr Merkmale werden unabhängig voneinander vererbt und frei neu kombiniert, sofern die beteiligten Gene auf <strong>unterschiedlichen Chromosomen</strong> liegen.
            </p>

            {/* Dihybrid Summary */}
            <div className="mt-4 p-3 bg-slate-50 rounded-lg border border-slate-100 space-y-2 text-xs">
              <div className="flex justify-between items-center text-slate-700">
                <span>P: RRGG (glatt-gelb)</span>
                <span>&times;</span>
                <span>rrgg (runzlig-grün)</span>
              </div>
              <div className="text-center font-mono font-semibold text-teal-800 bg-white p-1.5 rounded border border-slate-200">
                F1: 100 % RrGg (glatt-gelb)
              </div>
              <div className="pt-2 text-[11px] text-slate-600">
                <strong>F2-Phänotypverhältnis (16 Felder):</strong>
                <div className="text-center font-mono font-bold text-sm text-teal-900 my-1">
                  9 : 3 : 3 : 1
                </div>
                <div className="space-y-0.5 text-[11px]">
                  <div className="flex justify-between"><span>9/16 glatt &amp; gelb (R_G_)</span><span className="font-mono text-slate-500">56,25%</span></div>
                  <div className="flex justify-between"><span>3/16 glatt &amp; grün (R_gg)</span><span className="font-mono text-slate-500">18,75%</span></div>
                  <div className="flex justify-between"><span>3/16 runzlig &amp; gelb (rrG_)</span><span className="font-mono text-slate-500">18,75%</span></div>
                  <div className="flex justify-between"><span>1/16 runzlig &amp; grün (rrgg)</span><span className="font-mono text-slate-500">6,25%</span></div>
                </div>
              </div>
            </div>
          </div>
          <div className="text-[11px] text-slate-500 pt-2 border-t border-slate-100">
            <strong>Einschränkung:</strong> Gilt NICHT bei Genkopplung (Gene auf demselben Chromosom, außer bei Crossing-over).
          </div>
        </div>

      </div>

      {/* SECTION 2: INTERAKTIVER KREUZUNGS-RECHNER & SIMULATOR */}
      <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-xs space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-200 pb-4">
          <div>
            <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-teal-600" />
              <span>Interaktiver Punnett-Square Simulator</span>
            </h3>
            <p className="text-xs text-slate-500 mt-1">
              Wähle ein Szenario, um die Keimzellen, Kombinationen und Spaltungsverhältnisse interaktiv zu analysieren.
            </p>
          </div>

          {/* Scenario Selector */}
          <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-lg overflow-x-auto no-scrollbar">
            <button
              onClick={() => { setSelectedPreset('f2_dihybrid'); setActiveDihybridFilter('all'); }}
              className={`px-3 py-1.5 text-xs font-semibold rounded-md whitespace-nowrap transition-colors ${
                selectedPreset === 'f2_dihybrid' ? 'bg-white text-teal-900 shadow-xs' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              F2 Dihybrid (9:3:3:1)
            </button>
            <button
              onClick={() => setSelectedPreset('testcross_dihybrid')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-md whitespace-nowrap transition-colors ${
                selectedPreset === 'testcross_dihybrid' ? 'bg-white text-teal-900 shadow-xs' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Testkreuzung (1:1:1:1)
            </button>
            <button
              onClick={() => setSelectedPreset('lethal_x')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-md whitespace-nowrap transition-colors ${
                selectedPreset === 'lethal_x' ? 'bg-white text-teal-900 shadow-xs' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Letalfaktor X (2:1)
            </button>
            <button
              onClick={() => setSelectedPreset('monohybrid')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-md whitespace-nowrap transition-colors ${
                selectedPreset === 'monohybrid' ? 'bg-white text-teal-900 shadow-xs' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Monohybrid (3:1)
            </button>
          </div>
        </div>

        {/* PRESET 1: F2 DIHYBRID (16 CELLS) */}
        {selectedPreset === 'f2_dihybrid' && (
          <div className="space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-3 bg-slate-50 p-3 rounded-lg border border-slate-200">
              <div className="text-xs text-slate-700">
                <strong>Kreuzung:</strong> RrGg (glatt, gelb) &times; RrGg (glatt, gelb) &bull; <span className="font-mono">4 Gameten pro Elternteil: RG, Rg, rG, rg</span>
              </div>
              <div className="flex items-center gap-1 text-xs">
                <span className="text-slate-500 mr-1">Hervorheben:</span>
                <button
                  onClick={() => setActiveDihybridFilter('all')}
                  className={`px-2 py-0.5 rounded text-[11px] font-medium ${activeDihybridFilter === 'all' ? 'bg-teal-700 text-white' : 'bg-white text-slate-700 border border-slate-200'}`}
                >
                  Alle (16)
                </button>
                <button
                  onClick={() => setActiveDihybridFilter('9')}
                  className={`px-2 py-0.5 rounded text-[11px] font-medium ${activeDihybridFilter === '9' ? 'bg-amber-500 text-white' : 'bg-white text-slate-700 border border-slate-200'}`}
                >
                  9 glatt-gelb
                </button>
                <button
                  onClick={() => setActiveDihybridFilter('3_green')}
                  className={`px-2 py-0.5 rounded text-[11px] font-medium ${activeDihybridFilter === '3_green' ? 'bg-emerald-600 text-white' : 'bg-white text-slate-700 border border-slate-200'}`}
                >
                  3 glatt-grün
                </button>
                <button
                  onClick={() => setActiveDihybridFilter('3_yellow')}
                  className={`px-2 py-0.5 rounded text-[11px] font-medium ${activeDihybridFilter === '3_yellow' ? 'bg-orange-500 text-white' : 'bg-white text-slate-700 border border-slate-200'}`}
                >
                  3 runzlig-gelb
                </button>
                <button
                  onClick={() => setActiveDihybridFilter('1')}
                  className={`px-2 py-0.5 rounded text-[11px] font-medium ${activeDihybridFilter === '1' ? 'bg-slate-700 text-white' : 'bg-white text-slate-700 border border-slate-200'}`}
                >
                  1 runzlig-grün
                </button>
              </div>
            </div>

            {/* 4x4 Grid */}
            <div className="overflow-x-auto">
              <table className="w-full text-center border-collapse text-xs font-mono max-w-2xl mx-auto">
                <thead>
                  <tr>
                    <th className="p-2 border border-slate-200 bg-slate-100 text-slate-400">&female; \ &male;</th>
                    {gametesDihybrid.map((g) => (
                      <th key={g} className="p-2 border border-slate-200 bg-teal-50 text-teal-800 font-bold">
                        {g}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {gametesDihybrid.map((rowG) => (
                    <tr key={rowG}>
                      <th className="p-2 border border-slate-200 bg-teal-50 text-teal-800 font-bold">
                        {rowG}
                      </th>
                      {gametesDihybrid.map((colG) => {
                        // Merge alleles: rowG + colG
                        const hasR = rowG.includes('R') || colG.includes('R');
                        const hasG = rowG.includes('G') || colG.includes('G');
                        
                        // Phenotype determination
                        let category: '9' | '3_green' | '3_yellow' | '1' = '1';
                        let label = 'runzlig, grün';
                        let bgClass = 'bg-slate-200 text-slate-800';

                        if (hasR && hasG) {
                          category = '9';
                          label = 'glatt, gelb';
                          bgClass = 'bg-amber-100 text-amber-900 border-amber-300';
                        } else if (hasR && !hasG) {
                          category = '3_green';
                          label = 'glatt, grün';
                          bgClass = 'bg-emerald-100 text-emerald-900 border-emerald-300';
                        } else if (!hasR && hasG) {
                          category = '3_yellow';
                          label = 'runzlig, gelb';
                          bgClass = 'bg-orange-100 text-orange-900 border-orange-300';
                        }

                        const isHighlighted = activeDihybridFilter === 'all' || activeDihybridFilter === category;
                        const opacityClass = isHighlighted ? 'opacity-100 scale-100' : 'opacity-25 scale-95';

                        // Calculate combined genotype string (e.g. RrGg)
                        const rCount = (rowG + colG).split('').filter(c => c.toLowerCase() === 'r');
                        const gCount = (rowG + colG).split('').filter(c => c.toLowerCase() === 'g');
                        const sortedR = rCount.sort().join('');
                        const sortedG = gCount.sort().join('');
                        const genotypeStr = sortedR + sortedG;

                        return (
                          <td
                            key={rowG + colG}
                            className={`p-2.5 border border-slate-200 transition-all ${bgClass} ${opacityClass}`}
                          >
                            <span className="font-bold block text-sm">{genotypeStr}</span>
                            <span className="text-[10px] opacity-80 block truncate">{label}</span>
                          </td>
                        );
                      })}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Ratio Summary */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
              <div className="p-3 bg-amber-50 border border-amber-200 rounded-lg text-center">
                <span className="font-bold text-amber-900 text-base font-mono block">9 / 16 (56,25%)</span>
                <span className="text-amber-800 text-xs">Glatt &amp; Gelb (R_G_)</span>
              </div>
              <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-lg text-center">
                <span className="font-bold text-emerald-900 text-base font-mono block">3 / 16 (18,75%)</span>
                <span className="text-emerald-800 text-xs">Glatt &amp; Grün (R_gg)</span>
              </div>
              <div className="p-3 bg-orange-50 border border-orange-200 rounded-lg text-center">
                <span className="font-bold text-orange-900 text-base font-mono block">3 / 16 (18,75%)</span>
                <span className="text-orange-800 text-xs">Runzlig &amp; Gelb (rrG_)</span>
              </div>
              <div className="p-3 bg-slate-100 border border-slate-300 rounded-lg text-center">
                <span className="font-bold text-slate-900 text-base font-mono block">1 / 16 (6,25%)</span>
                <span className="text-slate-700 text-xs">Runzlig &amp; Grün (rrgg)</span>
              </div>
            </div>
          </div>
        )}

        {/* PRESET 2: TESTKREUZUNG DIHYBRID (1:1:1:1) */}
        {selectedPreset === 'testcross_dihybrid' && (
          <div className="space-y-4">
            <div className="bg-teal-50 border border-teal-200 p-4 rounded-lg text-xs text-teal-900 space-y-1">
              <p className="font-semibold text-sm">Die Dihybride Testkreuzung / Rückkreuzung</p>
              <p>
                Ein unbekannter Genotyp mit beiden dominanten Merkmalen (glatt, gelb = R?G?) wird mit dem <strong>doppelt reinerbig-rezessiven Partner (rrgg)</strong> gekreuzt.
              </p>
              <p className="font-mono text-teal-800 pt-1">
                Ergebnis: Spaltung im Verhältnis 1 : 1 : 1 : 1 (je 25%) beweist zwingend den Genotyp <strong>RrGg</strong>!
              </p>
            </div>

            <div className="overflow-x-auto max-w-xl mx-auto">
              <table className="w-full text-center border-collapse text-xs font-mono">
                <thead>
                  <tr className="bg-slate-100">
                    <th className="p-2 border border-slate-200 text-slate-500">Unbekannt (RrGg) &darr; \ rrgg &rarr;</th>
                    <th className="p-2 border border-slate-200 bg-slate-200 text-slate-800">rg (100 %)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  <tr>
                    <td className="p-2 border border-slate-200 bg-teal-50 font-bold text-teal-900">RG (25 %)</td>
                    <td className="p-3 border border-slate-200 bg-amber-100 text-amber-900 font-bold">
                      RrGg &mdash; 25 % glatt &amp; gelb
                    </td>
                  </tr>
                  <tr>
                    <td className="p-2 border border-slate-200 bg-teal-50 font-bold text-teal-900">Rg (25 %)</td>
                    <td className="p-3 border border-slate-200 bg-emerald-100 text-emerald-900 font-bold">
                      Rrgg &mdash; 25 % glatt &amp; grün
                    </td>
                  </tr>
                  <tr>
                    <td className="p-2 border border-slate-200 bg-teal-50 font-bold text-teal-900">rG (25 %)</td>
                    <td className="p-3 border border-slate-200 bg-orange-100 text-orange-900 font-bold">
                      rrGg &mdash; 25 % runzlig &amp; gelb
                    </td>
                  </tr>
                  <tr>
                    <td className="p-2 border border-slate-200 bg-teal-50 font-bold text-teal-900">rg (25 %)</td>
                    <td className="p-3 border border-slate-200 bg-slate-100 text-slate-900 font-bold">
                      rrgg &mdash; 25 % runzlig &amp; grün
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-600">
              <strong>Klausur-Verknüpfung zu Seite 7:</strong> 703 : 699 : 709 : 697 Erbsen entspricht ca. 1 : 1 : 1 : 1. Das doppelt rezessive Elternteil liefert nur ein "rg"-Allel. Das Phänotypenverhältnis spiegelt daher 1:1 die Gametenhäufigkeit des ersten Elternteils wider.
            </div>
          </div>
        )}

        {/* PRESET 3: LETALFAKTOR X-CHROMOSOMAL (2:1) */}
        {selectedPreset === 'lethal_x' && (
          <div className="space-y-4">
            <div className="bg-rose-50 border border-rose-200 p-4 rounded-lg text-xs text-rose-950 space-y-1">
              <p className="font-semibold text-sm">Station A1: Rezessiver Letalfaktor auf dem X-Chromosom</p>
              <p>
                Das Allel <span className="font-mono font-bold">X_a</span> führt bei männlichen Embryonen (X_a Y, hemizygot) oder homozygoten Weibchen (X_a X_a) zum vorzeitigen Fruchttod vor der Geburt.
              </p>
            </div>

            <div className="overflow-x-auto max-w-lg mx-auto">
              <table className="w-full text-center border-collapse text-xs font-mono">
                <thead>
                  <tr className="bg-slate-100">
                    <th className="p-2 border border-slate-200">Mutter (X_A X_a) \ Vater (X_A Y)</th>
                    <th className="p-2 border border-slate-200 bg-teal-50 text-teal-800">X_A (50%)</th>
                    <th className="p-2 border border-slate-200 bg-slate-200 text-slate-800">Y (50%)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-2 border border-slate-200 bg-teal-50 font-bold text-teal-800">X_A (50%)</td>
                    <td className="p-3 border border-slate-200 bg-emerald-50 text-emerald-900">
                      <span className="font-bold text-sm block">X_A X_A</span>
                      <span className="text-[11px] text-emerald-700">Mädchen, gesund (Lebt)</span>
                    </td>
                    <td className="p-3 border border-slate-200 bg-emerald-50 text-emerald-900">
                      <span className="font-bold text-sm block">X_A Y</span>
                      <span className="text-[11px] text-emerald-700">Junge, gesund (Lebt)</span>
                    </td>
                  </tr>
                  <tr>
                    <td className="p-2 border border-slate-200 bg-rose-50 font-bold text-rose-800">X_a (50%)</td>
                    <td className="p-3 border border-slate-200 bg-emerald-50 text-emerald-900">
                      <span className="font-bold text-sm block">X_A X_a</span>
                      <span className="text-[11px] text-emerald-700">Mädchen, Trägerin (Lebt)</span>
                    </td>
                    <td className="p-3 border border-slate-200 bg-rose-200 text-rose-950">
                      <span className="font-bold text-sm block line-through">X_a Y</span>
                      <span className="text-[11px] font-bold text-rose-800">Stirbt pränatal!</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3 bg-white border border-slate-200 rounded-lg">
                <span className="font-bold text-slate-900 block mb-1">Überlebende Nachkommen:</span>
                <p className="text-slate-600">
                  Es werden lebend nur <strong>2 Mädchen</strong> (X_A X_A und X_A X_a) und <strong>1 Junge</strong> (X_A Y) geboren.
                </p>
                <div className="font-mono font-bold text-teal-800 mt-2 text-sm">
                  Geschlechterverhältnis: 2 weiblich : 1 männlich (66,7 % : 33,3 %)
                </div>
              </div>
              <div className="p-3 bg-white border border-slate-200 rounded-lg">
                <span className="font-bold text-slate-900 block mb-1">Klausur-Erkenntnis:</span>
                <p className="text-slate-600">
                  Alle überlebenden männlichen Nachkommen tragen zwingend das gesunde Allel X_A. Bei Abweichung vom normalen 1:1 Geschlechterverhältnis immer an Letalfaktoren denken!
                </p>
              </div>
            </div>
          </div>
        )}

        {/* PRESET 4: MONOHYBRID (3:1) */}
        {selectedPreset === 'monohybrid' && (
          <div className="space-y-4">
            <div className="bg-slate-50 p-3 rounded-lg border border-slate-200 text-xs text-slate-700">
              <strong>Kreuzung:</strong> Aa &times; Aa (beide heterozygot mischerbig für ein Merkmal)
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 text-xs space-y-2">
                <h4 className="font-bold text-slate-900 text-sm">Genotypen-Verteilung:</h4>
                <div className="flex justify-between py-1 border-b border-slate-200 font-mono">
                  <span>1/4 AA (homozygot dominant)</span>
                  <span className="font-bold text-slate-800">25 %</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-200 font-mono">
                  <span>2/4 Aa (heterozygot mischerbig)</span>
                  <span className="font-bold text-teal-700">50 %</span>
                </div>
                <div className="flex justify-between py-1 font-mono">
                  <span>1/4 aa (homozygot rezessiv)</span>
                  <span className="font-bold text-slate-800">25 %</span>
                </div>
                <div className="text-center font-bold text-slate-900 pt-2 font-mono">
                  Genotypisches Verhältnis: 1 : 2 : 1
                </div>
              </div>

              <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 text-xs space-y-2">
                <h4 className="font-bold text-slate-900 text-sm">Phänotypen-Verteilung (vollständige Dominanz):</h4>
                <div className="flex justify-between py-1 border-b border-slate-200 font-mono">
                  <span>Dominanter Phänotyp (AA + Aa)</span>
                  <span className="font-bold text-teal-800">75 % (3/4)</span>
                </div>
                <div className="flex justify-between py-1 font-mono">
                  <span>Rezessiver Phänotyp (aa)</span>
                  <span className="font-bold text-slate-800">25 % (1/4)</span>
                </div>
                <div className="text-center font-bold text-teal-900 pt-2 font-mono">
                  Phänotypisches Verhältnis: 3 : 1
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
