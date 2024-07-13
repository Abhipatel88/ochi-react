import { motion } from "framer-motion";
import React from "react";
import { MdArrowOutward } from "react-icons/md";

function Landingpage() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.3" className="w-full h-screen bg-zinc-900 pt-1">
      <div className="textstructure mt-52 px-20">
        {["We Create", "Eye Opening", "Prasentations"].map((item, index) => {
          return (
            <div className="masker ">
              <div className="w-fit flex items-center">
                {index === 1 && (
                  <motion.div initial={{width:0}} animate={{width:"8vw"}} transition={{ease:[0.65, 0, 0.35, 1], duration:1}} className="w-[8vw] h-[5vw] mr-4 rounded-md bg-cover bg-[url('https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg')]"></motion.div>
                )}
                <h1 className=" leading-[5.6vw] font-bold uppercase font-['Test Founders_Grotesk_X-Condensed'] text-8xl flex items-center">
                  {item}
                </h1>
              </div>
            </div>
          );
        })}
      </div>
      <div className="border-t-[2px] mt-20 uppercase border-t-zinc-300 flex items-center justify-between py-5 px-20">
        {["For Public and Private Complany", "From the First Pitch To IPO"].map(
          (item, index) => (
            <p className="text-white text-md ">{item}</p>
          )
        )}
        <div className="start flex items-center justify-center gap-2  ">
          <div className="border-2 border-zinc-300 rounded-full py-2 px-7 uppercase ">
            Start Project
          </div>
          <div className="a w-9 h-9 rounded-full border-2  flex items-center uppercase justify-center">
            <MdArrowOutward />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landingpage;
