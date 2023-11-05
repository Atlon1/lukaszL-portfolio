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

                },
                {
                    title: 'Opytmalizacja procesów',

                },
                {
                    title: 'Nadzór nad projektami',
                },
                {
                    title: 'Zamawianie materiału oraz normaliów',

                },
                {
                    title: 'Rozwiązaywanie problemów technologicznych',
                },
                {
                    title: 'Wspieranie konstrukcji w przygotowywaniu koncepcji zmian konstrukcyjnych',
                },
                {
                    title: 'Tworzenie ofert na wykonanie inspekcji oraz na zmiany konstrukcyjne',
                },
                {
                    title: 'Kontakt z podwykonawcami krajowymi oraz zagranicznymi',
                },
                {
                    title: 'Tworzeni raportów w programie MS exel ',
                },
                {
                    title: 'Wspieranie zespołu w prowadzeniu projektów',
                },
                {
                    title: 'Zgłaszanie projektów oszczędnościowych BITE',
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
                    stage: '09.2017 - 02.2022',
                },
            ],
        },
        {
            title: 'Umiejętoności',
            info: [
                {
                    title: 'Dobra znajomość rysunku technicznego.',
                    icons: [
                        <BsStarFill/>, <BsStarFill/>, <BsStarFill/>,<BsStarFill/>,<BsStar/>
                    ]
                },
                {
                    title: 'Bardzo dobra znajomość budowy form wtryskowych oraz ich działanie.',
                    icons: [
                        <BsStarFill/>, <BsStarFill/>, <BsStarFill/>,<BsStarFill/>,<BsStar/>
                    ]
                },
                {
                    title: 'Umiejętność analizowania form wtryskowych.',
                    icons: [
                        <BsStarFill/>, <BsStarFill/>, <BsStarFill/>,<BsStarFill/>,<BsStar/>
                    ]
                },
                {
                    title: 'Kreatywne oraz innowacyjne metody rozwiązywania problemów.',
                    icons: [
                        <BsStarFill/>, <BsStarFill/>, <BsStarFill/>,<BsStarFill/>,<BsStar/>
                    ]
                },
                {
                    title: 'Umiejętność planowania.',
                    icons: [
                        <BsStarFill/>, <BsStarFill/>, <BsStarFill/>,<BsStarFill/>,<BsStar/>
                    ]
                },
                {
                    title: 'Umiejętność korzystania z systemów ERP.',
                    icons: [
                        <BsStarFill/>, <BsStarFill/>, <BsStarFill/>,<BsStarFill/>,<BsStar/>
                    ]
                },
                {
                    title: 'Umiejętność tworzenia oraz sterowania procesem.',
                    icons: [
                        <BsStarFill/>, <BsStarFill/>, <BsStarFill/>,<BsStarFill/>,<BsStar/>
                    ]
                },
                {
                    title: 'Umiejętność podejmowania trudnych decyzji.',
                    icons: [
                        <BsStarFill/>, <BsStarFill/>, <BsStarFill/>,<BsStarFill/>,<BsStar/>
                    ]
                },
                {
                    title: 'Umiejętność korzystania  z narzędzi jakościowych.',
                    icons: [
                        <BsStarFill/>, <BsStarFill/>, <BsStarFill/>,<BsStarFill/>,<BsStar/>
                    ]
                },
                {
                    title: 'Dyspozycyjność i zaangażowanie.',
                    icons: [
                        <BsStarFill/>, <BsStarFill/>, <BsStarFill/>,<BsStarFill/>,<BsStar/>
                    ]
                },
                {
                    title: 'Komunikatywność i praca zespołowa.',
                    icons: [
                        <BsStarFill/>, <BsStarFill/>, <BsStarFill/>,<BsStarFill/>,<BsStar/>
                    ]
                },
                {
                    title: 'Obsługa Teamcenter – Creo - Autocad - Exel - Sap.',
                    icons: [
                        <BsStarFill/>, <BsStarFill/>, <BsStarFill/>,<BsStarFill/>,<BsStar/>
                    ]
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
                    title: 'Certyfikat OPENMIND Microsoft Excel poziom Zaawansowany',
                    stage: '2023',
                },
            ],
        },
    ];


    const [index, setIndex] = useState(0);


    return (
        <div className='h-full bg-primary/30 xl:py-32 text-center xl:text-left overflow-auto'>
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
                                className='relative flex-1 flex flex-col items-center justify-center after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0'>
                                <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2'>
                                    <CountUp start={0} end={2} duration={5}/>
                                </div>
                                <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]'>
                                    Lata doświadczenia
                                </div>
                            </div>
                            <div
                                className='relative flex-1 flex flex-col items-center justify-center after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0'>
                                <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2'>
                                    <CountUp start={0} end={15} duration={5}/>
                                </div>
                                <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]'>
                                    Zadowoloni klienci
                                </div>
                            </div>
                            <div className='relative flex-1 flex flex-col items-center justify-center'>
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
                    className='flex flex-col xl:max-w-[45%] w-full h-full xl:mr-20 mr-0 xl:mt-60 mt-0'>
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
                    <div className='pt-2 pb-28 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start'>
                        {aboutData[index].info.map((item, itemIndex) => {
                            return (
                                <div
                                    className='flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60'
                                    key={itemIndex}>
                                    <div className='font-light mb-2 md:mb-0'>{item.title}</div>
                                    <div className='hidden md:flex'></div>
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