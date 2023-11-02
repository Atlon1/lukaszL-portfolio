import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/logo (1).svg';


const Header = () => {
    return (
        <header className='absolute z-30 w-full flex items-center px-16 xl:px-0 xl:h-[90px]'>
            <div className='container mx-auto'>
                <div>
                    <Link to='/' className='flex items-center'>
                        <img src={Logo} alt='logo'/>
                    </Link>
                </div>
            </div>
        </header>
    );
};

export default Header;