import React, {useState} from 'react';

import {
    FaHtml5,
    FaCss3,
    FaJs,
    FaReact,
    FaWordpress,
    FaFigma,
} from "react-icons/fa";

import {
    SiNextdotjs,
    SiFramer,
    SiAdobexd,
    SiAdobephotoshop,
} from "react-icons/si";
import Circles from "../components/Circles";
import Avatar from "../components/Avatar";

import {motion} from "framer-motion";
import {fadeIn} from "../variants";

import CountUp from 'react-countup';

type AboutData = {
    title: string;
    info: Array<{
        title: string;
        icons?: Array<any>;
        stage?: string;
    }>;
}
const About = () => {

    const aboutData: AboutData[] = [
        {
            title: 'skills',
            info: [
                {
                    title: 'Web Development',
                    icons: [
                        <FaHtml5/>,
                        <FaCss3/>,
                        <FaJs/>,
                        <FaReact/>,
                        <SiNextdotjs/>,
                        <SiFramer/>,
                        <FaWordpress/>,
                    ],
                },
                {
                    title: 'UI/UX Design',
                    icons: [<FaFigma/>, <SiAdobexd/>, <SiAdobephotoshop/>],
                },
            ],
        },
        {
            title: 'awards',
            info: [
                {
                    title: 'Webby Awards - Honoree',
                    stage: '2011 - 2012',
                },
                {
                    title: 'Adobe Design Achievement Awards - Finalist',
                    stage: '2009 - 2010',
                },
            ],
        },
        {
            title: 'experience',
            info: [
                {
                    title: 'UX/UI Designer - XYZ Company',
                    stage: '2012 - 2023',
                },
                {
                    title: 'Web Developer - ABC Agency',
                    stage: '2010 - 2012',
                },
                {
                    title: 'Intern - DEF Corporation',
                    stage: '2008 - 2010',
                },
            ],
        },
        {
            title: 'credentials',
            info: [
                {
                    title: 'Web Development - ABC University, LA, CA',
                    stage: '2011',
                },
                {
                    title: 'Computer Science Diploma - AV Technical Institute',
                    stage: '2009',
                },
                {
                    title: 'Certified Graphic Designer - ABC Institute, Los Angeles, CA',
                    stage: '2006',
                },
            ],
        },
    ];


    const [index, setIndex] = useState(0);



    return (
        <div className='h-full bg-primary/30 py-32 text-center xl:text-left'>
            <Circles/>
            <motion.div
                variants={fadeIn('right', 0.2)}
                initial='hidden'
                animate='show'
                exit='hidden'
                className='hidden xl:flex absolute bottom-0 -left-[370px]'>
                <Avatar/>
            </motion.div>
            <div className='container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6'>
                <div className='flex-1 flex flex-col justify-center'>
                <h2 className='h2'>
                    Captivating <span className='text-accent'>Stories</span> birth mgnificen designs.
                </h2>
                    <p className='max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                    <div>
                        counters
                    </div>
                </div>
                <div className='flex flex-col w-full xl:max-w-[48%] h-[480px]'>
                    <div className='flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4'>
                        {aboutData.map((item, itemIndex) => {
                            return (
                                <div key={itemIndex}
                                     className={`${index === itemIndex && 'text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300'} 
                                cursor-pointer capitalize xl:text-lg relative after:w-8
                                after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
                                onClick={() => setIndex(itemIndex)}
                                >{item.title}</div>

                            )
                        })}
                    </div>
                    <div className='py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start'>
                        {aboutData[index].info.map((item, itemIndex) => {
                                return (
                                    <div
                                        className='flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60'
                                        key={itemIndex}>
                                        <div className='font-light mb-2 md:mb-0'>{item.title}</div>
                                        <div className='hidden md:flex'>-</div>
                                        <div>{item.stage}</div>
                                        <div className='flex gap-x-4'>
                                            {item.icons?.map((icon, iconIndex) => {
                                                return (
                                                    <div
                                                        className='text-2xl transition-all text-white'
                                                        key={iconIndex}>{icon}</div>
                                                )
                                            })}
                                        </div>
                                    </div>
                                )
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;