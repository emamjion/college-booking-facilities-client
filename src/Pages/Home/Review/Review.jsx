// import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { Rating } from '@smastrom/react-rating';
import { useEffect, useState } from 'react';
import '@smastrom/react-rating/style.css'

const Review = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('https://college-booking-server-eta.vercel.app/reviews')
        .then(res => res.json())
        .then(data => setReviews(data))
    }, [])
    
    return (
        <div className='mx-[160px] my-24'>
            <div>
                <h1 className='about-heading text-center font-semibold text-3xl mb-12'>Our <span className='text-[#f46565]'>Reviews & Feedback</span></h1>
            </div>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                    {
                        reviews.map(review => <SwiperSlide 
                            key={review.id}
                        
                        >
                            <div className='flex items-center justify-center text-center flex-col'>
                                <h1 className='text-2xl font-semibold mb-3 text-[#f46565]'>{review.name}</h1>
                                <p className='w-[700px] tracking-wider mb-3'>
                                    {review.feedback}
                                </p>
                                <div>
                                    <Rating
                                        style={{ maxWidth: 180 }}
                                        value={review.rating}
                                        readOnly
                                    />
                                </div>
                            </div>
                        </SwiperSlide>)
                    }
        </Swiper>
        </div>
    );
};

export default Review;