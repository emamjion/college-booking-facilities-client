// import React from 'react';
import { FaSearch } from "react-icons/fa";

const Banner = () => {
    return (
        <div className="px-24 pt-12 banner-img">
            <div className="pt-20 text-right flex items-center justify-end">
                <input type="text" placeholder="Search your College" className="border border-white px-8 py-3 bg-transparent text-white font-medium inline" />
                <span className="text-white text-xl ml-2 cursor-pointer border border-white p-3 rounded-full hover:bg-[#f46565] hover:border-[#f46565] transition-all duration-500"> < FaSearch /></span>
            </div>
            <div className="w-[100%] min-h-[100vh] flex items-center justify-center flex-col">
                <h1 className="text-6xl font-bold text-white">Famous College of The World</h1>
                <p className="mt-6 font-semibold text-xl text-white">
                    Empowering Minds, Inspiring Futures: Your Journey Starts Here
                </p>
                <a href="" className="mt-10 text-white border border-white px-12 py-3 font-medium hover:bg-[#f46565] hover:border-[#f46565] transition-all duration-500">Visit Us To Know More</a>
            </div>
        </div>
    );
};

export default Banner;