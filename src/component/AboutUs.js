import React from "react"
import About from "../Images/About.png"
function AboutUs() {
  return (
    <>
      <div className='xl:hidden sm:block'>
      <div className='text-[16.32px] text-[#666666] font-[700] leading-[19px] font-[Karla] mt-[42px] ml-[25px] uppercase pb-[4px] mb-[5px]  title xl:font-bold xl:ml-[39px] xl:text-[39.52px] xl:leading-[46.2px] xl:pt-[148px] xl:pb-[5px] titleb'>
        ABOUT US
      </div>
        <div className='flex justify-between pl-[27.54px] pt-[35.7px]'>
          <img className='w-[90.79px] img' src={About} alt='' />
          <p className='font-[Karla] text-[12.24px] leading-[18.36px] tracking-[0.03em] ml-[21.24px] text-[#666666]'>
          We create a framework that breaks down everyday complications and provides solutions to help solve them.
          </p>
        </div>
      </div>
      <div className='xl:block sm:hidden'>
        <div className="grid grid-cols-[218px,1fr]">
          <div className='bg-[#105899] w-[218px] h-[900px] relative'>
            <h4 className='sidep'> ABOUTUS</h4>
            <h5 className='sideep'> ABOUT US</h5>
          </div>
         <div className="flex items-center  ">
         
         <div>
         
         
            <img className=' imgg w-[348px] xl:ml-[41px] ' src={About} alt='' />
          </div>
          <div>
          <div className="">
        <p className=" xl:text-[16px] xl:font-normal xl:tracking-[0.03em]  w-[620.5px] text-justify  xl:ml-[88.93px] xl:leading-[28.55px] ">
        <h2>BLUEPRINT PATHWAY: Always deliver more than expected</h2>
We connect you to solutions designed to eliminate everyday complications or we are a Nigerian tech solutions company committed to simplifying digital processes in every industry across Africa, from Edu-travel to Fintech.

We are:
<ul>
  <li>Problem solvers</li>
  <li>Creatives</li>
<li>Collaborative</li>
<li>Innovative</li>
<li>Driven</li>
<li>Value-oriented</li>
</ul>
Our team is committed to breaking the barriers to success, but we pride ourselves on our healthy work environment, one that primes every one of us to do our best and deliver more than expected.

        </p>
        <button className="xl:ml-[88.93px] xl:w-[156.28px] xl:h-[50.5px] rounded-[5.49px] xl:font-normal font-[Karla] text-[17.57px] xl:leading-[28.55px] mt-[75.85px]">GET STARTED</button>
        </div>
          </div>
         </div>
        </div>
      </div>
    </>
  )
}

export default AboutUs
