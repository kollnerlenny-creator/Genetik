export interface GlossaryTerm {
  id: string;
  term: string;
  definition: string;
  category: 'Grundlagen' | 'Zellgenetik' | 'Vererbung' | 'Genexpression';
  example?: string;
  examTip?: string;
}

export const GLOSSARY_TERMS: GlossaryTerm[] = [
  {
    id: 'gen',
    term: 'Gen',
    category: 'Grundlagen',
    definition: 'Ein spezifischer Abschnitt der DNA (bei einigen Viren RNA), der die Erbinformation zur Synthese eines bestimmten Proteins oder eines funktionellen RNA-Moleküls codiert; grundlegende funktionelle Einheit der Vererbung.',
    example: 'Gen für Blutgerinnungsfaktor VIII auf dem X-Chromosom.',
    examTip: 'Wichtig: Ein Gen codiert meist für ein Polypeptid (Ein-Gen-ein-Polypeptid-Hypothese).'
  },
  {
    id: 'genom',
    term: 'Genom',
    category: 'Grundlagen',
    definition: 'Die Gesamtheit aller Erbinformationen einer Zelle oder eines Organismus. Umfasst beim Menschen das Kerngenom (DNA auf den 46 Chromosomen im Zellkern) sowie das mitochondriale Genom (mtDNA).',
    example: 'Das menschliche Genom umfasst ca. 20.000 bis 25.000 proteincodierende Gene.',
    examTip: 'Nicht verwechseln: Chromosomensatz ist die zytologische Zählung, Genom der gesamte Informationsgehalt.'
  },
  {
    id: 'chromosom',
    term: 'Chromosom',
    category: 'Zellgenetik',
    definition: 'Transport- und Organisationseinheit des Erbguts im Zellkern von Eukaryoten. Besteht aus einem langen, dicht um Histone aufgewickelten DNA-Doppelstrang (Chromatin). Der Mensch besitzt 46 Chromosomen (23 Paare: 22 Autosomenpaare, 1 Gonosomenpaar).',
    example: 'Chromosom 4 (Huntington), Chromosom 5 (Cri-du-chat), X/Y-Chromosomen.',
    examTip: 'Vor der Zellteilung besteht ein Chromosom aus 2 identischen Chromatiden (2-Chromatid-Chromosom).'
  },
  {
    id: 'allel',
    term: 'Allel',
    category: 'Grundlagen',
    definition: 'Eine von mehreren möglichen Zustandsformen bzw. Sequenzvarianten eines Gens, die an einem bestimmten Genort (Locus) auf homologen Chromosomen liegen.',
    example: 'Allel für rote Blütenfarbe (R) vs. Allel für weiße Blütenfarbe (w).',
    examTip: 'Diploiden Organismen stehen immer maximal 2 Allele eines Gens in einer Zelle zur Verfügung (je 1 pro Elternteil).'
  },
  {
    id: 'genotyp',
    term: 'Genotyp',
    category: 'Vererbung',
    definition: 'Die Gesamtheit aller in den Genen festgelegten Erbanlagen eines Organismus; bezogen auf ein Einzelmerkmal die konkrete Allelkombination (z. B. AA, Aa oder aa).',
    example: 'Genotyp: Aa (heterozygot).',
    examTip: 'Der Genotyp ist die innere genetische Ausstattung, nicht direkt mit bloßem Auge sichtbar.'
  },
  {
    id: 'phaenotyp',
    term: 'Phänotyp',
    category: 'Vererbung',
    definition: 'Das äußere Erscheinungsbild eines Lebewesens; umfasst alle tatsächlich sichtbaren, messbaren und physiologischen Merkmale, die aus dem Zusammenspiel von Genotyp und Umwelt resultieren.',
    example: 'Phänotyp: violette Blüten, Blutgruppe AB, helle Haut.',
    examTip: 'Gleicher Phänotyp kann unterschiedliche Genotypen haben (z. B. AA und Aa sehen bei Dominanz identisch aus!).'
  },
  {
    id: 'homozygot',
    term: 'homozygot (reinerbig)',
    category: 'Vererbung',
    definition: 'Reinerbig; auf beiden homologen Chromosomen liegt für ein bestimmtes Merkmal dasselbe Allel vor (z. B. AA oder aa).',
    example: 'Parentalgeneration bei Mendel ist immer reinerbig (z. B. AA x aa).',
    examTip: 'Homozygot rezessive Individuen (aa) sind der Schlüssel für Test- bzw. Rückkreuzungen.'
  },
  {
    id: 'heterozygot',
    term: 'heterozygot (mischerbig)',
    category: 'Vererbung',
    definition: 'Mischerbig; die beiden Allele eines Gens auf den homologen Chromosomen unterscheiden sich voneinander (z. B. Aa).',
    example: 'F1-Generation nach Kreuzung von AA und aa ist zu 100% Aa.',
    examTip: 'Heterozygote Individuen bilden bei der Meiose zu gleichen Teilen zwei verschiedene Gametentypen.'
  },
  {
    id: 'dominant',
    term: 'dominant',
    category: 'Vererbung',
    definition: 'Ein Allel, das sich phänotypisch gegenüber einem anderen (rezessiven) Allel durchsetzt und dieses überdeckt (symbolisiert mit Großbuchstaben, z. B. A).',
    example: 'Braune Augenfarbe dominiert über blaue Augenfarbe; Chorea Huntington dominiert.',
    examTip: 'Tritt bei Vorhandensein im Genotyp IMMER phänotypisch in Erscheinung (sowohl bei AA als auch Aa).'
  },
  {
    id: 'rezessiv',
    term: 'rezessiv',
    category: 'Vererbung',
    definition: 'Ein Allel, das im heterozygoten Zustand vom dominanten Partnerallel überdeckt wird und sich phänotypisch nur dann ausprägt, wenn es homozygot vorliegt (symbolisiert mit Kleinbuchstaben, z. B. a).',
    example: 'Albinismus, Hämophilie A, Mukoviszidose.',
    examTip: 'Phänotypisch kranke Individuen bei rezessivem Erbgang haben zwingend den Genotyp aa.'
  },
  {
    id: 'kodominant',
    term: 'kodominant',
    category: 'Vererbung',
    definition: 'Beide unterschiedlichen Allele eines Gens werden im Phänotyp eines Heterozygoten vollkommen gleichwertig nebeneinander ausgeprägt, ohne eine Mischform zu bilden.',
    example: 'AB0-Blutgruppensystem: Allel A und Allel B führen bei Genotyp AB zur Ausprägung beider Antigene.',
    examTip: 'Unterschied zu intermediär: Es entsteht KEINE Zwischenfarbe, sondern beide Eigenschaften sind gleichzeitig voll da.'
  },
  {
    id: 'intermediaer',
    term: 'intermediär',
    category: 'Vererbung',
    definition: 'Keines der beiden Allele dominiert vollständig; im Phänotyp des Heterozygoten entsteht eine unvollständige Dominanz bzw. eine einheitliche Mischform.',
    example: 'Wunderblume (Mirabilis jalapa): Rote Blüte (RR) x Weiße Blüte (WW) ergibt in F1 100% Rosa (RW).',
    examTip: 'In der F2 spalten Genotyp und Phänotyp im IDENTISCHEN Verhältnis 1 : 2 : 1 auf!'
  },
  {
    id: 'p-generation',
    term: 'P-Generation (Parentalgeneration)',
    category: 'Vererbung',
    definition: 'Elterngeneration bei genetischen Kreuzungen. Bei Mendelschen Kreuzungsversuchen sind die Eltern für das untersuchte Merkmal stets reinerbig (homozygot).',
    example: 'P: AA x aa oder RRGG x rrgg.',
    examTip: 'Bildet bei Reinerbigkeit jeweils nur einen einzigen Gametentyp.'
  },
  {
    id: 'f1-generation',
    term: 'F1-Generation (1. Filialgeneration)',
    category: 'Vererbung',
    definition: 'Erste Tochtergeneration; die direkten Nachkommen der Parentalgeneration.',
    example: 'Kreuzung AA x aa liefert F1 = 100% Aa.',
    examTip: 'Ist nach der 1. Mendelschen Regel (Uniformitätsregel) untereinander uniform.'
  },
  {
    id: 'f2-generation',
    term: 'F2-Generation (2. Filialgeneration)',
    category: 'Vererbung',
    definition: 'Zweite Tochtergeneration; Nachkommen aus der Kreuzung bzw. Selbstbestäubung der F1-Generation untereinander.',
    example: 'F1 x F1 (Aa x Aa) liefert in F2 das Verhältnis 3 : 1 (Phänotyp) bzw. 1 : 2 : 1 (Genotyp).',
    examTip: 'Hier spalten sich die Merkmale nach der 2. Mendelschen Regel auf.'
  },
  {
    id: 'uniform',
    term: 'uniform',
    category: 'Vererbung',
    definition: 'Phänotypisch und genotypisch vollkommen einheitlich bzw. identisch untereinander.',
    example: 'Alle Individuen der F1-Generation sind uniform, egal welches Geschlecht Träger welcher Eigenschaft war (Reziprozität).',
    examTip: 'Gilt nur, wenn die Parentalgeneration reinerbig war!'
  },
  {
    id: 'monohybrid',
    term: 'monohybrid',
    category: 'Vererbung',
    definition: 'Ein Erbgang oder eine Kreuzung, bei der nur ein einziges Merkmal betrachtet wird (z. B. nur die Blütenfarbe).',
    example: 'Kreuzung von Erbsen mit glatter vs. runzliger Samenoberfläche.',
    examTip: 'Einfaches 2x2 Punnett-Quadrat in der F2-Generation.'
  },
  {
    id: 'dihybrid',
    term: 'dihybrid',
    category: 'Vererbung',
    definition: 'Ein Erbgang oder eine Kreuzung, bei der zwei voneinander unabhängige Merkmale gleichzeitig betrachtet werden (z. B. Samenform und Samenfarbe).',
    example: 'Kreuzung RRGG (glatt-gelb) x rrgg (runzlig-grün).',
    examTip: 'Ergibt in der F2 ein 4x4 Punnett-Quadrat mit 16 Feldern und dem Phänotyp-Verhältnis 9:3:3:1.'
  },
  {
    id: 'haploid',
    term: 'haploid (1n)',
    category: 'Zellgenetik',
    definition: 'Einfacher Chromosomensatz; jedes Chromosom ist nur einmal im Zellkern vorhanden. Typisch für reife Keimzellen (Gameten / Eizelle und Spermium).',
    example: 'Beim Menschen: n = 23 Chromosomen in Spermien und Eizellen.',
    examTip: 'Entsteht durch die Reifeteilung (Meiose).'
  },
  {
    id: 'diploid',
    term: 'diploid (2n)',
    category: 'Zellgenetik',
    definition: 'Doppelter Chromosomensatz; die Chromosomen liegen paarweise als homologe Chromosomenpaare vor (eines vom Vater, eines von der Mutter).',
    example: 'Beim Menschen: 2n = 46 Chromosomen in allen somatischen Körperzellen.',
    examTip: 'Wird bei der Befruchtung (Verschmelzung von 1n + 1n) wiederhergestellt.'
  },
  {
    id: 'konduktorin',
    term: 'Konduktorin (Überträgerin)',
    category: 'Vererbung',
    definition: 'Eine phänotypisch gesunde Frau, die auf einem ihrer beiden X-Chromosomen ein rezessives krankmachendes Allel trägt (Genotyp X^A X^a). Sie selbst ist gesund, vererbt das Allel aber mit 50% Wahrscheinlichkeit.',
    example: 'Queen Victoria als Konduktorin für Hämophilie A.',
    examTip: 'Söhne einer Konduktorin haben eine 50%-Chance, an der Krankheit zu leiden, da sie das Y-Chromosom vom Vater erhalten.'
  },
  {
    id: 'penetranz',
    term: 'Penetranz',
    category: 'Genexpression',
    definition: 'Die statistische Wahrscheinlichkeit (in Prozent), mit der ein bestimmter Genotyp auch tatsächlich zur Ausprägung des zugehörigen Phänotyps führt.',
    example: 'Chorea Huntington besitzt 100% Penetranz (jeder Anlageträger erkrankt unausweichlich).',
    examTip: 'Bei unvollständiger Penetranz (< 100%) kann eine Person die Mutation tragen, bleibt aber gesund.'
  },
  {
    id: 'expressivitaet',
    term: 'Expressivität',
    category: 'Genexpression',
    definition: 'Das Maß bzw. die Ausprägungsstärke, mit der sich ein mutiertes Gen im Phänotyp manifestiert.',
    example: 'Marfan-Syndrom: Manche Träger haben nur überlange Finger (Spinnenfingrigkeit), andere lebensbedrohliche Aortenerweiterungen.',
    examTip: 'Unterschied zu Penetranz: Penetranz ist "Ob" (ja/nein), Expressivität ist "Wie stark".'
  },
  {
    id: 'polyphaenie',
    term: 'Polyphänie (Pleiotropie)',
    category: 'Genexpression',
    definition: 'Ein einzelnes mutiertes Gen bewirkt Veränderungen an mehreren, voneinander scheinbar unabhängigen Organen oder Phänotypmerkmalen gleichzeitig.',
    example: 'Marfan-Syndrom (Skelett, Augenlinse, Herz/Aorta defekt durch Fibrillin-1-Mutation).',
    examTip: 'Gegenteil: Polygenie (viele Gene steuern ein einzelnes Merkmal, z. B. Körpergröße oder Hautfarbe).'
  },
  {
    id: 'autosomal',
    term: 'autosomal',
    category: 'Vererbung',
    definition: 'Die Vererbung eines Gens, das auf einem der Autosomen (Chromosomen 1 bis 22 beim Menschen) liegt. Männer und Frauen sind gleichermaßen betroffen.',
    example: 'Chorea Huntington (Chr. 4), Cri-du-chat (Chr. 5), Albinismus (Chr. 11).',
    examTip: 'Erstes Kriterium der Stammbaumanalyse: Sind Geschlechter 50:50 betroffen? Wenn ja, meist autosomal.'
  },
  {
    id: 'gonosomal',
    term: 'gonosomal (X-chromosomal)',
    category: 'Vererbung',
    definition: 'Die Vererbung eines Gens, das auf einem der Geschlechtschromosomen (beim Menschen fast immer das X-Chromosom) liegt. Führt zu geschlechtsspezifischen Verteilungsmustern.',
    example: 'Hämophilie A, Rot-Grün-Sehschwäche.',
    examTip: 'Väter können gonosomale Merkmale auf dem X-Chromosom NIEMALS an ihre Söhne vererben (Väter vererben das Y-Chromosom an Söhne!).'
  }
];
