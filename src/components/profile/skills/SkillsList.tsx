import Card from '@/components/cards/Card';
import React from "react";

export interface Skill {
  id: string;
  name: string;
}

interface SkillsListProps {
  skills: Skill[];
}

const SkillsList: React.FC<SkillsListProps> = ({ skills }) => {
  return (
    <Card headline='Skills'>
      {/* <h2 className="text-lg font-medium mb-4">Skills</h2> */}
      <ul className="grid grid-cols-2 gap-4">
        {skills.map((skill) => (
          <li key={skill.id} className="flex items-center space-x-2">
            <svg
              className="h-4 w-4 text-gray-400"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              />
            </svg>
            <span>{skill.name}</span>
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default SkillsList;
