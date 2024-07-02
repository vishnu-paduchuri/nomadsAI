import React, { useState } from "react";
import { FaSearch, FaTimes } from "react-icons/fa";

interface ISearchProps {
  onSearch: (query: string) => void;
  onClear: () => void;
  loading: boolean;
}

const SearchBar: React.FC<ISearchProps> = ({ onSearch, onClear, loading }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [hasSearched, setHasSearched] = useState(false);

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      setHasSearched(true);
      onSearch(searchQuery);
    }
  };

  const handleClear = () => {
    setSearchQuery("");
    setHasSearched(false);
    onClear();
  };

  return (
    <div className="flex items-center space-x-2">
      <form
        onSubmit={handleSearch}
        className="flex items-center w-full max-w-md rounded-full overflow-hidden border border-gray-300"
      >
        <input
          type="text"
          placeholder="Business name"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="flex-grow px-4 py-2 outline-none"
          disabled={loading}
        />
        <button
          type="submit"
          className="text-black px-4 py-2 flex items-center justify-center"
          disabled={loading}
        >
          <FaSearch />
        </button>
      </form>
      {hasSearched && (
        <button
          onClick={handleClear}
          className="bg-gray-300 text-gray-700 px-2 py-2 rounded-full flex items-center justify-center"
          disabled={loading}
        >
          <FaTimes />
        </button>
      )}
    </div>
  );
};

export default SearchBar;
