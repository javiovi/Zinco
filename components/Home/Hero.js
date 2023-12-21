import Image from 'next/image'
import React, { useEffect } from 'react'
import Arrow from '../Arrow'
import Link from 'next/link'
import AOS from 'aos';
import 'aos/dist/aos.css';


export default function Hero() {
    useEffect(() => {
        AOS.init();
    }, [])



    return (
        <div data-aos="fade-up" className='text-white px-[7.3vw] flex justify-between flex-col xl:flex-row mt-5 lg:mt-20 pb-16 '>

            <div className='flex-1 md:mt-10 relative z-10 overflow-x-visible'>
                <div className='h-[20vw] max-h-[80px] md:min-h-[120px] border-2 border-t-0 border-r-0 border-[#3e3391] sm:w-[120%] z-10 relative overflow-x-visible'></div>
                <div className='min-h-[100px] relative z-10 backdrop-blur border-2 border-[#3e3391] border-r-0 sm:border-r-2 border-t-0 py-6 pl-8 pr-1'>
                    <h1 className='text-[6vw] z-10 xl:text-[3.1vw] 2xl:text-[56px] leading-normal font-black font-archivo'>
                        INNOVACION <br /> ESTRUCTURAL <br /> EN <span className='bg-gradient-to-r from-[#1d1db8] to-[#906bc0] test px-2 py-1 text-[#1e1e1e]'>CADA DETALLE.</span></h1>
                </div>
                <div className='min-h-[120px] relative z-10 backdrop-blur  border-2 border-t-0 border-r-0 sm:border-r-2 border-b-0 border-[#3e3391] flex px-9 justify-between items-center gap-3 sm:gap-0'>
                    <h2 className='font-regular text-base sm:text-xl font-rubik tracking-wide'>ESTUDIO DE INGENIERÍA Y ARQUITECTURA</h2>
                    <Link href="/about">
                        <Arrow />
                    </Link>
                    {/* <div className='rounded-full grid place-content-center border border-white h-14 w-14'>
                        <Image className='' height={17} width={17} src='/Flecha.svg'></Image>
                    </div> */}
                    {/* rotate-[-135deg] */}
                </div>
                <div className="absolute bg-[center_top_-5rem] ping-slow duration-1000 md:bg-[left_top] inset-[20%] md:inset-[10%] blur-[40px] z-0 bg-elipse"></div>
            </div>

            <div className='flex-1 relative xl:pl-12 xl:pr-6 pt-10 md:mt-0 grid place-content-center'>
                {/*  */}
                <div
      className='w-[600px] h-[487.5px] mx-auto bg-trasnparent'
      // Puedes agregar aquí más estilos si es necesario
    >
      <Image className='w-full absolute inset-0 h-full object-cover'style={{ marginTop: '50px', marginLeft: '5px',}} alt='home1' src='/VIDA2.png' quality={100} width={500} height={450} />
     
    </div>
                {/*  */}

                <div className='hidden xl:inline-block absolute -right-9 top-2/4 space-y-3'>
                 
                    </div>
                  

                
            </div>
            {/* bg-indigo-600 */}
        </div>
    )
}





