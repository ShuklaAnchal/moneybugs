import React from "react";
import Leftcom from "./opportunitycomponents.js/leftcom";
import Rightcom from "./opportunitycomponents.js/rightcom";

const opportunity = () => {
  return (
    <div className="w-full h-[90vh] bg-primary flex ">
      <Leftcom />
      <Rightcom />
    </div>
  );
};

export default opportunity;
