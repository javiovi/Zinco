import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Hero() {
  useEffect(() => {
    AOS.init();
}, [])

  
  return (
    <div data-aos="fade-up" className='px-[7.3vw] '>
      <div className='mt-5 md:mt-20  relative'>
        <div className='border border-t-0 border-r-0 border-[#3e3391] w-full mr-20 pt-20 md:pt-28 flex justify-between items-end pl-8 pb-4 relative z-40'>
          <div className='font-black font-archivo'>
            <h1 className='text-[6vw] z-10 xl:text-[3.1vw] 2xl:text-[55px] mb-4 md:mb-0'>
              <span className='relative'>
                <span className='bg-gradient-to-r from-[#1d1db8] to-[#9C73C1] text-[#1e1e1e] px-2 absolute left-0 sm:left-3 -right-3 top-4 md:top-6 -bottom-1 sm:bottom-0'>
                </span>
                <span className='relative z-10 whitespace-nowrap'>
                  NUESTROS SERVICIOS
                </span>
              </span>
            </h1>
            <h2 className='text-[4.5vw] z-10 xl:text-[3.1vw] 2xl:text-[55px]'>TE CONTAMOS NUESTRAS ESPECIALIZACIONES</h2>
          </div>
          <div className='rotate-[135deg] scale-75 md:scale-100'></div>
        </div>
        {/* purple blob */}
        <div className="absolute opacity-80 bg-[right_bottom_-3rem] md:bg-[left_center] ping-slow duration-1000 inset-0 -right-20 top-[20%] md:inset-[0%] h-4/5 2xl:w-1/2  md:-left-40 blur-[40px] z-0 bg-elipse"></div>

        <div className='h-36 border border-[#3e3391] border-t-0 border-r-0 border-b-0 flex items-center relative z-40'>
          <p className='pl-8 max-w-4xl font-rubik font-normal text-sm sm:text-base md:text-xl'>En ZincO, nos enorgullece ofrecer servicios técnicos y especializados que abarcan desde la planificación hasta la ejecución, guiados por la eficiencia, la calidad y la formación constante.</p>
        </div>

      </div>
      {/*  */}

    </div>
  )
}
