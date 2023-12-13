import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import Arrow from '../Arrow'
import Link from 'next/link'
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function AccordionsDiv() {

    const [open, setOpen] = useState(1)

    function Changer(number) {
        console.log(number)
        if (number !== open) {
            console.log('a')
            setOpen(number)
        } else {
            console.log('b')
            setOpen(null)
        }
    }

    const handleChildElementClick = (e) => {
        e.stopPropagation()
        // Do other stuff here
     }

     useEffect(() => {
        AOS.init();
    }, [])


    return (
        <div data-aos="fade-up" className='flex mb-24  md:mb-48 gap-5 flex-col xl:flex-row px-[7.3vw] xl:px-0'>
            <div className='flex-1 mx-auto'>
                <Image className='z-10 grayscale' alt='Steel1' src='/servicios.png' quality={100} width={835} height={635} />
            </div>
            <div className='flex-1 pt-10 xl:pr-[3vw] 2xl:pr-[7.2vw] space-y-10 max-w-[835px] xl:max-w-none mx-auto'>

                <div onClick={() => Changer(1)} className={`${open == 1 && 'pb-8'} border-b border-[#3e3391] cursor-pointer`}>
                    <div className='flex gap-5 justify-between items-center font-archivo font-black text-lg md:text-[22px] uppercase mb-7'>
                        <p>INGENIERÍA EN DETALLES</p>
                        <div className={`${open == 1 ? '-rotate-[45deg]' : 'rotate-[135deg]'} duration-300`}><Arrow small /></div>
                    </div>
                    <div className={`font-rubik overflow-y-hidden font-normal text-base md:text-xl space-y-8 px-4 md:px-8 ${open == 1 ? '' : 'h-0'}`}>
                        <p>Nuestro servicio de Ingeniería de Detalles en Steel Framing abarca una profunda y minuciosa planificación de cada proyecto. Desde el análisis inicial hasta la emisión de la documentación para la ejecución, trabajamos en estrecha colaboración con nuestros clientes para asegurar que cada detalle esté cuidadosamente considerado.</p>
                        <p>Nuestro enfoque técnico y especializado garantiza soluciones estructurales eficientes y optimizadas, maximizando la calidad del diseño y la funcionalidad.</p>
                    </div>
                    <Link href={'/services#process'}>
                    <div  onClick={(e) => handleChildElementClick(e)}  className={`${open == 1 ? '' : 'hidden'} font-archivo mx-9 font-black uppercase bg-[#332cba] px-6 py-3 grid place-content-center mt-5 w-fit rounded-lg`}>El Proceso</div>
                    </Link>
                </div>
                {/*  */}
                <div onClick={() => Changer(2)} className={`${open == 2 && 'pb-8'} border-b border-[#3e3391] cursor-pointer`}>
                    <div className='flex gap-5 justify-between items-center font-archivo font-black text-lg md:text-[22px] uppercase mb-7'>
                        <p>EJECUCIÓN DE OBRA: OBRA GRIS Y PROYECTO COMPLETO</p>
                        <div className={`${open == 2 ? '-rotate-[45deg]' : 'rotate-[135deg]'} duration-300`}><Arrow small /></div>
                    </div>
                    <div className={`font-rubik overflow-y-hidden font-normal text-base md:text-xl space-y-8 px-4 md:px-8 ${open == 2 ? '' : 'h-0'}`}>
                        <p>Nuestro servicio de Ingeniería de Detalles en Steel Framing abarca una profunda y minuciosa planificación de cada proyecto. Desde el análisis inicial hasta la emisión de la documentación para la ejecución, trabajamos en estrecha colaboración con nuestros clientes para asegurar que cada detalle esté cuidadosamente considerado.</p>
                        <p>Nuestro enfoque técnico y especializado garantiza soluciones estructurales eficientes y optimizadas, maximizando la calidad del diseño y la funcionalidad.</p>
                    </div>
                </div>
                {/*  */}
                <div onClick={() => Changer(3)} className={`${open == 3 && 'pb-8'} border-b border-[#3e3391] cursor-pointer`}>
                    <div className='flex gap-5 justify-between items-center font-archivo font-black text-lg md:text-[22px] uppercase mb-7'>
                        <p>CAPACITACIONES EN STEEL FRAMING Y USO DE SOFTWARE</p>
                        <div className={`${open == 3 ? '-rotate-[45deg]' : 'rotate-[135deg]'} duration-300`}><Arrow small /></div>
                    </div>
                    <div className={`font-rubik overflow-y-hidden font-normal text-base md:text-xl space-y-8 px-4 md:px-8 ${open == 3 ? '' : 'h-0'}`}>
                        <p>Nuestro servicio de Ingeniería de Detalles en Steel Framing abarca una profunda y minuciosa planificación de cada proyecto. Desde el análisis inicial hasta la emisión de la documentación para la ejecución, trabajamos en estrecha colaboración con nuestros clientes para asegurar que cada detalle esté cuidadosamente considerado.</p>
                        <p>Nuestro enfoque técnico y especializado garantiza soluciones estructurales eficientes y optimizadas, maximizando la calidad del diseño y la funcionalidad.</p>
                    </div>
                </div>



            </div>



        </div>
    )
}
