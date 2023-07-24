// import React from 'react';

import { Link } from "react-router-dom";

const NameCard = ({name}) => {
    return (
        <div className="card w-full bg-base-100 shadow-xl image-full">
            <figure><img src={name.image} className="w-full" /></figure>
            <div className="card-body">
                <Link to={`/admission-form/${name._id}`}>
                    <h2 className="card-title text-white text-2xl cursor-pointer">{name.name}</h2>
                </Link>
                <p className="mt-3">Click The College Name For Admission</p>
            </div>
        </div>
    );
};

export default NameCard;