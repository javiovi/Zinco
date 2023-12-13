import React from 'react'
import ContactForm from './Helpers/ContactForm'

export default function ContactSection({smallTitle}) {

    return (
        <div id='contact-Section' className='mt-32 xl:mt-64 px-[7.3vw] flex flex-col xl:flex-row gap-y-20 text-white'>
            <div className="flex-1 z-10">
                <h3 className={`xl:w-[170%] mb-14 text-[7vw] md:text-[6vw] xl:text-[3.5vw] ${smallTitle ?'2xl:text-[40px]': '2xl:text-[56px]'} leading-[1.10] font-black font-archivo`}>SI NECESITAS <br /> ASESORAMIENTO, <br /><span className='relative'>
                    <span className='bg-gradient-to-r from-[#1d1db8] to-[#9C73C1] text-[#1e1e1e] px-2 absolute left-1 -right-2 top-4 md:top-7 -bottom-1 sm:-bottom-[6px]'>
                    </span>
                    <span className='relative z-10 '>
                        CONTACTANOS.
                    </span>
                </span>
                </h3>
                <ContactForm />
            </div>
            <div className="flex-1 hidden md:grid place-content-center">
            <video
                    // ref={videoRef}
                    className='w-full h-auto '
                    autoPlay
                    loop
                    muted
                    src="/videos/video02.mp4"
                ></video>
            </div>
        </div>
    )
}
