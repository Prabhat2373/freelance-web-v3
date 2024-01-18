import IconReact from "@/components/icons/IconReact";
import React from "react";
import { Badge } from "../badge";
import Link from "next/link";

const McqTestCard = ({ data }) => {
  const totalQuestions = data?.questions?.length;
  return (
    <Link href={`/fl/mcq-tests/${data?._id}`}>
      <div className="bg-white p-6 rounded-lg shadow-md">
        {/* Test Name */}
        <div className="flex gap-2">
          <IconReact />
          <h2 classNaame="text-xl font-semibold mb-2">{data?.name}</h2>
        </div>

        {/* Icon */}

        {/* Description */}
        <p className="text-gray-700 mb-4">{data?.description}</p>

        {/* Total Questions and Difficulty */}
        <div className="flex justify-between items-center">
          <span className="text-gray-600">
            Total Questions: {totalQuestions}
          </span>
          <span className="text-gray-600">
            <Badge>High</Badge>
          </span>
        </div>
      </div>
    </Link>
  );
};

export default McqTestCard;
