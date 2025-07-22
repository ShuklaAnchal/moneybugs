import React from "react";
import Leftcom from "./opportunitycomponents.js/leftcom";
import Rightcom from "./opportunitycomponents.js/rightcom";
import BackgroundImage from "@/icons/main/oppbg.jpg"
import { FaHandSparkles } from "react-icons/fa";
import { GiNotebook, GiTakeMyMoney } from "react-icons/gi";


const opportunity = () => {

const cardItems = [
  {
    id: 1,
    icon: <FaHandSparkles />,
    heading: "Fast & Easy Process",
    para: "There are many not of age of rm available the majority.",
  },
  {
    id: 2,
    icon: <GiNotebook />,
    heading: "Quick Claim Handle",
    para: "There are many not of age of rm available the majority.",
  },
  {
    id: 3,
    icon: <GiTakeMyMoney />,
    heading: "Save Your Money",
    para: "There are many not of age of rm available the majority.",
  },
];

  return (
    <div className="w-full lg:h-[90vh] h-auto bg-primary flex lg:flex-row flex-col">
     <Leftcom
  subtitle="Why Trust Us"
  heading="Empowering You to Succeed Online"
  description="We tailor strategies that bring real business results through user-centric design and thoughtful technology."
  buttonBgColor="bg-white"
  buttonHoverColor="hover:bg-secondary"
  buttonTextColor="hover:text-black"
/>
      <Rightcom 
      cardData={cardItems}
      paddings={"p-0"}
  backgroundImage={BackgroundImage}
  />
    </div>
  );
};

export default opportunity;
