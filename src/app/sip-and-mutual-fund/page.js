import React from 'react'
import Sip from "@/app/component/sip/mainwaper";
import Uppernavbar from "@/app/component/uppernavbar";
import Footer from "@/app/component/footer";

const page = () => {
  return (
    <div>
      <Uppernavbar />
      <Sip/>
      <Footer/>
    </div>
  )
}

export default page