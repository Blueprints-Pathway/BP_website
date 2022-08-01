import React from "react"
import About from "../Images/About.png"
function AboutUs() {
  return (
    <>
      <div className='text-[16.32px] text-[#666666] font-[700] leading-[19px] font-[Karla] mt-[42px] ml-[25px] uppercase pb-[4px] title'>
        ABOUT US
      </div>
      <div className='flex justify-between pl-[27.54px] pt-[35.7px]'>
        <img className='w-[90.79px] img' src={About} alt='' />
        <p className='font-[Karla] text-[12.24px] leading-[18.36px] tracking-[0.03em] ml-[21.24px] text-[#666666]'>
          Sed ut perspiciatis unde omnis voluptate mccusantium doloremq
          uelaudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
          veritatis et quasi architecto beatae vitae dicta sunt explicabo. . .
          Read more
        </p>
      </div>
    </>
  )
}

export default AboutUs
