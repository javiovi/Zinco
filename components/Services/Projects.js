
import Image from 'next/image';
import React, { useState,useEffect,} from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 


export default function Projects() {
    useEffect(() => {
        AOS.init();
    }, [])
  

    
    const [isCarouselOpen1, setIsCarouselOpen1] = useState(false);
    const [isCarouselOpen2, setIsCarouselOpen2] = useState(false);
    const [isCarouselOpen3, setIsCarouselOpen3] = useState(false);
    const [isCarouselOpen4, setIsCarouselOpen4] = useState(false);
    const [isCarouselOpen5, setIsCarouselOpen5] = useState(false);
    const [isCarouselOpen6, setIsCarouselOpen6] = useState(false);
    const [isCarouselOpen7, setIsCarouselOpen7] = useState(false);
    const [isCarouselOpen8, setIsCarouselOpen8] = useState(false);
    const [isCarouselOpen9, setIsCarouselOpen9] = useState(false);

    const array1 = ['/vida1.jpg', '/vida2.jpg', '/vida3.jpg', '/vida4.jpg', '/vida5.jpg', '/vida6.jpg']
    const array2 = ['/mdp1.jpeg', '/mdp2.jpeg', '/mdp3.jpeg', '/mdp4.jpeg', '/mdp5.jpeg'];
    const array3 = [ '/poggi0.png','/poggi2.jpg', '/poggi1.jpg', '/poggi3.jpg', '/poggi4.jpg'];
    const array4 = [ '/sanchez1.png','/sanchez2.jpg', '/sanchez3.jpg' ];
    const array5 = [ '/natale1.png','/natale2.jpg'];
    const array6 = [ '/dribuild1.png','/dribuild2.jpg', '/dribuild3.jpg', '/dribuild4.jpg', '/dribuild5.jpg','/dribuild6.jpg','/dribuild7.jpg','/dribuild8.jpg'];
    const array7 = [ '/chorostecky.png'];
    const array8 = [ '/chacras1.png'];
    const array9 = [ '/pd1.png','/pd2.png', '/pd3.png', '/pd4.png', '/pd5.png','/pd6.png','/pd7.png','/pd8.png'];

    
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
                 const handleImageClick7 = (index) => {
                    setIsCarouselOpen7(true);
                     };
                     const handleCloseCarousel7 = (e) =>{
                     setIsCarouselOpen7(false);
                     };
                     const handleImageClick8 = (index) => {
                        setIsCarouselOpen8(true);
                         };
                         const handleCloseCarousel8 = (e) =>{
                         setIsCarouselOpen8(false);
                         };
                         const handleImageClick9 = (index) => {
                            setIsCarouselOpen9(true);
                             };
                             const handleCloseCarousel9 = (e) =>{
                             setIsCarouselOpen9(false);
                             };
              
         const [showMoreProjects, setShowMoreProjects] = useState(false);                 

         const [isTableVisible1, setIsTableVisible1] = useState(false);
         const [isTableVisible2, setIsTableVisible2] = useState(false);
         const [isTableVisible3, setIsTableVisible3] = useState(false);
         const [isTableVisible4, setIsTableVisible4] = useState(false);
         const [isTableVisible5, setIsTableVisible5] = useState(false);
         const [isTableVisible6, setIsTableVisible6] = useState(false);
         const [isTableVisible7, setIsTableVisible7] = useState(false);
         const [isTableVisible8, setIsTableVisible8] = useState(false);
         const [isTableVisible9, setIsTableVisible9] = useState(false);
         
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
    id="carousel-background1"
    onClick={handleCloseCarousel4}
    className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center"
  >
    <div className="relative" style={{ width: '600px', height: '100%' }}>
      <div onClick={(e) => e.stopPropagation()} >
        <Carousel
          showThumbs={false}
          useKeyboardArrows
          showStatus={false}
          showIndicators={false}
          infiniteLoop
        // Debes manejar el estado de currentSlideIndex para seguir el rastro del ítem actual
        >
          {array4.map((image, index) => (
            <div key={index} className="flex justify-center items-center" style={{ height: '100%', width: '600px' }}>
              <img src={image} alt={`Diapositiva ${index}`} />
            </div>
          ))}
        </Carousel>
      </div>
      <button onClick={handleCloseCarousel4} className="close-button">
       &times;
      </button>
    </div>
  </div>
) : (
  <div onClick={() => handleImageClick4(0)} className='grayscale h-[350px] w-full mb-5 relative overflow-hidden cursor-pointer'>
    <img src={array4[1]} alt='Imagen actual' style={{ width: '100%', height:'350px', objectFit: 'cover'}} />
  </div>
)}
                    <p className='font-archivo font-black text-2xl mb-1'>SANCHEZ</p>
                    <p className='font-archivo font-light text-m mt-0'>Vivienda unifamiliar de dos plantas.</p>

                
                    <div className='w-[85px] h-[1px] mb-2'></div>
                    <div className='font-rubik font-normal text-base lg:text-l mb-5 flex flex-col items-start'>

<p>Cubierta plana, entre medianeras.</p>

<p className="text-with-icon mb-3">
    <svg className="location-icon mr-2 inline-block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" fill="currentColor">
        {/* Este es un ejemplo de un path SVG para un ícono de ubicación, reemplaza con tu propio SVG si es necesario */}
        <path d="M168 0C75.2 0 0 75.2 0 168c0 156.8 152 312 152 312s152-155.2 152-312c0-92.8-75.2-168-168-168zM168 240c-39.8 0-72-32.2-72-72s32.2-72 72-72 72 32.2 72 72-32.2 72-72 72z"/>
    </svg>
    Villa del parque, CABA.
</p>
<div onClick={() => setIsTableVisible2(!isTableVisible2)} className="flex items-center cursor-pointer">
  <Image
    src="/ArrowCircle.png"
    alt="Toggle table"
    width={30}
    height={30}
    className={isTableVisible2 ? 'rotate' : ''}
  />
</div>
<div className={`table-container ${isTableVisible2 ? 'visible' : 'hidden'}`}>
   <div className="table-container">
        <table>
            <thead>
                <tr className='font-archivo'>
                    <th>M² CUB</th>
                    <th>M² SEMICUBIERTOS</th>
                    <th>M² TOTALES</th>
                    <th>CONSUMO</th>
                    <th>ALCANCE</th>
                </tr>
            </thead>
            <tbody>
                <tr className='font-archivo'>
                    <td>332</td>
                    <td>103</td>
                    <td>435</td>
                    <td> 28 kg/m²</td>
                    <td>Ingeniería</td>
                </tr>
            </tbody>
        </table>
    </div>
</div>
</div>
                 {/*    <div onClick={() => setp3Large(!p3Large)} className='h-10 w-10 rounded-full cursor-pointer border border-white grid place-content-center '><p className='leading-none text-4xl relative -top-1'>{p3Large ? '-' : '+'}</p></div>*/}
                </div>
                <div className='my-2 px-2 w-full md:w-1/3 overflow-hidden'>
                {isCarouselOpen5 ? (
  <div
    id="carousel-background1"
    onClick={handleCloseCarousel5}
    className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center"
  >
    <div className="relative" style={{ width: '600px', height: '100%' }}>
      <div onClick={(e) => e.stopPropagation()} >
        <Carousel
          showThumbs={false}
          useKeyboardArrows
          showStatus={false}
          showIndicators={false}
          infiniteLoop
        // Debes manejar el estado de currentSlideIndex para seguir el rastro del ítem actual
        >
          {array5.map((image, index) => (
            <div key={index} className="flex justify-center items-center" style={{ height: '100%', width: '600px' }}>
              <img src={image} alt={`Diapositiva ${index}`} />
            </div>
          ))}
        </Carousel>
      </div>
      <button onClick={handleCloseCarousel5} className="close-button">
       &times;
      </button>
    </div>
  </div>
) : (
  <div onClick={() => handleImageClick5(0)} className='grayscale h-[350px] w-full mb-5 relative overflow-hidden cursor-pointer'>
    <img src={array5[1]} alt='Imagen actual' style={{ width: '100%', height:'350px', objectFit: 'cover'}} />
  </div>
)}
                    <p className='font-archivo font-black text-2xl mb-1'>NATALE</p>
                    <p className='font-archivo font-light text-m mt-0'>Vivienda unifamiliar en planta baja</p>
           
                    <div className='w-[85px] h-[1px] mb-3'></div>
                    <div className='font-rubik font-normal text-base lg:text-l mb-5 flex flex-col items-start'>

<p>Cubierta a dos aguas, perimetro libre.</p>

<p className="text-with-icon mb-3">
    <svg className="location-icon mr-2 inline-block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" fill="currentColor">
        {/* Este es un ejemplo de un path SVG para un ícono de ubicación, reemplaza con tu propio SVG si es necesario */}
        <path d="M168 0C75.2 0 0 75.2 0 168c0 156.8 152 312 152 312s152-155.2 152-312c0-92.8-75.2-168-168-168zM168 240c-39.8 0-72-32.2-72-72s32.2-72 72-72 72 32.2 72 72-32.2 72-72 72z"/>
    </svg>
    Hostal del sol, Rosario.
</p>
<div onClick={() => setIsTableVisible1(!isTableVisible1)} className="flex items-center cursor-pointer">
  <Image
    src="/ArrowCircle.png"
    alt="Toggle table"
    width={30}
    height={30}
    className={isTableVisible1 ? 'rotate' : ''}
  />
</div>
<div className={`table-container ${isTableVisible1 ? 'visible' : 'hidden'}`}>
<div className="table-container">
        <table>
            <thead>
                <tr className='font-archivo'>
                    <th>M² CUB</th>
                    <th>M² SEMICUBIERTOS</th>
                    <th>M² TOTALES</th>
                    <th>CONSUMO</th>
                    <th>ALCANCE</th>
                </tr>
            </thead>
            <tbody>
                <tr className='font-archivo'>
                    <td>155</td>
                    <td>95</td>
                    <td>250</td>
                    <td> 22 kg/m²</td>
                    <td>Ingeniería</td>
                </tr>
            </tbody>
        </table>
    </div>
    </div>
</div>

                 {/*    <div onClick={() => setp3Large(!p3Large)} className='h-10 w-10 rounded-full cursor-pointer border border-white grid place-content-center '><p className='leading-none text-4xl relative -top-1'>{p3Large ? '-' : '+'}</p></div>*/}

                </div>

                <div className='my-2 px-2 w-full md:w-1/3 overflow-hidden'>
                {isCarouselOpen3 ? (
  <div
    id="carousel-background1"
    onClick={handleCloseCarousel3}
    className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center"
  >
    <div className="relative" style={{ width: '600px', height: '100%' }}>
      <div onClick={(e) => e.stopPropagation()} >
        <Carousel
          showThumbs={false}
          useKeyboardArrows
          showStatus={false}
          showIndicators={false}
          infiniteLoop
        // Debes manejar el estado de currentSlideIndex para seguir el rastro del ítem actual
        >
          {array3.map((image, index) => (
            <div key={index} className="flex justify-center items-center" style={{ height: '100%', width: '600px' }}>
              <img src={image} alt={`Diapositiva ${index}`} />
            </div>
          ))}
        </Carousel>
      </div>
      <button onClick={handleCloseCarousel3} className="close-button">
       &times;
      </button>
    </div>
  </div>
) : (
  <div onClick={() => handleImageClick3(0)} className='grayscale h-[350px] w-full mb-5 relative overflow-hidden cursor-pointer'>
    <img src={array3[1]} alt='Imagen actual' style={{ width: '100%', height:'350px', objectFit: 'cover'}} />
  </div>
)}
                    <p className='font-archivo font-black text-2xl mb-1'>POGGI</p>
                    <p className='font-archivo font-light text-m mt-0'>Vivienda unifamiliar de dos plantas</p>
              <div className='w-[85px] h-[1px] mb-3'></div>
                    <div className='font-rubik font-normal text-base lg:text-l mb-5 flex flex-col items-start'>

<p>Cubierta plana, perimetro libre.</p>

<p className="text-with-icon mb-3">
    <svg className="location-icon mr-2 inline-block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" fill="currentColor">
        {/* Este es un ejemplo de un path SVG para un ícono de ubicación, reemplaza con tu propio SVG si es necesario */}
        <path d="M168 0C75.2 0 0 75.2 0 168c0 156.8 152 312 152 312s152-155.2 152-312c0-92.8-75.2-168-168-168zM168 240c-39.8 0-72-32.2-72-72s32.2-72 72-72 72 32.2 72 72-32.2 72-72 72z"/>
    </svg>
    Barrio Altos del Molino, Carlos Casares.
</p>
<div onClick={() => setIsTableVisible3(!isTableVisible3)} className="flex items-center cursor-pointer">
  <Image
    src="/ArrowCircle.png"
    alt="Toggle table"
    width={30}
    height={30}
    className={isTableVisible3 ? 'rotate' : ''}
  />
</div>
<div className={`table-container ${isTableVisible3 ? 'visible' : 'hidden'}`}>
             <div className="table-container">
        <table>
            <thead>
                <tr className='font-archivo'>
                    <th>M² CUB</th>
                    <th>M² SEMICUBIERTOS</th>
                    <th>M² TOTALES</th>
                    <th>CONSUMO</th>
                    <th>ALCANCE</th>
                </tr>
            </thead>
            <tbody>
                <tr className='font-archivo'>
                    <td>342</td>
                    <td>193</td>
                    <td>495</td>
                    <td> 28 </td>
                    <td>ingeniería</td>
                </tr>
            </tbody>
        </table>
    </div>
</div>
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
    <div className="relative" style={{ width: '600px', height: '100%' }}>
      <div onClick={(e) => e.stopPropagation()} >
        <Carousel
          showThumbs={false}
          useKeyboardArrows
          showStatus={false}
          showIndicators={false}
          infiniteLoop
        // Debes manejar el estado de currentSlideIndex para seguir el rastro del ítem actual
        >
          {array1.map((image, index) => (
            <div key={index} className="flex justify-center items-center" style={{ height: '400px', width: '600px' }}>
              <img src={image} alt={`Diapositiva ${index}`} />
            </div>
          ))}
        </Carousel>
      </div>
      <button onClick={handleCloseCarousel1} className="close-button">
       &times;
      </button>
    </div>
  </div>
) : (
  <div onClick={() => handleImageClick1(0)} className='grayscale h-[350px] w-full mb-5 relative overflow-hidden cursor-pointer'>
    <img src={array1[1]} alt='Imagen actual' style={{ width: '100%', height:'350px', objectFit: 'cover'}} />
  </div>
)}
                    <p className='font-archivo font-black text-2xl mb-1'>VIDA</p>
                    <p className='font-archivo font-light text-m mt-0'>Vivienda unifamiliar planta baja</p>
            
                    <div className='w-[85px]  h-[1px] mb-3'></div>
                    <div className='font-rubik font-normal text-base lg:text-l mb-5 flex flex-col items-start'>

<p>Cubierta a dos aguas, perimetro libre.</p>

<p className="text-with-icon mb-3">
    <svg className="location-icon mr-2 inline-block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" fill="currentColor">
        {/* Este es un ejemplo de un path SVG para un ícono de ubicación, reemplaza con tu propio SVG si es necesario */}
        <path d="M168 0C75.2 0 0 75.2 0 168c0 156.8 152 312 152 312s152-155.2 152-312c0-92.8-75.2-168-168-168zM168 240c-39.8 0-72-32.2-72-72s32.2-72 72-72 72 32.2 72 72-32.2 72-72 72z"/>
    </svg>
    Barrio Vida II, Funes.
</p>
<div onClick={() => setIsTableVisible4(!isTableVisible4)} className="flex items-center cursor-pointer">
  <Image
    src="/ArrowCircle.png"
    alt="Toggle table"
    width={30}
    height={30}
    className={isTableVisible4 ? 'rotate' : ''}
  />
</div>
<div className={`table-container ${isTableVisible4 ? 'visible' : 'hidden'}`}>
<div className="table-container">
        <table>
            <thead>
                <tr className='font-archivo'>
                    <th>M² CUB</th>
                    <th>M² SEMICUBIERTOS</th>
                    <th>M² TOTALES</th>
                    <th>CONSUMO</th>
                    <th>ALCANCE</th>
                </tr>
            </thead>
            <tbody>
                <tr className='font-archivo'>
                    <td>385</td>
                    <td>131</td>
                    <td>516</td>
                    <td>35 kg/m²</td>
                    <td>Ingeniería</td>
                </tr>
            </tbody>
        </table>
    </div>
    </div>
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
    <div className="relative" style={{ width: '600px', height: '100%' }}>
      <div onClick={(e) => e.stopPropagation()} >
        <Carousel
          showThumbs={false}
          useKeyboardArrows
          showStatus={false}
          showIndicators={false}
          infiniteLoop
        // Debes manejar el estado de currentSlideIndex para seguir el rastro del ítem actual
        >
          {array2.map((image, index) => (
            <div key={index} className="flex justify-center items-center" style={{ height: '400px', width: '600px' }}>
              <img src={image} alt={`Diapositiva ${index}`} />
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
  <div onClick={() => handleImageClick2(0)} className='grayscale h-[350px] w-full mb-5 relative overflow-hidden cursor-pointer'>
    <img src={array2[1]} alt='Imagen actual' style={{ width: '100%', height:'350px', objectFit: 'cover'}} />
  </div>
)}
                    <p className='font-archivo font-black text-2xl mb-1'>MDP</p>
                    <p className='font-archivo font-light text-m mt-0'>Complejo habitacional de 4 plantas</p>
           
                    <div className='w-[85px]  h-[1px] mb-3'></div>
                    <div className='font-rubik font-normal text-base lg:text-l mb-5 flex flex-col items-start'>

<p>Cubierta plana, perimetro libre.</p>

<p className="text-with-icon mb-3">
    <svg className="location-icon mr-2 inline-block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" fill="currentColor">
        {/* Este es un ejemplo de un path SVG para un ícono de ubicación, reemplaza con tu propio SVG si es necesario */}
        <path d="M168 0C75.2 0 0 75.2 0 168c0 156.8 152 312 152 312s152-155.2 152-312c0-92.8-75.2-168-168-168zM168 240c-39.8 0-72-32.2-72-72s32.2-72 72-72 72 32.2 72 72-32.2 72-72 72z"/>
    </svg>
    Mar de las Pampas, Buenos Aires.
</p>
<div onClick={() => setIsTableVisible5(!isTableVisible5)} className="flex items-center cursor-pointer">
  <Image
    src="/ArrowCircle.png"
    alt="Toggle table"
    width={30}
    height={30}
    className={isTableVisible5 ? 'rotate' : ''}
  />
</div>
<div className={`table-container ${isTableVisible5 ? 'visible' : 'hidden'}`}>
<div className="table-container">
        <table>
            <thead>
                <tr className='font-archivo'>
                    <th>M² CUB</th>
                    <th>M² SEMICUBIERTOS</th>
                    <th>M² TOTALES</th>
                    <th>CONSUMO</th>
                    <th>ALCANCE</th>
                </tr>
            </thead>
            <tbody>
                <tr className='font-archivo'>
                    <td>1205</td>
                    <td>23</td>
                    <td>1228</td>
                    <td> - </td>
                    <td>Ingeniería</td>
                </tr>
            </tbody>
        </table>
    </div>
    </div>
</div>

                </div>
                <div className='my-2 px-2 w-full md:w-1/3 overflow-hidden'>
                {isCarouselOpen6 ? (
  <div
    id="carousel-background"
    onClick={handleCloseCarousel6}
    className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center"
  >
    <div className="relative" style={{ width: '600px', height: '100%' }}>
      <div onClick={(e) => e.stopPropagation()} >
        <Carousel
          showThumbs={false}
          useKeyboardArrows
          showStatus={false}
          showIndicators={false}
          infiniteLoop
        // Debes manejar el estado de currentSlideIndex para seguir el rastro del ítem actual
        >
          {array6.map((image, index) => (
            <div key={index} className="flex justify-center items-center" style={{ height: '400px', width: '600px' }}>
              <img src={image} alt={`Diapositiva ${index}`} />
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
  <div onClick={() => handleImageClick6(0)} className='grayscale h-[350px] w-full mb-5 relative overflow-hidden cursor-pointer'>
    <img src={array6[1]} alt='Imagen actual' style={{ width: '100%', height:'350px', objectFit: 'cover'}} />
  </div>
)}
                    <p className='font-archivo font-black text-2xl mb-1'>DRIBUILD</p>
                    <p className='font-archivo font-light text-m mt-0'>Vivienda unifamiliar en planta baja</p>
            
                    <div className='w-[85px]  h-[1px] mb-3'></div>
                    <div className='font-rubik font-normal text-base lg:text-l mb-5 flex flex-col items-start'>

<p>Cubierta plana, perimetro libre.</p>

<p className="text-with-icon mb-3">
    <svg className="location-icon mr-2 inline-block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" fill="currentColor">
        {/* Este es un ejemplo de un path SVG para un ícono de ubicación, reemplaza con tu propio SVG si es necesario */}
        <path d="M168 0C75.2 0 0 75.2 0 168c0 156.8 152 312 152 312s152-155.2 152-312c0-92.8-75.2-168-168-168zM168 240c-39.8 0-72-32.2-72-72s32.2-72 72-72 72 32.2 72 72-32.2 72-72 72z"/>
    </svg>
    Barrio el Ocho, Pilar.
</p>
<div onClick={() => setIsTableVisible6(!isTableVisible6)} className="flex items-center cursor-pointer">
  <Image
    src="/ArrowCircle.png"
    alt="Toggle table"
    width={30}
    height={30}
    className={isTableVisible6 ? 'rotate' : ''}
  />
</div>
<div className={`table-container ${isTableVisible6 ? 'visible' : 'hidden'}`}>
<div className="table-container">
        <table>
            <thead>
                <tr className='font-archivo'>
                    <th>M² CUB</th>
                    <th>M² SEMICUBIERTOS</th>
                    <th>M² TOTALES</th>
                    <th>CONSUMO</th>
                    <th>ALCANCE</th>
                </tr>
            </thead>
            <tbody>
                <tr className='font-archivo'>
                    <td>184</td>
                    <td>184</td>
                    <td> -</td>
                    <td> 28 kg/m² </td>
                    <td>Ingeniería</td>
                </tr>
            </tbody>
        </table>
    </div>
    </div>
</div>

                   
                </div>

            <div className={`flex flex-row ${showMoreProjects ? 'flex-wrap' : 'hidden'}`}>

                <div className='my-2 px-2 w-full md:w-1/3 overflow-hidden'>
                {isCarouselOpen7 ? (
  <div
    id="carousel-tres"
    onClick={handleCloseCarousel7}
    className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center"
  >
    <div className="relative" style={{ width: '600px', height: '100%' }}>
      <div onClick={(e) => e.stopPropagation()} >
        <Carousel
          showThumbs={false}
          useKeyboardArrows
          showStatus={false}
          showIndicators={false}
          infiniteLoop
        // Debes manejar el estado de currentSlideIndex para seguir el rastro del ítem actual
        >
          {array7.map((image, index) => (
            <div key={index} className="flex justify-center items-center" style={{ height: '400px', width: '600px' }}>
              <img src={image} alt={`Diapositiva ${index}`} />
            </div>
          ))}
        </Carousel>
      </div>
      <button onClick={handleCloseCarousel7} className="close-button">
       &times;
      </button>
    </div>
  </div>
) : (
  <div onClick={() => handleImageClick7(0)} className='grayscale h-[350px] w-full mb-5 relative overflow-hidden cursor-pointer'>
    <img src={array7[0]} alt='Imagen actual' style={{ width: '100%', height:'350px', objectFit: 'cover'}} />
  </div>
)}
                    <p className='font-archivo font-black text-2xl mb-1'>CHOROSTECKY</p>
                    <p className='font-archivo font-light text-m mt-0'>Vivienda unifamiliar en planta baja</p>
            
                    <div className='w-[85px]  h-[1px] mb-3'></div>
                    <div className='font-rubik font-normal text-base lg:text-l mb-5 flex flex-col items-start'>

<p>Cubierta plana, perimetro libre.</p>

<p className="text-with-icon mb-3">
    <svg className="location-icon mr-2 inline-block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" fill="currentColor">
        {/* Este es un ejemplo de un path SVG para un ícono de ubicación, reemplaza con tu propio SVG si es necesario */}
        <path d="M168 0C75.2 0 0 75.2 0 168c0 156.8 152 312 152 312s152-155.2 152-312c0-92.8-75.2-168-168-168zM168 240c-39.8 0-72-32.2-72-72s32.2-72 72-72 72 32.2 72 72-32.2 72-72 72z"/>
    </svg>
    Barrio el Ocho, Pilar.
</p>
<div onClick={() => setIsTableVisible7(!isTableVisible7)} className="flex items-center cursor-pointer">
  <Image
    src="/ArrowCircle.png"
    alt="Toggle table"
    width={30}
    height={30}
    className={isTableVisible7 ? 'rotate' : ''}
  />
</div>
<div className={`table-container ${isTableVisible7 ? 'visible' : 'hidden'}`}>
        <div className="table-container">
        <table>
            <thead>
                <tr className='font-archivo'>
                    <th>M² CUB</th>
                    <th>M² SEMICUBIERTOS</th>
                    <th>M² TOTALES</th>
                    <th>CONSUMO</th>
                    <th>ALCANCE</th>
                </tr>
            </thead>
            <tbody>
                <tr className='font-archivo'>
                    <td>184</td>
                    <td>184</td>
                    <td> -</td>
                    <td> 28 kg/m² </td>
                    <td>Ingeniería</td>
                </tr>
            </tbody>
        </table>
    </div>
    </div>
</div>

                   
                </div>

                <div className='my-2 px-2 w-full md:w-1/3 overflow-hidden'>
                {isCarouselOpen8 ? (
  <div
    id="carousel-tres"
    onClick={handleCloseCarousel8}
    className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center"
  >
    <div className="relative" style={{ width: '600px', height: '100%' }}>
      <div onClick={(e) => e.stopPropagation()} >
        <Carousel
          showThumbs={false}
          useKeyboardArrows
          showStatus={false}
          showIndicators={false}
          infiniteLoop
        // Debes manejar el estado de currentSlideIndex para seguir el rastro del ítem actual
        >
          {array8.map((image, index) => (
            <div key={index} className="flex justify-center items-center" style={{ height: '400px', width: '600px' }}>
              <img src={image} alt={`Diapositiva ${index}`} />
            </div>
          ))}
        </Carousel>
      </div>
      <button onClick={handleCloseCarousel8} className="close-button">
       &times;
      </button>
    </div>
  </div>
) : (
  <div onClick={() => handleImageClick8(0)} className='grayscale h-[350px] w-full mb-5 relative overflow-hidden cursor-pointer'>
    <img src={array8[0]} alt='Imagen actual' style={{ width: '100%', height:'350px', objectFit: 'cover'}} />
  </div>
)}
                    <p className='font-archivo font-black text-2xl mb-1'>CHACRAS</p>
                    <p className='font-archivo font-light text-m mt-0'>Vivienda unifamiliar de dos plantas</p>
         
                    <div className='w-[85px]  h-[1px] mb-3'></div>
                    <div className='font-rubik font-normal text-base lg:text-l mb-5 flex flex-col items-start'>

<p>Cubierta a dos aguas, perimetro libre.</p>

<p className="text-with-icon mb-3">
    <svg className="location-icon mr-2 inline-block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" fill="currentColor">
        {/* Este es un ejemplo de un path SVG para un ícono de ubicación, reemplaza con tu propio SVG si es necesario */}
        <path d="M168 0C75.2 0 0 75.2 0 168c0 156.8 152 312 152 312s152-155.2 152-312c0-92.8-75.2-168-168-168zM168 240c-39.8 0-72-32.2-72-72s32.2-72 72-72 72 32.2 72 72-32.2 72-72 72z"/>
    </svg>
    
</p>
<div onClick={() => setIsTableVisible8(!isTableVisible8)} className="flex items-center cursor-pointer">
  <Image
    src="/ArrowCircle.png"
    alt="Toggle table"
    width={30}
    height={30}
    className={isTableVisible8 ? 'rotate' : ''}
  />
</div>
<div className={`table-container ${isTableVisible8 ? 'visible' : 'hidden'}`}>
           <div className="table-container">
        <table>
            <thead>
                <tr className='font-archivo'>
                    <th>M² CUB</th>
                    <th>M² SEMICUBIERTOS</th>
                    <th>M² TOTALES</th>
                    <th>CONSUMO</th>
                    <th>ALCANCE</th>
                </tr>
            </thead>
            <tbody>
                <tr className='font-archivo'>
                    <td>385</td>
                    <td>131</td>
                    <td> 516</td>
                    <td> 35 kg/m² </td>
                    <td>Ingeniería</td>
                </tr>
            </tbody>
        </table>
    </div>
    </div>
</div>

                   
                </div>

                <div className='my-2 px-2 w-full md:w-1/3 overflow-hidden'>
                {isCarouselOpen9 ? (
  <div
    id="carousel-tres"
    onClick={handleCloseCarousel9}
    className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center"
  >
    <div className="relative" style={{ width: '600px', height: '100%' }}>
      <div onClick={(e) => e.stopPropagation()} >
        <Carousel
          showThumbs={false}
          useKeyboardArrows
          showStatus={false}
          showIndicators={false}
          infiniteLoop
      
        >
          {array9.map((image, index) => (
            <div key={index} className="flex justify-center items-center" style={{ height: '400px', width: '600px' }}>
              <img src={image} alt={`Diapositiva ${index}`} />
            </div>
          ))}
        </Carousel>
      </div>
      <button onClick={handleCloseCarousel9} className="close-button">
       &times;
      </button>
    </div>
  </div>
) : (
  <div onClick={() => handleImageClick9(0)} className='grayscale h-[350px] w-full mb-5 relative overflow-hidden cursor-pointer'>
    <img src={array9[0]} alt='Imagen actual' style={{ width: '100%', height:'350px', objectFit: 'cover'}} />
  </div>
)}
                    <p className='font-archivo font-black text-2xl mb-1'>P&D</p>
                    <p className='font-archivo font-light text-m mt-0'>Vivienda unifamiliar en planta baja,mas ampliacion en planta alta</p>
      
                    <div className='w-[85px]  h-[1px] mb-3'></div>
                    <div className='font-rubik font-normal text-base lg:text-l mb-5 flex flex-col items-start'>

<p>Cubierta a dos aguas, perimetro libre.</p>

<p className="text-with-icon mb-3">
    <svg className="location-icon mr-2 inline-block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" fill="currentColor">
        {/* Este es un ejemplo de un path SVG para un ícono de ubicación, reemplaza con tu propio SVG si es necesario */}
        <path d="M168 0C75.2 0 0 75.2 0 168c0 156.8 152 312 152 312s152-155.2 152-312c0-92.8-75.2-168-168-168zM168 240c-39.8 0-72-32.2-72-72s32.2-72 72-72 72 32.2 72 72-32.2 72-72 72z"/>
    </svg>
    La Rinconada, Ibarlucea.
</p>
<div onClick={() => setIsTableVisible9(!isTableVisible9)} className="flex items-center cursor-pointer">
  <Image
    src="/ArrowCircle.png"
    alt="Toggle table"
    width={30}
    height={30}
    className={isTableVisible9 ? 'rotate' : ''}
  />
</div>
<div className={`table-container ${isTableVisible9 ? 'visible' : 'hidden'}`}>
              <div className="table-container">
        <table>
            <thead>
                <tr className='font-archivo'>
                    <th>M² CUB</th>
                    <th>M² SEMICUBIERTOS</th>
                    <th>M² TOTALES</th>
                    <th>CONSUMO</th>
                    <th>ALCANCE</th>
                </tr>
            </thead>
            <tbody>
                <tr className='font-archivo'>
                    <td>165</td>
                    <td>231</td>
                    <td>396</td>
                    <td> kg/m² </td>
                    <td>Ingeniería</td>
                </tr>
            </tbody>
        </table>
    </div>
    </div>
</div>

                   
                </div>

                </div>
         </div>

</div>
   <div className="flex justify-center">
        <button
          className="font-archivo mx-9 font-black uppercase bg-[#332cba] px-6 py-3 grid place-content-center mt-5 w-fit rounded-lg"
          onClick={() => setShowMoreProjects(!showMoreProjects)}
        >
          {showMoreProjects ? 'VER MENOS PROYECTOS' : 'VER MÁS PROYECTOS'}
        </button>
      </div>

                 </div>
     
)}
