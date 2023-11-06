import React from 'react';
import bulb from '../assets/bulb.png';


const Bulb = () => {
    return (
        <div className='absolute -left-36 -bottom-12 rotate-12 mix-blend-color-dodge animate-pulse duration-75 z-10 w-[200[x] xl:2-[260px]'>
            <img
                className='w-full h-full'
                src={bulb} alt='bulb'/>
        </div>
    );
};

export default Bulb;