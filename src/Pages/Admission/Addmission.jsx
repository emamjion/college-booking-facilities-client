// import React from 'react';

import { useEffect, useState } from "react";
import NameCard from "./NameCard";

const Addmission = () => {
    const [names, setNames] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/college')
        .then(res => res.json())
        .then(data => setNames(data))
    }, [])
    
    return (
        <div className="px-[160px] pt-[120px]">
            <div className="mb-12">
                <h1 className='about-heading text-center font-semibold text-3xl mb-4'><span className='text-[#f46565]'>Admission</span> Here</h1>
                <p className="tracking-wide text-center">
                    Planning ahead and preparing a strong application can increase your chances <br /> of getting admitted to the college of your choice. 
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    names.map(name => <NameCard
                        key={name._id}
                        name={name}
                    />)
                }
            </div>
        </div>
    );
};

export default Addmission;