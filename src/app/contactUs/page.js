import React from 'react'

import Uppernavbar from "@/app/component/uppernavbar";
import Footer from "@/app/component/footer"
import Contact from "@/app/component/contactPage/contactus"
const page = () => {
  return (
    <div className='h-auto w-full'>
        <Uppernavbar />
        <Contact />
    <Footer />
    </div>
  )
}

export default page