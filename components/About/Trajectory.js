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
                    <p className='font-rubik font-normal text-sm sm:text-base md:text-xl'>Durante este año, abordamos nuevos desafíos significativos en nuestro recorrido profesional.<br></br>
Iniciamos el 2024 con la ejecución de un proyecto de vivienda familiar en el country Vida Campo.<br></br> En paralelo estamos llevando a cabo la ingeniería de detalles un edificio de viviendas de 3 pisos sismorresistente completamente ejecutado en Steel Framing y ubicado en la ciudad de Añelo.
</p>
                </div>
                <div data-aos="fade-up" className='flex border-b border-[#493BBB] gap-14 sm:gap-24 md:gap-48 pt-10 pb-6 items-start min-h-[130px] md:min-h-[167px]'>
                    <p className='font-black font-archivo text-lg sm:text-[22px]'>2023</p>
                    <p className='font-rubik font-normal text-sm sm:text-base md:text-xl'>Este año estuvo marcado por un significativo crecimiento, tanto a nivel profesional como personal.<br></br> Hemos desarrollado ingenierías de detalles en mayores escalas, abordando proyectos de viviendas colectivas y comerciales de mas de dos pisos, situados en diferentes localidades del país.<br></br> Además, seguimos fortaleciendo nuestra dedicación a la ejecución de obras residenciales, en asociación con arquitectos y arquitectas de la ciudad de Rosario y sus alrededores.</p>
                </div>
                <div data-aos="fade-up" className='flex border-b border-[#493BBB] gap-14 sm:gap-24  md:gap-48 pt-10 pb-6 items-start min-h-[130px] md:min-h-[167px]'>
                    <p className='font-black font-archivo text-lg sm:text-[22px]'>2022</p>
                    <p className='font-rubik font-normal text-sm sm:text-base md:text-xl'>Comenzamos a trabajar bajo el nombre de ZincO, enfocándonos en el desarrollo de trabajos de ingeniería de detalles y ampliando nuestro alcance a la ejecución de obras residenciales en Rosario. </p>
                </div>
                <div data-aos="fade-up" className='flex border-b border-[#493BBB] gap-6 sm:gap-[54px] md:gap-[154px] pt-10 pb-6 items-start min-h-[130px] md:min-h-[167px]'>
                    <p className='font-black font-archivo text-lg sm:text-[22px] whitespace-nowrap'>2020-21</p>
                    <p className='font-rubik font-normal text-sm sm:text-base md:text-xl'>Formamos parte de otra sociedad en la que realizábamos exclusivamente ingeniería de detalles de Steel Framing para empresas constructoras de Argentina y Uruguay. También brindamos asesoramiento a empresas proveedoras de productos y materiales inherentes al sistema constructivo.</p>
                </div>
                <div data-aos="fade-up" className='flex border-b border-[#493BBB] gap-14 sm:gap-24  md:gap-48 pt-10 pb-6 items-start min-h-[130px] md:min-h-[167px]'>
                    <p className='font-black font-archivo text-lg sm:text-[22px]'>2019</p>
                    <p className='font-rubik font-normal text-sm  sm:text-base md:text-xl'>Fue el año en que comenzamos a trabajar juntas en proyectos de Steel Framing.<br></br> Tamara venía de calcular estructuras metálicas de acero laminado de gran escala y Florencia de proyectar y ejecutar obras en otros sistemas constructivos.</p>
                </div>
            </div>
        </div>
    )
}
