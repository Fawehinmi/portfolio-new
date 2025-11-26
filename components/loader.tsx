import { div } from "framer-motion/client";
import React from "react";

export const ApLoader = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="loader"></div>
      <p className="text-zinc-500">Loading Resources...</p>
    </div>
  );
};
