import React from 'react';
import {BsArrowRight} from "react-icons/bs";
import {motion} from "framer-motion";
import {fadeIn} from "../variants";
import Bulb from "../components/Bulb";

const Contact = () => {

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


    const [form, setForm] = React.useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    })

    const [error, setError] = React.useState<{ name: string | null, email: string | null, subject: string | null, message: string | null }>({
        name: null,
        email: null,
        subject: null,
        message: null
    })

    const [borderColor, setBorderColor] = React.useState('')

    const handleChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const handleSend = (e: any) => {
        e.preventDefault()
        const nameError = validateName(form.name)

        if (nameError) {
            setError({
                ...error,
                name: nameError
            })
            setBorderColor('1px solid red')
        } else {
            setError({
                ...error,
                name: null
            })
            setBorderColor('')

            setForm({...form, name: '', email: '', subject: '', message: ''})
        }

    }


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
                        className='flex-1 flex flex-col gap-6 w-full mx-auto'>
                        <div className='flex gap-x-6 w-full'>
                            <div className='w-full'>
                                <input
                                    value={form.name}
                                    onChange={handleChange}
                                    name='name'
                                    type='text'
                                    placeholder='Name'
                                    className='input'/>
                                <div style={{color: "red"}}>{error.name}</div>
                            </div>
                            <div className='w-full'>
                                <input
                                    onChange={handleChange}
                                    value={form.email}
                                    name='email'
                                    type='text'
                                    placeholder='Emial'
                                    className='input'/>
                                <div></div>
                            </div>
                        </div>
                        <input
                            name='subject'
                            value={form.subject}
                            onChange={handleChange}
                            type='text'
                            placeholder='subject'
                            className='input'/>
                        <textarea
                            name='message'
                            value={form.message}
                            onChange={handleChange}
                            placeholder='message'
                            className='textarea'/>
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
                </div>
            </div>
        </div>
    );
};

export default Contact;