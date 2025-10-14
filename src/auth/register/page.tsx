"use client";

import { useState } from "react";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";

export default function RegisterPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      // ✅ Define expected response type
      interface RegisterResponse {
        token: string;
        user: {
          id: string;
          name: string;
          email: string;
        };
        message?: string;
      }

      const data: RegisterResponse = await res.json();

      if (!res.ok) throw new Error(data.message || "Registration failed");

      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));
      router.push("/milgpt");
    } catch (err: unknown) {
      // ✅ Type-safe error handling
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("An unexpected error occurred.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="flex min-h-screen justify-center items-center bg-cover bg-center relative"
      style={{ backgroundImage: "url('/home/imgi_18_banner-img.png')" }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-800/80 to-blue-700/80"></div>

      {/* Back Button */}
      <Link
        href="/"
        className="absolute top-6 left-6 bg-white/20 backdrop-blur-md text-white px-4 py-2 rounded-full text-sm hover:bg-white/30 transition"
      >
        ← Back to Home
      </Link>

      {/* Register Form Card */}
      <div className="relative z-10 w-full max-w-md bg-white/10 backdrop-blur-xl border border-white/30 rounded-2xl p-8 shadow-2xl text-white mt-16 mb-16">
        {/* Title */}
        <h1 className="text-3xl font-bold mb-2 text-center">
          Create Your Account
        </h1>
        <p className="text-gray-200 mb-6 text-center text-sm">
          Join SnapCheck and experience smart real-time monitoring.
        </p>

        {/* Google Sign-In */}
        <button
          type="button"
          onClick={() => signIn("google")}
          className="w-full flex items-center justify-center gap-3 py-3 mb-4 
            bg-white text-gray-800 font-semibold rounded-lg transition hover:bg-gray-200"
        >
          <FcGoogle size={22} /> Continue with Google
        </button>

        {/* Divider */}
        <div className="flex items-center my-4">
          <div className="flex-grow border-t border-white/30"></div>
          <span className="px-2 text-white/70 text-sm">or</span>
          <div className="flex-grow border-t border-white/30"></div>
        </div>

        {/* Register Form */}
        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Full Name"
            className="w-full px-4 py-2.5 rounded-lg bg-white/10 border border-white/30 
              focus:outline-none focus:ring-2 focus:ring-blue-300 placeholder-white/70 text-sm"
            required
          />
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Email"
            className="w-full px-4 py-2.5 rounded-lg bg-white/10 border border-white/30 
              focus:outline-none focus:ring-2 focus:ring-blue-300 placeholder-white/70 text-sm"
            required
          />
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            placeholder="Password"
            className="w-full px-4 py-2.5 rounded-lg bg-white/10 border border-white/30 
              focus:outline-none focus:ring-2 focus:ring-blue-300 placeholder-white/70 text-sm"
            required
          />
          <input
            type="password"
            name="confirmPassword"
            value={form.confirmPassword}
            onChange={handleChange}
            placeholder="Confirm Password"
            className="w-full px-4 py-2.5 rounded-lg bg-white/10 border border-white/30 
              focus:outline-none focus:ring-2 focus:ring-blue-300 placeholder-white/70 text-sm"
            required
          />

          {error && <p className="text-red-300 text-sm text-center">{error}</p>}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-yellow-300 text-black font-semibold py-3 rounded-lg transition hover:bg-yellow-400 disabled:opacity-50"
          >
            {loading ? "Registering..." : "Register"}
          </button>
        </form>

        {/* Switch to Login */}
        <p className="text-white/90 text-sm mt-6 text-center">
          Already have an account?{" "}
          <Link
            href="/auth/login"
            className="text-white font-semibold underline hover:text-blue-200"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
