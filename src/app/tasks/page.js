"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Plus, Trash2 } from "lucide-react";
import { useAuth } from "../context/AuthContext";

export default function TaskList() {
  const [tasks, setTasks] = useState([]);
const { logout } = useAuth();

  useEffect(() => {
    const localTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(localTasks);
  }, []);

  const deleteTask = (id) => {
    const confirmed = confirm("Are you sure you want to delete this task?");
    if (!confirmed) return;

    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 p-6">
      {/* Header */}
       <div className="flex justify-between items-center mb-8">
      <h1 className="text-4xl font-bold text-gray-800">📋 Task Manager</h1>

      <div className="flex gap-4 items-center">
        <Link
          href="/tasks/add"
          className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300"
        >
          <Plus size={18} /> Add Task
        </Link>

        <button
          onClick={logout}
          className="bg-red-500 text-white px-4 py-2 rounded-lg cursor-pointer hover:bg-red-600 transition duration-300"
        >
          Logout
        </button>
      </div>
    </div>

      {/* Task Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {tasks.length > 0 ? (
          tasks.map((task) => (
            <div
              key={task.id}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 border-t-4 border-blue-500 relative"
            >
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                {task.title}
              </h2>
              <p className="text-gray-600 mb-4 line-clamp-3">
                {task.description}
              </p>

              <div className="flex justify-between items-center">
                <span className="text-sm px-3 py-1 bg-blue-100 text-blue-600 rounded-full">
                  Active
                </span>
                <div className="flex gap-3 items-center">
                  <Link
                    href={`/tasks/edit/${task.id}`}
                    className="inline-flex items-center gap-2 px-2 py-1 rounded-lg text-sm font-semibold text-blue-600 border border-blue-200 hover:bg-blue-50 hover:text-blue-700 transition"
                  >
                    ✏️ Edit
                  </Link>

                  <button
                    onClick={() => deleteTask(task.id)}
                    className="inline-flex items-center gap-2 px-2 py-1 rounded-lg text-sm font-semibold text-red-600 border border-red-200 hover:bg-red-50 hover:text-red-700 transition"
                    title="Delete Task"
                  >
                    <Trash2 size={16} /> Delete
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-full text-center py-20">
            <h2 className="text-2xl font-semibold text-gray-500 mb-2">
              No tasks available 💤
            </h2>
            <p className="text-gray-400">
              Click &quot;Add Task&quot; to create your first task
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
