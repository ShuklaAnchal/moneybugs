"use client";
import React from "react";

const ContactForm = () => {
  return (
    <div className="w-full bg-white shadow-md lg:px-4 md:px-4 px-3 sm:px-6 lg:px-10 py-10 sm:py-14 rounded-tr-[30px] rounded-bl-[30px] max-w-2xl mx-auto">
      <h2 className="text-xl sm:text-2xl font-bold text-black mb-2">
        Get in touch with us
      </h2>
      <p className="text-base text-gray-500 mb-8">
        Complete the form to start your personalized insurance journey.
      </p>

      <form className="flex flex-col gap-6">
        <input
          type="text"
          placeholder="Name"
          className="border-b border-gray-300 outline-none py-2 placeholder:text-gray-400 text-sm sm:text-base"
        />
        <input
          type="tel"
          placeholder="Mobile Number"
          className="border-b border-gray-300 outline-none py-2 placeholder:text-gray-400 text-sm sm:text-base"
        />
        <textarea
          placeholder="Message"
          rows="4"
          className="border-b border-gray-300 outline-none py-2 placeholder:text-gray-400 resize-none text-sm sm:text-base"
        ></textarea>

        <p className="text-xs text-gray-400">
          By submitting, you agree to the processing of your personal data by Subx
          as described in the Privacy Statement.
        </p>

        <button
          type="submit"
          className="mt-4 self-end bg-primary text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-orange-600 transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
