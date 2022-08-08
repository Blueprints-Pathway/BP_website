import React from "react"
import {
  FaWhatsapp,
  FaLinkedinIn,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa"

function Contact() {
  return (
    <>
      <div className='sm:block xl:hidden'>
        <div>
          <div className='xl'>
            <div className='sm:hidden  xl:bg-[#105899] xl:w-[218px] xl:h-[465px] xl:relative'>
              <h4 className='sidecon'>CONTACT</h4>
              <h5 className='sideecon'>CONTACT</h5>
            </div>
          </div>
        </div>
        <div>
          <div className='bg-[#105899] xl:bg-white'>
            <div>
              <div className='text-[16.32px] text-[#ffffff] xl:text-[#105899] font-[700] leading-[19px] tracking-[0.015em] pt-[83px] pr-[26px]  font-[Karla] mt-[42px] ml-[25px] uppercase pb-[10px] titlee'>
                CONTACT US
              </div>

              <div>
                <div className='xl:flex xl:items-center xl:mt-[-130px]'>
                  <div className='flex '>
                    <div className='flex pl-[26px] pt-[26px]'>
                      <div className='p-[10px] bg-white rounded-full text-[15px] text-[#105899] mr-[5px]'>
                        <FaWhatsapp />
                      </div>
                      <div className='p-[10px] bg-white rounded-full text-[15px] text-[#105899] mr-[5px]'>
                        <FaLinkedinIn />
                      </div>
                      <div className='p-[10px] bg-white rounded-full text-[15px]  text-[#105899]  mr-[5px]'>
                        <FaInstagram />
                      </div>
                      <div className='p-[10px] bg-white rounded-full text-[15px]  text-[#105899]'>
                        <FaTwitter />
                      </div>
                    </div>
                    <div className='pl-[20px]'>
                      <h5 className='font-[Karla] font-[400] text-[12px] leading-[30px] tracking-[0.02em] text-white xl:text-[#105899] xl:ml-[110px] xl:text-[16px] xl:mb-[11px] xl:leading-[30px'>
                        Subscribe to our email
                      </h5>
                      <button className='bg-white h-[33px] w-[127px] rounded-[5px] text-[#1C1A64] font-[Karla] font-[400] text-[10px] leading-[] tracking-[0.02em]'>
                        JOIN EMAIL LIST
                      </button>
                    </div>
                  </div>
                  <div>
                    <h5 className=' pl-[24px]font-[Karla] font-[400] text-[14px] leading-[21px] tracking-[0.01em] text-white pt-[23px] pl-[26px] xl:text-[#105899]  xl:text-[16px] '>
                      Elf Bus stop, No 1b Akinyemi Ave, Lekki
                      <br /> Phase 1 106104, Lagos
                    </h5>
                    <h5 className='font-[Karla] font-[400] text-[14px] leading-[30px] tracking-[0.02em] text-white pt-[10px] pl-[26px] xl:text-[#105899]  xl:text-[16px] xl:mb-[8px] xl:mt-[16px]'>
                      +234 - 816 - 919 - 9932
                    </h5>
                    <h5 className='font-[Karla] font-[400] text-[14px] leading-[30px] tracking-[0.02em] text-white pt-[1px] pl-[26px] xl:text-[#105899]  xl:text-[16px'>
                      Talktous@blueprintspathway.com
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

     <div className="sm:hidden xl:block">
     <div className='xl:grid xl:grid-cols-[218px,1fr] '>
        <div className="sm:hidden xl:block">
        <div className=' xl:bg-[#105899] xl:w-[218px] xl:h-[265px] xl:relative'>
          <h4 className='sidecon'>CONTACT</h4>
          <h5 className='sideecon'>CONTACT</h5>
        </div>
        </div>
        <div className='flex pl-[18px] pr-[110px] justify-between items-center'>
          <div>
            <div className="text-[36px] font-[700] font-[Karla] tracking-[0.015em] leading-[42px] cont pb-[18px]">CONTACT US</div>
            <div className='flex mt-[20px]'>
              
              <div className='text-[20px] text-white bg-[#105899] p-[15px] rounded-full mr-[21px]'>
                <FaWhatsapp />
              </div>
              <div className='text-[20px] text-white bg-[#105899] p-[15px] rounded-full mr-[21px]'>
                <FaLinkedinIn />
              </div>
              <div className='text-[20px] text-white bg-[#105899] p-[15px] rounded-full mr-[21px]'>
                <FaInstagram />
              </div>
              <div className='text-[20px] text-white bg-[#105899] p-[15px] rounded-full mr-[21px]'>
                <FaTwitter />
              </div>
            </div>
          </div>
          <div>
            <h5 className='text-center text-[16px] leading-[30px] text-[#666666] tracking-[0.02em] font-normal font-[Karla]'>
              Subscribe to our email
            </h5>
            <button className='bg-[#ffffff] shadow-lg w-[205px] h-[46px] tracking-[0.02em] text-[#1C1A64] font-[Karla] rounded-[5px] text-[16px] leading-[46px]'>
              JOIN EMAIL LIST
            </button>
          </div>
          <div>
            <h5 className='font-[Karla] text-[16px] leading-[30px] text-[#666666] tracking-[0.02em]'>
              Elf Bus stop, No 1b Akinyemi Ave, Lekki
              <br /> Phase 1 106104, Lagos
            </h5>
            <h5 className='font-[Karla] text-[16px] leading-[30px] text-[#666666] tracking-[0.02em]'>
              +234 - 816 - 919 - 9932
            </h5>
            <h5 className='font-[Karla] text-[16px] leading-[30px] text-[#666666] tracking-[0.02em]'>
              Talktous@blueprintspathway.com
            </h5>
          </div>
        </div>
      </div>
     </div>
      <div className='bg-white  xl:bg-gradient-to-b from-[#105899] to-[#1B7BD1]'>
        <h6 className='text-center text-[8px] text-[#105899] font-[Karla] font-[400] leading-[30px] tracking-[0.02em] pb-[7px] pt-[8px] xl:text-[24px]  xl:text-white xl:h-[100px] xl:pt-[50px] xl:pb-[29px] '>
          Copyright - 2022 BlueprintsPathways - All rights reserved.
        </h6>
      </div>
    </>
  )
}

export default Contact
