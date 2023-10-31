import React from 'react';

import {
    HiHome,
    HiUser,
    HiViewColumns,
    HiRectangleGroup,
    HiChatBubbleBottomCenterText,
    HiEnvelope,
} from 'react-icons/hi2';
import {Link} from 'react-router-dom';


type Link = {
    name: string;
    path: string;
    icon: any;
};
export const navData: Link[] = [
    {name: 'home', path: '/', icon: <HiHome/>},
    {name: 'about', path: '/about', icon: <HiUser/>},
    {name: 'services', path: '/services', icon: <HiRectangleGroup/>},
    {name: 'work', path: '/work', icon: <HiViewColumns/>},
    {
        name: 'testimonials',
        path: '/testimonials',
        icon: <HiChatBubbleBottomCenterText/>,
    },
    {
        name: 'contact',
        path: '/contact',
        icon: <HiEnvelope/>,
    },
];


const Nav = () => {



    return (
        <nav>
            <div className='flex w-full xl:flex-col items-center justify-between xl:justify-center gap-y-10 px-4
            md:px-40 xl:px-0 h-80 bg-red-200/10 xl:h-max py-8'>
                {navData.map((link, index) => (
                    <Link to={link.path} key={index}>
                        {link.icon}
                    </Link>
                ))}
            </div>
        </nav>
    );
};

export default Nav;