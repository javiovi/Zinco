import React from 'react'

export default function Hero() {
    return (
        <div className='px-[7.3vw] mt-20 sm:mt-32 xl:mt-44 mb-16 xl:mb-32'>
            <h1 className='text-[9vw] leading-none sm:text-[5vw] z-10 xl:text-[4vw] 2xl:text-[55px] mb-5 font-archivo font-black'>
                <span className='relative'>
                    <span className='bg-gradient-to-r hidden sm:inline-block from-[#1d1db8] to-[#9C73C1] text-[#1e1e1e] px-2 absolute left-3 -right-3 top-4 md:top-6 -bottom-1 sm:bottom-0'>
                    </span>
                    <span className='relative z-10 sm:whitespace-nowrap'>
                        TENDENCIAS & BLOG
                    </span>
                </span>
            </h1>
        </div>
    )
}
