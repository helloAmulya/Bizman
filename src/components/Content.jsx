import React from "react";
import AuthModal from "./AuthModal";
import Modal from "react-modal";
function Content() {
  const [modalOpen, setModalOpen] = useState(false);
  const [isSignup, setIsSignup] = useState(false);

  const openModal = (signup) => {
    setIsSignup(signup);
    setModalOpen(true);
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
        <h1 className="text-5xl font-bold text-gray-800 text-center">
          Omnichannel ERP made easy for <br /> Retail, Restaurants &
          Distribution
        </h1>
        <p className="mt-4 text-lg text-gray-600 text-center">
          Grow your business with minimal staff, little training, and reliable
          solutions.
        </p>
        <div className="mt-6 space-x-4">
          <button className="px-6 py-3 bg-blue-600 text-white rounded-md text-lg">
            Experience it Now
          </button>
          <button
            className="px-6 py-3 border border-blue-600 text-blue-600 rounded-md text-lg"
            onClick={() => openModal(true)}
          >
            Sign Up
          </button>
          <button
            className="px-6 py-3 border border-blue-600 text-blue-600 rounded-md text-lg"
            onClick={() => openModal(false)}
          >
            Log In
          </button>
        </div>
      </div>
    </>
  );
}

export default Content;
