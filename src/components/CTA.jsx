import React from "react";

function CTA() {
  return (
    <section className="py-20 bg-gray-900 text-white text-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-500 opacity-50"></div>
      <div className="container mx-auto relative z-10">
        <h2 className="text-5xl font-extrabold drop-shadow-lg">
          Try Our Free Demo Now!
        </h2>
        <p className="mt-4 text-lg max-w-2xl mx-auto">
          Experience the power of BizMan ERP solutions today and take control of
          your business operations effortlessly.
        </p>
        <div className="mt-8 flex justify-center space-x-6">
          <button className="px-8 py-4 bg-white text-blue-600 rounded-full text-lg font-semibold shadow-lg hover:bg-gray-200 transition-transform transform hover:scale-105">
            Start Free Trial
          </button>
          <button className="px-8 py-4 border border-white text-white rounded-full text-lg font-semibold shadow-lg hover:bg-white hover:text-blue-600 transition-transform transform hover:scale-105">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}

export default CTA;
