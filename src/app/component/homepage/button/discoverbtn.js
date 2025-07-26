import React from 'react'

const discoverbtn = ({bgcolor, onClick}) => {
  return (
    <div>
         <div>
          <button onClick={onClick}  className={`${
          bgcolor ? bgcolor : 'bgclo1'
        }  text-white  px-14 py-4 text-[16px] font-semibold rounded-full `}>
            Discover More
          </button>
        </div>
    </div>
  )
}

export default discoverbtn