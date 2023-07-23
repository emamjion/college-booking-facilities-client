// import React from 'react';
import groupImg1 from '../../../assets/images/image-gallery/group-img-1.png'
import groupImg2 from '../../../assets/images/image-gallery/group-img-2.png'
import groupImg3 from '../../../assets/images/image-gallery/group-img-3.png'

const Gallery = () => {
    return (
        <div className="px-[160px] my-24">
            <div className="text-center mb-12">
                <h1 className='about-heading text-center font-semibold text-3xl mb-6'>Our <span className='text-[#f46565]'>Image Gallery</span></h1>
                <p className="tracking-wide">
                    An image gallery is a collection or display of visual content, typically <br /> consisting of photographs or pictures, organized in a coherent and accessible manner.
                </p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                <div>
                    <img className='w-full rounded-lg' src={groupImg1} />
                </div>
                <div>
                    <img className='w-full rounded-lg' src={groupImg2} />
                </div>
                <div>
                    <img className='w-full rounded-lg' src={groupImg3} />
                </div>
            </div>
        </div>
    );
};

export default Gallery;