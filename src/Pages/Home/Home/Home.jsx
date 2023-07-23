// import React from 'react';

import About from "../About/About";
import Featured from "../Featured/Featured";
import Gallery from "../Gallery/Gallery";
import Review from "../Review/Review";
import Banner from "./Banner";

const Home = () => {
    return (
        <div>
            {/* Banner section */}
            <Banner/>

            {/* About section */}
            <About/>

            {/* Featured Section */}
            <Featured/>

            {/* Image Gallery */}
            <Gallery/>

            {/* Review Section */}
            <Review/>
        </div>
    );
};

export default Home;