import React, {useState} from 'react';

import Modal from "react-modal";

import {BsArrowRight} from 'react-icons/bs';
import {IoCloseOutline} from 'react-icons/io5';
import WorkModal from "./WorkModal";

Modal.setAppElement('#root');

const modalStyles = {
    overlay: {
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        zIndex: '30',

    }
};


const WorkSlider = ({workSlides}: any) => {

    const { path, title, description} = workSlides;

    const [modalIsOpen, setModalIsOpen] = useState(false);

    const openModal = () => {
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };


    return (
        <div>
            <div className='gap-4 cursor-pointer'>
                <div
                    onClick={openModal}
                    className='relative rounded-lg overflow-hidden flex items-center justify-center group z-20'>
                    <div
                        className='flex items-center justify-center relative overflow-hidden group'>
                        <img
                            className='max-w-[500px] max-h-[250px] h-full w-full'
                            src={path} alt={title}/>
                    </div>
                    <div
                        className='absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700'></div>
                    <div
                        className='absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-300 flex'>
                        <div className='flex items-center gap-x-2 text-[13px] tracking-[0.2em]'>
                            <div className='delay-100'>Live</div>
                            <div
                                className='translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 deley-150'>Project
                            </div>
                            <div
                                className='text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200'>
                                <BsArrowRight/></div>
                        </div>
                    </div>
                </div>
            </div>
            {modalIsOpen && (
                <Modal
                    isOpen={modalIsOpen}
                    style={modalStyles}
                    onRequestClose={closeModal}
                    contentLabel='Work-Competitions'
                    className='bg-white w-full h-full lg:max-w-[950px] lg:max-h-[950px] lg:rounded-[30px] lg:fixed lg:top-[50%] lg:left-[50%]
                                                    lg:translate-x-[-50%] lg:translate-y-[-50%] outline-none bg-site bg-cover bg-no-repeat overflow-auto  lg:p-12 p-4'
                >
                    <div
                        onClick={closeModal}
                        className='absolute right-2 top-2 hover:scale-110 duration-200 cursor-pointer text-accent'>
                        <IoCloseOutline className='text-4xl'/>
                    </div>
                    <WorkModal workSlides={workSlides}/>
                </Modal>
            )}
        </div>
    )
};

export default WorkSlider;