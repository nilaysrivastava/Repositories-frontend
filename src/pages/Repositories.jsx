import React from "react";
import { SearchIcon, RefreshIcon } from "@heroicons/react/outline"; // Import icons
import RepositoryCard from "../components/RepositoryCard";
import Sidebar from "../components/Sidebar"; // Import Sidebar component

const Repository = () => {
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

  return (
    <div className="flex min-h-screen">
      <div className="sticky top-0 left-0 h-screen w-64 bg-white shadow-lg flex flex-col">
        <Sidebar /> {/* Sidebar stays fixed */}
      </div>
      <div className="flex-grow p-8 bg-gray-50 overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <div className="flex flex-col">
            <h1 className="text-2xl font-bold text-gray-900">Repositories</h1>
            <h2 className="text-1xl text-gray-500">33 total repositories</h2>
          </div>
          <div className="flex items-center gap-2">
            <button className="flex items-center px-4 py-2 bg-white text-gray-700 shadow-even rounded-md text-sm">
              <RefreshIcon className="w-4 h-4 mr-2" />
              Refresh All
            </button>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-md text-sm">
              + Add Repository
            </button>
          </div>
        </div>
        <div className="flex items-center gap-4 mb-4">
          <div className="relative w-1/3">
            <input
              type="text"
              placeholder="Search Repositories"
              className="w-full border border-gray-300 rounded-md px-4 py-2 pl-10 text-sm"
            />
            <SearchIcon className="w-5 h-5 absolute left-3 top-2.5 text-gray-400" />
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-sm">
          {repositories.map((repo) => (
            <RepositoryCard key={repo.name} {...repo} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Repository;
