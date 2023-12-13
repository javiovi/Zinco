import React, { useRef, useState } from 'react'
import Arrow from '../Arrow'
import Swal from 'sweetalert2'
import emailjs from '@emailjs/browser';


export default function ContactForm() {
    const [Option, setOption] = useState('Empresa / Profesional independiente / Usuario final');
    const [displaySelect, setDisplaySelect] = useState(false);

    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const phoneRef = useRef(null);
    const messageRef = useRef(null);

    const options = ['Empresa', 'Profesional independiente', 'Usuario final'];

    const handleEnviarClick = () => {
        // Log the input values using refs

        if (nameRef.current.value == '' || emailRef.current.value == '') {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Completa todos los campos!',
                // backdrop:false,
            })

        } else {

            const fullText = {
                from_name: nameRef.current.value,
                subject: Option,
                email: emailRef.current.value,
                phone: phoneRef.current.value,
                message: messageRef.current.value,
            }


            // HABRIA QUE AGREGAR OTRA FUNCION IGUAL, PERO DIRIGIDA A SEGUNDO MAIL
            // (ESTE VA TMARIN)
            
            emailjs.send('service_65hr7r7', 'template_p7t5tkk', fullText, 'ncoUky0uBPlsCDpZS')
                .then((result) => {

                    // erase form values
                    nameRef.current.value = ''
                    setOption('Empresa / Profesional independiente / Usuario final')
                    emailRef.current.value = ''
                    phoneRef.current.value = ''
                    messageRef.current.value = ''

                    console.log(result.text);
                }, (error) => {
                    console.log(error.text);
                });




            Swal.fire({
                position: 'top-end',
                icon: 'success',
                showConfirmButton: false,
                text: 'Enviado Correctamente!',
                timer: 1500
            })

            // console.log(fullText)

        }
    };



    return (
        <div className='font-unbounded font-extrabold text-sm tracking-wider mb-9 xl:max-w-[80%]'>
            <div className='mb-9'>
                <p>NOMBRE & APELLIDO</p>
                <input ref={nameRef} className="mt-1 mb-1 appearance-none bg-transparent border-none w-full text-[#d5d5d5] italic placeholder-[#686868] mr-3 py-1 leading-tight focus:outline-none  md:text-xl font-rubik font-light" type="text" placeholder='"Juan Perez"' aria-label="Full name" />
                <div className='block h-[2px] w-full bg-[#3e3391]'></div>
            </div>
            <div className='mb-9 relative'>
                <p>SELECCIONAR OPCIÓN</p>
                <div onClick={() => setDisplaySelect(!displaySelect)} className="flex cursor-pointer justify-between items-end mt-1 mb-1 appearance-none bg-transparent border-none w-full italic text-[#686868] mr-3 py-1 leading-tight focus:outline-none  md:text-xl font-rubik font-light"  >
                    <p>{Option}</p>
                    <div className='rotate-[135deg]'>
                        <Arrow extrasmall purpleBG />
                    </div>
                </div>
                <div onClick={() => setDisplaySelect(!displaySelect)} className={`w-full flex flex-col top-full h-auto bg-[#454545] absolute ${!displaySelect && 'hidden'}`} >
                    {options.map((item, key) => <div key={key} onClick={() => setOption(item)} className={` w-full px-2 py-2 cursor-pointer font-rubik font-light duration-300 hover:bg-slate-400`}>{item}</div>
                    )}
                </div>
                <div className='block h-[2px] w-full bg-[#3e3391]'></div>
            </div>
            <div className='mb-9'>
                <p>EMAIL</p>
                <input ref={emailRef} className="mt-1 mb-1 appearance-none bg-transparent border-none w-full text-[#d5d5d5] italic placeholder-[#686868] mr-3 py-1 leading-tight focus:outline-none  md:text-xl font-rubik font-light" type="text" placeholder='"juanperez@gmail.com"' aria-label="Full name" />
                <div className='block h-[2px] w-full bg-[#3e3391]'></div>
            </div>
            <div className='mb-9'>
                <p>TELÉFONO O NÚMERO DE CELULAR</p>
                <input ref={phoneRef} className="mt-1 mb-1 appearance-none bg-transparent border-none w-full text-[#d5d5d5] italic placeholder-[#686868] mr-3 py-1 leading-tight focus:outline-none  md:text-xl font-rubik font-light" type="text" placeholder='"+54 341 0 000 000"' aria-label="Full name" />
                <div className='block h-[2px] w-full bg-[#3e3391]'></div>
            </div>
            <div className='mb-9'>
                <p>CONSULTA</p>
                <input ref={messageRef} className=" mb-3 appearance-none bg-transparent border-none w-full text-[#d5d5d5] italic placeholder-[#686868] mr-3 py-1 leading-tight focus:outline-none   md:text-xl font-rubik font-light" type="text" placeholder='"Escribe tu consulta aquí..."' aria-label="Full name" />
                <div className='block h-[2px] w-full bg-[#3e3391]'></div>
            </div>
            <div onClick={handleEnviarClick} className='flex justify-end items-center text-xl gap-5 cursor-pointer'>
                <p>ENVIAR</p>
                <div className=' rotate-90'>
                    <Arrow small />
                </div>
            </div>
        </div>
    )
}
