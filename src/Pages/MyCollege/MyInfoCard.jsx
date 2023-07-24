// import React from 'react';

const MyInfoCard = ({info}) => {
    const { name, image, address, date, phone, subject, email } = info
    return (
        <div className="card card-side bg-base-100 shadow-xl">
            <figure><img src={image}/></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>Subject: {subject}</p>
                <p>Date of birth: {date}</p>
                <p>Phone: {phone}</p>
                <p>Address: {address}</p>
                <p>Email: {email}</p>
            </div>
        </div>
    );
};

export default MyInfoCard;