import React from "react";
import Image from "next/image";

import Uppernavbar from "@/app/component/uppernavbar";
import BackgroundImage from "@/icons/main/main-bg.jpg";
import First from "@/app/component/homepage/first";
import Services from "@/app/component/homepage/Services/service"
import Welcomecom from "@/app/component/homepage/welcome/main";
import Quote from "@/app/component/homepage/insuranceQuote/quote";
import Teams from "./homepage/team";
import Fundedcompanies from "./homepage/fundedcompanies";
import Opportunity from "@/app/component/homepage/opportunity"
import Feedback from "@/app/component/homepage/feedback"
import Tracking from "@/app/component/homepage/trackclam"
import NewsBolgs from "@/app/component/homepage/newsArtical"
import Footer from "@/app/component/footer"



const MaindashboardPage = () => {
  return (
    <div>
      <div className="relative lg:h-[110vh] h-auto w-full overflow-hidden">
      {/* Background Image */}
      <Image
        src={BackgroundImage}
        alt="Background"
        layout="fill"
        objectFit="cover"
        className="z-0"
        priority
      />

      {/* Upper Navbar */}
      <div className="relative z-10">
        <Uppernavbar />
        <First />
      </div>
    </div>
    <Services />
    <Welcomecom/>
    <Quote />
    <Teams />
    <Fundedcompanies />
    <Opportunity />
    <Feedback />
    <NewsBolgs />
    {/* <Tracking /> */}
     <Footer />
     
    </div>
  );
};

export default MaindashboardPage;
