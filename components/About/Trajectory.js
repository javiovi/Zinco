import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Trajectory() {
    useEffect(() => {
        AOS.init();
    }, [])

    return (
        <div className='px-[5vw] sm:px-[7.3vw] '>
            <h2 data-aos="fade-up" className='mb-4 sm:mb-8 text-[5.8vw] md:text-[6vw] xl:text-[3.5vw] lg:leading-loose 2xl:text-6xl text-center font-black font-archivo'>NUESTRA <span className='relative'>
                <span className='bg-gradient-to-r from-[#1d1db8] lg:leading-loose to-[#9C73C1] text-[#1e1e1e] px-2 absolute left-3 -right-1 md:-right-3 top-3 md:top-7 -bottom-[2px] sm:-bottom-[4px]'>
                </span>
                <span className='relative z-10  lg:leading-loose'>
                    TRAYECTORIA
                </span>
            </span>
                {/* <br />
                PLASMADA EN ACERO */}
            </h2>
            {/*  a lot of repetition but should prioritize fixing it later */}
            <div className='mx-auto max-w-[1262px]'>
            <div data-aos="fade-up" className='flex border-b border-[#493BBB] gap-14 sm:gap-24 md:gap-48 pt-10 pb-6 items-start min-h-[130px] md:min-h-[167px]'>
                    <p className='font-black font-archivo text-lg sm:text-[22px]'>2024</p>
                    <p className='font-rubik font-normal text-sm sm:text-base md:text-xl'>Este año aspiramos a continuar nuestra evolución profesional, siempre enfocados en brindar el mejor servicio a nuestros clientes.</p>
                </div>
                <div data-aos="fade-up" className='flex border-b border-[#493BBB] gap-14 sm:gap-24 md:gap-48 pt-10 pb-6 items-start min-h-[130px] md:min-h-[167px]'>
                    <p className='font-black font-archivo text-lg sm:text-[22px]'>2023</p>
                    <p className='font-rubik font-normal text-sm sm:text-base md:text-xl'>El año 2023 marcó un período de significativo crecimiento, tanto a nivel profesional como personal.
                     Hemos llevado a cabo el desarrollo de ingenierías de detalles en mayores escalas, abordando proyectos de viviendas colectivas y comerciales de más de dos pisos, situados en diferentes localidades del país.
Además, seguimos apostando a la ejecución de obras residenciales, en asociación con arquitectos y arquitectas de la ciudad de Rosario y sus alrededores.</p>
                </div>
                <div data-aos="fade-up" className='flex border-b border-[#493BBB] gap-14 sm:gap-24  md:gap-48 pt-10 pb-6 items-start min-h-[130px] md:min-h-[167px]'>
                    <p className='font-black font-archivo text-lg sm:text-[22px]'>2022</p>
                    <p className='font-rubik font-normal text-sm sm:text-base md:text-xl'>Comenzamos a trabajar bajo en nombre de ZincO, desarrollando trabajos de ingeniería de detalles y también sumando ejecución de obras residenciales en Rosario.</p>
                </div>
                <div data-aos="fade-up" className='flex border-b border-[#493BBB] gap-6 sm:gap-[54px] md:gap-[154px] pt-10 pb-6 items-start min-h-[130px] md:min-h-[167px]'>
                    <p className='font-black font-archivo text-lg sm:text-[22px] whitespace-nowrap'>2020-21</p>
                    <p className='font-rubik font-normal text-sm sm:text-base md:text-xl'>Formamos parte de otra sociedad en la que realizábamos exclusivamente ingeniería de detalles de Steel framing para empresas constructoras de Argentina y Uruguay. También brindábamos asesoramiento a empresas proveedoras de productos inherentes al sistema.</p>
                </div>
                <div data-aos="fade-up" className='flex border-b border-[#493BBB] gap-14 sm:gap-24  md:gap-48 pt-10 pb-6 items-start min-h-[130px] md:min-h-[167px]'>
                    <p className='font-black font-archivo text-lg sm:text-[22px]'>2019</p>
                    <p className='font-rubik font-normal text-sm  sm:text-base md:text-xl'>Comenzamos a trabajar juntas en proyectos de Steel framing exclusivamente. Tamara venia de calcular estructuras metálicas de acero laminado y Florencia de hacer obras en otros sistemas constructivos.</p>
                </div>
            </div>
        </div>
    )
}
