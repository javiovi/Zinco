import React, { useState } from 'react'
import Arrow from './Arrow'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

export default function Menu({ open, setOpen }) {

    const pathname = usePathname()
    // console.log(pathname)

    const handleChildElementClick = (e) => {
        e.stopPropagation()
        // Do other stuff here
     }

    return (
        <div onClick={() => setOpen(!open)} className={`${!open && 'hidden'} z-50 fixed md:backdrop-blur-sm inset-0`}>
            <div onClick={(e) => handleChildElementClick(e)} className='fixed w-full md:w-[655px] inset-0 left-auto bg-white pt-20 px-6 sm:px-[43px]'>
                <div className='flex flex-col justify-between h-full gap-y-5'>
                    <div>
                        <div className='flex justify-between mb-5'>
                            <div >
                                <div className='-rotate-90' onClick={() => setOpen(!open)}>
                                    <Arrow purple small />
                                </div>
                            </div>
                            <h2 className='font-archivo font-black text-[#493BBB] text-xl md:text-3xl text-right'>ESTUDIO DE INGENIERIA & ARQUITECTURA</h2>
                        </div>
                        <div className='h-[2px] w-full bg-[#493BBB]'></div>

                        <div className='mt-[3.5vh] pl-6 md:pl-0 sm:mt-16 font-black font-archivo text-[22px] sm:text-[26px] space-y-[3vh]  sm:space-y-8'>
                            <Link href='/' onClick={() => setOpen(!open)} className={`flex ${pathname=='/'?'text-[#414141]':'text-[#8D8D8D]'}  gap-8 cursor-pointer`}>
                                <p>01</p>
                                <p>INICIO</p>
                            </Link>
                            <Link href='/about' onClick={() => setOpen(!open)} className={`flex ${pathname=='/about'?'text-[#414141]':'text-[#8D8D8D]'}  gap-8 cursor-pointer`}>
                                <p>02</p>
                                <p>EMPRESA</p>
                            </Link>
                            <Link href='/services' onClick={() => setOpen(!open)} className={`flex ${pathname=='/services'?'text-[#414141]':'text-[#8D8D8D]'}  gap-8 cursor-pointer`}>
                                <p>03</p>
                                <p>SERVICIOS</p>
                            </Link>
                            <Link href='/services#projects' onClick={() => setOpen(!open)} className={`flex ${pathname=='/services#projects'?'text-[#414141]':'text-[#8D8D8D]'}  gap-8 cursor-pointer`}>
                                <p>04</p>
                                <p>PROYECTOS</p>
                            </Link>
                            <Link href='/contact' onClick={() => setOpen(!open)} className={`flex ${pathname=='/contact'?'text-[#414141]':'text-[#8D8D8D]'}  gap-8 cursor-pointer`}>
                                <p>05</p>
                                <p>CONTACTO</p>
                            </Link>
                        </div>
                    </div>
                    <div className='pb-12'>
                        <div className='flex justify-between mb-5 items-end'>
                            <div className='flex gap-3 '>
                               
                                <div className='h-9 w-9 rounded-full border border-[#989898] grid place-content-center cursor-pointer'>
                                <a href='https://www.instagram.com/zinco.steelframing/' target='_blank' rel='noopener noreferrer' className='h-9 w-9 rounded-full border border-[#989898] grid place-content-center cursor-pointer'>
                                    <Image className='' alt='Instagram Logo' src='/Instagram-grey.svg' width={24} height={24} />
                               </a>
                                </div>
                                <div className='h-9 w-9 rounded-full border border-[#989898] grid place-content-center cursor-pointer'>
                                <a href='https://wa.me/+5493415962367' target='_blank' rel='noopener noreferrer' className='h-9 w-9 rounded-full border border-[#989898] grid place-content-center cursor-pointer'>
                                    <Image className='' alt='Whatsapp Logo' src='/Whatsapp-grey.svg' width={24} height={24} />
                                    </a>
                                </div>
                                <div className='h-9 w-9 rounded-full border border-[#989898] grid place-content-center cursor-pointer'>
                                <a href='https://www.linkedin.com/company/zinco-steelframing/' target='_blank' rel='noopener noreferrer' className='h-9 w-9 rounded-full border border-[#989898] grid place-content-center cursor-pointer'>
                                    <Image className='' alt='Linkedin Logo' src='/Linkedin-grey.svg' width={24} height={24} />
                               </a>
                                </div>
                            </div>
                            <Image className='max-w-[30vw]' alt='Zinco Logo' src='/FooterLogo.png' width={158} height={61.586} />

                        </div>
                        <div className=' h-[2px] w-full bg-[#493BBB]'> </div>
                    </div>
                </div>
            </div>



        </div>
    )
}
