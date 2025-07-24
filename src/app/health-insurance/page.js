"use client";
import React from "react";

import Uppernavbar from "@/app/component/uppernavbar";
import Footer from "@/app/component/footer";
import Uppepart from "@/app/component/insurance/upperpart";
import WelcomeImage from "@/icons/main/welcome.jpg";
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

import imge1 from "@/icons/health/image-1.svg"
import imge2 from "@/icons/health/image-2.svg"
import imge3 from "@/icons/health/image-3.svg"

const page = () => {
  const benefits = [
    {
      label: "Individual Health Insurance",
      icon: imge1,
    },
    {
      label: "Family Health Insurance",
      icon: imge2,
    },
    {
      label: "Senior Citizen Plan",
      icon: imge3,
    },
  ];

  const quotes = [
    "Medical Emergencies Are Unpredictable, But Your Coverage Shouldn’t Be.",
    "Because Peace Of Mind Is The Best Prescription—Insure Your Health Today!",
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
  "Redefining success through trust, transparency, and excellence in insurance services. We go beyond just policies, ensuring personalized solutions that meet your unique needs.",
  "With expert guidance, seamless support, and a customer-first approach, we make insurance simple, accessible, and stress-free.",
  "At Money Bugs, success is not just about numbers; it's about building lasting relationships and providing real value.",
  "Our commitment to innovation and customer satisfaction ensures you always receive the peace of mind you deserve.",
];

  return (
    <div className="h-auto w-full">
      <Uppernavbar />
      <Uppepart
        title="Compare, Choose, Insure – The Smart Way To Buy Health Insurance!"
        description="Finding the perfect health insurance plan can be overwhelming, but we make it easy! Compare top insurance providers, customize your coverage, and buy the best policy–all in just a few clicks."
        benefits={benefits}
        imageSrc={WelcomeImage}
        quotes={quotes}
      />

      <div className="w-full lg:h-[90vh] h-auto bg-primary flex lg:flex-row flex-col py-10 px-3">
        <Leftcom
          subtitle="Why Choose Money Bugs"
          heading="Bhopal's Leading Health Insurance Consultant"
          description="Choose us for expert insurance solutions, seamless policy comparisons, and dedicated support. We ensure hassle-free services with personalized guidance and competitive pricing."
          buttonBgColor="bg-white"
          buttonHoverColor="hover:bg-secondary"
          buttonTextColor="hover:text-black"
          backgroundcolor='bg-primary'
        />

        <Rightcom
          // cardData={cardItems}
          paddings={"p-6"}
          backgroundImage={Health}
        />
      </div>
<div className="mt-7">

  <SupportCard  
  heading="Health Insurance Near Me"
  subheading="Bhopal's Leading Health Insurance Consulting Firm" 
  cards={cardData} 
  />


  <SuccessSection   
  tagline="YOUR PATH TO SUCCESS"
  heading="Success Defined in a Different Way"
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
