import React from 'react'

function Cards() {
  return (
    <div className='w-full h-screen bg-zinc-900 flex items-center gap-5 px-20'>
        <div className="cardcontainer w-1/2 h-[50vh] ">
            <div className=" relative card w-full rounded-2xl  h-full  flex items-center justify-center  bg-[#004D43]">
                <img src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
                <button className='px-6 py-1 border-2 rounded-full absolute bottom-5 left-5 border-[#72a458] text-[#c1e166] '>&copy;2019-2024</button>
            </div>
        </div>
        <div className="cardcontainer w-1/2 h-[50vh] flex items-center gap-5">
        <div className=" relative card w-full rounded-2xl h-full flex items-center justify-center  bg-[#212121]">
            <img src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" />
            <button className='px-6 py-1 border-2 rounded-full absolute bottom-5 left-5 border-[#ffffff] text-[#ffffff] '>RATEING 5.0 ON CLUTCH</button>

        </div>
        <div className=" relative card w-full rounded-2xl h-full flex items-center justify-center  bg-[#212121]">
            <img src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="" />
            <button className='px-4 py-1 border-2 rounded-full absolute bottom-5 left-5 border-[#ffffff] text-[#ffffff] '>BUSINESS BOOTCAMP ALUMNI</button>

        </div>
            
        </div>
      
    </div>
  )
}

export default Cards
