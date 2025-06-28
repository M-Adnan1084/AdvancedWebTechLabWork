'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import TestimonialCarousel from '../Components/TestimonialCarousel';

export default function LandingPage() {
  return (
    <main className="bg-white text-gray-900">
      {/* Header */}
      <header className="flex justify-between items-center px-6 py-4 shadow-md sticky top-0 bg-white z-10">
        <h1 className="text-2xl font-bold text-blue-600">EduQuest</h1>
        <nav className="space-x-8 hidden md:flex">
          <Link href="/school-plans">School & Plans</Link>
          <Link href="/plans">Plans</Link>
          <a href="#" className="hover:text-blue-600">Library</a>
        </nav>
        <div className="space-x-2">
          <Link href="/auth/login" className="border border-gray-600 px-4 py-1 rounded">Log In</Link>
          <Link href="/auth/signup" className="font-bold text-blue-600">Sign Up</Link>
          <Link href="/join-code" className="bg-blue-600 text-white px-4 py-1 rounded">Enter Code</Link>


        </div>
      </header>

      {/* Hero Section with Side Images */}
      <section className="relative flex items-center justify-center py-24 bg-white overflow-hidden">
        <div className="absolute left-0 top-0 h-full w-1/3 hidden md:block">
          <Image src="/images/left.jpg" alt="Hero Left" layout="fill" objectFit="cover" />
        </div>
        <div className="absolute right-0 top-0 h-full w-1/3 hidden md:block">
          <Image src="/images/right.jpg" alt="Hero Right" layout="fill" objectFit="cover" />
        </div>
        <div className="relative z-10 text-center max-w-2xl px-4">
          <h2 className="text-lg text-gray-700">Introducing <span className="font-bold text-purple-500">Instructional Suite</span></h2>
          <h1 className="text-3xl md:text-5xl font-bold mt-2 mb-4">“I had no idea EduQuest could do that.”</h1>
          <p className="text-gray-600 mb-6">Create and deliver bell-to-bell curriculum resources that meet the needs of every student.</p>
          <div className="flex justify-center space-x-4 mb-6 flex-wrap">
            <Link href="/auth/signup"className="border px-6 py-2 rounded shadow font-bold bg-white">TEACHERS<br /><span className="text-blue-600">Sign up For Free&gt;</span></Link>
            <Link href="/admin-info" className="border px-6 py-2 rounded shadow font-bold">
              ADMINS<br /><span className="text-blue-600">Learn More&gt;</span></Link>


          </div>
          <section className="bg-white py-10">
  <div className="max-w-6xl mx-auto px-4">
    <h3 className="text-center text-gray-700 mb-6 text-lg font-semibold">
      Trusted by schools, organizations, and educators globally
    </h3>
    <div className="flex justify-center">
      <img
        src="/images/certificate.png"
        alt="Certification Logos"
        className="w-full max-w-5xl h-auto object-contain"
      />
    </div>
  </div>
</section>

          <p className="text-gray-500 text-sm">Trusted by teachers in 94% of U.S. schools and 185+ countries.</p>
        </div>
      </section>

      {/* Feature Section */}
      <section className="px-6 py-20 bg-gray-50 space-y-20">
        {/* Step 1 */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-blue-600 text-3xl font-bold mb-2">01</h3>
            <h4 className="text-xl font-semibold mb-2">Adjust anything in your curriculum</h4>
            <p className="text-gray-600">Start from AI or your own content. Instant editability, wherever you want it.</p>
          </div>
          <video controls className="w-full rounded shadow"
            autoPlay
            muted
            loop
          >
            <source src="/videos/Adapt_Updated_V2.mp4" type="video/mp4" />
          </video>
        </div>

        {/* Step 2 */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <video controls className="w-full rounded shadow"
            autoPlay
            muted
            loop
          >
            <source src="/videos/Intro_1k_Updated.mp4" type="video/mp4" />
          </video>
          <div>
            <h3 className="text-blue-600 text-3xl font-bold mb-2">02</h3>
            <h4 className="text-xl font-semibold mb-2">Deliver personalized instruction</h4>
            <p className="text-gray-600">Differentiate instantly. EduQuest makes lessons as unique as your students.</p>
          </div>
        </div>

        {/* Step 3 */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-blue-600 text-3xl font-bold mb-2">03</h3>
            <h4 className="text-xl font-semibold mb-2">Get results. Witness joy.</h4>
            <p className="text-gray-600">See what students achieve with feedback tools that work for you.</p>
          </div>
          <video controls className="w-full rounded shadow"
            autoPlay
            muted
            loop
          >
            <source src="/videos/Joy_Updated_V2.mp4" type="video/mp4" />
          </video>
        </div>
      </section>
      <TestimonialCarousel />

      {/* Call to Action */}
      <section className="text-center py-16 bg-white">
        <h2 className="text-2xl font-bold mb-2">Get Started with EduQuest Today</h2>
        <p className="mb-6 text-gray-600">Sign up for free and start engaging your classroom or team instantly.</p>
        <Link href="/auth/signup" className="bg-blue-600 text-white px-6 py-2 rounded">Sign Up</Link>
      </section>


      {/* Footer */}
      <footer className="bg-white px-6 py-12 text-gray-700 text-sm">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h4 className="font-bold text-gray-900 mb-2">Company</h4>
            <ul className="space-y-1">
              <li><a href="#">About</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Press</a></li>
              <li><a href="#">Blog</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-gray-900 mb-2">Solutions</h4>
            <ul className="space-y-1">
              <li><a href="#">K-12</a></li>
              <li><a href="#">Higher Education</a></li>
              <li><a href="#">Business</a></li>
              <li><a href="#">Nonprofits</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-gray-900 mb-2">Support</h4>
            <ul className="space-y-1">
              <li><a href="#">Help Center</a></li>
              <li><a href="#">Community</a></li>
              <li><a href="#">Accessibility</a></li>
              <li><a href="#">Contact Us</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-gray-900 mb-2">Download</h4>
            <div className="flex space-x-4">
              <img src="/images/playstore.jpg" alt="Google Play" className="h-10" />
              <img src="/images/appstore.png" alt="App Store" className="h-10" />
            </div>
          </div>
        </div>
        <div className="text-center border-t pt-4">© 2025 EduQuest. All rights reserved.</div>
      </footer>
    </main>
    
  );
}