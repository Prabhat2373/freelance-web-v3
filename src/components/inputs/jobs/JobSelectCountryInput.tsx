import { IconLocation, IconPin } from "@tabler/icons-react";
import { MapPin, PinIcon } from "lucide-react";
import React from "react";

const JobSelectCountryInput = () => {
  return (
    <div className="flex gap-2 items-center w-full">
      <div>
        <MapPin />
      </div>
      <input
        className="outline-none w-full"
        placeholder="Country or timezone"
      />
    </div>
  );
};

export default JobSelectCountryInput;
