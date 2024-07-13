import React from 'react'
import img from './img/s.jpg'
function About() {
  return (
    <div data-scroll   className='w-full p-20 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-black'>
      <h1 className='text-[3vw] leading-[3vw] tracking-tight'>Ochi is a strategic partner for fast-growing tech businesses that need to raise funds, sell products, explain complex ideas, and hire great people.</h1>
      <div className=" w-full  py-4  border-t-2 border-zinc-700 mt-14 flex gap-5">
        <div className='w-1/2 '>
            <h1 className='text-[5vw] font-semibold'>Our approach:</h1>
            <button className='py-4 px-8 bg-zinc-800 text-white rounded-full'>Read More.</button>
        </div>
        <div className='w-1/2 h-[70vh] bg-zinc-700 rounded-3xl'>
        <img src={img} alt="" className='w-full h-full object-cover rounded-3xl' />
        </div>
      </div>
    </div>
  )
}

export default About
