'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

// Template Data
const templates = [
  {
    title: 'Daily Check-in',
    plays: '635k plays',
    questions: '4 Qs',
    image: '/images/templates/1.png',
  },
  {
    title: 'Gratitude Lesson - SEL',
    plays: '74k plays',
    questions: '10 Slides',
    image: '/images/templates/2.png',
  },
  {
    title: 'Math: 6th Grade',
    plays: '164k plays',
    questions: '24 Qs',
    image: '/images/templates/3.png',
  },
  {
    title: 'Science: 3rd Grade',
    plays: '88k plays',
    questions: '11 Qs',
    image: '/images/templates/4.png',
  },
  {
    title: 'Math: 3rd Grade',
    plays: '150k plays',
    questions: '10 Qs',
    image: '/images/templates/5.png',
  },
  {
    title: 'Christopher Columbus',
    plays: '380 plays',
    questions: '20 Qs',
    image: '/images/templates/6.png',
  },
  {
    title: 'Social Studies: Test 7',
    plays: '2k plays',
    questions: '10 Qs',
    image: '/images/templates/7.jpg',
  },
  {
    title: 'International Conferences',
    plays: '704 plays',
    questions: '18 Slides',
    image: '/images/templates/10.gif',
  },
  {
    title: 'Outdoor Safety Overview',
    plays: '1k plays',
    questions: '19 Slides',
    image: '/images/templates/11.jpg',
  },
  {
    title: 'Sports Quiz',
    plays: '332 plays',
    questions: '20 Qs',
    image: '/images/templates/12.jpg',
  },
  {
    title: 'Basketball History',
    plays: '117 plays',
    questions: '10 Qs',
    image: '/images/templates/basketball.jpg',
  },
  {
    title: 'Volleyball Rules',
    plays: '11k plays',
    questions: '20 Qs',
    image: '/images/templates/volleball.png',
  },
];

export default function DashboardPage() {
  const [code, setCode] = useState('');

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4 bg-white shadow">
        <div className="flex items-center space-x-4">
          <Image src="/images/purple.png" alt="Logo" width={120} height={40} />
          <input
            type="text"
            placeholder="Find a quiz"
            className="px-4 py-2 border rounded bg-gray-100 text-black"
          />
        </div>
        <nav className="flex items-center space-x-4 text-black">
          <span className="font-semibold">Home</span>
          <Link href="/auth/login">Activity</Link>
          <Link href="/auth/login">Classes</Link>
          <Link href="/auth/login">Flashcards</Link>
          <Link href="/auth/login" className="px-3 py-1 bg-gray-100 rounded">Log in</Link>
          <Link href="/auth/signup" className="px-3 py-1 bg-purple-600 text-white rounded">Sign up</Link>
        </nav>
      </header>

      {/* Join Code Section */}
      <section className="p-6">
        <div className="bg-white shadow rounded p-6 text-center">
          <h2 className="text-xl font-bold text-black mb-4">Enter a join code</h2>
          <div className="flex justify-center">
            <input
              type="text"
              placeholder="Enter a join code"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              className="px-4 py-2 border rounded-l w-80 text-black"
            />
            <button className="px-4 py-2 bg-purple-600 text-white rounded-r">Join</button>
          </div>
        </div>
      </section>

      {/* Templates */}
      <section className="p-6">
        <h3 className="text-lg font-semibold mb-4 text-black">⭐ Templates</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {templates.map((template, i) => (
            <div key={i} className="bg-white shadow rounded p-4 flex flex-col items-start">
              <img
                src={template.image}
                alt={template.title}
                className="w-full h-32 object-cover mb-2 rounded"
              />
              <h4 className="font-semibold text-black">{template.title}</h4>
              <p className="text-black text-sm">
                {template.plays} • {template.questions}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white text-black px-6 py-8 grid grid-cols-2 md:grid-cols-4 gap-8">
        <div>
          <h4 className="font-semibold">Mathematics</h4>
          <ul className="text-sm space-y-1">
            <li>Algebra</li>
            <li>Probability and Statistics</li>
            <li>Arithmetic</li>
            <li>Trigonometry</li>
            <li>Calculus</li>
            <li>Geometry</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold">Science</h4>
          <ul className="text-sm space-y-1">
            <li>Physics</li>
            <li>Chemistry</li>
            <li>Biology</li>
            <li>Measurement</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold">Social Studies</h4>
          <ul className="text-sm space-y-1">
            <li>History</li>
            <li>Geography</li>
            <li>Economics</li>
            <li>Civics</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold">Support</h4>
          <ul className="text-sm space-y-1">
            <li>Create a quiz</li>
            <li>Create a lesson</li>
            <li>Join My Quiz</li>
            <li>Login</li>
            <li>Signup</li>
            <li>Search</li>
          </ul>
        </div>
      </footer>
    </div>
  );
}
