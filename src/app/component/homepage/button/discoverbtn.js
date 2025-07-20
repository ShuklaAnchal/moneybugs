import React from 'react'

const discoverbtn = ({btntext, hovercolor, bgcolor}) => {
  return (
    <div>
         <div>
          <button className={`text-black ${bgcolor} ${btntext} px-14 py-4 text-[16px] font-semibold rounded-full ${hovercolor}`}>
            Discover More
          </button>
        </div>
    </div>
  )
}

export default discoverbtn