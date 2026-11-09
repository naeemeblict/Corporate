import React, { useState } from 'react';
import { CheckCircle2, XCircle, HelpCircle } from 'lucide-react';
import { QuizQuestion } from '../types/course';

interface QuizEngineProps {
  title: string;
  questions: QuizQuestion[];
  onComplete?: (score: number, total: number) => void;
}

export const QuizEngine: React.FC<QuizEngineProps> = ({ title, questions, onComplete }) => {
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, number>>({});
  const [submitted, setSubmitted] = useState(false);

  const handleSelect = (questionId: string, optionIndex: number) => {
    if (submitted) return;
    setSelectedAnswers(prev => ({
      ...prev,
      [questionId]: optionIndex
    }));
  };

  const calculateScore = () => {
    let score = 0;
    questions.forEach(q => {
      if (selectedAnswers[q.id] === q.correctIndex) {
        score++;
      }
    });
    return score;
  };

  const handleSubmit = () => {
    setSubmitted(true);
    const score = calculateScore();
    if (onComplete) {
      onComplete(score, questions.length);
    }
  };

  const handleReset = () => {
    setSelectedAnswers({});
    setSubmitted(false);
  };

  const score = calculateScore();
  const allAnswered = questions.every(q => selectedAnswers[q.id] !== undefined);

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 my-6 shadow-xl text-slate-200">
      <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-6">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-indigo-400 bg-indigo-950/80 px-2.5 py-1 rounded-md border border-indigo-800/50">
            Assessment & Knowledge Check
          </span>
          <h3 className="text-xl font-bold text-white mt-1">{title}</h3>
        </div>
        {submitted && (
          <div className="text-right">
            <span className="text-xs text-slate-400">Your Score:</span>
            <div className={`text-2xl font-black ${score === questions.length ? 'text-emerald-400' : score >= questions.length * 0.7 ? 'text-amber-400' : 'text-rose-400'}`}>
              {score} / {questions.length} ({Math.round((score / questions.length) * 100)}%)
            </div>
          </div>
        )}
      </div>

      <div className="space-y-6">
        {questions.map((q, idx) => {
          const isSelected = selectedAnswers[q.id] !== undefined;
          const userChoice = selectedAnswers[q.id];
          const isCorrect = userChoice === q.correctIndex;

          return (
            <div key={q.id} className="bg-slate-950/70 p-5 rounded-xl border border-slate-800/80">
              <div className="text-sm font-semibold text-white mb-3 flex items-start gap-2">
                <span className="text-xs px-2 py-0.5 rounded bg-slate-800 text-indigo-300 font-mono">Q{idx + 1}</span>
                <span>{q.question}</span>
              </div>

              <div className="space-y-2">
                {q.options.map((opt, optIdx) => {
                  let buttonStyle = "border-slate-800 bg-slate-900 text-slate-300 hover:bg-slate-800/80";

                  if (userChoice === optIdx) {
                    buttonStyle = "border-indigo-500 bg-indigo-950/60 text-white ring-1 ring-indigo-500";
                  }

                  if (submitted) {
                    if (optIdx === q.correctIndex) {
                      buttonStyle = "border-emerald-500 bg-emerald-950/80 text-emerald-200 font-medium ring-1 ring-emerald-500";
                    } else if (userChoice === optIdx && !isCorrect) {
                      buttonStyle = "border-rose-500 bg-rose-950/80 text-rose-200 ring-1 ring-rose-500";
                    } else {
                      buttonStyle = "border-slate-800/50 bg-slate-900/40 text-slate-500";
                    }
                  }

                  return (
                    <button
                      key={optIdx}
                      onClick={() => handleSelect(q.id, optIdx)}
                      disabled={submitted}
                      className={`w-full text-left p-3 rounded-lg border text-xs sm:text-sm transition-all flex items-center justify-between ${buttonStyle}`}
                    >
                      <div className="flex items-center gap-3">
                        <span className="w-5 h-5 rounded-full flex items-center justify-center text-xs font-mono border border-slate-700 bg-slate-800/60 text-slate-300">
                          {String.fromCharCode(65 + optIdx)}
                        </span>
                        <span>{opt}</span>
                      </div>
                      {submitted && optIdx === q.correctIndex && (
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      )}
                      {submitted && userChoice === optIdx && !isCorrect && (
                        <XCircle className="w-4 h-4 text-rose-400 shrink-0" />
                      )}
                    </button>
                  );
                })}
              </div>

              {submitted && (
                <div className={`mt-3 p-3 rounded-lg border text-xs leading-relaxed ${isCorrect ? 'bg-emerald-950/30 border-emerald-800/40 text-emerald-300' : 'bg-rose-950/30 border-rose-800/40 text-rose-300'}`}>
                  <span className="font-bold">{isCorrect ? 'Correct! ' : 'Explanation: '}</span>
                  {q.explanation}
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className="mt-6 pt-4 border-t border-slate-800 flex justify-end gap-3">
        {submitted ? (
          <button
            onClick={handleReset}
            className="px-4 py-2 rounded-lg text-xs font-bold bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors"
          >
            Retake Quiz
          </button>
        ) : (
          <button
            onClick={handleSubmit}
            disabled={!allAnswered}
            className={`px-5 py-2.5 rounded-lg text-xs font-bold transition-all ${
              allAnswered
                ? 'bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg shadow-indigo-600/30 cursor-pointer'
                : 'bg-slate-800 text-slate-500 cursor-not-allowed'
            }`}
          >
            {allAnswered ? 'Submit Answers' : `Answer all questions (${Object.keys(selectedAnswers).length}/${questions.length})`}
          </button>
        )}
      </div>
    </div>
  );
};
