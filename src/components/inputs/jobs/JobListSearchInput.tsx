import { Search } from "lucide-react";
import React from "react";

const JobListSearchInput = () => {
  return (
    <div className="flex gap-2 items-center w-full">
      <div>
        <Search />
      </div>
      <input
        className="outline-none w-full"
        placeholder="Search job title or keyword"
      />
    </div>
  );
};

export default JobListSearchInput;
