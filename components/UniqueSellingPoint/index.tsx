import React from "react";

interface IUsp {
  status: string;
}

const UniqueSellingPoint: React.FC<IUsp> = ({ status }) => {
  const getStatusStyle = (status: string) => {
    switch (status) {
      case "New":
        return "bg-green-900";
      case "Hot":
        return "bg-red-700";
      case "Best Deal":
        return "bg-blue-900";
      case "Top Pick by AI":
        return "bg-purple-900 animate-pulse";
      case "Most Suitable for You":
        return "bg-teal-900";
      default:
        return "bg-gray-900";
    }
  };

  return (
    <div className="flex items-center mb-4">
      <span
        className={`${getStatusStyle(
          status
        )} text-white text-xs font-bold mr-2 px-2.5 py-0.5 rounded`}
      >
        {status}
      </span>
    </div>
  );
};

export default UniqueSellingPoint;
