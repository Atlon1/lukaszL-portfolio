import React from 'react';

import AvatarOne from '../assets/avatar.png'

const Avatar = () => {
    return (
        <div className='hidden xl:flex xl:max-w-none'>
            <img src={AvatarOne} alt="avatar" className='translate-z-0 w-full h-full'/>
        </div>
    );
};

export default Avatar;