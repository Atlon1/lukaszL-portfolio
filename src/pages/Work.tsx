import React from 'react';
import Bulb from "../components/Bulb";
import Circles from "../components/Circles";

import {motion} from "framer-motion";
import {fadeIn} from "../variants";
import WorkSlider from "../components/WorkSlider";


const Work = () => {
    return (
        <div className='h-full bg-primary/30 py-36 flex items-center'>
            <Circles/>
            <div className='container mx-auto'>
                <div className=' flex flex-col xl:flex-row gap-x-8'>
                    <div className='text-center flex xl:w-[40vw] flex-col lg:text-left mb-4 xl:mb-0'>
                        <motion.h2
                            variants={fadeIn('up', 0.2)}
                            initial='hidden'
                            animate='show'
                            exit='hidden'
                            className='h2 xl:mt-12'>
                            Moja praca<span className='text-accent'>.</span>
                        </motion.h2>
                        <motion.p
                            variants={fadeIn('up', 0.4)}
                            initial='hidden'
                            animate='show'
                            exit='hidden'
                            className='mb-4 max-w-[400px] mx-auto lg:max-0'>
                            Moje umiejętności programistyczne stale się rozwijają, dzięki czemu efektywnie radzę sobie z
                            różnorodnymi wyzwaniami. Nie tylko wykonuję zadania rutynowe, lecz także aktywnie
                            uczestniczę w rozwijaniu zaawansowanych procesów technologicznych. Ponadto, kładę duży
                            nacisk na efektywną komunikację w zespole, potrafiąc tłumaczyć skomplikowane koncepcje
                            techniczne w sposób zrozumiały dla każdego. Jako młody technolog, nieustannie poszukuję
                            nowych możliwości rozwoju poprzez udział w konferencjach branżowych, szkoleniach i
                            warsztatach.
                        </motion.p>
                    </div>
                    <motion.div
                        variants={fadeIn('down', 0.2)}
                        initial='hidden'
                        animate='show'
                        exit='hidden'
                        className='w-full xl:max-w-[60%]'>
                        <WorkSlider/>
                    </motion.div>
                </div>
            </div>
            <Bulb/>
        </div>
    );
};

export default Work;