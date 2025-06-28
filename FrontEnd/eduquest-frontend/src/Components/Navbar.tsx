"use client";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="flex justify-between items-center px-8 py-4 shadow-sm bg-white sticky top-0 z-50">
      <h1 className="text-2xl font-bold text-blue-700">EduQuest</h1>
      <nav className="space-x-6 hidden md:flex">
        <Link href="#" className="hover:text-blue-700">School & Districts</Link>
        <Link href="#" className="hover:text-blue-700">Plans</Link>
        <Link href="#" className="hover:text-blue-700">Library</Link>
        <Link href="#" className="hover:text-blue-700">Use Cases</Link>
      </nav>
      <div className="space-x-4">
        <Link href="/auth">
          <button className="text-sm text-blue-600 hover:underline">Login</button>
        </Link>
        <Link href="/auth/signup">
          <button className="text-sm border border-blue-600 px-4 py-1 rounded text-blue-600 hover:bg-blue-50">Sign Up</button>
        </Link>
        <button className="bg-blue-600 text-white px-4 py-1 text-sm rounded hover:bg-blue-700">
          Enter Code
        </button>
      </div>
    </header>
  );
}
