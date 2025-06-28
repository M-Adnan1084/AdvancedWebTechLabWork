'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';

const testimonials = [
  {
    quote: 'EduQuest motivates [students], increases confidence, and can help to establish a culture of learning and growing from mistakes.',
    author: 'James Newman, Sr. Manager of Academic Instructional Technology'
  },
  {
    quote: 'I use EduQuest to reinforce and check understanding after we’ve covered a concept pretty thoroughly.',
    author: 'Yvette Switzer, 4th Grade Teacher'
  },
  {
    quote: 'I have students with IEPs, I am able to find lessons catering to their abilities and accommodation while being able to assign other students with more rigorous assessments.',
    author: 'Shalimar Goodwin-Richards, Math Teacher'
  }
];

export default function SchoolAndPlansPage() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-white text-black">
      {/* Header */}
      <header className="flex justify-between items-center px-6 py-4 shadow-md">
        <Image src="/images/purple.png" alt="EduQuest Logo" width={120} height={40} />
        <nav className="space-x-4 text-sm">
          <a className="font-semibold text-purple-600">School & District</a>
          <Link href="/plans">Plans</Link>
          <a href="#" className="hover:underline">Library</a>
          <button className="px-3 py-1 border border-purple-500 rounded hover:bg-purple-50">Contact us</button>
          <button className="px-3 py-1 border border-purple-500 rounded hover:bg-purple-50">Enter code</button>
          <button className="px-3 py-1 border border-purple-500 rounded hover:bg-purple-50">Login</button>
          <button className="px-3 py-1 bg-purple-600 text-white rounded">Sign up</button>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col md:flex-row justify-between items-center px-10 py-16">
        <div className="max-w-xl">
          <h1 className="text-4xl font-bold mb-4 leading-snug">Focus on what matters most when instruction is all in one place</h1>
          <p className="mb-4 text-lg">Deliver instruction that’s relevant for every student and standardize tech across your district.</p>
          <button className="bg-purple-600 text-white px-6 py-3 rounded">Get a Quote</button>
        </div>
        <div className="mt-10 md:mt-0">
          <Image src="/images/hero.png" alt="Hero Graphic" width={600} height={400} />
        </div>
      </section>

      {/* Trusted Logos and Testimonial Quote */}
      <section className="px-10 py-16">
        <h3 className="text-center text-lg font-semibold mb-6">Trusted by teachers at</h3>
        <div className="flex justify-center flex-wrap gap-6 mb-10">
          <Image src="/images/schools.png" alt="School District Logos" width={800} height={100} />
        </div>
        <div className="flex flex-col md:flex-row justify-between items-start gap-8 max-w-6xl mx-auto">
          <blockquote className="text-2xl font-semibold">
            “He came in after missing weeks of reading on a novel and <span className="text-purple-500">cranked out a B on the test.</span>”
          </blockquote>
          <p className="max-w-md text-lg text-gray-700">
            Here is a real conversation from Jana Lew at Shadow Hills High School. She shares how EduQuest’s engaging quizzes helped her students stay on track and succeed, even after missing weeks of classroom instruction.
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="px-10 py-16 bg-gray-50">
        <h2 className="text-3xl font-bold mb-6">One instructional platform, one budget</h2>
        <ul className="space-y-3 text-lg list-disc list-inside">
          <li>Assessments for daily practice or testing</li>
          <li>Teach new skills using lessons</li>
          <li>Make asynchronous learning active with interactive video</li>
          <li>Analyze text or media with passages</li>
          <li>Accelerate teacher planning with AI</li>
        </ul>
      </section>

      {/* Video Section */}
      <section className="px-10 py-16">
        <h3 className="text-2xl font-semibold mb-4">See EduQuest in Action</h3>
        <div className="w-full max-w-4xl mx-auto">
          <video
            className="w-full rounded-lg shadow-md"
            controls
            autoPlay
            muted
            loop
          >
            <source src="/videos/Untitled_Project.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </section>

      {/* Slidable Testimonials */}
      <section className="px-10 py-16">
        <h3 className="text-2xl font-semibold mb-6">Hear from other schools</h3>
        <div className="bg-white shadow-md rounded p-6 max-w-3xl mx-auto transition duration-500 ease-in-out">
          <p className="text-sm italic mb-4">"{testimonials[index].quote}"</p>
          <p className="font-semibold">{testimonials[index].author}</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 py-10 px-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-sm">
        <div>
          <h4 className="font-semibold mb-2">EduQuest</h4>
          <ul className="space-y-1">
            <li>Teacher Resources</li>
            <li>Certified Educators</li>
            <li>Privacy Center</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Support</h4>
          <ul className="space-y-1">
            <li>Help Center</li>
            <li>Accessibility</li>
            <li>Contact Support</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Products</h4>
          <ul className="space-y-1">
            <li>Worksheets</li>
            <li>Quizzes</li>
            <li>Flashcards</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Download</h4>
          <ul className="space-y-1">
            <li>App Store</li>
            <li>Google Play</li>
          </ul>
        </div>
      </footer>
    </div>
  );
}