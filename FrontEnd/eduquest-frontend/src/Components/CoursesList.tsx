'use client';

import React, { useState, useEffect } from 'react';

export default function CoursesList() {
  const [courses, setCourses] = useState<any[]>([]);
  const [newCourse, setNewCourse] = useState({
    name: '',
    description: '',
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch courses
  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const res = await fetch('http://localhost:3001/courses');
        if (!res.ok) {
          throw new Error('Failed to fetch courses');
        }
        const data = await res.json();
        setCourses(data);
      } catch (err) {
        setError('Error fetching courses');
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  // Handle form input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setNewCourse({ ...newCourse, [name]: value });
  };

  // Handle form submission to create a course
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem('token');
      if (!token) {
        throw new Error('No token found. Please login again.');
      }

      const res = await fetch('http://localhost:3001/admin/courses', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`, // Add token for authentication
        },
        body: JSON.stringify(newCourse),
      });

      if (!res.ok) {
        throw new Error('Failed to create course');
      }

      const createdCourse = await res.json();
      setCourses([createdCourse, ...courses]); // Add new course to the list
      setNewCourse({ name: '', description: '' }); // Reset form fields
    } catch (err) {
      setError('Error creating course');
    }
  };

  // Handle course deletion
  const handleDelete = async (id: number) => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        throw new Error('No token found. Please login again.');
      }

      const res = await fetch(`http://localhost:3001/admin/courses/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`, // Add token for authentication
        },
      });

      if (!res.ok) {
        throw new Error('Failed to delete course');
      }

      // Remove deleted course from state
      setCourses(courses.filter((course) => course.id !== id));
    } catch (err) {
      setError('Error deleting course');
    }
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-lg font-bold mb-4" style={{ color: 'black' }}>Courses</h2>

      {/* New Course Form */}
      <form onSubmit={handleSubmit} className="mb-6">
        <div className="mb-2">
          <input
            type="text"
            name="name"
            placeholder="Course Name"
            value={newCourse.name}
            onChange={handleInputChange}
            className="w-full border px-3 py-2 rounded"
            required
            style={{ color: 'black' }}
          />
        </div>
        <div className="mb-2">
          <textarea
            name="description"
            placeholder="Course Description"
            value={newCourse.description}
            onChange={handleInputChange}
            className="w-full border px-3 py-2 rounded"
            required
            style={{ color: 'black' }}
          ></textarea>
        </div>
        <button type="submit" className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700">
          Create Course
        </button>
      </form>

      {/* Courses List - Table format */}
      <table className="w-full table-auto border-collapse">
        <thead>
          <tr>
            <th className="border-b px-4 py-2 text-left text-sm font-semibold" style={{ color: 'black' }}>ID</th>
            <th className="border-b px-4 py-2 text-left text-sm font-semibold" style={{ color: 'black' }}>Name</th>
            <th className="border-b px-4 py-2 text-left text-sm font-semibold" style={{ color: 'black' }}>Description</th>
            <th className="border-b px-4 py-2 text-left text-sm font-semibold" style={{ color: 'black' }}>Created At</th>
            <th className="border-b px-4 py-2 text-left text-sm font-semibold" style={{ color: 'black' }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {courses.map((course) => (
            <tr key={course.id}>
              <td className="border-b px-4 py-2 text-sm" style={{ color: 'black' }}>{course.id}</td>
              <td className="border-b px-4 py-2 text-sm" style={{ color: 'black' }}>{course.name}</td>
              <td className="border-b px-4 py-2 text-sm" style={{ color: 'black' }}>{course.description}</td>
              <td className="border-b px-4 py-2 text-sm" style={{ color: 'black' }}>{new Date(course.createdAt).toLocaleDateString()}</td>
              <td className="border-b px-4 py-2 text-sm">
                <button
                  onClick={() => handleDelete(course.id)}
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
  );
}
