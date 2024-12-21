import React from "react";

const RepositoryCard = ({ name, visibility, language, size, updatedAt }) => {
  return (
    <div className="flex items-center justify-between border-b border-gray-200 p-4">
      <div>
        <div className="flex items-center gap-2">
          <h3 className="text-lg font-medium text-gray-900">{name}</h3>
          <span
            className={`${
              visibility === "Public"
                ? "bg-blue-100 text-blue-600"
                : "bg-gray-100 text-gray-600"
            } text-sm px-2 py-1 rounded-md`}
          >
            {visibility}
          </span>
        </div>
        <div className="flex items-center text-sm text-gray-600 gap-4 mt-1">
          <div className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-blue-500"></span>
            {language}
          </div>
          <div>{size}</div>
          <div>{updatedAt}</div>
        </div>
      </div>
    </div>
  );
};

export default RepositoryCard;
