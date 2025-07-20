import React from 'react'
import Uppernavbar from "@/app/component/uppernavbar";
import Footer from "@/app/component/footer"

import Content from "@/app/component/privacypolicy/content"

const page = () => {
  return (
      <div className='h-auto w-full'>
        <Uppernavbar />
       <Content />
    <Footer />
    </div>
  )
}

export default page