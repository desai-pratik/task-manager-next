"use client";
import { useState } from "react";
import { useAuth } from "../context/AuthContext";

export default function Register() {
  const { register } = useAuth();
  const [form, setForm] = useState({ email: "", password: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    register(form);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-3xl font-bold text-center mb-6">Register</h2>
        <input
          type="email"
          placeholder="Email"
          className="w-full mb-4 p-3 border rounded"
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full mb-6 p-3 border rounded"
          onChange={(e) => setForm({ ...form, password: e.target.value })}
          required
        />
        <button className="w-full bg-green-600 text-white py-3 rounded hover:bg-green-700 transition">
          Create Account
        </button>
      </form>
    </div>
  );
}
