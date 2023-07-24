// import React from 'react';

const CardForEvents = ({data}) => {
    const { eventname, eventDesc, eventImg } = data;
    return (
        // TODO: When the card is hover, Card will be translate-y
        <div className="card w-full bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={eventImg} className="w-full rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{eventname}</h2>
                <p>{eventDesc}</p>
            </div>
        </div>
    );
};

export default CardForEvents;