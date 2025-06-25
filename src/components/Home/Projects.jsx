import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

const Projects = () => {
  return (
    <div id="featured" className="w-11/12 mx-auto mb-8">
      <div>
        <h3 className="text-2xl text-teal-400 font-bold mt-10 text-center">
          Featured Projects
        </h3>
        <h1 className="text-5xl font-bold text-slate-500 my-2 text-center mb-8">
          PROJECTS
        </h1>
      </div>

      {/* 1st row of projects */}
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.2 }}
        className="flex flex-col md:flex-row gap-4"
      >
        {/* project number 1 */}

        <div className="w-full sm:w-[80%] lg:w-[60%] h-[350px] relative overflow-hidden group cursor-pointer rounded-md">
          {/*  image  */}
          <img
            src="https://i.ibb.co/fVWqCmhf/image.jpg"
            alt="animated_card"
            className="w-full h-full object-cover group-hover:scale-[1.1] transition-all duration-700"
          />

          {/*  text  */}
          <div className="absolute top-[50%] transform group-hover:translate-y-[-50%] transition-all duration-500 w-full h-full left-0 z-20 right-0 flex items-center justify-center flex-col">
            <h1 className="text-[2.5rem] font-bold text-white text-center capitalize">
              Monster Factory
            </h1>
            <p className="text-center z-[1-] opacity-0 group-hover:z-20 group-hover:opacity-100 transition-all duration-700 text-white text-[0.9rem]">
              Fitness portal with numerous training routine and scheduling.
            </p>
            <button className=" z-[1-] opacity-0 group-hover:z-20 group-hover:opacity-100 px-3 py-2 mt-3 bg-teal-400 transition-all duration-1000 text-white rounded-md text-[0.9rem]">
              <a target="_blank" href="https://monster-factory-3479a.web.app/">
                View Details
              </a>
            </button>
          </div>

          {/*  bottom shadow  */}
          <div className="w-full opacity-0 z-[-1] group-hover:opacity-100 group-hover:z-10 transition-all duration-500 bg-gradient-to-b from-[rgba(0,0,0,0.57)] to-[rgb(0,0,0,0.9)] h-[100%] absolute bottom-0 left-0 right-0"></div>
        </div>

        {/* project number 2 */}

        <div className="w-full sm:w-[80%] lg:w-[60%] h-[350px] relative overflow-hidden group cursor-pointer rounded-md">
          
          <img
            src="https://i.ibb.co/35tDgdD4/image-1.jpg"
            alt="animated_card"
            className="w-full h-full object-cover group-hover:scale-[1.1] transition-all duration-700"
          />

          <div className="absolute top-[50%] transform group-hover:translate-y-[-50%] transition-all duration-500 w-full h-full left-0 z-20 right-0 flex items-center justify-center flex-col">
            <h1 className="text-[2.5rem] font-bold text-slate-700 text-center capitalize group-hover:text-white">
              FlyDriveGo
            </h1>
            <p className="text-center z-[1-] opacity-0 group-hover:z-20 group-hover:opacity-100 transition-all duration-700 text-white text-[0.9rem]">
              One stop solution for travellers.Ticket bookings, Shopping and
              Visas!
            </p>
            <button className=" z-[1-] opacity-0 group-hover:z-20 group-hover:opacity-100 px-3 py-2 mt-3 bg-teal-400 transition-all duration-1000 text-white rounded-md text-[0.9rem]">
              <a target="_blank" href="https://flydrivego.netlify.app/">
                View Details
              </a>
            </button>
          </div>

          <div className="w-full opacity-0 z-[-1] group-hover:opacity-100 group-hover:z-10 transition-all duration-500 bg-gradient-to-b from-[rgb(0,0,0,0.57)] to-[rgba(0,0,0,0.82)] h-[100%] absolute bottom-0 left-0 right-0"></div>
        </div>
      </motion.div>

      {/* 2nd row of projects */}

      <motion.div
        variants={fadeIn("left", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.2 }}
        className="flex flex-col md:flex-row gap-3 mt-14"
      >
        {/* boi chai project */}
        <div className="w-full sm:w-[80%] lg:w-[60%] h-[350px] relative overflow-hidden group cursor-pointer rounded-md">
          {/*  image  */}
          <img
            src="https://i.ibb.co/KjFb3x9q/image-13.jpg"
            alt="animated_card"
            className="w-full h-full object-cover group-hover:scale-[1.1] transition-all duration-700"
          />

          {/*  text  */}
          <div className="absolute top-[50%] transform group-hover:translate-y-[-50%] transition-all duration-500 w-full h-full left-0 z-20 right-0 flex items-center justify-center flex-col">
            <h1 className="text-[2.5rem] font-bold text-slate-700 text-center capitalize group-hover:text-white">
              Boi-Chai
            </h1>
            <p className="text-center z-[1-] opacity-0 group-hover:z-20 group-hover:opacity-100 transition-all duration-700 text-white text-[0.9rem]">
              Library Management system with book borrowing system
            </p>
            <button className=" z-[1-] opacity-0 group-hover:z-20 group-hover:opacity-100 px-3 py-2 mt-3 bg-teal-400 transition-all duration-1000 text-white rounded-md text-[0.9rem]">
              <a target="_blank" href="https://boi-chai-3669a.web.app/">
                View Details
              </a>
            </button>
          </div>

          <div className="w-full opacity-0 z-[-1] group-hover:opacity-100 group-hover:z-10 transition-all duration-500 bg-gradient-to-b from-[rgb(0,0,0,0.001)] to-[rgba(0,0,0,0.82)] h-[100%] absolute bottom-0 left-0 right-0"></div>
        </div>
        {/* visa navigator project */}
        <div className="w-full sm:w-[80%] lg:w-[60%] h-[350px] relative overflow-hidden group cursor-pointer rounded-md">
          {/*  image  */}
          <img
            src="https://i.ibb.co/tTPpcgPX/VNB.png"
            alt="animated_card"
            className="w-full h-full object-cover group-hover:scale-[1.1] transition-all duration-700"
          />

          {/*  text  */}
          <div className="absolute top-[50%] transform group-hover:translate-y-[-50%] transition-all duration-500 w-full h-full left-0 z-20 right-0 flex items-center justify-center flex-col">
            <h1 className="text-[2.5rem] font-bold text-slate-700 text-center capitalize group-hover:text-white">
              Visa Navigator
            </h1>
            <p className="text-center z-[1-] opacity-0 group-hover:z-20 group-hover:opacity-100 transition-all duration-700 text-white text-[0.9rem]">
              Travellers assisting site
            </p>
            <button className=" z-[1-] opacity-0 group-hover:z-20 group-hover:opacity-100 px-3 py-2 mt-3 bg-teal-400 transition-all duration-1000 text-white rounded-md text-[0.9rem]">
              <a
                target="_blank"
                href="https://visa-navigator-portal-152e9.web.app/"
              >
                View Details
              </a>
            </button>
          </div>

          <div className="w-full opacity-0 z-[-1] group-hover:opacity-100 group-hover:z-10 transition-all duration-500 bg-gradient-to-b from-[rgb(0,0,0,0.001)] to-[rgba(0,0,0,0.82)] h-[100%] absolute bottom-0 left-0 right-0"></div>
        </div>
        {/* peddy pets project */}
        <div className="w-full sm:w-[80%] lg:w-[60%] h-[350px] relative overflow-hidden group cursor-pointer rounded-md">
          {/*  image  */}
          <img
            src="https://i.ibb.co/zWNG6MVS/Screenshot-2025-01-28-124947.png"
            alt="animated_card"
            className="w-full h-full object-cover group-hover:scale-[1.1] transition-all duration-700"
          />

          {/*  text  */}
          <div className="absolute top-[50%] transform group-hover:translate-y-[-50%] transition-all duration-500 w-full h-full left-0 z-20 right-0 flex items-center justify-center flex-col">
            <h1 className="text-[2.5rem] font-bold text-slate-700 text-center capitalize group-hover:text-white">
              Peddy Pets
            </h1>
            <p className="text-center z-[1-] opacity-0 group-hover:z-20 group-hover:opacity-100 transition-all duration-700 text-white text-[0.9rem]">
              Pet adoption site
            </p>
            <button className=" z-[1-] opacity-0 group-hover:z-20 group-hover:opacity-100 px-3 py-2 mt-3 bg-teal-400 transition-all duration-1000 text-white rounded-md text-[0.9rem]">
              <a target="_blank" href="https://peddy-adoptions.netlify.app/">
                View Details
              </a>
            </button>
          </div>

          <div className="w-full opacity-0 z-[-1] group-hover:opacity-100 group-hover:z-10 transition-all duration-500 bg-gradient-to-b from-[rgb(0,0,0,0.001)] to-[rgba(0,0,0,0.82)] h-[100%] absolute bottom-0 left-0 right-0"></div>
        </div>
      </motion.div>
    </div>
  );
};

export default Projects;
