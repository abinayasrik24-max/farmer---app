"use client";
import Link from "next/link";
import { useState } from "react";

export default function Register() {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");

  const handleRegister = () => {
    alert("Registration successful for " + name);
  };

  return (
    <div>
      {/* Navbar - Same as About page */}
      <div className="fixed top-0 left-0 right-0 z-50">
        <div className="bg-pink-600 text-white">
          <h1 className="text-xl font-bold text-center py-3">🌾 Smart Farmer App</h1>
        </div>
        <div className="bg-pink-500 flex justify-center gap-6 py-2 text-white font-semibold">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/register">Register</Link>
        </div>
      </div>

      {/* Register form */}
      <div className="min-h-screen flex items-center justify-center p-4 bg-green-50 pt-32">
        <div className="bg-white p-8 rounded-3xl shadow-2xl max-w-sm w-full">
          <h1 className="text-3xl font-bold text-center text-green-700 mb-6">Create Account</h1>
          
          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={e => setName(e.target.value)}
            className="w-full border p-3 rounded-xl mb-4"
          />
          
          <input
            type="text"
            placeholder="Mobile Number"
            value={mobile}
            onChange={e => setMobile(e.target.value)}
            className="w-full border p-3 rounded-xl mb-4"
          />
          
          <button onClick={handleRegister} className="w-full bg-green-600 text-white py-3 rounded-xl hover:bg-green-700">
            Register
          </button>
          
          <p className="text-center text-sm mt-4">
            Already have an account? <Link href="/" className="text-green-600 hover:underline">Login here</Link>
          </p>
        </div>
      </div>
    </div>
  );
}