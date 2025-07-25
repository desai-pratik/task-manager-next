"use client";
import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";

export default function EditTask() {
  const { id } = useParams();
  const router = useRouter();
  const [form, setForm] = useState({ title: "", description: "" });

  useEffect(() => {
    const localTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    const task = localTasks.find((task) => task.id === id);
    if (task) setForm({ title: task.title, description: task.description });
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, ...form } : task
    );
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    router.push("/tasks");
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded shadow w-full max-w-lg"
      >
        <h2 className="text-2xl font-semibold mb-4">Edit Task</h2>
        <input
          type="text"
          value={form.title}
          className="w-full mb-4 p-3 border border-gray-300 rounded"
          onChange={(e) => setForm({ ...form, title: e.target.value })}
          required
        />
        <textarea
          value={form.description}
          className="w-full mb-6 p-3 border border-gray-300 rounded"
          onChange={(e) => setForm({ ...form, description: e.target.value })}
          required
        ></textarea>
        <button className="w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700">
          Update Task
        </button>
      </form>
    </div>
  );
}
