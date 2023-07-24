// import React from 'react';
import aboutImg from '../../../assets/images/About-img/about-img.png'
import './About.css';

const About = () => {
    return (
        <div className="my-24 px-24">
            <h1 className='about-heading text-center font-semibold text-3xl mb-12'><span className='text-[#f46565]'>About</span> Us</h1>
            <div className='flex items-center justify-center flex-col lg:flex-row gap-8'>
                <img src={aboutImg} />
                <div>
                    <h2 className='font-medium text-2xl mb-3'>We are the world&apos;s famous <br /> college</h2>
                    <p className='w-[300px] text-justify tracking-wide'>
                        College refers to an institution of higher education where students pursue undergraduate and/or postgraduate degrees. It is an essential part of the education system in many countries and plays a crucial role in preparing individuals for their future careers and personal growth.Choosing the right college and field of study is an important decision, as it can significantly impact a person&apos;s future opportunities and career path. It&apos;s crucial to research different colleges, their programs, and consider one&apos;s own interests, goals, and financial situation before making a choice.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;