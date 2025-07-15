import React from "react";
import Image from "next/image";
import Discoverbtn from "@/app/component/homepage/button/discoverbtn"
import Girl from "@/icons/main/main-slider.png";

const first = () => {
  return (
    <div className="flex pl-[10rem]">
      <div className="flex flex-col w-[43%] gap-7 mt-[70px]">
        <h1 className="text-[70px] font-semibold text-[70px] leading-[1]">
          Secure Your Future With Insur Insurance
        </h1>
        <p>
          Lorem ipsum dolor sit am adipi we help you ensure everyone is in the
          right jobs sicing elit, sed do consulting firms. 
        </p>
      <Discoverbtn 
      bgcolor={"bg-primary"}
      hovercolor={"hover:bg-black"}
      btntext={"hover:text-white"}
       />
      </div>
      <div className="h-full">
        <Image src={Girl} alt="Image" className="h-[700px] w-[700px]" />
      </div>
    </div>
  );
};

export default first;
