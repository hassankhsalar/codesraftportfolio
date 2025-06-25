import React from 'react';
import Banner from '../components/Home/banner';
import MoreServices from '../components/Home/MoreServices';
import Myskills from '../components/Home/Myskills';
import Projects from '../components/Home/Projects';
import Newsletter from '../components/Home/Newsletter';
import Testimonial from '../components/Home/Testimonial';

const Home = () => {
    return (
        <div>
            <div>
                <Banner/>
            </div>
            <div>
                <MoreServices/>
            </div>
            <div>
                <Myskills/>
            </div>
            <div>
                <Projects/>
            </div>
            <div>
                <Testimonial/>
            </div>
            <div>
                <Newsletter/>
            </div>
        </div>
    );
};

export default Home;