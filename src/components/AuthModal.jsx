import React from "react";
import Modal from "react-modal";
import { useNavigate } from "react-router-dom";

Modal.setAppElement("#root");

function AuthModal({ isOpen, onClose, isSignup }) {
  const navigate = useNavigate();

  const handleAuth = (e) => {
    e.preventDefault();
    onClose();
    navigate("/dashboard"); 
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      className="bg-white rounded-lg shadow-lg p-8 max-w-md mx-auto mt-20"
      overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
    >
      <h2 className="text-2xl font-bold text-center mb-4">
        {isSignup ? "Sign Up" : "Log In"}
      </h2>

      <form className="flex flex-col space-y-4" onSubmit={handleAuth}>
        <input
          type="email"
          placeholder="Email"
          className="border p-2 rounded-md w-full"
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="border p-2 rounded-md w-full"
          required
        />

        {isSignup && (
          <input
            type="text"
            placeholder="Full Name"
            className="border p-2 rounded-md w-full"
            required
          />
        )}

        <button
          type="submit"
          className="bg-blue-600 text-white py-2 rounded-md"
        >
          {isSignup ? "Sign Up" : "Log In"}
        </button>
      </form>

      <button className="mt-4 text-gray-600 text-sm" onClick={onClose}>
        Close
      </button>
    </Modal>
  );
}

export default AuthModal;
