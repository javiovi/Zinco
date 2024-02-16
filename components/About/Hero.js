import React, { useEffect } from 'react'
import Arrow from '../Arrow'
import Image from 'next/image'
import AOS from 'aos';
import 'aos/dist/aos.css';



export default function Hero() {
  useEffect(() => {
    AOS.init();
  }, [])


  return (
    <div className='px-[7.3vw] mb-48 '>
      <div data-aos="fade-up" className='mt-5 md:mt-20  relative'>
        <div className='border border-t-0 border-r-0 border-[#3e3391] w-full mr-20 pt-10 sm:pt-20 md:pt-28 flex justify-between items-end pl-[7vw] sm:pl-8 sm:pb-4 relative z-40'>
          <div className='font-black font-archivo'>
            <h1 className='text-[11vw] leading-none sm:text-[5vw] z-10 xl:text-[4vw] 2xl:text-[55px] mb-5'>
              <span className='relative'>
                <span className='bg-gradient-to-r hidden sm:inline-block from-[#1d1db8] to-[#9C73C1] text-[#1e1e1e] px-2 absolute left-3 -right-3 top-4 md:top-6 -bottom-1 sm:bottom-0'>
                </span>
                <span className='relative z-10 sm:whitespace-nowrap'>
                  SOBRE NOSOTRAS
                </span>
              </span>
            </h1>
            {/* <h2 className='text-[3vw] z-10 xl:text-[2.5vw] 2xl:text-[40px]'>HISTORIA, TRAYECTO & CERTIFICACIONES.</h2> */}
          </div>

          {/* <div className='rotate-[135deg] scale-75 md:scale-100'><Arrow /></div> */}

        </div>
        {/* purple blob */}
        <div className="absolute opacity-80 bg-[right_bottom_-3rem] md:bg-[left_center] smaller-ping-slow duration-1000 inset-0 -right-20 top-[20%] md:inset-[0%] h-4/5 2xl:w-1/2  md:-left-40 blur-[40px] z-0 bg-elipse"></div>

        <div className='h-24 sm:h-32 border border-[#3e3391] border-t-0 border-r-0 border-b-0'></div>

      </div>
      {/*  */}
      <div data-aos="fade-up" className='w-full flex flex-col xl:flex-row px-[7vw] md:px-[3vw] 2xl:px-[10vw] gap-14 relative z-40 -mt-14' >

        <div className='flex flex-col md:flex-row gap-14 md:gap-8 lg:gap-14'>
          <div className='flex-1 flex-shrink-0'>
            <div className='relative'>
              <Image priority className='w-full' alt='Tamara Foto' src='/tamara.png' quality={100} width={378} height={517} />
              <div className='absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[rgba(73,59,187,0.80)]'></div>

            </div>
            <div className='-mt-7 relative z-20'>
              <p className='font-black font-archivo text-[40px] sm:text-[44px] leading-none mb-3'>TAMARA<br />MARIN</p>
              <p className='font-rubik text-xl font-normal'>INGENIERA</p>
            </div>
          </div>

          <div className='flex-1 '>
            <div className='relative'>
              <Image priority className='w-full' alt='Florencia Foto' src='/florencia.png' quality={100} width={378} height={517} />
              <div className='absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[rgba(73,59,187,0.80)]'></div>
            </div>
            <div className='-mt-7 relative z-20'>
              <p className='font-black font-archivo text-[40px] sm:text-[44px] leading-none mb-3'>FLORENCIA <br />PASCOT</p>
              <p className='font-rubik text-xl font-normal'>ARQUITECTA</p>
            </div>
          </div>
        </div>

        <div className='md:max-w-xs font-rubik text-xl font-normal flex flex-col justify-center' >
          <p >En ZincO, somos un equipo comprometido con la especialización en la ingeniería y el diseño en Steel Framing.</p>
          <p className='my-6' style={{ maxWidth: '20rem' }}>Nuestra dedicación a lo largo del tiempo se refleja en:</p>
          <p className='font-black font-archivo text-[22px]' style={{ maxWidth: '20rem' }}>SOLUCIONES TÉCNICAS SÓLIDAS Y EFICIENTES.</p>
        </div>


      </div>
    </div>
  )
}
