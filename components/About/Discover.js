import Image from 'next/image'
import React, { useEffect } from 'react'
import Arrow from '../Arrow'
import AOS from 'aos';
import 'aos/dist/aos.css';


export default function Discover() {
    useEffect(() => {
        AOS.init();
      }, [])

    return (
        <div className='mb-20 sm:mb-32 md:mb-48 flex flex-col xl:flex-row justify-between pl-[7.3vw] xl:border-b border-[#493BBB]'>
            <div data-aos="fade-up" className='flex-1 border-[#493BBB] xl:border-r pb-10 pr-[7.3vw] xl:pr-10 flex items-center'>
                <Image className='w-full' alt='Tamara Foto' src='/nosotros.png' quality={100} width={779} height={746} />
            </div>
            <div data-aos="fade-up" className='flex-1 flex flex-col'>
                <div className='font-rubik font-normal text-justify sm:text-left text-lg md:text-xl pb-10 xl:pl-10 space-y-8 [&>*]:max-w-[670px] pr-[7.3vw]'>
                    <p>Desde nuestros inicios, hemos evolucionado abordando proyectos desafiantes que nos aportaron experiencia en estructuración y visión constructiva, contribuyendo al desarrollo del sistema.</p>
                    <p>Nuestro enfoque en la optimización de consumos de acero y tiempos de obra denota nuestro compromiso con la eficiencia y la calidad.</p>
                    <p>En ZincO, aplicamos tecnologías avanzadas, utilizando software especializados generamos gemelos digitales asegurando resultados notables.</p></div>
                <div className='border-[#493BBB] border-t flex-1 pt-10 md:pt-[5.8vw] xl:pl-10 pb-10 space-y-10 md:space-y-[2.5vw] font-archivo font-black pr-[7.3vw]'>
                    <div className='flex text-base gap-5 items-center'><p>DESCUBRÍ TODOS LOS SERVICIOS</p><div><Arrow small /></div></div>
                    <p className='text-base sm:text-lg xl:text-[22px] leading-[1.75] sm:leading-[1.75] max-w-[670px]'>&quot;CON PROFESIONALISMO BUSCAMOS SEGUIR CONSTRIBUYENDO A UN FUTURO SÓLIDO Y SOSTENIBLE EN EL MUNDO DEL STEEL FRAMING&quot;</p>
                </div>
            </div>
        </div>
    )
}
