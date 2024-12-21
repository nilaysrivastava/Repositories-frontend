import React, { useState } from "react";
import {
  HomeIcon,
  CodeIcon,
  CloudIcon,
  BookOpenIcon,
  CogIcon,
  PhoneIcon,
  LogoutIcon,
} from "@heroicons/react/outline";
import { useNavigate } from "react-router-dom";
import lb from "../images/logo-b.png"; // Import Logo

const Sidebar = () => {
  const [selectedOrganization, setSelectedOrganization] = useState(
    "UtkarshDhairyaPa..."
  );
  const navigate = useNavigate();

  const organizations = [
    "UtkarshDhairyaPa...",
    "CodeAnt Inc.",
    "TechSolutions Ltd.",
    "InnovateX",
    "NextGen Ventures",
  ];

  const repositories = [
    {
      name: "design-system",
      visibility: "Public",
      language: "React",
      size: "7320 KB",
      updatedAt: "Updated 1 day ago",
    },
    {
      name: "codeant-ci-app",
      visibility: "Private",
      language: "Javascript",
      size: "5871 KB",
      updatedAt: "Updated 2 days ago",
    },
    {
      name: "analytics-dashboard",
      visibility: "Private",
      language: "Python",
      size: "4521 KB",
      updatedAt: "Updated 5 days ago",
    },
    {
      name: "mobile-app",
      visibility: "Public",
      language: "Swift",
      size: "3096 KB",
      updatedAt: "Updated 3 days ago",
    },
    {
      name: "e-commerce-platform",
      visibility: "Private",
      language: "Java",
      size: "6210 KB",
      updatedAt: "Updated 6 days ago",
    },
    {
      name: "blog-website",
      visibility: "Public",
      language: "HTML/CSS",
      size: "1876 KB",
      updatedAt: "Updated 4 days ago",
    },
    {
      name: "social-network",
      visibility: "Private",
      language: "PHP",
      size: "5432 KB",
      updatedAt: "Updated 7 days ago",
    },
  ];

  const handleLogout = () => {
    navigate("/");
  };

  const filteredRepositories = repositories.filter((repo) =>
    selectedOrganization === "All"
      ? true
      : repo.visibility === selectedOrganization
  );

  return (
    <div className="w-64 h-screen bg-white shadow-lg flex flex-col">
      {/* Logo and Profile Dropdown */}
      <div className="p-6">
        <div className="mb-4 text-1xl font-bold flex flex-row items-center justify-center">
          <div>
            <img src={lb} className="w-6 h-6" alt="Logo" />
          </div>
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
      <nav className="flex-1 px-2 space-y-1 text-sm">
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
      <div className="px-8 pb-4 text-sm">
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
  );
};

export default Sidebar;
