import React from 'react'
import TopUppernavbar from "@/app/component/topuppernavbar"
import MainComponent from "@/app/component/maindashbaordpage"


const page = () => {
  return (
    <div className='w-[100%] flex flex-col'>
     <TopUppernavbar />
     <MainComponent />
   
    </div>
  )
}

export default page