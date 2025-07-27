"use client";
import React from "react";

import Uppernavbar from "@/app/component/uppernavbar";
import Mainwrap from "@/app/component/motor/mainwrap";
import Footer from "@/app/component/footer";


const page = () => {

  return (
    <div className="h-auto w-full">
      <Uppernavbar />
      <Mainwrap />
      <Footer />
    </div>
  );
};

export default page;
