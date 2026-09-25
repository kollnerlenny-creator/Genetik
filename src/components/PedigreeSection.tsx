import React, { useState } from 'react';
import { GitBranch, HelpCircle, CheckCircle, AlertCircle, Info, Sparkles } from 'lucide-react';

interface PedigreePerson {
  id: string;
  generation: string;
  number: number;
  gender: 'male' | 'female';
  affected: boolean;
  carrier?: boolean;
  genotype: string;
  reasoning: string;
  isProofPerson?: boolean;
}

export const PedigreeSection: React.FC = () => {
  const [selectedPedigree, setSelectedPedigree] = useState<'ar' | 'ad' | 'xr' | 'xd'>('ar');
  const [selectedPerson, setSelectedPerson] = useState<PedigreePerson | null>(null);
  const [highlightProof, setHighlightProof] = useState<boolean>(true);

  // Pedigrees data
  const pedigrees = {
    ar: {
      title: 'Autosomal-rezessiver Erbgang (z. B. Albinismus)',
      proofSummary: 'Beweis: Zwei phänotypisch gesunde Eltern (I-1 und I-2) haben ein merkmalstragendes Kind (II-2). Das beweist unumstößlich, dass das Allel rezessiv ist und beide Eltern heterozygot (Aa) sein müssen.',
      rules: [
        'Männer und Frauen sind gleichermaßen betroffen (autosomal)',
        'Generationensprünge sind typisch: Merkmal tritt überraschend auf',
        'Zwei gesunde Eltern haben ein krankes Kind -> BEWEIS für Rezessivität (Aa x Aa -> aa)',
        'Zwei kranke Eltern (aa x aa) können NUR kranke Kinder bekommen'
      ],
      persons: [
        { id: 'I-1', generation: 'I', number: 1, gender: 'male', affected: false, genotype: 'Aa', reasoning: 'Phänotypisch gesund, aber Vater eines kranken Kindes (aa). Muss daher Träger des rezessiven Allels a sein.', isProofPerson: true },
        { id: 'I-2', generation: 'I', number: 2, gender: 'female', affected: false, genotype: 'Aa', reasoning: 'Phänotypisch gesund, aber Mutter eines kranken Kindes (aa). Muss daher Trägerin des rezessiven Allels a sein.', isProofPerson: true },
        { id: 'II-1', generation: 'II', number: 1, gender: 'male', affected: false, genotype: 'A_ (AA oder Aa)', reasoning: 'Phänotypisch gesund. Da Eltern Aa x Aa sind, besteht eine 2/3-Wahrscheinlichkeit für Aa und 1/3 für AA.' },
        { id: 'II-2', generation: 'II', number: 2, gender: 'female', affected: true, genotype: 'aa', reasoning: 'Phänotypisch krank bei rezessivem Erbgang -> Genotyp muss zwingend homozygot rezessiv (aa) sein.', isProofPerson: true },
        { id: 'II-3', generation: 'II', number: 3, gender: 'female', affected: false, genotype: 'A_ (AA oder Aa)', reasoning: 'Phänotypisch gesundes Kind gesunder Überträgereltern.' },
        { id: 'II-4', generation: 'II', number: 4, gender: 'male', affected: false, genotype: 'Aa', reasoning: 'Heiratet die betroffene Frau II-2. Zusammen haben sie ein gesundes Kind III-1.' },
        { id: 'III-1', generation: 'III', number: 1, gender: 'female', affected: false, genotype: 'Aa', reasoning: 'Erhält von der erkrankten Mutter II-2 (aa) zwingend das rezessive Allel a, ist aber gesund.' }
      ] as PedigreePerson[]
    },
    ad: {
      title: 'Autosomal-dominanter Erbgang (z. B. Chorea Huntington)',
      proofSummary: 'Beweis: Zwei phänotypisch kranke Eltern (I-1 und I-2) haben ein vollkommen gesundes Kind (II-2). Das beweist zwingend, dass das Allel dominant ist (beide Eltern sind heterozygot Aa; Kind hat aa geerbt).',
      rules: [
        'Männer und Frauen gleichermaßen betroffen',
        'Das Merkmal tritt in jeder Generation lückenlos auf (kein Überspringen)',
        'Zwei betroffene Eltern haben ein gesundes Kind -> BEWEIS für Dominanz (Aa x Aa -> aa)',
        'Jedes betroffene Kind hat mindestens einen betroffenen Elternteil'
      ],
      persons: [
        { id: 'I-1', generation: 'I', number: 1, gender: 'male', affected: true, genotype: 'Aa', reasoning: 'Phänotypisch krank, zeugt mit kranker Frau I-2 ein gesundes Kind (aa) -> muss heterozygot Aa sein!', isProofPerson: true },
        { id: 'I-2', generation: 'I', number: 2, gender: 'female', affected: true, genotype: 'Aa', reasoning: 'Phänotypisch krank, hat ein gesundes Kind (aa) -> muss heterozygot Aa sein!', isProofPerson: true },
        { id: 'II-1', generation: 'II', number: 1, gender: 'female', affected: true, genotype: 'A_ (AA oder Aa)', reasoning: 'Phänotypisch krank; hat mindestens ein dominantes Allel A von den Eltern erhalten.' },
        { id: 'II-2', generation: 'II', number: 2, gender: 'male', affected: false, genotype: 'aa', reasoning: 'Phänotypisch gesund! Bei Dominanz kann gesund nur der reinerbig rezessive Genotyp aa sein.', isProofPerson: true },
        { id: 'II-3', generation: 'II', number: 3, gender: 'male', affected: true, genotype: 'Aa', reasoning: 'Kranker Sohn, der mit gesunder Partnerin II-4 Kinder zeugt.' },
        { id: 'II-4', generation: 'II', number: 4, gender: 'female', affected: false, genotype: 'aa', reasoning: 'Gesunde Partnerin hat zwingend den Genotyp aa.' },
        { id: 'III-1', generation: 'III', number: 1, gender: 'female', affected: true, genotype: 'Aa', reasoning: 'Krankes Kind erhält Allel A vom Vater II-3 und Allel a von der Mutter II-4.' }
      ] as PedigreePerson[]
    },
    xr: {
      title: 'X-chromosomal-rezessiver Erbgang (z. B. Hämophilie A)',
      proofSummary: 'Typisches Muster: Deutlicher Männerüberschuss! Erkrankte Männer (X^a Y) haben phänotypisch gesunde Eltern, da die Mutter gesunde Konduktorin (X^A X^a) ist.',
      rules: [
        'Fast ausschließlich Männer betroffen (da Männer nur ein X-Chromosom besitzen = hemizygot X^a Y)',
        'Frauen erkranken nur, wenn der Vater krank (X^a Y) und die Mutter mindestens Trägerin (X^A X^a) ist',
        'Väter vererben ihr X-Chromosom NIEMALS an Söhne (nur an Töchter!)',
        'Eine kranke Mutter (X^a X^a) muss ZWINGEND alle Söhne krank zur Welt bringen (Ausschlussregel!)'
      ],
      persons: [
        { id: 'I-1', generation: 'I', number: 1, gender: 'male', affected: false, genotype: 'X^A Y', reasoning: 'Gesunder Vater hat normales Allel X^A auf seinem einzigen X-Chromosom.' },
        { id: 'I-2', generation: 'I', number: 2, gender: 'female', affected: false, carrier: true, genotype: 'X^A X^a', reasoning: 'Phänotypisch gesunde Mutter, aber Konduktorin (Überträgerin), da sie einen kranken Sohn II-2 hat.', isProofPerson: true },
        { id: 'II-1', generation: 'II', number: 1, gender: 'female', affected: false, genotype: 'X^A X^-', reasoning: 'Gesunde Tochter; kann X^A X^A oder X^A X^a (50% Chance) sein.' },
        { id: 'II-2', generation: 'II', number: 2, gender: 'male', affected: true, genotype: 'X^a Y', reasoning: 'Kranker Sohn (Bluter). Erhielt das defekte X^a von der Mutter und das Y vom Vater.', isProofPerson: true },
        { id: 'II-3', generation: 'II', number: 3, gender: 'male', affected: false, genotype: 'X^A Y', reasoning: 'Gesunder Sohn erhielt das gesunde X^A von der Mutter.' },
        { id: 'II-4', generation: 'II', number: 4, gender: 'female', affected: false, genotype: 'X^A X^A', reasoning: 'Gesunde Partnerin des Bluters II-2.' },
        { id: 'III-1', generation: 'III', number: 1, gender: 'female', affected: false, carrier: true, genotype: 'X^A X^a', reasoning: 'Zwingend Konduktorin! Der kranke Vater II-2 vererbt sein X^a an ausnahmslos alle Töchter.' }
      ] as PedigreePerson[]
    },
    xd: {
      title: 'X-chromosomal-dominanter Erbgang (Selten)',
      proofSummary: 'Beweisregel: Ein betroffener Vater (X^A Y) zeugt mit einer gesunden Mutter (X^a X^a) AUSNAHMSLOS kranke Töchter (X^A X^a), aber AUSNAHMSLOS gesunde Söhne (X^a Y)!',
      rules: [
        'Frauen sind statistisch häufiger betroffen als Männer',
        'Kein Generationensprung',
        'Kranker Vater vererbt an 100% aller Töchter, aber 0% aller Söhne',
        'Heterozygote kranke Mutter vererbt zu 50% an Kinder beiderlei Geschlechts'
      ],
      persons: [
        { id: 'I-1', generation: 'I', number: 1, gender: 'male', affected: true, genotype: 'X^A Y', reasoning: 'Kranker Vater mit dominantem Allel X^A.', isProofPerson: true },
        { id: 'I-2', generation: 'I', number: 2, gender: 'female', affected: false, genotype: 'X^a X^a', reasoning: 'Gesunde Mutter muss homozygot rezessiv X^a X^a sein.', isProofPerson: true },
        { id: 'II-1', generation: 'II', number: 1, gender: 'female', affected: true, genotype: 'X^A X^a', reasoning: 'Kranke Tochter! Erhält zwingend das dominante X^A vom Vater.', isProofPerson: true },
        { id: 'II-2', generation: 'II', number: 2, gender: 'female', affected: true, genotype: 'X^A X^a', reasoning: 'Kranke Tochter! Erhält ebenfalls das dominante X^A vom Vater.', isProofPerson: true },
        { id: 'II-3', generation: 'II', number: 3, gender: 'male', affected: false, genotype: 'X^a Y', reasoning: 'Gesunder Sohn! Erhält vom Vater nur das Y-Chromosom und von der Mutter das gesunde X^a.', isProofPerson: true },
        { id: 'II-4', generation: 'II', number: 4, gender: 'male', affected: false, genotype: 'X^a Y', reasoning: 'Gesunder Partner von II-1.' },
        { id: 'III-1', generation: 'III', number: 1, gender: 'male', affected: true, genotype: 'X^A Y', reasoning: 'Kranker Sohn von II-1, der das mutierte X^A von der Mutter geerbt hat.' }
      ] as PedigreePerson[]
    }
  };

  const currentPedigree = pedigrees[selectedPedigree];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="border-b border-slate-200 pb-4">
        <h2 className="text-2xl font-bold tracking-tight text-slate-900">
          Stammbaumanalyse &amp; Genotyp-Detektiv
        </h2>
        <div className="flex items-center gap-2 text-xs text-slate-500 mt-1">
          <span>Der 2-Fragen-Entscheidungsweg</span>
          <span aria-hidden="true">&middot;</span>
          <span>Interaktive Stammbäume</span>
          <span aria-hidden="true">&middot;</span>
          <span>Beweis-Konstellationen</span>
          <span aria-hidden="true">&middot;</span>
          <span>Ausschlusskriterien</span>
        </div>
      </div>

      {/* DECISION TREE CALLOUT */}
      <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-xs space-y-4">
        <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
          <HelpCircle className="w-5 h-5 text-teal-600" />
          <span>Der 2-Schritte-Entscheidungsbaum für jede Klausur</span>
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
          <div className="p-3.5 bg-slate-50 rounded-lg border border-slate-200 space-y-2">
            <span className="font-bold text-teal-900 text-sm block">1. Schritt: Autosomal oder Gonosomal?</span>
            <p className="text-slate-700">
              <strong>Prüffrage:</strong> Sind Männer und Frauen ungefähr im Verhältnis 50:50 betroffen?
            </p>
            <ul className="space-y-1 text-slate-600 pl-3 list-disc">
              <li><strong>Ja &rarr; Autosomal:</strong> Das Gen liegt auf einem der Chromosomen 1–22.</li>
              <li><strong>Nein &rarr; Gonosomal (X-chromosomal):</strong> Deutlicher Männerüberschuss (rezessiv) oder Vater vererbt an 100% aller Töchter, aber 0% aller Söhne (dominant).</li>
            </ul>
          </div>

          <div className="p-3.5 bg-slate-50 rounded-lg border border-slate-200 space-y-2">
            <span className="font-bold text-teal-900 text-sm block">2. Schritt: Dominant oder Rezessiv?</span>
            <p className="text-slate-700">
              <strong>Prüffrage:</strong> Gibt es Generationensprünge oder Eltern-Kind-Beweise?
            </p>
            <ul className="space-y-1 text-slate-600 pl-3 list-disc">
              <li><strong>Zwei gesunde Eltern haben krankes Kind &rarr; ZWINGEND REZESSIV!</strong> (Eltern sind heimliche Überträger Aa).</li>
              <li><strong>Zwei kranke Eltern haben gesundes Kind &rarr; ZWINGEND DOMINANT!</strong> (Eltern sind heterozygot Aa; Kind hat aa erhalten).</li>
              <li>Lückenloses Auftreten in jeder Generation &rarr; spricht stark für <strong>dominant</strong>.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* PEDIGREE INTERACTIVE VIEWER */}
      <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-xs space-y-6">
        
        {/* Controls */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-200 pb-4">
          <div>
            <h3 className="text-lg font-bold text-slate-900">
              {currentPedigree.title}
            </h3>
            <p className="text-xs text-slate-500 mt-1">
              Klicke auf eine Person im Stammbaum, um Genotyp &amp; Begründung zu sehen:
            </p>
          </div>

          <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar">
            <button
              onClick={() => { setSelectedPedigree('ar'); setSelectedPerson(null); }}
              className={`px-3 py-1.5 text-xs font-semibold rounded-md whitespace-nowrap transition-colors ${
                selectedPedigree === 'ar' ? 'bg-teal-700 text-white shadow-xs' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              Autosomal-rezessiv
            </button>
            <button
              onClick={() => { setSelectedPedigree('ad'); setSelectedPerson(null); }}
              className={`px-3 py-1.5 text-xs font-semibold rounded-md whitespace-nowrap transition-colors ${
                selectedPedigree === 'ad' ? 'bg-teal-700 text-white shadow-xs' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              Autosomal-dominant
            </button>
            <button
              onClick={() => { setSelectedPedigree('xr'); setSelectedPerson(null); }}
              className={`px-3 py-1.5 text-xs font-semibold rounded-md whitespace-nowrap transition-colors ${
                selectedPedigree === 'xr' ? 'bg-teal-700 text-white shadow-xs' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              X-rezessiv (Hämophilie)
            </button>
            <button
              onClick={() => { setSelectedPedigree('xd'); setSelectedPerson(null); }}
              className={`px-3 py-1.5 text-xs font-semibold rounded-md whitespace-nowrap transition-colors ${
                selectedPedigree === 'xd' ? 'bg-teal-700 text-white shadow-xs' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              X-dominant
            </button>
          </div>
        </div>

        {/* Proof Banner */}
        <div className="p-3.5 bg-teal-50 border border-teal-200 rounded-lg text-xs text-teal-950 flex items-start gap-2.5">
          <Sparkles className="w-4 h-4 text-teal-700 shrink-0 mt-0.5" />
          <div className="flex-1">
            <strong>Beweis-Regel für diesen Erbgang:</strong> {currentPedigree.proofSummary}
          </div>
          <button
            onClick={() => setHighlightProof(!highlightProof)}
            className={`px-2 py-1 text-[11px] font-semibold rounded border transition-colors whitespace-nowrap ${
              highlightProof ? 'bg-teal-700 text-white border-teal-800' : 'bg-white text-teal-800 border-teal-300'
            }`}
          >
            {highlightProof ? 'Beweis markiert' : 'Beweis markieren'}
          </button>
        </div>

        {/* Interactive SVG Pedigree Tree */}
        <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 overflow-x-auto flex justify-center">
          <svg width="560" height="260" viewBox="0 0 560 260" className="select-none">
            
            {/* Tree Lines */}
            {/* Gen I marriage line */}
            <line x1="160" y1="45" x2="280" y2="45" stroke="#475569" strokeWidth="2" />
            <line x1="220" y1="45" x2="220" y2="90" stroke="#475569" strokeWidth="2" />
            {/* Gen II sibling line */}
            <line x1="80" y1="90" x2="360" y2="90" stroke="#475569" strokeWidth="2" />
            <line x1="80" y1="90" x2="80" y2="120" stroke="#475569" strokeWidth="2" />
            <line x1="173" y1="90" x2="173" y2="120" stroke="#475569" strokeWidth="2" />
            <line x1="266" y1="90" x2="266" y2="120" stroke="#475569" strokeWidth="2" />
            <line x1="360" y1="90" x2="360" y2="120" stroke="#475569" strokeWidth="2" />

            {/* Gen II marriage line for II-2 and II-4 (or II-1 and II-4) */}
            <line x1="173" y1="135" x2="450" y2="135" stroke="#94a3b8" strokeWidth="1.5" strokeDasharray="3 3" />
            <line x1="311" y1="135" x2="311" y2="180" stroke="#475569" strokeWidth="2" />
            <line x1="311" y1="180" x2="311" y2="200" stroke="#475569" strokeWidth="2" />

            {/* Generation Labels */}
            <text x="20" y="50" fontSize="14" fontWeight="bold" fill="#94a3b8" fontFamily="monospace">I</text>
            <text x="20" y="140" fontSize="14" fontWeight="bold" fill="#94a3b8" fontFamily="monospace">II</text>
            <text x="20" y="220" fontSize="14" fontWeight="bold" fill="#94a3b8" fontFamily="monospace">III</text>

            {/* Render Persons */}
            {currentPedigree.persons.map((p) => {
              // Coordinate calculation
              let cx = 0;
              let cy = 0;
              if (p.id === 'I-1') { cx = 160; cy = 45; }
              if (p.id === 'I-2') { cx = 280; cy = 45; }
              if (p.id === 'II-1') { cx = 80; cy = 135; }
              if (p.id === 'II-2') { cx = 173; cy = 135; }
              if (p.id === 'II-3') { cx = 266; cy = 135; }
              if (p.id === 'II-4') { cx = 450; cy = 135; }
              if (p.id === 'III-1') { cx = 311; cy = 215; }

              const isSelected = selectedPerson?.id === p.id;
              const isProof = highlightProof && p.isProofPerson;

              return (
                <g
                  key={p.id}
                  onClick={() => setSelectedPerson(p)}
                  className="cursor-pointer transition-transform hover:scale-110"
                >
                  {/* Proof highlight ring */}
                  {isProof && (
                    <circle
                      cx={cx}
                      cy={cy}
                      r={p.gender === 'male' ? 24 : 22}
                      fill="none"
                      stroke="#0d9488"
                      strokeWidth="3"
                      strokeDasharray="4 2"
                      className="animate-spin-slow"
                    />
                  )}

                  {/* Selected ring */}
                  {isSelected && (
                    <circle
                      cx={cx}
                      cy={cy}
                      r={p.gender === 'male' ? 26 : 24}
                      fill="none"
                      stroke="#1e3a8a"
                      strokeWidth="3"
                    />
                  )}

                  {/* Square for male, Circle for female */}
                  {p.gender === 'male' ? (
                    <rect
                      x={cx - 15}
                      y={cy - 15}
                      width={30}
                      height={30}
                      fill={p.affected ? '#dc2626' : '#ffffff'}
                      stroke={p.affected ? '#991b1b' : '#334155'}
                      strokeWidth={2.5}
                      rx={3}
                    />
                  ) : (
                    <g>
                      <circle
                        cx={cx}
                        cy={cy}
                        r={16}
                        fill={p.affected ? '#dc2626' : '#ffffff'}
                        stroke={p.affected ? '#991b1b' : '#334155'}
                        strokeWidth={2.5}
                      />
                      {/* Carrier dot if female carrier */}
                      {p.carrier && (
                        <circle cx={cx} cy={cy} r={5} fill="#dc2626" />
                      )}
                    </g>
                  )}

                  {/* ID label */}
                  <text
                    x={cx}
                    y={cy - 22}
                    textAnchor="middle"
                    fontSize="11"
                    fontWeight="bold"
                    fill="#475569"
                    fontFamily="monospace"
                  >
                    {p.id}
                  </text>

                  {/* Genotype text below */}
                  <text
                    x={cx}
                    y={cy + 30}
                    textAnchor="middle"
                    fontSize="10"
                    fontWeight="bold"
                    fill={p.affected ? '#b91c1c' : '#0f172a'}
                    fontFamily="monospace"
                  >
                    {p.genotype}
                  </text>
                </g>
              );
            })}
          </svg>
        </div>

        {/* Selected Person Details Deck */}
        {selectedPerson ? (
          <div className="p-4 bg-slate-900 text-white rounded-xl space-y-2 text-xs">
            <div className="flex items-center justify-between border-b border-slate-700 pb-2">
              <div className="flex items-center gap-2">
                <span className="font-mono font-bold text-sm text-teal-400">
                  Person {selectedPerson.id}
                </span>
                <span className="text-slate-400">
                  ({selectedPerson.gender === 'male' ? 'Männlich' : 'Weiblich'}, {selectedPerson.affected ? 'Merkmalsträger / Krank' : 'Phänotypisch gesund'})
                </span>
              </div>
              <span className="font-mono font-bold text-amber-300 text-sm bg-slate-800 px-2 py-0.5 rounded border border-slate-700">
                Genotyp: {selectedPerson.genotype}
              </span>
            </div>
            <p className="text-slate-200 leading-relaxed pt-1">
              <strong>Klausur-Begründung:</strong> {selectedPerson.reasoning}
            </p>
          </div>
        ) : (
          <div className="p-4 bg-slate-100 rounded-lg text-xs text-slate-500 text-center">
            Tipp: Klicke auf ein Familienmitglied im Stammbaum oben, um die schrittweise Genotyp-Ermittlung einzublenden.
          </div>
        )}

        {/* Key rules for this pedigree */}
        <div className="space-y-2">
          <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider">
            Merkmale &amp; Klausur-Ausschlussregeln für {currentPedigree.title}:
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
            {currentPedigree.rules.map((rule, idx) => (
              <div key={idx} className="flex items-start gap-2 p-2 bg-slate-50 rounded border border-slate-100">
                <CheckCircle className="w-3.5 h-3.5 text-teal-600 shrink-0 mt-0.5" />
                <span className="text-slate-700">{rule}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};
