import React from 'react';
import {BsArrowRight} from "react-icons/bs";
import {motion} from "framer-motion";
import {fadeIn} from "../variants";
import Bulb from "../components/Bulb";

const Contact = () => {
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
                        className='flex-1 flex flex-col gap-6 w-full mx-auto'>
                        <div className='flex gap-x-6 w-full'>
                            <input type='text' placeholder='Name' className='input'/>
                            <input type='text' placeholder='Emial' className='input'/>
                        </div>
                        <input type='text' placeholder='subject' className='input'/>
                        <textarea placeholder='message' className='textarea'></textarea>
                        <button
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