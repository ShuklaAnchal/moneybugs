import React from "react";
import Discoverbtn from "../button/discoverbtn";

const LeftCom = ({
  subtitle,
  heading ,
  description,
  onClick
}) => {
  return (
    <div
      className={`w-full lg:w-1/2 flex flex-col justify-center gap-4 h-full text-[16px] text-textinsu px-4 sm:px-6 lg:px-24 py-10 lg:py-0`}
    >
      <p className="mt-2 lg:mt-0 text-sm sm:text-base text-white">{subtitle}</p>
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[45px] text-textinsu font-semibold leading-snug sm:leading-snug lg:leading-[50px]">
        {heading}
      </h1>
      <p className="text-sm sm:text-base text-textinsu max-w-xl">{description}</p>
      <Discoverbtn onClick={onClick}  bgcolor="bg-[#65A69C]" />
    </div>
  );
};

export default LeftCom;
