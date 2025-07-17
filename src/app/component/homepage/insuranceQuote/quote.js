import React from "react";
import Image from "next/image";
import firstbg from "@/icons/main/insuranceshape1.png";
import secondbg from "@/icons/main/insurance-shape2.png";

import InsuranceQuote from "./textandformlayer";

const Quote = () => {
  return (
    <div className="relative w-full lg:h-[110vh] h-auto flex flex-col bg-[#f3f3f3] overflow-hidden">
      {/* Top Background Image */}
      <div className="absolute top-0 right-0 left-0 w-full z-0 pointer-events-none">
        <Image
          src={secondbg}
          alt="Top background"
          className="w-[50%] ml-auto object-cover"
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 flex-1">
        <InsuranceQuote />
      </div>

      {/* Bottom Background Image */}
      <div className="relative z-50 ">
        <Image
          src={firstbg}
          alt="Bottom background"
          className="w-full lg:h-auto h-[20%] bottom-0 object-cover"
        />
      </div>
    </div>
  );
};

export default Quote;
