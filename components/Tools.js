import Image from 'next/image'
import React from 'react'
import DragScroll from './Helpers/DragScroll'

export default function Tools() {
    DragScroll('.carousel')

    return (
        <>
            <div className='px-[7.3vw] mt-32s  md:mt-80'>

                <div className='flex justify-center items-center gap-5'>
                    <div className='hidden lg:inline-block h-[2px] w-full bg-[#3e3391]'></div>

                    <h2 className='md:whitespace-nowrap text-[7vw] sm:text-[3.5vw]  2xl:text-[56px] leading-[1.16] font-black font-archivo'>
                        <span className='relative'>
                            <span className='hidden md:inline-block bg-gradient-to-r from-[#1d1db8] to-[#9C73C1] text-[#1e1e1e] px-2 absolute left-3 -right-2 sm:right-0 xl:-right-2 top-2 sm:top-4 xl:top-7 -bottom-1 sm:-bottom-[6px]'></span>
                            <span className='relative z-10 md:whitespace-nowrap'>NUESTRAS HERRAMIENTAS</span>
                        </span>
                        <span> DEL DÍA A DÍA</span>
                    </h2>
                </div>
            </div>
            
            {/* carousel */}
            <div className='mt-10 md:mt-20 pl-[7.3vw] md:px-[7.3vw]'>
                <div className='overflow-hidden relative'>
                    <div className='carousel flex justify-start items-center gap-5 md:gap-10 overflow-x-scroll scrollbar-hide max-h-[150px] md:max-h-screen cursor-grab pr-10'>
                        <Image draggable='false' className='' alt='autocad tool' src='/Tools/vertex.png' width={222.5} height={130.5} />
                        <Image draggable='false' className='' alt='autocad tool' src='/Tools/cyp.png' width={222.5} height={130.5} />
                        <Image draggable='false' className='' alt='autocad tool' src='/Tools/sap.png' width={222.5} height={130.5} />
                        <Image draggable='false' className='' alt='autocad tool' src='/Tools/autocad.png' width={222.5} height={130.5} />
                        <Image draggable='false' className='' alt='autocad tool' src='/Tools/asana.png' width={222.5} height={130.5} />
                        <Image draggable='false' className='' alt='autocad tool' src='/Tools/scrum.png' width={222.5} height={130.5} />
                        <Image draggable='false' className='' alt='autocad tool' src='/Tools/vertex.png' width={222.5} height={130.5} />
                        <Image draggable='false' className='' alt='autocad tool' src='/Tools/cyp.png' width={222.5} height={130.5} />
                        <Image draggable='false' className='' alt='autocad tool' src='/Tools/sap.png' width={222.5} height={130.5} />
                        <Image draggable='false' className='' alt='autocad tool' src='/Tools/autocad.png' width={222.5} height={130.5} />
                        <Image draggable='false' className='' alt='autocad tool' src='/Tools/asana.png' width={222.5} height={130.5} />
                        <Image draggable='false' className='' alt='autocad tool' src='/Tools/scrum.png' width={222.5} height={130.5} />

                        <div className='absolute top-0 bottom-0 right-0 w-10 backdrop-blur-[1px] bg-gradient-to-r  from-transparent to-[#1e1e1e] opacity-70 '></div>
                    </div>
                </div>
            </div>
        </>
    )
}
