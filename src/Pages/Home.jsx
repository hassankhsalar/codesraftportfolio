import React from 'react';
import Banner from '../components/Home/banner';
import MoreServices from '../components/Home/MoreServices';
import Myskills from '../components/Home/Myskills';

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
        </div>
    );
};

export default Home;