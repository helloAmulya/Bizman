
// import React from "react";
// import { Link } from "react-router-dom";
// import Navbar from "../components/Navbar";
// import Features from "../components/Features";
// import CTA from "../components/CTA";
// import Footer from "../components/Footer";
// import businessImage from "../assets/business.png";
// import { FaCheckCircle } from "react-icons/fa";

// function LandingPage() {
//   return (
//     <div>
//       <Navbar />

//       <div className="relative w-full h-screen flex items-center justify-center bg-gray-900 p-6">
//         <div className="flex w-full max-w-6xl items-center justify-between">
//           <div className="w-1/2">
//             <img
//               src={businessImage}
//               alt="Business Growth"
//               className="w-full max-w-lg opacity-80"
//             />
//           </div>
//           <div className="w-1/2 bg-gray-800/40 backdrop-blur-md p-10 rounded-2xl shadow-2xl text-center">
//             <h1 className="text-5xl font-extrabold text-blue-400 leading-tight drop-shadow-lg">
//               Next-Gen Business Tool
//             </h1>
//             <p className="mt-4 text-lg text-gray-200 drop-shadow">
//               The ultimate tool for GST invoicing, analytics, AI-based
//               recommendations, KPI tracking, customer portals, and more—all for
//               FREE!
//             </p>
//             <div className="mt-6 flex flex-wrap justify-center gap-4">
//               <Link
//                 to="/signup"
//                 className="px-6 py-3 border border-blue-400 text-blue-400 rounded-lg text-lg shadow-lg hover:bg-blue-400 hover:text-white transition"
//               >
//                 Start Now
//               </Link>
//               <Link
//                 to="/login"
//                 className="px-6 py-3 border border-gray-300 text-gray-300 rounded-lg text-lg shadow-lg hover:bg-gray-300 hover:text-black transition"
//               >
//                 Log In
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Features Section */}

//       <section className="py-20 bg-gray-50 text-center">
//         <h2 className="text-4xl font-bold text-gray-800 drop-shadow-md">
//           More than 20+ features to run business easily!
//         </h2>
//         <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
//           Invoice generation, bills, receipts, GST calculations, customer
//           portal, monthly reports, instant data chatbot, data analytics,
//           business recommendations, and many more...
//         </p>
//         <div className="mt-8 flex flex-wrap justify-center gap-6">
//           {[
//             "Invoice generation",
//             "GST Calculations",
//             "Customer Portal",
//             "Instant Data Chatbot",
//             "AI-Based Recommendations",
//             "Business Analytics",
//           ].map((feature, index) => (
//             <div
//               key={index}
//               className="flex items-center bg-white shadow-lg p-4 rounded-lg hover:shadow-xl transition"
//             >
//               <FaCheckCircle className="text-blue-600 mr-2" />
//               <span className="text-gray-700 font-semibold">{feature}</span>
//             </div>
//           ))}
//         </div>
//       </section>

//       <Features />
//       <CTA />
//       <Footer />
//     </div>
//   );
// }

// export default LandingPage;



import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Features from "../components/Features";
import CTA from "../components/CTA";
import Footer from "../components/Footer";
import businessImage from "../assets/business.png";
import { FaCheckCircle } from "react-icons/fa";

function LandingPage() {
  return (
    <div className="w-full bg-gray-900 text-white">
      <Navbar />

      {/* Hero Section */}
      <div className="relative w-full h-screen flex items-center justify-center bg-gray-900 p-6">
        {/* <div className="flex w-full max-w-7xl mx-auto items-center justify-between"> */}
        <div className="flex w-full items-center justify-between px-6">

          <div className="w-1/2">
            <img
              src={businessImage}
              alt="Business Growth"
              className="w-full max-w-lg opacity-80"
            />
          </div>
          <div className="w-1/2 bg-gray-800/50 p-10 rounded-2xl shadow-2xl text-center">
            <h1 className="text-5xl font-extrabold text-blue-400 leading-tight">
              Next-Gen Business Tool
            </h1>
            <p className="mt-4 text-lg text-gray-200">
              The ultimate tool for GST invoicing, analytics, AI-based
              recommendations, KPI tracking, customer portals, and more—all for
              FREE!
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <Link
                to="/signup"
                className="px-6 py-3 border border-blue-400 text-blue-400 rounded-lg text-lg hover:bg-blue-400 hover:text-white transition"
              >
                Start Now
              </Link>
              <Link
                to="/login"
                className="px-6 py-3 border border-gray-300 text-gray-300 rounded-lg text-lg hover:bg-gray-300 hover:text-black transition"
              >
                Log In
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <section className="py-20 w-full bg-gray-900 text-center">
        <h2 className="text-4xl font-bold text-gray-200">
          More than 20+ features to run business easily!
        </h2>
        <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
          Invoice generation, bills, receipts, GST calculations, customer
          portal, monthly reports, instant data chatbot, data analytics,
          business recommendations, and many more...
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-6">
          {[
            "Invoice generation",
            "GST Calculations",
            "Customer Portal",
            "Instant Data Chatbot",
            "AI-Based Recommendations",
            "Business Analytics",
          ].map((feature, index) => (
            <div
              key={index}
              className="flex items-center bg-gray-800 p-4 rounded-lg hover:shadow-xl transition"
            >
              <FaCheckCircle className="text-blue-400 mr-2" />
              <span className="text-gray-300 font-semibold">{feature}</span>
            </div>
          ))}
        </div>
      </section>

      <Features />
      <CTA />
      <Footer />
    </div>
  );
}

export default LandingPage;
