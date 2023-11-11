import React from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';
import {Pagination} from "swiper";

type WorkModalProps = {
    id: number,
    path: string,
    title: string,
    description: string
}
const WorkModal = ({workSlides}: any) => {

    const {path, title, description, description2} = workSlides;

    return (
        <div className='flex flex-col justify-center items-center overflow-y-auto py-16 xl:py-0'>
            <div className='h2 text-white text-center'>
                <h1>{title}</h1>
            </div>
            <div className='flex flex-col justify-center items-center gap-y-6'>
                <div className='flex flex-col justify-center items-center'>
                    <Swiper
                        modules={[Pagination]}
                        loop={false}
                        navigation={true}
                        spaceBetween={20}
                        pagination={{
                            clickable: true,
                        }}
                        className='max-w-[400px] w-full h-full'
                    >
                        {path.map((path: string) => (
                            <SwiperSlide>
                                <img className='max-w-[350px] max-h-[250px] h-full w-full rounded-2xl' src={path}
                                     alt={title}/>
                            </SwiperSlide>))}

                    </Swiper>
                </div>
                <div className='text-white'>{description}</div>
                <div className='text-white text-2xl'>Autor: Łukasz Lisek<span className='text-accent'>.</span></div>
            </div>
            <div className='text-white text-2xl'>{description2}</div>
        </div>
    );
};

export default WorkModal;