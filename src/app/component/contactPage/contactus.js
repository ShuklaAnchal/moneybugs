import React from 'react';
import Map from './map';
import Social from '@/app/component/navbar.js/social';
import Claimcard from '../claimcard';
import ContactForm from './contactForm'
import ContactBackground from "@/icons/contact/contactbg.jpg"

import { MdEmail } from 'react-icons/md';
import { FaSquarePhone } from 'react-icons/fa6';
import { IoLocationSharp } from 'react-icons/io5';

const ContactUs = () => {
  return (
    <div className="flex flex-col py-10 bg-center">
      
      {/* Hero Section */}
     <div>
       <div className="min-h-[40vh] w-full flex flex-col justify-center items-center py-5 px-4 text-center">
        <h1 className="text-[32px] md:text-[40px] lg:text-[45px] font-bold text-primary">
          Contact Us
        </h1>
        <p className="text-[14px] md:text-[16px] text-textsecondry max-w-3xl mt-3">
          Get in touch with us for expert insurance guidance and seamless support. Whether you need policy assistance, claims help, or expert consultation, our team is ready to assist you. Reach out today!
        </p>
      </div>

      {/* Contact Info + Form */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:container md:container mx-auto px-3 py-16 gap-10">
        {/* Left Side - Contact Info */}
        <div className="flex flex-col w-full lg:w-1/2 gap-5">
          <h2 className="text-[24px] md:text-[30px] font-bold text-black">
            Get In Touch
          </h2>
          <p className="text-[14px] md:text-[16px] text-textsecondry max-w-xl">
            Get in touch with us for expert insurance guidance and seamless support. Whether you need policy assistance, claims help, or expert consultation, our team is ready to assist you. Reach out today!
          </p>

          <div className="flex flex-col gap-4 text-sm text-texthearder">
            <div className="flex items-center gap-2">
              <FaSquarePhone className="text-primary h-5 w-5" />
              888 999 0000
            </div>
            <div className="flex items-center gap-2">
              <MdEmail className="text-primary h-5 w-5" />
              needhelp@insur.com
            </div>
            <div className="flex items-start gap-2">
              <IoLocationSharp className="text-primary h-5 w-5 mt-1" />
              <span>30 road, Broklyn Street, New York 600</span>
            </div>
          </div>

          {/* Social Media */}
          <div className="border-t border-gray-300 pt-5">
            <h3 className="text-[20px] md:text-[25px] font-bold text-black mb-3">
              Follow Us:
            </h3>
            <Social iconcolor="text-primary" />
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="px-10">
        <ContactForm />
        </div>
      </div>
     </div>

      {/* Map Section */}
      <div className="w-full flex justify-center items-center py-10 mb-14 px-4">
        <Map />
      </div>

      {/* Claim Cards */}
      <div className="px-3">
        <Claimcard />
      </div>
    </div>
  );
};

export default ContactUs;
