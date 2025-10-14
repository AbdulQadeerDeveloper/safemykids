"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import { useRouter } from "next/navigation";
import { signIn, useSession } from "next-auth/react";

interface GoogleUser {
  name?: string | null;
  email?: string | null;
  picture?: string | null;
}

export default function LoginPage() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);
  const router = useRouter();
  const { data: session } = useSession();

  useEffect(() => {
    const handleGoogleLogin = async () => {
      if (session?.user) {
        setGoogleLoading(true);
        try {
          const user: GoogleUser = {
            name: session.user.name,
            email: session.user.email,
            picture: session.user.image,
          };

          const response = await fetch(
            "http://localhost:5000/api/auth/google-login",
            {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(user),
            }
          );

          if (!response.ok) throw new Error("Failed to save user data");

          const data = await response.json();
          localStorage.setItem("token", data.token);
          localStorage.setItem("user", JSON.stringify(data.user));
          router.push("/dashboard");
        } catch {
          setError("Google login failed. Please try again.");
        } finally {
          setGoogleLoading(false);
        }
      }
    };
    handleGoogleLogin();
  }, [session, router]);

  const handleGoogleSignIn = async () => {
    setGoogleLoading(true);
    setError("");
    try {
      const result = await signIn("google", {
        redirect: false,
        callbackUrl: "/dashboard",
      });
      if (result?.error) setError("Google sign-in failed. Please try again.");
    } catch {
      setError("Google sign-in failed. Please try again.");
    } finally {
      setGoogleLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      // Explicitly type the response data
      interface LoginResponse {
        token: string;
        user: {
          id: string;
          name: string;
          email: string;
        };
        message?: string;
      }

      const data: LoginResponse = await res.json();

      if (!res.ok) throw new Error(data.message || "Login failed");

      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));
      router.push("/dashboard");
    } catch (err) {
      // Type-safe error handling
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
      className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-600 to-blue-500 relative px-4 py-10"
      style={{
        backgroundImage: "url('/home/imgi_18_banner-img.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundBlendMode: "overlay",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-purple-700/70 to-blue-600/70"></div>

      <div className="relative z-10 w-full max-w-md bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-2xl border border-white/20">
        {/* Logo / Back */}
        <Link
          href="/"
          className="inline-block mb-4 text-sm text-white/80 hover:text-white transition"
        >
          ← Back to Home
        </Link>

        {/* Title */}
        <h1 className="text-3xl font-extrabold text-white mb-2">
          Welcome to <span className="text-yellow-300">SnapCheck</span>
        </h1>
        <p className="text-gray-200 mb-6 text-sm">
          Smart Attendance, Smarter Management — Sign in to get started.
        </p>

        {/* Google Login */}
        <button
          type="button"
          onClick={handleGoogleSignIn}
          disabled={googleLoading}
          className="w-full flex items-center justify-center gap-3 py-3 mb-4 bg-white text-gray-800 font-semibold rounded-lg transition hover:bg-gray-100 disabled:opacity-50"
        >
          <FcGoogle size={22} />
          {googleLoading ? "Processing..." : "Continue with Google"}
        </button>

        {/* Divider */}
        <div className="flex items-center my-4">
          <div className="flex-grow border-t border-white/30"></div>
          <span className="px-2 text-white/70 text-sm">or</span>
          <div className="flex-grow border-t border-white/30"></div>
        </div>

        {/* Email + Password */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Email address"
            className="w-full px-4 py-3 rounded-lg bg-white/20 text-white border border-white/30 
              focus:outline-none focus:ring-2 focus:ring-yellow-300 placeholder-gray-200"
            required
          />
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            placeholder="Password"
            className="w-full px-4 py-3 rounded-lg bg-white/20 text-white border border-white/30 
              focus:outline-none focus:ring-2 focus:ring-yellow-300 placeholder-gray-200"
            required
          />

          {error && <p className="text-red-300 text-sm text-center">{error}</p>}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-yellow-300 text-black font-semibold py-3 rounded-lg transition hover:bg-yellow-400 disabled:opacity-50"
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        {/* Register Link */}
        <p className="text-gray-200 text-sm mt-6 text-center">
          Don’t have an account?{" "}
          <Link
            href="/auth/register"
            className="text-yellow-300 hover:underline"
          >
            Register now
          </Link>
        </p>

        <p className="text-xs text-gray-300 text-center mt-4">
          © {new Date().getFullYear()} SnapCheck. Smart Attendance Monitoring
          for Schools.
        </p>
      </div>
    </div>
  );
}
