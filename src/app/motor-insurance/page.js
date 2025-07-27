"use client";
import React from "react";

import Uppernavbar from "@/app/component/uppernavbar";
import Footer from "@/app/component/footer";
import Uppepart from "@/app/component/insurance/upperpart";
import Health from "@/icons/health/health-insurance.jpg"
import Leftcom from "@/app/component/homepage/opportunitycomponents.js/leftcom";
import Rightcom from "@/app/component/homepage/opportunitycomponents.js/rightcom";
import { MdSupportAgent } from "react-icons/md";
import { GrUserManager } from "react-icons/gr";
import { FaHandHoldingHand } from "react-icons/fa6";
import { TbHomeCog } from "react-icons/tb";
import { FaUserShield, FaSmile, FaChartLine } from "react-icons/fa";
import SupportCard from "@/app/component/insurance/supportcard";
import SuccessSection from "../component/insurance/sucesssection";
import ConfusionSection from "@/app/component/insurance/ConfusionSection";
import InsuranceComparison from "@/app/component/motor/insuranceComparison"

import MotorCard from "@/icons/motor/motorcycle.jpg"
import MotorCar from "@/icons/motor/motor-car.jpg"
import imge1 from "@/icons/health/image-1.svg"
import imge2 from "@/icons/health/image-2.svg"
import imge3 from "@/icons/health/image-3.svg"

const page = () => {
  const benefits = [
    {
      label: "2 Wheel Insurance",
      icon: imge1,
    },
    {
      label: "Car Insurance",
      icon: imge2,
    },
    {
      label: "Commercial Vehicle",
      icon: imge3,
    },
  ];

  const quotes = [
    "We Secure Your Drive for the Road Ahead – Money Bugs, Protecting Your Future with Smart Motor Insurance!",
    "Because true peace of mind comes from knowing your loved ones are protected, secure your life today",
  ];

 const cardData = [
  {
    icons: <MdSupportAgent />,
    title: "Claim Support",
    para: "Get seamless claim support with quick processing, expert assistance, and hassle-free coordination",
  },
  {
    icons: <GrUserManager />,
    title: "Dedicated Relationship Manager",
    para: "Personalized assistance, expert guidance, and seamless support",
  },
  {
    icons: <FaHandHoldingHand />,
    title: "15+ Insurance Partner",
    para: "Best coverage, competitive pricing, and comprehensive policy options",
  },
  {
    icons: <TbHomeCog />,
    title: "Free Home Visit",
    para: "Free Home Visit for expert insurance consultation, document collection",
  },
];

const stats = [
  {
    icon: <FaUserShield />,
    value: "50K+",
    label: "Policies Issued Annually",
  },
  {
    icon: <FaSmile />,
    value: "6K+",
    label: "Happy Clients",
  },
  {
    icon: <FaChartLine />,
    value: "85%",
    label: "Positive Reviews on Google",
  },
];

const paragraphs = [
  "At Money Bugs, we believe success isn’t just about numbers—it’s about trust, transparency, and excellence in motor insurance services. We go beyond policies to offer personalized solutions that fit your unique needs.",
  "With expert guidance, seamless support, and a customer-first approach, we simplify insurance, making it accessible and stress-free for you. Our commitment to hassle-free processes and the best coverage options ensures that your vehicle stays protected, and you enjoy true peace of mind.",
  "Choose Money Bugs for innovative solutions, dedicated support, and a relationship built on real value—because your success is our priority.",
];

  return (
    <div className="h-auto w-full">
      <Uppernavbar />
      <Uppepart
        title="Secure Your Ride, Save Big for Tomorrow"
        description="Finding the perfect health insurance plan can be overwhelming, but we make it easy! Compare top insurance providers, customize your coverage, and buy the best policy–all in just a few clicks."
        benefits={benefits}
        imageSrc={MotorCard}
        quotes={quotes}
      />

<div className="mt-7">

  <SupportCard 
    heading="How Money Bugs Operate"
  subheading="Bhopal's Leading Motor Insurance Consulting Firm" 
  cards={cardData} 
   />


  <SuccessSection   
  tagline="Your path to success"
  heading="Success Redefined – Secure Your Drive with Smart Motor Insurance!"
  paragraphs={paragraphs}
  stats={stats}
  buttonText="Contact Us"
  onButtonClick={() => console.log("Redirect to Contact page")}
  />

    <div className="w-full lg:h-[90vh] h-auto flex lg:flex-row flex-col mt-12">
        <Leftcom
          subtitle="Why Choose Money Bugs"
          heading="Bhopal's Leading Motor Insurance Consultant"
          description="Choose Money Bugs for expert motor insurance solutions, seamless policy comparisons, and dedicated support. We deliver hassle-free services with personalized guidance and competitive pricing, ensuring your ride is covered and your journey is worry-free."
          buttonBgColor="bg-white"
          buttonHoverColor="hover:bg-secondary"
          buttonTextColor="hover:text-black"
        />

        <Rightcom
          // cardData={cardItems}
          backgroundImage={MotorCar}
          paddings={"p-6"}
        />
      </div>
      <InsuranceComparison />
  <ConfusionSection
  title="Confused or Unhappy with Your Insurance? Switch to Money Bugs for Better Coverage & Hassle-Free Service!"
  description="Unsure about your policy or unhappy with your insurer? Money Bugs offers expert consultation, transparent comparisons, and personalized solutions to get you the best coverage at the right price."
  phone="+91 97550 40311"
  showForm={true}
/>
</div>
      <Footer />
    </div>
  );
};

export default page;
