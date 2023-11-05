import React, {useState} from 'react';

import Circles from "../components/Circles";
import {BsStarFill, BsStar} from "react-icons/bs";

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
            title: 'Czym sie zajmuje?',
            info: [
                {
                    title: 'Projektowanie procesów',
                    icons: [
                        <BsStarFill/>, <BsStarFill/>, <BsStarFill/>,<BsStarFill/>,<BsStar/>
                    ]
                },
                {
                    title: 'Opytmalizacja procesów',
                    icons: [
                        <BsStarFill/>, <BsStarFill/>, <BsStarFill/>,<BsStar/>,<BsStar/>
                    ]
                },
                {
                    title: 'Nadzór nad projektami',
                    icons: [
                        <BsStarFill/>, <BsStarFill/>, <BsStarFill/>,<BsStarFill/>,<BsStar/>
                    ]
                },
                {
                    title: 'Zamawianie materiału oraz normaliów',
                    icons: [
                        <BsStarFill/>, <BsStarFill/>, <BsStar/>,<BsStar/>,<BsStar/>
                    ]

                },
                {
                    title: 'Rozwiązaywanie problemów technologicznych',
                    icons: [
                        <BsStarFill/>, <BsStarFill/>, <BsStarFill/>,<BsStarFill/>,<BsStar/>
                    ]
                },
                {
                    title: 'Wspieranie konstrukcji w przygotowywaniu koncepcji zmian konstrukcyjnych',
                    icons: [
                        <BsStarFill/>, <BsStarFill/>, <BsStarFill/>,<BsStarFill/>,<BsStar/>
                    ]
                },
                {
                    title: 'Tworzenie ofert na wykonanie inspekcji oraz na zmiany konstrukcyjne',
                    icons: [
                        <BsStarFill/>, <BsStarFill/>, <BsStarFill/>,<BsStarFill/>,<BsStar/>
                    ]
                },
                {
                    title: 'Kontakt z podwykonawcami krajowymi oraz zagranicznymi',
                    icons: [
                        <BsStarFill/>, <BsStarFill/>, <BsStarFill/>,<BsStarFill/>,<BsStar/>
                    ]
                },
                {
                    title: 'Tworzeni raportów w programie MS exel ',
                    icons: [
                        <BsStarFill/>, <BsStarFill/>, <BsStarFill/>,<BsStarFill/>,<BsStar/>
                    ]
                },
                {
                    title: 'Wspieranie zespołu w prowadzeniu projektów',
                    icons: [
                        <BsStarFill/>, <BsStarFill/>, <BsStarFill/>,<BsStarFill/>,<BsStar/>
                    ]
                },
                {
                    title: 'Zgłaszanie projektów oszczędnościowych BITE',
                    icons: [
                        <BsStarFill/>, <BsStarFill/>, <BsStarFill/>,<BsStarFill/>,<BsStar/>
                    ]
                },

            ],
        },
        {
            title: 'Doświadczenie',
            info: [
                {
                    title: 'Mł technolog. - Phoenix Contact',
                    stage: '01.02.2022 - obecnie',
                },
                {
                    title: 'Starszy ślusarz narzędziowy - Phoenix Contact',
                    stage: '01.09.2017 - 01.02.2022',
                },
            ],
        },
        {
            title: 'Umiejętoności',
            info: [
                {
                    title: 'Mł technolog. - Phoenix Contact',
                    stage: '01.02.2022 - obecnie',
                },
                {
                    title: 'Starszy ślusarz narzędziowy - Phoenix Contact',
                    stage: '01.09.2017 - 01.02.2022',
                },
            ],
        },
        {
            title: 'Certyfikaty',
            info: [
                {
                    title: 'Uprawnienia na wózki jezdniowe podnośnikowe z wyłączeniem specjalistycznych',
                    stage: '',
                },
                {
                    title: 'Uprawnienia na suwnice',
                    stage: '',
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
        <div className='h-full bg-primary/30 py-32 text-center xl:text-left overflow-auto'>
            <Circles/>
            <div className='container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6 '>
                <div className='flex-1 flex flex-col justify-center'>
                    <motion.h2
                        variants={fadeIn('right', 0.2)}
                        initial='hidden'
                        animate='show'
                        exit='hidden'
                        className='h2'>
                        Przerabiam <span className='text-accent'>Projekty</span> <br/> w rzeczywistość.
                    </motion.h2>
                    <motion.p
                        variants={fadeIn('right', 0.4)}
                        initial='hidden'
                        animate='show'
                        exit='hidden'
                        className='max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0'>
                        Jestem doświadczonym inżynierem specjalizującym się w technologii i obróbce CNC, z
                        umiejętnościami programowania różnych rodzajów obrabiarek. Moja praca polega na optymalizacji
                        procesów produkcyjnych, redukcji czasu obróbki i minimalizacji marnotrawstwa materiału. Jako
                        pasjonat technologii CNC, jestem gotów przyczynić się do sukcesu mojego przyszłego pracodawcy
                        poprzez dostarczanie precyzyjnych komponentów i innowacyjnych rozwiązań.
                    </motion.p>
                    <motion.div
                        variants={fadeIn('right', 0.6)}
                        initial='hidden'
                        animate='show'
                        exit='hidden'
                        className='hidden md:flex md:max-w-xl xl:max-w-none max-auto xl:mx-0 mb-24'>
                        <div className='flex flex-1 xl:gap-x-6'>
                            <div
                                className='relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0'>
                                <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2'>
                                    <CountUp start={0} end={2} duration={5}/>
                                </div>
                                <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]'>
                                    Lata doświadczenia
                                </div>
                            </div>
                            <div
                                className='relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0'>
                                <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2'>
                                    <CountUp start={0} end={15} duration={5}/>
                                </div>
                                <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]'>
                                    Zadowoloni klienci
                                </div>
                            </div>
                            <div className='relative flex-1 '>
                                <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2'>
                                    <CountUp start={0} end={12} duration={5}/>
                                </div>
                                <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]'>
                                    Ukończone projekty
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
                <motion.div
                    variants={fadeIn('left', 0.4)}
                    initial='hidden'
                    animate='show'
                    exit='hidden'
                    className='flex flex-col xl:max-w-[50%] w-full h-full'>
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
                </motion.div>
            </div>
        </div>
    );
};

export default About;