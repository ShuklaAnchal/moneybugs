// components/ContactForm.jsx
import React from "react";

const ContactForm = () => {
  return (
    <div className="w-full bg-white rounded-2xl shadow-md px-6 py-8">
      <h2 className="text-[20px] md:text-[24px] font-bold text-black mb-6">
        Send a Message
      </h2>

      <form className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Name"
          className="border-b border-gray-300 outline-none py-2 placeholder:text-gray-400"
        />
        <input
          type="number"
          placeholder="Mobile Number"
          className="border-b border-gray-300 outline-none py-2 placeholder:text-gray-400"
        />
        <textarea
          placeholder="Message"
          rows="4"
          className="border-b border-gray-300 outline-none py-2 placeholder:text-gray-400 resize-none"
        ></textarea>

        <p className="text-xs text-gray-400 mt-2">
          By submitting, you agree to the processing of your personal data by Subx as described in the Privacy Statement.
        </p>

        <button
          type="submit"
          className="mt-4 self-end bg-[#FF6A00] text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-orange-600 transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
