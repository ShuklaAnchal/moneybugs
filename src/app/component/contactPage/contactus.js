import React from "react";
import Map from "./map";
import Social from "@/app/component/navbar.js/social";
import Claimcard from "../claimcard";
import ContactForm from "./contactForm";
import ContactImage from "@/icons/contact/contactbg.jpg";
import PageBackground from "@/icons/pagebackground.jpg";

import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail, MdLocationOn } from "react-icons/md";

import Image from "next/image";

const ContactUs = () => {
  return (
    <div className="flex flex-col py-10 bg-center relative">
      {/* Background */}
      <div className="absolute top-0 left-0 w-full h-[75vh] z-0">
        <Image
          src={PageBackground}
          alt="page background"
          className="w-full h-full object-cover"
          priority
        />
        <div className="absolute inset-0 bg-primary bg-opacity-35 z-10 h-full" />
      </div>

      {/* Top Header Content */}
      <div className="relative z-20">
        <div className="h-[75vh] flex flex-col items-center justify-center text-white text-center px-4">
          <h1 className="text-2xl sm:text-3xl font-bold">Contact Us</h1>
          <p className="text-lg sm:text-2xl font-medium">
            We are Bhopal's Leading Insurance Consultancy
          </p>
          <p className="text-[16px] font-medium w-full sm:w-[80%] md:w-[70%] lg:w-[45%]">
            Get in touch with us for expert insurance guidance and seamless
            support. Whether you need policy assistance, claims help, or expert
            consultation, our team is ready to assist you. Reach out today!
          </p>
        </div>
      </div>

      {/* Contact Info + Form Section */}
      <div className="bg-[#edf2f3] py-16 px-4 sm:px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-10 max-w-screen-xl mx-auto w-full">
          {/* Left Side */}
          <section className="w-full lg:w-1/2">
            {/* Heading */}
            <div className="text-start mb-10">
              <p className="text-sm font-medium text-[#0EB09E] tracking-wider uppercase mb-2">
                Contact Us
              </p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold leading-tight mb-5">
                Personalized <span className="text-black font-bold">insurance</span> support
                <br />
                and assistance today
              </h2>
              <p className="text-gray-600 text-[16px]">
                Reach out to our team for tailored insurance solutions, expert
                advice, and prompt assistance with all your coverage needs.
              </p>
            </div>

            {/* Contact Card */}
            <div className="relative rounded-2xl overflow-hidden shadow-xl w-full">
              <div className="relative w-full h-[420px] sm:h-[380px]">
                <Image
                  src={ContactImage}
                  alt="Support Agent"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-primary opacity-40" />

                <div className="absolute inset-0 flex flex-col justify-center px-6 text-white space-y-6 z-10">
                  <div className="flex items-start gap-4">
                    <FaPhoneAlt className="text-xl sm:text-2xl mt-1" />
                    <div>
                      <p className="text-sm">Contact Number:</p>
                      <p className="text-lg font-semibold">+01 789 852 654</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <MdEmail className="text-xl sm:text-2xl mt-1" />
                    <div>
                      <p className="text-sm">Email:</p>
                      <p className="text-lg font-semibold">support@domain.com</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div><MdLocationOn className="text-xl sm:text-2xl mt-1" /></div>
                    <div>
                      <p className="text-sm">Location:</p>
                      <p className="text-lg font-semibold">
                        ll, office 4th floor, 119 (36-A, Narmadapuram Rd, behind Royal Enfield Showroom, Vidya Nagar, Bhopal, Madhya Pradesh 462026
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Right Side - Form */}
          <div className="w-full lg:w-1/2">
            <ContactForm />
          </div>
        </div>
      </div>

      {/* Map */}
      <div className="w-full flex justify-center items-center lg:py-10 md:py-8 py-3 px-4 lg:mb-14 md:mb-12 mb-8">
        <Map />
      </div>

      {/* Claim Cards */}
      <div className="px-4">
        <Claimcard />
      </div>
    </div>
  );
};

export default ContactUs;
