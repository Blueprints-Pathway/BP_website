import React, { useState } from "react"
import logo from "../Images/logo.png"
import BG from "../Images/BG.png"
import Background from "../Images/Background.png"
import { Link } from "react-router-dom"

import { HiMenuAlt1 } from "react-icons/hi"
import { AiOutlineClose } from "react-icons/ai"
import { SidebarData } from "./SidebarData"

function Home() {
  const backgroundImageStyle = {
    backgroundImage: `url("${BG}")`,
    backgroundSize: "cover",
  }
  const [sidebar, setSidebar] = useState(false)
  const showSidebar = () => setSidebar(!sidebar)
  return (
    <>
      <div className='xl:hidden sm:block'>
        <div>
          <div className=''>
            <div className='sm:bg-[#105899] sm:flex sm:justify-between sm:items-center sm:max-h-10 sm:relative'>
              <div className='sm:ml-5'>
                <img src={logo} alt='' type='image/png' />
              </div>
              <div className='mr-5 text-white'>
                <Link to='#' className='menu-bars'>
                  <HiMenuAlt1 onClick={showSidebar} />
                </Link>
              </div>

              <div className={sidebar ? "nav-menu active" : "nav-menu"}>
                <div className='sm:z-10 sm:mt-[250px] sm:bg-[#03192CCF] sm:w-[160px] sm:h-[302px] sm:pt-[40.29px]  '>
                  <ul onClick={showSidebar}>
                    <li></li>
                    {SidebarData.map((item, index) => {
                      return (
                        <div className='pl-[40.25px]'>
                          <li key={index}>
                            <Link to={item.path}>
                              <h5 className='font-[Karla] sm:text-[11.36px] sm:font-[400] sm:leading-[32.65px] sm:text-white sm:pl-[13.25px]'>
                                {item.title}
                              </h5>
                            </Link>
                          </li>
                          <hr />
                        </div>
                      )
                    })}
                  </ul>

                  <div className='w-[39.75px] bg-[#105899] h-[552px] absolute top-0 pl-[19.19px] pt-[19.19px]'>
                    <Link to='#' className='menu-bars' onClick={showSidebar}>
                      <AiOutlineClose className='w-[8.28px] text-white  ' />
                    </Link>
                  </div>
                </div>

                <div className='mr-5 text-white'>
                  <Link to='#' className='menu-bars'>
                    <HiMenuAlt1 onClick={showSidebar} />
                  </Link>
                </div>
              </div>
            </div>
            <div className='' style={backgroundImageStyle}>
              <div className='sm:bg-gradient-to-r from-[rgba(0,0,0,0.5)] to-[rgba(0,0,0,0.5)] sm:pt-[58px] sm:pl-[27px] sm:pr-[31px] sm:pb-[61px] sm:bord'>
                <div className='sm:ml-[8.99px]'>
                  <h5 className='sm:font-[Karla] sm:text-[8.39px] sm:text-white sm:leading-[16.0px]'>
                    Welcome to the cave{" "}
                  </h5>
                  <h1 className='sm:font-[Montserrat] sm:text-[16.78px] sm:font-[800] sm:text-white sm:leading-[22px]'>
                    IN OUR SPACE WE
                    <br /> ALWAYS DELIVER <br />
                    MORE THAN EXPECTED
                  </h1>
                  <button>GET STARTED</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='xl:block sm:hidden lg:block'>
        <div className='grid grid-cols-[118px,1fr] '>
          <div>
            <div className='bg-[#105899] max-w-[118px] h-[100vh]'>
              <Link to='#' className='menu-bars'>
                <HiMenuAlt1
                  className='xl:text-white xl:text-[30px] xl:ml-[40px]  '
                  onClick={showSidebar}
                />
              </Link>
            </div>
          </div>
          <div className=''>
            <div className='relative bg-gradient-to-r from-[rgba(0,0,0,0.5)] to-[rgba(0,0,0,0.5)]   text-white'>
              <img
                className='absolute inset-0 w-full h-[100vh] object-cover object-center si'
                src={Background}
                alt=''
              />
              <div className=' borde relative pl-[110px] '>
                <h5 className='font-medium leading-[46px] text-[24px] pb-[19px] text-[Karla] pt-[160px]  '>
                  Welcome to the cave
                </h5>
                <h1 className='text-5xl font-extrabold leading-[58px] mb-[40px] tracking-[0.02em] font-[Montserrat]'>
                  IN OUR SPACE WE
                  <br /> ALWAYS DELIVER <br />
                  MORE THAN EXPECTED
                </h1>
                <button className='xl:text-[16px] xl:font-normal xl:leading-[46px] xl:w-[140px] xl:h-[46px] xl:rounded-[5px] xl:tracking-[0.02em] xl: xl:mt-[-50px]  '>
                  GET STARTED
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
