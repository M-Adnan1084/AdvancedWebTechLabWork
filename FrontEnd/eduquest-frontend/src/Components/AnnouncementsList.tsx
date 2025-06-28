'use client';

import React, { useState, useEffect } from 'react';


export default function AnnouncementsList() {
  const [announcements, setAnnouncements] = useState<any[]>([]);
  const [newAnnouncement, setNewAnnouncement] = useState({
    title: '',
    message: '',
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch announcements
  useEffect(() => {
    const fetchAnnouncements = async () => {
      try {
        const res = await fetch('http://localhost:3001/announcements');
        if (!res.ok) {
          throw new Error('Failed to fetch announcements');
        }
        const data = await res.json();
        setAnnouncements(data);
      } catch (err) {
        setError('Error fetching announcements');
      } finally {
        setLoading(false);
      }
    };

    fetchAnnouncements();
  }, []);

  // Handle form input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setNewAnnouncement({ ...newAnnouncement, [name]: value });
  };

  // Handle form submission to create an announcement
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem('token');
      if (!token) {
        throw new Error('No token found. Please login again.');
      }

      const res = await fetch('http://localhost:3001/admin/announcement', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`, // Add token for authentication
        },
        body: JSON.stringify(newAnnouncement),
      });

      // Check if the response is successful
      if (!res.ok) {
        throw new Error('Failed to create announcement');
      }

      const createdAnnouncement = await res.json();
      setAnnouncements([createdAnnouncement, ...announcements]); // Add new announcement to the list
      setNewAnnouncement({ title: '', message: '' }); // Reset form fields
    } catch (err) {
      setError('Error creating announcement');
    }
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-lg font-bold mb-4" style={{ color: 'black' }}>Announcements</h2>

      {/* New Announcement Form */}
      <form onSubmit={handleSubmit} className="mb-6">
        <div className="mb-2">
          <input
            type="text"
            name="title"
            placeholder="Title"
            value={newAnnouncement.title}
            onChange={handleInputChange}
            className="w-full border px-3 py-2 rounded"
            required
            style={{ color: 'black' }}
          />
        </div>
        <div className="mb-2">
          <textarea
            name="message"
            placeholder="Message"
            value={newAnnouncement.message}
            onChange={handleInputChange}
            className="w-full border px-3 py-2 rounded"
            required
            style={{ color: 'black' }}
          ></textarea>
        </div>
        <button type="submit" className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700">
          Create Announcement
        </button>
      </form>

      {/* Announcements Table */}
      {loading ? (
        <p>Loading announcements...</p>
      ) : error ? (
        <p className="text-red-500">{error}</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto border-collapse">
            <thead>
              <tr>
                <th className="px-4 py-2 text-left text-sm font-semibold" style={{ color: 'black' }}>ID</th>
                <th className="px-4 py-2 text-left text-sm font-semibold" style={{ color: 'black' }}>Title</th>
                <th className="px-4 py-2 text-left text-sm font-semibold" style={{ color: 'black' }}>Message</th>
                <th className="px-4 py-2 text-left text-sm font-semibold" style={{ color: 'black' }}>Created At</th>
                <th className="px-4 py-2 text-left text-sm font-semibold" style={{ color: 'black' }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {announcements.map((announcement) => (
                <tr key={announcement.id}>
                  <td className="border-b px-4 py-2 text-sm" style={{ color: 'black' }}>{announcement.id}</td>
                  <td className="border-b px-4 py-2 text-sm" style={{ color: 'black' }}>{announcement.title}</td>
                  <td className="border-b px-4 py-2 text-sm" style={{ color: 'black' }}>{announcement.message}</td>
                  <td className="border-b px-4 py-2 text-sm" style={{ color: 'black' }}>
                    {new Date(announcement.createdAt).toLocaleString()}
                  </td>
                  <td className="border-b px-4 py-2 text-sm">
                    <button
                      //onClick={() => announcement(announcement.id)}
                      className="bg-red-600 text-white py-1 px-2 rounded hover:bg-red-700"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
