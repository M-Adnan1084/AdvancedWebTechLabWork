'use client';

import React, { useState, useEffect } from 'react';

export default function UsersList() {
  const [users, setUsers] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch('http://localhost:3001/users', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (!res.ok) {
          throw new Error('Failed to fetch users');
        }

        const data = await res.json();
        setUsers(data); // Set the users data
      } catch (err) {
        setError('Error fetching users');
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) {
    return <p className="text-black">Loading users...</p>; 
  }

  if (error) {
    return <p className="text-black">{error}</p>; 
  }

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-lg font-bold mb-4 text-black">Users List</h2> 
      <table className="w-full table-auto border-collapse">
        <thead>
          <tr>
            <th className="border-b px-4 py-2 text-left text-sm font-semibold text-black">ID</th> 
            <th className="border-b px-4 py-2 text-left text-sm font-semibold text-black">Name</th> 
            <th className="border-b px-4 py-2 text-left text-sm font-semibold text-black">Email</th> 
            <th className="border-b px-4 py-2 text-left text-sm font-semibold text-black">Role</th> 
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td className="border-b px-4 py-2 text-sm text-black">{user.id}</td> 
              <td className="border-b px-4 py-2 text-sm text-black">{user.name}</td> 
              <td className="border-b px-4 py-2 text-sm text-black">{user.email}</td> 
              <td className="border-b px-4 py-2 text-sm text-black">{user.role}</td> 
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
