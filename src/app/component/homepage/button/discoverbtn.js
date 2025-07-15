import React from 'react'

const discoverbtn = ({hovercolor, bgcolor, btntext}) => {
  return (
    <div>
         <div>
          <button className={`text-white ${bgcolor} ${btntext} px-14 py-4 text-[16px] font-semibold rounded-full ${hovercolor}`}>
            Discover More
          </button>
        </div>
    </div>
  )
}

export default discoverbtn