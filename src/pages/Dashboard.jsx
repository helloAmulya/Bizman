// import React from "react";
// import { useNavigate } from "react-router-dom";

// function Dashboard() {
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     // Clear user session (if using real auth, clear tokens)
//     navigate("/");
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 flex flex-col items-center p-8">
//       <h1 className="text-4xl font-bold text-gray-800">
//         Welcome to BizMan Dashboard
//       </h1>
//       <p className="text-gray-600 mt-2">
//         Manage your business efficiently with BizMan ERP.
//       </p>

//       <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
//         <div className="p-6 bg-white rounded-lg shadow-md text-center">
//           <h3 className="text-2xl font-semibold">Retail ERP</h3>
//           <p className="text-gray-600">
//             Track sales, manage inventory, and analyze reports.
//           </p>
//         </div>
//         <div className="p-6 bg-white rounded-lg shadow-md text-center">
//           <h3 className="text-2xl font-semibold">Restaurant ERP</h3>
//           <p className="text-gray-600">
//             Optimize restaurant orders and enhance dining experiences.
//           </p>
//         </div>
//         <div className="p-6 bg-white rounded-lg shadow-md text-center">
//           <h3 className="text-2xl font-semibold">Distribution ERP</h3>
//           <p className="text-gray-600">
//             Manage supply chain and logistics effectively.
//           </p>
//         </div>
//       </div>

//       <button
//         onClick={handleLogout}
//         className="mt-8 px-6 py-3 bg-red-600 text-white rounded-md text-lg"
//       >
//         Log Out
//       </button>
//     </div>
//   );
// }

// export default Dashboard;



import React from "react";
import { useNavigate } from "react-router-dom";
import { FaChartBar, FaShoppingCart, FaUtensils, FaTruck, FaSignOutAlt, FaCloud, FaRobot, FaTachometerAlt, FaUsers, FaCog } from "react-icons/fa";

function Dashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col">
      <aside className="w-64 bg-gray-800 min-h-screen p-5 fixed">
        <h2 className="text-3xl font-bold text-blue-400 mb-8">BizMan</h2>
        <nav className="space-y-4">
          <a href="#" className="flex items-center gap-3 p-3 hover:bg-gray-700 rounded transition">
            <FaTachometerAlt /> Dashboard
          </a>
          <a href="#" className="flex items-center gap-3 p-3 hover:bg-gray-700 rounded transition">
            <FaUsers /> Customers
          </a>
          <a href="#" className="flex items-center gap-3 p-3 hover:bg-gray-700 rounded transition">
            <FaChartBar /> Analytics
          </a>
          <a href="#" className="flex items-center gap-3 p-3 hover:bg-gray-700 rounded transition">
            <FaCog /> Settings
          </a>
        </nav>
      </aside>

      <div className="ml-64 flex-1 p-10">
        {/* Header */}
        <header className="bg-gray-800 p-5 rounded-lg shadow-md flex justify-between items-center">
          <h1 className="text-4xl font-extrabold text-blue-400">Dashboard</h1>
          <button
            onClick={handleLogout}
            className="px-4 py-2 bg-red-600 text-white rounded-lg shadow-md hover:bg-red-700 transition flex items-center gap-2"
          >
            <FaSignOutAlt /> Log Out
          </button>
        </header>

        {/* Stats Section */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <div className="p-6 bg-blue-500 rounded-lg shadow-lg flex items-center gap-4">
            <FaShoppingCart className="text-4xl text-white" />
            <div>
              <h3 className="text-lg font-semibold">Total Sales</h3>
              <p className="text-2xl font-bold">$25,430</p>
            </div>
          </div>
          <div className="p-6 bg-green-500 rounded-lg shadow-lg flex items-center gap-4">
            <FaUsers className="text-4xl text-white" />
            <div>
              <h3 className="text-lg font-semibold">New Customers</h3>
              <p className="text-2xl font-bold">342</p>
            </div>
          </div>
          <div className="p-6 bg-purple-500 rounded-lg shadow-lg flex items-center gap-4">
            <FaTruck className="text-4xl text-white" />
            <div>
              <h3 className="text-lg font-semibold">Pending Orders</h3>
              <p className="text-2xl font-bold">76</p>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          {["Biz Accounting", "Customer Portal", "Biz Suggestion", "Bizbot", "Biz Intel", "Cloud System"].map((feature, index) => (
            <div
              key={index}
              className="p-6 bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transform transition duration-300 hover:-translate-y-2 text-center"
            >
              <div className="text-5xl text-blue-400">
                {[<FaChartBar />, <FaShoppingCart />, <FaUtensils />, <FaRobot />, <FaChartBar />, <FaCloud />][index]}
              </div>
              <h3 className="text-2xl font-semibold mt-4">{feature}</h3>
              <p className="text-gray-300 mt-3 text-lg">Manage and optimize business operations effectively.</p>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
}

export default Dashboard;
