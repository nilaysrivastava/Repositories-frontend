import React, { useState } from "react";
import {
  HomeIcon,
  CodeIcon,
  CloudIcon,
  BookOpenIcon,
  CogIcon,
  PhoneIcon,
  LogoutIcon,
  MenuIcon,
  XIcon,
} from "@heroicons/react/outline";
import lb from "../images/logo-b.png";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const [selectedOrganization, setSelectedOrganization] = useState(
    "UtkarshDhairyaPa..."
  );

  const organizations = [
    "UtkarshDhairyaPa...",
    "CodeAnt Inc.",
    "TechSolutions Ltd.",
    "InnovateX",
    "NextGen Ventures",
  ];

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <>
      {/* Header and Hamburger Icon */}
      <div className="bg-white flex items-center justify-between px-4 py-2 shadow-md sm:hidden">
        <div className="flex items-center">
          <img src={lb} alt="Logo" className="w-6 h-6 mr-2" />
          <span className="font-bold text-gray-800">CodeAnt AI</span>
        </div>
        <button
          onClick={toggleSidebar}
          className="p-2 rounded-md bg-gray-200 focus:outline-none"
        >
          <MenuIcon className="w-6 h-6" />
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 w-full bg-white shadow-lg z-20 transform transition-transform duration-300 sm:w-64 sm:relative sm:translate-x-0 sm:translate-y-0 ${
          isOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        {/* Close Button */}
        <button
          onClick={toggleSidebar}
          className="absolute top-4 right-4 p-2 rounded-md bg-gray-200 focus:outline-none sm:hidden"
        >
          <XIcon className="w-6 h-6" />
        </button>

        {/* Logo and Organization Dropdown */}
        <div className="p-6 border-b border-gray-200">
          <div className="mb-4 text-1xl font-bold flex flex-row items-center justify-center sm:justify-start">
            <img src={lb} className="w-6 h-6 mr-2" alt="Logo" />
            <div>CodeAnt AI</div>
          </div>
          <select
            className="w-full px-4 py-2 border border-gray-300 rounded-md text-sm"
            value={selectedOrganization}
            onChange={(e) => setSelectedOrganization(e.target.value)}
          >
            <option>All</option>
            {organizations.map((org, index) => (
              <option key={index} value={org}>
                {org}
              </option>
            ))}
          </select>
        </div>

        {/* Navigation Links */}
        <nav className="px-2 space-y-1 text-sm mt-4">
          <a
            href="#"
            className="flex items-center px-4 py-2 text-white bg-blue-600 rounded-md"
          >
            <HomeIcon className="w-5 h-5 mr-3" />
            Repositories
          </a>
          <a
            href="#"
            className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md"
          >
            <CodeIcon className="w-5 h-5 mr-3" />
            AI Code Review
          </a>
          <a
            href="#"
            className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md"
          >
            <CloudIcon className="w-5 h-5 mr-3" />
            Cloud Security
          </a>
          <a
            href="#"
            className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md"
          >
            <BookOpenIcon className="w-5 h-5 mr-3" />
            How to Use
          </a>
          <a
            href="#"
            className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md"
          >
            <CogIcon className="w-5 h-5 mr-3" />
            Settings
          </a>
        </nav>

        {/* Support and Logout */}
        <div className="md:px-6 lg:px-6 px-4 pb-4 text-sm lg:absolute lg:bottom-0 md:absolute md:bottom-0">
          <a
            href="#"
            className="flex items-center px-2 py-1 text-gray-700 hover:bg-gray-100 rounded-md mb-2"
          >
            <PhoneIcon className="w-5 h-5 mr-3" />
            Support
          </a>
          <a
            href="#"
            className="flex items-center px-2 py-1 text-gray-700 hover:bg-gray-100 rounded-md"
            onClick={handleLogout}
          >
            <LogoutIcon className="w-5 h-5 mr-3" />
            Logout
          </a>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
