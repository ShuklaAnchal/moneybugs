import React from 'react'
import { FaCircleUser } from "react-icons/fa6";
import { IoChatbubblesSharp } from "react-icons/io5";


const cardData = [
  {
    id: 1,
    image: "https://theme9.nisharindia.in/assets/images/update-10-02-2023/blog/news-5-1.jpg",
    author: "Admin",
    comments: 2,
    title: "Which Allows You to Pay Insurance Bill",
  },
  {
    id: 2,
    image: "https://theme9.nisharindia.in/assets/images/update-10-02-2023/blog/news-5-1.jpg",
    author: "Admin",
    comments: 5,
    title: "New Feature for Hassle-Free Claims",
  },
    {
    id: 3,
    image: "https://theme9.nisharindia.in/assets/images/update-10-02-2023/blog/news-5-1.jpg",
    author: "Admin",
    comments: 5,
    title: "New Feature for Hassle-Free Claims",
  },
];

const newsArtical = () => {
  return (
    <div className='h-auto w-full container flex flex-col py-[100px] gap-4 '>
     <div className='flex flex-wrap justify-between lg:gap-0 gap-3'>
       <div >
        <p className='text-texthearder text-[16px]'>Recent News Feed</p>
       <h1 className='lg:text-[40px] text-[30px] font-bold lg:w-[65%] w-full'>Latest News & Articles From the Blog</h1>
       </div>
       <div className=''>
        <button className='text-[12px] bg-[#f3f3f3] rounded-full font-medium px-9 py-4'>VIEW ALL NEWS</button>
       </div>
     </div>
     <div className='flex lg:flex-row md:flex-col flex-col gap-7 lg:gap-0 md:gap-3 lg:justify-between justify-center w-full items-start'>
     <div className="lg:w-[550px] lg:h-[570px] md:[600px] md:h[570px] w-[450px] h-[428px] bg-white rounded-xl overflow-hidden shadow-md relative group">
      {/* Image with zoom on hover */}
      <div className="w-full h-full overflow-hidden relative">
        <img
          src="https://theme9.nisharindia.in/assets/images/update-10-02-2023/blog/news-5-1.jpg"
          alt="Insurance Banner"
          className="w-full h-full absolute inset-0 object-cover transform transition-transform duration-500 group-hover:scale-110"
        />
          <div className="px-14 relative text-white">
        <div className="flex items-center space-x-4 text-sm mb-2">
          <span className="flex items-center">
            <span className="text-red-500"><FaCircleUser className='text-primary w-4 h-4'/></span>&nbsp;by Admin
          </span>
          <span className="flex items-center">
            <span className="text-red-500"><IoChatbubblesSharp  className='text-primary w-4 h-4'/></span>&nbsp;2 Comments
          </span>
        </div>
        <h3 className="text-[30px] font-bold leading-tight ">
          Which Allows You to Pay <br />
          Insurance Bill
        </h3>
      </div>
      </div>

    </div>
  <div className="flex flex-col gap-11">
      {cardData.map((item) => (
        <div key={item.id} className="border-[1px] border-textsecondry lg:w-[570px] lg:h-[161px] w-[400px] h-[292px] bg-white rounded-[14px] overflow-hidden shadow-md flex group lg:flex-row sm:flex-col">
          {/* Image with zoom on hover */}
          <div className="w-[48%] h-full overflow-hidden">
            <img
              src={item.image}
              alt="Insurance Banner"
              className="w-full h-full rounded-[14px] object-cover transform transition-transform duration-500 group-hover:scale-110"
            />
          </div>
          <div className="flex flex-col gap-1 px-4 justify-center w-[52%]">
            <div className="flex items-center space-x-4 text-[14px] mb-2 text-textsecondry">
              <span className="flex items-center">
                <FaCircleUser className="text-primary w-4 h-4" />&nbsp;by {item.author}
              </span>
              <span className="flex items-center">
                <IoChatbubblesSharp className="text-primary w-4 h-4" />&nbsp;{item.comments} Comments
              </span>
            </div>
            <h3 className="text-[20px] font-semibold leading-tight text-black">
              {item.title}
            </h3>
          </div>
        </div>
      ))}
    </div>
       </div>
     </div>
   
  )
}

export default newsArtical