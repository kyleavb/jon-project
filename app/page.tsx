'use client';

import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import LeadForm from './components/LeadForm';
import DiagnosticModal from './components/DiagnosticModal';
import StickyMobileCTA from './components/StickyMobileCTA';
import { useReveal } from './components/useReveal';

/* ─── Proof Cards ─── */
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

const processSteps = [
  { num: '1', title: 'Check eligibility', desc: 'Quick 2-minute form to see if your child qualifies.' },
  { num: '2', title: 'Speak with an enrollment advisor', desc: 'Get personalized answers to your questions.' },
  { num: '3', title: "Start your child's plan", desc: 'Begin the journey to academic momentum.' },
];

export default function HomePage() {
  const [diagnosticOpen, setDiagnosticOpen] = useState(false);
  const revealRef = useReveal();

  return (
    <>
      <Header />
      <StickyMobileCTA />
      <DiagnosticModal isOpen={diagnosticOpen} onClose={() => setDiagnosticOpen(false)} />

      <main ref={revealRef}>
        {/* ═══════════════════════════ HERO ═══════════════════════════ */}
        <section className="relative min-h-screen flex items-center bg-navy-900 overflow-hidden pt-20">
          {/* Background texture */}
          <div className="absolute inset-0 opacity-[0.035]" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />

          {/* Gradient orbs */}
          <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-teal-500/8 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-amber-500/6 rounded-full blur-[100px]" />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Left content */}
              <div className="max-w-xl">
                <h1 className="font-display text-4xl sm:text-5xl lg:text-[3.4rem] font-bold text-white leading-[1.1] mb-6 animate-fade-in-up">
                  Falling Behind Doesn&apos;t Have to{' '}
                  <span className="relative inline-block">
                    <span className="relative z-10">Stay That Way.</span>
                    <span className="absolute bottom-1 left-0 right-0 h-3 bg-teal-500/30 -skew-x-2" />
                  </span>
                </h1>

                <p className="text-lg sm:text-xl text-white/70 leading-relaxed mb-6 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                  If your child is falling behind, overwhelmed, or disengaged, it&apos;s not because they can&apos;t succeed—it&apos;s because the system isn&apos;t working for them.
                </p>

                {/* Credibility strip */}
                <div className="credibility-strip text-teal-400/90 mb-8 animate-fade-in-up" style={{ animationDelay: '0.18s' }}>
                  <span>Tuition-Free Oregon Public School</span>
                  <span className="divider" />
                  <span>Real Teachers</span>
                  <span className="divider" />
                  <span>Live Instruction</span>
                </div>

                {/* Mechanism */}
                <div className="bg-white/5 border border-white/10 rounded-2xl p-6 mb-8 animate-fade-in-up" style={{ animationDelay: '0.24s' }}>
                  <h3 className="font-display text-xl font-semibold text-amber-400 mb-2">One Student. One Action.</h3>
                  <p className="text-white/60 text-sm leading-relaxed">
                    We don&apos;t overwhelm students by trying to fix everything at once. We find the right place to start—then build momentum step by step.
                  </p>
                </div>

                {/* Pattern Recognition */}
                <div className="mb-8 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                  <p className="text-white/50 text-sm font-medium uppercase tracking-wider mb-3">If your child is:</p>
                  <div className="grid grid-cols-2 gap-2">
                    {['Missing assignments or falling behind', 'Avoiding schoolwork altogether', 'Feeling overwhelmed and stuck', 'Losing confidence week after week'].map((item, i) => (
                      <div key={i} className="flex items-start gap-2 text-white/70 text-sm">
                        <svg className="w-4 h-4 text-coral-500 mt-0.5 shrink-0" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-teal-400/80 text-sm mt-3 font-medium">
                    This is exactly where many students start before things turn around.
                  </p>
                </div>

                {/* Micro proof */}
                <p className="text-white/50 text-sm italic mb-6 animate-fade-in-up" style={{ animationDelay: '0.35s' }}>
                  Students go from failing to passing in weeks—not years.
                </p>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row gap-3 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
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

              {/* Right: Form */}
              <div className="animate-slide-right" style={{ animationDelay: '0.3s' }}>
                <LeadForm />
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════ PAIN ═══════════════════════════ */}
        <section className="relative py-20 sm:py-28 bg-gray-50 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-50" />
          <div className="relative max-w-3xl mx-auto px-4 sm:px-6 text-center">
            <div className="reveal">
              <h2 className="font-display text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-navy-800 mb-8 leading-tight">
                When Students Fall Behind,{' '}
                <span className="text-coral-500">It Doesn&apos;t Fix Itself</span>
              </h2>

              <div className="space-y-4 text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
                <p className="flex items-center gap-3 justify-center">
                  <span className="w-8 h-[2px] bg-coral-500/40 shrink-0" />
                  Missing assignments turn into failing grades.
                </p>
                <p className="flex items-center gap-3 justify-center">
                  <span className="w-8 h-[2px] bg-coral-500/50 shrink-0" />
                  Failing grades turn into avoidance.
                </p>
                <p className="flex items-center gap-3 justify-center">
                  <span className="w-8 h-[2px] bg-coral-500/60 shrink-0" />
                  Avoidance turns into stress, frustration, and lost confidence.
                </p>
              </div>

              <p className="mt-8 text-xl font-medium text-navy-700">
                And before long, catching up feels impossible.
              </p>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════ MECHANISM ═══════════════════════════ */}
        <section className="py-20 sm:py-28 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <div className="reveal text-center mb-12">
              <h2 className="font-display text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-navy-800 mb-4 leading-tight">
                One Student. One Action.
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                We don&apos;t try to fix everything at once. We find the right place to start:
              </p>
            </div>

            <div className="reveal grid sm:grid-cols-3 gap-6 stagger">
              {[
                { icon: '📋', title: 'One missing assignment', desc: 'Identify the single most impactful gap to close first.' },
                { icon: '💡', title: 'One concept they didn\'t understand', desc: 'Pinpoint exactly where comprehension broke down.' },
                { icon: '🗣️', title: 'One conversation that unlocks momentum', desc: 'A real connection with a teacher who cares.' },
              ].map((item, i) => (
                <div
                  key={i}
                  className="reveal bg-navy-50/50 border border-navy-100 rounded-2xl p-8 text-center hover:shadow-lg hover:shadow-navy-100/50 transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="font-display text-lg font-semibold text-navy-800 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            <p className="reveal text-center mt-10 text-lg font-medium text-teal-600">
              Then we build from there.
            </p>
          </div>
        </section>

        {/* ═══════════════════════════ PROOF ═══════════════════════════ */}
        <section className="py-20 sm:py-28 bg-navy-900 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-teal-500/5 rounded-full blur-[100px]" />
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
                  className="reveal group bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8 hover:bg-white/[0.08] transition-all duration-300"
                >
                  <span className="inline-block bg-gradient-to-r from-teal-500 to-teal-400 text-navy-900 font-bold text-sm px-4 py-1.5 rounded-full mb-4">
                    {block.badge}
                  </span>
                  <p className="text-white/70 leading-relaxed mb-4">{block.text}</p>
                  {block.hasVideo && (
                    <button className="inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 font-medium text-sm transition-colors group-hover:gap-3">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                      {block.videoLabel}
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════ EMOTIONAL TURN ═══════════════════════════ */}
        <section className="py-20 sm:py-28 bg-gradient-to-br from-teal-600 to-teal-700 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
            backgroundSize: '32px 32px',
          }} />
          <div className="relative max-w-3xl mx-auto px-4 sm:px-6 text-center">
            <div className="reveal">
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-8 leading-tight">
                The First Win Changes Everything
              </h2>
              <div className="space-y-4 text-lg sm:text-xl text-white/85 leading-relaxed">
                <p>When students see progress, they re-engage.</p>
                <p>When they re-engage, their confidence returns.</p>
                <p className="font-medium text-white">When confidence returns, everything starts moving forward again.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════ LEGITIMACY ═══════════════════════════ */}
        <section className="py-20 sm:py-28 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <div className="reveal grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-display text-3xl sm:text-4xl font-bold text-navy-800 mb-6 leading-tight">
                  This Isn&apos;t Homeschool.<br />
                  <span className="text-coral-500">And It&apos;s Not a Shortcut.</span>
                </h2>
                <div className="space-y-4">
                  {[
                    'Tuition-free public charter school',
                    'Oregon-certified teachers',
                    'Live, structured instruction',
                    'Real accountability and support',
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-xl bg-teal-500/10 flex items-center justify-center shrink-0">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00b7c4" strokeWidth="2.5" strokeLinecap="round">
                          <path d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-lg text-gray-700 font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Visual placeholder */}
              <div className="bg-gradient-to-br from-navy-100 to-navy-200 rounded-2xl aspect-[4/3] flex items-center justify-center">
                <div className="text-center text-navy-400">
                  <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="mx-auto mb-3 opacity-50">
                    <rect x="2" y="3" width="20" height="14" rx="2" />
                    <path d="M8 21h8M12 17v4" />
                  </svg>
                  <p className="text-sm font-medium opacity-50">Teacher-led virtual classroom</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════ PROCESS ═══════════════════════════ */}
        <section className="py-20 sm:py-28 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <div className="reveal text-center mb-14">
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-navy-800 leading-tight">
                Getting Started Is Simple
              </h2>
            </div>

            <div className="reveal grid sm:grid-cols-3 gap-8 stagger">
              {processSteps.map((step) => (
                <div key={step.num} className="reveal text-center">
                  <div className="w-14 h-14 rounded-full bg-navy-800 text-white font-display text-xl font-bold flex items-center justify-center mx-auto mb-4">
                    {step.num}
                  </div>
                  <h3 className="font-display text-lg font-semibold text-navy-800 mb-2">{step.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════ SECOND FORM ═══════════════════════════ */}
        <section className="py-20 sm:py-28 bg-white">
          <div className="max-w-lg mx-auto px-4 sm:px-6">
            <div className="reveal">
              <LeadForm microcopy="Takes less than a minute. No commitment required." />
            </div>
          </div>
        </section>

        {/* ═══════════════════════════ FINAL CLOSE ═══════════════════════════ */}
        <section className="py-20 sm:py-28 bg-navy-800 text-center">
          <div className="max-w-2xl mx-auto px-4 sm:px-6">
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
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
