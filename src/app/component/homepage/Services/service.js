"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { FaCar, FaHeartbeat, FaNotesMedical , FaHandHoldingMedical, FaPlaneDeparture, FaBuilding, FaIndustry , FaUmbrellaBeach } from "react-icons/fa";
import { RiFundsFill } from "react-icons/ri";

import Image from "next/image";
import ServiceImage from "@/icons/companylogo/services-5-4.jpg";
import Motar from "@/icons/main/car.jpg"
import Traval from "@/icons/main/traval.jpg"
import Life from "@/icons/main/life.webp";
import Mutual from "@/icons/main/mutual-funds.webp";
import Property from "@/icons/main/prpo.jpg";
import Child from "@/icons/main/savings-child.jpg"
import Bussiness from "@/icons/main/bussiness.jpg"
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";

const insuranceData = [
  {
    title: "HEALTH INSURANCE",
    image: ServiceImage,
    icon: <FaHeartbeat />,
    description:
      "There are many lipsum of passages of available but the have in that not some.",
  },
  {
    title: "MOTOR INSURANCE",
    image: Motar,
    icon: <FaCar />,
    description:
      "There are many lipsum of passages of available but the have in that not some.",
  },
  {
    title: "Term INSURANCE",
    image: Life,
    icon: <FaHandHoldingMedical />,
    description:
      "There are many lipsum of passages of available but the have in that not some.",
  },
  {
    title: "TRAVAL INSURANCE",
    image: Traval,
    icon: <FaPlaneDeparture  />,
    description:
      "There are many lipsum of passages of available but the have in that not some.",
  },
  {
    title: "MUTUAL FUND /SIP",
    image: Mutual,
    icon: <RiFundsFill />,
    description:
      "There are many lipsum of passages of available but the have in that not some.",
  },
  {
    title: "Child Saving Plan",
    image: Child,
    icon: <FaBuilding />,
    description:
      "There are many lipsum of passages of available but the have in that not some.",
  },
  // {
  //   title: "BUSSINESS INSURANCE",
  //   image: Bussiness,
  //   icon: <FaIndustry />,
  //   description:
  //     "There are many lipsum of passages of available but the have in that not some.",
  // },
  // {
  //   title: "CORPORATE INSURANCE",
  //   image: ServiceImage,
  //   icon: <FaUmbrellaBeach  />,
  //   description:
  //     "There are many lipsum of passages of available but the have in that not some.",
  // },
];

const service = () => {
  return (
    <div className="h-[90vh] w-full flex justify-center relative ">
      <div className="lg:h-[80vh] h-auto lg:w-[90%] w-full absolute lg:top-[-20%] top-[0] z-[20] ">
        <div className="w-full h-[70%] bg-white lg:shadow shadow-none rounded-[16px] flex flex-col text-center ">
          <div className="flex flex-col leading-[45px] mt-14">
            <p className="text-[16px] text-textsecondry">Our Top Services</p>
            <h1 className="lg:text-[45px] md:text-[30px] text-[25px] font-bold ">
              Covering All the Insurance
            </h1>
            <h2 className="lg:text-[45px] font-bold md:text-[30px] text-[25px]">
              Services Fields
            </h2>
          </div>
          <div className="lg:px-[6rem] px-3 lg:mt-[90px] mt-[30px] lg:mb-0 mb-[20px] z-[50]">
            <Swiper
              className="overflow-y-auto h-80"
              modules={[Pagination, Autoplay, EffectCoverflow]}
              spaceBetween={20}
              slidesPerView={1}
              autoplay={{ delay: 5000 }}
              pagination={{ clickable: true }}
              breakpoints={{
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 4 },
              }}
            >
              {insuranceData.map((item, index) => (
                <SwiperSlide key={index}>
                  <div className="relative group rounded-[16px] rounded-[18px] shadow-lg cursor-pointer">
                    <Image
                      src={item.image}
                      alt={item.title}
                      className="w-full h-72 object-cover rounded-[16px]"
                    />

                    {/* Default Bottom Panel */}
                    <div className="z-[50] bg-white absolute left-1/2 transform -translate-x-1/2 bottom-[-9px] w-[76%] rounded-lg py-2 flex flex-col items-center shadow group-hover:opacity-0 transition duration-300">
                      <div className="w-12 h-12 rounded-full bg-red-500 text-white flex items-center justify-center text-xl relative bottom-[62%]">
                        {item.icon}
                      </div>
                      <p className="text-center text-black font-semibold">
                        {item.title}
                      </p>
                    </div>

                    {/* Hover Overlay */}
                    <div className="absolute rounded-[16px] inset-0 bg-red-600 bg-opacity-80 text-white p-5 opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col justify-center items-center text-center">
                      <div className="text-4xl mb-2">{item.icon}</div>
                      <h3 className="font-bold text-xl mb-2">{item.title}</h3>
                      <p className="text-sm">{item.description}</p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default service;
