'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function SignUpPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const router = useRouter();

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch('http://localhost:3001/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        setErrorMsg(data.message || 'Registration failed');
        return;
      }

      // Optional: auto-login (or redirect to login page)
      localStorage.setItem('token', data.token); // only if you return token later
      localStorage.setItem('user', JSON.stringify(data.user));
      router.push('/user/dashboard');
    } catch (err) {
      console.error('Registration error:', err);
      setErrorMsg('Something went wrong. Please try again.');
    }
  };

  return (
    <main className="min-h-screen bg-purple-900 flex items-center justify-center">
      <div className="flex w-full max-w-5xl bg-white rounded-lg overflow-hidden shadow-lg">
        {/* Left Side - Form */}
        <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
          <h2 className="text-lg font-semibold text-gray-800 mb-1">Create Your EduQuest Account</h2>
          <p className="text-sm text-gray-600 mb-6">Sign up in just 2 easy steps</p>

          <form onSubmit={handleSignUp} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
              <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="mt-1 block w-full border rounded px-3 py-2"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="mt-1 block w-full border rounded px-3 py-2"
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="mt-1 block w-full border rounded px-3 py-2"
              />
            </div>

            {errorMsg && <p className="text-red-600 text-sm text-center">{errorMsg}</p>}

            <button type="submit" className="w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-700 transition-all">
              Sign Up
            </button>
          </form>

          <p className="mt-6 text-center text-sm text-gray-600">
            Already have an account?{' '}
            <Link href="/auth/login" className="text-purple-600 font-semibold">Log In</Link>
          </p>
        </div>

        {/* Right Side - Image */}
        <div className="hidden md:block w-1/2">
          <Image
            src="/images/signup.webp"
            alt="Signup Illustration"
            width={600}
            height={500}
            className="object-cover h-full w-full"
          />
        </div>
      </div>
    </main>
  );
}
