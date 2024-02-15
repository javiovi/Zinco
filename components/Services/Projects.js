
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


    const [isMobile, setIsMobile] = useState(false); // Estado para identificar si estamos en modo móvil
    const [currentIndex1, setCurrentIndex1] = useState(0);
    const [currentIndex2, setCurrentIndex2] = useState(0);
    const [currentIndex3, setCurrentIndex3] = useState(0);
    const [currentIndex4, setCurrentIndex4] = useState(0);
    const [currentIndex5, setCurrentIndex5] = useState(0);
    const [currentIndex6, setCurrentIndex6] = useState(0);
    const [currentIndex7, setCurrentIndex7] = useState(0);
    const [currentIndex8, setCurrentIndex8] = useState(0);
    const [currentIndex9, setCurrentIndex9] = useState(0);
    
    



    // Establece si estamos en modo móvil basado en el ancho de la ventana
    useEffect(() => {
      const updateIsMobile = () => setIsMobile(window.innerWidth < 768);
      updateIsMobile(); // Actualiza al montar
      window.addEventListener('resize', updateIsMobile); // y en cambios de tamaño
      return () => window.removeEventListener('resize', updateIsMobile);
    }, []);
    
    // Función para cambiar a la siguiente imagen en móviles
    const goToNextSlideMobile1 = () => {
      setCurrentIndex1(prevIndex => (prevIndex + 1) % array1.length);

    };
    const goToNextSlideMobile2 = () => {
      setCurrentIndex2(prevIndex => (prevIndex + 1) % array2.length);

    };
    const goToNextSlideMobile3 = () => {
      setCurrentIndex3(prevIndex => (prevIndex + 1) % array3.length);

    };
    const goToNextSlideMobile4 = () => {
      setCurrentIndex4(prevIndex => (prevIndex + 1) % array4.length);

    };
    const goToNextSlideMobile5 = () => {
      setCurrentIndex5(prevIndex => (prevIndex + 1) % array5.length);

    };
    const goToNextSlideMobile6 = () => {
      setCurrentIndex6(prevIndex => (prevIndex + 1) % array6.length);

    };
    const goToNextSlideMobile7 = () => {
      setCurrentIndex7(prevIndex => (prevIndex + 1) % array7.length);

    };
    const goToNextSlideMobile8 = () => {
      setCurrentIndex8(prevIndex => (prevIndex + 1) % array8.length);

    };
    const goToNextSlideMobile9 = () => {
      setCurrentIndex9(prevIndex => (prevIndex + 1) % array9.length);

    };
    
    
    
    const array1 = ['/vida1.jpg', '/vida6.jpg']
    const array2 = ['/mdp3.jpeg', '/mdp1.jpeg',];
    const array3 = ['/poggi4.jpg', '/poggi3.jpg', '/poggi2.jpg', ];
    const array4 = [ '/sanchez1.jpg', '/sanchez3.jpg','/sanchez2.jpg' ];
    const array5 = [ '/natale1.jpg','/natale3.jpg','/natale2.jpg'];
    const array6 = [ '/dribuild0.jpg','/dribuild1.jpg','/dribuild2.jpg',];
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
  {isMobile ? (
    // Para dispositivos móviles: Al hacer clic en la imagen, muestra la siguiente imagen
    <div onClick={goToNextSlideMobile4} className='grayscale h-[230px] w-full mb-5 relative overflow-hidden cursor-pointer'>
      <img 
        src={array4[currentIndex4]} 
        alt={`Imagen ${currentIndex4}`} 
        style={{ width: '100%', height: '230px', objectFit: 'cover' }}
      />
    </div>
  ) : (
    // Para escritorio: Si isCarouselOpen4 es true, muestra el carousel, si no, muestra la imagen estática que puede ser clickeada para abrir el carousel
    isCarouselOpen4 ? (
      <div
        id="carousel-background1"
        onClick={handleCloseCarousel4}
        className="fixed inset-0 bg-black bg-opacity-70 z-50 flex justify-center items-center"
      >
        <div className="relative" style={{ width: '670px', height: '100%' }}>
          <div onClick={(e) => e.stopPropagation()}>
            <Carousel
              showThumbs={false}
              useKeyboardArrows
              showStatus={false}
              showIndicators={false}
              infiniteLoop
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
      <div onClick={() => setIsCarouselOpen4(true)} className='grayscale h-[310px] w-full mb-1 relative overflow-hidden cursor-pointer'>
        <img src={array4[0]} alt='Imagen de inicio' style={{ width: '100%', height: '300px', objectFit: 'cover'}} />
      </div>
    )
  )}


                    <p className='font-archivo font-black text-2xl mb-1'>SANCHEZ</p>
                    <p className='font-archivo font-light text-m mt-0'>Vivienda unifamiliar de dos plantas.</p>

                
                    <div className='w-[85px] h-[1px] mb-2'></div>
                    <div className='font-rubik font-normal text-base lg:text-l mb-5 flex flex-col items-start'>


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
<div className={`data-list ${isTableVisible2 ? 'visible' : 'hidden'}`}>
<div class="data-list">
  <p>Sup. Cubierta: 332m²</p>
  <p>Sup. Semicubierta: 103m²</p>
  <p>Sup. Total: 435m²</p>
  <p>Consumo: 28 kg/m²</p>
  <p>Alcance: Ingeniería de detalle</p>
</div>
</div>
</div>
                 {/*    <div onClick={() => setp3Large(!p3Large)} className='h-10 w-10 rounded-full cursor-pointer border border-white grid place-content-center '><p className='leading-none text-4xl relative -top-1'>{p3Large ? '-' : '+'}</p></div>*/}
                </div>
                <div className='my-2 px-2 w-full md:w-1/3 overflow-hidden'>
                {isMobile ? (
    // Para dispositivos móviles: Al hacer clic en la imagen, muestra la siguiente imagen
    <div onClick={goToNextSlideMobile5} className='grayscale h-[230px] w-full mb-5 relative overflow-hidden cursor-pointer'>
      <img 
        src={array5[currentIndex5]} 
        alt={`Imagen ${currentIndex5}`} 
        style={{ width: '100%', height: '230px', objectFit: 'cover' }}
      />
    </div>
  ) : (
    // Para escritorio: Si isCarouselOpen5 es true, muestra el carousel, si no, muestra la imagen estática que puede ser clickeada para abrir el carousel
    isCarouselOpen5 ? (
      <div
        id="carousel-background1"
        onClick={handleCloseCarousel5}
        className="fixed inset-0 bg-black bg-opacity-70 z-50 flex justify-center items-center"
      >
        <div className="relative" style={{ width: '660px', height: '100%' }}>
          <div onClick={(e) => e.stopPropagation()}>
            <Carousel
              showThumbs={false}
              useKeyboardArrows
              showStatus={false}
              showIndicators={false}
              infiniteLoop
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
      <div onClick={() => setIsCarouselOpen5(true)} className='grayscale h-[300px] w-full mb-5 relative overflow-hidden cursor-pointer'>
        <img src={array5[0]} alt='Imagen de inicio' style={{ width: '100%', height: '300px', objectFit: 'cover'}} />
      </div>
    )
  )}


                    <p className='font-archivo font-black text-2xl mb-1'>NATALE</p>
                    <p className='font-archivo font-light text-m mt-0'>Vivienda unifamiliar en planta baja</p>
           
                    <div className='w-[85px] h-[1px] mb-3'></div>
                    <div className='font-rubik font-normal text-base lg:text-l mb-5 flex flex-col items-start'>



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
<div className={`data-list ${isTableVisible1 ? 'visible' : 'hidden'}`}>
<div class="data-list">
  <p>Sup. Cubierta: 155m²</p>
  <p>Sup. Semicubierta: 95m²</p>
  <p>Sup. Total: 250m²</p>
  <p>Consumo: 22 kg/m²</p>
  <p>Alcance: Ingeniería de detalle y ejecución de obra.</p>
</div>
    </div>
</div>

                 {/*    <div onClick={() => setp3Large(!p3Large)} className='h-10 w-10 rounded-full cursor-pointer border border-white grid place-content-center '><p className='leading-none text-4xl relative -top-1'>{p3Large ? '-' : '+'}</p></div>*/}

                </div>

                <div className='my-2 px-2 w-full md:w-1/3 overflow-hidden'>
                {isMobile ? (
    // Para dispositivos móviles: Al hacer clic en la imagen, muestra la siguiente imagen
    <div onClick={goToNextSlideMobile3} className='grayscale h-[230px] w-full mb-5 relative overflow-hidden cursor-pointer'>
      <img 
        src={array3[currentIndex3]} 
        alt={`Imagen ${currentIndex3}`} 
        style={{ width: '100%', height: '230px', objectFit: 'cover' }}
      />
    </div>
  ) : (
    // Para escritorio: Si isCarouselOpen3 es true, muestra el carousel, si no, muestra la imagen estática que puede ser clickeada para abrir el carousel
    isCarouselOpen3 ? (
      <div
        id="carousel-background1"
        onClick={handleCloseCarousel3}
        className="fixed inset-0 bg-black bg-opacity-70 z-50 flex justify-center items-center"
      >
        <div className="relative" style={{ width: '660px', height: '100%' }}>
          <div onClick={(e) => e.stopPropagation()}>
            <Carousel
              showThumbs={false}
              useKeyboardArrows
              showStatus={false}
              showIndicators={false}
              infiniteLoop
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
      <div onClick={() => setIsCarouselOpen3(true)} className='grayscale h-[300px] w-full mb-5 relative overflow-hidden cursor-pointer'>
        <img src={array3[0]} alt='Imagen de inicio' style={{ width: '100%', height: '300px', objectFit: 'cover'}} />
      </div>
    )
  )}
                    <p className='font-archivo font-black text-2xl mb-1'>POGGI</p>
                    <p className='font-archivo font-light text-m mt-0'>Vivienda unifamiliar de dos plantas</p>
              <div className='w-[85px] h-[1px] mb-3'></div>
                    <div className='font-rubik font-normal text-base lg:text-l mb-5 flex flex-col items-start'>


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
<div className={`data-list ${isTableVisible3 ? 'visible' : 'hidden'}`}>
<div class="data-list">
  <p>Sup. Cubierta: 342m²</p>
  <p>Sup. Semicubierta: 133m²</p>
  <p>Sup. Total: 495m²</p>
  <p>Consumo: 28 kg/m²</p>
  <p>Alcance: Ingeniería de detalle.</p>
</div>
</div>
</div>

                 {/*    <div onClick={() => setp3Large(!p3Large)} className='h-10 w-10 rounded-full cursor-pointer border border-white grid place-content-center '><p className='leading-none text-4xl relative -top-1'>{p3Large ? '-' : '+'}</p></div>*/}

                </div>
         


                <div className='my-2 px-2 w-full md:w-1/3 overflow-hidden'>
                {isMobile ? (
    // Para dispositivos móviles: Al hacer clic en la imagen, muestra la siguiente imagen
    <div onClick={goToNextSlideMobile1} className='grayscale h-[230px] w-full mb-5 relative overflow-hidden cursor-pointer'>
      <img 
        src={array1[currentIndex1]} 
        alt={`Imagen ${currentIndex1}`} 
        style={{ width: '100%', height: '230px', objectFit: 'cover' }}
      />
    </div>
  ) : (
    // Para escritorio: Si isCarouselOpen4 es true, muestra el carousel, si no, muestra la imagen estática que puede ser clickeada para abrir el carousel
    isCarouselOpen1 ? (
      <div
        id="carousel-background"
        onClick={handleCloseCarousel1}
        className="fixed inset-0 bg-black bg-opacity-70 z-50 flex justify-center items-center"
      >
        <div className="relative" style={{ width: '630px', height: '100%' }}>
          <div onClick={(e) => e.stopPropagation()}>
            <Carousel
              showThumbs={false}
              useKeyboardArrows
              showStatus={false}
              showIndicators={false}
              infiniteLoop
            >
              {array1.map((image, index) => (
                <div key={index} className="flex justify-center items-center" style={{ height: '330px', width: '600px' }}>
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
      <div onClick={() => setIsCarouselOpen1(true)} className='grayscale h-[300px] w-full mb-5 relative overflow-hidden cursor-pointer'>
        <img src={array1[0]} alt='Imagen de inicio' style={{ width: '100%', height: '300px', objectFit: 'cover'}} />
      </div>
    )
  )}
                    <p className='font-archivo font-black text-2xl mb-1'>VIDA</p>
                    <p className='font-archivo font-light text-m mt-0'>Vivienda unifamiliar planta baja</p>
            
                    <div className='w-[85px]  h-[1px] mb-3'></div>
                    <div className='font-rubik font-normal text-base lg:text-l mb-5 flex flex-col items-start'>


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
<div className={`data-list ${isTableVisible4 ? 'visible' : 'hidden'}`}>
<div class="data-list">
  <p>Sup.Cubierta: 385m²</p>
  <p>Sup.Semicubierta: 131m²</p>
  <p>Sup.Total: 516m²</p>
  <p>Consumo: 35 kg/m²</p>
  <p>Alcance: Ingeniería de detalle y ejecución de obra.</p>
</div>
    </div>
</div>


              {/*      <div onClick={() => setp1Large(!p1Large)} className='h-10 w-10 rounded-full cursor-pointer border border-white grid place-content-center '><p className='leading-none text-4xl relative -top-1'>{p1Large ? '-' : '+'}</p></div>*/}

                </div>

                <div className='my-2 px-2 w-full md:w-1/3 overflow-hidden'>
                {isMobile ? (
    // Para dispositivos móviles: Al hacer clic en la imagen, muestra la siguiente imagen
    <div onClick={goToNextSlideMobile2} className='grayscale h-[230px] w-full mb-5 relative overflow-hidden cursor-pointer'>
      <img 
        src={array2[currentIndex2]} 
        alt={`Imagen ${currentIndex2}`} 
        style={{ width: '100%', height: '230px', objectFit: 'cover' }}
      />
    </div>
  ) : (
    // Para escritorio: Si isCarouselOpen4 es true, muestra el carousel, si no, muestra la imagen estática que puede ser clickeada para abrir el carousel
    isCarouselOpen2 ? (
      <div
        id="carousel-background"
        onClick={handleCloseCarousel2}
        className="fixed inset-0 bg-black bg-opacity-70 z-50 flex justify-center items-center"
      >
        <div className="relative" style={{ width: '630px', height: '100%' }}>
          <div onClick={(e) => e.stopPropagation()}>
            <Carousel
              showThumbs={false}
              useKeyboardArrows
              showStatus={false}
              showIndicators={false}
              infiniteLoop
            >
              {array2.map((image, index) => (
                <div key={index} className="flex justify-center items-center" style={{ height: '100%', width: '600px' }}>
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
      <div onClick={() => setIsCarouselOpen2(true)} className='grayscale h-[300px] w-full mb-5 relative overflow-hidden cursor-pointer'>
        <img src={array2[0]} alt='Imagen de inicio' style={{ width: '100%', height: '300px', objectFit: 'cover'}} />
      </div>
    )
  )}
                    <p className='font-archivo font-black text-2xl mb-1'>MDP</p>
                    <p className='font-archivo font-light text-m mt-0'>Complejo habitacional de 4 plantas</p>
           
                    <div className='w-[85px]  h-[1px] mb-3'></div>
                    <div className='font-rubik font-normal text-base lg:text-l mb-5 flex flex-col items-start'>



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
<div className={`data-list ${isTableVisible5 ? 'visible' : 'hidden'}`}>
<div class="data-list">
  <p>Sup.Cubierta: 1205m²</p>
  <p>Sup.Semicubierta: 23m²</p>
  <p>Sup.Total: 1228m²</p>
  
  <p>Alcance: Ingeniería de detalle.</p>
</div>
    </div>
</div>

                </div>
                <div className='my-2 px-2 w-full md:w-1/3 overflow-hidden'>
                {isMobile ? (
    
    <div onClick={goToNextSlideMobile6} className='grayscale h-[230px] w-full mb-5 relative overflow-hidden cursor-pointer'>
      <img 
        src={array6[currentIndex6]} 
        alt={`Imagen ${currentIndex6}`} 
        style={{ width: '100%', height: '230px', objectFit: 'cover' }}
      />
    </div>
  ) : (
    // Para escritorio: Si isCarouselOpen4 es true, muestra el carousel, si no, muestra la imagen estática que puede ser clickeada para abrir el carousel
    isCarouselOpen6 ? (
      <div
        id="carousel-background"
        onClick={handleCloseCarousel6}
        className="fixed inset-0 bg-black bg-opacity-70 z-50 flex justify-center items-center"
      >
        <div className="relative" style={{ width: '650px', height: '100%' }}>
          <div onClick={(e) => e.stopPropagation()}>
            <Carousel
              showThumbs={false}
              useKeyboardArrows
              showStatus={false}
              showIndicators={false}
              infiniteLoop
            >
              {array6.map((image, index) => (
                <div key={index} className="flex justify-center items-center" style={{ height: '100%', width: '600px' }}>
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
      <div onClick={() => setIsCarouselOpen6(true)} className='grayscale h-[300px] w-full mb-5 relative overflow-hidden cursor-pointer'>
        <img src={array6[0]} alt='Imagen de inicio' style={{ width: '100%', height: '300px', objectFit: 'cover'}} />
      </div>
    )
  )}
                    <p className='font-archivo font-black text-2xl mb-1'>CASA PS</p>
                    <p className='font-archivo font-light text-m mt-0'>Vivienda unifamiliar en planta baja</p>
            
                    <div className='w-[85px]  h-[1px] mb-3'></div>
                    <div className='font-rubik font-normal text-base lg:text-l mb-5 flex flex-col items-start'>



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
<div className={`data-list ${isTableVisible6 ? 'visible' : 'hidden'}`}>
<div class="data-list">
  <p>Sup.Cubierta: 184m²</p>
  <p>Sup.Semicubierta: 184m²</p>

  <p>Consumo: 28 kg/m²</p>
  <p>Alcance: Ingeniería de detalle</p>
</div>
    </div>
</div>

                   
                </div>

            <div className={`flex flex-row ${showMoreProjects ? 'flex-wrap' : 'hidden'}`}>
   {/*  */}
  
  
            
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
