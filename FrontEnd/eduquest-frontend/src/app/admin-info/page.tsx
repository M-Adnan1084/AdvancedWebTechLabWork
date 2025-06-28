'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
const testimonials = [
  {
    name: 'Melissa Oberembt',
    title: 'High School Special Education Teacher',
    quote:
      'One of my students who has an IEP in the area of behavior often refuses to practice or participate in class. However, anytime we play Quizizz ... he engages 100% and is reaching proficiency on those math standards.',
    image: '/images/testimonial1.jpg'
  },
  {
    name: 'Lisa Anderson',
    title: 'Sr. Manager of Academic Instructional Technology',
    quote:
      'I can’t express how valuable it has been in keeping students engaged in their learning whether through instructor paced, individual/team quiz, or as a homework assignment to review together the next day!',
    image: '/images/testimonial2.jpg'
  }
];

export default function AdminInfoPage() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const current = testimonials[index];

  return (
    <div className="bg-white py-10 px-4 md:px-16 grid md:grid-cols-2 gap-10 items-start min-h-screen">
      {/* Left section */}
      <div>
        <h1 className="text-4xl font-bold leading-tight text-gray-900 mb-4">
          Unlock the fastest path to <br /> grade level instruction.
        </h1>
        <p className="text-gray-600 mb-6">
          Scaffolding up without watering down is easier said than done. Let’s see what we can do together:
        </p>
        <ul className="text-gray-700 space-y-2 mb-6 list-disc list-inside">
          <li>
            Enable data-driven instruction with unlimited access to AI, every question type, every resource format, and accompanying reporting.
          </li>
          <li>
            Differentiate with accommodations and new supports that deliver a personalized version of each resource to each student.
          </li>
          <li>
            Help teachers find content that’s aligned to your standards and mapped to your curriculum.
          </li>
          <li>
            Streamline your tech budget and get the integrations you need to keep everything in one place for teachers, students, and IT.
          </li>
        </ul>

        <h3 className="text-lg font-semibold text-gray-900 mb-2">
          Trusted by teachers in 90% of U.S. Schools and 150+ countries
        </h3>

        <div className="bg-gray-100 border border-gray-200 rounded-lg p-4 flex items-start gap-4 mb-4">
          <Image
            src={current.image}
            alt={current.name}
            width={50}
            height={50}
            className="rounded-full"
          />
          <div>
            <h4 className="font-semibold text-sm text-gray-800">{current.name}</h4>
            <p className="text-xs text-gray-600 mb-1">{current.title}</p>
            <p className="text-sm text-gray-800">"{current.quote}"</p>
          </div>
        </div>

        <div className="flex flex-wrap gap-4">
          <Image src="/images/1.webp" alt="badge" width={60} height={60} />
          <Image src="/images/2.webp" alt="badge" width={60} height={60} />
          <Image src="/images/3.webp" alt="badge" width={60} height={60} />
          <Image src="/images/4.webp" alt="badge" width={60} height={60} />
          <Image src="/images/5.webp" alt="badge" width={60} height={60} />
          <Image src="/images/6.webp" alt="badge" width={60} height={60} />
          <Image src="/images/7.webp" alt="badge" width={60} height={60} />
          <Image src="/images/8.webp" alt="badge" width={60} height={60} />
        </div>
      </div>

      {/* Right section */}
      <div className="bg-white p-6 rounded-xl shadow-lg border w-full max-w-lg mx-auto">
        <h3 className="text-lg font-bold mb-4 text-center">Hear from us within 10 minutes!</h3>
        <form className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <input type="text" placeholder="First name*" className="border p-2 rounded" required />
            <input type="text" placeholder="Last name*" className="border p-2 rounded" required />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <input type="email" placeholder="Work email address*" className="border p-2 rounded" required />
            <input type="tel" placeholder="Your cell phone number*" className="border p-2 rounded" required />
          </div>
          <select className="border p-2 rounded w-full" required>
            <option value="">Select Country*</option>
            <option value="India">India</option>
            <option value="USA">USA</option>
            <option value="UK">UK</option>
          </select>
          <select className="border p-2 rounded w-full" required>
            <option value="">Which of the following best describes your role?*</option>
            <option value="teacher">Teacher</option>
            <option value="admin">Admin</option>
            <option value="other">Other</option>
          </select>
          <button className="w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-700 transition">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
