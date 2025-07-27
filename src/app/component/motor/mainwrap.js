"use client";
import React from "react";
import { MdSupportAgent } from "react-icons/md";
import { GrUserManager } from "react-icons/gr";
import { FaHandHoldingHand } from "react-icons/fa6";
import { TbHomeCog } from "react-icons/tb";
import { FaUserShield, FaSmile, FaChartLine } from "react-icons/fa";
import { FaStopwatch, FaHeadset } from "react-icons/fa";

import SupportCard from "@/app/component/reusablecomponents/supportcard";
import SuccessSection from "@/app/component/reusablecomponents/sucesssection";
import ConfusionSection from "@/app/component/reusablecomponents/ConfusionSection";
import HeroSection from "@/app/component/reusablecomponents/maincard";
import Featurecards from "@/app/component/reusablecomponents/featurecards";
import InsuranceComparison from "./insuranceComparison";

import Img1 from "@/icons/health/image-1.svg";
import Img2 from "@/icons/health/image-2.svg";
import Img3 from "@/icons/health/image-3.svg";

const mainwrap = () => {
  const features = [
    {
      icon: Img1,
      title: "2 Wheel Insurance",
      description: "Our fast and easy process ensures quick policy setup",
    },
    {
      icon: Img2,
      title: "Car Insurance",
      description: "Get round-the-clock support for all your insurance needs",
    },
    {
      icon: Img3,
      title: "Commercial Vehicle",
      description: "Get round-the-clock support for all your insurance needs",
    },
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
    <div className="relative w-full">
      <HeroSection
        title="Motor Insurance"
        subtitle="Secure Your Ride, Save Big for Tomorrow"
        description="Finding the perfect health insurance plan can be overwhelming, but we make it easy! Compare top insurance providers, customize your coverage, and buy the best policy-all in just a few clicks."
      />
      <div className="flex flex-col bg-center relative">
        <div className="mt-10">
          <Featurecards features={features} />
        </div>

        <div className="mt-7">
          <InsuranceComparison />
          <SuccessSection
            tagline="YOUR PATH TO SUCCESS"
            heading="Success Defined in a Different Way"
            paragraphs={paragraphs}
            stats={stats}
            buttonText="Contact Us"
            onButtonClick={() => console.log("Redirect to Contact page")}
          />
          <SupportCard
            heading="Health Insurance Near Me"
            subheading="Bhopal's Leading Health Insurance Consulting Firm"
            cards={cardData}
          />

          <ConfusionSection
            title="Having Confusion In Mind Or Not Happy With Current Insurer"
            description="If you're unsure about your current policy or not satisfied with your insurer, we’re here to help! At Money Bugs, we provide expert consultation, transparent comparisons, and personalized solutions to ensure you get the best coverage at the right price."
            phone="+91 97550 40311"
            showForm={true}
          />
        </div>
      </div>
    </div>
  );
};

export default mainwrap;
