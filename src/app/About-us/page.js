import React from 'react'

import Uppernavbar from "@/app/component/uppernavbar";
import Footer from "@/app/component/footer"
import Start from "@/app/component/aboutus/start"
const page = () => {
  return (
    <div className='h-auto w-full'>
        <Uppernavbar />
        <Start />
    <Footer />
    </div>
  )
}
export default page