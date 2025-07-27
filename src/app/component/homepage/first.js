import React from "react";
import Image from "next/image";
import Discoverbtn from "@/app/component/homepage/button/discoverbtn"
import Girl from "@/icons/main/main-slider.png";

const first = ({onDiscoverClick }) => {
  return (
    <div className="flex lg:pl-[10rem] pl-[2rem]">
      <div className="flex flex-col lg:w-[43%] w-full gap-7 mt-[70px]  lg:mb-0 mb-[70px] ">
        <h1 className="lg:text-[70px] text-[35px] font-semibold mt-16 leading-[1] lg:w-full w-[60%]">
          Secure Your Future With Insur Insurance
        </h1>
        <p className="lg:w-full w-[70%] text-texthearder">
        MoneyBugs is a one-stop that offer customers a wide range of Risk management and Investment solution products under one roof.
        </p>
      <Discoverbtn onClick={onDiscoverClick}
       />
      </div>
      <div className="h-full hidden lg:block">
        <Image src={Girl} alt="Image" className="h-[700px] w-[700px]" />
      </div>
    </div>
  );
};

export default first;