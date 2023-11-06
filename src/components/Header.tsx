import React from 'react';
import Social from "./Social";
import {motion} from "framer-motion";
import {fadeIn} from '../variants'


const Header = () => {


    return (
           <header className='xl:absolute z-10 w-full flex items-center px-16 xl:px-0 xl:h-[90px]'>
               <motion.div
                   variants={fadeIn('down', 0.5)}
                   initial='hidden'
                   animate='show'
                   exit='hidden'
                   className='container mx-auto'>
                   <div className='flex flex-col lg:flex-row justify-between items-center gap-y-6 py-8'>
                       <a href='mailto:ava224@wp.pl' className='flex items-center'>
                           <div className='text-4xl'>
                               <span className='font-semibold'>Łukasz</span> Lisek<span className='text-accent'>.</span>
                           </div>
                       </a>
                       <Social/>
                   </div>
               </motion.div>
           </header>
    );
};

export default Header;