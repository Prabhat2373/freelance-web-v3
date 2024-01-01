import React from "react";

const SearchBox = () => {
  return (
    <div className="flex w-full">
      <div className="w-full">
        <input
          type="search"
          placeholder="search job"
          className="px-12 py-4 w-full rounded-l-md"
        />
      </div>
      <div>
        <button className="bg-red-500 rounded-r-md px-7 py-4 text-white">
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchBox;
