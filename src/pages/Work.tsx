import React from 'react';
import Bulb from "../components/Bulb";
import Circles from "../components/Circles";
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';
import {Pagination} from 'swiper';
import {motion} from "framer-motion";
import {fadeIn} from "../variants";
import WorkSlider from "../components/WorkSlider";
import thumb1 from "../assets/Oprawki.jpg";
import thumb2 from "../assets/Chłodzenie.jpg";
import ch1 from "../assets/chlodzenie/ch1.jpg";
import ch2 from "../assets/chlodzenie/ch2.jpg";
import ch3 from "../assets/chlodzenie/ch3.jpg";
import ch4 from "../assets/chlodzenie/ch4.jpg";
import ch5 from "../assets/chlodzenie/ch5.jpg";

type WorkSlides = {
    path: string[];
    title: string;
    description: string;
    description2?: string
}


const workSlides: WorkSlides[] = [
    {
        path: [thumb1],
        title: 'Oprawki do elektrod grafitowych.',
        description: 'Projekt obejmuje przemodelowanie procesu zamawiania dedykowanych oprawek od firmy Erowa na skorzystanie z usług lokalnej firmy Toolproject Polcyn do produkcji tych oprawek.\n' +
            'W procesie drążenia, wszystkie elektrody grafitowe są umieszczane w zespole mocującym, dostosowanym do standardów mocowania firmy Erowa. Bez tego systemu mocującego, nie bylibyśmy w stanie w pełni wykorzystać potencjału naszego systemu automatyzacji. Niestety, wysoka cena produktów oferowanych przez firmę Erowa zmusiła nas do przeprowadzenia zapytań ofertowych u lokalnych współpracowników.\n' +
            'Zespół mocujący do elektrod składa się z następujących elementów:\n' +
            '- Oprawki (Cena z oferty firmy Erowa: 325,50 euro za 12 szt.)\n' +
            '- Trzpienia mocującego (Cena z oferty firmy Erowa: 814,70 euro za 20 szt.)\n' +
            '- Śruby mocujące\n' +
            '- Chipu poznawczego\n' +
            'Nasza lokalna firma kooperacyjna, Toolproject Polcyn, zaoferowała konkurencyjne ceny za wykonanie poszczególnych elementów:\n' +
            '- Oprawki: 22,75 euro/szt.\n' +
            '- Blachy centrującej\n' +
            '- Trzpienia mocującego: 21,50 euro/szt.\n' +
            'Oprócz atrakcyjnej oferty cenowej, istotne dla nas jest utrzymanie stałego, dobrego kontaktu z naszym lokalnym kooperantem. Ten aspekt przekłada się na szybszy czas reakcji na zapytania ofertowe oraz na terminową realizację zamówionych elementów.',
        description2: 'Całkowita oszczędność wynikająca z projektu to: 22 457,17 zł.'
    },
    {
        path: [thumb2,ch1,ch2,ch3,ch4,ch5],
        title: 'Optymalizacja chłodzenia wkładu formującego.',
        description: 'Koncepcja ta zakłada optymalizację procesu produkcji pod względem kształtu chłodzenia. Kanały chłodzące są tworzone przy użyciu technologii frezowania, co istotnie przyczyniło się do obniżenia kosztów tego przedsięwzięcia. Jednocześnie same kanały w tej formie korzystnie wpłyną na efektywność procesu. To z kolei umożliwi skrócenie czasu cyklu na wtryskarkach, co przekłada się na istotne zyski dla firmy w produkcji danego komponentu.'
    }
]

const Work = () => {
    return (
        <div className='h-full bg-primary/30 flex items-center xl:py-16 py-0 overflow-auto'>
            <Circles/>
            <div className='container mx-auto'>
                <div className=' flex flex-col xl:flex-row gap-x-8 justify-center items-center'>
                    <div className='text-center flex xl:w-[50vw] flex-col lg:text-left mb-4 xl:mb-0'>
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
                            className='mb-4 max-w-[500px] mx-auto lg:max-0'>
                            Moje umiejętności programistyczne stale się rozwijają, dzięki czemu efektywnie radzę sobie z
                            różnorodnymi wyzwaniami. Nie tylko wykonuję zadania rutynowe, lecz także aktywnie
                            uczestniczę w rozwijaniu zaawansowanych procesów technologicznych. Ponadto, kładę duży
                            nacisk na efektywną komunikację w zespole, potrafiąc tłumaczyć skomplikowane koncepcje
                            techniczne w sposób zrozumiały dla każdego.
                        </motion.p>
                    </div>
                    <motion.div
                        variants={fadeIn('down', 0.4)}
                        initial='hidden'
                        animate='show'
                        exit='hidden'
                        className='w-full xl:w-[50vw] xl:max-w-[60%] '>
                        <Swiper
                            spaceBetween={10}
                            pagination={{
                                clickable: true,
                            }}
                            modules={[Pagination]}
                        >
                            <div
                                className='w-full xl:max-w-[60%]'>
                                {workSlides.map((elem, index) => {
                                    return (
                                        <SwiperSlide>
                                            <WorkSlider
                                                key={index}
                                                workSlides={elem}/>
                                        </SwiperSlide>
                                    )
                                })}
                            </div>
                        </Swiper>
                    </motion.div>
                </div>
            </div>
            <Bulb/>
        </div>
    );
};

export default Work;