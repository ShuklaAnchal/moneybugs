import React from "react";
import Leftcom from "./opportunitycomponents.js/leftcom";
import Rightcom from "./opportunitycomponents.js/rightcom";

const opportunity = () => {
  return (
    <div className="w-full lg:h-[90vh] h-auto bg-primary flex lg:flex-row flex-col">
      <Leftcom />
      <Rightcom />
    </div>
  );
};

export default opportunity;
