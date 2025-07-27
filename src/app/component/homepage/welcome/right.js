// components/Right.js
import React from 'react';

// Reusable Circle Progress Component
const CircleProgress = ({ percentage, label }) => {
  const radius = 50;
  const stroke = 6;
  const normalizedRadius = radius - stroke * 0.5;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="flex flex-col items-center text-center mx-4">
      <svg height={radius * 2} width={radius * 2} className="mb-2">
        <circle
          stroke="#eee"
          fill="transparent"
          strokeWidth={stroke}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />
        <circle
          stroke="#0EB09E"
          fill="transparent"
          strokeWidth={stroke}
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          r={normalizedRadius}
          cx={radius}
          cy={radius}
          className="transition-all duration-700"
        />
        <text
          x="50%"
          y="50%"
          dominantBaseline="middle"
          textAnchor="middle"
          fill="#0EB09E"
          fontSize="16"
          fontWeight="bold"
        >
          {percentage}%
        </text>
      </svg>
      <p className="text-black font-semibold mt-2">{label}</p>
    </div>
  );
};

// Main Component
const Right = () => {
  return (
    <div className="lg:w-[40%] w-full h-full flex justify-start items-start">
      <div className='flex flex-col gap-4'>
        <p className="text-[16px] text-primary">Welcome to Moneybugs</p>
        <h1 className="text-[45px] font-semibold leading-[47px]">
          We’re Providing Best Insurance Policy
        </h1>
        <h2 className="text-secondryinsurance text-[20px] font-medium mt-2">
          We Have 30 Years of Insurance Experience Globally
        </h2>
        <p className="text-[16px] text-textsecondry mt-2">
          There are many variations of passages of Lorem Ipsum available,
          but the majority have suffered alteration in some form, by
          injected humour, or randomised simply free text.
        </p>

        {/* Circle Progress Items */}
        <div className="flex lg:flex-row flex-col gap-6 mt-6">
          <CircleProgress percentage={90} label="Our Claims Success Rates" />
          <CircleProgress percentage={50} label="Our Satisfied Customers" />
          <CircleProgress percentage={30} label="Save Your Money" />
        </div>
      </div>
    </div>
  );
};

export default Right;
