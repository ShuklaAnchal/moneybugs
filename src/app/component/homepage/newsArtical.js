"use client";
import React from "react";
import { FaCircleUser } from "react-icons/fa6";
import { IoChatbubblesSharp } from "react-icons/io5";

const cardData = [
  {
    id: 1,
    image:
      "https://theme9.nisharindia.in/assets/images/update-10-02-2023/blog/news-5-1.jpg",
    author: "Admin",
    comments: 2,
    title: "Which Allows You to Pay Insurance Bill",
  },
  {
    id: 2,
    image:
      "https://theme9.nisharindia.in/assets/images/update-10-02-2023/blog/news-5-1.jpg",
    author: "Admin",
    comments: 5,
    title: "New Feature for Hassle-Free Claims",
  },
  {
    id: 3,
    image:
      "https://theme9.nisharindia.in/assets/images/update-10-02-2023/blog/news-5-1.jpg",
    author: "Admin",
    comments: 5,
    title: "New Feature for Hassle-Free Claims",
  },
];

const NewsArticle = () => {
  return (
    <div className="w-full px-6 lg:container mx-auto py-20 space-y-10">
      {/* Header */}
      <div className="flex flex-col lg:flex-row justify-between items-start gap-4">
        <div className="max-w-xl">
          <p className="text-texthearder text-sm sm:text-base mb-1">
            Recent News Feed
          </p>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-snug">
            Latest News & Articles From the Blog
          </h1>
        </div>
        <button className="text-xs sm:text-sm bg-[#f3f3f3] rounded-full font-medium px-6 sm:px-9 py-3 sm:py-4 whitespace-nowrap">
          VIEW ALL NEWS
        </button>
      </div>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row gap-10">
        {/* Left Featured Card */}
        <div className="w-full lg:w-1/2 h-[400px] sm:h-[500px] lg:h-[570px] bg-white rounded-xl overflow-hidden shadow-md relative group">
          <img
            src="https://theme9.nisharindia.in/assets/images/update-10-02-2023/blog/news-5-1.jpg"
            alt="Insurance Banner"
            className="w-full h-full object-cover absolute inset-0 transition-transform duration-500 group-hover:scale-110"
          />
          <div className="relative z-10 text-white px-6 sm:px-10 pt-10 space-y-2">
            <div className="flex items-center gap-4 text-sm mb-2">
              <span className="flex items-center gap-1">
                <FaCircleUser className="text-primary w-4 h-4" />
                by Admin
              </span>
              <span className="flex items-center gap-1">
                <IoChatbubblesSharp className="text-primary w-4 h-4" />
                2 Comments
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold leading-tight">
              Which Allows You to Pay <br /> Insurance Bill
            </h3>
          </div>
        </div>

        {/* Right Side List */}
        <div className="w-full lg:w-1/2 space-y-6 sm:space-y-8">
          {cardData.map((item) => (
            <div
              key={item.id}
              className="flex flex-col sm:flex-row border border-gray-200 rounded-[14px] bg-white shadow-md overflow-hidden group"
            >
              {/* Image */}
              <div className="w-full sm:w-[48%] h-48 sm:h-auto overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Content */}
              <div className="flex flex-col justify-center gap-2 p-4 w-full sm:w-[52%]">
                <div className="flex items-center gap-4 text-sm text-textsecondry">
                  <span className="flex items-center gap-1">
                    <FaCircleUser className="text-primary w-4 h-4" />
                    by {item.author}
                  </span>
                  <span className="flex items-center gap-1">
                    <IoChatbubblesSharp className="text-primary w-4 h-4" />
                    {item.comments} Comments
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-black leading-snug">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsArticle;
