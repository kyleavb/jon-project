'use client';

import { useState } from 'react';

interface DiagnosticModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const questions = [
  'Is your child missing assignments?',
  'Are their grades dropping?',
  'Are they feeling overwhelmed?',
  'Are they avoiding schoolwork?',
  'Is their current school not meeting their needs?',
];

const reinforcements: Record<number, string> = {
  1: "You're not alone.",
  3: 'This is fixable.',
};

export default function DiagnosticModal({ isOpen, onClose }: DiagnosticModalProps) {
  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState<boolean[]>([]);
  const [showResult, setShowResult] = useState(false);

  const progress = ((currentQ) / questions.length) * 100;

  const handleAnswer = (yes: boolean) => {
    const newAnswers = [...answers, yes];
    setAnswers(newAnswers);

    if (currentQ + 1 >= questions.length) {
      setShowResult(true);
    } else {
      setCurrentQ(currentQ + 1);
    }
  };

  const handleReset = () => {
    setCurrentQ(0);
    setAnswers([]);
    setShowResult(false);
    onClose();
  };

  const scrollToForm = () => {
    handleReset();
    setTimeout(() => {
      document.getElementById('qualify-form')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-navy-900/80 backdrop-blur-sm" onClick={handleReset} />

      {/* Modal */}
      <div className="relative w-full max-w-lg mx-4 sm:mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden animate-fade-in-up">
        {/* Progress bar */}
        <div className="h-1.5 bg-gray-100">
          <div
            className="h-full bg-gradient-to-r from-teal-500 to-teal-400 transition-all duration-500 ease-out"
            style={{ width: showResult ? '100%' : `${progress}%` }}
          />
        </div>

        {/* Close button */}
        <button
          onClick={handleReset}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors z-10"
          aria-label="Close"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M6 6l12 12M6 18L18 6" />
          </svg>
        </button>

        <div className="p-6 sm:p-10">
          {!showResult ? (
            <>
              {/* Header */}
              {currentQ === 0 && (
                <div className="mb-8">
                  <h2 className="font-display text-2xl sm:text-3xl font-semibold text-navy-800 mb-2">
                    Is Your Child Falling Behind?
                  </h2>
                  <p className="text-gray-500">
                    Take this quick check to find out—and what to do next.
                  </p>
                </div>
              )}

              {/* Question */}
              <div className="animate-fade-in" key={currentQ}>
                <p className="text-xs font-semibold text-teal-600 uppercase tracking-wider mb-3">
                  Question {currentQ + 1} of {questions.length}
                </p>
                <h3 className="font-display text-xl sm:text-2xl font-semibold text-navy-800 mb-8">
                  {questions[currentQ]}
                </h3>

                {/* Reinforcement message */}
                {reinforcements[currentQ] && (
                  <p className="text-teal-600 font-medium text-sm mb-6 bg-teal-50 px-4 py-2.5 rounded-lg inline-block">
                    {reinforcements[currentQ]}
                  </p>
                )}

                {/* Answer buttons */}
                <div className="flex gap-4">
                  <button
                    onClick={() => handleAnswer(true)}
                    className="flex-1 py-4 rounded-xl border-2 border-navy-200 text-navy-700 font-semibold text-lg hover:bg-navy-50 hover:border-navy-400 transition-all"
                  >
                    Yes
                  </button>
                  <button
                    onClick={() => handleAnswer(false)}
                    className="flex-1 py-4 rounded-xl border-2 border-gray-200 text-gray-600 font-semibold text-lg hover:bg-gray-50 hover:border-gray-400 transition-all"
                  >
                    No
                  </button>
                </div>
              </div>
            </>
          ) : (
            /* Result */
            <div className="text-center animate-fade-in">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-teal-500/10 flex items-center justify-center">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#00b7c4" strokeWidth="2" strokeLinecap="round">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 8v4M12 16h.01" />
                </svg>
              </div>
              <h2 className="font-display text-2xl sm:text-3xl font-semibold text-navy-800 mb-3">
                This Doesn&apos;t Mean Your Child Can&apos;t Succeed
              </h2>
              <p className="text-gray-600 mb-2">
                Your child is likely experiencing academic overwhelm—not lack of ability.
              </p>
              <p className="text-teal-600 font-medium mb-8">
                We start with one step—and build momentum from there.
              </p>

              <button
                onClick={scrollToForm}
                className="w-full bg-amber-500 hover:bg-amber-400 text-navy-900 font-bold text-lg py-4 rounded-xl transition-all hover:shadow-lg hover:shadow-amber-500/25"
              >
                See If Your Child Qualifies
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
