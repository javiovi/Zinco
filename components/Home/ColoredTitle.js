import React, { useEffect, useState } from 'react'
import Arrow from '../Arrow'
import Link from 'next/link'
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function ColoredTitle() {

    const [degs, setDegs] = useState(125)

    function bgRotator() {
        setTimeout(() => {
            setDegs(prev => prev + 1)
            bgRotator()
        }, 1000);
        // console.log('ad')
    }
    useEffect(() => {
        bgRotator()
        AOS.init();
    }, [])



    return (
        <div className='px-[7.3vw] mt-16 sm:mt-32 md:mt-40 flex flex-col xl:flex-row gap-y-10'>
            <div data-aos="fade-up" className='flex-1 w-full  '>
                <video
                    // ref={videoRef}
                    className='w-[600px] h-[487.5] mx-auto'
                    autoPlay
                    loop
                    muted
                    src="/videos/video2.mp4"
                ></video>
            </div>



            <div data-aos="fade-up" className='flex-1 w-full flex justify-center sm:pt-14'>
                <div className='w-full'>

                    <div className='flex xl:justify-center'>
                        <h1 className="uppercase font-archivo font-black  leading-[1.10] text-[8.5vw] z-10  xl:text-[4vw] 2xl:text-[3.8vw]  animated-gradient relative" style={{
                            backgroundImage: `linear-gradient(${degs}deg, #4837cf, #c72ee1, #c72ee1, #1ea5e1, #ccdaff, #ccdaff)`,
                            /* Other CSS properties for your element */
                        }}>
                            <span className='whitespace-nowrap'> Innovación &</span> <br />
                            <span className='whitespace-nowrap'> Ingeniería en</span> <br />
                            <span className='whitespace-nowrap'> Steel Frame</span>
                        </h1>

                    </div>

                    {/* LINKS TO ANCHORS DONT WORK WHEN SMOOTH SCROLL KEEPS MOVING */}
                    {/* #contact-Section' */}
                    <Link href={'/services#projects'}>
                        <div className='mt-6 sm:mt-12 flex items-center gap-5'>
                            <div className='hidden md:inline-block h-[2px] w-full bg-[#3e3391]'></div>
                            <div className='text-lg md:text-[22px] justify-between md:justify-start w-full md:w-auto md:whitespace-nowrap font-archivo font-black flex items-center gap-5'>PROYECTOS <Arrow small /> </div>
                        </div>
                    </Link>

                </div>
            </div>
        </div>
    )
}
