import React from 'react';
import { FaShareNodes } from "react-icons/fa6";

const cardData = [
  { id: 1, cardimg: "https://theme9.nisharindia.in/assets/images/update-10-02-2023/team/team-4-1.jpg", name: "Kevin Martin", post: "Manager" },
  { id: 2, cardimg: "https://theme9.nisharindia.in/assets/images/update-10-02-2023/team/team-4-1.jpg", name: "Jessica Brown", post: "Manager" },
  { id: 3, cardimg: "https://theme9.nisharindia.in/assets/images/update-10-02-2023/team/team-4-1.jpg", name: "Mike Hardson", post: "Manager" }
];

const TeamCard = () => {
  return (
    <div className='flex flex-row gap-10 flex-wrap lg:justify-between justify-center px-3'>
      {cardData.map((item, index) => (
        <div key={index} className='w-[316px] h-[426px] bg-red-500 mb-5 rounded-[110px] relative overflow-hidden'>
          <img src={item.cardimg} alt='bg image' className='absolute z-0 h-full w-full inset-0 object-cover' />

          <div className='h-[106px] w-full bg-red-500 absolute bottom-0 left-0 z-10 text-center flex flex-col justify-center'>
            <div className='text-white'>
              <h2 className='text-[24px] font-semibold hover:text-black'>{item.name}</h2>
              <p className='text-[16px]'>{item.post}</p>
            </div>
            <div className='absolute right-0 top-[-25px] mr-5 h-[50px] w-[50px] bg-black flex justify-center items-center rounded-[5px]'>
              <FaShareNodes className='text-white text-[25px]' />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TeamCard;
