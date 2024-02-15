<div className='px-2 w-full md:w-1/2 overflow-hidden'>
{isMobile ? (
// Para dispositivos móviles: Al hacer clic en la imagen, muestra la siguiente imagen
<div onClick={goToNextSlideMobile8} className='grayscale h-[230px] w-full mb-5 relative overflow-hidden cursor-pointer'>
<img 
src={array8[currentIndex8]} 
alt={`Imagen ${currentIndex8}`} 
style={{ width: '100%', height: '230px', objectFit: 'cover' }}
/>
</div>
) : (
// Para escritorio: Si isCarouselOpen8 es true, muestra el carousel, si no, muestra la imagen estática que puede ser clickeada para abrir el carousel
isCarouselOpen8 ? (
<div
id="carousel-tres"
onClick={handleCloseCarousel8}
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
{array8.map((image, index) => (
<div key={index} className="flex justify-center items-center" style={{ height: '100%', width: '600px' }}>
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
<div onClick={() => setIsCarouselOpen8(true)} className='grayscale h-[300px] w-full mb-5 relative overflow-hidden cursor-pointer'>
<img src={array8[0]} alt='Imagen de inicio' style={{ width: '100%', height: '300px', objectFit: 'cover'}} />
</div>
)
)}
    <p className='font-archivo font-black text-2xl mb-1'>CHACRAS</p>
    <p className='font-archivo font-light text-m mt-0'>Vivienda unifamiliar de dos plantas</p>

    <div className='w-[85px]  h-[1px] mb-3'></div>
    <div className='font-rubik font-normal text-base lg:text-l mb-5 flex flex-col items-start'>



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
<div className={`data-list ${isTableVisible8 ? 'visible' : 'hidden'}`}>
<div class="data-list">
<p>Sup.Cubierta: 385m²</p>
<p>Sup.Semicubierta: 131m²</p>
<p>Sup. Total: 516m²</p>
<p>Consumo: 35 kg/m²</p>
<p>Alcance: Ingeniería de desarrollo</p>
</div>
</div>
</div>

   
</div>

<div className='px-2 w-full md:w-1/2 overflow-hidden'>
{isMobile ? (
// Para dispositivos móviles: Al hacer clic en la imagen, muestra la siguiente imagen
<div onClick={goToNextSlideMobile9} className='grayscale h-[230px] w-full mb-5 relative overflow-hidden cursor-pointer'>
<img 
src={array9[currentIndex9]} 
alt={`Imagen ${currentIndex9}`} 
style={{ width: '100%', height: '230px', objectFit: 'cover' }}
/>
</div>
) : (
// Para escritorio: Si isCarouselOpen9 es true, muestra el carousel, si no, muestra la imagen estática que puede ser clickeada para abrir el carousel
isCarouselOpen9 ? (
<div
id="carousel-tres"
onClick={handleCloseCarousel9}
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
{array9.map((image, index) => (
<div key={index} className="flex justify-center items-center" style={{ height: '100%', width: '600px' }}>
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
<div onClick={() => setIsCarouselOpen9(true)} className='grayscale h-[300px] w-full mb-5 relative overflow-hidden cursor-pointer'>
<img src={array9[0]} alt='Imagen de inicio' style={{ width: '100%', height: '300px', objectFit: 'cover'}} />
</div>
)
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
<div className={`data-list ${isTableVisible9 ? 'visible' : 'hidden'}`}>
<div class="data-list">
<p>M² Cub: 165</p>
<p>M² Semicubiertos: 231</p>
<p>M² Totales: 396</p>

<p>Alcance: Ingeniería</p>
</div>
</div>
</div>

    </div>