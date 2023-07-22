// import React from 'react';

import { Link, NavLink } from "react-router-dom";
import './Navbar.css'

const Navbar = () => {
    return (
        <nav className="flex items-center justify-between px-24 pt-12">
            <div>
                <h2 className="text-2xl font-bold"><span className="text-[#f46565]">E</span>ducare</h2>
            </div>
            <ul>
                <NavLink className='font-medium text-lg ml-12' to='/'>Home</NavLink>
                <NavLink className='font-medium text-lg ml-12' to='/about'>About</NavLink>
                <NavLink className='font-medium text-lg ml-12' to='/colleges'>Colleges</NavLink>
                <NavLink className='font-medium text-lg ml-12' to='/admission'>Admission</NavLink>
                <NavLink className='font-medium text-lg ml-12' to='/my-college'>My College</NavLink>
            </ul>
            <div>
                <span>Profile</span>
                <Link to='/login'>Login</Link>
            </div>
        </nav>
    );
};

export default Navbar;