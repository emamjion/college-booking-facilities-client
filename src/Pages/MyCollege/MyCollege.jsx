// import React from 'react';

import { useEffect, useState } from "react";
import MyInfoCard from "./MyInfoCard";

const MyCollege = () => {
    const [myInfo, setMyInfo] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/users')
        .then(res => res.json())
        .then(data => setMyInfo(data))
    }, [])
    
    
    return (
        <div className="px-[160px] pt-[120px]">
            <div>
                <h1 className='about-heading text-center font-semibold text-3xl mb-3'><span className='text-[#f46565]'>My College</span></h1>
                <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {
                        myInfo.map(info => <MyInfoCard
                            key={info._id}
                            info={info}
                        />)
                    }
                </div>
            </div>
        </div>
    );
};

export default MyCollege;