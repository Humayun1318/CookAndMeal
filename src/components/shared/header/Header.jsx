import React from 'react';
import './Header.css'
import Navbar from '../../../pages/navbar/Navbar';
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <div className='md:mb-0 mb-52 sm:w-full md:w-[80%] border m-auto '>
          <Navbar></Navbar>  
        </div>
    );
};

export default Header;