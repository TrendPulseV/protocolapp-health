import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — Protocol",
  description: "Protocol stores all data on your device. No accounts, no cloud, no third parties.",
};

export default function PrivacyPage() {
  const updated = "March 28, 2026";

  return (
    <div className="min-h-screen bg-[#0c1524] text-white">
      {/* Nav */}
      <nav className="border-b border-white/8 py-4 px-6">
        <div className="max-w-3xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <img src="/icon.png" alt="Protocol" width={28} height={28} className="rounded-lg" />
            <span className="text-white font-bold tracking-wide group-hover:text-teal-400 transition-colors">PROTOCOL</span>
          </Link>
          <Link href="/" className="text-slate-400 hover:text-white text-sm transition-colors">
            ← Back to home
          </Link>
        </div>
      </nav>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-6 py-16">
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 bg-teal-500/10 border border-teal-500/25 rounded-full px-4 py-2 mb-6">
            <span className="text-teal-400 text-sm font-medium">🔒 Privacy First</span>
          </div>
          <h1 className="text-5xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-slate-400">Last updated: {updated}</p>
        </div>

        {/* TL;DR */}
        <div className="bg-teal-500/8 border border-teal-500/20 rounded-2xl p-6 mb-12">
          <h2 className="text-teal-400 font-bold text-lg mb-3">The short version</h2>
          <p className="text-slate-300 leading-relaxed">
            Protocol stores all your data on your device using local storage. We collect no personal information,
            operate no servers that receive your health data, and share nothing with third parties.
            There are no accounts, no sign-ups, and no tracking. Your data is yours — completely and permanently.
          </p>
        </div>

        <div className="prose prose-invert max-w-none space-y-10">

          <Section title="1. Overview">
            <p>
              Protocol (&ldquo;the App&rdquo;) is developed by TrendPulse Ventures (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;).
              This Privacy Policy explains how we handle information when you use the Protocol iOS application.
            </p>
            <p>
              The fundamental architecture of Protocol is privacy-preserving by design: all user data is stored
              locally on your device. We have no backend servers that store your health or usage data.
            </p>
          </Section>

          <Section title="2. Information We Do Not Collect">
            <p>We do <strong className="text-white">not</strong> collect, transmit, or store:</p>
            <ul>
              <li>Personal identification information (name, email, phone number)</li>
              <li>Health data, dose logs, or protocol information</li>
              <li>Weight, body measurements, or check-in data</li>
              <li>Photos or progress images</li>
              <li>Location data</li>
              <li>Device identifiers or advertising IDs</li>
              <li>Usage analytics or behavioral data</li>
              <li>Crash reports sent to third-party services</li>
            </ul>
          </Section>

          <Section title="3. Data Storage">
            <p>
              All data you enter into Protocol — including dose logs, protocols, inventory, weight tracking,
              body measurements, check-ins, injection site history, and progress photos — is stored exclusively
              on your device using SQLite local storage. This data never leaves your device unless you
              explicitly choose to export it.
            </p>
            <p>
              Protocol does not use iCloud, third-party cloud storage, or any remote database to store
              your personal or health information.
            </p>
          </Section>

          <Section title="4. Data Export">
            <p>
              The App provides export functionality that allows you to generate CSV files and PDF reports
              of your data. When you choose to export, the resulting file is created locally on your device
              and shared through iOS&rsquo;s native Share Sheet. We do not receive a copy of exported data.
            </p>
            <p>
              If you choose to share exported data via email, AirDrop, or another service, that data is
              handled according to the policies of those services, not ours.
            </p>
          </Section>

          <Section title="5. Notifications">
            <p>
              Protocol may request permission to send local push notifications to remind you of scheduled
              doses. These notifications are generated and delivered entirely on-device by iOS — no
              notification data is sent to our servers. You can disable notifications at any time in
              iOS Settings.
            </p>
          </Section>

          <Section title="6. Biometric Authentication">
            <p>
              Protocol offers an optional Face ID / Touch ID lock feature. Biometric data is handled
              entirely by iOS&rsquo;s LocalAuthentication framework. The App never accesses, stores, or
              transmits your biometric data.
            </p>
          </Section>

          <Section title="7. Third-Party Services">
            <p>
              Protocol does not integrate third-party analytics SDKs (such as Firebase, Amplitude, or
              Mixpanel), advertising networks, or crash reporting services that transmit data to external
              servers.
            </p>
            <p>
              The App is distributed through Apple&rsquo;s App Store. Apple may collect certain data as part
              of the App Store experience, including download and purchase information, subject to
              Apple&rsquo;s own privacy policy.
            </p>
          </Section>

          <Section title="8. Children's Privacy">
            <p>
              Protocol is rated 17+ and is not intended for use by individuals under the age of 17.
              We do not knowingly collect data from minors. Because no data is collected server-side,
              there is no user data for us to delete.
            </p>
          </Section>

          <Section title="9. Data Security">
            <p>
              Because all data is stored locally on your device, security is primarily governed by your
              device&rsquo;s security features — including device passcode, Face ID, and iOS data protection.
              We recommend keeping your device updated and enabling device-level encryption.
            </p>
            <p>
              The optional in-app biometric lock provides an additional layer of protection for the App itself.
            </p>
          </Section>

          <Section title="10. Your Rights">
            <p>
              Since all data is stored locally on your device, you have complete control:
            </p>
            <ul>
              <li><strong className="text-white">Access:</strong> All your data is visible within the App at any time.</li>
              <li><strong className="text-white">Export:</strong> Use the Export feature to download everything as CSV or PDF.</li>
              <li><strong className="text-white">Delete:</strong> Deleting the App from your device removes all associated data permanently.</li>
              <li><strong className="text-white">Portability:</strong> Exported CSV files are standard format, importable into any spreadsheet application.</li>
            </ul>
          </Section>

          <Section title="11. Changes to This Policy">
            <p>
              We may update this Privacy Policy from time to time. Changes will be reflected with an updated
              &ldquo;Last updated&rdquo; date at the top of this page. We encourage you to review this policy periodically.
              Continued use of the App after changes constitutes acceptance of the updated policy.
            </p>
          </Section>

          <Section title="12. Contact">
            <p>
              If you have questions about this Privacy Policy or the App&rsquo;s data practices, contact us at:
            </p>
            <p>
              <a href="mailto:support@protocolapp.health" className="text-teal-400 hover:text-teal-300 transition-colors">
                support@protocolapp.health
              </a>
              <br />
              TrendPulse Ventures<br />
              protocolapp.health
            </p>
          </Section>

        </div>

        {/* Back link */}
        <div className="mt-16 pt-8 border-t border-white/8">
          <Link href="/" className="text-teal-400 hover:text-teal-300 transition-colors text-sm flex items-center gap-2">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5M12 19l-7-7 7-7"/>
            </svg>
            Back to Protocol
          </Link>
        </div>
      </div>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="text-2xl font-bold text-white mb-4">{title}</h2>
      <div className="text-slate-300 leading-relaxed space-y-3 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2 [&_p]:text-slate-300">
        {children}
      </div>
    </div>
  );
}
