import React from "react";
import MainComponent from "@/app/component/health/mainwrap";
import Uppernavbar from "@/app/component/uppernavbar";
import Footer from "@/app/component/footer";

const page = () => {
  return (
    <div>
      <Uppernavbar />
      <MainComponent />
      <Footer />
    </div>
  );
};

export default page;
