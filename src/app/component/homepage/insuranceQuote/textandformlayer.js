"use client"
import React, { useState } from 'react';
import { FaCar } from "react-icons/fa6";
import { FaHeartPulse } from "react-icons/fa6";
import { IoHomeSharp } from "react-icons/io5";
import { FaHandHoldingMedical } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";


const insuranceOptions = [
  {
    id: 'car',
    icon:<FaCar />,
    title: 'Car Insurance',
    desc: 'Secure your ride with our best-in-class car insurance plans tailored for your vehicle and safety.'
  },
  {
    id: 'life',
    icons:<FaHeartPulse />,
    title: 'Life Insurance',
    desc: 'Ensure everyone is in the right jobs and roles with protection. There are many variations of passages available.'
  },
  {
    id: 'home',
    icon:<IoHomeSharp />,
    title: 'Home Insurance',
    desc: 'Protect your valuable home against unforeseen damages and losses. We offer flexible, affordable coverage.'
  },
  {
    id: 'health',
    icon:<FaHandHoldingMedical />,
    title: 'Health Insurance',
    desc: 'Get access to quality healthcare with our health insurance policies designed to support your medical needs.'
  },
];

const InsuranceQuote = () => {
  const [selected, setSelected] = useState('car');
  const current = insuranceOptions.find(option => option.id === selected);

  return (
    <div className='flex lg:flex-row flex-col justify-center items-center h-auto mt-16 '>

      {/* Left + Center Section Combined */}
      <div className='lg:w-[60%] w-full flex flex-col lg:gap-10 gap-3'>
    <div>
          <p className='text-[16px] text-textsecondry mb-4'>Get a Free Quote</p>
     <h1 className='lg:text-[45px] text-[30px] font-bold w-[80%] leading-[43px]'>Get an Insurance Quote
to Get Started</h1>
    </div>
   <div className='flex lg:flex-row flex-col w-full lg:mt-0 mt-4'>
         {/* Left Navigation */}
       <div className='flex flex-col gap-4 lg:w-[310px] w-full'>
  {insuranceOptions.map(option => {
    const isSelected = selected === option.id;
    
    return (
      <button
        key={option.id}
        onClick={() => setSelected(option.id)}
        className={`flex items-center gap-4 px-4 py-2.5 rounded-lg border transition-all duration-300 bg-transperent
          ${isSelected ? 'bg-primary text-white' : 'text-black hover:bg-primary hover:text-white'}`}
      >
        <div className={`w-[54px] text-[25px] h-[54px] bg-white rounded-full flex justify-center items-center transition-colors duration-300
          ${isSelected ? 'bg-primary text-primary ' : 'bg-white text-black group-hover:text-primary'}`}>
          {option.id === 'car' && <FaCar />}
          {option.id === 'life' && <FaHeartPulse />}
          {option.id === 'home' && <IoHomeSharp />}
          {option.id === 'health' && <FaHandHoldingMedical />}
        </div>

        <span className="uppercase font-semibold text-[16px]">{option.title}</span>
      </button>
    );
  })}
</div>

        {/* Center Description */}
        <div className='w-full md:w-2/3 px-4 md:px-12 lg:mt-0 mt-4'>
          <h2 className='text-[30px] font-semibold lg:mb-4 mb-1'>{current.title}</h2>
          <p className='text-textsecondry lg:mb-6 mb-2'>{current.desc}</p>

          <div className='flex items-center gap-3 mt-6 border-t-[1px] border-textsecondry lg:pt-10 pt-2'>
            <div className='w-[54px] h-[54px] rounded-full bg-primary flex items-center justify-center'>
             <FaPhoneAlt className='text-white text-[22px]' />
            </div>
            <div>
              <p className='text-sm text-textsecondry'>Facing problem to get a quote?</p>
              <p className='font-semibold text-lg'>+92 (8800) 0000</p>
            </div>
          </div>
        </div>
   </div>

      </div>

      {/* Right Form */}
      <div className='lg:w-[40%] w-full lg:mt-0 lg:mt-5 mt-8'>
        <form className='flex flex-col gap-4'>
          <input
            type='text'
            placeholder='Full name'
            className='w-full px-4 py-4 rounded-md border border-gray-300 focus:outline-none'
          />
          <input
            type='email'
            placeholder='Email address'
            className='w-full px-4 py-4 rounded-md border border-gray-300 focus:outline-none'
          />
           <input
            type='text'
            placeholder='Amount'
            className='w-full px-4 py-4 rounded-md border border-gray-300 focus:outline-none'
          />
          <select className='w-full px-4 py-4 rounded-md border border-gray-300 text-gray-500'>
            <option>Select type of insurance</option>
            {insuranceOptions.map(opt => (
              <option key={opt.id} value={opt.title}>{opt.title}</option>
            ))}
          </select>

          <button
            type='submit'
            className='bg-primary w-[50%] text-white py-4 mt-4 rounded-full font-semibold hover:bg-red-600 transition-all duration-300'
          >
            GET A QUOTE NOW
          </button>
        </form>
      </div>

    </div>
  );
};

export default InsuranceQuote;
