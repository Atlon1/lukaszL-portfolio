import React from 'react';
import ProjectBtn from "../components/ProjectBtn";
import Avatar from "../components/Avatar";
import {motion} from "framer-motion";
import {fadeIn} from '../variants'
import ParticlessCont from "../components/ParticlessCont";
import {TypeAnimation} from "react-type-animation";
import Header from "../components/Header";

const Home = () => {
    return (

        <>
            <Header/>
            <div className='bg-primary/60 h-full overflow-auto xl:pt-0 pt-32'>

                    <ParticlessCont/>
                <div className='w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10'>
                    <div
                        className='text-center flex flex-col justify-center xl:pt-40 xl:text-left h-full container mx-auto'>
                        <motion.h1
                            variants={fadeIn('down', 0.2)}
                            initial='hidden'
                            animate='show'
                            exit='hidden'
                            className='h1 max-h-[120px] h-full'>
                            Cześć jestem:<br/>
                            <span className='text-accent'>
                            <TypeAnimation
                                sequence={[
                                    'Technologiem',
                                    3000,
                                    'Programista',
                                    3000,
                                    'Planistą produkcji',
                                    3000
                                ]}
                                speed={30}
                                className='text-accent'
                                wrapper='span'
                                repeat={Infinity}/>
                        </span>
                        </motion.h1>
                        <motion.p
                            variants={fadeIn('down', 0.3)}
                            initial='hidden'
                            animate='show'
                            exit='hidden'
                            className=' max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16 '>
                            Jestem osobą nastawioną na
                            rozwój osobisty. Zawsze chętnie
                            biorę udział w wszystkich
                            możliwych szkoleniach. Lubię
                            inwestować w swój rozwój. Potrafię
                            szybko przystosować się do
                            nowych warunków oraz nowego
                            otoczenia. Nie boję się zmian.
                            Chętnie dzielę się wiedzą oraz
                            doświadczeniem.
                        </motion.p>
                        <div className='xl:hidden md:flex justify-center hidden relative mb-0 md:mb-12'>
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
                        transition={{duration: 1, ease: 'easeInOut'}}
                        className='w-full h-full max-w-[600px] max-h-[500px] absolute lg:bottom-[200px] lg:right-[8%]'>
                        <Avatar/>
                    </motion.div>
                </div>
            </div>
        </>

    );
};

export default Home;