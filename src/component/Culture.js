import React, { useState, useRef, useEffect } from "react"
import { SliderData } from "./SliderData"

function Culture({ slides }) {
  const [current, setCurrent] = useState(0)
  const length = slides.length
  const timeout = useRef(null)
  useEffect(() => {
    const nextSlide = () => {
      setCurrent((current) => (current === length - 1 ? 0 : current + 1))
    }
    timeout.current = setTimeout(nextSlide, 3000)
    return function () {
      if (timeout.current) {
        clearTimeout(timeout.current)
      }
    }
  }, [current, length])
  if (!Array.isArray(slides) || slides.length <= 0) {
    return null
  }
  return (
    <>
      <div className="xl:grid xl:grid-cols-[218px,1fr]">
        <div className="xl:block sm:hidden">
          <div className='bg-[#105899] w-[218px] h-[1024px] relative '>
            <h4 className='sidec'>THE CAVE CULTURE</h4>
            <h5 className='sideec'>THE CAVE CULTURE</h5>
          </div>
        </div>
        <div>
          <div className='text-[16.32px] text-[#666666] font-[700] mb-[5px] leading-[19px] font-[Karla] mt-[42px] ml-[25px] uppercase pb-[4px]  title xl:font-bold xl:ml-[51px] xl:text-[39.52px] xl:leading-[46.2px] xl:pt-[-148px] xl:pb-[5px] xl:mb-[116px] titleb'>
            THE CAVE CULTURE
          </div>
          <div className='xl:max-w-[1212px] xl:h-[600px]'>
            <div className='relative flex justify-center items-center xl:relative'>
              {SliderData.map((slide, index) => {
                return (
                  <div
                    className={index === current ? "slide active" : "slide"}
                    key={index}
                  >
                    {index === current && (
                      <img className='w-[360px] xl:absolute xl:inset-0 xl:w-full xl:h-[100vh] xl:mt-[-40px] object-cover object-center' src={slide.image} alt='' />
                    )}
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Culture

