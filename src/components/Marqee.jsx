import { motion } from 'framer-motion'
import React from 'react'
function Marqee() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed=".1" className='w-full py-10  bg-[#157568] rounded-tl-3xl rounded-tr-3xl'>
      <div className="text border-t-2 border-b-2 border-zinc-200 flex p-2  overflow-hidden whitespace-nowrap" >
        <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear",repeat:Infinity,duration:5}} className='text-[15vw] leading-none font-["Test Founders Grotesk X-Cond"] uppercase font-bold  pr-5'>We Are Ochi</motion.h1>
        <motion.h1 initial={{x:0}}  animate={{x:"-100%"}} transition={{ease:"linear",repeat:Infinity,duration:5}} className='text-[15vw] leading-none font-["Test Founders Grotesk X-Cond"] uppercase font-bold pr-5 '>We Are Ochi</motion.h1>
      </div>
    </div>
  )
}

export default Marqee
