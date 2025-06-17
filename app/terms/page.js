import Head from 'next/head';

export default function TermsOfService() {
  return (
    <>
      <Head>
        <title>Terms of Service | AI Task Manager</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="max-w-4xl mx-auto my-10 p-8 rounded-lg shadow-md glassmorphism text-gray-100 font-sans leading-relaxed">
        <h1 className="text-3xl font-bold text-white border-b border-gray-700 pb-4 mb-6">
          Terms of Service
        </h1>

        <p className="text-sm text-gray-400 mb-6">
          <strong>Last updated:</strong> June 17, 2025
        </p>

        <h2 className="text-2xl font-semibold text-gray-200 mt-6 mb-4">
          1. Acceptance of Terms
        </h2>
        <p className="text-gray-300">
          By accessing or using AI Task Manager ("Service"), you agree to be bound by these Terms of Service.
          If you do not agree, please do not use the Service.
        </p>

        <h2 className="text-2xl font-semibold text-gray-200 mt-6 mb-4">
          2. Description of the Service
        </h2>
        <p className="text-gray-300">
          AI Task Manager helps users manage tasks, reminders, and schedules using AI.
          It also allows calendar integration and natural language input for productivity management.
        </p>

        <h2 className="text-2xl font-semibold text-gray-200 mt-6 mb-4">
          3. Eligibility
        </h2>
        <p className="text-gray-300">
          You must be at least 13 years old to use this service. Users under 18 must have parental consent.
        </p>

        <h2 className="text-2xl font-semibold text-gray-200 mt-6 mb-4">
          4. User Responsibilities
        </h2>
        <p className="text-gray-300">
          You agree to use the service responsibly. Do not attempt to harm the system, access other users' data, or violate laws while using the app.
        </p>

        <h2 className="text-2xl font-semibold text-gray-200 mt-6 mb-4">
          5. User Content
        </h2>
        <p className="text-gray-300">
          You retain rights to any data (tasks, events, notes) entered. We use it only to provide and improve the service.
        </p>

        <h2 className="text-2xl font-semibold text-gray-200 mt-6 mb-4">
          6. Account Security
        </h2>
        <p className="text-gray-300">
          You are responsible for maintaining your account credentials. Contact support if you suspect unauthorized access.
        </p>

        <h2 className="text-2xl font-semibold text-gray-200 mt-6 mb-4">
          7. Third-Party Services
        </h2>
        <p className="text-gray-300">
          Our app integrates with third-party APIs like Google Calendar. These services are governed by their own policies.
        </p>

        <h2 className="text-2xl font-semibold text-gray-200 mt-6 mb-4">
          8. Modifications to Service
        </h2>
        <p className="text-gray-300">
          We may modify or discontinue any part of the service at any time without prior notice.
        </p>

        <h2 className="text-2xl font-semibold text-gray-200 mt-6 mb-4">
          9. Termination
        </h2>
        <p className="text-gray-300">
          We reserve the right to suspend or terminate your access if you violate these Terms.
        </p>

        <h2 className="text-2xl font-semibold text-gray-200 mt-6 mb-4">
          10. Disclaimer of Warranties
        </h2>
        <p className="text-gray-300">
          The service is provided "as is" without warranties. We do not guarantee it will always be available, secure, or error-free.
        </p>

        <h2 className="text-2xl font-semibold text-gray-200 mt-6 mb-4">
          11. Limitation of Liability
        </h2>
        <p className="text-gray-300">
          We are not liable for indirect damages from use of the service, including data loss or service interruptions.
        </p>

        <h2 className="text-2xl font-semibold text-gray-200 mt-6 mb-4">
          12. Changes to These Terms
        </h2>
        <p className="text-gray-300">
          We may revise these terms at any time. Updates will be posted here. Continued use means you accept the new terms.
        </p>

        <h2 className="text-2xl font-semibold text-gray-200 mt-6 mb-4">
          13. Contact Us
        </h2>
        <p className="text-gray-300">
          If you have questions, please contact: 
          <a href="mailto:mahendrapachipala123@gmail.com" className="text-blue-400 hover:underline">
            mahendrapachipala123@gmail.com
          </a>
        </p>

        <p className="mt-8 text-sm text-gray-500 text-center">
          &copy; 2025 AI Task Manager. All rights reserved.
        </p>
      </div>
    </>
  );
}