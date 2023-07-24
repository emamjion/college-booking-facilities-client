// import React from 'react';
import './ErrorPage.css';
import mainImg from '../../assets/images/Error-page/error-img.png'

const ErrorPage = () => {
    return (
        <div className="flex items-center justify-center flex-col">
            <img src={mainImg} />
            <h1 className='font-semibold text-3xl'>Page Not Found</h1>
        </div>
    );
};

export default ErrorPage;