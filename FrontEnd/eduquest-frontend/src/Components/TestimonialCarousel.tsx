'use client';

import { useState } from 'react';
import Image from 'next/image';

const testimonials = [
  {
    name: 'Emily Stock',
    title: 'High School Special Education Teacher',
    quote: 'Since we do a lot of real life math skills, I love using pictures as answers to questions so if they have a hard time reading they can just go by the visual.',
    highlight: 'I love using pictures as answers to questions',
    image: '/images/t2.jpg',
    colorClass: 'text-pink-500',
    borderClass: 'border-pink-500'
  },
  {
    name: 'Rhonda Murphy-Johnson',
    title: 'High School English Teacher',
    quote: 'Quizizz is highly engaging and allows me to give immediate feedback, make adjustments to lessons, and motivate my students.',
    highlight: 'Quizizz is highly engaging',
    image: '/images/istockphoto-1135381120-612x612.jpg',
    colorClass: 'text-cyan-500',
    borderClass: 'border-cyan-500'
  },
  {
    name: 'Dody Lehman',
    title: 'High School Teacher',
    quote: 'Quizizz is very motivating for my students because of the game-like format. They are competitive and enjoy keeping track of their rank. The special features such as power ups and 50-50 also help to keep them hooked.',
    highlight: 'Quizizz is very motivating for my students',
    image: '/images/t1.jpg',
    colorClass: 'text-purple-600',
    borderClass: 'border-purple-600'
  },
  {
    name: 'Taylor Brooks',
    title: 'Middle School Math Teacher',
    quote: 'It helps students remain focused and makes learning fun and interactive.',
    highlight: 'learning fun and interactive',
    image: '/images/stock-vector-profile-placeholder-image-gray-silhouette-no-photo-1153673752.jpg',
    colorClass: 'text-green-500',
    borderClass: 'border-green-500'
  },
  {
    name: 'Sarah Hill',
    title: 'Elementary Teacher',
    quote: 'My students are always excited to play and it has helped with test scores.',
    highlight: 'helped with test scores',
    image: '/images/stock-vector-profile-placeholder-image-gray-silhouette-no-photo-1153673752.jpg',
    colorClass: 'text-yellow-500',
    borderClass: 'border-yellow-500'
  },
  {
    name: 'James Carter',
    title: 'Science Teacher',
    quote: 'A great tool to reinforce lessons and engage students in learning.',
    highlight: 'reinforce lessons and engage students',
    image: '/images/stock-vector-profile-placeholder-image-gray-silhouette-no-photo-1153673752.jpg',
    colorClass: 'text-red-500',
    borderClass: 'border-red-500'
  },
  {
    name: 'Amy Tran',
    title: 'Language Arts Instructor',
    quote: 'Interactive sessions with Quizizz make my class more productive and enjoyable.',
    highlight: 'productive and enjoyable',
    image: '/images/stock-vector-profile-placeholder-image-gray-silhouette-no-photo-1153673752.jpg',
    colorClass: 'text-blue-400',
    borderClass: 'border-blue-400'
  },
  {
    name: 'Marcus Lee',
    title: 'STEM Coach',
    quote: 'Gamified assessments reduce anxiety and promote student ownership of learning.',
    highlight: 'student ownership of learning',
    image: '/images/stock-vector-profile-placeholder-image-gray-silhouette-no-photo-1153673752.jpg',
    colorClass: 'text-indigo-500',
    borderClass: 'border-indigo-500'
  },
  {
    name: 'Natalie Chen',
    title: 'Technology Integrationist',
    quote: 'It seamlessly fits into Google Classroom and keeps students highly engaged.',
    highlight: 'keeps students highly engaged',
    image: '/images/stock-vector-profile-placeholder-image-gray-silhouette-no-photo-1153673752.jpg',
    colorClass: 'text-teal-500',
    borderClass: 'border-teal-500'
  },
  {
    name: 'Kevin Morris',
    title: 'AP History Teacher',
    quote: 'I love how easy it is to create and customize content while tracking real-time progress.',
    highlight: 'customize content while tracking real-time progress',
    image: '/images/stock-vector-profile-placeholder-image-gray-silhouette-no-photo-1153673752.jpg',
    colorClass: 'text-orange-500',
    borderClass: 'border-orange-500'
  },
  {
    name: 'Linda Smith',
    title: 'Kindergarten Teacher',
    quote: 'Even my youngest learners respond positively to the visual and interactive design.',
    highlight: 'visual and interactive design',
    image: '/images/stock-vector-profile-placeholder-image-gray-silhouette-no-photo-1153673752.jpg',
    colorClass: 'text-pink-600',
    borderClass: 'border-pink-600'
  },
  {
    name: 'Daniel Roberts',
    title: 'Curriculum Coordinator',
    quote: 'We use Quizizz for professional development too — the feedback and analytics are unmatched.',
    highlight: 'feedback and analytics are unmatched',
    image: '/images/stock-vector-profile-placeholder-image-gray-silhouette-no-photo-1153673752.jpg',
    colorClass: 'text-lime-600',
    borderClass: 'border-lime-600'
  }
];

export default function TestimonialCarousel() {
  const [index, setIndex] = useState(0);
  const visibleCount = 3;
  const maxIndex = Math.ceil(testimonials.length / visibleCount);

  const prev = () => setIndex((prevIndex) => (prevIndex - 1 + maxIndex) % maxIndex);
  const next = () => setIndex((prevIndex) => (prevIndex + 1) % maxIndex);

  const visibleTestimonials = testimonials.slice(
    index * visibleCount,
    index * visibleCount + visibleCount
  );

  return (
    <>
      <section className="bg-white py-16">
        <div className="relative max-w-7xl mx-auto px-4 flex items-center space-x-4">
          <button onClick={prev} className="bg-gray-100 rounded-full p-2 text-xl hover:bg-gray-200">&#8592;</button>
          <div className="flex space-x-4 w-full justify-center">
            {visibleTestimonials.map((t, i) => (
              <div
                key={i}
                className={`rounded-xl border-2 ${t.borderClass} p-6 w-full max-w-sm shadow-md`}
              >
                <div className="flex items-center space-x-4 mb-4">
                  <Image src={t.image} alt={t.name} width={60} height={60} className="rounded-lg" />
                  <div>
                    <h4 className="font-bold text-lg">{t.name}</h4>
                    <p className="text-gray-600 text-sm">{t.title}</p>
                  </div>
                </div>
                <p className="text-gray-700">
                  “{t.quote.replace(t.highlight, '')} <span className={`${t.colorClass} font-medium`}>{t.highlight}</span>.”
                </p>
              </div>
            ))}
          </div>
          <button onClick={next} className="bg-gray-100 rounded-full p-2 text-xl hover:bg-gray-200">&#8594;</button>
        </div>
      </section>

      <section className="bg-[#C0A8F6] rounded-t-3xl overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-8 items-center relative">
          <div>
            <h2 className="text-3xl font-bold text-black mb-4">Start adapting your curriculum in minutes.</h2>
            <p className="text-lg text-black mb-6">The best way to create, adapt, and deliver resources differentiated for every student.</p>
            <div className="flex flex-wrap gap-4">
              <button className="border-2 border-black px-6 py-3 rounded-xl font-semibold text-black text-left">
                <div className="text-sm">TEACHERS</div>
                <div className="font-bold">Sign up For Free&gt;</div>
              </button>
              <button className="border-2 border-black px-6 py-3 rounded-xl font-semibold text-black text-left">
                <div className="text-sm">ADMINS</div>
                <div className="font-bold">Learn More&gt;</div>
              </button>
            </div>
          </div>
          <div className="hidden md:block absolute right-0 top-0 h-full w-1/3">
            <div className="h-full bg-[url('/images/grid-pattern.svg')] bg-no-repeat bg-cover rounded-tl-[3rem]" />
          </div>
        </div>
        <div className="h-24 bg-[#A383F1]" />
      </section>
    </>
  );
}