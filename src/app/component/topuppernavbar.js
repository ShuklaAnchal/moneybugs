import React from "react";

import Detailes from "@/app/component/navbar.js/detailes"
import Social from "@/app/component/navbar.js/social"



const uppernavbar = () => {
  return (
    <div className="hidden lg:flex">
<div className="bg-[#000] w-[100%]">
        <div className="container h-12 flex justify-between items-center">

<Detailes flexf={"flex-row"} textsi={"text-[12px]"} />

<Social iconcolor={"text-white"} />
      </div>
</div>
      </div>
  
  );
};

export default uppernavbar;
