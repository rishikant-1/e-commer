import React from "react";
import { FaUserEdit, FaBoxOpen, FaPlusCircle, FaChartLine } from "react-icons/fa";

function Main() {
  const cards = [
    {
      title: "Complete Profile",
      icon: <FaUserEdit size={30} className="text-indigo-500" />,
      desc: "Update and complete your seller profile.",
    },
    {
      title: "Manage Products",
      icon: <FaBoxOpen size={30} className="text-green-500" />,
      desc: "View, edit, and organize your products easily.",
    },
    {
      title: "Add New Product",
      icon: <FaPlusCircle size={30} className="text-red-400" />,
      desc: "Quickly add and publish a new product.",
    },
    {
      title: "Sales Analytics",
      icon: <FaChartLine size={30} className="text-yellow-500" />,
      desc: "Track your sales performance and growth.",
    },
  ];

  return (
    <div className="ring-1 ring-gray-200 rounded-xl gap-6 p-6 flex justify-center items-center flex-col bg-white shadow-lg">
      <h2 className="text-4xl font-bold text-gray-800 text-center">
        Hi, Welcome to the 
        <span className="text-red-500"> Seller </span> Dashboard 
      </h2>
      <p className="text-gray-500 text-lg">
        Manage your products, profile, and sales all in one place.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6 w-full max-w-6xl">
        {cards.map((card, i) => (
          <div
            key={i}
            className="bg-gray-50 hover:bg-white border border-gray-200 hover:border-indigo-400 p-6 h-48 rounded-2xl flex flex-col items-center justify-center gap-3 shadow-sm hover:shadow-xl cursor-pointer transform hover:scale-106 transition duration-300"
          >
            {card.icon}
            <h3 className="text-lg font-semibold text-gray-800">{card.title}</h3>
            <p className="text-sm text-gray-500 text-center">{card.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Main;
