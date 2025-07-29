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
import SuccessSection from "@/app/component/reusablecomponents/sucesssection";
import ConfusionSection from "@/app/component/reusablecomponents/ConfusionSection";
import HeroSection from "@/app/component/reusablecomponents/maincard";
import Child from "@/icons/child/child.jpg";
import Child1 from "@/icons/child/childinsu.jpg";
import Featurecards from "@/app/component/reusablecomponents/featurecards";
import Img1 from "@/icons/health/image-1.svg";
import Img2 from "@/icons/health/image-2.svg";
import Img3 from "@/icons/health/image-3.svg";

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

  const features = [
    {
      icon: Img1,
      title: "Individual Health Insurance",
      description: "Our fast and easy process ensures quick policy setup",
    },
    {
      icon: Img2,
      title: "Family Health Insurance",
      description: "Get round-the-clock support for all your insurance needs",
    },
    {
      icon: Img3,
      title: "Senior Citizen Plan",
      description: "Get round-the-clock support for all your insurance needs",
    },
  ];
  const paragraphs = [
    "Money Bugs offers expert financial guidance, customized saving plans, high returns with low risk, tax benefits, and complete transparency. We simplify the process, ensuring hassle-free investments tailored to your needs.",
    "You invest a fixed amount regularly (monthly, quarterly, or annually) into the plan. The money grows over time, and at maturity, you receive a lump sum payout or periodic benefits based on the plan you choose. Some plans also offer insurance coverage in case of unforeseen circumstances.",
    "Secure and systematic savings for your child’s future",
    "Potential for high returns through guaranteed or market-linked plans",
    "Tax benefits under Section 80C and 10(10D) of the Income Tax Act",
    "Insurance protection in case of the policyholder’s demise",
    "Flexible payout options to support higher education or other major expenses",
  ];

  return (
    <div className="h-auto w-full">
      <HeroSection
        title="Child Saving Plan"
        subtitle="Fly, Explore, Relax - We've Got You Covered"
        description="At Money Bugs, we understand that travel is all about experiencing new places, meeting new people, and creating unforgettable memories. But unexpected situations can arise, from flight cancellations to medical emergencies. That’s why we offer comprehensive travel insurance to ensure that you can explore the world with peace of mind."
      />


             <div className="mt-10">
          <Featurecards features={features} />
        </div>
          <div className="mt-7">
        <SuccessSection
          tagline="YOUR Child PATH TO SUCCESS"
          heading="All About Your Child"
          paragraphs={paragraphs}
          stats={stats}
          buttonText="Contact Us"
          onButtonClick={() => console.log("Redirect to Contact page")}
        />

        <div className="w-full lg:h-[90vh] h-auto flex lg:flex-row flex-col">
          <Rightcom backgroundImage={Child1} paddings={"p-6"} />
          <Leftcom
            subtitle="Child Savings Plan by MONEY BUGS"
            heading="Why Choose Money Bugs"
            description="Planning for your child’s future is one of the most important financial decisions you can make. Education, healthcare, and unforeseen expenses require substantial savings, making a well-structured child saving plan essential. At Money Bugs, we understand these concerns and offer customized solutions to ensure your child’s financial security. Here’s why choosing Money Bugs for your child saving plan is the best decision you can make."
          />
        </div>

        <ConfusionSection
          title="Having Confusion In Mind Or Not Happy With Current Insurer"
          description="If you're unsure about your current policy or not satisfied with your insurer, we’re here to help! At Money Bugs, we provide expert consultation, transparent comparisons, and personalized solutions to ensure you get the best coverage at the right price."
          phone="+91 97550 40311"
          showForm={true}
        />
      </div>
    </div>
  );
};

export default page;
