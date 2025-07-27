"use client";
import React from "react";

import Uppernavbar from "@/app/component/uppernavbar";
import Footer from "@/app/component/footer";
import Uppepart from "@/app/component/reusablecomponents/siptop";
import WelcomeImage from "@/icons/main/welcome.jpg";
import Health from "@/icons/health/health-insurance.jpg";
import Leftcom from "@/app/component/homepage/opportunitycomponents.js/leftcom";
import Rightcom from "@/app/component/homepage/opportunitycomponents.js/rightcom";
import { MdSupportAgent } from "react-icons/md";
import { GrUserManager } from "react-icons/gr";
import { FaHandHoldingHand } from "react-icons/fa6";
import { TbHomeCog } from "react-icons/tb";
import { FaUserShield, FaSmile, FaChartLine } from "react-icons/fa";
import SupportCard from "@/app/component/reusablecomponents/supportcard";
import SuccessSection from "../component/reusablecomponents/sucesssection";
import ConfusionSection from "@/app/component/reusablecomponents/ConfusionSection";

import TravalImage from "@/icons/traval/traval-insu.jpg";
import Travalsecondimage from "@/icons/traval/travel-insu1.jpg";

const page = () => {
  const cardData = [
    {
      icons: <MdSupportAgent />,
      title: "Claim Support",
      para: "Enjoy seamless claims with fast processing, expert help, and zero hassle.",
    },
    {
      icons: <GrUserManager />,
      title: "Relationship Manager",
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
    "Travel insurance provides financial protection against unexpected events like medical emergencies, trip cancellations, lost baggage, and travel delays, ensuring you travel with peace of mind.",
    "Our plans cover medical expenses, emergency evacuations, trip cancellations, lost or stolen baggage, and travel assistance services.",
    "You can purchase travel insurance anytime before departure. However, it’s recommended to buy early to maximize coverage benefit",
    "You can request an extension before your policy expires, subject to approval and conditions.",
    "To file a claim, contact our 24/7 assistance team, provide necessary documents, and follow our simple claims process for quick reimbursement.",
  ];

  return (
    <div className="h-auto w-full">
      <Uppernavbar />
      <Uppepart
        title="Fly, Explore, Relax - We've Got You Covered"
        //  subtitle="Smart Investments With Money Bugs!"
        description="At Money Bugs, we understand that travel is all about experiencing new places, meeting new people, and creating unforgettable memories. But unexpected situations can arise, from flight cancellations to medical emergencies. That’s why we offer comprehensive travel insurance to ensure that you can explore the world with peace of mind.."
        ctaText="Connect Now"
        phone="+91 9755040311"
        whatsappText="Call & Whatsapp"
        imageSrc={TravalImage}
      />

      <div className="w-full lg:h-[90vh] h-auto text-textinsu flex lg:flex-row flex-col">
        <Rightcom
          // cardData={cardItems}
          paddings={"p-6"}
          backgroundImage={Travalsecondimage}
        />
        <Leftcom
          subtitle="Why Choose Money Bugs"
          heading="Travel Insurance - International Travel Plans"
          description="Exploring new countries is exciting, but unexpected events can disrupt your journey. With Money Bugs International Travel Insurance, you can travel the world with confidence, knowing you’re covered against unforeseen expenses."
          buttonBgColor="bg-btncolor"
          buttonHoverColor="hover:bg-primary"
          buttonTextColor="hover:text-white"
        />
      </div>
      <div className="mt-7">
        <SupportCard
          subheading="Travel Insurance by MONEY BUGS"
          cards={cardData}
        />

        <SuccessSection
          tagline="Why Traval Insurance"
          heading="All About Travel Insurance"
          paragraphs={paragraphs}
          stats={stats}
          buttonText="Contact Us"
          onButtonClick={() => console.log("Redirect to Contact page")}
        />
        <ConfusionSection
          title="Having Confusion In Mind Or Not Happy With Current Insurer"
          description="If you're unsure about your current policy or not satisfied with your insurer, we’re here to help! At Money Bugs, we provide expert consultation, transparent comparisons, and personalized solutions to ensure you get the best coverage at the right price."
          phone="+91 97550 40311"
          showForm={true}
        />
      </div>
      <Footer />
    </div>
  );
};

export default page;
