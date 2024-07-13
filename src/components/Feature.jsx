import { motion } from 'framer-motion'
import React, { useState } from 'react'

function Feature() {
    // const [ishover, sethover]=useState(false) 
  return (
    <div className='w-full py-10 '>
        <div className='w-full px-20 border-b-2 pb-10'>
            <h1 className='text-[4rem] font-["Neue Montreal"] '>Featured Project</h1>
        </div>
        <div className="px-20">
            <div className="cards w-full flex gap-10 mt-10">

                <div className=" relative cardconatineer w-1/2 h-[75vh] ">
                    <h1 className=' absolute flex overflow-hidden  left-full  text-9xl top-1/2  -translate-y-1/2 -translate-x-1/2 z-[68] '>
                    {"FYDE".split('').map((item,index)=> <motion.span  className='fyde  '>{item}</motion.span>)}

                    </h1>
                    <div className="card w-full h-full rounded-xl bg-green-300 overflow-hidden">
                        <img className='w-full h-full bg-cover' src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png" alt="" />
                    </div>
                </div>
                <div className="cardconatineer w-1/2 h-[75vh] ">
                    <div  className=" relative card w-full h-full rounded-xl bg-zinc-300 overflow-hidden">
                    <h1 className=' absolute flex overflow-hidden right-full  text-9xl top-1/2 -translate-y-1/2 translate-x-1/2 z-[68] '>
                        {"VISE".split('').map((item,index)=> <motion.span  className=''>{item}</motion.span>)}
                    </h1>

                        <img  className='w-full h-full bg-cover' src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg" alt="" />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Feature
