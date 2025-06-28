'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function LoginPage() {
  const [showEmailForm, setShowEmailForm] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const handleEmailLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch('http://localhost:3001/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      if (!res.ok) {
        const { message } = await res.json();
        setErrorMsg(message || 'Login failed');
        return;
      }

      const data = await res.json();
      console.log('Login success:', data);

      // ✅ Store JWT token and user data
      localStorage.setItem('token', data.token);
      localStorage.setItem('user', JSON.stringify(data.user));

      // ✅ Redirect to user dashboard
      window.location.href = '/user/dashboard';
    } catch (err) {
      console.error(err);
      setErrorMsg('Something went wrong. Please try again.');
    }
  };

  return (
    <main className="min-h-screen bg-purple-900 flex items-center justify-center">
      <div className="flex w-full max-w-5xl bg-white rounded-lg overflow-hidden shadow-lg">
        {/* Left Side - Form */}
        <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
          <h2 className="text-lg font-semibold text-gray-800 mb-1">Welcome to EduQuest</h2>
          <p className="text-sm text-gray-600 mb-6">Create a free account in 2 steps</p>

          <button className="flex items-center justify-between w-full border px-4 py-2 rounded mb-3 hover:bg-gray-50">
            <span className="text-sm text-gray-700">Continue with Google</span>
            <Image src="/images/google.png" alt="Google" width={20} height={20} />
          </button>

          <button
            onClick={() => setShowEmailForm(!showEmailForm)}
            className="flex items-center justify-between w-full border px-4 py-2 rounded mb-3 hover:bg-gray-50"
          >
            <span className="text-sm text-gray-700">Continue with Email</span>
            <Image src="/images/email.webp" alt="Email" width={20} height={20} />
          </button>

          <button className="flex items-center justify-between w-full border px-4 py-2 rounded mb-3 hover:bg-gray-50">
            <span className="text-sm text-gray-700">Continue with Microsoft</span>
            <Image src="/images/microsoft.jpg" alt="Microsoft" width={20} height={20} />
          </button>

          {showEmailForm && (
            <form onSubmit={handleEmailLogin} className="space-y-4 mt-4">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                className="w-full border px-3 py-2 rounded-md"
              />
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                className="w-full border px-3 py-2 rounded-md"
              />
              {errorMsg && (
                <p className="text-red-600 text-sm text-center">{errorMsg}</p>
              )}
              <button
                type="submit"
                className="w-full bg-purple-600 text-white py-2 rounded-md hover:bg-purple-700"
              >
                Login
              </button>
            </form>
          )}

          <p className="text-sm text-center my-4 text-gray-500">or continue with</p>
          <div className="flex justify-center space-x-4 mb-4">
            <Image src="/images/Facebook_logo_(square).png" alt="Facebook" width={24} height={24} />
            <Image src="/images/Apple-Logosu.png" alt="Apple" width={24} height={24} />
            <Image src="/images/others.png" alt="Other" width={24} height={24} />
          </div>

          <p className="text-xs text-center text-gray-400">
            By signing up, you agree to our Terms of Service & Privacy Policy
          </p>

          <p className="mt-6 text-center text-sm text-gray-600">
            Don't have an account?{' '}
            <Link href="/auth/signup" className="text-purple-600 font-semibold">Sign Up</Link>
          </p>
        </div>

        {/* Right Side - Image */}
        <div className="hidden md:block w-1/2">
          <Image
            src="/images/loginsideimage.jpg"
            alt="Classroom"
            width={600}
            height={500}
            className="object-cover h-full w-full"
          />
        </div>
      </div>
    </main>
  );
}
