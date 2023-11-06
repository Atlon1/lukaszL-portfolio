import React from 'react';

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

    import {Swiper, SwiperSlide} from "swiper/swiper-react";
    import 'swiper/css';
    import 'swiper/css/pagination';
    import 'swiper/css/free-mode';

    import {Pagination} from 'swiper';

    import { BsArrowRight } from 'react-icons/bs';

    return (
        <Swiper>

        </Swiper>
    );
};

export default WorkSlider;