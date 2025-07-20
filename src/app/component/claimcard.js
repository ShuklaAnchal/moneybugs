import React from 'react';

const Carddata = [
  { title: "Claim Support", number: "9201167491", para: "Get hassle-free claim support with expert assistance" },
  { title: "Sales & Enquiry", number: "9201167491", para: "Get in touch with our experts for personalized guidance" },
  { title: "Renewal", number: "9039267749", para: "Easily renew your policy with seamless processing, timely reminders" },
  { title: "Free Consultation", number: "9755040311", para: "Whatsapp + Call" }
];

const ClaimCard = () => {
  return (
    <div className="lg:container md:container mx-auto px-3 mb-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {Carddata.map((item, index) => (
          <div
            key={index}
            className="bg-bgbluecolor text-white rounded-2xl py-6 px-5 flex flex-col h-full shadow-md hover:shadow-lg transition duration-300"
          >
            <h3 className="text-lg md:text-xl font-bold ">{item.title}</h3>
            <h4 className="text-base md:text-lg font-semibold ">{item.number}</h4>
            <p className="text-sm md:text-base">{item.para}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClaimCard;
