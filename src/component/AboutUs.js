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
            Sed ut perspiciatis unde omnis voluptate mccusantium doloremq
            uelaudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
            veritatis et quasi architecto beatae vitae dicta sunt explicabo. . .
            Read more
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
        At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium 
        voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati
         cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est
          laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero 
          tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat 
          facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam
           et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint
            et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis 
        voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."
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
