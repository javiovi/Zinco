import Image from 'next/image'
import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';


export default function Process() {
    useEffect(() => {
        AOS.init();
    }, [])

    return (
        <div id='process' className='px-[7.3vw] md:px-[3vw] mb-32 sm:mb-64'>
            <h2 data-aos="fade-up" className=' mb-16 sm:mb-32 text-[8vw] sm:text-[5vw] xl:text-[4vw] 2xl:text-[61px] text-center mx-auto leading-[1.16] font-black font-archivo'>PROCESO DE INGENIERIA
                <span className='relative'>
                    <span className='hidden md:inline-block bg-gradient-to-r from-[#1d1db8] to-[#9C73C1] text-[#1e1e1e] px-2 absolute left-3 -right-2 sm:right-0 xl:-right-2 top-2 sm:top-4 xl:top-7 -bottom-1 sm:-bottom-[6px]'></span>
                    <span className='relative z-10 sm:whitespace-nowrap'> EN DETALLE</span>
                </span>
            </h2>


            {/* grid */}
            <div className='sm:text-lg lg:text-xl font-rubik'>
                {/*  */}
                <div data-aos="fade-up" className='flex flex-col md:flex-row justify-center gap-6 lg:gap-12 mb-12'>
                    
                    <div className='flex flex-col-reverse lg:flex-row text-center md:text-right gap-5 lg:gap-9 items-center md:items-end lg:items-center'>
                        <div>
                            <h3 className='font-bold'>EMPRESAS/PROFESIONALES</h3>
                            <p className='md:max-w-[357px]'>Nos contactan con anteproyectos o proyectos en mano para desarrollar en el sistema de Steel Framing.</p>
                        </div>
                        <Image alt='autocad tool' src='/servicios/Building.svg' width={137.5} height={137.5} />
                    </div>

                    <div className='flex flex-col lg:flex-row text-center md:text-left gap-5 lg:gap-9 items-center md:items-start lg:items-center'>
                        <Image alt='autocad tool' src='/servicios/Building-2.svg' width={137.5} height={137.5} />
                        <div >
                            <h3 className='font-bold'>CLIENTE FINAL</h3>
                            <p className='md:max-w-[357px]'>Establecemos comunicación con personas que buscan construir una vivienda o espacio en Steel Framing.</p>
                        </div>
                    </div>
                </div>
                {/*  */}
                <div data-aos="fade-up" className='flex flex-col md:flex-row font-rubik justify-center gap-6 lg:gap-12 mb-14'>
                   
                    <div className='flex flex-col-reverse lg:flex-row text-center md:text-right gap-5 lg:gap-9 justify-end lg:justify-start items-center md:items-end lg:items-center'>
                        <div>
                            <p className='md:max-w-[357px]'>Realizamos ajustes y brindamos recomendaciones para optimizar el rendimiento del proyecto.</p>
                        </div>
                        <Image alt='autocad tool' src='/servicios/Building-3.png' width={137.5} height={137.5} />
                    </div>

                    <div className='flex flex-col lg:flex-row text-center md:text-left gap-5 lg:gap-9 items-center md:items-start lg:items-center'>
                        <Image alt='autocad tool' src='/servicios/Building-4.png' width={137.5} height={137.5} />
                        <div >
                            <p className='md:max-w-[357px]'>Detallamos el proceso de anteproyecto, proyecto de ingeniería de detalles.</p>
                        </div>
                    </div>
                </div>
                {/*  */}
                <Image data-aos="fade-up" className='mx-auto mb-11' alt='autocad tool' src='/servicios/Building-5.svg' width={137.5} height={137.5} />
                <div data-aos="fade-up" className='text-center mx-auto mb-20'>
                    <h3 className='font-bold'>ANALISIS INICIAL Y PREDIMENSIONAMIENTO</h3>
                    <p className='max-w-[938px] mx-auto'> Realizamos un análisis exhaustivo de las cargas, alturas y otros factores clave del proyecto para ajustar el diseño estructural. Predimensionamos secciones esenciales como viguetas, montantes y dinteles, optimizando la eficiencia del sistema Steel Framing.</p>
                </div>
                {/*  */}
                <div data-aos="fade-up" className='flex flex-col md:flex-row justify-center gap-12 lg:gap-24 2xl:gap-44 mb-12'>
                    <div className='flex flex-col text-center md:text-right gap-9 items-center md:items-end '>
                        <Image alt='autocad tool' src='/servicios/Building-6.png' width={137.5} height={137.5} />
                        <div>
                            <h3 className='font-bold'>MODELADO CON VERTEX BD</h3>
                            <p className='md:max-w-[360px]'>Utilizando Vertex BD, ajustamos una amplia gama de parámetros que garantizan la facilidad de montaje, precisión en los encuentros y alta calidad en los detalles de terminación. Aprovechamos el potencial del software BIM para analizar consumos y crear un gemelo digital que mejora la planificación y ejecución del proyecto.</p>
                        </div>
                    </div>
                    <div className='flex flex-col text-center md:text-left gap-9 items-center md:items-start'>
                        <Image alt='autocad tool' src='/servicios/Building-7.png' width={137.5} height={137.5} />
                        <div >
                            <h3 className='font-bold'>CÁLCULO CON CYPE 3D</h3>
                            <p className='md:max-w-[360px]'>En esta fase, creamos el modelo de cálculo estructural con un enfoque en el óptimo aprovechamiento de las secciones, manteniendo la integridad del diseño arquitectónico. Ajustamos arriostramientos y anclajes para garantizar la eficiencia de la estructura, y llevamos a cabo las verificaciones necesarias conforme a los reglamentos vigentes.</p>
                        </div>
                    </div>
                </div>

      {/*  
                <Image data-aos="fade-up" className='mx-auto mb-11' alt='autocad tool' src='/servicios/Building-8.svg' width={137.5} height={137.5} />
                <div data-aos="fade-up" className='text-center mx-auto mb-20'>
                    <h3 className='font-bold'>ANALISIS INICIAL Y PREDIMENSIONAMIENTO</h3>
                    <p className='max-w-[938px] mx-auto'> Realizamos un análisis exhaustivo de las cargas, alturas y otros factores clave del proyecto para ajustar el diseño estructural. Predimensionamos secciones esenciales como viguetas, montantes y dinteles, optimizando la eficiencia del sistema Steel Framing.</p>
                </div>
*/}


            </div>
        </div>
    )
}
