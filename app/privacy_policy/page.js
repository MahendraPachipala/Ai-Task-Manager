export default function PrivacyPolicyPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-12 rounded-xl mt-10">
      <div className="max-w-3xl mx-auto space-y-10">
        <header className="mb-10">
          <h1 className="text-4xl font-bold text-white mb-3 tracking-tighter">
            Privacy Policy
          </h1>
          <p className="text-gray-400 text-sm font-medium">
            <strong className="text-gray-300">Last updated:</strong> June 17, 2025
          </p>
        </header>

        <section className="space-y-8">
          <div className="border-l-2 border-purple-500 pl-5">
            <h2 className="text-2xl font-semibold text-white mb-3 tracking-tight">
              1. Information We Collect
            </h2>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start">
                <span className="text-purple-400 mr-3">-</span>
                <span><strong className="text-gray-100">User Input Data:</strong> Tasks, reminders, or prompts entered by you.</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-400 mr-3">-</span>
                <span><strong className="text-gray-100">Calendar Data:</strong> Accessed only with your permission.</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-400 mr-3">-</span>
                <span><strong className="text-gray-100">Usage Data:</strong> Logs and analytics for app performance.</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-400 mr-3">-</span>
                <span><strong className="text-gray-100">Account Info:</strong> Name, email, or login credentials.</span>
              </li>
            </ul>
          </div>

          <div className="border-l-2 border-cyan-500 pl-5">
            <h2 className="text-2xl font-semibold text-white mb-3 tracking-tight">
              2. How We Use Your Data
            </h2>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start">
                <span className="text-cyan-400 mr-3">-</span>
                <span>To convert natural language into structured tasks.</span>
              </li>
              <li className="flex items-start">
                <span className="text-cyan-400 mr-3">-</span>
                <span>To sync tasks with your calendar.</span>
              </li>
              <li className="flex items-start">
                <span className="text-cyan-400 mr-3">-</span>
                <span>To generate personalized schedules.</span>
              </li>
              <li className="flex items-start">
                <span className="text-cyan-400 mr-3">-</span>
                <span>To improve AI model accuracy and experience.</span>
              </li>
            </ul>
          </div>

          <div className="border-l-2 border-pink-500 pl-5">
            <h2 className="text-2xl font-semibold text-white mb-3 tracking-tight">
              3. Data Sharing
            </h2>
            <p className="text-gray-300 mb-3">
              We <strong className="text-gray-100">do not sell</strong> your data. We share only:
            </p>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start">
                <span className="text-pink-400 mr-3">-</span>
                <span>With trusted APIs (e.g., Google Calendar), only with your consent.</span>
              </li>
              <li className="flex items-start">
                <span className="text-pink-400 mr-3">-</span>
                <span>For legal obligations, if required.</span>
              </li>
            </ul>
          </div>

          <div className="border-l-2 border-emerald-500 pl-5">
            <h2 className="text-2xl font-semibold text-white mb-3 tracking-tight">
              4. Data Security
            </h2>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start">
                <span className="text-emerald-400 mr-3">-</span>
                <span>Data encryption and secure storage.</span>
              </li>
              <li className="flex items-start">
                <span className="text-emerald-400 mr-3">-</span>
                <span>OAuth2 and HTTPS usage for safe communication.</span>
              </li>
              <li className="flex items-start">
                <span className="text-emerald-400 mr-3">-</span>
                <span>Restricted access to sensitive data.</span>
              </li>
            </ul>
          </div>

          <div className="border-l-2 border-amber-500 pl-5">
            <h2 className="text-2xl font-semibold text-white mb-3 tracking-tight">
              5. Your Rights
            </h2>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start">
                <span className="text-amber-400 mr-3">-</span>
                <span>View, edit, or delete your stored data.</span>
              </li>
              <li className="flex items-start">
                <span className="text-amber-400 mr-3">-</span>
                <span>Revoke calendar access at any time.</span>
              </li>
              <li className="flex items-start">
                <span className="text-amber-400 mr-3">-</span>
                <span>Contact us for data-related concerns.</span>
              </li>
            </ul>
          </div>

          <div className="border-l-2 border-indigo-500 pl-5">
            <h2 className="text-2xl font-semibold text-white mb-3 tracking-tight">
              6. Third-Party Services
            </h2>
            <p className="text-gray-300">
              We integrate with services like Google Calendar. Their privacy policies apply separately.
            </p>
          </div>

          <div className="border-l-2 border-red-500 pl-5">
            <h2 className="text-2xl font-semibold text-white mb-3 tracking-tight">
              7. Changes to This Policy
            </h2>
            <p className="text-gray-300">
              We may update this policy. Material changes will be communicated through the app or email.
            </p>
          </div>

          <div className="border-l-2 border-violet-500 pl-5">
            <h2 className="text-2xl font-semibold text-white mb-3 tracking-tight">
              8. Contact Us
            </h2>
            <p className="text-gray-300">
              For any privacy-related questions, contact us at:{" "}
              <a 
                href="mailto:mahendrapachipala123@gmail.com" 
                className="text-purple-400 hover:text-purple-300 transition-colors"
              >
                mahendrapachipala123@gmail.com
              </a>
            </p>
          </div>
        </section>

        <footer className="text-center text-gray-500 text-sm mt-14 pt-8 border-t border-gray-800">
          &copy; 2025 AI Task Manager. All rights reserved.
        </footer>
      </div>
    </main>
  );
}