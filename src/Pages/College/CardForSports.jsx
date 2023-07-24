// import React from 'react';

const CardForSports = ({data}) => {
    const { sportsname, sportsImg, sportsDesc } = data;
    
    return (
        // TODO: When the card is hover, Card will be translate-y
        <div className="card w-full bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={sportsImg} className="w-full rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{sportsname}</h2>
                <p>{sportsDesc}</p>
            </div>
        </div>
    );
};

export default CardForSports;