import Image from 'next/image'
import React,{useEffect} from 'react'
import Arrow from '../Arrow'
import Link from 'next/link'
import AOS from 'aos';
import 'aos/dist/aos.css';


export default function Servicios() {
    useEffect(() => {
        AOS.init();
    }, [])

    return (
        <div  className='px-[7.3vw] sm:mt-16 lg:mt-32 xl:mt-60 '>
            <div data-aos="fade-up" className='mb-12 md:flex items-center gap-5 hidden '>
                <div className='text-lg md:text-[22px] justify-between md:justify-start w-full md:w-auto md:whitespace-nowrap font-archivo font-black flex items-center gap-5'>DESCUBRÍ TODOS LOS SERVICIOS <Link href={'/services'}><Arrow small /></Link> </div>
                <div className='hidden md:inline-block h-[2px] w-full bg-[#3e3391]'></div>
            </div>
            <div data-aos="fade-up" className='flex flex-col xl:flex-row relative gap-y-10 gap-x-5'>
                <div className='flex-1 flex'>
                    <div className='flex w-full flex-col justify-center xl:ml-[2.3vw]'>
                        <h3 className='mb-8 text-[7vw] md:text-[6vw] xl:text-[3.5vw] 2xl:text-[56px] leading-[1.16] font-black font-archivo'>DESCUBRE EL <br /><span className='relative'>
                            <span className='bg-gradient-to-r from-[#1d1db8] to-[#9C73C1] text-[#1e1e1e] px-2 absolute left-3 -right-3 top-4 md:top-7 -bottom-1 sm:-bottom-[6px]'>
                            </span>
                            <span className='relative z-10 whitespace-nowrap'>
                                PODER DEL ACERO.
                            </span>
                        </span>
                        </h3>
                        <p className='font-rubik text-lg md:text-xl text-justif sm:text-left leading-normal font-normal xl:mr-[5vw]'>En ZincO diseñamos y asesoramos técnicamente en proyectos de Steel Framing, para ofrecer resultados integrales a nuestros clientes.</p>
                    </div>
                </div>
                <div className='flex-1 flex w-full gap-3 relative'>
                    <div className='flex-1 h-[35vw] md:h-[327px] relative'>
                        <Image className='w-full absolute inset-0 h-full object-cover grayscale' alt='Steel1' src='/Steel.png' quality={100} width={409} height={327.5} />
                    </div>
                    <div className='flex-1 h-[35vw] md:h-[327px] relative'>
                        <Image className='w-full absolute inset-0 h-full object-cover grayscale' alt='Steel2' src='/Steel2.png' quality={100} width={433.4} height={360.25} />
                    </div>
                </div>
            </div>

            <div data-aos="fade-up" className="flex flex-col xl:flex-row mt-3 xl:mt-10 gap-x-5 ">
                <div className='flex-1'>
                    <div className='h-[35vw] md:h-[300px] relative xl:ml-[2.3vw]'>
                        <Image className='w-full absolute inset-0 h-full object-cover grayscale' alt='Steel2' src='/Steel3.png' quality={100} width={728} height={300} />
                    </div>
                </div>
                <div className='flex-1 flex'>
                    <div className='flex flex-col justify-between pt-[6vw] md:pt-[3vw] xl:pt-[1vw] text-justif sm:text-left font-rubik text-base sm:text-lg md:text-xl leading-normal font-normal gap-y-5 xl:gap-y-0'>
                        <p>Nuestro objetivo es garantizar soluciones innovadoras y sostenibles de alta calidad, aprovechando al máximo los beneficios del sistema.</p>
                        <p>Mediante la realización de gemelos digitales a través de software de modelado y calculo específicos, podemos prever problemas y resolverlos en una instancia previa a la ejecución de los proyectos.</p>
                        <p>Entendemos el valor de optimizar siempre consumos de acero y tiempos de obra, teniendo siempre en cuenta los requerimientos arquitectónicos.</p>
                    </div>
                </div>
            </div>

            <div data-aos="fade-up" className='mb-12 flex items-center gap-5 md:hidden mt-10'>
                <div className='text-lg md:text-[22px] justify-between md:justify-start w-full md:w-auto md:whitespace-nowrap font-archivo font-black flex items-center gap-5'>DESCUBRÍ TODOS LOS SERVICIOS <Link href={'/services'}><Arrow small /></Link> </div>
                <div className='hidden md:inline-block h-[2px] w-full bg-[#3e3391]'></div>
            </div>

            <div data-aos="fade-up" className='mt-[16vw] md:mt-[8vw] xl:mt-14 mb-12 hidden md:flex items-center gap-5'>
                <div className='text-lg md:text-[22px] justify-between md:justify-start w-full md:w-auto  md:whitespace-nowrap font-archivo font-black flex items-center gap-5'>HISTORIA & TRAYECTORIA <Link href={'/about'}><Arrow small /></Link></div>
                <div className='hidden md:inline-block h-[2px] w-full bg-[#3e3391]'></div>
            </div>
            <div data-aos="fade-up" className='flex flex-col xl:flex-row relative gap-y-10 gap-x-5'>
                <div className='flex-1 flex'>
                    <div className='flex w-full flex-col justify-start xl:ml-[2.3vw] xl:pt-14'>
                        <h3 className='mt-10 md:mt-0 mb-8 sm:mb-14 text-[7vw] md:text-[6vw] xl:text-[3.5vw] 2xl:text-[56px] leading-[1.16] font-black font-archivo'>NUESTROS INICIOS<br /> Y <span className='relative'>
                            <span className='bg-gradient-to-r from-[#1d1db8] to-[#9C73C1] text-[#1e1e1e] px-2 absolute left-3 -right-3 top-4 md:top-7 -bottom-1 sm:-bottom-[6px]'>
                            </span>
                            <span className='relative z-10 whitespace-nowrap'>
                                CRECIMIENTO
                            </span>
                        </span>
                        </h3>
                        <p className='font-rubik z-20 text-lg md:text-xl text-justif sm:text-left leading-normal font-normal xl:mr-[2vw]'>En ZincO, somos un equipo comprometido con la especialización en la ingeniería y el diseño en Steel Framing. Nuestra dedicación a lo largo del tiempo se refleja en soluciones técnicas sólidas y eficientes. Desde nuestros inicios, hemos evolucionado abordando proyectos desafiantes que nos aportaron experiencia en estructuración y visión constructiva, contribuyendo al desarrollo del sistema.</p>
                    </div>
                </div>
                <div className='flex-1 flex w-full gap-3 relative'>
                    <div className='flex-1 h-[50vw] md:h-[517px] relative'>
                        <Image className='w-full z-10 absolute inset-0 h-full object-cover grayscale'  alt='Steel1' src='/chambeando.jpg' quality={100} width={820} height={517} />
                        <div className="absolute bg-[left] md:bg-[right_top] ping-slow duration-1000 -top-[20%] bottom-[20%] inset-[0%] md:-inset-[20%] md:left-[50%] md:-top-[45%] blur-[40px] z-0 bg-elipse" ></div>

                    </div>
                </div>
            </div>
            <div data-aos="fade-up" className='mt-10  xl:mt-14 mb-12 flex md:hidden items-center gap-5'>
                <div className='text-lg md:text-[22px] justify-between md:justify-start w-full md:w-auto  md:whitespace-nowrap font-archivo font-black flex items-center gap-5'>HISTORIA & TRAYECTORIA <Link href={'/about'}><Arrow small /></Link></div>
                <div className='hidden md:inline-block h-[2px] w-full bg-[#3e3391]'></div>
            </div>

        </div>
    )
}
