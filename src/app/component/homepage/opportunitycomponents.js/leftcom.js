import React from "react";
import Discoverbtn from "../button/discoverbtn";

const leftcom = () => {
  return (
    <div className="w-[50%] flex flex-col justify-center gap-4 h-full bg-primary text-[16px] text-[#FFE1E1] pl-[10rem]">
      <p className="">Why Choose Us</p>
      <h1 className="text-[45px] text-white font-semibold leading-[50px] pr-10">
        We Create Opportunity to Reach Our All the Customers
      </h1>
      <p className="pr-20">
        There are many variations of passages of Lorem Ipsum available, but the
        majority have suffered alteration in some form, by injected humour, or
        randomised words.
      </p>
      <Discoverbtn bgcolor={"bg-black"} hovercolor={"hover:bg-[#FFE1E1]"} btntext={"hover:text-primary"} />
    </div>
  );
};

export default leftcom;
