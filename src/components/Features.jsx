import React from "react";
import {
  FaFileInvoiceDollar,
  FaUserFriends,
  FaLightbulb,
  FaRobot,
  FaChartBar,
  FaCloud,
} from "react-icons/fa";

function Features() {
  const features = [
    {
      title: "Biz Accounting",
      description:
        "GST-based accounting tool to manage sales, purchases, payments, and credits. Generate 30+ reports for deep business insights.",
      icon: <FaFileInvoiceDollar className="text-blue-600 text-6xl" />,
    },
    {
      title: "Customer Portal",
      description:
        "Let your customers log in anytime to place sales orders, view invoices, and track payments without needing assistance!",
      icon: <FaUserFriends className="text-green-600 text-6xl" />,
    },
    {
      title: "Biz Suggestion",
      description:
        "AI-driven recommendations for purchase quantities, cross-selling products, inventory movement, and customer reliability.",
      icon: <FaLightbulb className="text-yellow-600 text-6xl" />,
    },
    {
      title: "Bizbot",
      description:
        "Get instant answers to business queries, view latest invoices, due payments, and sales orders with a smart chatbot.",
      icon: <FaRobot className="text-purple-600 text-6xl" />,
    },
    {
      title: "Biz Intel",
      description:
        "Visualize business performance with comprehensive analytics, 20+ KPI determinations, and actionable insights.",
      icon: <FaChartBar className="text-red-600 text-6xl" />,
    },
    {
      title: "Stay Up to Date",
      description:
        "Secure cloud-based access to all your business data from any device, anytime, anywhere with ease.",
      icon: <FaCloud className="text-white text-6xl" />,
    },
  ];

  return (
    <section className="py-20 bg-gray-900 text-center ">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-bule-600 drop-shadow-lg">
          Explore Our Solutions
        </h2>
        <p className="text-white mt-3 text-lg max-w-2xl mx-auto">
          Advanced business tools designed to simplify operations and drive
          growth.
        </p>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-8 bg-gray-800/50  rounded-2xl shadow-2xl backdrop-blur-lg  transform transition duration-300 hover:-translate-y-2 hover:shadow-xl flex flex-col items-center text-center"
            >
              {feature.icon}
              <h3 className="text-2xl font-semibold mt-4  text-blue-400 leading-tight drop-shadow-md">
                {feature.title}
              </h3>
              <p className="text-white mt-3 text-lg leading-relaxed">
                {feature.description}
              </p>
              <button className="mt-5 px-6 py-3 bg-blue-600 text-white text-lg rounded-full shadow-md hover:bg-blue-700 transition duration-300">
                Learn More
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
