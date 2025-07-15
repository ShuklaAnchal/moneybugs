"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, EffectCoverflow } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

import Image from "next/image";
import Brand1 from "@/icons/main/brand-1.png";
import Brand2 from "@/icons/main/brand-2.png";
import Brand3 from "@/icons/main/brand-3.png";
import Brand4 from "@/icons/main/brand-4.png";
import Brand5 from "@/icons/main/brand-5.png";

const brandData = [
  { imgName: Brand1, textal: "brandlogo" },
  { imgName: Brand2, textal: "brandlogo" },
  { imgName: Brand3, textal: "brandlogo" },
  { imgName: Brand4, textal: "brandlogo" },
  { imgName: Brand5, textal: "brandlogo" },
];

const FundedCompanies = () => {
  return (
    <div className="container w-full h-[199px] border-t-[1px] border-grey-50">
      <div className="flex lg:flex-row flex-col lg:gap-12 gap-2 justify-center items-center h-full">
        <div className="text-[16px] font-semibold lg:w-[230px] w-full">
          Trusted and funded by more than 800 companies
        </div>
        <Swiper
          modules={[Pagination, EffectCoverflow]}
          spaceBetween={32}
          grabCursor={true}
        //  centeredSlides={true}
          loop={true}
          autoplay={{ delay: 5000 }}
          slidesPerView={1}
          breakpoints={{
            400: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 5 },
          }}
        >
          {brandData.map((item, index) => (
            <SwiperSlide key={index}>
                  <Image
                src={item.imgName}
                alt={item.textal}
                width={167}
                height={80}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default FundedCompanies;
