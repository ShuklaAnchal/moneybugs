import React from 'react'
import Left from "./left";
import Right from "./right"

const main = () => {
  return (
    <div className='h-screen w-full flex justify-between items-center container'>
      <Left />
      <Right />
    </div>
  )
}

export default main