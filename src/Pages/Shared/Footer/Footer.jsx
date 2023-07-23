// import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="mt-24 bg-slate-50 px-[160px] h-[300px] flex items-center justify-center flex-col">
            <div className="text-center">
                <h1 className="text-3xl font-bold"><span className="text-[#f46565]">E</span>ducare</h1>
                <p className="tracking-wider mt-3">
                    Educare is an Education based website. Educare <br /> is a website where user can see their favourite college. 
                </p>
            </div>
            <div className="flex items-center justify-center gap-8 mt-6">
                <span className="text-2xl text-[#f46565] cursor-pointer"> < FaFacebook /> </span>
                <span className="text-2xl text-[#f46565] cursor-pointer"> < FaTwitter /> </span>
                <span className="text-2xl text-[#f46565] cursor-pointer"> < FaLinkedin /> </span>
                <span className="text-2xl text-[#f46565] cursor-pointer"> < FaInstagram /> </span>
            </div>
            <p className="mt-8 tracking-wider">&copy;Copyright. All rights reserved.</p>
        </footer>
    );
};

export default Footer;