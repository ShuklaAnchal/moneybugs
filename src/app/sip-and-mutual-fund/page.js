"use client";
import React from "react";

import Uppernavbar from "@/app/component/uppernavbar";
import Footer from "@/app/component/footer";
import Uppepart from "@/app/component/reusablecomponents/siptop";
import WelcomeImage from "@/icons/main/welcome.jpg";
import Health from "@/icons/health/health-insurance.jpg"
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
import MutualFundImage from "@/icons/sip/money-bugs-sip.jpg";


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
    "With SIP (Systematic Investment Plan), a fixed amount is automatically deducted from your bank account at regular intervals and invested in a mutual fund scheme of your choice. The number of units you receive is based on the fund’s Net Asset Value (NAV) on the day of investment.",
    "SIP offers numerous benefits including:\n✅ Disciplined investing\n✅ Power of compounding\n✅ No need to time the market\n✅ Affordable – Start with just ₹500/month\n✅ Reduces risk through rupee cost averaging",
    "SIP is ideal for consistent, long-term investors because it helps manage market volatility. However, lump sum investment can also be beneficial during market corrections or if you have a large investable amount and want to capitalize on market lows.",
    "One of the key advantages of SIP is flexibility. You can pause, stop, or modify your SIP anytime without penalties. Still, we recommend staying invested for the long term to maximize returns and reap the true benefits of compounding.",
  ];

  return (
    <div className="h-auto w-full">
      <Uppernavbar />
      <Uppepart
        title="Best Investment Plans In 2025"
        subtitle="Smart Investments With Money Bugs!"
        description="Secure Your Future With Our Expert-Picked SIP & Mutual Fund Plans. We Help You Grow Wealth With The Best Funds, Tailored Strategies, And Expert Insights–Backed By Research And Proven Results."
        ctaText="Connect Now"
        phone="+91 9755040311"
        whatsappText="Call & Whatsapp"
        imageSrc={MutualFundImage}
      />

<div className="mt-7">

  <SupportCard 
  heading="Money Bugs : SIP & Mutual Funds Investment Plans"
  subheading="Why Choose US!"
  cards={cardData} />
  <SuccessSection   
  tagline="YOUR PATH TO SUCCESS"
  heading="SIP & Mutual Funds Investment Plans"
  paragraphs={paragraphs}
  stats={stats}
  buttonText="Contact Us"
  onButtonClick={() => console.log("Redirect to Contact page")}
  />


  <ConfusionSection
  title="Having Confusion In Mind Or Not Happy With Current Insurer"
  description="At Money Bugs, we bring 14 years of expertise in guiding investors toward smart and goal-based investments through Systematic Investment Plans (SIP) and Mutual Funds. Our experience, combined with deep market insights, ensures that your hard-earned money is invested wisely for maximum growth and financial security."
  phone="+91 97550 40311"
  showForm={true}
/>
</div>


      <Footer />
    </div>
  );
};

export default page;
