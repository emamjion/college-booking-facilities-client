// import React from 'react';

const Featured = () => {
    return (
        // TODO: I will add some topic. such, relevant picture, when this card will hover, then card will be translate-y
        <div className="px-[160px] my-24">
            <div className="text-center mb-12">
                <h1 className='about-heading text-center font-semibold text-3xl mb-3'>Our <span className='text-[#f46565]'>Facilities</span></h1>
                <p className="tracking-wide">
                    Colleges typically offer a wide range of features and services to support <br /> the academic and personal growth of their students.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="text-center bg-red-100 p-4 hover:shadow-xl transition-all duration-500 rounded">
                    <h3 className="text-xl font-medium mb-2">Academic Programs</h3>
                    <p className="text-[#757575] w-[400px] text-justify mx-auto">
                        Colleges provide various academic programs and majors, allowing students to pursue their interests and passions in different fields of study. 
                    </p>
                </div>
                <div className="text-center bg-red-100 p-4 hover:shadow-xl transition-all duration-500 rounded">
                    <h3 className="text-xl font-medium mb-2">Faculty and Staff</h3>
                    <p className="text-[#757575] w-[400px] text-justify mx-auto">
                        Colleges employ knowledgeable and experienced professors and staff members who facilitate the learning process and provide academic guidance to students.
                    </p>
                </div>
                <div className="text-center bg-red-100 p-4 hover:shadow-xl transition-all duration-500 rounded">
                    <h3 className="text-xl font-medium mb-2">Libraries and Resources</h3>
                    <p className="text-[#757575] w-[400px] text-justify mx-auto">
                        College campuses usually have well-equipped libraries and online resources that provide access to a vast collection of books, journals, research papers, and other academic materials.
                    </p>
                </div>
                <div className="text-center bg-red-100 p-4 hover:shadow-xl transition-all duration-500 rounded">
                    <h3 className="text-xl font-medium mb-2">Classrooms and Laboratories</h3>
                    <p className="text-[#757575] w-[400px] text-justify mx-auto">
                        Colleges have classrooms and specialized laboratories where students can engage in hands-on learning and practical experiments relevant to their fields of study.
                    </p>
                </div>
                <div className="text-center bg-red-100 p-4 hover:shadow-xl transition-all duration-500 rounded">
                    <h3 className="text-xl font-medium mb-2">Extracurricular Activities</h3>
                    <p className="text-[#757575] w-[400px] text-justify mx-auto">
                        Colleges offer a variety of extracurricular activities such as sports, arts, cultural clubs, student organizations, and leadership opportunities, allowing students to explore their interests outside of academics.
                    </p>
                </div>
                <div className="text-center bg-red-100 p-4 hover:shadow-xl transition-all duration-500 rounded">
                    <h3 className="text-xl font-medium mb-2">Career Services</h3>
                    <p className="text-[#757575] w-[400px] text-justify mx-auto">
                        Many colleges provide career development resources, including resume writing assistance, internship and job placement support, career fairs, and networking opportunities.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Featured;