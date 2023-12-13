import Head from 'next/head'
import Navbar from '../../../components/Navbar'
import SmoothScroll from '../../../components/Helpers/SmoothScroll'
import Footer from '../../../components/Footer'
import Image from 'next/image'
import Arrow from '../../../components/Arrow'
import Link from 'next/link'

export default function BlogPost({ setOpen }) {
  SmoothScroll()

  return (
    <>
      <Head>
        <title>Blog Post</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='text-white relative'>
        <Navbar setOpen={setOpen} header />

        {/*  */}


        <div className='flex mt-12 xl:mt-24 mb-24 md:mb-48 gap-10 items-center xl:items-start flex-col-reverse xl:flex-row px-[7.3vw] xl:px-0'>

          <div className='flex-1 mx-auto'>
            <Image className='z-10 grayscale' alt='Steel1' src='/servicios.png' quality={100} width={835} height={635} />
          </div>

          <div className='flex-1 pt-5 xl:pr-[3vw] 2xl:pr-[7.2vw] space-y-10  xl:max-w-none mx-auto text-lg font-archivo font-black'>
            <Link href={'/blog'} className='flex items-center gap-5 mb-20'>
              <div>
              <div className='-rotate-[135deg] hidden md:block'><Arrow /></div>
              <div className='-rotate-[135deg] md:hidden '><Arrow  small/></div>
              </div>
              <p className=''>VOLVER ATRÁS</p>
            </Link>
            <p className='text-[#493BBB] mb-4'>10/07/2023</p>
            <h1 className='text-[8vw] leading-none sm:text-[5vw] xl:text-[3.5vw] 2xl:text-[55px] mb-10 z-10'>
              ¿PUEDO INSTALAR EL AIRE ACONDICIONADO EN UNA PARED DE STEEL FRAMING?
            </h1>
            <p className='font-rubik font-normal text-lg md:text-xl'>Es una pregunta frecuente entre quienes están planeando construir con este sistema, por eso le consultamos a los especialistas de Steelplex, la unidad de negocio de Grupo Edisur dedicada a la construcción en seco, si se puede o no.</p>
          </div>

        </div>

        <div className='px-[7.3vw] xl:px-[7vw] mb-32'>
          <div className='mb-14 mx-auto flex flex-col lg:flex-row justify-center gap-14 w-full max-w-[1500px] font-rubik font-normal text-lg md:text-xl'>
            <div className="flex-1 space-y-10">
              <p>La construcción en seco aún resulta bastante novedosa para muchos en nuestro país y esto genera una serie de dudas y mitos que deberíamos quitarnos de encima consultando a los que de verdad saben. Por eso, les preguntamos a los especialistas de Steelplex, la unidad de negocio de Grupo Edisur dedicada al Steel Framing, una de las interrogantes que suelen surgir en estos casos: ¿Puedo instalar el aire acondicionado en una pared de este sistema? </p>
              <p>La respuesta es contundente: ¡claro que sí! Ellos sugieren que, al igual que ocurre con el sistema húmedo, resulta importante contactar con alguien que sepa hacerlo y que tome todos los recaudos necesarios para amurar una estructura que suele tener un peso considerable.</p>
            </div>
            <div className="flex-1 space-y-10">
              <p>¿Cómo instalarlo? <br /> Las paredes construidas con esta técnica tienen en su interior perfiles de acero galvanizado, que son los que permiten armar la estructura y le aportan rigidez y resistencia al muro. </p>
              <p>Cuando querés instalar el aire acondicionado en una pared de Steel Framing, al igual que cualquier otro elemento que tenga más de 15 kilogramos, debés asegurarte de que las ménsulas que lo sostienen queden atornilladas a esos perfiles.</p>
            </div>
          </div>

          <div className='mx-auto flex flex-col lg:flex-row justify-center gap-14 w-full max-w-[1500px] font-rubik font-normal text-lg md:text-xl'>
            <div className="flex-1 space-y-10 bg-indigo-600 w-full min-h-[264px]">
              {/* image */}
            </div>
            <div className="flex-1 space-y-10">
              <p>¿Cómo instalarlo? <br /> Las paredes construidas con esta técnica tienen en su interior perfiles de acero galvanizado, que son los que permiten armar la estructura y le aportan rigidez y resistencia al muro. </p>
              <p>Cuando querés instalar el aire acondicionado en una pared de Steel Framing, al igual que cualquier otro elemento que tenga más de 15 kilogramos, debés asegurarte de que las ménsulas que lo sostienen queden atornilladas a esos perfiles.</p>
            </div>
          </div>

        </div>

        <Footer />
      </div>
    </>
  )
}
