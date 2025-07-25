"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { v4 as uuidv4 } from "uuid";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function AddTask() {
  const [form, setForm] = useState({ title: "", description: "" });
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();

    const existing = JSON.parse(localStorage.getItem("tasks")) || [];
    const newTask = { ...form, id: uuidv4() };
    localStorage.setItem("tasks", JSON.stringify([...existing, newTask]));

    router.push("/tasks");
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-blue-50 to-slate-100 px-4">
      <div className="bg-white p-10 rounded-3xl shadow-xl w-full max-w-2xl transition-all duration-500">
        {/* Header */}
        <div className="mb-6 flex justify-between items-center">
          <h2 className="text-3xl font-bold text-gray-800">📝 Add New Task</h2>
          <Link
            href="/tasks"
            className="text-sm text-blue-600 flex items-center hover:underline"
          >
            <ArrowLeft className="w-4 h-4 mr-1" /> Back to Tasks
          </Link>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-600">
              Task Title
            </label>
            <input
              type="text"
              placeholder="Enter title"
              className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
              onChange={(e) => setForm({ ...form, title: e.target.value })}
              required
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium text-gray-600">
              Description
            </label>
            <textarea
              placeholder="Enter description"
              className="w-full p-3 border border-gray-300 rounded-lg shadow-sm min-h-[120px] focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
              onChange={(e) => setForm({ ...form, description: e.target.value })}
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition-all duration-300 shadow-md"
          >
            ➕ Save Task
          </button>
        </form>
      </div>
    </div>
  );
}
