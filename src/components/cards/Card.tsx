import React, { ReactNode } from "react";

interface CardProps {
  headline: string;
  showEditButton?: boolean;
  showDeleteButton?: boolean;
  children: ReactNode;
  showBottomButton?: boolean;
  buttonText?: string;
}

const Card = ({
  headline,
  showEditButton = false,
  showDeleteButton = false,
  children,
  showBottomButton = false,
  buttonText = "View More",
}: CardProps) => {
  return (
    <div className="border rounded-lg p-4 bg-white">
      <div className="flex justify-between items-center border-b pb-2">
        <h2 className="text-xl font-bold">{headline}</h2>
        {showEditButton && <button className="mr-2">Edit</button>}
        {showDeleteButton && <button>Delete</button>}
      </div>
      <div className="my-4">{children}</div>
      {showBottomButton && (
        <div className="flex justify-center mt-4">
          <button className="bg-blue-500 text-white rounded px-4 py-2">
            {buttonText}
          </button>
        </div>
      )}
    </div>
  );
};

export default Card;
