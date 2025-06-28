'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { FiBookOpen, FiUsers, FiBarChart2 } from 'react-icons/fi';
import { FaChalkboardTeacher } from 'react-icons/fa';
import { MdLibraryBooks } from 'react-icons/md';
import { TbBulb } from 'react-icons/tb';
import Link from 'next/link';
import UsersList from 'Components/UsersList'; // Import UsersList component
import AnnouncementsList from 'Components/AnnouncementsList'; // Import AnnouncementsList component
import CoursesList from 'Components/CoursesList'; // Import CoursesList component

type MenuItemProps = {
  label: string;
  icon: React.ReactNode;
  active: string;
  onClick: (label: string) => void;
};

function MenuItem({ label, icon, active, onClick }: MenuItemProps) {
  const isActive = active === label;
  return (
    <button
      onClick={() => onClick(label)}
      className={`flex items-center gap-3 w-full px-3 py-2 rounded-md text-sm font-medium ${isActive ? 'bg-purple-100 text-purple-700' : 'text-black hover:bg-gray-100'}`}
      style={{ color: 'black' }} // Force text color to black
    >
      <span className="text-lg">{icon}</span>
      {label}
    </button>
  );
}

export default function AdminDashboard() {
  const [activeMenu, setActiveMenu] = useState('Dashboard');
  const [userEmail, setUserEmail] = useState('');
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const timeout = setTimeout(() => {
      const token = localStorage.getItem('token');
      const userRaw = localStorage.getItem('user');

      if (!token || !userRaw || userRaw === 'undefined' || userRaw === 'null') {
        console.warn('Missing or invalid login data');
        router.push('/auth/login');
        return;
      }

      try {
        const parsedUser = JSON.parse(userRaw);
        if (!parsedUser?.email) throw new Error('Invalid user format');
        setUserEmail(parsedUser.email);
      } catch (err) {
        console.error('User parse error:', err);
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        router.push('/auth/login');
      } finally {
        setLoading(false); // ✅ this fixes the blank screen
      }
    }, 100);

    return () => clearTimeout(timeout);
  }, [router]);

  if (loading) return null;

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r p-4 flex flex-col justify-between">
        <div>
          <div className="mb-6 text-center">
            <h1 className="text-xl font-bold text-purple-700" style={{ color: 'black' }}>EDUQUEST</h1>
            <span className="text-sm" style={{ color: 'black' }}>ADMIN</span>
          </div>

          <button className="w-full bg-purple-600 text-white py-2 rounded mb-6 hover:bg-purple-700">
            + Create
          </button>

          <nav className="space-y-4">
            <MenuItem label="Dashboard" icon={<FiBarChart2 />} active={activeMenu} onClick={setActiveMenu} />
            <MenuItem label="Announcements" icon={<MdLibraryBooks />} active={activeMenu} onClick={setActiveMenu} />
            <MenuItem label="Users" icon={<FiUsers />} active={activeMenu} onClick={setActiveMenu} />
            <MenuItem label="Courses" icon={<FaChalkboardTeacher />} active={activeMenu} onClick={setActiveMenu} />
            <MenuItem label="Teachers" icon={<FiBookOpen />} active={activeMenu} onClick={setActiveMenu} />
            <MenuItem label="Reports" icon={<TbBulb />} active={activeMenu} onClick={setActiveMenu} />
          </nav>
        </div>

        <div className="text-center text-xs text-black">
          <p>0/20 activities created</p>
          <button className="bg-yellow-400 text-black py-1 px-3 rounded mt-2">Upgrade</button>
        </div>
      </aside>

      {/* Main */}
      <main className="flex-1 bg-gray-50 flex flex-col">
        {/* Top Bar */}
        <header className="p-4 flex items-center justify-between bg-white shadow-sm">
          <input
            type="text"
            placeholder="Search for any topic"
            className="w-1/2 px-4 py-2 border rounded-lg focus:outline-none focus:ring-1 focus:ring-purple-500"
          />
          <div className="flex items-center gap-4">
            <Link href="/join-code" className="bg-purple-600 text-white px-4 py-1 rounded">Enter Code</Link>
            <button className="bg-purple-600 text-white px-4 py-1 rounded">Get help</button>
            <div className="w-8 h-8 rounded-full bg-purple-300 text-white flex items-center justify-center">
              {userEmail.charAt(0).toUpperCase() || 'U'}
            </div>
          </div>
        </header>

        {/* Content */}
        <section className="p-6">
          {activeMenu === 'Users' && <UsersList />}  {/* Show Users List when 'Users' is active */}
          {activeMenu === 'Courses' && <CoursesList />}  {/* Show Courses List when 'Courses' is active */}
          {activeMenu === 'Announcements' && <AnnouncementsList />}  {/* Show Announcements List when 'Announcements' is active */}

          {/* Default Dashboard Content */}
          {activeMenu === 'Dashboard' && (
            <div>
              <h2 className="text-lg font-bold mb-4 text-black">Admin Dashboard</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="font-semibold text-sm text-black">Users</h3>
                  <p className="text-xs text-black">Manage users and download list</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="font-semibold text-sm text-black">Courses</h3>
                  <p className="text-xs text-black">Manage available courses</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="font-semibold text-sm text-black">Announcements</h3>
                  <p className="text-xs text-black">Create and manage announcements</p>
                </div>
              </div>
            </div>
          )}
        </section>
      </main>
    </div>
  );
}
