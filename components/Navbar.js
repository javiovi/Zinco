import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Navbar({ setOpen, header }) {

    return (
        <div className='w-full flex justify-between items-center h-[143px] text-white px-[7.3vw]'>
            <Link href="/">
                <Image className='max-w-[25vw]' alt='Zinco Steel Framing logo' src='/logoNavbar.svg' quality={100} width={157.2} height={61.2} />
            </Link>
            {header && <p className='hidden lg:inline-block font-unbounded font-normal text-lg'>ESTUDIO DE INGENIERÍA & ARQUITECTURA</p>}

            <div onClick={() => setOpen(prev => !prev)} className='h-14 w-14 cursor-pointer rounded-full bg-[#292929] flex flex-col justify-center duration-300 ease-in-out  items-center space-y-[5px] hover:bg-white group'>
                <div className='bg-[#ffffff] w-2/5 h-[2px] relative -left-[2px] duration-300 ease-in-out group-hover:bg-[#292929] group-hover:left-[2px]'></div>
                <div className='bg-[#ffffff] w-2/5 h-[2px] relative left-[2px] duration-300 ease-in-out group-hover:bg-[#292929] group-hover:-left-[2px]'></div>
                <div className='bg-[#ffffff] w-2/5 h-[2px] relative -left-[2px] duration-300 ease-in-out group-hover:bg-[#292929] group-hover:left-[2px]'></div>
            </div>
        </div>
    )
}
