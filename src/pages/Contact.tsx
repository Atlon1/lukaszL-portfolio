import React, {useState, useEffect, useRef} from 'react';
import {BsArrowRight} from "react-icons/bs";
import {motion} from "framer-motion";
import {fadeIn} from "../variants";
import Bulb from "../components/Bulb";
import emailjs from '@emailjs/browser';

const Contact = () => {

    const formData = useRef();

    const validateName = (name: string) => {
        if (name.length < 3) {
            return "Imię jest za krótkie!"
        } else if (name.length > 20) {
            return "Imię jest za długi!"
        } else if (!name) {
            return "Musisz podać imię!"
        }
        return null
    }

    const validateEmail = (email: string) => {
        if (!email) {
            return "Musisz podać email!"
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
            return "Email jest nieprawidłowy!"
        } else if (email.length > 50) {
            return "Email jest za długi!"
        }
        return null
    }

    const validateSubject = (subject: string) => {
        if (subject.length < 3) {
            return "Temat jest za krótki!"
        } else if (subject.length > 50) {
            return "Temat jest za długi!"
        } else if (!subject) {
            return "Musisz podać temat!"
        }
        return null
    }

    const validateMessage = (message: string) => {
        if (message.length < 3) {
            return "Wiadomość jest za krótka!"
        } else if (message.length > 500) {
            return "Wiadomość jest za długa!"
        } else if (!message) {
            return "Musisz podać wiadomość!"
        }
        return null
    }


    const [form, setForm] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    })

    const [error, setError] = useState<{ name: string | null, email: string | null, subject: string | null, message: string | null }>({
        name: null,
        email: null,
        subject: null,
        message: null
    })
    const [thanks, setThanks] = useState(<div></div>)
    const [borderColor, setBorderColor] = useState('')

    const handleChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const handleSend = (e: any) => {
        e.preventDefault()
        const nameError = validateName(form.name)
        const emailError = validateEmail(form.email)
        const subjectError = validateSubject(form.subject)
        const messageError = validateMessage(form.message)

        if (nameError || emailError || subjectError || messageError) {
            setError({
                ...error,
                name: nameError,
                email: emailError,
                subject: subjectError,
                message: messageError
            })
            setBorderColor('1px solid red')
        } else {
            setError({
                ...error,
                name: null,
                email: null,
                subject: null,
                message: null
            })
            setBorderColor('')
            emailjs.sendForm('service_1d5lzg4', 'template_qn9et3x', formData.current as any, 'WfT1Ydqf0OJBucEf-')

            setForm({...form, name: '', email: '', subject: '', message: ''})

            return setThanks(
                <div className='text-green-500'>
                    Dziękuje za wiadomość!!
                </div>
            )
        }
    }

    useEffect(() => {
        const timeout = setTimeout(() => {
            setBorderColor('')
            setThanks(<div></div>)
        }, 3000)
        return () => {
            clearTimeout(timeout)
        }
    }, [thanks])


    return (
        <div className='h-full bg-primary/30'>
            <Bulb/>
            <div className='container mx-auto py-32 text-center xl:text-left flex justify-center items-center h-full'>
                <div className='flex flex-col w-full max-w-[700px]'>
                    <motion.h2
                        variants={fadeIn('up', 0.2)}
                        initial='hidden'
                        animate='show'
                        exit='hidden'
                        className='h2 text-center mb-12'>Skontkatuj sie ze <span className='text-accent'>mną</span>.
                    </motion.h2>
                    <motion.form
                        variants={fadeIn('up', 0.4)}
                        initial='hidden'
                        animate='show'
                        exit='hidden'
                        onSubmit={handleSend}
                        ref={formData as any}
                        className='flex-1 flex flex-col gap-6 w-full mx-auto'>
                        <div className='flex gap-x-6 w-full'>
                            <div className='w-full text-center'>
                                <input
                                    value={form.name}
                                    onChange={handleChange}
                                    name='name'
                                    type='text'
                                    placeholder='Name'
                                    className='input'/>
                                <div style={{color: "red"}}>{error.name}</div>
                            </div>
                            <div className='w-full text-center'>
                                <input
                                    onChange={handleChange}
                                    value={form.email}
                                    name='email'
                                    type='text'
                                    placeholder='Emial'
                                    className='input'/>
                                <div style={{color: "red"}}>{error.email}</div>
                            </div>
                        </div>
                        <div className='w-full text-center'>

                            <input
                                name='subject'
                                value={form.subject}
                                onChange={handleChange}
                                type='text'
                                placeholder='subject'
                                className='input'/>
                            <div style={{color: "red"}}>{error.subject}</div>
                        </div>

                        <textarea
                            name='message'
                            value={form.message}
                            onChange={handleChange}
                            placeholder='message'
                            className='textarea'/>
                        <div style={{color: "red"}}>{error.message}</div>
                        <button
                            type='submit'
                            className='btn rounded-full border border-white/50 max-w-[170px] p-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group'>
                            <span
                                className='group-hover:translate-y-[120%] group-hover:opacity-0 transition-all duration-300'>
                                Wyślij Wiadomość.
                            </span>
                            <BsArrowRight
                                className='-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]'/>
                        </button>
                    </motion.form>
                    {thanks}
                </div>
            </div>
        </div>
    );
};

export default Contact;