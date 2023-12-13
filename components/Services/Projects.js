
import Image from 'next/image'
import React, { useState,useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 

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
  
 

    const array1 = ['/vida1.jpg', '/vida2.jpg', '/vida3.jpg', '/vida4.jpg', '/vida5.jpg', '/vida6.jpg']
    const array2 = ['/mdp1.jpeg', '/mdp2.jpeg', '/mdp3.jpeg', '/mdp4.jpeg', '/mdp5.jpeg'];
    const array3 = ['/poggi2.jpg', '/poggi1.jpg', '/poggi3.jpg', '/poggi4.jpg'];

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
    
    

   
   
   
    const p1 = <div className='space-y-5'><p>Vivienda unifamiliar en planta baja</p><p>Cubierta a dos aguas,perímetro libre. Ubicación: Barrio Vida II, Funes.</p> </div>
    const p2 = <div className='space-y-5'><p>Vivienda unifamiliar de dos plantas  <p>Cubierta plana / perímetro libre.</p> Ubicación: Barrio Altos del Molino, Carlos Casares.							</p> </div>
    const p3 = <div className='space-y-5'><p>Complejo habitacional de 4 plantas  cubierta plana	</p><p > Cubierta plana / perímetro libre.</p><p>Ubicacion: Mar de las Pampas, Buenos Aires. </p> </div>


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
                                        <img src={image} alt={`Slide ${index}`} style={{ height: '500px', objectFit: 'cover' }} />
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
                    <img src={array1[1]} alt='Current Image' style={{ width: '100%', height: 'auto', objectFit: 'cover'}} />
                </div>
            )}
                    <p className='font-archivo font-black text-lg mb-6'>VIDA</p>
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
                    <td>ingeniería</td>
                </tr>
            </tbody>
        </table>
    </div>
                    <div className='w-[85px]  h-[1px] mb-9'></div>
                    <div className='font-rubik font-normal text-base lg:text-xl mb-5'>{p1Large ? p1 :' Vivienda unifamiliar en planta baja'}</div>
                    <div onClick={() => setp1Large(!p1Large)} className='h-10 w-10 rounded-full cursor-pointer border border-white grid place-content-center '><p className='leading-none text-4xl relative -top-1'>{p1Large ? '-' : '+'}</p></div>

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
                                        <img src={image} alt={`Slide ${index}`} style={{ height: '500px', objectFit: 'cover' }} />
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
                    <img src={array2[0]} alt='Current Image' style={{ width: '100%', height: '500px', objectFit: 'cover'}} />
                </div>
            )}
                    <p className='font-archivo font-black text-lg mb-6'>POGGI</p>
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
                    <td>153</td>
                    <td>495</td>
                    <td>28 kg/m²</td>
                    <td>ingeniería</td>
                </tr>
            </tbody>
        </table>
    </div>
                    <div className='w-[85px]  h-[1px] mb-9'></div>
                    <div className='font-rubik font-normal text-base lg:text-xl mb-5'>{p2Large ? p2 :' Vivienda unifamiliar de dos plantas'}</div>
                    <div onClick={() => setp2Large(!p2Large)} className='h-10 w-10 rounded-full cursor-pointer border border-white grid place-content-center '><p className='leading-none text-4xl relative -top-1'>{p2Large ? '-' : '+'}</p></div>

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
                                        <img src={image} alt={`Slide ${index}`} style={{ height: '500px', objectFit: 'cover' }} />
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
                    <img src={array3[0]} alt='Current Image' style={{ width: '100%', height: '500px', objectFit: 'cover'}} />
                </div>
            )}
                    <p className='font-archivo font-black text-lg mb-6'>MDP</p>
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
                    <td>ingeniería</td>
                </tr>
            </tbody>
        </table>
    </div>
                    <div className='w-[85px] h-[1px] mb-9'></div>
                    <div className='font-rubik font-normal text-base lg:text-xl mb-5'>{p3Large ? p3 :'Complejo habitacional de 4 plantas'}</div>
                    <div onClick={() => setp3Large(!p3Large)} className='h-10 w-10 rounded-full cursor-pointer border border-white grid place-content-center '><p className='leading-none text-4xl relative -top-1'>{p3Large ? '-' : '+'}</p></div>

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