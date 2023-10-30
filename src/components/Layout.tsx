import React from 'react';
import Nav from './Nav';
import Header from "./Header";
import TopLeftImg from "./TopLeftImg";

const Layout = ({ children } : { children: React.ReactNode }) => {
    return (
        <div className='page bg-site text-white bg-cover bg-no-repeat font-sora relative'>
            <TopLeftImg/>
            <Nav/>
            <Header/>
            {children}
        </div>
    );
};

export default Layout;