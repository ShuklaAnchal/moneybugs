"use client";
import React from "react";
import Image from "next/image";
import officeImage from "@/icons/about/office.jpg";
import teamImage from "@/icons/about/diss.jpeg";
import laptopImage from "@/icons/about/insu.jpg";
import familyImage from "@/icons/about/family.jpg";
import PageBackground from "@/icons/pagebackground.jpg";
import Vision from "./vision";

const AboutUs = () => {
  const steps = [
    {
      title: "1. Compare",
      description:
        "Compare policies from top insurers in one place. Analyze benefits, premiums & features to make an informed choice.",
    },
    {
      title: "2. Detailed Consultation",
      description:
        "One-on-one analysis of needs to suggest policies best aligned to your situation.",
    },
    {
      title: "3. Buy",
      description:
        "Purchase with ease via a smooth process guided by experts—zero confusion, zero delays.",
    },
  ];

  return (
    <div className="relative w-full">
      {/* Fixed Background Image */}
      <div className="absolute top-0 left-0 w-full h-[85vh] z-0">
        <Image
          src={PageBackground}
          alt="page background"
          className="w-full h-full object-cover"
          priority
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-primary bg-opacity-35 z-10 h-full" />
      </div>

      {/* Content over background */}
      <div className="relative z-20">
        {/* Top content centered over fixed background */}
        <div className="h-[75vh] flex flex-col items-center justify-center text-white text-center px-4">
          <h1 className="text-3xl font-bold mt-16">About Us</h1>
          <p className="text-2xl font-medium mt-1">
            We are Bhopal's Leading Insurance Consultancy
          </p>
          <p className="text-[16px]">
            {" "}
            Lorem ipsum dolor sit am adipi we help you ensure everyone is in the
            right
          </p>
        </div>

        {/* Main About Section */}
        <section className="bg-white text-gray-800 px-0 md:px-10 py-8 relative z-20">
          <Vision />

          <section className="py-20 px-4 md:px-10 bg-white">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12 text-center">
              The Way We Work
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {steps.map((item, index) => (
                <div
                  key={index}
                  className="border border-gray-200 p-6 rounded-tr-[30px] rounded-bl-[30px] shadow-sm"
                >
                  <h4 className="text-lg font-bold text-primary mb-2">
                    {item.title}
                  </h4>
                  <p className="text-textsecondry text-sm">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </section>
          {/* Why Choose Us */}
          <div className="bg-[#f7faff] py-16">
            <div className="lg:px-0 md:px-0 px-3 max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
              <div>
                <h3 className="text-2xl font-semibold text-primary mb-4">
                  Why Choose Us?
                </h3>
                <p className="text-textsecondry mb-6">
                  Choose us for <strong>expert guidance</strong>,{" "}
                  <strong>seamless policy comparison</strong>,{" "}
                  <strong>competitive pricing</strong>, and{" "}
                  <strong>24x7 support</strong>. We offer the best insurance
                  experience.
                </p>
                <ul className="space-y-4">
                  <li>
                    <strong>14+ Years</strong> of experience
                  </li>
                  <li>
                    <strong>90%</strong> recurring clients
                  </li>
                  <li>
                    <strong>93%</strong> customer satisfaction
                  </li>
                  <li>
                    <strong>50K+</strong> policies issued
                  </li>
                  <li>
                    <strong>Maximum</strong> positive feedback on Google
                  </li>
                </ul>
              </div>
              <div className="relative w-full h-80 rounded-lg overflow-hidden">
                <Image
                  src={familyImage}
                  alt="Happy Family"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Our Commitment */}
          <div className="max-w-5xl mx-auto py-20 text-center">
            <h3 className="text-2xl font-semibold mb-4 text-primary">
              Our Commitment
            </h3>
            <p className="text-textsecondry text-lg">
              At Money Bugs, our commitment goes beyond selling policies. We aim
              to educate and empower individuals and businesses to make the best
              insurance choices. Whether you need health, vehicle, life, or
              travel insurance, our team ensures unmatched support and
              satisfaction.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;
