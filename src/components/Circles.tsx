import React from 'react';
import Circle from '../assets/circles.png'
const Circles = () => {
    return (
        <div className='w-[200px] xl:w-[300px] absolute -right-16  -bottom-2 mix-blend-color-dodge animate-pulse duration-75'>
          <img className=' w-[260px] h-[200px]' src={Circle} alt='Circles'/>
        </div>
    );
};

export default Circles;