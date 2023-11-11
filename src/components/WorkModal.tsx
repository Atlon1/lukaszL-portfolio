import React from 'react';

type WorkModalProps = {
    id: number,
    path: string,
    title: string,
    description: string
}
const WorkModal = ({workSlides}: any) => {


    const { path, title, description} = workSlides;

    console.log(workSlides[0]);

    return (
        <div>

            <img src={path} alt={title}/>
            <div className='text-white'>{description}</div>
        </div>
    );
};

export default WorkModal;