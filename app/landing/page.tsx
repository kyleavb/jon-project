'use client';

import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import LeadForm from '../components/LeadForm';
import DiagnosticModal from '../components/DiagnosticModal';
import StickyMobileCTA from '../components/StickyMobileCTA';
import { useReveal } from '../components/useReveal';

const proofBlocks = [
  {
    badge: 'Failing → Passing',
    text: 'A student who had stopped attending and was failing all classes began with one-on-one support and a focused plan—then returned to class and started passing again.',
    hasVideo: true,
    videoLabel: 'Watch this turnaround',
  },
  {
    badge: 'F → C in One Week',
    text: 'After targeted support and a few completed assignments, a struggling student quickly moved from failing to a C.',
  },
  {
    badge: '54% → 72% in Two Weeks',
    text: 'Starting with simple, manageable work created early wins—and full re-engagement.',
  },
  {
    badge: 'D/F → B',
    text: 'Focused reteaching and support helped a student rebuild understanding and confidence quickly.',
    hasVideo: true,
    videoLabel: 'Watch how this happened',
  },
];

export default function LandingPage() {
  const [diagnosticOpen, setDiagnosticOpen] = useState(false);
  const revealRef = useReveal();

  return (
    <>
      <Header />
      <StickyMobileCTA />
      <DiagnosticModal isOpen={diagnosticOpen} onClose={() => setDiagnosticOpen(false)} />

      <main ref={revealRef}>
        {/* ═══════════════════════════ SECTION 1 — HERO ═══════════════════════════ */}
        <section className="relative min-h-screen flex items-center bg-navy-900 overflow-hidden pt-20">
          {/* Background */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900" />
            <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-teal-500/[0.06] rounded-full blur-[140px]" />
            <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-amber-500/[0.04] rounded-full blur-[120px]" />
            {/* Subtle grid pattern */}
            <div className="absolute inset-0 opacity-[0.025]" style={{
              backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
              backgroundSize: '60px 60px',
            }} />
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
            <div className="grid lg:grid-cols-12 gap-12 lg:gap-10 items-center">
              {/* Left — 7 cols */}
              <div className="lg:col-span-7 max-w-2xl">
                <h1 className="font-display text-4xl sm:text-5xl lg:text-[3.5rem] font-bold text-white leading-[1.08] mb-6 animate-fade-in-up">
                  It&apos;s Not Too Late to Turn{' '}
                  <span className="relative inline-block">
                    <span className="relative z-10">Things Around.</span>
                    <span className="absolute bottom-1 left-0 right-0 h-3 bg-amber-500/30 -skew-x-2" />
                  </span>
                </h1>

                <p className="text-lg sm:text-xl text-white/70 leading-relaxed mb-6 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                  If your child is falling behind, overwhelmed, or disengaged, it&apos;s not because they can&apos;t succeed—it&apos;s because the system isn&apos;t working for them.
                </p>

                {/* Credibility strip */}
                <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-teal-400/90 text-xs sm:text-sm font-medium uppercase tracking-wider mb-8 animate-fade-in-up" style={{ animationDelay: '0.18s' }}>
                  {['Tuition-Free', 'Full-Time Oregon Public School', 'Real Teachers', 'Live Instruction'].map((item, i) => (
                    <span key={i} className="flex items-center gap-3">
                      {i > 0 && <span className="w-1 h-1 rounded-full bg-teal-500/50" />}
                      {item}
                    </span>
                  ))}
                </div>

                {/* Pattern recognition */}
                <div className="bg-white/5 border border-white/10 rounded-2xl p-6 mb-8 animate-fade-in-up" style={{ animationDelay: '0.25s' }}>
                  <p className="text-white/50 text-sm font-semibold uppercase tracking-wider mb-4">If your child is:</p>
                  <div className="grid grid-cols-2 gap-3">
                    {['Falling behind', 'Avoiding schoolwork', 'Feeling overwhelmed', 'Losing confidence'].map((item, i) => (
                      <div key={i} className="flex items-center gap-2.5">
                        <div className="w-2 h-2 rounded-full bg-coral-500 shrink-0" />
                        <span className="text-white/75 text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-teal-400 text-sm font-medium mt-4">
                    You&apos;re not alone—and it&apos;s not too late to fix it.
                  </p>
                </div>

                {/* CTA buttons */}
                <div className="flex flex-col sm:flex-row gap-3 animate-fade-in-up" style={{ animationDelay: '0.35s' }}>
                  <a
                    href="#qualify-form"
                    className="inline-flex items-center justify-center bg-amber-500 hover:bg-amber-400 text-navy-900 font-bold text-base px-8 py-4 rounded-xl transition-all hover:shadow-lg hover:shadow-amber-500/25 animate-pulse-glow"
                  >
                    See If Your Child Qualifies
                  </a>
                  <button
                    onClick={() => setDiagnosticOpen(true)}
                    className="inline-flex items-center justify-center border-2 border-white/20 hover:border-white/40 text-white font-semibold text-base px-8 py-4 rounded-xl transition-all hover:bg-white/5"
                  >
                    Take the 2-Minute Check
                  </button>
                </div>
              </div>

              {/* Right — 5 cols: Form */}
              <div className="lg:col-span-5 animate-slide-right" style={{ animationDelay: '0.3s' }}>
                <LeadForm />
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════ SECTION 3 — PAIN ═══════════════════════════ */}
        <section className="py-20 sm:py-28 bg-gray-50 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50 to-gray-100" />
          <div className="relative max-w-3xl mx-auto px-4 sm:px-6 text-center">
            <div className="reveal">
              <h2 className="font-display text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-navy-800 mb-10 leading-tight">
                When Students Fall Behind,{' '}
                <span className="text-coral-500">It Doesn&apos;t Fix Itself</span>
              </h2>

              {/* Cascading pain points */}
              <div className="max-w-xl mx-auto space-y-0">
                {[
                  { text: 'Missing assignments turn into failing grades.', opacity: 'opacity-90' },
                  { text: 'Failing grades turn into avoidance.', opacity: 'opacity-80' },
                  { text: 'Avoidance turns into stress, frustration, and lost confidence.', opacity: 'opacity-70' },
                ].map((item, i) => (
                  <div key={i} className="reveal flex items-center gap-4 py-4 border-b border-gray-200 last:border-0">
                    <div className="shrink-0">
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path d="M5 10l5 5 5-5" stroke="#e8842c" strokeWidth="2" strokeLinecap="round" />
                      </svg>
                    </div>
                    <p className={`text-lg text-gray-700 text-left ${item.opacity}`}>{item.text}</p>
                  </div>
                ))}
              </div>

              <p className="mt-10 text-xl font-semibold text-navy-800">
                And before long, catching up feels impossible.
              </p>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════ SECTION 4 — MECHANISM ═══════════════════════════ */}
        <section className="py-20 sm:py-28 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <div className="reveal text-center mb-14">
              <h2 className="font-display text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-navy-800 mb-4 leading-tight">
                One Student. One Action.
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                We don&apos;t try to fix everything at once. We find the right place to start:
              </p>
            </div>

            <div className="reveal grid sm:grid-cols-3 gap-6 stagger">
              {[
                {
                  icon: (
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#00b7c4" strokeWidth="2" strokeLinecap="round">
                      <path d="M9 11l3 3L22 4" /><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" />
                    </svg>
                  ),
                  title: 'One missing assignment',
                },
                {
                  icon: (
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#00b7c4" strokeWidth="2" strokeLinecap="round">
                      <circle cx="12" cy="12" r="10" /><path d="M12 16v-4M12 8h.01" />
                    </svg>
                  ),
                  title: "One concept they didn't understand",
                },
                {
                  icon: (
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#00b7c4" strokeWidth="2" strokeLinecap="round">
                      <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
                    </svg>
                  ),
                  title: 'One conversation that unlocks momentum',
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="reveal bg-gradient-to-br from-navy-50/80 to-white border border-navy-100/60 rounded-2xl p-8 text-center hover:shadow-xl hover:shadow-navy-100/40 transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="w-14 h-14 rounded-2xl bg-teal-500/10 flex items-center justify-center mx-auto mb-5">
                    {item.icon}
                  </div>
                  <h3 className="font-display text-lg font-semibold text-navy-800">{item.title}</h3>
                </div>
              ))}
            </div>

            <p className="reveal text-center mt-10 text-lg font-medium text-teal-600">
              Then we build from there.
            </p>
          </div>
        </section>

        {/* ═══════════════════════════ SECTION 5 — PROOF ═══════════════════════════ */}
        <section className="py-20 sm:py-28 bg-navy-900 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-teal-500/5 rounded-full blur-[100px]" />
          <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-amber-500/5 rounded-full blur-[100px]" />

          <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
            <div className="reveal text-center mb-14">
              <p className="text-teal-400 font-semibold text-sm uppercase tracking-widest mb-3">
                Real Student Turnarounds
              </p>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-white leading-tight">
                This Is What Happens When Students<br className="hidden sm:block" /> Get the Right Start
              </h2>
            </div>

            <div className="reveal grid sm:grid-cols-2 gap-6 stagger">
              {proofBlocks.map((block, i) => (
                <div
                  key={i}
                  className="reveal group bg-white/[0.04] border border-white/10 rounded-2xl p-6 sm:p-8 hover:bg-white/[0.08] transition-all duration-300"
                >
                  <span className="inline-block bg-gradient-to-r from-teal-500 to-teal-400 text-navy-900 font-bold text-sm px-4 py-1.5 rounded-full mb-4">
                    {block.badge}
                  </span>
                  <p className="text-white/70 leading-relaxed mb-4">{block.text}</p>
                  {block.hasVideo && (
                    <button className="inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 font-medium text-sm transition-colors">
                      <div className="w-8 h-8 rounded-full bg-amber-400/20 flex items-center justify-center">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                      {block.videoLabel}
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════ SECTION 6 — EMOTIONAL TURN ═══════════════════════════ */}
        <section className="py-20 sm:py-28 bg-gradient-to-br from-teal-600 via-teal-700 to-teal-800 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }} />
          <div className="relative max-w-3xl mx-auto px-4 sm:px-6 text-center">
            <div className="reveal">
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-10 leading-tight">
                The First Win Changes Everything
              </h2>

              <div className="space-y-6">
                {[
                  { text: 'When students see progress, they re-engage.', size: 'text-lg sm:text-xl' },
                  { text: 'When they re-engage, their confidence returns.', size: 'text-lg sm:text-xl' },
                  { text: 'When confidence returns, everything starts moving forward again.', size: 'text-xl sm:text-2xl font-semibold' },
                ].map((line, i) => (
                  <p key={i} className={`${line.size} text-white/90 leading-relaxed`}>
                    {line.text}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════ SECTION 7 — LEGITIMACY ═══════════════════════════ */}
        <section className="py-20 sm:py-28 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <div className="reveal grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div>
                <h2 className="font-display text-3xl sm:text-4xl font-bold text-navy-800 mb-8 leading-tight">
                  This Isn&apos;t Homeschool.<br />
                  <span className="text-coral-500">And It&apos;s Not a Shortcut.</span>
                </h2>
                <div className="space-y-5">
                  {[
                    { label: 'Tuition-free public charter school', desc: 'Fully funded — no cost to Oregon families' },
                    { label: 'Oregon-certified teachers', desc: 'Licensed educators who know how to connect with students' },
                    { label: 'Live, structured instruction', desc: 'Real classes with real-time interaction and support' },
                    { label: 'Real accountability and support', desc: 'Progress monitoring, check-ins, and proactive outreach' },
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <div className="w-11 h-11 rounded-xl bg-teal-500/10 flex items-center justify-center shrink-0 mt-0.5">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00b7c4" strokeWidth="2.5" strokeLinecap="round">
                          <path d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-navy-800">{item.label}</h4>
                        <p className="text-sm text-gray-500 mt-0.5">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-br from-navy-100 to-navy-200 rounded-2xl aspect-[4/3] flex items-center justify-center">
                <div className="text-center text-navy-400">
                  <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="mx-auto mb-3 opacity-50">
                    <rect x="2" y="3" width="20" height="14" rx="2" />
                    <path d="M8 21h8M12 17v4" />
                  </svg>
                  <p className="text-sm font-medium opacity-50">Teacher leading virtual class</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════ SECTION 8 — PROCESS ═══════════════════════════ */}
        <section className="py-20 sm:py-28 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <div className="reveal text-center mb-14">
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-navy-800 leading-tight">
                Getting Started Is Simple
              </h2>
            </div>

            <div className="reveal relative">
              {/* Connection line */}
              <div className="hidden sm:block absolute top-7 left-[16.67%] right-[16.67%] h-[2px] bg-gradient-to-r from-teal-500/20 via-teal-500/40 to-teal-500/20" />

              <div className="grid sm:grid-cols-3 gap-10 sm:gap-8 stagger">
                {[
                  { num: '1', title: 'Check eligibility', desc: 'Quick form to see if your child qualifies.' },
                  { num: '2', title: 'Speak with an enrollment advisor', desc: 'Get personalized answers and guidance.' },
                  { num: '3', title: "Start your child's plan", desc: 'Begin building academic momentum.' },
                ].map((step) => (
                  <div key={step.num} className="reveal text-center relative">
                    <div className="w-14 h-14 rounded-full bg-navy-800 text-white font-display text-xl font-bold flex items-center justify-center mx-auto mb-5 relative z-10 shadow-lg shadow-navy-800/20">
                      {step.num}
                    </div>
                    <h3 className="font-display text-lg font-semibold text-navy-800 mb-2">{step.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{step.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════ SECTION 9 — SECOND FORM ═══════════════════════════ */}
        <section className="py-20 sm:py-28 bg-white">
          <div className="max-w-lg mx-auto px-4 sm:px-6">
            <div className="reveal">
              <LeadForm microcopy="Takes less than a minute. No commitment required." />
            </div>
          </div>
        </section>

        {/* ═══════════════════════════ SECTION 10 — FINAL CLOSE ═══════════════════════════ */}
        <section className="py-20 sm:py-28 bg-navy-800 text-center relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-teal-500/5 rounded-full blur-[120px]" />
          </div>
          <div className="relative max-w-2xl mx-auto px-4 sm:px-6">
            <div className="reveal">
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                Don&apos;t Let One More Month Fall Behind
              </h2>
              <p className="text-lg text-white/70 mb-10 leading-relaxed">
                The sooner your child takes that first step, the sooner everything can start to change.
              </p>
              <a
                href="#qualify-form"
                className="inline-flex items-center justify-center bg-amber-500 hover:bg-amber-400 text-navy-900 font-bold text-lg px-10 py-5 rounded-xl transition-all hover:shadow-xl hover:shadow-amber-500/25 animate-pulse-glow"
              >
                See If Your Child Qualifies
              </a>
              <p className="mt-8 text-white/40 font-display text-lg italic">
                One Student. One Action.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
