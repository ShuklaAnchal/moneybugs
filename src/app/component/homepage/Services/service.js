"use client"
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { FaCar, FaHome, FaHeartbeat, FaNotesMedical } from 'react-icons/fa';
import Image from 'next/image';
import ServiceImage from "@/icons/companylogo/services-5-4.jpg"
import autoprefixer from 'autoprefixer';
import { Autoplay, EffectCoverflow, Pagination } from 'swiper/modules';

const insuranceData = [
  {
    title: 'CAR INSURANCE',
    image: ServiceImage,
    icon: <FaCar />,
    description: 'There are many lipsum of passages of available but the have in that not some.'
  },
  {
    title: 'LIFE INSURANCE',
    image: ServiceImage,
    icon: <FaHeartbeat />,
    description: 'There are many lipsum of passages of available but the have in that not some.'
  },
  {
    title: 'HOME INSURANCE',
    image: ServiceImage,
    icon: <FaHome />,
    description: 'There are many lipsum of passages of available but the have in that not some.'
  },
  {
    title: 'HEALTH INSURANCE',
    image: ServiceImage,
    icon: <FaNotesMedical />,
    description: 'There are many lipsum of passages of available but the have in that not some.'
  },
    {
    title: 'HEALTH INSURANCE',
    image: ServiceImage,
    icon: <FaNotesMedical />,
    description: 'There are many lipsum of passages of available but the have in that not some.'
  },
    {
    title: 'HEALTH INSURANCE',
    image: ServiceImage,
    icon: <FaNotesMedical />,
    description: 'There are many lipsum of passages of available but the have in that not some.'
  },
    {
    title: 'HEALTH INSURANCE',
    image: ServiceImage,
    icon: <FaNotesMedical />,
    description: 'There are many lipsum of passages of available but the have in that not some.'
  },
];


const service = () => {
  return (
    <div className='h-[90vh] w-full flex justify-center relative'>
    <div className='h-[80vh] w-[90%] absolute top-[-20%] z-50'>
<div className='w-full h-[70%] bg-white shadow rounded-[16px] flex flex-col text-center'>
<div className='flex flex-col leading-[45px] mt-14'>
     <p className='text-[16px] text-textsecondry'>Our Top Services</p>
 <h1 className='text-[45px] font-bold '>Covering All the Insurance</h1>
 <h2 className='text-[45px] font-bold '>Services Fields</h2>
</div>
<div className='px-[6rem] mt-[90px] z-0'>
<Swiper
modules={[Pagination,Autoplay, EffectCoverflow]}
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
          <div className="relative  group rounded-xl shadow-lg cursor-pointer">
            <Image src={item.image} alt={item.title} className="w-full h-72 object-cover" />

            {/* Default Bottom Panel */}
            <div className="z-50 bg-white absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[80%] rounded-lg py-3 flex flex-col items-center shadow group-hover:opacity-0 transition duration-300">
              <div className="w-12 h-12 rounded-full bg-red-500 text-white flex items-center justify-center text-xl ">
                {item.icon}
              </div>
              <p className="text-center text-black font-semibold">{item.title}</p>
            </div>

            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-red-600 bg-opacity-80 text-white p-5 opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col justify-center items-center text-center">
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
  )
}

export default service