'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function PlansPage() {
  return (
    <div className="bg-white text-black">
      {/* Header */}
      <header className="flex justify-between items-center px-6 py-4 shadow-md">
        <Image src="/images/purple.png" alt="EduQuest Logo" width={120} height={40} />
        <nav className="space-x-4 text-sm">
          <Link href="/school-plans">School & Districts</Link>
          <a className="font-semibold text-purple-600">Plans</a>
          <a href="#">Library</a>
          <button className="px-3 py-1 border border-purple-500 rounded hover:bg-purple-50">Contact us</button>
          <Link href="/join-code" className="px-3 py-1 border border-purple-500 rounded hover:bg-purple-50">Enter code</Link>
          <Link href="/auth/login" className="px-3 py-1 border border-purple-500 rounded hover:bg-purple-50">Login</Link>
          <Link href="/auth/signup" className="px-3 py-1 bg-purple-600 text-white rounded">Sign up</Link>
        </nav>
      </header>

      {/* Hero */}
      <section className="text-center py-16 px-4">
        <h1 className="text-5xl font-bold mb-4">Choose your <span className="text-purple-600">plan</span></h1>
        <p className="text-lg mb-2">Deliver instruction for every grade and every subject</p>
        <p className="text-sm text-gray-600 mb-6">Not a K-12 school or district? Join startups, nonprofits, and Fortune 500 companies using <span className="text-purple-600 underline">Corporate Plans</span>.</p>
        <p className="font-medium">Trusted by 3,000+ innovative schools and districts nationwide</p>

        <div className="flex flex-wrap justify-center gap-6 mt-6">
        <Image src="/images/lg1.png" alt="School District Logo 1" width={300} height={300} />
        <Image src="/images/lg2.png" alt="School District Logo 2" width={300} height={300} />
        <Image src="/images/lg3.png" alt="School District Logo 3" width={300} height={300} />
        <Image src="/images/lg4.png" alt="School District Logo 4" width={300} height={300} />
        </div>

      </section>

      {/* Plan Cards */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6 px-10 pb-16">
        <div className="border p-6 rounded shadow">
          <h3 className="text-2xl font-bold mb-2">Starter</h3>
          <p className="mb-4 text-gray-700">Start delivering instruction with an individual teacher account.</p>
          <button className="w-full py-3 bg-gray-100 rounded mb-4">Get Started</button>
          <ul className="text-sm space-y-2">
            <li>✔ Limited access to interactive question types</li>
            <li>✔ Limited EduQuest Library access and 20 activity storage limit</li>
          </ul>
        </div>

        <div className="border p-6 rounded shadow bg-purple-50">
          <h3 className="text-2xl font-bold mb-2">School and District</h3>
          <p className="mb-4 text-gray-700">Unlimited access + collaboration, integration, and test prep upgrades.</p>
          <button className="w-full py-3 bg-purple-600 text-white rounded mb-4">Request a quote</button>
          <ul className="text-sm space-y-2">
            <li>✔ Everything with Starter, plus:</li>
            <li>➕ Unlimited access to question types, storage, and premium content</li>
            <li>➕ Interactive video, passages, lessons, assessments</li>
            <li>➕ Accommodations for all learners</li>
            <li>➕ LMS, LTI, and rostering integration</li>
            <li>➕ AI features, tagging, reporting & security</li>
          </ul>
        </div>
      </section>

      {/* Plan Comparison */}
      <section className="px-10 pb-16">
        <h2 className="text-3xl font-bold mb-6">Compare <span className="text-purple-600">plans & features</span></h2>
        <div className="overflow-x-auto">
          <table className="table-auto w-full border text-sm">
            <thead>
              <tr className="bg-gray-100 text-left">
                <th className="p-3">Features</th>
                <th className="p-3">Starter</th>
                <th className="p-3">Schools & Districts</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t">
                <td className="p-3">Library Access</td>
                <td className="p-3">Limited</td>
                <td className="p-3">✔</td>
              </tr>
              <tr className="border-t">
                <td className="p-3">AI Tools</td>
                <td className="p-3">—</td>
                <td className="p-3">✔</td>
              </tr>
              <tr className="border-t">
                <td className="p-3">Interactive Lessons</td>
                <td className="p-3">—</td>
                <td className="p-3">✔</td>
              </tr>
              <tr className="border-t">
                <td className="p-3">Data Insights</td>
                <td className="p-3">—</td>
                <td className="p-3">✔</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-purple-50 px-10 py-16">
        <h2 className="text-3xl font-bold mb-6">FAQs</h2>
        <ul className="space-y-4 text-sm">
          <li>➤ Can I purchase a plan with my ESSA, ESSER, EANS, or Title 1 funds?</li>
          <li>➤ What’s the difference between EduQuest Starter and EduQuest for Schools and Districts?</li>
          <li>➤ What if my teachers already paid for their own plans?</li>
        </ul>
        <p className="mt-4">More questions? Check out our <a className="text-purple-600 underline" href="#">Help Center</a>.</p>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-br from-purple-900 to-purple-600 text-white text-center py-16 px-10 rounded-t-3xl">
        <h2 className="text-3xl font-bold mb-4">Start planning in seconds. Not weekends.</h2>
        <div className="flex justify-center gap-4 mt-6">
          <Link href="/auth/signup" className="bg-yellow-400 px-6 py-3 rounded text-black font-semibold">Sign up for free</Link>
          <Link href="/admin-info" className="bg-white text-purple-700 px-6 py-3 rounded font-semibold">Learn more</Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-8 text-sm text-black border-t mt-10">
        <div>
          <h4 className="font-semibold mb-2">EduQuest</h4>
          <ul>
            <li>The EduQuest Blog</li>
            <li>Teacher Resources</li>
            <li>Certified Educators</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Support</h4>
          <ul>
            <li>Help Center</li>
            <li>Contact Support</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Products</h4>
          <ul>
            <li>Worksheets</li>
            <li>EduQuest</li>
            <li>Flashcards</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Download</h4>
          <ul>
            <li>Google Play</li>
            <li>App Store</li>
          </ul>
        </div>
      </footer>
    </div>
  );
}
