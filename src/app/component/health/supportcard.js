
import React from "react";

// Reusable SupportCard component
const SupportCard = ({ cards = [] }) => {
  return (
    <div className="lg:container md:container mx-auto px-5 mb-16 flex flex-col items-center">
        <h3 className="text-[20px] text-primary">Health Insurance Near Me</h3>
        <h1 className="text-[30px] font-semibold">Bhopal's Leading Health Insurance Consulting Firm</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-7">
        {cards.map((item, index) => (
          <div
            key={index}
            className="bg-bgbluecolor text-center flex flex-col items-center text-white rounded-2xl py-6 px-5 flex flex-col h-full shadow-md hover:shadow-lg transition duration-300"
          >
            <div className="text-[35px] mb-2">{item.icons}</div>
            <h3 className="text-lg md:text-xl font-bold">{item.title}</h3>
            <p className="text-[14px] font-normal">{item.para}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SupportCard;
