"use client";
import React, { useState } from "react";
import Image from "next/image";
import familyImage from "@/icons/pagebackground.jpg"; // replace with your image

const ApproachSection = () => {
  const [activeTab, setActiveTab] = useState("vision");

  const renderTabContent = () => {
    switch (activeTab) {
      case "vision":
        return (
          <div className="text-left">
            <h3 className="text-xl font-bold text-green-900 mb-6">
              Our Vision
            </h3>
            <ul className="space-y-4 text-green-700 font-medium">
              <li className="flex items-center gap-2">
                <span className="text-primary">🌿</span> Integrity and Transparency
              </li>
              <li className="flex items-center gap-2">
                <span className="text-primary">🌿</span> Customer Satisfaction
              </li>
              <li className="flex items-center gap-2">
                <span className="text-primary">🌿</span> Innovation with Expert Guidance
              </li>
            </ul>
          </div>
        );
      case "mission":
        return (
          <div className="text-left">
            <h3 className="text-xl font-bold text-green-900 mb-6">
              Key Features of Our Insurance Mission:
            </h3>
            <ul className="space-y-4 text-green-700 font-medium">
              <li className="flex items-center gap-2">
                <span className="text-primary">🌿</span> Focus on Continuous
                Improvement and Adaptation
              </li>
              <li className="flex items-center gap-2">
                <span className="text-primary">🌿</span> Personalized Client
                Attention
              </li>
              <li className="flex items-center gap-2">
                <span className="text-primary">🌿</span> Transparent Policy
                Comparisons
              </li>
              <li className="flex items-center gap-2">
                <span className="text-primary">🌿</span> Hassle-Free Buying
                Experience
              </li>
            </ul>
          </div>
        );
      case "value":
        return (
          <div className="text-left">
            <h3 className="text-xl font-bold text-green-900 mb-6">
              Our Core Values
            </h3>
            <ul className="space-y-4 text-green-700 font-medium">
              <li className="flex items-center gap-2">
                <span className="text-primary">🌿</span> Integrity and Honesty
              </li>
              <li className="flex items-center gap-2">
                <span className="text-primary">🌿</span> Customer-Centric
                Service
              </li>
              <li className="flex items-center gap-2">
                <span className="text-primary">🌿</span> Innovation and Growth
              </li>
            </ul>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section className="bg-[#edf2f3] py-16 md:px-10 text-center">
      {/* Title Section */}
      <div className="max-w-3xl mx-auto mb-12 lg:px-0 md:px-0 px-3">
        <p className="text-sm text-primary font-semibold mb-2 flex items-center justify-center gap-2">
          <span className="w-2 h-2 bg-primary rounded-full inline-block"></span>
          OUR APPROACH
        </p>
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-800">
          Mission, vision, and{" "}
          <span className="font-bold text-primary">values guiding</span>
          <br />
          our insurance services
        </h2>
        <p className="text-gray-600 mt-4 text-base md:text-lg">
          Money Bugs provides comprehensive insurance solutions, offering expert
          guidance and policy comparisons to help clients choose the best
          coverage. We focus on transparency, affordability, and customer
          satisfaction to ensure a hassle-free experience.
        </p>
      </div>

      {/* Card Section */}
      <div className="bg-white rounded-3xl shadow-md px-6 py-10 max-w-6xl mx-auto">
        {/* Tab Buttons */}
        <div className="flex justify-center flex-wrap gap-4 mb-10">
          <button
            className={`px-6 py-2 font-semibold rounded-tr-[20px] rounded-bl-[20px] ${
              activeTab === "vision"
                ? "bg-primary text-white"
                : "border border-primary text-primary"
            }`}
            onClick={() => setActiveTab("vision")}
          >
            Our Vision
          </button>
          <button
            className={`px-6 py-2 font-semibold rounded-tr-[20px] rounded-bl-[20px] ${
              activeTab === "mission"
                ? "bg-primary text-white"
                : "border border-primary text-primary"
            }`}
            onClick={() => setActiveTab("mission")}
          >
            Our Mission
          </button>
          <button
            className={`px-6 py-2 font-semibold rounded-tr-[20px] rounded-bl-[20px] ${
              activeTab === "value"
                ? "bg-primary text-white"
                : "border border-primary text-primary"
            }`}
            onClick={() => setActiveTab("value")}
          >
            Value
          </button>
        </div>

        {/* Content Row */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="relative w-full h-64 md:h-80 rounded-2xl overflow-hidden">
            <Image
              src={familyImage}
              alt="Family"
              fill
              className="object-cover"
            />
          </div>
          {renderTabContent()}
        </div>
      </div>
    </section>
  );
};

export default ApproachSection;
