import React from 'react';
import Bulb from "../components/Bulb";
import Circles from "../components/Circles";

import {motion} from "framer-motion";
import { fadeIn } from "../variants";
import WorkSlider from "../components/WorkSlider";


const Work = () => {
    return (
        <div className='h-full bg-primary/30 py-36 flex items-center'>
            <Circles/>
            <div className='container mx-auto'>
                <div className=' flex flex-col xl:flex-row gap-x-8'>
                    <div className='text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0'>
                        <h2 className='h2 xl:mt-8'>
                            Moja praca<span className='text-accent'>.</span>
                        </h2>
                        <p className='mb-4 max-w-[400px] mx-auto lg:max-0'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                    </div>
                    <div className='w-full xl:max-w-[60%]'>
                        <WorkSlider/>
                    </div>
                </div>
            </div>
            <Bulb/>
        </div>
    );
};

export default Work;