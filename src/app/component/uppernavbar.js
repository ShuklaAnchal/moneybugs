"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";
import { IoIosArrowForward, IoIosArrowDown } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { IoSearchOutline } from "react-icons/io5";

import Logo from "@/icons/moneybugs-logo.png";
import Social from "@/app/component/navbar.js/social";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-page" },
  {
    label: "Insurance",
    dropdown: [
      { label: "Health Insurance", href: "/health-insurance" },
      { label: "Motor Insurance", href: "/motor-insurance" },
      { label: "Term Insurance", href: "/term-insurance" },
      { label: "SIP and Mutual Fund", href: "/sip-and-mutual-fund" },
      { label: "Traval Insurance", href: "/travel-insurance" },
      { label: "Child Saving Plan", href: "/child-saving-plan" },
    ],
  },
  { label: "Blogs" },
  { label: "Contact Us", href: "/contactUs" },
];

const UpperNavbar = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdownIndex, setOpenDropdownIndex] = useState(null);
  const [showSidebar, setShowSidebar] = useState(false);

  const handleOpenMenu = () => {
    setIsMobileMenuOpen(true);
    setTimeout(() => setShowSidebar(true), 300);
  };

  const handleCloseMenu = () => {
    setShowSidebar(false);
    setTimeout(() => setIsMobileMenuOpen(false), 200);
  };

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMobileMenuOpen]);

  return (
    <div className="shadow relative z-[9999] w-full">
      <div className="w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 bg-white fixed top-0 left-0 right-0 z-50">
        <div className="h-[90px] flex justify-between items-center w-full">
          {/* Logo */}
          <Link href="/">
            <div className="h-[60px] w-[120px]">
              <Image
                src={Logo}
                alt="MoneyBugs Logo"
                className="h-full w-full object-contain"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex text-[18px] gap-12 font-normal text-[#797979] relative">
            {navItems.map((item, index) => (
              <div
                key={index}
                className="relative"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {item.href ? (
                  <Link href={item.href} className="cursor-pointer">
                    {item.label}
                  </Link>
                ) : (
                  <div className="cursor-pointer">{item.label}</div>
                )}

                {/* Dropdown */}
                {item.dropdown && hoveredIndex === index && (
                  <div className="absolute bg-white top-[30px] left-0 w-48 border rounded shadow-lg z-50 transition-all">
                    {item.dropdown.map((subItem, subIndex) => (
                      <Link
                        key={subIndex}
                        href={subItem.href}
                        className="block px-6 py-3 hover:bg-gray-100 text-sm text-black"
                      >
                        {subItem.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Hamburger Menu */}
          <button className="lg:hidden text-2xl" onClick={handleOpenMenu}>
            <FiMenu className="hover:text-primary" />
          </button>

          {/* Right Buttons (desktop only) */}
          <div className="hidden md:flex gap-2 items-center">
            <div className="h-10 w-10 flex items-center justify-center">
              <IoSearchOutline />
            </div>
            <Link href="/contactUs">
              <button className="bgclo1 px-[40px] py-[16px] rounded-full text-white text-[13px] font-semibold hover:bg-black transition">
                GET A QUOTE
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Sidebar */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[999]">
          {/* Overlay */}
          <div
            className="absolute inset-0 bg-black bg-opacity-60 backdrop-blur-sm"
            onClick={handleCloseMenu}
          ></div>

          {/* Sidebar */}
          <div className="fixed top-0 left-0 h-full w-[85%] max-w-[300px] bg-black text-white shadow-lg p-4 overflow-y-auto transition-all duration-300 ease-in-out">
            <div className="flex justify-between items-center border-b border-white/20 pb-8 mt-3">
              <div className="w-[140px]">
                <Image src={Logo} alt="Logo" />
              </div>
              <button onClick={handleCloseMenu} className="text-2xl text-white">
                <FiX />
              </button>
            </div>

            {/* Menu Items */}
            <div className="flex flex-col text-[14px]">
              {navItems.map((item, index) => (
                <div key={index}>
                  {item.href ? (
                    <Link
                      href={item.href}
                      onClick={handleCloseMenu}
                      className="flex justify-between items-center py-2 border-b border-white/10"
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <div className="border-b border-white/10">
                      <div
                        onClick={() =>
                          setOpenDropdownIndex(
                            openDropdownIndex === index ? null : index
                          )
                        }
                        className="flex justify-between items-center py-2 cursor-pointer"
                      >
                        <span>{item.label}</span>
                        <span className="text-xl font-bold">
                          {openDropdownIndex === index ? (
                            <IoIosArrowDown className="text-primary bg-white p-2 w-7 h-7 shadow-md rounded-full" />
                          ) : (
                            <IoIosArrowForward className="text-white bg-primary p-2 w-7 h-7 shadow-md rounded-full" />
                          )}
                        </span>
                      </div>

                      {/* Dropdown Items */}
                      {item.dropdown && openDropdownIndex === index && (
                        <div className="ml-4 mt-2 pl-2 border-l border-white/10 flex flex-col gap-2">
                          {item.dropdown.map((subItem, subIndex) => (
                            <Link
                              key={subIndex}
                              href={subItem.href}
                              onClick={handleCloseMenu}
                              className="py-2 text-sm text-white hover:text-primary transition"
                            >
                              {subItem.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              ))}

              {/* Contact Info */}
              <div className="mt-6 border-t border-white/10 pt-4 text-sm space-y-3">
                <p className="flex items-center gap-2">
                  <MdEmail className="text-white bg-primary rounded-full p-2 w-8 h-8 shadow-md" />
                  needhelp@insur.com
                </p>
                <p className="flex items-center gap-2">
                  <FaPhoneAlt className="text-white bg-primary rounded-full p-2 w-8 h-8 shadow-md" />
                  666 888 0000
                </p>
                <div className="flex gap-4 mt-3">
                  <Social iconcolor={"text-white"} />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UpperNavbar;
