export interface DiseaseProfile {
  id: string;
  name: string;
  germanAlias: string;
  inheritance: 'Autosomal-dominant' | 'Autosomal-rezessiv' | 'X-chromosomal-rezessiv' | 'Chromosomenmutation';
  chromosome: string;
  geneOrDefect: string;
  prevalence: string;
  molecularCause: string;
  symptoms: string[];
  keyExamConcepts: {
    term: string;
    explanation: string;
  }[];
  pedigreeClue: string;
  historicalOrClinicalFact: string;
  stationNumber: number;
}

export const DISEASES_DATA: DiseaseProfile[] = [
  {
    id: 'huntington',
    name: 'Chorea Huntington',
    germanAlias: 'Veitstanz (Erblich bedingter Veitstanz)',
    stationNumber: 3,
    inheritance: 'Autosomal-dominant',
    chromosome: 'Chromosom 4 (kurzer Arm, 4p16.3)',
    geneOrDefect: 'Huntingtin-Gen (HTT-Gen)',
    prevalence: 'Ca. 5 bis 10 pro 100.000 Menschen',
    molecularCause: 'Verlängerung einer CAG-Basentriplett-Wiederholung (Trinukleotid-Repeat-Expansion) im Huntingtin-Gen. Ein gesunder Mensch besitzt 10–35 CAG-Repeats; ab 36–40 Repeats bildet sich ein verändertes Huntingtin-Protein, das verklumpt und zum Absterben von Neuronen in den Basalganglien (Striatum) führt.',
    symptoms: [
      'Unwillkürliche, plötzliche, schleudernde Bewegungen der Arme, Beine und des Gesichts (Chorea)',
      'Gangunsicherheiten, Schluck- und Sprachstörungen (Dysarthrie)',
      'Progrediente kognitive Verschlechterung bis zur schweren Demenz',
      'Affektive Wesensveränderungen: Depressionen, Reizbarkeit, Psychosen',
      'Verläuft nach Symptombeginn innerhalb von 15 bis 20 Jahren unaufhaltsam tödlich'
    ],
    keyExamConcepts: [
      {
        term: 'Spätmanifestation',
        explanation: 'Die Symptome treten meist erst im 3. bis 5. Lebensjahrzehnt (zwischen 30 und 60 Jahren) auf. Betroffene haben zu diesem Zeitpunkt oft bereits Kinder gezeugt, ohne von ihrer Erkrankung zu wissen.'
      },
      {
        term: '100 % Penetranz',
        explanation: 'Jedes Individuum, das die Mutation im Genotyp trägt (Genotyp AA oder Aa), erkrankt unausweichlich im Laufe seines Lebens.'
      },
      {
        term: '50 % Wiederholungsrisiko',
        explanation: 'Ein heterozygoter Träger (Aa) hat mit einem gesunden Partner (aa) mit 50 % Wahrscheinlichkeit bei jeder Schwangerschaft ein betroffenes Kind (Aa).'
      }
    ],
    pedigreeClue: 'Merkmal tritt in jeder Generation lückenlos auf. Männer und Frauen sind gleich häufig betroffen. Wenn zwei Betroffene ein gesundes Kind bekommen, beweist dies zwingend den dominanten Erbgang (beide Eltern sind Aa, Kind ist aa).',
    historicalOrClinicalFact: '1872 erstmals vom US-amerikanischen Arzt George Huntington präzise beschrieben. Es existiert heute ein prädiktiver Gentest, der ethisch sensibel begleitet werden muss.'
  },
  {
    id: 'haemophilie',
    name: 'Hämophilie A',
    germanAlias: 'Klassische Bluterkrankheit',
    stationNumber: 4,
    inheritance: 'X-chromosomal-rezessiv',
    chromosome: 'X-Chromosom (langer Arm, Xq28)',
    geneOrDefect: 'F8-Gen (Blutgerinnungsfaktor VIII)',
    prevalence: 'Ca. 1 pro 5.000 bis 10.000 lebendgeborene Jungen',
    molecularCause: 'Genmutationen (Deletionen, Inversionen wie die Intron-22-Inversion, oder Punktmutationen) im F8-Gen auf dem X-Chromosom führen zu einem Mangel oder zur Funktionsunfähigkeit des Gerinnungsfaktors VIII. Dadurch ist die sekundäre Hämostase (Bildung des stabilen Fibrinnetzes) massiv gestört.',
    symptoms: [
      'Primäre Blutstillung durch Thrombozyten funktioniert kurzzeitig, aber die Wunde reißt nach und blutet extrem lange nach (> 15 Minuten bis Stunden)',
      'Gefürchtete spontane Einblutungen in große Gelenke (Knie, Ellenbogen = Hämarthros), die zu schmerzhaften Kontrakturen und Gelenkzerstörung führen',
      'Tiefe intramuskuläre Hämatome nach minimalen Traumen',
      'Lebensgefährliche innere Blutungen (Gehirn, Bauchraum)'
    ],
    keyExamConcepts: [
      {
        term: 'Konduktorin',
        explanation: 'Frauen besitzen zwei X-Chromosomen. Eine heterozygote Frau (X^A X^a) kompensiert das defekte Allel mit ihrem gesunden X-Chromosom und ist phänotypisch gesund, vererbt das Allel aber zu 50% an Kinder.'
      },
      {
        term: 'Männerüberschuss (Hemizygotie)',
        explanation: 'Männer besitzen nur ein X-Chromosom (X^a Y, hemizygot). Ein einziges mutiertes Allel reicht aus, um die Krankheit voll auszuprägen. Männer können daher niemals gesunde Konduktoren sein.'
      },
      {
        term: 'Vererbungsregeln von Vätern',
        explanation: 'Ein betroffener Vater (X^a Y) vererbt sein X-Chromosom an ALLE seine Töchter (sie werden Konduktorinnen), aber an KEINEN seiner Söhne (die Söhne erhalten sein Y-Chromosom).'
      }
    ],
    pedigreeClue: 'Praktisch nur Männer betroffen. Erkrankte Söhne haben phänotypisch gesunde Mütter (Konduktorinnen). Tritt eine erkrankte Frau auf (X^a X^a), muss der Vater zwingend krank (X^a Y) und die Mutter mindestens Konduktorin (X^A X^a) sein.',
    historicalOrClinicalFact: 'Berühmt als "Krankheit der Könige": Queen Victoria von England war Konduktorin und übertrug das Allel in die spanischen, preußischen und russischen Adelshäuser (u. a. Zarewitsch Alexei Nikolajewitsch).'
  },
  {
    id: 'cri-du-chat',
    name: 'Cri-du-chat-Syndrom',
    germanAlias: 'Katzenschrei-Syndrom (5p-Syndrom)',
    stationNumber: 1,
    inheritance: 'Chromosomenmutation',
    chromosome: 'Chromosom 5 (kurzer Arm, 5p)',
    geneOrDefect: 'Partielle Deletion des kurzen Arms (5p15.2)',
    prevalence: 'Ca. 1 pro 20.000 bis 50.000 Neugeborene',
    molecularCause: 'Strukturelle Chromosomenmutation: Ein Teilstück am kurzen Arm eines Chromosoms 5 ist abgebrochen und verloren gegangen (unbalancierte Deletion). In 85 % der Fälle entsteht diese Deletion de novo (Spontanmutation) während der Spermatogenese oder Oogenese.',
    symptoms: [
      'Charakteristisches, hohes, klagendes und miauendes Schreien im Säuglingsalter infolge einer Kehlkopffehlbildung (Larynx-Hypoplasie)',
      'Mikrozephalie (auffällig kleiner Kopfumfang) und Mondgesicht',
      'Hypertelorismus (großer Augenabstand), Epikanthus-Falte und tiefsitzende Ohren',
      'Schwere psychomotorische und geistige Entwicklungsverzögerung',
      'Muskuläre Hypotonie (Schlaffheit) im Säuglingsalter'
    ],
    keyExamConcepts: [
      {
        term: 'Chromosomenmutation vs. Genmutation',
        explanation: 'Hier ist nicht nur eine einzelne Base verändert, sondern ein makroskopisch sichtbarer Chromosomenabschnitt mit dutzenden Genen verloren gegangen (unbalancierte Deletion).'
      },
      {
        term: 'Karyogramm-Diagnostik',
        explanation: 'Die Diagnose erfolgt zytogenetisch durch Erstellung eines Karyogramms (Bandenfärbung oder FISH), in dem der verkürzte kurze Arm von Chromosom 5 (5p-) direkt sichtbar ist.'
      },
      {
        term: 'Geschlechterverhältnis',
        explanation: 'Mädchen sind im Verhältnis ca. 5 : 1 signifikant häufiger betroffen als Jungen.'
      }
    ],
    pedigreeClue: 'Da es sich meist um eine de-novo-Spontanmutation handelt, ist in der Familiengeschichte zuvor kein Fall bekannt. Tritt unvermittelt bei gesunden Eltern auf.',
    historicalOrClinicalFact: 'Wurde 1963 vom französischen Humangenetiker Jérôme Lejeune (dem Entdecker der Trisomie 21) beschrieben.'
  },
  {
    id: 'albinismus',
    name: 'Okulokutaner Albinismus',
    germanAlias: 'Albinismus (angeborene Pigmentbildungsstörung)',
    stationNumber: 2,
    inheritance: 'Autosomal-rezessiv',
    chromosome: 'Chromosom 11 (TYR-Gen auf 11q14.3 beim Typ OCA1)',
    geneOrDefect: 'Tyrosinase-Gen (TYR)',
    prevalence: 'Ca. 1 pro 17.000 bis 20.000 Menschen',
    molecularCause: 'Rezessive Genmutation führt zum Ausfall oder zur Funktionsminderung des Enzyms Tyrosinase. Die Tyrosinase katalysiert die Umwandlung der Aminosäure Tyrosin in DOPA und weiter in das Pigment Melanin. Durch den Enzymdefekt kann kein Eumelanin oder Phäomelanin gebildet werden.',
    symptoms: [
      'Vollständiges oder teilweises Fehlen von Pigmenten in Haaren (schneeweiß bis strohgelb) und Haut (extrem hell/porzellanartig)',
      'Iris erscheint durchscheinend hellblau bis rötlich (Gefäße des Augenhintergrunds schimmern mangels Pigmentierung durch)',
      'Photophobie (ausgeprägte Blendempfindlichkeit und Lichtscheu)',
      'Nystagmus (unkontrolliertes Augenzittern) und verminderte Sehschärfe (Foveahypoplasie)',
      'Extrem hohes Risiko für Sonnenbrände und vorzeitigen Hautkrebs'
    ],
    keyExamConcepts: [
      {
        term: 'Enzymblockade im Stoffwechsel',
        explanation: 'Klassisches Modell für eine Stoffwechselblockade: Substrat Tyrosin staut sich an, Endprodukt Melanin fehlt vollständig.'
      },
      {
        term: '2 gesunde Eltern, krankes Kind',
        explanation: 'Sicherster Beweis für rezessiven Erbgang: Zwei phänotypisch gesunde Eltern sind heterozygote Überträger (Aa x Aa) und haben mit 25% Wahrscheinlichkeit ein betroffenes Kind (aa).'
      },
      {
        term: 'Verwandte rezessive Erkrankungen',
        explanation: 'Phenylketonurie (PKU, Chr. 12, Phenylalanin-Hydroxylase-Defekt), Galaktosämie (Milchzuckerabbau), Mukoviszidose (CFTR-Gen), Xeroderma pigmentosum (DNA-Reparaturdefekt).'
      }
    ],
    pedigreeClue: 'Häufig Generationensprünge: Krankheit tritt überraschend bei Kindern phänotypisch gesunder Eltern auf. Häufiger bei Verwandtenehen (Konsanguinität).',
    historicalOrClinicalFact: 'Betroffene in tropischen Regionen (z. B. Subsahara-Afrika) leiden unter massiver sozialer Diskriminierung und extrem hoher Hautkrebsmortalität mangels UV-Schutz.'
  },
  {
    id: 'marfan',
    name: 'Marfan-Syndrom',
    germanAlias: 'Bindegewebsschwäche (Fibrillinopathie)',
    stationNumber: 5,
    inheritance: 'Autosomal-dominant',
    chromosome: 'Chromosom 15 (langer Arm, 15q21.1)',
    geneOrDefect: 'FBN1-Gen (Fibrillin-1)',
    prevalence: 'Ca. 1 bis 2 pro 10.000 Menschen',
    molecularCause: 'Mutation im FBN1-Gen führt zu fehlerhaftem oder vermindertem Glykoprotein Fibrillin-1. Fibrillin-1 ist Hauptbestandteil der Mikrofibrillen der extrazellulären Matrix, die Geweben (besonders Aortenwand, Sehnen, Bänder) Elastizität und Reißfestigkeit verleihen.',
    symptoms: [
      'Hochwuchs mit auffallend schlankem Körperbau und überlangen, spinnenartigen Fingern (Arachnodaktylie)',
      'Thoraxdeformitäten: Trichterbrust (Pectus excavatum) oder Hühnerbrust (Pectus carinatum)',
      'Überstreckbare Gelenke, Skoliose',
      'Subluxation oder Luxation der Augenlinse (Linsenverschiebung durch Bänderschwäche)',
      'Lebensgefährliche Aortendilatation, Aortendissektion und Herzklappeninsuffizienz'
    ],
    keyExamConcepts: [
      {
        term: 'Polyphänie (Pleiotropie)',
        explanation: 'Ein einziger Gendefekt im FBN1-Gen wirkt sich gleichzeitig auf viele verschiedene Organsysteme aus: Skelettsystem, Auge und kardiovaskuläres System.'
      },
      {
        term: 'Variable Expressivität',
        explanation: 'Selbst innerhalb derselben Familie mit identischer Genmutation kann das Krankheitsbild von leichten Gelenkdehnungen bis hin zur tödlichen Aortenruptur extrem unterschiedlich stark ausgeprägt sein.'
      },
      {
        term: 'Dominant-negative Wirkung',
        explanation: 'Das mutierte Fibrillin-Protein stört auch die Funktion des noch vorhandenen gesunden Proteins im Bindegewebe.'
      }
    ],
    pedigreeClue: 'Autosomal-dominant mit ununterbrochener Kette von Generation zu Generation. Etwa 25–30 % der Fälle sind Neumutationen ohne betroffene Eltern.',
    historicalOrClinicalFact: 'Historische Persönlichkeiten wie Abraham Lincoln oder Niccolò Paganini (Geigenvirtuose mit riesiger Fingerspannweite) standen im Verdacht, das Marfan-Syndrom gehabt zu haben.'
  },
  {
    id: 'spargelurin',
    name: 'Asparagusic Acid Smell Excretion',
    germanAlias: 'Spargelurin-Phänomen',
    stationNumber: 6,
    inheritance: 'Autosomal-dominant',
    chromosome: 'Genort auf Autosomen (Geruchsrezeptor-Gencluster OR51-Familie)',
    geneOrDefect: 'Stoffwechselabbau von Asparagussäure & Riechrezeptor-Mutation',
    prevalence: 'Ca. 40 % bis 50 % der Bevölkerung',
    molecularCause: 'Nach dem Verzehr von Spargel wird Asparagussäure im Körper verstoffwechselt. Bei Trägern des dominanten Allels entstehen flüchtige Schwefelverbindungen (Methanthiol, Dimethylsulfid). Zudem wird auch die Fähigkeit, diesen Geruch olfaktorisch wahrzunehmen, genetisch gesteuert.',
    symptoms: [
      'Charakteristischer, stechender Geruch des Urins ca. 15 bis 30 Minuten nach dem Verzehr von Spargel',
      'Vollkommen harmloses Phänomen ohne jeglichen Krankheitswert'
    ],
    keyExamConcepts: [
      {
        term: 'Autosomal-dominanter Erbgang eines physiologischen Merkmals',
        explanation: 'Zeigt, dass Vererbungsregeln und dominante Allele nicht nur schwere Krankheiten betreffen, sondern auch völlig unbedenkliche Stoffwechseleigenschaften.'
      },
      {
        term: 'Dualer Gen-Einfluss',
        explanation: 'Kombiniert zwei Aspekte: 1. Bildung/Ausscheidung der Schwefelverbindungen und 2. Vorhandensein des spezifischen Geruchsrezeptors zur Wahrnehmung.'
      }
    ],
    pedigreeClue: 'Tritt in Familien in jeder Generation bei beiden Geschlechtern auf, sofern mindestens ein Elternteil Träger des dominanten Allels ist.',
    historicalOrClinicalFact: 'Marcel Proust schrieb in "Auf der Suche nach der verlorenen Zeit" poetisch über das Spargelaroma im Nachttopf.'
  }
];
