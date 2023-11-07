import React from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';
import {Pagination} from 'swiper';
import thumb1 from '../assets/thumb1.jpg';
import thumb2 from '../assets/thumb2.jpg';
import thumb3 from '../assets/thumb3.jpg';
import thumb4 from '../assets/thumb4.jpg';
import {BsArrowRight} from 'react-icons/bs';

const WorkSlider = () => {

    const workSlides = {
        slides: [
            {
                images: [
                    {
                        title: 'title',
                        path: thumb1,
                    },
                    {
                        title: 'title',
                        path: thumb2,
                    },
                    {
                        title: 'title',
                        path: thumb3,
                    },
                    {
                        title: 'title',
                        path: thumb4,
                    },
                ],
            },
            {
                images: [
                    {
                        title: 'title',
                        path: thumb4,
                    },
                    {
                        title: 'title',
                        path: thumb3,
                    },
                    {
                        title: 'title',
                        path: thumb2,
                    },
                    {
                        title: 'title',
                        path: thumb1,
                    },
                ],
            },
        ],
    };


    return (
        <Swiper
            spaceBetween={10}
            pagination={{
                clickable: true,
            }}
            modules={[Pagination]}
            className='w-full h-full'
        >
            {workSlides.slides.map((slide, index) => {
                return (
                    <SwiperSlide key={index}>
                        <div className='grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer'>
                            {slide.images.map((image, index) => {
                                return (
                                    <div
                                        key={index}
                                        className='relative rounded-lg overflow-hidden flex items-center justify-center group'>
                                        <div className='flex items-center justify-center relative overflow-hidden group'>
                                            <img
                                                className='max-w-[500px] max-h-[250px] h-full w-full'
                                                src={image.path} alt={image.title}/>
                                        </div>
                                        <div
                                            className='absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700'></div>
                                        <div className='absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-300 flex'>
                                            <div className='flex items-center gap-x-2 text-[13px] tracking-[0.2em]'>
                                                <div className='delay-100'>Live</div>
                                                <div className='translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 deley-150'>Project</div>
                                                <div className='text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200'><BsArrowRight/></div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </SwiperSlide>
                )
            })}
        </Swiper>
    );
};

export default WorkSlider;