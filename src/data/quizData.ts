export interface QuizQuestion {
  id: string;
  topic: 'Mendel' | 'Mutationen' | 'Stammbaum' | 'Erbkrankheiten';
  question: string;
  context?: string;
  options: {
    id: string;
    text: string;
    isCorrect: boolean;
  }[];
  explanation: string;
  stepByStep?: string[];
  examTip?: string;
}

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 'haemophilie-alexandra',
    topic: 'Erbkrankheiten',
    question: 'Zarin Alexandra ist Konduktorin für Hämophilie A (X^A X^a), Zar Nikolaus II. ist phänotypisch gesund (X^A Y). Mit welcher Wahrscheinlichkeit wird ein gemeinsames Kind an der Bluterkrankheit leiden?',
    context: 'Historisches Beispiel aus Station 4 (Hämophilie A im europäischen Hochadel).',
    options: [
      { id: 'a', text: '100 % (alle Nachkommen erkranken)', isCorrect: false },
      { id: 'b', text: '50 % (die Hälfte aller Kinder)', isCorrect: false },
      { id: 'c', text: '25 % bezogen auf alle Kinder (50 % bezogen auf männliche Nachkommen)', isCorrect: true },
      { id: 'd', text: '0 % (nur Mädchen können das Merkmal ausprägen)', isCorrect: false }
    ],
    explanation: 'Bei der Kreuzung X^A X^a (Mutter) x X^A Y (Vater) entstehen 4 gleich wahrscheinliche Genotypen (je 25 %):\n1. X^A X^A (Tochter, gesund)\n2. X^A X^a (Tochter, gesunde Konduktorin)\n3. X^A Y (Sohn, gesund)\n4. X^a Y (Sohn, BLUTER / krank).\nNur der Sohn mit X^a Y ist krank -> 25 % bezogen auf alle Kinder, bzw. 50 % aller Söhne.',
    stepByStep: [
      '1. Gameten der Mutter: 50 % X^A, 50 % X^a',
      '2. Gameten des Vaters: 50 % X^A, 50 % Y',
      '3. Punnett-Quadrat aufstellen: X^A X^A (25%), X^A X^a (25%), X^A Y (25%), X^a Y (25%)',
      '4. Nur X^a Y ist phänotypisch krank = 25 % aller Kinder (1 von 4).'
    ],
    examTip: 'Achte in der Fragestellung genau darauf, ob nach "allen Kindern" (25 %) oder nach "Söhnen" (50 %) gefragt wird!'
  },
  {
    id: 'stammbaum-beweis',
    topic: 'Stammbaum',
    question: 'In einem Familienstammbaum haben zwei phänotypisch gesunde Eltern ein Kind mit Albinismus. Welcher Erbgang liegt zwingend vor und wie lautet die genotypische Begründung?',
    options: [
      { id: 'a', text: 'Autosomal-dominant: Beide Eltern sind reinerbig krank (AA)', isCorrect: false },
      { id: 'b', text: 'Autosomal-rezessiv: Beide Eltern sind gesunde Heterozygote (Aa)', isCorrect: true },
      { id: 'c', text: 'X-chromosomal-dominant: Der Vater hat das Gen auf seinem Y-Chromosom vererbt', isCorrect: false },
      { id: 'd', text: 'Genommutation: Es liegt immer eine Trisomie 21 vor', isCorrect: false }
    ],
    explanation: 'Zwei phänotypisch gesunde Eltern, die ein krankes Kind bekommen, sind der klassische, unumstößliche Beweis für einen REZESSIVEN Erbgang. Wäre das Allel dominant, müsste mindestens ein Elternteil das Merkmal phänotypisch zeigen. Beide Eltern müssen Anlageträger (Aa) sein; das Kind erhält von beiden das rezessive Allel (aa).',
    stepByStep: [
      '1. Ausschluss Dominanz: Bei Dominanz kann ein krankes Allel nicht "versteckt" sein. Jeder Träger (AA oder Aa) wäre phänotypisch krank.',
      '2. Bestätigung Rezessivität: Im heterozygoten Zustand (Aa) unterdrückt das dominante Allel A das mutierte Allel a.',
      '3. Beide Eltern sind phänotypisch gesund, aber heterozygot (Aa).',
      '4. Das kranke Kind hat Genotyp aa (Wahrscheinlichkeit: 25 %).'
    ],
    examTip: 'Formuliere in der Klausur immer das feste Signalwort: "Zwei phänotypisch gesunde Eltern mit phänotypisch krankem Kind beweisen Rezessivität."'
  },
  {
    id: 'testkreuzung-dihybrid',
    topic: 'Mendel',
    question: 'Eine Erbsenpflanze mit glatten, gelben Samen wird mit einer reinerbig runzligen, grünen Pflanze (rrgg) gekreuzt. Das Ergebnis sind ca. 700 glatt-gelb, 700 glatt-grün, 700 runzlig-gelb und 700 runzlig-grün. Welchen Genotyp hatte die unbekannte Pflanze?',
    context: 'Aufgabe aus Station 5 / Arbeitsblatt Seite 7.',
    options: [
      { id: 'a', text: 'RRGG (doppelt homozygot dominant)', isCorrect: false },
      { id: 'b', text: 'RrGg (doppelt heterozygot)', isCorrect: true },
      { id: 'c', text: 'RRGg (homozygot für Form, heterozygot für Farbe)', isCorrect: false },
      { id: 'd', text: 'rrgg (doppelt homozygot rezessiv)', isCorrect: false }
    ],
    explanation: 'Das Nachkommen-Verhältnis ist 1 : 1 : 1 : 1 (je ca. 25 %). Bei einer Testkreuzung mit dem doppelt rezessiven Partner (rrgg) spiegelt das Phänotypverhältnis direkt die von der unbekannten Pflanze gebildeten Gameten wider. Da 4 verschiedene Phänotypen zu gleichen Teilen entstehen, muss die Pflanze 4 verschiedene Keimzelltypen gebildet haben (RG, Rg, rG, rg) -> Genotyp RrGg!',
    stepByStep: [
      '1. Phänotyp-Zahlen analysieren: 703 : 699 : 709 : 697 ~ 1 : 1 : 1 : 1',
      '2. Der Testpartner rrgg liefert ausschließlich Gameten vom Typ "rg".',
      '3. Damit 4 Phänotypen zu je 25 % entstehen, muss Pflanze P die Gameten RG, Rg, rG, rg zu je 25 % bereitstellen.',
      '4. Vier gleich häufige Gametentypen bildet nur ein doppelt heterozygoter Genotyp: RrGg.'
    ],
    examTip: 'Rückkreuzung/Testkreuzung mit dem doppelt rezessiven Partner (rrgg) dient stets dazu, den Genotyp eines dominanten Phänotyps zu ermitteln.'
  },
  {
    id: 'chromosomenmutation-balanciert',
    topic: 'Mutationen',
    question: 'Welche der folgenden Chromosomenmutationen führt in der Regel NICHT zu einer Veränderung der Gesamtzahl der Basenpaare (Menge des Erbguts), sondern lediglich zu einer Umordnung?',
    options: [
      { id: 'a', text: 'Deletion und Duplikation', isCorrect: false },
      { id: 'b', text: 'Inversion und reziproke Translokation', isCorrect: true },
      { id: 'c', text: 'Partielle Deletion 5p (Cri-du-chat)', isCorrect: false },
      { id: 'd', text: 'Trisomie 21', isCorrect: false }
    ],
    explanation: 'Man unterscheidet balancierte und unbalancierte Chromosomenmutationen. Bei einer Inversion (180°-Drehung eines Abschnitts) und einer balancierten reziproken Translokation (wechselseitiger Austausch zwischen nicht-homologen Chromosomen) bleibt die Gesamtmenge der Erbinformation erhalten. Bei Deletionen geht DNA verloren, bei Duplikationen kommt DNA hinzu (beides unbalanciert).',
    stepByStep: [
      '1. Unbalanciert = Verlust (Deletion) oder Verdopplung (Duplikation) von Genmaterial.',
      '2. Balanciert = Gesamte Erbinformation ist vollzählig vorhanden, nur die Position/Reihenfolge ist verändert (Inversion, Translokation).',
      '3. Aber: Auch bei balancierten Mutationen kann es zu Schäden kommen, wenn die Bruchpunkte mitten in funktionelle Gene fallen.'
    ],
    examTip: 'Häufige mündliche oder schriftliche Prüfungsfrage: "Ändert sich bei jeder Chromosomenmutation die Menge des genetischen Materials?" -> Antwort: Nein!'
  },
  {
    id: 'punktmutation-arten',
    topic: 'Mutationen',
    question: 'Ein Basenaustausch auf der DNA führt dazu, dass das entsprechende Codon der mRNA von UAC (Tyrosin) zu UAA umgewandelt wird. UAA ist ein Stoppcodon. Um welche Art von Mutation handelt es sich?',
    options: [
      { id: 'a', text: 'Stumme Mutation (Silent Mutation)', isCorrect: false },
      { id: 'b', text: 'Missense-Mutation', isCorrect: false },
      { id: 'c', text: 'Nonsense-Mutation', isCorrect: true },
      { id: 'd', text: 'Rastermutation durch Insertion', isCorrect: false }
    ],
    explanation: 'Wenn durch eine Basensubstitution ein codierendes Triplett in ein vorzeitiges Stopp-Codon (UAA, UAG, UGA) verwandelt wird, bricht die Translation vorzeitig ab. Es entsteht ein unvollständiges, meist funktionsloses Protein. Dies nennt man eine Nonsense-Mutation.',
    stepByStep: [
      '1. Basensubstitution liegt vor (Punktmutation).',
      '2. Folge: Aminosäure-Codon -> Stopp-Codon.',
      '3. Translation bricht ab -> Kettenabbruch.',
      '4. Definition von Nonsense-Mutation erfüllt.'
    ],
    examTip: 'Merkhilfe: "Nonsense" = das Protein bricht mittendrin ab und ergibt biologisch keinen Sinn mehr.'
  },
  {
    id: 'letalfaktor-x',
    topic: 'Mendel',
    question: 'Ein recessives Allel X_a auf dem X-Chromosom wirkt im hemizygoten (X_a Y) oder homozygoten Zustand (X_a X_a) pränatal tödlich (Letalfaktor). Eine Trägerin (X_A X_a) bekommt Kinder mit einem gesunden Mann (X_A Y). Welches Geschlechterverhältnis wird bei den lebend geborenen Nachkommen beobachtet?',
    context: 'Aufgabe aus Station A1 (Letalfaktoren).',
    options: [
      { id: 'a', text: '1 weiblich : 1 männlich (50 % : 50 %)', isCorrect: false },
      { id: 'b', text: '2 weiblich : 1 männlich (ca. 67 % weiblich : 33 % männlich)', isCorrect: true },
      { id: 'c', text: '3 weiblich : 1 männlich', isCorrect: false },
      { id: 'd', text: 'Ausschließlich weibliche Nachkommen', isCorrect: false }
    ],
    explanation: 'Die 4 theoretischen Zygoten sind:\n- X_A X_A (lebend, weiblich)\n- X_A X_a (lebend, weiblich)\n- X_A Y (lebend, männlich)\n- X_a Y (stirbt pränatal im Mutterleib durch den Letalfaktor).\nEs überleben also 2 Mädchen und 1 Junge -> Verhältnis 2 : 1!',
    stepByStep: [
      '1. Gameten: Mutter liefert X_A (50%) und X_a (50%); Vater liefert X_A (50%) und Y (50%).',
      '2. Zygoten: X_A X_A (weiblich, gesund), X_A X_a (weiblich, Trägerin), X_A Y (männlich, gesund), X_a Y (männlich, stirbt frühzeitig).',
      '3. Überlebende Kinder: 2 weibliche Individuen auf 1 männliches Individuum.',
      '4. Geschlechterverhältnis verschiebt sich von 1:1 auf 2:1.'
    ],
    examTip: 'Wenn in einer Aufgabe ein ungleiches Geschlechterverhältnis (z. B. 2:1) beschrieben wird, ist das ein starkes Indiz für einen X-chromosomalen Letalfaktor!'
  },
  {
    id: 'polyploidie-pflanzen',
    topic: 'Mutationen',
    question: 'Warum werden in der Landwirtschaft gezielt polyploide Kulturpflanzen wie tetraploider Roggen (4n) gezüchtet?',
    options: [
      { id: 'a', text: 'Weil sie kleiner bleiben und weniger Dünger benötigen', isCorrect: false },
      { id: 'b', text: 'Weil sie größere Zellen, höhere Trockenheits-/Kälteresistenz und größere Kornerträge aufweisen', isCorrect: true },
      { id: 'c', text: 'Weil sie keine Chromosomen mehr im Zellkern besitzen', isCorrect: false },
      { id: 'd', text: 'Weil sie nur durch Selbstbestäubung überleben können', isCorrect: false }
    ],
    explanation: 'Im Gegensatz zu Säugetieren, bei denen Polyploidie letal ist, führt die Vervielfachung des Chromosomensatzes bei vielen Pflanzen zum sogenannten "Gigaspflanzen-Effekt". Die Zellen und Organe sind vergrößert, die Pflanzen sind widerstandsfähiger gegen abiotischen Stress (Kälte, Trockenheit) und liefern deutlich höhere Erträge.',
    stepByStep: [
      '1. Polyploidie = Vervielfachung ganzer Genome (z. B. 4n statt 2n).',
      '2. Größeres Zellvolumen bedingt durch mehr DNA im Kern.',
      '3. Führt zu größeren Blättern, Samen und Früchten sowie erhöhter Robustheit.',
      '4. Ein wichtiges Züchtungsverfahren in der modernen Agrarbiologie.'
    ],
    examTip: 'Unterscheide: Aneuploidie betrifft einzelne Chromosomen (z. B. 2n+1 Trisomie 21), Polyploidie ganze Sätze (3n, 4n).'
  },
  {
    id: 'stochastik-mendel',
    topic: 'Mendel',
    question: 'Warum benötigte Gregor Mendel extrem große Anzahlen von Erbsenpflanzen (teilweise über 7.000 Einzelsamen), um seine Regeln wissenschaftlich abzusichern?',
    options: [
      { id: 'a', text: 'Weil Erbsenpflanzen sich nur alle 10 Jahre fortpflanzen können', isCorrect: false },
      { id: 'b', text: 'Weil die Befruchtung stochastisch (rein zufällig) erfolgt und theoretische Zahlenverhältnisse (3:1, 9:3:3:1) erst bei großen Stichproben statistisch verlässlich hervortreten', isCorrect: true },
      { id: 'c', text: 'Weil bei Erbsen 99 % der Samen durch Mutationen unfruchtbar sind', isCorrect: false },
      { id: 'd', text: 'Weil Mendel damals keine Mikroskope besaß', isCorrect: false }
    ],
    explanation: 'Die Gametenvereinigung bei der Befruchtung ist ein stochastischer Zufallsprozess, vergleichbar mit dem Werfen einer Münze. Bei 4 Würfen kann rein zufällig 4-mal Kopf fallen. Erst bei hunderten oder tausenden Würfen nähert sich die relative Häufigkeit der theoretischen Wahrscheinlichkeit (50 % : 50 % bzw. 3 : 1) mit hoher Signifikanz an.',
    stepByStep: [
      '1. Keimzellen verschmelzen rein nach dem Zufallsprinzip.',
      '2. Bei kleinen Stichproben dominieren Zufallsabweichungen (statistisches Rauschen).',
      '3. Durch sehr große Stichprobenzahlen wird der relative Fehler minimiert.',
      '4. Mendels Pionierleistung bestand genau in dieser quantitativ-statistischen Arbeitsweise.'
    ],
    examTip: 'Signalwörter für diese Klausurfrage: "stochastischer Prozess", "Zufallsschwankungen", "statistische Signifikanz".'
  }
];
