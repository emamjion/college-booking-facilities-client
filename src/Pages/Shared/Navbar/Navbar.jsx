// import React from 'react';

import { Link, NavLink } from "react-router-dom";
import './Navbar.css'

const Navbar = () => {
    return (
        <nav className="px-24 pt-12 fixed flex items-center justify-between w-full text-white">
            <div>
                <h2 className="text-3xl font-bold"><span className="text-[#f46565]">E</span>ducare</h2>
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
                <Link to='/login' className="ml-4 mt-10 text-white border border-white px-10 py-3 font-medium hover:bg-[#f46565] hover:border-[#f46565] transition-all duration-500">Login</Link>
            </div>
        </nav>
    );
};

export default Navbar;