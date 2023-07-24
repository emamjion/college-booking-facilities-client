// import React from 'react';

import { useEffect, useState } from "react";
import CollegeCard from "./CollegeCard";

const College = () => {
    const [colleges, setColleges] = useState([]);
    useEffect(() => {
        fetch('https://college-booking-server-eta.vercel.app/college')
        .then(res => res.json())
        .then(data => setColleges(data))
    }, [])
    
    return (
        <div className="">
            <div className="pt-[120px] mb-20">
                <h1 className='about-heading text-center font-semibold text-3xl'>Our <span className='text-[#f46565]'>Colleges</span></h1>
                <p className="text-center tracking-wider mt-6">
                    College provides an enriching environment for personal and intellectual growth, fostering <br /> critical thinking, independence, and a deeper understanding of the world.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-[160px]">
                {
                    colleges.map(college => <CollegeCard
                        key={college._id}
                        college={college}
                    />)
                }
            </div>
        </div>
    );
};

export default College;