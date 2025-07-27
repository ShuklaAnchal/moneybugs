"use client";
import React from "react";

import Uppernavbar from "@/app/component/uppernavbar";
import Footer from "@/app/component/footer";
import Uppepart from "@/app/component/reusablecomponents/upperpart";
import WelcomeImage from "@/icons/main/welcome.jpg";
import Health from "@/icons/term/term-insurance.jpg"
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

import imge1 from "@/icons/health/image-1.svg"
import imge2 from "@/icons/health/image-2.svg"
import imge3 from "@/icons/health/image-3.svg"

const page = () => {
  const benefits = [
    {
      label: "Level Term Insurance",
      icon: imge1,
    },
    {
      label: "Increasing Term Insurance",
      icon: imge2,
    },
    {
      label: "Decreasing Term Insurance",
      icon: imge3,
    },
  ];

  const quotes = [
    "Life is uncertain, but your family’s financial security doesn’t have to be.",
    "Because true peace of mind comes from knowing your loved ones are protected, secure your life today",
  ];

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
  "At Money Bugs, we go beyond just policies—we provide personalized term insurance solutions tailored to your unique needs.",
  "With expert guidance, seamless support, and a customer-first approach, we make securing your future simple, accessible, and stress-free.",
  "For us, success isn’t just about numbers; it’s about building lasting relationships and delivering real value. Our hassle-free processes, competitive coverage options, and dedicated support ensure you and your loved ones are always protected..",
  "Our commitment to excellence, innovation, and customer satisfaction sets us apart—because you deserve the best protection and true peace of mind.",
];


  return (
    <div className="h-auto w-full">
      <Uppernavbar />
      <Uppepart
        title="Evaluate, Select, Protect – A Trusted Approach to Buying Term Insurance"
        description="Choosing the right life insurance shouldn’t be complicated. We simplify the process-compare trusted providers, tailor your coverage, and secure your future in just a few easy steps."
        benefits={benefits}
        imageSrc={WelcomeImage}
        quotes={quotes}
      />

  <div className="mt-7">
    <SupportCard
    heading="How Money Bugs Operate"
    subheading="Bhopal's Trusted Experts in Term Insurance Consulting"
    cards={cardData} />
  </div>
      <div className="w-full lg:h-[90vh] h-auto flex lg:flex-row flex-col mt-12">
        <Leftcom
          subtitle="Why Choose Money Bugs"
          heading="Bhopal's Leading Term Insurance Consultant Company"
          description="Choose us for expert insurance solutions, seamless policy comparisons, and dedicated support. We ensure hassle-free services with personalized guidance and competitive pricing."
          buttonBgColor="bg-white"
          buttonHoverColor="hover:bg-secondary"
          buttonTextColor="hover:text-black"
        />

        <Rightcom
          // cardData={cardItems}
          backgroundImage={Health}
          paddings={"p-6"}
        />
      </div>
<div >

    <SuccessSection   
  tagline="Your Path to Financial Security with Term Insurance"
  heading="Term Insurance: Redefining Success and Security"
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
