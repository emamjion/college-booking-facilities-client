// import React from 'react';

import { Rating } from "@smastrom/react-rating";
import { Link } from "react-router-dom";

const CollegeCard = ({college}) => {
    const { _id, name, image, rating, admissionDate, researchNumber } = college;
    
    return (
        <div className="card w-full bg-base-100 shadow-xl">
            <figure><img src={image} className="w-full" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p className="text-[#787878]">Admission Date: {admissionDate}</p>
                <p className="text-[#787878]">Number of the Research: {researchNumber}</p>
                <div className="mx-auto my-4">
                    <Rating
                        style={{ maxWidth: 180 }}
                        value={rating}
                        readOnly
                    />
                </div>
                <div className="card-actions justify-end">
                    <Link to={`/college/${_id}`}>
                        <button className="border border-black px-10 py-3 font-medium hover:text-white hover:bg-[#f46565] hover:border-[#f46565] transition-all duration-500">Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default CollegeCard;