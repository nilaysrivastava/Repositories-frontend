import React from "react";
import { GrStorage } from "react-icons/gr";

const RepositoryCard = ({ name, visibility, language, size, updatedAt }) => {
  return (
    <div className="flex items-center justify-between border-b border-gray-200 p-4">
      <div>
        <div className="flex items-center gap-2">
          <h3 className="text-lg font-medium text-gray-900">{name}</h3>
          <span className="bg-blue-100 text-blue-600 rounded-xl px-2 border border-blue-200 text-sm">
            {visibility}
          </span>
        </div>
        <div className="flex items-center text-sm text-gray-600 gap-4 mt-1 space-x-4">
          <div className="flex items-center gap-1">
            {language}
            <span className="w-2 h-2 rounded-full bg-blue-500"></span>
          </div>
          <div className="flex items-center justify-center">
            <span className="px-1">
              <GrStorage />
            </span>
            {size}
          </div>
          <div>{updatedAt}</div>
        </div>
      </div>
    </div>
  );
};

export default RepositoryCard;
