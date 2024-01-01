import React from "react";

interface ExperienceProps {
  title: string;
  company: string;
  designation: string;
  startDate: string;
  endDate: string;
  description: string;
}

const Experience: React.FC<ExperienceProps> = ({
  title,
  company,
  designation,
  startDate,
  endDate,
  description,
}) => {
  return (
    <div className="py-4">
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="text-gray-600">
        {designation} at {company}
      </p>
      <p className="text-gray-500">
        {startDate} - {endDate}
      </p>
      <p className="mt-2">{description}</p>
    </div>
  );
};

export default Experience;
