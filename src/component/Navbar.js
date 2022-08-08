import React from "react"
import { FaEnvelope } from "react-icons/fa";

function Navbar() {
  return (
    <>
      <div className="xl:block sm:hidden">
      <div className=' xl:grid xl:grid-cols-[218px,1fr]'>
        <div className=' xl:bg-[#105899] xl:w-[218px] xl:h-[60px] xl:relative'></div>
        <nav className='  bg-[#666666] xl:pl-[100px] '>
          <ul className='xl:flex '>
            <li className='xl:text-[16px] xl:font-[700] xl:font-[Karla] xl:leading-[18.7px] xl:tracking-[0.015em] xl:text-white xl:mr-[100px] xl:pt-[20px] '>
              ABOUT US
            </li>
            <li className='xl:text-[16px] xl:font-[700] xl:font-[Karla] xl:leading-[18.7px] xl:tracking-[0.015em] xl:text-white xl:mr-[100px] xl:pt-[20px] '>
              GALLERY
            </li>
            <li className='xl:text-[16px] xl:font-[700] xl:font-[Karla] xl:leading-[18.7px] xl:tracking-[0.015em] xl:text-white xl:mr-[100px] xl:pt-[20px]  '>
              PROJECTS
            </li>
            <li className='xl:text-[16px] xl:font-[700] xl:font-[Karla] xl:leading-[18.7px] xl:tracking-[0.015em] xl:text-white xl:mr-[100px] xl:pt-[20px]  '>
              COMPANY
            </li>
            <li className='xl:text-[16px] xl:font-[700] xl:font-[Karla] xl:leading-[18.7px] xl:tracking-[0.015em] xl:text-white xl:mr-[100px] xl:pt-[20px]  '>
              CONTACT US
            </li>
            {/* <li className='xl:text-[30px] xl:font-[700] xl:font-[Karla] xl:leading-[18.7px] xl:tracking-[0.015em] xl:text-[#105899] xl:mr-[100px] xl:pt-[16px] xl:bg-white'><FaEnvelope/> </li> */}
          </ul>
        </nav>
      </div>
      </div>
    </>
  )
}

export default Navbar
