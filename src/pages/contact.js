import React from 'react'
import ContactSection from '../../components/ContactSection'
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'

export default function contact({setOpen}) {
    return (
        <div>
            <Navbar setOpen={setOpen}/>
            <div className='md:-mt-40'>
                <ContactSection />
            </div>
            <Footer />
        </div>
    )
}
