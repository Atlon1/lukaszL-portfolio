import React from 'react';
import {Link} from "react-router-dom";
import {
    RiYoutubeLine,
    RiInstagramLine,
    RiFacebookLine,
    RiDribbbleLine,
    RiBehanceLine,
    RiPinterestLine
} from "react-icons/ri";

const Social = () => {
    return (
        <div className='flex items-center gap-x-5 text-lg'>
            <Link to='/' className='hover:text-accent transition-all duration-300'>
                <RiYoutubeLine/>
            </Link>
            <Link to='/' className='hover:text-accent transition-all duration-300'>
            <RiInstagramLine/>
        </Link>
            <Link to='/' className='hover:text-accent transition-all duration-300'>
            <RiFacebookLine/>
        </Link>
            <Link to='/' className='hover:text-accent transition-all duration-300'>
            <RiDribbbleLine/>
        </Link>
            <Link to='/' className='hover:text-accent transition-all duration-300'>
            <RiBehanceLine/>
        </Link>
            <Link to='/' className='hover:text-accent transition-all duration-300'>
            <RiPinterestLine/>
        </Link>
        </div>
    );
};

export default Social;