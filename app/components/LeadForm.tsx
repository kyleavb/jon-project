'use client';

import { useState } from 'react';

interface LeadFormProps {
  headline?: string;
  microcopy?: string;
  onSuccess?: () => void;
}

export default function LeadForm({
  headline = 'See If Your Child Qualifies',
  microcopy = 'No commitment. Just a quick next step to see if this is the right path.',
  onSuccess,
}: LeadFormProps) {
  const [formData, setFormData] = useState({
    parentName: '',
    email: '',
    grade: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate form submission
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      onSuccess?.();
    }, 1200);
  };

  if (submitted) {
    return (
      <div id="qualify-form" className="bg-white rounded-2xl shadow-xl p-8 sm:p-10 text-center animate-fade-in">
        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-teal-500/10 flex items-center justify-center">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#00b7c4" strokeWidth="2.5" strokeLinecap="round">
            <path d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="font-display text-2xl font-semibold text-navy-800 mb-2">
          You&apos;re Taking the Right Step
        </h3>
        <p className="text-gray-600 mb-6">
          We&apos;ve received your information. An enrollment specialist will reach out shortly.
        </p>
        <div className="bg-navy-50 rounded-xl p-6 text-left space-y-3">
          <p className="text-sm font-semibold text-navy-700 uppercase tracking-wider">What happens next</p>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-teal-500 text-white text-xs flex items-center justify-center font-bold">1</span>
            <span className="text-sm text-gray-700">Enrollment specialist contacts you</span>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-teal-500 text-white text-xs flex items-center justify-center font-bold">2</span>
            <span className="text-sm text-gray-700">Your questions answered</span>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-teal-500 text-white text-xs flex items-center justify-center font-bold">3</span>
            <span className="text-sm text-gray-700">Step-by-step guidance to get started</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div id="qualify-form" className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 lg:p-10">
      <h3 className="font-display text-2xl sm:text-3xl font-semibold text-navy-800 mb-2 text-center">
        {headline}
      </h3>
      <p className="text-gray-500 text-sm text-center mb-6">{microcopy}</p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="parentName" className="block text-sm font-medium text-gray-700 mb-1.5">
            Parent Name
          </label>
          <input
            id="parentName"
            type="text"
            required
            value={formData.parentName}
            onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
            className="w-full px-4 py-3.5 rounded-xl border-2 border-gray-200 focus:border-teal-500 focus:ring-0 outline-none transition-colors text-base bg-gray-50/50"
            placeholder="Your full name"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1.5">
            Email
          </label>
          <input
            id="email"
            type="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full px-4 py-3.5 rounded-xl border-2 border-gray-200 focus:border-teal-500 focus:ring-0 outline-none transition-colors text-base bg-gray-50/50"
            placeholder="you@email.com"
          />
        </div>

        <div>
          <label htmlFor="grade" className="block text-sm font-medium text-gray-700 mb-1.5">
            Student Grade
          </label>
          <select
            id="grade"
            required
            value={formData.grade}
            onChange={(e) => setFormData({ ...formData, grade: e.target.value })}
            className="w-full px-4 py-3.5 rounded-xl border-2 border-gray-200 focus:border-teal-500 focus:ring-0 outline-none transition-colors text-base bg-gray-50/50 appearance-none"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='12' height='8' viewBox='0 0 12 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1.5L6 6.5L11 1.5' stroke='%236B7280' stroke-width='2' stroke-linecap='round'/%3E%3C/svg%3E")`,
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'right 16px center',
            }}
          >
            <option value="">Select grade level</option>
            {['K', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11'].map((g) => (
              <option key={g} value={g}>Grade {g}</option>
            ))}
          </select>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-amber-500 hover:bg-amber-400 disabled:bg-amber-300 text-navy-900 font-bold text-lg py-4 rounded-xl transition-all hover:shadow-lg hover:shadow-amber-500/25 animate-pulse-glow mt-2"
        >
          {loading ? (
            <span className="flex items-center justify-center gap-2">
              <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
              </svg>
              Checking...
            </span>
          ) : (
            'See If Your Child Qualifies'
          )}
        </button>
      </form>
    </div>
  );
}
