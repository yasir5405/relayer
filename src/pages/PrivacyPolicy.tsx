import {
  IconCalendarEvent,
  IconMapPin,
  IconMail,
  IconGlobe,
} from "@tabler/icons-react";

const PrivacyPolicy = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const sections = [
    { id: "s1", title: "Information We Collect" },
    { id: "s2", title: "How We Use Your Data" },
    { id: "s3", title: "Data Storage & Security" },
    { id: "s4", title: "Sharing & Disclosure" },
    { id: "s5", title: "Cookies & Tracking" },
    { id: "s6", title: "Your Rights" },
    { id: "s7", title: "Data Retention" },
    { id: "s8", title: "Children's Privacy" },
    { id: "s9", title: "Changes to This Policy" },
    { id: "s10", title: "Contact Us" },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 md:py-20 text-gray-800 dark:text-gray-200">
      {/* ── Hero ── */}
      <header className="mb-12 border-b border-gray-200 dark:border-gray-800 pb-12">
        <div className="inline-flex items-center gap-2 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 border border-green-200 dark:border-green-800/50 rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
          Legal
        </div>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 dark:text-white mb-6">
          Privacy Policy
        </h1>
        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
          <span className="flex items-center gap-1.5">
            <IconCalendarEvent size={16} /> Effective: 4 April 2025
          </span>
          <span className="flex items-center gap-1.5">
            <IconCalendarEvent size={16} /> Updated: 4 April 2026
          </span>
          <span className="flex items-center gap-1.5">
            <IconMapPin size={16} /> India
          </span>
        </div>
      </header>

      {/* ── Intro ── */}
      <div className="bg-gray-50 border-l-4 border-green-500 border border-gray-200 dark:bg-gray-900 dark:border-gray-800 rounded-r-xl p-6 mb-12 text-gray-700 dark:text-gray-300 leading-relaxed md:text-lg">
        Sumptuo ("we", "our", or "us") operates{" "}
        <strong className="text-gray-900 dark:text-white font-medium">
          sumptuo.app
        </strong>
        , a privacy-first personal finance platform for the Indian market. This
        policy explains how we collect, use, and protect your personal
        information. By using Sumptuo, you agree to the practices described
        here.
      </div>

      {/* ── Table of Contents ── */}
      <div className="bg-white dark:bg-[#0a0a0a] border border-gray-200 dark:border-gray-800 rounded-xl p-6 md:p-8 mb-16 shadow-sm">
        <div className="text-xs tracking-[0.1em] uppercase text-gray-400 font-bold mb-6">
          Table of Contents
        </div>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
          {sections.map((item, i) => (
            <li key={item.id} className="flex items-start gap-3">
              <span className="text-green-600 dark:text-green-500 font-semibold text-sm min-w-[24px] mt-0.5">
                {String(i + 1).padStart(2, "0")}
              </span>
              <button
                className="text-left text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-500 transition-colors"
                onClick={() => scrollTo(item.id)}
              >
                {item.title}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* ── S1: Information We Collect ── */}
      <section id="s1" className="mb-16 scroll-mt-24">
        <div className="flex items-center gap-4 mb-6">
          <div className="flex-shrink-0 w-10 h-10 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-500 border border-green-200 dark:border-green-800/50 rounded-lg flex items-center justify-center font-bold text-sm">
            01
          </div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Information We Collect
          </h2>
        </div>
        <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
          We collect only what is necessary to provide a secure financial
          tracking experience. We do{" "}
          <strong className="text-gray-900 dark:text-white font-medium">
            not
          </strong>{" "}
          sell your data — ever.
        </p>
        <div className="border border-gray-200 dark:border-gray-800 rounded-xl overflow-hidden mb-6 flex flex-col shadow-sm">
          {[
            [
              "Account Data",
              "Name, email address, and a hashed password when you register.",
            ],
            [
              "Financial Data",
              "Transactions, budgets, categories, and notes you manually enter.",
            ],
            [
              "Device & Usage",
              "Browser type, OS, IP address, pages visited, and session timestamps for security and analytics.",
            ],
            [
              "Communications",
              "Emails you send us for support and our responses.",
            ],
          ].map(([k, v], idx) => (
            <div
              key={k}
              className={`grid grid-cols-1 md:grid-cols-3 ${idx !== 0 ? "border-t border-gray-200 dark:border-gray-800" : ""}`}
            >
              <div className="bg-gray-50 dark:bg-gray-900/50 font-semibold text-gray-900 dark:text-gray-100 p-4 border-b md:border-b-0 md:border-r border-gray-200 dark:border-gray-800 text-sm">
                {k}
              </div>
              <div className="p-4 md:col-span-2 text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                {v}
              </div>
            </div>
          ))}
        </div>
        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
          We do{" "}
          <strong className="text-gray-900 dark:text-white font-medium">
            not
          </strong>{" "}
          collect bank credentials, UPI PINs, or any banking login information.
          Sumptuo is a manual-entry platform — your bank never connects to us
          directly.
        </p>
      </section>

      {/* ── S2: How We Use Your Data ── */}
      <section id="s2" className="mb-16 scroll-mt-24">
        <div className="flex items-center gap-4 mb-6">
          <div className="flex-shrink-0 w-10 h-10 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-500 border border-green-200 dark:border-green-800/50 rounded-lg flex items-center justify-center font-bold text-sm">
            02
          </div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            How We Use Your Data
          </h2>
        </div>
        <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
          Your data is used exclusively to operate and improve Sumptuo:
        </p>
        <ul className="list-disc ml-6 space-y-2 text-gray-600 dark:text-gray-400 marker:text-green-500 mb-6">
          <li>Authenticate your identity and secure your account</li>
          <li>Display your transactions, budgets, and financial summaries</li>
          <li>
            Send transactional emails (OTP, password reset, account alerts) via
            our email provider
          </li>
          <li>
            Diagnose bugs, monitor service health, and improve performance
          </li>
          <li>Comply with applicable Indian laws and regulations</li>
        </ul>
        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
          We do{" "}
          <strong className="text-gray-900 dark:text-white font-medium">
            not
          </strong>{" "}
          use your financial data for advertising, profiling, or any purpose
          beyond operating the service you signed up for.
        </p>
      </section>

      {/* ── S3: Data Storage & Security ── */}
      <section id="s3" className="mb-16 scroll-mt-24">
        <div className="flex items-center gap-4 mb-6">
          <div className="flex-shrink-0 w-10 h-10 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-500 border border-green-200 dark:border-green-800/50 rounded-lg flex items-center justify-center font-bold text-sm">
            03
          </div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Data Storage & Security
          </h2>
        </div>
        <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
          Your data is stored in secure, access-controlled databases hosted on
          Supabase (PostgreSQL). We apply industry-standard protections
          including:
        </p>
        <ul className="list-disc ml-6 space-y-2 text-gray-600 dark:text-gray-400 marker:text-green-500 mb-6">
          <li>
            <strong className="text-gray-900 dark:text-white font-medium">
              bcrypt password hashing
            </strong>{" "}
            — we never store plaintext credentials
          </li>
          <li>All data transmitted over HTTPS / TLS 1.2+</li>
          <li>
            JWT-based session tokens with short expiry and secure refresh
            mechanisms
          </li>
          <li>
            Row-level security (RLS) policies so users can only access their own
            data
          </li>
          <li>Regular dependency audits and security updates</li>
        </ul>
        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
          Despite these measures, no system is immune to all breaches. We
          encourage you to use a strong, unique password and enable two-factor
          authentication when available.
        </p>
      </section>

      {/* ── S4: Sharing & Disclosure ── */}
      <section id="s4" className="mb-16 scroll-mt-24">
        <div className="flex items-center gap-4 mb-6">
          <div className="flex-shrink-0 w-10 h-10 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-500 border border-green-200 dark:border-green-800/50 rounded-lg flex items-center justify-center font-bold text-sm">
            04
          </div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Sharing & Disclosure
          </h2>
        </div>
        <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
          We do not sell, rent, or trade your personal information. Data is
          shared only in these limited circumstances:
        </p>
        <div className="border border-gray-200 dark:border-gray-800 rounded-xl overflow-hidden shadow-sm flex flex-col">
          {[
            [
              "Service Providers",
              "Supabase (database hosting), Resend (transactional email). Bound by data processing agreements.",
            ],
            [
              "Legal Requirements",
              "If required by Indian law or court order, we disclose the minimum information necessary.",
            ],
            [
              "Business Transfer",
              "In a merger or acquisition, your data may transfer under equivalent privacy terms.",
            ],
            [
              "With Your Consent",
              "Any other sharing occurs only with your explicit authorisation.",
            ],
          ].map(([k, v], idx) => (
            <div
              key={k}
              className={`grid grid-cols-1 md:grid-cols-3 ${idx !== 0 ? "border-t border-gray-200 dark:border-gray-800" : ""}`}
            >
              <div className="bg-gray-50 dark:bg-gray-900/50 font-semibold text-gray-900 dark:text-gray-100 p-4 border-b md:border-b-0 md:border-r border-gray-200 dark:border-gray-800 text-sm">
                {k}
              </div>
              <div className="p-4 md:col-span-2 text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                {v}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── S5: Cookies & Tracking ── */}
      <section id="s5" className="mb-16 scroll-mt-24">
        <div className="flex items-center gap-4 mb-6">
          <div className="flex-shrink-0 w-10 h-10 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-500 border border-green-200 dark:border-green-800/50 rounded-lg flex items-center justify-center font-bold text-sm">
            05
          </div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Cookies & Tracking
          </h2>
        </div>
        <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
          Sumptuo uses minimal cookies and similar technologies:
        </p>
        <ul className="list-disc ml-6 space-y-2 text-gray-600 dark:text-gray-400 marker:text-green-500 mb-6">
          <li>
            <strong className="text-gray-900 dark:text-white font-medium">
              Essential cookies
            </strong>{" "}
            — required for authentication and session management
          </li>
          <li>
            <strong className="text-gray-900 dark:text-white font-medium">
              Analytics
            </strong>{" "}
            — anonymised, aggregated usage metrics with no cross-site tracking
          </li>
          <li>
            <strong className="text-gray-900 dark:text-white font-medium">
              No third-party ad cookies
            </strong>{" "}
            — advertising networks cannot place cookies on our platform
          </li>
        </ul>
        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
          You can disable cookies in your browser settings; however, essential
          cookies are required for the app to function.
        </p>
      </section>

      {/* ── S6: Your Rights ── */}
      <section id="s6" className="mb-16 scroll-mt-24">
        <div className="flex items-center gap-4 mb-6">
          <div className="flex-shrink-0 w-10 h-10 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-500 border border-green-200 dark:border-green-800/50 rounded-lg flex items-center justify-center font-bold text-sm">
            06
          </div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Your Rights
          </h2>
        </div>
        <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
          You have the following rights regarding your personal data:
        </p>
        <ul className="list-disc ml-6 space-y-2 text-gray-600 dark:text-gray-400 marker:text-green-500 mb-6">
          <li>
            <strong className="text-gray-900 dark:text-white font-medium">
              Access
            </strong>{" "}
            — request a copy of the personal data we hold about you
          </li>
          <li>
            <strong className="text-gray-900 dark:text-white font-medium">
              Correction
            </strong>{" "}
            — ask us to correct inaccurate or incomplete data
          </li>
          <li>
            <strong className="text-gray-900 dark:text-white font-medium">
              Deletion
            </strong>{" "}
            — request deletion of your account and all associated data
          </li>
          <li>
            <strong className="text-gray-900 dark:text-white font-medium">
              Portability
            </strong>{" "}
            — receive your transaction data in CSV or JSON format
          </li>
          <li>
            <strong className="text-gray-900 dark:text-white font-medium">
              Objection
            </strong>{" "}
            — object to any processing you believe is unlawful
          </li>
        </ul>
        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
          To exercise any of these rights, email{" "}
          <strong className="text-gray-900 dark:text-white font-medium">
            privacy@sumptuo.app
          </strong>
          . We will respond within 30 days.
        </p>
      </section>

      {/* ── S7: Data Retention ── */}
      <section id="s7" className="mb-16 scroll-mt-24">
        <div className="flex items-center gap-4 mb-6">
          <div className="flex-shrink-0 w-10 h-10 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-500 border border-green-200 dark:border-green-800/50 rounded-lg flex items-center justify-center font-bold text-sm">
            07
          </div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Data Retention
          </h2>
        </div>
        <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
          We retain your data for as long as your account is active. Upon
          deletion:
        </p>
        <ul className="list-disc ml-6 space-y-2 text-gray-600 dark:text-gray-400 marker:text-green-500 mb-6">
          <li>
            Profile and financial data permanently deleted within{" "}
            <strong className="text-gray-900 dark:text-white font-medium">
              30 days
            </strong>
          </li>
          <li>
            Anonymised analytics data may be retained indefinitely as it cannot
            identify you
          </li>
          <li>
            Backups purged within{" "}
            <strong className="text-gray-900 dark:text-white font-medium">
              90 days
            </strong>{" "}
            of account deletion
          </li>
          <li>
            Certain records may be retained longer if required by applicable law
          </li>
        </ul>
      </section>

      {/* ── S8: Children's Privacy ── */}
      <section id="s8" className="mb-16 scroll-mt-24">
        <div className="flex items-center gap-4 mb-6">
          <div className="flex-shrink-0 w-10 h-10 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-500 border border-green-200 dark:border-green-800/50 rounded-lg flex items-center justify-center font-bold text-sm">
            08
          </div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Children's Privacy
          </h2>
        </div>
        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
          Sumptuo is not directed at individuals under{" "}
          <strong className="text-gray-900 dark:text-white font-medium">
            18 years of age
          </strong>
          . We do not knowingly collect personal data from minors. If you
          believe a minor has created an account, contact us at{" "}
          <strong className="text-gray-900 dark:text-white font-medium">
            privacy@sumptuo.app
          </strong>{" "}
          and we will promptly delete the account and all associated data.
        </p>
      </section>

      {/* ── S9: Changes to Policy ── */}
      <section id="s9" className="mb-16 scroll-mt-24">
        <div className="flex items-center gap-4 mb-6">
          <div className="flex-shrink-0 w-10 h-10 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-500 border border-green-200 dark:border-green-800/50 rounded-lg flex items-center justify-center font-bold text-sm">
            09
          </div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Changes to This Policy
          </h2>
        </div>
        <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
          When we update this Privacy Policy, we will:
        </p>
        <ul className="list-disc ml-6 space-y-2 text-gray-600 dark:text-gray-400 marker:text-green-500 mb-6">
          <li>Update the "Last updated" date at the top of this page</li>
          <li>
            Send a notification email to all registered users for material
            changes
          </li>
          <li>
            Display an in-app banner for 14 days following any significant
            update
          </li>
        </ul>
        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
          Continued use of Sumptuo after an update constitutes acceptance of the
          revised terms. You may delete your account at any time if you
          disagree.
        </p>
      </section>

      {/* ── S10: Contact Us ── */}
      <section id="s10" className="scroll-mt-24">
        <div className="flex items-center gap-4 mb-6">
          <div className="flex-shrink-0 w-10 h-10 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-500 border border-green-200 dark:border-green-800/50 rounded-lg flex items-center justify-center font-bold text-sm">
            10
          </div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Contact Us
          </h2>
        </div>
        <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
          Questions, concerns, or data requests? We typically respond within 2
          business days.
        </p>

        <div className="bg-gray-50 border border-gray-200 dark:bg-gray-900/50 dark:border-gray-800 rounded-xl p-6 md:p-8 shadow-sm">
          <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-6">
            Sumptuo — Privacy Team
          </h3>
          <div className="space-y-4">
            <div className="flex items-start md:items-center gap-3 text-sm md:text-base text-gray-600 dark:text-gray-300">
              <IconMail className="text-green-500 flex-shrink-0" size={20} />
              <span className="font-medium text-gray-900 dark:text-gray-100 min-w-[130px]">
                Privacy enquiries:
              </span>
              <a
                href="mailto:privacy@sumptuo.app"
                className="text-green-600 dark:text-green-400 hover:underline"
              >
                privacy@sumptuo.app
              </a>
            </div>
            <div className="flex items-start md:items-center gap-3 text-sm md:text-base text-gray-600 dark:text-gray-300">
              <IconMail className="text-green-500 flex-shrink-0" size={20} />
              <span className="font-medium text-gray-900 dark:text-gray-100 min-w-[130px]">
                General support:
              </span>
              <a
                href="mailto:hello@sumptuo.app"
                className="text-green-600 dark:text-green-400 hover:underline"
              >
                hello@sumptuo.app
              </a>
            </div>
            <div className="flex items-start md:items-center gap-3 text-sm md:text-base text-gray-600 dark:text-gray-300">
              <IconGlobe className="text-green-500 flex-shrink-0" size={20} />
              <span className="font-medium text-gray-900 dark:text-gray-100 min-w-[130px]">
                Website:
              </span>
              <a
                href="https://sumptuo.app"
                target="_blank"
                rel="noreferrer"
                className="text-green-600 dark:text-green-400 hover:underline"
              >
                sumptuo.app
              </a>
            </div>
            <div className="flex items-start md:items-center gap-3 text-sm md:text-base text-gray-600 dark:text-gray-300">
              <IconMapPin className="text-green-500 flex-shrink-0" size={20} />
              <span className="font-medium text-gray-900 dark:text-gray-100 min-w-[130px]">
                Jurisdiction:
              </span>
              <span>India, Punjab</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
