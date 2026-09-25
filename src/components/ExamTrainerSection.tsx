import React, { useState } from 'react';
import { GraduationCap, CheckCircle2, XCircle, RotateCcw, ArrowRight, HelpCircle, Sparkles } from 'lucide-react';
import { QUIZ_QUESTIONS, QuizQuestion } from '../data/quizData';

export const ExamTrainerSection: React.FC = () => {
  const [selectedTopic, setSelectedTopic] = useState<string>('Alle');
  const [userAnswers, setUserAnswers] = useState<Record<string, string>>({});
  const [revealedExplanations, setRevealedExplanations] = useState<Record<string, boolean>>({});

  const topics = ['Alle', 'Mendel', 'Mutationen', 'Stammbaum', 'Erbkrankheiten'];

  const filteredQuestions = QUIZ_QUESTIONS.filter((q) => {
    if (selectedTopic === 'Alle') return true;
    return q.topic === selectedTopic;
  });

  const handleSelectOption = (questionId: string, optionId: string) => {
    if (userAnswers[questionId]) return; // locked once answered
    setUserAnswers((prev) => ({ ...prev, [questionId]: optionId }));
    setRevealedExplanations((prev) => ({ ...prev, [questionId]: true }));
  };

  const handleResetQuiz = () => {
    setUserAnswers({});
    setRevealedExplanations({});
  };

  // Score calculation
  const totalAnswered = Object.keys(userAnswers).length;
  const correctCount = Object.entries(userAnswers).filter(([qId, ansId]) => {
    const question = QUIZ_QUESTIONS.find((q) => q.id === qId);
    const chosenOption = question?.options.find((opt) => opt.id === ansId);
    return chosenOption?.isCorrect;
  }).length;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="border-b border-slate-200 pb-4">
        <h2 className="text-2xl font-bold tracking-tight text-slate-900">
          Klausur-Prüfungstrainer &amp; Rechenaufgaben
        </h2>
        <div className="flex items-center gap-2 text-xs text-slate-500 mt-1">
          <span>8 Originalgetreue Prüfungsfragen</span>
          <span aria-hidden="true">&middot;</span>
          <span>Wahrscheinlichkeitsrechnung</span>
          <span aria-hidden="true">&middot;</span>
          <span>Beweisführungen</span>
          <span aria-hidden="true">&middot;</span>
          <span>Schritt-für-Schritt Musterlösungen</span>
        </div>
      </div>

      {/* Progress & Score Bar */}
      <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar w-full sm:w-auto">
          {topics.map((t) => (
            <button
              key={t}
              onClick={() => setSelectedTopic(t)}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg whitespace-nowrap transition-colors ${
                selectedTopic === t
                  ? 'bg-teal-700 text-white shadow-xs'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {t}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-4 w-full sm:w-auto justify-between sm:justify-end">
          <div className="text-xs">
            <span className="text-slate-500">Ergebnis: </span>
            <span className="font-mono font-bold text-teal-800 text-sm">{correctCount}</span>
            <span className="text-slate-400 font-mono"> / {totalAnswered} beantwortet</span>
          </div>
          <button
            onClick={handleResetQuiz}
            className="px-3 py-1 text-xs font-semibold text-slate-600 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 rounded-md transition-colors flex items-center gap-1"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Zurücksetzen</span>
          </button>
        </div>
      </div>

      {/* Questions List */}
      <div className="space-y-6">
        {filteredQuestions.map((q, qIndex) => {
          const userAnswer = userAnswers[q.id];
          const isAnswered = !!userAnswer;
          const isRevealed = revealedExplanations[q.id];

          return (
            <div
              key={q.id}
              className="bg-white rounded-xl border border-slate-200 p-6 shadow-xs space-y-4"
            >
              {/* Question Header */}
              <div className="space-y-1">
                <div className="flex items-center justify-between text-xs text-slate-500">
                  <span className="font-semibold text-teal-800 font-mono">Aufgabe {qIndex + 1} &bull; {q.topic}</span>
                  {isAnswered && (
                    <span className="font-semibold">
                      {q.options.find(o => o.id === userAnswer)?.isCorrect ? (
                        <span className="text-emerald-700 flex items-center gap-1">
                          <CheckCircle2 className="w-3.5 h-3.5" /> Richtig gelöst!
                        </span>
                      ) : (
                        <span className="text-rose-700 flex items-center gap-1">
                          <XCircle className="w-3.5 h-3.5" /> Leider falsch
                        </span>
                      )}
                    </span>
                  )}
                </div>
                <h3 className="text-base font-bold text-slate-900 leading-snug">
                  {q.question}
                </h3>
                {q.context && (
                  <p className="text-xs text-slate-500 italic">{q.context}</p>
                )}
              </div>

              {/* Options */}
              <div className="space-y-2">
                {q.options.map((opt) => {
                  const isSelected = userAnswer === opt.id;
                  let btnStyle = 'bg-slate-50 hover:bg-slate-100 border-slate-200 text-slate-800';

                  if (isAnswered) {
                    if (opt.isCorrect) {
                      btnStyle = 'bg-emerald-50 border-emerald-500 text-emerald-950 font-semibold ring-1 ring-emerald-500';
                    } else if (isSelected && !opt.isCorrect) {
                      btnStyle = 'bg-rose-50 border-rose-500 text-rose-950 font-semibold ring-1 ring-rose-500';
                    } else {
                      btnStyle = 'bg-slate-50 border-slate-200 text-slate-400 opacity-60';
                    }
                  }

                  return (
                    <button
                      key={opt.id}
                      onClick={() => handleSelectOption(q.id, opt.id)}
                      disabled={isAnswered}
                      className={`w-full text-left p-3 rounded-lg border text-xs sm:text-sm flex items-start gap-3 transition-all ${btnStyle} ${
                        !isAnswered ? 'cursor-pointer active:scale-[0.99]' : 'cursor-default'
                      }`}
                    >
                      <span className="w-5 h-5 rounded-full border border-current flex items-center justify-center font-bold text-xs shrink-0 mt-0.5 uppercase">
                        {opt.id}
                      </span>
                      <span className="flex-1 leading-relaxed">{opt.text}</span>
                    </button>
                  );
                })}
              </div>

              {/* Toggle Explanation Button if answered */}
              {isAnswered && (
                <div className="pt-2 border-t border-slate-100 space-y-3 text-xs">
                  <div className="p-4 bg-teal-50/70 border border-teal-200 rounded-lg space-y-2">
                    <h4 className="font-bold text-teal-950 text-sm flex items-center gap-1.5">
                      <Sparkles className="w-4 h-4 text-teal-700" />
                      <span>Schritt-für-Schritt Musterlösung:</span>
                    </h4>
                    <p className="text-slate-800 whitespace-pre-line leading-relaxed">
                      {q.explanation}
                    </p>

                    {q.stepByStep && (
                      <div className="pt-2 border-t border-teal-100 space-y-1">
                        <strong className="text-teal-900 block">Lösungsschritte:</strong>
                        <ul className="space-y-0.5 text-slate-700 pl-3 list-disc">
                          {q.stepByStep.map((step, idx) => (
                            <li key={idx}>{step}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {q.examTip && (
                      <div className="mt-2 p-2 bg-white rounded border border-teal-200 text-teal-900">
                        <strong>Prüfungsfalle / Tipp:</strong> {q.examTip}
                      </div>
                    )}
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
