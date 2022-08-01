import React from "react"
import Travels from "../Images/BlueTravel.png"
import Scam from "../Images/ScamTrust.png"
import Over from "../Images/over.png"

function Products() {
  return (
    <>
     <div>
     <div className='text-[16.32px] text-[#666666] font-[700] leading-[19px] font-[Karla] mt-[42px] ml-[30px] uppercase title pb-[4px]'>
        PRODUCTS
      </div>
      <div className='bg-[#DEE8F1] ml-[30px] mr-[30px] relative mb-[33px]'>
        <h4 className='font-[Karla] text-[16px] leading-[16px] text-[#666666] font-[700] pt-[29px] pl-[12px] pb-[19px] tracking-[0.015em]'>
          Blueprints Travels
        </h4>
        <h3 className='font-[Karla] text-[24px] leading-[30px] text-[#8D8D8D] font-[800] pl-[12px] mb-[12px]'>
          JAPA with ease ...
          <br /> a new experience
        </h3>
        <h5 className='font-[Karla] text-[12px] leading-[46px] text-[#666666] font-[400] pl-[12px]'>
          Learn more
        </h5>
        <img className='w-[186px] ml-[114px]' src={Travels} alt='' />
        <img
          className='w-[186px] ml-[114px] absolute bottom-[0]'
          src={Over}
          alt=''
        />
      </div>
      
      <div className='bg-[#C4C4C4AD] ml-[30px] mr-[30px] relative mb-[33px] pb-[36.19px]'>
        <h4 className='font-[Karla] text-[16px] leading-[18.7px] text-[#666666] font-[700] pt-[29px] pl-[12px] pb-[19px] tracking-[0.015em]'>
          ScamTrust
          </h4>
        <h3 className='font-[Karla] text-[20px] leading-[30px] text-[#8D8D8D] font-[800] pl-[12px] mb-[12px]'>
        You don’t have to trust<br/> them, just trust us.
        </h3>
        <div className="flex items-center">
        <h5 className='font-[Karla] text-[10px] leading-[20px] text-[#666666] font-[400] pl-[12px] tracking-[0.02em] '>
        Temporibus autem quibusdam et aut officiis debitis aut rerum 
        necessitatibus saepe eveniet ut et voluptates repudiandae sint et 
        molestiae non recusandae.
        </h5>
        <img className='w-[101px]' src={Scam} alt='' />
        
        </div>
        <div className="mt-[22px]">
        <input className="w-[160.47px] h-[37.81px] ml-[12px] rounded-[7px] drop-shadow-2xl font-[Karla] text-[#1974C44A] placeholder:text-[11px] pl-[8px]" type="text" placeholder="Enter your email address" />
        <button className="h-[31px] w-[81px] rounded-[7px] ml-[14.53px] text-[11px] font-[Karla] font-[400] ">Get Started</button>
        </div>
      </div>
     </div>
    </>
  )
}

export default Products
