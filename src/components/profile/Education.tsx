import React from "react";

type EducationProps = {
  degree: string;
  major: string;
  university: string;
  graduationYear: string;
  description: string;
};

const Education: React.FC<EducationProps> = ({
  degree,
  major,
  university,
  graduationYear,
  description,
}) => {
  return (
    <div className="bg-white p-4 rounded-md shadow-md">
      <h2 className="text-xl font-bold">{degree}</h2>
      <h3 className="text-lg">{major}</h3>
      <p className="text-gray-500">{university}</p>
      <p className="text-gray-500">{graduationYear}</p>
      <p className="mt-2">{description}</p>
    </div>
  );
};

export default Education;
