"use client";
import React from "react";
import Image from "next/image";
import officeImage from "@/icons/about/office.jpg";
import teamImage from "@/icons/about/diss.jpeg";
import laptopImage from "@/icons/about/insu.jpg";
import familyImage from "@/icons/about/family.jpg";

const AboutUs = () => {
  return (
    <section className="bg-white text-gray-800 px-4 md:px-10 py-20">
      {/* Top Heading */}
      <div className="max-w-5xl mx-auto text-center mb-12 lg:py-8 md:py-8 py-0">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">
          We are Bhopal's Leading Insurance Consultancy
        </h2>
        <p className="text-gray-600 text-base md:text-lg">
          Money Bugs provides <strong>comprehensive insurance solutions</strong>, offering expert guidance and policy comparisons to help clients choose the best coverage. We focus on <strong>transparency</strong>, <strong>affordability</strong>, and <strong>customer satisfaction</strong> to ensure a hassle-free experience.
        </p>
      </div>

      {/* About & Vision Cards */}
      <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto mb-16 lg:py-10 md:py-8 py-0">
        <div className="relative w-full h-64 md:h-80 rounded-lg overflow-hidden">
          <Image src={officeImage} alt="Office" fill className="object-cover" />
          <div className="absolute bottom-0 left-0 right-0 h-28 bg-blue-600 text-white p-4">
            <h3 className="font-bold text-lg">About Money Bugs</h3>
            <p className="text-sm">
              Money Bugs has 14+ years of experience in providing expert insurance solutions, offering seamless service, competitive pricing, and personalized guidance to ensure the best coverage for you.
            </p>
          </div>
        </div>
        <div className="relative w-full h-64 md:h-80 rounded-lg overflow-hidden">
          <Image src={teamImage} alt="Team" fill className="object-cover" />
          <div className="absolute bottom-0 left-0 right-0 bg-blue-700 text-white p-4 h-28">
            <h3 className="font-bold text-lg">Our Vision & Value</h3>
            <p className="text-sm">
              We believe in integrity, transparency, customer satisfaction, and innovation, ensuring sustainable solutions with expert guidance for every client.
            </p>
          </div>
        </div>
      </div>

      {/* How We Work */}
      <div className="max-w-6xl mx-auto mb-20 grid md:grid-cols-2 gap-10 items-center">
        <div className="relative w-full h-72 rounded-lg overflow-hidden">
          <Image src={laptopImage} alt="Laptop" fill className="object-cover" />
        </div>
        <div>
          <h3 className="text-2xl font-semibold text-primary mb-4">The Way We Work</h3>
          <ul className="space-y-6">
            <li>
              <span className="text-blue-600 font-bold text-lg">1. Compare</span>
              <p className="text-gray-600">
                Compare policies from top insurers in one place. Analyze benefits, premiums & features to make an informed choice.
              </p>
            </li>
            <li>
              <span className="text-blue-600 font-bold text-lg">2. Detailed Consultation</span>
              <p className="text-gray-600">
                One-on-one analysis of needs to suggest policies best aligned to your situation.
              </p>
            </li>
            <li>
              <span className="text-blue-600 font-bold text-lg">3. Buy</span>
              <p className="text-gray-600">
                Purchase with ease via a smooth process guided by experts—zero confusion, zero delays.
              </p>
            </li>
          </ul>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="bg-[#f7faff] py-16">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h3 className="text-2xl font-semibold text-primary mb-4">Why Choose Us?</h3>
            <p className="text-gray-600 mb-6">
              Choose us for <strong>expert guidance</strong>, <strong>seamless policy comparison</strong>, <strong>competitive pricing</strong>, and <strong>24x7 support</strong>. We offer the best insurance experience.
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
            <Image src={familyImage} alt="Happy Family" fill className="object-cover" />
          </div>
        </div>
      </div>

      {/* Extended Section: Our Commitment */}
      <div className="max-w-5xl mx-auto py-20 text-center">
        <h3 className="text-2xl font-semibold mb-4 text-primary">Our Commitment</h3>
        <p className="text-gray-600 text-lg">
          At Money Bugs, our commitment goes beyond selling policies. We aim to educate and empower individuals and businesses to make the best insurance choices. Whether you need health, vehicle, life, or travel insurance, our team ensures unmatched support and satisfaction.
        </p>
      </div>
    </section>
  );
};

export default AboutUs;
