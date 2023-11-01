import React from 'react';

import {Link} from "react-router-dom";
import {HiArrowRight} from "react-icons/hi2";
import RoundedText from '../assets/rounded-text (1).png'

const ProjectBtn = () => {
    return (
        <div className='mx-auto xl:mx-0 z-10'>
            <Link
                className='relative w-[185px] h-[185px] flex justify-center items-center bg-circleStar bg-cover bg-center bg-no-repeat group'
                to="/work">
                <img
                    className='animate-spin-slow w-full h-full max-w-[141px] max-h-[148px]'
                    src={RoundedText} alt="project" />
                <HiArrowRight className='absolute text-4xl group-hover:translate-x-2 transition-all duration-300'/>
            </Link>
        </div>
    );
};

export default ProjectBtn;