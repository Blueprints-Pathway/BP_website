import React from "react"
import logo from "../Images/logo.png"
import BG from "../Images/BG.png"

import { HiMenuAlt1 } from "react-icons/hi"

function Home() {
  const backgroundImageStyle = {
    backgroundImage: `url("${BG}")`,
    backgroundSize: "cover",
  }
  return (
    <>
      <div className='grid'>
        <div className='bg-[#105899] flex justify-between items-center max-h-10'>
          <div className='ml-5'>
            <img src={logo} alt='' type='image/png' />
          </div>
          <div>
            <div className='mr-5 text-white'>
              <HiMenuAlt1 />
            </div>
          </div>
        </div>
        <div className='' style={backgroundImageStyle}>
          <div className='bg-gradient-to-r from-[rgba(0,0,0,0.5)] to-[rgba(0,0,0,0.5)] pt-[58px] pl-[27px] pr-[31px] pb-[61px] bord'>
            <div className="ml-[8.99px]">
            <h5 className='font-[Karla] text-[8.39px] text-white leading-[16.0px]'>
              Welcome to the cave{" "}
            </h5>
            <h1 className='font-[Montserrat] text-[16.78px] font-[800] text-white leading-[22px]'>
              IN OUR SPACE WE
              <br /> ALWAYS DELIVER <br />
              MORE THAN EXPECTED
            </h1>
            <button>GET STARTED</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
