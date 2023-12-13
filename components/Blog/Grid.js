import Image from 'next/image'
import React from 'react'
import Arrow from '../Arrow'
import Link from 'next/link'

export default function Grid() {

    const blogArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]


    return (
        <div className='px-[7.3vw] grid sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-x-5 gap-y-14 relative'>
            <div className="absolute bg-[left_top] duration-1000  bottom-[20%] inset-[0%] md:-left-[10%] md:right-[50%] lg:-top-[20%] blur-[40px] z-0 bg-elipse" ></div>

            {blogArray.map((item, i) =>
                <Link key={i} href={'/blog/' + item}>
                    <div className="flex-1 max-w-2xl mx-auto relative z-10 cursor-pointer">

                        <div className='h-[232.65px] w-full mb-4 relative overflow-hidden bg-indigo-600'>
                            {/* <Image src={'/steel.png'} className='absolute object-cover grayscale' alt='Steel2' quality={100} fill={true} /> */}
                        </div>

                        <p className='font-archivo font-black text-sm mb-5 text-[#493BBB]'>10/07/2023</p>
                        <div className='flex items-end'>
                            <div className='font-rubik font-bold text-base lg:text-xl '>¿PUEDO INSTALAR EL AIRE ACONDICIONADO EN UNA PARED DE STEEL FRAMING?</div>
                            <div>
                                <div className='rotate-45'>
                                    <Arrow extrasmall />
                                </div>
                            </div>
                        </div>
                        {/* <div onClick={() => setp1Large(!p1Large)} className='h-10 w-10 rounded-full cursor-pointer border border-white grid place-content-center '><p className='leading-none text-4xl relative -top-1'>{p1Large ? '-' : '+'}</p></div> */}

                    </div>
                </Link>
            )}




        </div>
    )
}
