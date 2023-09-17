import React from 'react';
import './Header.css'
import Navbar from '../../../pages/navbar/Navbar';
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <div className=''>
          <Navbar></Navbar>  
        </div>
    );
};

export default Header;