import React from 'react';

const WorkModal = ({path, title}: {path: string, title: string}) => {


    return (
        <div>
            Modal
            <img src={path} alt={title}/>
            </div>
    );
};

export default WorkModal;