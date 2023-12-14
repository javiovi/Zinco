
import Image from 'next/image'
import React, { useState,useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
export default function Projects() {
    useEffect(() => {
        AOS.init();
    }, [])



    const [showMore, setShowMore] = useState(false);
    const [p1Large, setp1Large] = useState(false);
    const [p2Large, setp2Large] = useState(false);
    const [p3Large, setp3Large] = useState(false);
    
    const [isCarouselOpen1, setIsCarouselOpen1] = useState(false);
    const [isCarouselOpen2, setIsCarouselOpen2] = useState(false);
    const [isCarouselOpen3, setIsCarouselOpen3] = useState(false);
    const [isCarouselOpen4, setIsCarouselOpen4] = useState(false);
    const [isCarouselOpen5, setIsCarouselOpen5] = useState(false);
    const [isCarouselOpen6, setIsCarouselOpen6] = useState(false);

    const array1 = ['/vida1.jpg', '/vida2.jpg', '/vida3.jpg', '/vida4.jpg', '/vida5.jpg', '/vida6.jpg']
    const array2 = ['/mdp1.jpeg', '/mdp2.jpeg', '/mdp3.jpeg', '/mdp4.jpeg', '/mdp5.jpeg'];
    const array3 = [ '/poggi0.png','/poggi2.jpg', '/poggi1.jpg', '/poggi3.jpg', '/poggi4.jpg'];
    const array4 = [ '/sanchez1.png','/sanchez2.jpg', '/sanchez3.jpg'];
    const array5 = [ '/natale1.png','/natale2.jpg', '/poggi1.jpg', '/poggi3.jpg', '/poggi4.jpg'];
    const array6 = [ '/dribuild1.png','/dribuild2.jpg', '/dribuild3.jpg', '/dribuild4.jpg', '/dribuild5.jpg','/dribuild6.jpg','/dribuild7.jpg','/dribuild8.jpg'];


    
    const handleImageClick1 = (index) => {
        
     setIsCarouselOpen1(true);
      };
    const handleCloseCarousel1 = (e) => {
        if (e.target === e.currentTarget) {
          setIsCarouselOpen1(false);
        }
      };
      const handleImageClick2 = (index) => {
     setIsCarouselOpen2(true);
      };
      const handleCloseCarousel2 = (e) =>{
       setIsCarouselOpen2(false);
      };
     const handleImageClick3 = (index) => {
     setIsCarouselOpen3(true);
      };
      const handleCloseCarousel3 = (e) =>{
      setIsCarouselOpen3(false);
      };
      const handleImageClick4 = (index) => {
        setIsCarouselOpen4(true);
         };
         const handleCloseCarousel4 = (e) =>{
         setIsCarouselOpen4(false);
         };
         const handleImageClick5 = (index) => {
            setIsCarouselOpen5(true);
             };
             const handleCloseCarousel5 = (e) =>{
             setIsCarouselOpen5(false);
             };
             const handleImageClick6 = (index) => {
                setIsCarouselOpen6(true);
                 };
                 const handleCloseCarousel6 = (e) =>{
                 setIsCarouselOpen6(false);
                 };



    return (
        
        <div  id='projects' className='mb-48 xl:mb-56 px-4 lg:px-8'>
            <div data-aos="fade-up" className='flex justify-center items-center gap-4 mb-16'>
                <div className='hidden sm:inline-block h-[2px] w-full bg-[#3e3391]'></div>

                <h2 className='sm:whitespace-nowrap text-center text-[5.5vw] sm:text-[3.5vw]  2xl:text-[56px] leading-[1.16] font-black font-archivo'>
                    PROYECTOS DESTACADOS
                </h2>
                <div className='hidden sm:inline-block h-[2px] w-full bg-[#3e3391]'></div>

            </div>

            <div data-aos="fade-up" className='flex gap-11 flex-col xl:flex-row'>
            <div className='flex flex-wrap justify-center md:justify-between overflow-hidden'>
            <div className='my-2 px-2 w-full md:w-1/3 overflow-hidden'>
                {isCarouselOpen4 ? (
                <div
                  id="carousel-background"
                  onClick={handleCloseCarousel4}
                  className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center"
                >
                    <div className="relative">
                      
                        <div onClick={(e) => e.stopPropagation()}>
                            <Carousel showThumbs={false} dynamicHeight useKeyboardArrows >
                                {array4.map((image, index) => (
                                    <div key={index}>
                                        <img src={image} alt={`Slide ${index}`} style={{ height: '700px', objectFit: 'cover' }} />
                                    </div>
                                ))}
                            </Carousel>
                        </div>
                        {/* El botón o área para cerrar el carrusel, si lo necesitas */}
                        <button onClick={handleCloseCarousel4} className="close-button">
                         &times;
                        </button>
                    </div>
                </div>
            ) : (
                <div onClick={() => handleImageClick4(0)} className='grayscale h-[347px] w-full mb-5 relative overflow-hidden cursor-pointer'>
                    <img src={array4[0]} alt='Current Image' style={{ width: '100%', height: '340px', objectFit: 'fill'}} />
                </div>
            )}
                    <p className='font-archivo font-black text-2xl mb-2'>SANCHEZ</p>
                    <p className='font-archivo font-light text-m mt-0'>Vivienda unifamiliar de dos plantas</p>
                    <div className="table-container">
        <table>
            <thead>
                <tr>
                    <th>M² CUB</th>
                    <th>M² SEMICUBIERTOS</th>
                    <th>M² TOTALES</th>
                    <th>CONSUMO</th>
                    <th>ALCANCE</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>332</td>
                    <td>103</td>
                    <td>435</td>
                    <td> 28 kg/m²</td>
                    <td>Ingeniería</td>
                </tr>
            </tbody>
        </table>
    </div>
                    <div className='w-[85px] h-[1px] mb-4'></div>
                    <div className='font-rubik font-normal text-base lg:text-l mb-5 flex flex-col items-start'>

<p>Cubierta plana, entre medianeras.</p>

<p className="text-with-icon">
    <svg className="location-icon mr-2 inline-block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" fill="currentColor">
        {/* Este es un ejemplo de un path SVG para un ícono de ubicación, reemplaza con tu propio SVG si es necesario */}
        <path d="M168 0C75.2 0 0 75.2 0 168c0 156.8 152 312 152 312s152-155.2 152-312c0-92.8-75.2-168-168-168zM168 240c-39.8 0-72-32.2-72-72s32.2-72 72-72 72 32.2 72 72-32.2 72-72 72z"/>
    </svg>
    Villa del parque, CABA.
</p>

</div>
                 {/*    <div onClick={() => setp3Large(!p3Large)} className='h-10 w-10 rounded-full cursor-pointer border border-white grid place-content-center '><p className='leading-none text-4xl relative -top-1'>{p3Large ? '-' : '+'}</p></div>*/}
                </div>


                <div className='my-2 px-2 w-full md:w-1/3 overflow-hidden'>
                {isCarouselOpen5 ? (
                <div
                  id="carousel-background"
                  onClick={handleCloseCarousel5}
                  className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center"
                >
                    <div className="relative">
                      
                        <div onClick={(e) => e.stopPropagation()}>
                            <Carousel showThumbs={false} dynamicHeight useKeyboardArrows>
                                {array5.map((image, index) => (
                                    <div key={index}>
                                        <img src={image} alt={`Slide ${index}`} style={{ height: '700px', objectFit: 'cover' }} />
                                    </div>
                                ))}
                            </Carousel>
                        </div>
                        {/* El botón o área para cerrar el carrusel, si lo necesitas */}
                        <button onClick={handleCloseCarousel5} className="close-button">
                         &times;
                        </button>
                    </div>
                </div>
            ) : (
                <div onClick={() => handleImageClick5(0)} className='grayscale h-[347px] w-full mb-5 relative overflow-hidden cursor-pointer' >
                    <img src={array5[0]} alt='Current Image' style={{ width: '100%', height: '340px', objectFit: 'fill'}} />
                </div>
            )}
                    <p className='font-archivo font-black text-2xl mb-2'>NATALE</p>
                    <p className='font-archivo font-light text-m mt-0'>Vivienda unifamiliar en planta baja</p>
                    <div className="table-container">
        <table>
            <thead>
                <tr>
                    <th>M² CUB</th>
                    <th>M² SEMICUBIERTOS</th>
                    <th>M² TOTALES</th>
                    <th>CONSUMO</th>
                    <th>ALCANCE</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>155</td>
                    <td>95</td>
                    <td>250</td>
                    <td> 22 kg/m²</td>
                    <td>Ingeniería</td>
                </tr>
            </tbody>
        </table>
    </div>
                    <div className='w-[85px] h-[1px] mb-4'></div>
                    <div className='font-rubik font-normal text-base lg:text-l mb-5 flex flex-col items-start'>

<p>Cubierta a dos aguas, perimetro libre.</p>

<p className="text-with-icon">
    <svg className="location-icon mr-2 inline-block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" fill="currentColor">
        {/* Este es un ejemplo de un path SVG para un ícono de ubicación, reemplaza con tu propio SVG si es necesario */}
        <path d="M168 0C75.2 0 0 75.2 0 168c0 156.8 152 312 152 312s152-155.2 152-312c0-92.8-75.2-168-168-168zM168 240c-39.8 0-72-32.2-72-72s32.2-72 72-72 72 32.2 72 72-32.2 72-72 72z"/>
    </svg>
    Hostal del sol, Rosario.
</p>
</div>

                 {/*    <div onClick={() => setp3Large(!p3Large)} className='h-10 w-10 rounded-full cursor-pointer border border-white grid place-content-center '><p className='leading-none text-4xl relative -top-1'>{p3Large ? '-' : '+'}</p></div>*/}

                </div>

                <div className='my-2 px-2 w-full md:w-1/3 overflow-hidden'>
                {isCarouselOpen3 ? (
                <div
                  id="carousel-background"
                  onClick={handleCloseCarousel3}
                  className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center"
                >
                    <div className="relative">
                      
                        <div onClick={(e) => e.stopPropagation()}>
                            <Carousel showThumbs={false} dynamicHeight useKeyboardArrows>
                                {array3.map((image, index) => (
                                    <div key={index}>
                                        <img src={image} alt={`Slide ${index}`} style={{ height: '700px', objectFit: 'cover' }} />
                                    </div>
                                ))}
                            </Carousel>
                        </div>
                        {/* El botón o área para cerrar el carrusel, si lo necesitas */}
                        <button onClick={handleCloseCarousel3} className="close-button">
                         &times;
                        </button>
                    </div>
                </div>
            ) : (
                <div onClick={() => handleImageClick3(0)} className='grayscale h-[347px] w-full mb-5 relative overflow-hidden cursor-pointer'>
                    <img src={array3[0]} alt='Current Image' style={{ width: '100%', height: '340px', objectFit: 'cover'}} />
                </div>
            )}
                    <p className='font-archivo font-black text-2xl mb-2'>POGGI</p>
                    <p className='font-archivo font-light text-m mt-0'>Vivienda unifamiliar de dos plantas</p>
                    <div className="table-container">
        <table>
            <thead>
                <tr>
                    <th>M² CUB</th>
                    <th>M² SEMICUBIERTOS</th>
                    <th>M² TOTALES</th>
                    <th>CONSUMO</th>
                    <th>ALCANCE</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>342</td>
                    <td>193</td>
                    <td>495</td>
                    <td> 28 </td>
                    <td>ingeniería</td>
                </tr>
            </tbody>
        </table>
    </div>
                    <div className='w-[85px] h-[1px] mb-4'></div>
                    <div className='font-rubik font-normal text-base lg:text-l mb-5 flex flex-col items-start'>

<p>Cubierta plana, perimetro libre.</p>

<p className="text-with-icon">
    <svg className="location-icon mr-2 inline-block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" fill="currentColor">
        {/* Este es un ejemplo de un path SVG para un ícono de ubicación, reemplaza con tu propio SVG si es necesario */}
        <path d="M168 0C75.2 0 0 75.2 0 168c0 156.8 152 312 152 312s152-155.2 152-312c0-92.8-75.2-168-168-168zM168 240c-39.8 0-72-32.2-72-72s32.2-72 72-72 72 32.2 72 72-32.2 72-72 72z"/>
    </svg>
    Barrio Altos del Molino, Carlos Casares.
</p>
</div>

                 {/*    <div onClick={() => setp3Large(!p3Large)} className='h-10 w-10 rounded-full cursor-pointer border border-white grid place-content-center '><p className='leading-none text-4xl relative -top-1'>{p3Large ? '-' : '+'}</p></div>*/}

                </div>
       
                <div className='my-2 px-2 w-full md:w-1/3 overflow-hidden'>
                
                {isCarouselOpen1 ? (
                <div
                  id="carousel-background"
                  onClick={handleCloseCarousel1}
                  className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center"
                >
                    <div className="relative">
                      
                        <div onClick={(e) => e.stopPropagation()} >
                            <Carousel showThumbs={false} dynamicHeight useKeyboardArrows>
                                {array1.map((image, index) => (
                                    <div key={index}>
                                        <img src={image} alt={`Slide ${index}`} style={{ height: '700px', objectFit: 'cover' }} />
                                    </div>
                                ))}
                            </Carousel>
                        </div>
                        {/* El botón o área para cerrar el carrusel, si lo necesitas */}
                        <button onClick={handleCloseCarousel1} className="close-button">
                         &times;
                        </button>
                    </div>
                </div>
            ) : (
                <div onClick={() => handleImageClick1(0)} className='grayscale h-[347px] w-full mb-5 relative overflow-hidden cursor-pointer'>
                    <img src={array1[1]} alt='Current Image' style={{ width: '100%', height: '350px', objectFit: 'cover'}} />
                </div>
            )}
                    <p className='font-archivo font-black text-2xl mb-2'>VIDA</p>
                    <p className='font-archivo font-light text-m mt-0'>Vivienda unifamiliar planta baja</p>
                    <div className="table-container">
        <table>
            <thead>
                <tr>
                    <th>M² CUB</th>
                    <th>M² SEMICUBIERTOS</th>
                    <th>M² TOTALES</th>
                    <th>CONSUMO</th>
                    <th>ALCANCE</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>385</td>
                    <td>131</td>
                    <td>516</td>
                    <td>35 kg/m²</td>
                    <td>Ingeniería</td>
                </tr>
            </tbody>
        </table>
    </div>
                    <div className='w-[85px]  h-[1px] mb-4'></div>
                    <div className='font-rubik font-normal text-base lg:text-l mb-5 flex flex-col items-start'>

<p>Cubierta a dos aguas, perimetro libre.</p>

<p className="text-with-icon">
    <svg className="location-icon mr-2 inline-block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" fill="currentColor">
        {/* Este es un ejemplo de un path SVG para un ícono de ubicación, reemplaza con tu propio SVG si es necesario */}
        <path d="M168 0C75.2 0 0 75.2 0 168c0 156.8 152 312 152 312s152-155.2 152-312c0-92.8-75.2-168-168-168zM168 240c-39.8 0-72-32.2-72-72s32.2-72 72-72 72 32.2 72 72-32.2 72-72 72z"/>
    </svg>
    Barrio Vida II, Funes.
</p>
</div>


              {/*      <div onClick={() => setp1Large(!p1Large)} className='h-10 w-10 rounded-full cursor-pointer border border-white grid place-content-center '><p className='leading-none text-4xl relative -top-1'>{p1Large ? '-' : '+'}</p></div>*/}

                </div>
                <div className='my-2 px-2 w-full md:w-1/3 overflow-hidden'>
                {isCarouselOpen2 ? (
                <div
                  id="carousel-background"
                  onClick={handleCloseCarousel2}
                  className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center"
                >
                    <div className="relative">
                      
                        <div onClick={(e) => e.stopPropagation()}>
                            <Carousel showThumbs={false} dynamicHeight useKeyboardArrows>
                                {array2.map((image, index) => (
                                    <div key={index}>
                                        <img src={image} alt={`Slide ${index}`} style={{ height: '700px', objectFit: 'cover' }} />
                                    </div>
                                ))}
                            </Carousel>
                        </div>
                      
                        <button onClick={handleCloseCarousel2} className="close-button">
                         &times;
                        </button>
                    </div>
                </div>
            ) : (
                <div onClick={() => handleImageClick2(0)} className='grayscale h-[347px] w-full mb-5 relative overflow-hidden cursor-pointer'>
                    <img src={array2[0]} alt='Current Image' style={{ width: '100%', height: '350px', objectFit: 'cover'}} />
                </div>
            )}
                    <p className='font-archivo font-black text-2xl mb-2'>MDP</p>
                    <p className='font-archivo font-light text-m mt-0'>Complejo habitacional de 4 plantas</p>
                    <div className="table-container">
        <table>
            <thead>
                <tr>
                    <th>M² CUB</th>
                    <th>M² SEMICUBIERTOS</th>
                    <th>M² TOTALES</th>
                    <th>CONSUMO</th>
                    <th>ALCANCE</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1205</td>
                    <td>23</td>
                    <td>1228</td>
                    <td> - </td>
                    <td>Ingeniería</td>
                </tr>
            </tbody>
        </table>
    </div>
                    <div className='w-[85px]  h-[1px] mb-4'></div>
                    <div className='font-rubik font-normal text-base lg:text-l mb-5 flex flex-col items-start'>

<p>Cubierta plana, perimetro libre.</p>

<p className="text-with-icon">
    <svg className="location-icon mr-2 inline-block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" fill="currentColor">
        {/* Este es un ejemplo de un path SVG para un ícono de ubicación, reemplaza con tu propio SVG si es necesario */}
        <path d="M168 0C75.2 0 0 75.2 0 168c0 156.8 152 312 152 312s152-155.2 152-312c0-92.8-75.2-168-168-168zM168 240c-39.8 0-72-32.2-72-72s32.2-72 72-72 72 32.2 72 72-32.2 72-72 72z"/>
    </svg>
    Mar de las Pampas, Buenos Aires.
</p>
</div>

                </div>
                <div className='my-2 px-2 w-full md:w-1/3 overflow-hidden'>
                {isCarouselOpen6 ? (
                <div
                  id="carousel-background"
                  onClick={handleCloseCarousel6}
                  className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center"
                >
                    <div className="relative">
                      
                        <div onClick={(e) => e.stopPropagation()}>
                            <Carousel showThumbs={false} dynamicHeight useKeyboardArrows>
                                {array6.map((image, index) => (
                                    <div key={index}>
                                        <img src={image} alt={`Slide ${index}`} style={{ height: '700px', objectFit: 'cover' }} />
                                    </div>
                                ))}
                            </Carousel>
                        </div>
                      
                        <button onClick={handleCloseCarousel6} className="close-button">
                         &times;
                        </button>
                    </div>
                </div>
            ) : (
                <div onClick={() => handleImageClick6(0)} className='grayscale h-[347px] w-full mb-5 relative overflow-hidden cursor-pointer'>
                    <img src={array6[1]} alt='Current Image' style={{ width: '100%', height: '350px', objectFit: 'cover'}} />
                </div>
            )}
                    <p className='font-archivo font-black text-2xl mb-2'>DRIBUILD</p>
                    <p className='font-archivo font-light text-m mt-0'>Vivienda unifamiliar en planta baja</p>
                    <div className="table-container">
        <table>
            <thead>
                <tr>
                    <th>M² CUB</th>
                    <th>M² SEMICUBIERTOS</th>
                    <th>M² TOTALES</th>
                    <th>CONSUMO</th>
                    <th>ALCANCE</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>184</td>
                    <td>184</td>
                    <td> -</td>
                    <td> 28 kg/m² </td>
                    <td>Ingeniería</td>
                </tr>
            </tbody>
        </table>
    </div>
                    <div className='w-[85px]  h-[1px] mb-4'></div>
                    <div className='font-rubik font-normal text-base lg:text-l mb-5 flex flex-col items-start'>

<p>Cubierta plana, perimetro libre.</p>

<p className="text-with-icon">
    <svg className="location-icon mr-2 inline-block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" fill="currentColor">
        {/* Este es un ejemplo de un path SVG para un ícono de ubicación, reemplaza con tu propio SVG si es necesario */}
        <path d="M168 0C75.2 0 0 75.2 0 168c0 156.8 152 312 152 312s152-155.2 152-312c0-92.8-75.2-168-168-168zM168 240c-39.8 0-72-32.2-72-72s32.2-72 72-72 72 32.2 72 72-32.2 72-72 72z"/>
    </svg>
    Barrio el Ocho, Pilar.
</p>
</div>

                   
                </div>

       
         </div>

</div>





 <div className="flex justify-center">
<div className="show-more-button" onClick={() => setShowMore(!showMore)}>
    {showMore ? '-' : '+'}</div>
         {showMore && (
    <>
    
    
    </>
  )}
</div>
                 </div>
     
    )}