import React from "react"
import Travels from "../Images/BlueTravel.png"
import Scam from "../Images/ScamTrust.png"
import Over from "../Images/over.png"

function Products() {
  return (
    <>
      <div  className="xl:grid xl:grid-cols-[218px,1fr]">
      <div className=" xl:block sm:hidden">
      <div className='bg-[#105899] w-[218px] h-[1024px] relative'>
        <h4 className='sidep'> PRODUCTS</h4>
        <h5 className='sideep'> PRODUCTS</h5>
      </div>
      </div>
      <div>
      <div className='text-[16.32px] text-[#666666] font-[700] leading-[19px] font-[Karla] mt-[42px] ml-[25px] uppercase pb-[4px] mb-[5px] title xl:font-bold xl:ml-[39px] xl:text-[39.52px] xl:leading-[46.2px] xl:pt-[-148px] xl:pb-[5px] xl:mb-[50px] titleb'>
        PRODUCTS
      </div>
        <div className='xl:grid xl:grid-cols-2'>
          <div>
            <div className='bg-[#DEE8F1] ml-[30px] mr-[30px] relative mb-[33px]'>
              <h4 className='font-[Karla] text-[16px] leading-[16px] text-[#666666] font-[700] pt-[29px] pl-[12px] pb-[19px] tracking-[0.015em]  xl:font-bold  xl:text-[20px] xl:leading-[23.38px] xl:pt-[29px] xl:pb-[18px] '>
                Blueprints Travels
              </h4>
              <h3 className='font-[Karla] text-[24px] leading-[30px] text-[#8D8D8D] font-[800] pl-[12px] mb-[12px] sh  xl:text-[36px] xl:leading-[46px]'>
                <span className='sp'> JAPA</span> with ease ...
                <br className='xl:hidden sm:block' /> a new{" "}
                <br className='xl:block sm:hidden' />
                experience
              </h3>
              <h5 className='font-[Karla] text-[12px] leading-[46px] text-[#666666] font-[400] pl-[12px]  xl:text-[20px] xl:mb-[29px]'>
                Learn more &#8594;
              </h5>
              <img
                className='w-[186px] ml-[114px] xl:w-[394px] xl:ml-[120px]'
                src={Travels}
                alt=''
              />
              <img
                className='w-[186px] ml-[114px] absolute bottom-[0] xl:w-[342px] xl:ml-[170px] z-[10]'
                src={Over}
                alt=''
              />
            </div>
          </div>

          <div>
            <div className='bg-[#C4C4C4AD] ml-[30px] mr-[30px] relative mb-[33px] pb-[36.19px]'>
              <h4 className='font-[Karla] text-[16px] leading-[18.7px] text-[#666666] font-[700] pt-[29px] pl-[12px] pb-[19px] tracking-[0.015em]  xl:text-[20px] xl:mb-[18px]'>
                ScamTrust
              </h4>
              <h3 className='font-[Karla] text-[20px] leading-[30px] text-[#8D8D8D] font-[800] pl-[12px] mb-[12px] sh xl:text-[36px] xl:leading-[46px] xl:font-extrabold xl:mb-[18px]'>
                You don’t have to trust
                <br /> them, <span className='sp'>just trust us</span>.
              </h3>
              <div className='flex'>
                <h5 className='font-[Karla] text-[10px] leading-[20px] text-[#666666] font-[400] pl-[12px] tracking-[0.02em] xl:text-[16px] xl:leading-[26px]  '>
                  Temporibus autem quibusdam et aut officiis debitis aut rerum
                  necessitatibus saepe eveniet ut et voluptates repudiandae sint
                  et molestiae non recusandae.
                </h5>
                <img className='w-[101px] xl:w-[305px]' src={Scam} alt='' />
              </div>
              <div className='mt-[22px] xl:mt-[-50px]'>
                <input
                  className='w-[160.47px] h-[37.81px] ml-[12px] rounded-[7px] drop-shadow-2xl font-[Karla] text-[#1974C44A] placeholder:text-[11px] pl-[8px] xl:w-[245px]'
                  type='text'
                  placeholder='Enter your email address'
                />
                <button className='h-[31px] w-[81px] rounded-[7px] ml-[14.53px] text-[11px] font-[Karla] font-[400] xl:w-[109px] xl:h-[42px] xl:text-[16px] xl:placeholder:text-[16px]'>
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  )
}

export default Products
