import React from 'react';

import ProjectBtn from "../components/ProjectBtn";
import Avatar from "../components/Avatar";

import {motion} from "framer-motion";
import {fadeIn} from '../variants'

const Home = () => {
    return (
        <div className='bg-primary/60 h-full'>
            <div className='w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10'>
                <div className='text-center flex flex-col justify-center xl:pt-40 xl:text-left h-full container mx-auto'>
                    <motion.h1
                        variants={fadeIn('down', 0.2)}
                        initial='hidden'
                        animate='show'
                        exit='hidden'
                        className='h1'>
                        Transorming Ideas <br/> Into {' '}
                        <span className='text-accent'>Digital Reality</span>
                    </motion.h1>
                    <motion.p
                        variants={fadeIn('down', 0.3)}
                        initial='hidden'
                        animate='show'
                        exit='hidden'
                        className=' max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16 '>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Vestibulum et metus elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Vestibulum et metus elit.
                    </motion.p>
                    <div className='flex justify-center xl:hidden relative'>
                        <ProjectBtn/>
                    </div>
                    <motion.div
                    variants={fadeIn('down', 0.4)}
                    initial='hidden'
                    animate='show'
                    exit='hidden'
                    className='hidden xl:flex'
                    >
                        <ProjectBtn/>
                    </motion.div>

                </div>

            </div>
            <div
                className='w-[1200px] h-[1000px] absolute right-0 bottom-0'>
                <motion.div
                    variants={fadeIn('up', 0.5)}
                    initial='hidden'
                    animate='show'
                    exit='hidden'
                    className='bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0 opacity-90'>
                </motion.div>
                <motion.div
                    variants={fadeIn('down', 0.5)}
                    initial='hidden'
                    animate='show'
                    exit='hidden'
                    transition={{duration: 1 , ease: 'easeInOut'}}
                    className='w-full h-full max-w-[737px] max-h-[678px] absolute -bottom-32 lg:bottom-0 lg:right-[8%]'>
                    <Avatar/>
                </motion.div>
            </div>
        </div>
    );
};

export default Home;