import { Archivo, Rubik, Unbounded, } from 'next/font/google'
import '@/styles/globals.css'
import '@/styles/animations.css'
import { useState } from 'react'
import Menu from '../../components/Menu'
import CustomCursor from '../../components/CustomCursor'

const archivo = Archivo({
  subsets: ['latin'],
  weight: ['400', '700', '900'],
  variable: '--font-archivo',
})
const rubik = Rubik({
  subsets: ['latin'],
  weight: ['300', '400', '700'],
  variable: '--font-rubik',
})
const unbounded = Unbounded({
  subsets: ['latin'],
  weight: ['300', '400', '700', '800', '900'],
  variable: '--font-unbounded',
})


export default function MyApp({ Component, pageProps }) {

  const [open, setOpen] = useState(false)

  return (
    <main className={`${archivo.variable} ${rubik.variable} ${unbounded.variable} font-sans `}>
      <Component {...pageProps} {...{ setOpen }} />
      <Menu {...{ setOpen, open }} />
      {/* <CustomCursor /> */}
    </main>
  )
}