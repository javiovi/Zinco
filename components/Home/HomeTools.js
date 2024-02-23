import Image from 'next/image'
import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function HomeTools() {
    useEffect(() => {
        AOS.init();
    }, [])

    return (
        <>
            <div data-aos="fade-up" className='px-[7.3vw] mt-16 md:mt-8 2xl:mt-20 '>

                <div className='flex justify-center items-center gap-5'>
                    <div className='hidden sm:inline-block h-[2px] w-full bg-[#3e3391]'></div>

                    <h2 className='md:whitespace-nowrap text-[7vw] sm:text-[3.5vw]  2xl:text-[56px] leading-[1.16] font-black font-archivo'>
                        <span className='relative'>
                            <span className='hidden md:inline-block bg-gradient-to-r from-[#1d1db8] to-[#9C73C1] text-[#1e1e1e] px-2 absolute left-3 -right-2 sm:right-0 xl:-right-2 top-2 sm:top-4 xl:top-7 -bottom-1 sm:-bottom-[6px]'></span>
                            <span className='relative z-10 sm:whitespace-nowrap'>NUESTRAS HERRAMIENTAS</span>
                        </span>
                        {/* <span> DEL DÍA A DÍA</span> */}
                    </h2>
                </div>
            </div>
            
            {/* carousel */}
            <div data-aos="fade-up" className='mt-10 md:mt-20 px-[7.3vw]'>
                <div className='relative'>
                    <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 justify-items-center gap-5 '>
                        <Image alt='autocad tool' src='/Tools/vertex.png' width={222.5} height={130.5} />
                        <Image alt='autocad tool' src='/Tools/cyp.png' width={222.5} height={130.5} />
                        <Image alt='autocad tool' src='/Tools/sap.png' width={222.5} height={130.5} />
                        <Image alt='autocad tool' src='/Tools/autocad.png' width={222.5} height={130.5} />
                        <Image alt='autocad tool' src='/Tools/asana.png' width={222.5} height={130.5} />
                        <Image alt='autocad tool' src='/Tools/scrum.png' width={222.5} height={130.5} />
                    </div>
                </div>
            </div>
        </>
    )
}
