"use client";
import React from "react";
import Image from "next/image";
import PageBackground from "@/icons/pagebackground.jpg";

const HeroSection = ({
  title,
  subtitle,
  description,
  height = "85vh",        // default values (can override)
  contentHeight = "75vh",
}) => {
  return (
    <div className="relative w-full">
      {/* Background Image */}
      <div
        className="absolute top-0 left-0 w-full z-0"
        style={{ height }}
      >
        <Image
          src={PageBackground}
          alt="page background"
          className="w-full h-full object-cover"
          priority
        />
        <div className="absolute inset-0 bg-primary bg-opacity-35 z-10" />
      </div>

      {/* Content Over Image */}
      <div className="relative z-20">
        <div
          className="flex flex-col items-center justify-center text-white text-center px-4"
          style={{ height: contentHeight }}
        >
          {title && (
            <h1 className="text-3xl font-extrabold mt-16">{title}</h1>
          )}
          {subtitle && (
            <p className="text-2xl font-medium mt-1 max-w-xl">{subtitle}</p>
          )}
          {description && (
            <p className="text-[16px] mt-2 max-w-xl">{description}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
