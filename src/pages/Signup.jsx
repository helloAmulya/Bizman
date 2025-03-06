import React from "react";
import { useNavigate } from "react-router-dom";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";

function Signup() {
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    // Simulating user registration
    navigate("/dashboard");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="relative bg-white/10 backdrop-blur-lg p-8 rounded-2xl shadow-xl max-w-md w-full border border-white/20">
        <h2 className="text-3xl font-bold text-center text-white drop-shadow-lg">
          Sign Up
        </h2>
        <form onSubmit={handleSignup} className="flex flex-col space-y-4 mt-6">
          <div className="relative">
            <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/70" />
            <input
              type="text"
              placeholder="Full Name"
              className="bg-white/10 text-white placeholder-white/70 border border-white/30 p-3 pl-10 rounded-lg w-full focus:ring-2 focus:ring-blue-500 focus:outline-none"
              required
            />
          </div>
          <div className="relative">
            <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/70" />
            <input
              type="email"
              placeholder="Email"
              className="bg-white/10 text-white placeholder-white/70 border border-white/30 p-3 pl-10 rounded-lg w-full focus:ring-2 focus:ring-blue-500 focus:outline-none"
              required
            />
          </div>
          <div className="relative">
            <FaLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/70" />
            <input
              type="password"
              placeholder="Password"
              className="bg-white/10 text-white placeholder-white/70 border border-white/30 p-3 pl-10 rounded-lg w-full focus:ring-2 focus:ring-blue-500 focus:outline-none"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-blue-600 text-white py-3 rounded-lg text-lg font-semibold shadow-lg hover:bg-blue-500 transition"
          >
            Sign Up
          </button>
        </form>
        <p className="mt-4 text-center text-white/80">
          Already have an account?{" "}
          <a href="/login" className="text-blue-400 hover:underline">
            Log In
          </a>
        </p>
      </div>
    </div>
  );
}

export default Signup;
