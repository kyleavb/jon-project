import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-navy-900 text-white/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-teal-500 to-teal-700 flex items-center justify-center">
                <span className="text-white font-display font-bold text-sm">V</span>
              </div>
              <div className="leading-tight">
                <div className="text-white font-display font-semibold text-sm">Virtual Prep Academy</div>
                <div className="text-teal-400 text-[10px] font-medium tracking-widest uppercase">Oregon</div>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-white/50">
              Tuition-free online public school serving Oregon students K–11 with live instruction and real teacher support.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Quick Links</h4>
            <ul className="space-y-2.5">
              <li><Link href="/" className="text-sm hover:text-teal-400 transition-colors">Home</Link></li>
              <li><Link href="/landing" className="text-sm hover:text-teal-400 transition-colors">Get Started</Link></li>
              <li><a href="https://oregon.virtualpreparatoryacademy.com/about-our-school/" className="text-sm hover:text-teal-400 transition-colors">About Us</a></li>
              <li><a href="https://oregon.virtualpreparatoryacademy.com/academics/" className="text-sm hover:text-teal-400 transition-colors">Academics</a></li>
            </ul>
          </div>

          {/* Grades */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Programs</h4>
            <ul className="space-y-2.5">
              <li><a href="https://oregon.virtualpreparatoryacademy.com/online-elementary-school/" className="text-sm hover:text-teal-400 transition-colors">Grades K–5</a></li>
              <li><a href="https://oregon.virtualpreparatoryacademy.com/online-middle-school/" className="text-sm hover:text-teal-400 transition-colors">Grades 6–8</a></li>
              <li><a href="https://oregon.virtualpreparatoryacademy.com/online-high-school/" className="text-sm hover:text-teal-400 transition-colors">Grades 9–12</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Contact</h4>
            <ul className="space-y-2.5">
              <li>
                <a href="tel:+5413042202" className="text-sm hover:text-teal-400 transition-colors flex items-center gap-2">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.79 19.79 0 012.12 4.18 2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
                  541.304.2202
                </a>
              </li>
              <li>
                <a href="mailto:info@vprepor.org" className="text-sm hover:text-teal-400 transition-colors flex items-center gap-2">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                  info@vprepor.org
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/40">
            &copy; {new Date().getFullYear()} ACCEL Schools LLC and its affiliates. All Rights Reserved.
          </p>
          <div className="flex gap-6">
            <a href="https://accelschools.com/privacy-policy/" className="text-xs text-white/40 hover:text-white/70 transition-colors">Privacy Policy</a>
            <a href="https://accelschools.com/terms-of-service/" className="text-xs text-white/40 hover:text-white/70 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
