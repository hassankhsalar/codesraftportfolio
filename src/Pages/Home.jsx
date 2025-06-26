import React, { useEffect } from "react";
import Banner from "../components/Home/banner";
import MoreServices from "../components/Home/MoreServices";
import Myskills from "../components/Home/Myskills";
import Projects from "../components/Home/Projects";
import Newsletter from "../components/Home/Newsletter";
import Testimonial from "../components/Home/Testimonial";
import { Helmet } from "react-helmet-async";

const Home = () => {

    // since the react-helmet/async is not compatible(Requiring refresh) with react 19, useEffect has been used to force title change
      useEffect(() => {
          document.title = "Codesraft | Home";
        }, []);
    
  return (
    <div>
        {/* Page Title */}
      <Helmet>
        <title>Codesraft | Home</title>
      </Helmet>
      
      <div>
        <Banner />
      </div>
      <div>
        <MoreServices />
      </div>
      <div>
        <Myskills />
      </div>
      <div>
        <Projects />
      </div>
      <div>
        <Testimonial />
      </div>
      <div>
        <Newsletter />
      </div>
    </div>
  );
};

export default Home;
