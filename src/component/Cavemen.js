import React from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import images from "./Gallery"

function Cavemen() {
  return (
    <>
    <div className="xl:grid xl:grid-cols-[218px,1fr]">
   
    <div className=" xl:block sm:hidden">
    <div className='bg-[#105899] w-[218px] h-[1440px] relative'>
        <h4 className='side'>GALLERY</h4>
        <h5 className='sidee'> GALLERY</h5>
      </div>
    </div>
      <div>
      <div className='text-[16.32px] text-[#666666] font-[700] leading-[19px] font-[Karla] mb-[5px]  mt-[42px] ml-[25px] uppercase pb-[4px]  title xl:font-bold xl:ml-[51px] xl:text-[39.52px] xl:leading-[46.2px] xl:pt-[-148px] xl:pb-[5px] xl:mb-[50px] titleb'>
        THE CAVEMEN
      </div>
        <motion.div>
          <motion.div className=''>
            <motion.div className='rel xl:grid xl:grid-cols-4 xl:ml-[43.65px]'>
              {images.map((image) => {
                return (
                  <motion.div className=' flex'>
                    <img className='xl:mb-[30px]' src={image} alt='' />
                  </motion.div>
                )
              })}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
    </>
  )
}

export default Cavemen
