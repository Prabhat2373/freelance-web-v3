import { HeartIcon, ThumbsUpIcon } from "lucide-react";
import React, { HTMLAttributes } from "react";

interface IJobCardProps extends HTMLAttributes<HTMLElement> {
  data: any;
  hideOptions?: boolean;
}
const JobCard = ({ data, hideOptions, ...props }: IJobCardProps) => {
  console.log("data", data);

  return (
    <div className="bg-white m-3 rounded-md p-3" onClick={props.onClick}>
      <div className="flex justify-between">
        <div>
          <div>
            <h1>
              {data?.job_title} - {data?.location}
            </h1>
          </div>
          <div>
            <h1>
              Fixed-price - Intermediate - Est. Budget: $2,000 - Posted 8 hours
              ago
            </h1>
          </div>
          <div>
            <p>{data?.job_description}</p>
          </div>
          <div>
            <span>Fixed Rate</span>
            <span>ratings</span>
            <span>(12 Reviews)</span>
            <span>Manhattan, USA</span>
          </div>
        </div>
        {!hideOptions && (
          <div className="flex items-center gap-4">
            <HeartIcon />
            <ThumbsUpIcon />
          </div>
        )}
      </div>
    </div>
  );
};

export default JobCard;
