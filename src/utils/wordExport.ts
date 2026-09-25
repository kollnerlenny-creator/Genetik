import { GLOSSARY_TERMS } from '../data/glossaryData';
import { DISEASES_DATA } from '../data/diseasesData';

export function downloadWordDocument(): void {
  const glossaryRows = GLOSSARY_TERMS.map(term => `
    <tr>
      <td style="font-weight: bold; color: #1e3a8a; border: 1px solid #cbd5e1; padding: 8px;">${term.term}</td>
      <td style="border: 1px solid #cbd5e1; padding: 8px;">
        <div>${term.definition}</div>
        ${term.example ? `<div style="font-size: 9.5pt; color: #475569; margin-top: 4px;"><strong>Beispiel:</strong> ${term.example}</div>` : ''}
        ${term.examTip ? `<div style="font-size: 9.5pt; color: #0284c7; margin-top: 2px;"><strong>Klausurtipp:</strong> ${term.examTip}</div>` : ''}
      </td>
    </tr>
  `).join('');

  const diseaseCards = DISEASES_DATA.map(d => `
    <div style="margin-bottom: 24px; border: 1px solid #94a3b8; border-radius: 6px; padding: 16px; background-color: #f8fafc;">
      <h3 style="margin-top: 0; color: #1e40af; border-bottom: 1px solid #cbd5e1; padding-bottom: 6px;">Station ${d.stationNumber}: ${d.name} (${d.germanAlias})</h3>
      <table style="width: 100%; border-collapse: collapse; margin-bottom: 12px; font-size: 10pt;">
        <tr>
          <td style="width: 25%; font-weight: bold; background: #e2e8f0; padding: 6px; border: 1px solid #cbd5e1;">Erbgang / Typ:</td>
          <td style="padding: 6px; border: 1px solid #cbd5e1; font-weight: bold; color: #b91c1c;">${d.inheritance}</td>
        </tr>
        <tr>
          <td style="font-weight: bold; background: #e2e8f0; padding: 6px; border: 1px solid #cbd5e1;">Genort / Chromosom:</td>
          <td style="padding: 6px; border: 1px solid #cbd5e1;">${d.chromosome} (${d.geneOrDefect})</td>
        </tr>
        <tr>
          <td style="font-weight: bold; background: #e2e8f0; padding: 6px; border: 1px solid #cbd5e1;">Häufigkeit:</td>
          <td style="padding: 6px; border: 1px solid #cbd5e1;">${d.prevalence}</td>
        </tr>
      </table>

      <h4 style="margin: 8px 0 4px 0; color: #334155;">Molekulare Ursache:</h4>
      <p style="margin: 0 0 10px 0; font-size: 10pt;">${d.molecularCause}</p>

      <h4 style="margin: 8px 0 4px 0; color: #334155;">Symptome & Phänotyp:</h4>
      <ul style="margin: 0 0 10px 0; padding-left: 20px; font-size: 10pt;">
        ${d.symptoms.map(s => `<li>${s}</li>`).join('')}
      </ul>

      <h4 style="margin: 8px 0 4px 0; color: #334155;">Klausurrelevante Schlüsselbegriffe:</h4>
      <ul style="margin: 0 0 10px 0; padding-left: 20px; font-size: 10pt;">
        ${d.keyExamConcepts.map(k => `<li><strong>${k.term}:</strong> ${k.explanation}</li>`).join('')}
      </ul>

      <div style="background-color: #eff6ff; border-left: 4px solid #3b82f6; padding: 8px 12px; margin-top: 8px; font-size: 9.5pt;">
        <strong>Stammbaum-Hinweis:</strong> ${d.pedigreeClue}
      </div>
    </div>
  `).join('');

  const wordHtmlContent = `
<html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'>
<head>
<meta charset="utf-8">
<title>Biologie Leistungskontrolle Genetik - Komplettes Lernskript</title>
<style>
  body {
    font-family: Calibri, 'Segoe UI', Arial, sans-serif;
    font-size: 11pt;
    line-height: 1.45;
    color: #0f172a;
    margin: 2.5cm;
  }
  h1 {
    font-size: 24pt;
    color: #1e3a8a;
    border-bottom: 3px solid #1e3a8a;
    padding-bottom: 8px;
    margin-top: 0;
    margin-bottom: 12px;
  }
  h2 {
    font-size: 16pt;
    color: #1e40af;
    border-bottom: 1.5px solid #94a3b8;
    padding-bottom: 4px;
    margin-top: 28px;
    margin-bottom: 12px;
    page-break-after: avoid;
  }
  h3 {
    font-size: 13pt;
    color: #0f766e;
    margin-top: 18px;
    margin-bottom: 8px;
    page-break-after: avoid;
  }
  table {
    width: 100%;
    border-collapse: collapse;
    margin: 14px 0;
    font-size: 10pt;
  }
  th {
    background-color: #1e3a8a;
    color: #ffffff;
    font-weight: bold;
    padding: 8px 10px;
    border: 1px solid #1e3a8a;
    text-align: left;
  }
  td {
    border: 1px solid #cbd5e1;
    padding: 8px 10px;
    vertical-align: top;
  }
  tr:nth-child(even) {
    background-color: #f8fafc;
  }
  .box-callout {
    background-color: #eff6ff;
    border-left: 5px solid #2563eb;
    padding: 12px 16px;
    margin: 14px 0;
  }
  .box-warning {
    background-color: #fef2f2;
    border-left: 5px solid #dc2626;
    padding: 12px 16px;
    margin: 14px 0;
  }
  .formula {
    font-family: 'Courier New', monospace;
    font-weight: bold;
    font-size: 12pt;
    color: #1e40af;
  }
</style>
</head>
<body>

  <h1>Biologie-Leistungskontrolle: Genetik</h1>
  <p style="font-size: 12pt; color: #475569; margin-bottom: 24px;">
    <strong>Umfassendes Lernskript:</strong> Grundbegriffe &middot; Mendelsche Regeln &amp; Kreuzungsschemata &middot; Mutationen &middot; Stammbaumanalyse &middot; Stationsarbeit (Krankheiten) &middot; Klausurrechnen
  </p>

  <h2>Teil 1: Glossar &amp; Fachbegriffe</h2>
  <p>Exakte Definitionen und Prüfungshinweise aller 25 Kernbegriffe:</p>
  <table>
    <thead>
      <tr>
        <th style="width: 25%;">Fachbegriff</th>
        <th>Definition, Beispiele &amp; Klausurtipps</th>
      </tr>
    </thead>
    <tbody>
      ${glossaryRows}
    </tbody>
  </table>

  <h2>Teil 2: Die Mendelschen Regeln &amp; Kreuzungsschemata</h2>
  
  <h3>1. Mendelsche Regel: Uniformitätsregel</h3>
  <div class="box-callout">
    <strong>Regeltext:</strong> Kreuzt man zwei Individuen einer Art, die sich in einem Merkmal unterscheiden, für das beide <strong>reinerbig (homozygot)</strong> sind, so sind alle Nachkommen der F1-Generation bezüglich dieses Merkmals untereinander <strong>uniform</strong> (phänotypisch und genotypisch gleich). Dies gilt auch bei reziproker (umgekehrter) Kreuzung.
  </div>
  <ul>
    <li><strong>Dominant-rezessiver Erbgang:</strong> P: AA (rot) &times; aa (weiß) &rarr; Gameten: A bzw. a &rarr; F1: 100 % Aa (phänotypisch 100 % rot).</li>
    <li><strong>Intermediärer Erbgang:</strong> P: RR (rot) &times; WW (weiß) &rarr; F1: 100 % RW (phänotypisch 100 % rosa Mischform).</li>
    <li><strong>Kodominanter Erbgang:</strong> Beide Eigenschaften werden nebeneinander voll ausgeprägt (z. B. Blutgruppe A &times; B &rarr; F1: 100 % AB).</li>
  </ul>

  <h3>2. Mendelsche Regel: Spaltungsregel</h3>
  <div class="box-callout">
    <strong>Regeltext:</strong> Kreuzt man die Individuen der F1-Generation untereinander (oder führt eine Selbstbestäubung durch), so spalten sich die Nachkommen der F2-Generation in einem festen Zahlenverhältnis auf.
  </div>
  <table style="width: 60%; margin: 10px 0;">
    <thead>
      <tr>
        <th>Erbgangs-Typ</th>
        <th>Phänotyp-Verhältnis in F2</th>
        <th>Genotyp-Verhältnis in F2</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>Dominant-rezessiv</strong></td>
        <td><strong class="formula">3 : 1</strong> (75 % dominant : 25 % rezessiv)</td>
        <td><strong class="formula">1 : 2 : 1</strong> (1 AA : 2 Aa : 1 aa)</td>
      </tr>
      <tr>
        <td><strong>Intermediär</strong></td>
        <td><strong class="formula">1 : 2 : 1</strong> (25 % rot : 50 % rosa : 25 % weiß)</td>
        <td><strong class="formula">1 : 2 : 1</strong> (1 RR : 2 RW : 1 WW)</td>
      </tr>
    </tbody>
  </table>

  <h3>3. Mendelsche Regel: Unabhängigkeits- &amp; Neukombinationsregel</h3>
  <div class="box-callout">
    <strong>Regeltext:</strong> Kreuzt man zwei Eltern, die sich in zwei oder mehr Merkmalen reinerbig unterscheiden (dihybrider Erbgang), so werden die Erbanlagen (Gene) unabhängig voneinander vererbt und frei neu kombiniert, sofern sie auf unterschiedlichen Chromosomen liegen.
  </div>
  <p><strong>Beispiel Erbsen (Form R/r und Farbe G/g):</strong></p>
  <ul>
    <li>P: RRGG (glatt, gelb) &times; rrgg (runzlig, grün)</li>
    <li>F1: 100 % RrGg (glatt, gelb)</li>
    <li>Gameten der F1: RG, Rg, rG, rg (jeweils zu 25 %)</li>
    <li><strong>Phänotypverhältnis in der F2:</strong> <span class="formula">9 : 3 : 3 : 1</span>
      <ul>
        <li>9/16 glatt-gelb (beide dominant ausgeprägt)</li>
        <li>3/16 glatt-grün (dominant / rezessiv)</li>
        <li>3/16 runzlig-gelb (rezessiv / dominant)</li>
        <li>1/16 runzlig-grün (beide rezessiv)</li>
      </ul>
    </li>
  </ul>

  <h3>Prüfungsfall: Die Testkreuzung / Rückkreuzung</h3>
  <p>Dient der Feststellung, ob ein dominanter Phänotyp reinerbig (AA) oder mischerbig (Aa) ist. Gekreuzt wird IMMER mit dem homozygot-rezessiven Partner (aa):</p>
  <ul>
    <li>Monohybrid: Aa &times; aa &rarr; <span class="formula">1 : 1</span> (50 % dominant : 50 % rezessiv)</li>
    <li>Dihybrid: RrGg &times; rrgg &rarr; <span class="formula">1 : 1 : 1 : 1</span> (25 % glatt-gelb : 25 % glatt-grün : 25 % runzlig-gelb : 25 % runzlig-grün).</li>
  </ul>

  <h2>Teil 3: Mutationen (Systematische Übersicht)</h2>

  <h3>1. Genmutationen (Veränderung der Basensequenz einzelner Gene)</h3>
  <ul>
    <li><strong>Punktmutation (Basenaustausch):</strong>
      <ul>
        <li><strong>Stumm:</strong> Codiert für dieselbe Aminosäure wegen der Degeneration des genetischen Codes &rarr; keine Funktionsänderung.</li>
        <li><strong>Missense:</strong> Codiert für eine andere Aminosäure &rarr; Proteinstruktur kann beeinträchtigt sein (z. B. Sichelzellanämie).</li>
        <li><strong>Nonsense:</strong> Codiert für ein vorzeitiges Stoppcodon (UAA, UAG, UGA) &rarr; Translation bricht ab, verkürztes funktionsloses Protein.</li>
      </ul>
    </li>
    <li><strong>Rastermutation (Frameshift durch Insertion oder Deletion):</strong>
      Einfügen oder Verlust von Basen (nicht durch 3 teilbar) verschiebt das gesamte Leseraster ab der Mutationsstelle. Führt praktisch immer zum vollständigen Funktionsverlust des Proteins!
    </li>
  </ul>

  <h3>2. Chromosomenmutationen (Strukturveränderungen)</h3>
  <ul>
    <li><strong>Deletion:</strong> Verlust eines Chromosomenstücks (unbalanciert, z. B. 5p-beim Cri-du-chat-Syndrom).</li>
    <li><strong>Duplikation:</strong> Verdopplung eines Abschnitts durch ungleiches Crossing-over (unbalanciert).</li>
    <li><strong>Inversion:</strong> Bruch und Drehung eines Abschnitts um 180&deg; (balanciert, DNA-Menge bleibt unverändert!).</li>
    <li><strong>Reziproke Translokation:</strong> Stückaustausch zwischen zwei nicht-homologen Chromosomen (balanciert).</li>
  </ul>

  <h3>3. Genommutationen (Veränderung der Chromosomenanzahl)</h3>
  <ul>
    <li><strong>Aneuploidie:</strong> Einzelne Chromosomen fehlen oder liegen überzählig vor durch <em>Nondisjunction</em> in der Meiose (z. B. Trisomie 21 = 2n + 1).</li>
    <li><strong>Polyploidie:</strong> Vervielfachung ganzer Chromosomensätze (3n, 4n). Bei Säugetieren letal, im Pflanzenbau (z. B. tetraploider Roggen 4n) hoch erwünscht wegen Riesenwuchs und signifikant höherem Kornertrag.</li>
  </ul>

  <h2>Teil 4: Stammbaumanalyse (2-Schritte-Leitfaden)</h2>
  <div class="box-callout">
    <strong>Schritt 1: Autosomal oder Gonosomal (X-chromosomal)?</strong><br>
    Sind Männer und Frauen gleichermaßen betroffen? &rarr; <strong>Autosomal</strong>.<br>
    Deutlicher Männerüberschuss oder Weitergabe ausschließlich vom Vater an alle Töchter? &rarr; <strong>Gonosomal</strong>.
  </div>
  <div class="box-callout">
    <strong>Schritt 2: Dominant oder Rezessiv?</strong><br>
    Haben zwei <em>gesunde Eltern</em> ein <em>krankes Kind</em>? &rarr; <strong>Beweis für REZESSIV</strong> (Eltern sind heterozygot: Aa &times; Aa &rarr; aa).<br>
    Haben zwei <em>kranke Eltern</em> ein <em>gesundes Kind</em>? &rarr; <strong>Beweis für DOMINANT</strong> (Eltern sind heterozygot: Aa &times; Aa &rarr; aa).<br>
    Tritt das Merkmal in jeder Generation lückenlos auf? &rarr; Spricht stark für <strong>dominant</strong>.
  </div>

  <h2>Teil 5: Stationsarbeit - Steckbriefe der Erbkrankheiten</h2>
  ${diseaseCards}

  <h2>Teil 6: Klausurrelevante Rechen- &amp; Denkbeispiele</h2>
  <div class="box-callout">
    <strong>Aufgabe 1: Hämophilie A Wahrscheinlichkeit (Zarenfamilie Romanow)</strong><br>
    Mutter Alexandra ist Konduktorin (X^A X^a), Vater Nikolaus II. ist gesund (X^A Y).<br>
    <strong>Frage:</strong> Wie hoch ist das Risiko für ein erkranktes Kind?<br>
    <strong>Rechnung:</strong> Gameten liefern X^A X^A (25 % Tochter gesund), X^A X^a (25 % Tochter Trägerin), X^A Y (25 % Sohn gesund), X^a Y (25 % Sohn krank).<br>
    <strong>Antwort:</strong> 25 % bezogen auf alle Kinder (1 von 4), bzw. 50 % bezogen auf alle Söhne (1 von 2).
  </div>

  <div class="box-callout">
    <strong>Aufgabe 2: Letalfaktor auf dem X-Chromosom (Station A1)</strong><br>
    Rezessives Allel X_a wirkt im hemizygoten Zustand (X_a Y) oder homozygoten Zustand (X_a X_a) pränatal tödlich.<br>
    Kreuzung: Trägerin (X_A X_a) &times; gesunder Mann (X_A Y).<br>
    <strong>Beobachtung:</strong> 2 Mädchen überleben (X_A X_A und X_A X_a), 1 Junge überlebt (X_A Y), der Junge mit X_a Y stirbt frühzeitig.<br>
    <strong>Ergebnis:</strong> Das Geschlechterverhältnis bei den lebend geborenen Nachkommen verschiebt sich auf <strong>2 weiblich : 1 männlich</strong>.
  </div>

  <div class="box-callout">
    <strong>Aufgabe 3: Warum benötigte Mendel so große Zahlen?</strong><br>
    Die Keimzellvereinigung bei der Befruchtung ist ein <strong>stochastischer (rein zufälliger) Prozess</strong>. Bei kleinen Stichproben überwiegen zufällige statistische Schwankungen. Nur durch sehr große Stichprobenzahlen (über 7.000 Samen) nähern sich die real gezählten Verhältnisse den mathematischen Modellwerten (3:1 oder 9:3:3:1) mit hoher statistischer Signifikanz an.
  </div>

</body>
</html>
  `;

  const blob = new Blob([wordHtmlContent], { type: 'application/msword;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'Biologie_LK_Genetik_Lernskript.doc';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}
