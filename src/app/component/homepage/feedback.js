"use client";
import React from 'react';
import Image from 'next/image';
import { FaStar } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, EffectCoverflow } from "swiper/modules";
import BackgroundImage from "@/icons/background-feedback.png";

const testimonials = [
  {
    name: "Devid Couper",
    title: "CO FOUNDER",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    feedback:
      "All of our lorries are fitted with Satellite Tracking and Temperature Controlled monitoring systems so that the transportation of high value and temperature sensitive loads can be monitored at all times.",
    rating: 5,
  },
    {
    name: "Devid Couper",
    title: "CO FOUNDER",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    feedback:
      "All of our lorries are fitted with Satellite Tracking and Temperature Controlled monitoring systems so that the transportation of high value and temperature sensitive loads can be monitored at all times.",
    rating: 5,
  },
    {
    name: "Devid Couper",
    title: "CO FOUNDER",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    feedback:
      "All of our lorries are fitted with Satellite Tracking and Temperature Controlled monitoring systems so that the transportation of high value and temperature sensitive loads can be monitored at all times.",
    rating: 5,
  },
    {
    name: "Devid Couper",
    title: "CO FOUNDER",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    feedback:
      "All of our lorries are fitted with Satellite Tracking and Temperature Controlled monitoring systems so that the transportation of high value and temperature sensitive loads can be monitored at all times.",
    rating: 5,
  },
{
    name: "Devid Couper",
    title: "CO FOUNDER",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    feedback:
      "All of our lorries are fitted with Satellite Tracking and Temperature Controlled monitoring systems so that the transportation of high value and temperature sensitive loads can be monitored at all times.",
    rating: 5,
  },
  {
    name: "Sarah Miller",
    title: "MARKETING HEAD",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    feedback:
      "All of our lorries are fitted with Satellite Tracking and Temperature Controlled monitoring systems so that the transportation of high value and temperature sensitive loads can be monitored at all times.",
    rating: 5,
  },
  // Add more testimonials as needed
];



const Feedback = () => {
  return (
    <div className="w-full relative py-24 bg-white overflow-hidden">
      {/* Background Image */}
      <Image
        className="absolute inset-0 w-full h-full object-containt z-0"
        src={BackgroundImage}
        alt="background"
      />

      {/* Content */}
      <div className="relative z-50 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center lg:bg-transparent md:bg-transparent sm:bg-[#f3f3f3]">
        <p className="text-[16px] text-textsecondry">Our Feedbacks</p>
        <h1 className="text-[30px] md:text-[38px] lg:text-[45px] text-black font-semibold mb-12">
          What They’re Talking?
        </h1>

        {/* Swiper */}
       <Swiper
  modules={[Pagination, EffectCoverflow]}
  spaceBetween={28}
  grabCursor={true}
  centeredSlides={true}
  loop={true}
  autoplay={{ delay: 5000 }}
//   pagination={{ clickable: true }}
  slidesPerView={1} // default (mobile)
  breakpoints={{
    768: {
      slidesPerView: 2, // for tablets and up
    },
    1024: {
      slidesPerView: 3, // for desktop and up
    },
  }}
>
          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="w-full max-w-[370px] mx-auto flex flex-col items-center relative group transition-all duration-300">
                {/* Card */}
                <div className="relative bg-white group-hover:bg-primary group-hover:opacity-80 rounded-[16px] shadow-xl px-6 py-6 pt-8 w-full min-h-[311px] text-center transition-all duration-300">
                  <div className=" inline-block px-12 py-3 rounded-md mb-4">
                    <div className="flex gap-1 text-white justify-center">
                      {Array(item.rating).fill(0).map((_, i) => (
                        <FaStar key={i} className="h-5 w-5 text-[#99FEAC]" />
                      ))}
                    </div>
                  </div>
                  <p className="text-[15px] leading-relaxed text-textsecondry group-hover:text-white transition-all duration-300">
                    “{item.feedback}”
                  </p>
                  <div className="absolute left-1/2 -bottom-[10px] transform -translate-x-1/3 w-7 h-7 bg-white group-hover:bg-primary rotate-45 z-0 transition-all duration-300"></div>
                </div>

                {/* Profile Info */}
                <div className="mt-[30px] flex flex-col items-center transition-all duration-300">
               <div className="rounded-full border-[6px] border-[#f3f3f3] group-hover:border-primary group-hover:opacity-70 transition-all duration-300">
  <img
    src={item.image}
    alt={item.name}
    width={85}
    height={85}
    className="rounded-full"
  />
  </div>
                  <p className="text-[12px] text-textsecondry mt-2 tracking-widest">
                    {item.title}
                  </p>
                  <h5 className="text-[22px] text-[#191C1E] font-semibold transition-all duration-300">
                    {item.name}
                  </h5>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Feedback;
