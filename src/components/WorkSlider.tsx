import React from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';
import {Pagination} from 'swiper';
import {BsArrowRight} from 'react-icons/bs';

const WorkSlider = () => {

    const workSlides = {
        slides: [
            {
                images: [
                    {
                        title: 'title',
                        path: '/thumb1.jpg',
                    },
                    {
                        title: 'title',
                        path: '/thumb2.jpg',
                    },
                    {
                        title: 'title',
                        path: '/thumb3.jpg',
                    },
                    {
                        title: 'title',
                        path: '/thumb4.jpg',
                    },
                ],
            },
            {
                images: [
                    {
                        title: 'title',
                        path: '/thumb4.jpg',
                    },
                    {
                        title: 'title',
                        path: '/thumb1.jpg',
                    },
                    {
                        title: 'title',
                        path: '/thumb2.jpg',
                    },
                    {
                        title: 'title',
                        path: '/thumb3.jpg',
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
            className='h-[240px] sm:h-[480px]'
        >
            {workSlides.slides.map((slide, index) => {
                return (
                    <SwiperSlide key={index}>
                        Slide
                    </SwiperSlide>
                )
            })}
        </Swiper>
    );
};

export default WorkSlider;