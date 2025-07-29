import React from "react";
import Uppernavbar from "@/app/component/uppernavbar";
import Footer from "@/app/component/footer";
import Main from "@/app/component/child/mainwraper";

const page = () => {
  return (
    <div>
      <Uppernavbar />
      <Main />
      <Footer />
    </div>
  );
};

export default page;
