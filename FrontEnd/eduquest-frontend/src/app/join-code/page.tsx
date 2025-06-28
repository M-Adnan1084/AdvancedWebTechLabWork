'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function JoinCodePage() {
  const [code, setCode] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Joining with code: ${code}`);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-purple-800 to-purple-900 text-white">
      {/* Header */}
      <header className="flex justify-between items-center px-6 py-4">
        <h1 className="text-2xl font-bold">EduQuest</h1>
        <div className="space-x-2">
          <button className="bg-purple-700 px-4 py-1 rounded">Go to shop</button>
          <Link href="/dashboard" className="bg-white text-sm px-4 py-1 rounded shadow text-purple-700 hover:bg-gray-100">
            My Dashboard</Link>
        </div>
      </header>

      {/* Join Code Section */}
      <main className="flex flex-col justify-center items-center flex-grow">
        <Image src="/images/ChatGPT Image Jun 20, 2025, 12_36_14 AM.png" alt="Quizizz" width={200} height={60} />
        <form onSubmit={handleSubmit} className="mt-8 bg-purple-700 p-6 rounded-xl shadow-lg w-[400px] flex items-center">
          <input
            type="text"
            placeholder="Enter a join code"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            className="flex-grow px-4 py-2 rounded-l-lg text-gray-800"
          />
          <button type="submit" className="bg-purple-500 px-6 py-2 rounded-r-lg font-semibold">
            Join
          </button>
        </form>
      </main>

      {/* Footer */}
      <footer className="bg-purple-950 text-gray-400 text-sm px-6 py-4">
        <div className="flex justify-between items-center flex-wrap">
          <div className="flex space-x-6">
            <a href="#">Quick links</a>
            <a href="#">Worksheets</a>
            <a href="#">Teacher resources</a>
            <a href="#">Library</a>
          </div>
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <span>© 2025 EduQuest Inc.</span>
            <a href="#">Accessibility</a>
            <a href="#">Terms</a>
            <a href="#">Privacy</a>
            <Image src="/images/app.png" alt="App Store" width={100} height={30} />
            <Image src="/images/payy.png" alt="Google Play" width={100} height={30} />
          </div>
        </div>
      </footer>
    </div>
  );
}