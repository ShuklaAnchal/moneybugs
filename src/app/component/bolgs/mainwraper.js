import React from "react";
import HeroSection from "@/app/component/reusablecomponents/maincard";
import Featurecards from "@/app/component/reusablecomponents/featurecards";
import Img1 from "@/icons/health/image-1.svg";
import Img2 from "@/icons/health/image-2.svg";
import Img3 from "@/icons/health/image-3.svg";
import SupportCard from "@/app/component/reusablecomponents/supportcard";

import { MdSupportAgent } from "react-icons/md";
import { GrUserManager } from "react-icons/gr";
import { FaHandHoldingHand } from "react-icons/fa6";
import { TbHomeCog } from "react-icons/tb";

const mainwraper = () => {
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
    //   {
    //     icons: <FaHandHoldingHand />,
    //     title: "15+ Insurance Partner",
    //     para: "Best coverage, competitive pricing, and comprehensive policy options",
    //   },
    //   {
    //     icons: <TbHomeCog />,
    //     title: "Free Home Visit",
    //     para: "Free Home Visit for expert insurance consultation, document collection",
    //   },
    ];
  
  return (
    <div className="h-auto w-full">
      <HeroSection
        title="Blogs"
        subtitle="We are committed to providing personalized insurance solutions."
        description="At Money Bugs, we understand that travel is all about experiencing new places, meeting new people, and creating unforgettable memories. But unexpected situations can arise, from flight cancellations to medical emergencies. That’s why we offer comprehensive travel insurance to ensure that you can explore the world with peace of mind."
      />

      <div className="mt-10 mb-10">
        <Featurecards features={features} />

            <SupportCard
            heading="Health Insurance Near Me"
            subheading="Bhopal's Leading Health Insurance Consulting Firm"
            cards={cardData}
          />
      </div>
    </div>
  );
};

export default mainwraper;
