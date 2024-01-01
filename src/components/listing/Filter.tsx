import React, { useState } from "react";

interface FilterProps {
  filters: {
    fixedPrice: boolean;
    hourlyPrice: boolean;
    priceRange: {
      from: number;
      to: number;
    };
    skills: string[];
    location: string;
  };
  onChange: (newFilters: FilterProps["filters"]) => void;
}

const FilterSection: React.FC<FilterProps> = ({ filters, onChange }) => {
  const [selectedSkills, setSelectedSkills] = useState<string[]>(
    filters.skills
  );

  const handleCheckboxChange = (skill: string) => {
    if (selectedSkills.includes(skill)) {
      setSelectedSkills((prevSkills) => prevSkills.filter((s) => s !== skill));
    } else {
      setSelectedSkills((prevSkills) => [...prevSkills, skill]);
    }
  };

  const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = event.target;
    onChange({
      ...filters,
      [name]: checked,
      skills: selectedSkills,
    });
  };
  const handlePriceRangeChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = event.target;
    onChange({
      ...filters,
      priceRange: {
        ...filters.priceRange,
        [name]: Number(value),
      },
    });
  };

  return (
    <aside className="w-64 bg-white p-4 shadow-md">
      <h2 className="text-lg font-medium mb-4">Filters</h2>
      <div className="mb-4">
        <label className="block mb-1">Price Range</label>
        <div className="flex items-center">
          <input
            type="range"
            name="from"
            min={0}
            max={100}
            value={filters.priceRange.from}
            onChange={handlePriceRangeChange}
            className="w-full"
          />
          <span className="mx-2">{filters.priceRange.from}</span>
          <span className="mx-2">to</span>
          <input
            type="range"
            name="to"
            min={0}
            max={100}
            value={filters.priceRange.to}
            onChange={handlePriceRangeChange}
            className="w-full"
          />
          <span className="mx-2">{filters.priceRange.to}</span>
        </div>
      </div>
      <div className="mb-4">
        <label className="flex items-center">
          <input
            type="checkbox"
            name="fixedPrice"
            checked={filters.fixedPrice}
            onChange={handleFilterChange}
            className="form-checkbox mr-2"
          />
          Fixed Price
        </label>
      </div>
      <div className="mb-4">
        <label className="flex items-center">
          <input
            type="checkbox"
            name="hourlyPrice"
            checked={filters.hourlyPrice}
            onChange={handleFilterChange}
            className="form-checkbox mr-2"
          />
          Hourly Price
        </label>
      </div>
      <div className="mb-4">
        <label className="flex items-center">
          <input
            type="checkbox"
            name="priceRange"
            checked={filters.priceRange}
            onChange={handleFilterChange}
            className="form-checkbox mr-2"
          />
          Price Range
        </label>
      </div>
      <div className="mb-4">
        <h3 className="font-medium mb-2">Skills</h3>
        <label className="flex items-center">
          <input
            type="checkbox"
            name="React"
            checked={selectedSkills.includes("React")}
            onChange={() => handleCheckboxChange("React")}
            className="form-checkbox mr-2"
          />
          React
        </label>
        <label className="flex items-center">
          <input
            type="checkbox"
            name="JavaScript"
            checked={selectedSkills.includes("JavaScript")}
            onChange={() => handleCheckboxChange("JavaScript")}
            className="form-checkbox mr-2"
          />
          JavaScript
        </label>
        {/* Add more skills as needed */}
      </div>
      <div>
        <h3 className="font-medium mb-2">Location</h3>
        <input
          type="text"
          name="location"
          value={filters.location}
          onChange={handleFilterChange}
          className="border border-gray-300 rounded-md px-2 py-1 w-full"
        />
      </div>
    </aside>
  );
};

export default FilterSection;
