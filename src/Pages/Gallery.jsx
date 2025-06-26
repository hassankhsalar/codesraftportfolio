import React, { useEffect } from "react";
import w1 from "/w1.jpg";
import w2 from "/w3.jpg";
import w3 from "/w3.jpg";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { Helmet } from "react-helmet-async";

const Gallery = () => {

  useEffect(() => {
    document.title = "Codesraft | Gallery";
  }, []);

  return (
    //Project showcase
    <div className="w-11/12 mx-auto pt-24 pb-10">

      {/* page title */}
      <Helmet>
        <title>Codesraft | Gallery</title>
      </Helmet>


      <h1 className=" text-slate-700 pb-12 text-center text-3xl lg:text-5xl font-semibold text-transparent bg-clip-text bg-gradient-to-b from-teal-400 via-teal-600 to-teal-800">Sneak Peak at my latest Projects</h1>
      <div className="grid grid-cols-4 gap-2">
        <motion.img
          src={w1}
          alt=""
          variants={fadeIn("right", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
          className="border-2 border-slate-400 rounded-xl row-span-1 col-span-2 w-full h-full object-cover"
        />
        <motion.img
          src="https://i.ibb.co/ynYXCKM3/image.png"
          alt=""
          variants={fadeIn("left", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
          className="border-2 border-slate-400 rounded-xl w-full h-full object-cover row-span-2"
        />
        <motion.img
          src="https://i.ibb.co/WWdb8Srv/image.png"
          alt=""
          variants={fadeIn("left", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
          className="border-2 border-slate-400 rounded-xl w-full h-full object-cover row-span-2"
        />
        <motion.img
          src="https://i.ibb.co/fVWqCmhf/image.jpg"
          alt=""
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
          className="border-2 border-slate-400 rounded-xl w-full h-full object-cover col-span-2 row-span-2"
        />
        <motion.img
          src="https://i.ibb.co/sJkq4mnp/image.png"
          alt=""
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
          className="border-2 border-slate-400 rounded-xl w-full h-full object-contain col-span-2 row-span-1"
        />

        <motion.img
          src="https://i.ibb.co/Vh5pPLK/allclass.jpg"
          alt=""
          variants={fadeIn("left", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
          className="border-2 border-slate-400 rounded-xl w-full h-full object-cover col-span-4"
        />
        <motion.img
          src="https://i.ibb.co/YB5VRzfM/image-8.jpg"
          alt=""
          variants={fadeIn("right", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
          className="border-2 border-slate-400 rounded-xl w-full h-full object-cover "
        />

        <motion.img
          src="https://i.ibb.co/zWNG6MVS/Screenshot-2025-01-28-124947.png"
          alt=""
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
          className="border-2 border-slate-400 rounded-xl w-full h-full object-cover col-span-2"
        />
        <motion.img
          src="https://i.ibb.co/mCsjnYbS/image-7.jpg"
          alt=""
          variants={fadeIn("left", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
          className="border-2 border-slate-400 rounded-xl w-full h-full object-cover "
        />
      </div>
    </div>
  );
};

export default Gallery;
