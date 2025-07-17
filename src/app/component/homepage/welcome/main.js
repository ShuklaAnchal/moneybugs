import React from 'react'
import Left from "./left";
import Right from "./right"

const main = () => {
  return (
    <div className='lg:h-screen h-auto w-full flex lg:flex-row flex-col justify-between items-center lg:container px-3'>
      <Left />
      <Right />
    </div>
  )
}

export default main