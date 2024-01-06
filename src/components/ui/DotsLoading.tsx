import React from "react";

const DotsLoading = () => {
  return (
    <div className="flex gap-1">
      <span className="sr-only">Loading...</span>
      <div
        className="h-2 w-2 bg-white rounded-full animate-bounce"
        style={{ animationDuration: "0.5s" }}
      ></div>
      <div
        className="h-2 w-2 bg-white rounded-full animate-bounce"
        style={{ animationDuration: "0.5s", animationDelay: "-0.15s" }}
      ></div>
      <div
        className="h-2 w-2 bg-white rounded-full animate-bounce"
        style={{ animationDuration: "0.5s", animationDelay: "-0.3s" }}
      ></div>
    </div>
  );
};

export default DotsLoading;
