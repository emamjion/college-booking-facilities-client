// import React from 'react';

import { Rating } from "@smastrom/react-rating";
import { useLoaderData } from "react-router-dom";
import CardForEvents from "./CardForEvents";
import CardForSports from "./CardForSports";

const CollegeDetails = () => {
    const loadedDetails = useLoaderData();
    const { name, image, admissionDate, researchNumber, rating, events, sports, collegeDesc  } = loadedDetails;
    let eventList = [];
    events.forEach((d) => {
        eventList.push(<CardForEvents data={d} />)
    })
    
    let sportsList = [];
    sports.forEach((d) => {
        sportsList.push(<CardForSports data={d} />)
    })

    return (
        <div className="pt-[120px] px-[160px] mb-24">
            {/* college details section */}
            <div className="flex items-center justify-center gap-6">
                <div className="w-[48%] h-[700px]">
                    <img src={image} className="w-full rounded-lg" />
                    <h2 className="text-3xl font-semibold mt-7">{name}</h2>
                    <p className="mt-3 text-[#757575]">Admission Date: {admissionDate}</p>
                    <p className="text-[#757575]">Number of The Research: {researchNumber}</p>
                    <div className="mx-auto my-4">
                        <Rating
                            style={{ maxWidth: 180 }}
                            value={rating}
                            readOnly
                        />
                    </div>
                </div>
                <div className="w-[48%] h-[700px]">
                    <h1 className='font-semibold text-2xl mb-2'>Know <span>This College</span></h1>
                    <p className="w-[480px] tracking-wider text-justify text-[17px]">{collegeDesc}</p>
                    <button className="mt-2 border border-black px-10 py-3 font-medium hover:bg-[#f46565] hover:border-[#f46565] hover:text-white transition-all duration-500">Read More</button>
                </div>
            </div>
            {/* College events and Sports section */}
            <h1 className='about-heading text-center font-semibold text-3xl  mt-16 mb-8'>Our <span className='text-[#f46565]'>Events Facilities</span></h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    eventList
                }
            </div>
            <h1 className='about-heading text-center font-semibold text-3xl  mt-16 mb-8'>Our <span className='text-[#f46565]'>Sports Facilities</span></h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    sportsList
                }
            </div>
        </div>
    );
};

export default CollegeDetails;