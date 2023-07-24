// import React from 'react';

import { Link, NavLink } from "react-router-dom";
import './Navbar.css'
import { useContext } from "react";
import { AuthContext } from "../../../Context/AuthProvider";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const handleLogOut = () => {
        logOut()
        .then(() => {})
        .catch(error => console.log(error.message))
    }
    return (
        <nav className="px-24 h-[96px] fixed z-10 lg:flex items-center justify-between w-full text-white bg-black bg-opacity-30">
            <div>
                <h2 className="text-3xl font-bold"><span className="text-[#f46565]">E</span>ducare</h2>
            </div>
            <ul>
                <NavLink className='font-medium text-lg ml-12' to='/'>Home</NavLink>
                <NavLink className='font-medium text-lg ml-12' to='/college'>College</NavLink>
                <NavLink className='font-medium text-lg ml-12' to='/admission'>Admission</NavLink>
                <NavLink className='font-medium text-lg ml-12' to='/my-college'>My College</NavLink>
            </ul>
            <div>
                {
                    user ? <>
                        <span className='font-medium'>{user?.displayName}</span>
                        <span onClick={handleLogOut} className="ml-4 mt-10 text-white border cursor-pointer border-white px-10 py-3 font-medium hover:bg-[#f46565] hover:border-[#f46565] transition-all duration-500">Logout</span>
                    </> : <>
                        <Link to='/login' className="ml-4 mt-10 text-white border border-white px-10 py-3 font-medium hover:bg-[#f46565] hover:border-[#f46565] transition-all duration-500">Login</Link>
                    </>
                }
            </div>
        </nav>
    );
};

export default Navbar;