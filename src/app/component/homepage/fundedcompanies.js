"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, EffectCoverflow } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

import Image from "next/image";
import Adityabirla from "@/icons/companylogo/aditya-birla-insurance.jpg";
import Bajaj from "@/icons/companylogo/bajaj-allianz.png";
import CareHealth from "@/icons/companylogo/Care_health_insurance.png";
import FutureGe from "@/icons/companylogo/Future_Generali.jpg";
import HDFC from "@/icons/companylogo/HDFC-Ergo.png";
import Icicilomb from "@/icons/companylogo/icici-lomb.png";
import Iciciprud from "@/icons/companylogo/ICICI-Prudential.png";
import Iffco from "@/icons/companylogo/iffco-tokio.png";
import Kotak from "@/icons/companylogo/Kotak_Life.png";
import Lic from "@/icons/companylogo/lic.png";
import Maxlife from "@/icons/companylogo/Max_Life.png";
import National from "@/icons/companylogo/national-insurance.jpg";
import Niva from "@/icons/companylogo/Niva.png";
import PNB from "@/icons/companylogo/pnb_metlife.png";
import SbiInsurance from "@/icons/companylogo/SBI_Life_Insurance.png";
import SBI from "@/icons/companylogo/SBI.jpg";
import StarHealth from "@/icons/companylogo/Star_Health.png";
import Tata from "@/icons/companylogo/tata.png";
import Oriental from "@/icons/companylogo/The_Oriental.png";
import United from "@/icons/companylogo/united.jpg";

const brandData = [
  { imgName: Adityabirla, textal: "brandlogo" },
  { imgName: Bajaj, textal: "brandlogo" },
  { imgName: CareHealth, textal: "brandlogo" },
  { imgName: FutureGe, textal: "brandlogo" },
  { imgName: HDFC, textal: "brandlogo" },
  { imgName: Icicilomb, textal: "brandlogo" },
  { imgName: Iffco, textal: "brandlogo" },
  { imgName: Iciciprud, textal: "brandlogo" },
  { imgName: United, textal: "brandlogo" },
  { imgName: Oriental, textal: "brandlogo" },
  { imgName: Tata, textal: "brandlogo" },
  { imgName: StarHealth, textal: "brandlogo" },
  { imgName: SBI, textal: "brandlogo" },
  { imgName: SbiInsurance, textal: "brandlogo" },
  { imgName: PNB, textal: "brandlogo" },
  { imgName: SbiInsurance, textal: "brandlogo" },
  { imgName: Niva, textal: "brandlogo" },
  { imgName: National, textal: "brandlogo" },
  { imgName: Maxlife, textal: "brandlogo" },
  { imgName: Lic, textal: "brandlogo" },
  { imgName: Kotak, textal: "brandlogo" },
];

const FundedCompanies = () => {
  return (
    <div className="lg:container md:container px-3 w-full h-[199px] border-t-[1px] border-grey-50">
      <div className="flex lg:flex-row flex-col lg:gap-12 gap-2 justify-center items-center h-full">
        <div className="text-[16px] font-semibold lg:w-[20%] w-full">
          Trusted and funded by more than 800 companies
        </div>
        <div className="lg:w-[65%] w-full overflow-x-hidden">
          <Swiper
            modules={[Pagination, EffectCoverflow]}
            spaceBetween={40}
            grabCursor={true}
            centeredSlides={true}
            loop={true}
            autoplay={{ delay: 5000 }}
          slidesPerView={5}
            breakpoints={{
              400: {
                slidesPerView: 3,
                spaceBetween: 100,
              },
              768: {
                slidesPerView: 5,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 5,
                spaceBetween: 40,
              },
            }}
          >
            {brandData.map((item, index) => (
              <SwiperSlide key={index}>
                <Image
                  src={item.imgName}
                  alt={item.textal}
                  width={130}
                  height={100}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default FundedCompanies;
