'use client';
import { useEffect, useState } from 'react';

export default function DashboardPage() {
  const [role, setRole] = useState('');

  useEffect(() => {
    const storedRole = localStorage.getItem('role');
    if (!storedRole || !localStorage.getItem('token')) {
      window.location.href = '/login';
    } else {
      setRole(storedRole);
    }
  }, []);

  return (
    <div className="min-h-screen p-6 bg-gray-50">
      <h1 className="text-2xl font-bold">Bienvenido, {role}</h1>
      <p>Dashboard para {role}.</p>
    </div>
  );
}