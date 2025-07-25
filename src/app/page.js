"use client";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-100">
      <div className="bg-white shadow-xl rounded-xl p-10 max-w-md w-full text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          Welcome to Task Manager
        </h1>
        <p className="text-gray-600 mb-8">
          Organize your day with ease. Sign in or register to get started.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/login"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded transition"
          >
            Login
          </Link>
          <Link
            href="/register"
            className="bg-gray-100 hover:bg-gray-200 text-blue-700 font-semibold py-2 px-6 rounded border border-blue-300 transition"
          >
            Register
          </Link>
        </div>
      </div>
    </main>
  );
}
