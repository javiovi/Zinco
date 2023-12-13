import Image from 'next/image'
import React from 'react'
import Arrow from './Arrow'
import Link from 'next/link'

export default function Footer() {
    return (
        <div className='mt-32 sm:mt-40 w-full bg-[#f5f5f5] min-h-[300px] px-[7.3vw] text-[#414141] pt-[69px] pb-8 '>
            <div className='flex flex-col-reverse xl:flex-row items-end mb-[42px] gap-y-10'>
                <div className='flex flex-1 flex-col w-full xl:w-auto justify-between mb'>
                    <div className='flex gap-3 mb-[34px]'>
                        <div className='h-9 w-9 rounded-full border border-[#989898] grid place-content-center cursor-pointer'>
                            <Image className='' alt='Instagram Logo' src='/Instagram.svg' width={24} height={24} />
                        </div>
                        <div className='h-9 w-9 rounded-full border border-[#989898] grid place-content-center cursor-pointer'>
                            <Image className='' alt='Whatsapp Logo' src='/Whatsapp.svg' width={24} height={24} />
                        </div>
                        <div className='h-9 w-9 rounded-full border border-[#989898] grid place-content-center cursor-pointer'>
                            <Image className='' alt='Linkedin Logo' src='/Linkedin.svg' width={24} height={24} />
                        </div>
                    </div>
                    <div className='flex flex-col md:flex-row text-[15px] gap-5'>
                        <div className='flex flex-col xl:flex-row gap-5'>
                            <Link href='/services' className='flex gap-2 items-center cursor-pointer'>
                                <Arrow extrasmall purple />
                                <p className='font-unbounded font-light'>NUESTROS SERVICIOS</p>
                            </Link>
                            <Link href='/about' className='flex gap-2 items-center cursor-pointer'>
                                <Arrow extrasmall purple />
                                <p className='font-unbounded font-light'>HISTORIA & TRAYECTORIA</p>
                            </Link>
                        </div>
                        <div className='flex flex-col xl:flex-row gap-5'>
                            <Link href={'/about/#certifications'}  className='flex gap-2 items-center cursor-pointer'>
                                <Arrow extrasmall purple />
                                <p className='font-unbounded font-light'>CERTIFICACIONES</p>
                            </Link>
                            <Link href='/contact' className='flex gap-2 items-center cursor-pointer'>
                                <Arrow extrasmall purple />
                                <p className='font-unbounded font-light'>CONTACTO DIRECTO</p>
                            </Link>
                        </div>
                    </div>
                </div>
                <Link href='/' className='w-full xl:w-auto'>
                    <Image className=' xl:ml-auto' alt='Zinco Logo' src='/FooterLogo.png' width={186} height={72.5} />
                </Link>
            </div>
            <div className='h-[2px] w-full bg-[#493BBB] mb-[22px]'></div>
            <div className='flex flex-col md:flex-row justify-between font-unbounded font-bold text-xs gap-y-5'>
                <p className='text-[#493BBB]'>COPYRIGHT 2023 - ZINCO STEEL FRAMING</p>
                <p>DESARROLLO & DISEÑO BY <span className='text-[#493BBB]'>AXYOMAGLOBAL</span></p>
            </div>
        </div>
    )
}
