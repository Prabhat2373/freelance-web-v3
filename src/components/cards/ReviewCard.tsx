import React from "react";

interface ReviewCardProps {
  imageSrc: string;
  name: string;
  content: string;
}

const ReviewCard: React.FC<ReviewCardProps> = ({ imageSrc, name, content }) => {
  return (
    <div className="flex p-4 border rounded-lg">
      <div className="w-16 h-16 rounded-full overflow-hidden">
        <img src={imageSrc} alt={name} className="w-full h-full object-cover" />
      </div>
      <div className="ml-4">
        <h3 className="font-bold">{name}</h3>
        <p>{content}</p>
      </div>
    </div>
  );
};

export default ReviewCard;
