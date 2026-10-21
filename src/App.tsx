import { Mail, Shield, CheckCircle2, Lock } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-[#FDFCFB] text-stone-800 antialiased selection:bg-emerald-100 selection:text-emerald-900">
      {/* Top minimal header */}
      <header className="border-b border-stone-200/80 bg-white/80 backdrop-blur-xs sticky top-0 z-10">
        <div className="max-w-3xl mx-auto px-5 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-700"></span>
            <span className="font-serif font-bold text-lg tracking-tight text-stone-900">
              Ayurveda reality
            </span>
          </div>
          <span className="text-xs font-medium text-stone-500">
            Privacy Policy
          </span>
        </div>
      </header>

      {/* Main Single Static Document */}
      <main className="max-w-3xl mx-auto px-5 py-10 sm:py-16">
        <article className="space-y-10">
          {/* Header Title & Date */}
          <header className="space-y-4 pb-8 border-b border-stone-200">
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-emerald-800">
              <Shield className="w-3.5 h-3.5" />
              <span>Official Mobile Application Policy</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-[42px] font-serif font-bold text-stone-900 leading-tight">
              Privacy Policy for Ayurveda reality
            </h1>

            <div className="text-sm font-medium text-stone-600">
              Last updated: <span className="text-stone-900 font-semibold">October 21, 2026</span>
            </div>

            <p className="text-base sm:text-lg text-stone-700 leading-relaxed pt-2">
              <strong>Ayurveda reality</strong> ("we", "our", or "the App") is committed to protecting your privacy. This Privacy Policy outlines how we collect, use, and protect your information when you use our mobile application.
            </p>
          </header>

          {/* Section 1 */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-stone-900 flex items-baseline gap-2">
              <span className="text-emerald-800 font-sans text-lg">1.</span>
              <span>Information We Collect</span>
            </h2>
            <ul className="space-y-3 text-stone-700 text-sm sm:text-base leading-relaxed pl-1">
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-700 mt-2.5 shrink-0" />
                <div>
                  <strong className="text-stone-900">Account Data:</strong> Your email address and authentication credentials managed securely through Firebase Authentication.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-700 mt-2.5 shrink-0" />
                <div>
                  <strong className="text-stone-900">Academic Profile:</strong> Your name, university/college, degree (BAMS), and year of study.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-700 mt-2.5 shrink-0" />
                <div>
                  <strong className="text-stone-900">Academic Access Records:</strong> Course material access verification requests and enrollment status.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-700 mt-2.5 shrink-0" />
                <div>
                  <strong className="text-stone-900">Diagnostics &amp; App Performance:</strong> Crash logs, performance metrics, and device identifiers (Firebase Cloud Messaging tokens) collected via Firebase Crashlytics to diagnose errors and deliver syllabus updates.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-700 mt-2.5 shrink-0" />
                <div>
                  <strong className="text-stone-900">Offline Cache:</strong> Downloaded study PDFs are stored locally in the application's private storage sandbox on your device.
                </div>
              </li>
            </ul>
          </section>

          {/* Section 2 */}
          <section className="space-y-4 pt-4 border-t border-stone-100">
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-stone-900 flex items-baseline gap-2">
              <span className="text-emerald-800 font-sans text-lg">2.</span>
              <span>How We Use Your Information</span>
            </h2>
            <ul className="space-y-2.5 text-stone-700 text-sm sm:text-base leading-relaxed pl-1">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-emerald-700 mt-1 shrink-0" />
                <span>To authenticate and maintain your student account.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-emerald-700 mt-1 shrink-0" />
                <span>To display study notes, curriculum references, and curated lectures.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-emerald-700 mt-1 shrink-0" />
                <span>To send academic announcements and syllabus notifications.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-emerald-700 mt-1 shrink-0" />
                <span>To verify enrolled student access to restricted academic materials.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-emerald-700 mt-1 shrink-0" />
                <span>To diagnose technical crashes and enhance app reliability.</span>
              </li>
            </ul>
          </section>

          {/* Section 3 */}
          <section className="space-y-4 pt-4 border-t border-stone-100">
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-stone-900 flex items-baseline gap-2">
              <span className="text-emerald-800 font-sans text-lg">3.</span>
              <span>Third-Party Services</span>
            </h2>
            <p className="text-sm sm:text-base text-stone-700 leading-relaxed">
              We utilize trusted cloud infrastructure providers strictly for app functionality:
            </p>
            <ul className="space-y-2.5 text-stone-700 text-sm sm:text-base leading-relaxed pl-1">
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-700 mt-2.5 shrink-0" />
                <div>
                  <strong className="text-stone-900">Google Firebase:</strong> Authentication, Cloud Firestore, Cloud Storage, Crashlytics, and FCM.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-700 mt-2.5 shrink-0" />
                <div>
                  <strong className="text-stone-900">Cloudflare Workers:</strong> Secure authorized media routing.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-700 mt-2.5 shrink-0" />
                <div>
                  <strong className="text-stone-900">YouTube:</strong> Embedded lecture video playback.
                </div>
              </li>
            </ul>
            <p className="text-sm sm:text-base text-stone-800 font-medium bg-emerald-50/70 border border-emerald-100 rounded-lg p-3.5 leading-relaxed">
              We do not sell, rent, or monetize your personal information to third-party advertisers.
            </p>
          </section>

          {/* Section 4 */}
          <section className="space-y-4 pt-4 border-t border-stone-100">
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-stone-900 flex items-baseline gap-2">
              <span className="text-emerald-800 font-sans text-lg">4.</span>
              <span>Data Security</span>
            </h2>
            <div className="flex items-start gap-3 text-sm sm:text-base text-stone-700 leading-relaxed">
              <Lock className="w-5 h-5 text-emerald-800 shrink-0 mt-0.5" />
              <p>
                All communications between the App and our backend services are encrypted in transit using industry-standard Transport Layer Security (TLS/HTTPS).
              </p>
            </div>
          </section>

          {/* Section 5 */}
          <section className="space-y-4 pt-4 border-t border-stone-100">
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-stone-900 flex items-baseline gap-2">
              <span className="text-emerald-800 font-sans text-lg">5.</span>
              <span>Data Retention &amp; Deletion Rights</span>
            </h2>
            <p className="text-sm sm:text-base text-stone-700 leading-relaxed">
              You may request complete deletion of your account and associated profile information at any time. To request deletion, email us at{' '}
              <a
                href="mailto:aurvedaapp2000@gmail.com?subject=Data%20Deletion%20Request"
                className="font-semibold text-emerald-800 underline hover:text-emerald-900"
              >
                aurvedaapp2000@gmail.com
              </a>{' '}
              with the subject <strong>"Data Deletion Request"</strong>. Your records will be deleted from our active databases within 30 days.
            </p>
          </section>

          {/* Section 6 */}
          <section className="space-y-4 pt-4 border-t border-stone-100">
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-stone-900 flex items-baseline gap-2">
              <span className="text-emerald-800 font-sans text-lg">6.</span>
              <span>Children's Privacy</span>
            </h2>
            <p className="text-sm sm:text-base text-stone-700 leading-relaxed">
              Our App is intended for university students, medical scholars, and adults (aged 18+). We do not knowingly collect personal information from individuals under the age of 13.
            </p>
          </section>

          {/* Section 7 */}
          <section className="space-y-4 pt-4 border-t border-stone-100">
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-stone-900 flex items-baseline gap-2">
              <span className="text-emerald-800 font-sans text-lg">7.</span>
              <span>Contact Us</span>
            </h2>
            <p className="text-sm sm:text-base text-stone-700 leading-relaxed">
              For any privacy or data inquiries, please contact:
            </p>
            <div className="bg-stone-50 border border-stone-200 rounded-xl p-5 space-y-2 text-sm sm:text-base">
              <div className="flex items-center gap-2">
                <span className="font-semibold text-stone-900">Email:</span>
                <a
                  href="mailto:aurvedaapp2000@gmail.com"
                  className="inline-flex items-center gap-1.5 text-emerald-800 hover:text-emerald-900 font-medium underline"
                >
                  <Mail className="w-4 h-4" />
                  <span>aurvedaapp2000@gmail.com</span>
                </a>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-semibold text-stone-900">Developer:</span>
                <span className="text-stone-700">Ayurveda reality Team</span>
              </div>
            </div>
          </section>
        </article>
      </main>

      {/* Minimal Footer */}
      <footer className="border-t border-stone-200 mt-16 py-8 text-center text-xs text-stone-500">
        <div className="max-w-3xl mx-auto px-5">
          <p>© 2026 Ayurveda reality Team. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
