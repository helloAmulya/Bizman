// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// function Login() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();

//   const handleLogin = (e) => {
//     e.preventDefault();
//     // Dummy authentication logic
//     if (email && password) {
//       localStorage.setItem("isAuthenticated", "true");
//       navigate("/dashboard"); // Redirect to dashboard after login
//     } else {
//       alert("Please enter valid credentials!");
//     }
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-100">
//       <div className="bg-white p-8 rounded-lg shadow-lg w-96">
//         <h2 className="text-2xl font-bold mb-4 text-center text-blue-600">Login to BizMan</h2>
//         <form onSubmit={handleLogin}>
//           <div className="mb-4">
//             <label className="block text-gray-700">Email</label>
//             <input
//               type="email"
//               className="w-full p-2 border rounded-lg mt-1"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//             />
//           </div>
//           <div className="mb-4">
//             <label className="block text-gray-700">Password</label>
//             <input
//               type="password"
//               className="w-full p-2 border rounded-lg mt-1"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />
//           </div>
//           <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-500 transition">
//             Log In
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default Login;
/* */
// import React from "react";
// import { useNavigate } from "react-router-dom";

// function Login() {
//   const navigate = useNavigate();

//   const handleLogin = (e) => {
//     e.preventDefault();
//     // Simulating authentication
//     navigate("/dashboard");
//   };

//   return (
//     <div className="flex items-center justify-center h-screen bg-gray-100">
//       <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
//         <h2 className="text-2xl font-bold text-center mb-6">Log In</h2>
//         <form onSubmit={handleLogin} className="flex flex-col space-y-4">
//           <input
//             type="email"
//             placeholder="Email"
//             className="border p-2 rounded-md w-full"
//             required
//           />
//           <input
//             type="password"
//             placeholder="Password"
//             className="border p-2 rounded-md w-full"
//             required
//           />
//           <button
//             type="submit"
//             className="bg-blue-600 text-white py-2 rounded-md hover:bg-blue-500 transition"
//           >
//             Log In
//           </button>
//         </form>
//         <p className="mt-4 text-center text-gray-600">
//           Don't have an account?{" "}
//           <a href="/signup" className="text-blue-600 hover:underline">
//             Sign Up
//           </a>
//         </p>
//       </div>
//     </div>
//   );
// }

// export default Login;




import React from "react";
import { useNavigate } from "react-router-dom";
import { FaEnvelope, FaLock } from "react-icons/fa";

function Login() {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Simulating authentication
    navigate("/dashboard");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="relative bg-white/10 backdrop-blur-lg p-8 rounded-2xl shadow-xl max-w-md w-full border border-white/20">
        <h2 className="text-3xl font-bold text-center text-white drop-shadow-lg">
          Log In
        </h2>
        <form onSubmit={handleLogin} className="flex flex-col space-y-4 mt-6">
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
            Log In
          </button>
        </form>
        <p className="mt-4 text-center text-white/80">
          Don't have an account?{" "}
          <a href="/signup" className="text-blue-400 hover:underline">
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
}

export default Login;
