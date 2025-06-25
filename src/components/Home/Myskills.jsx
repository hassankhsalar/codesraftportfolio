import reactlogo from "/react.png";
import htmllogo from "/html.png";
import jslogo from "/js.png";
import mongodb from "/mongodb.png";
import express from "/express.png";
import node from "/node.png";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

const Myskills = () => {
  return (
    <div>
      <h1 className="text-4xl lg:text-5xl font-bold text-slate-500 mt-10 text-center text-transparent bg-clip-text bg-gradient-to-b from-teal-400 via-teal-600 to-teal-800">
        SKILLS
      </h1>
      <div className="flex flex-col md:flex-row  justify-center items-center w-11/12 mx-auto">
       {/* left component */}
        <motion.div
          variants={fadeIn("right", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
          className="w-11/12 md:w-1/2"
        >
          <p className="py-6 text-slate-500 text-xl px-4 text-justify">
            I am a dedicated Full Stack Developer with expertise in building
            dynamic, responsive, and user-friendly web applications. With
            proficiency in modern technologies like React, Tailwind CSS,
            Node.js, jwt and Firebase, I thrive on crafting seamless user
            experiences and efficient backend systems. Constantly learning and
            adapting, I aim to combine creativity and technical skills to solve
            real-world problems and deliver high-quality digital solutions.
            Let's create something amazing together!
          </p>
        </motion.div>
      {/* right component/logo */}
        <motion.div
          variants={fadeIn("left", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
          className="w-11/12 md:w-1/2"
        >
          <div className="mt-4 grid justify-center grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-8 items-center px-2 ">
            <img
              className="animate-bounce w-24 h-16 xl:w-32 xl:h-20 2xl:w-40 2xl:h-28 border-2 rounded-xl border-slate-500 object-contain mx-auto
             transition-transform duration-300 ease-in-out
             hover:scale-110 hover:-translate-y-2 hover:translate-x-2
             hover:shadow-[-6px_6px_15px_rgba(0,0,0,0.3)]"
              src={reactlogo}
              alt="React Logo"
            />
            <img
              className="animate-bounce w-24 h-16 xl:w-32 xl:h-20 2xl:w-40 2xl:h-28 border-2 rounded-xl border-slate-500 object-contain mx-auto
             transition-transform duration-300 ease-in-out
             hover:scale-110 hover:-translate-y-2 hover:translate-x-2
             hover:shadow-[-6px_6px_15px_rgba(0,0,0,0.3)]"
              src={htmllogo}
              alt="HTML Logo"
            />
            <img
              className="animate-bounce w-24 h-16 xl:w-32 xl:h-20 2xl:w-40 2xl:h-28 border-2 rounded-xl border-slate-500 object-contain mx-auto
             transition-transform duration-300 ease-in-out
             hover:scale-110 hover:-translate-y-2 hover:translate-x-2
             hover:shadow-[-6px_6px_15px_rgba(0,0,0,0.3)]"
              src={jslogo}
              alt="JavaScript Logo"
            />
            <img
              className="animate-bounce w-24 h-16 xl:w-32 xl:h-20 2xl:w-40 2xl:h-28 border-2 rounded-xl border-slate-500 object-contain mx-auto
             transition-transform duration-300 ease-in-out
             hover:scale-110 hover:-translate-y-2 hover:translate-x-2
             hover:shadow-[-6px_6px_15px_rgba(0,0,0,0.3)]"
              src={mongodb}
              alt="MongoDB Logo"
            />
            <img
              className="animate-bounce w-24 h-16 xl:w-32 xl:h-20 2xl:w-40 2xl:h-28 border-2 rounded-xl border-slate-500 object-contain mx-auto
             transition-transform duration-300 ease-in-out
             hover:scale-110 hover:-translate-y-2 hover:translate-x-2
             hover:shadow-[-6px_6px_15px_rgba(0,0,0,0.3)]"
              src={express}
              alt="Express Logo"
            />
            <img
              className="animate-bounce w-24 h-16 xl:w-32 xl:h-20 2xl:w-40 2xl:h-28 border-2 rounded-xl border-slate-500 object-contain mx-auto
             transition-transform duration-300 ease-in-out
             hover:scale-110 hover:-translate-y-2 hover:translate-x-2
             hover:shadow-[-6px_6px_15px_rgba(0,0,0,0.3)]"
              src={node}
              alt="Node.js Logo"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Myskills;
