import React from "react";
import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

import { FaQuoteLeft, FaQuoteRight, FaRegStar, FaStar } from "react-icons/fa";

const Testimonial = () => {
  return (
    <div className="w-11/12 mx-auto mt-20">
      <h1 className="text-4xl lg:text-5xl font-bold text-slate-500 mt-10 text-center text-transparent bg-clip-text bg-gradient-to-b from-teal-400 via-teal-600 to-teal-800">
        Testimonials
      </h1>
      <h3 className="mt-4 text-slate-400 text-xl font-semibold text-center mb-10">
        Take a look at what my clients think of me
      </h3>
      {/* testimonials */}
      <motion.div
        variants={fadeIn("left", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
      >
        <Marquee>
            {/* demo pictures have been used with public img api calls */}
          <div className="w-[600px] ml-3 border border-[#3B9DF8] shadow-2xl rounded-lg flex flex-col md:flex-row items-center justify-between gap-6 px-6 py-16">
            <img
              src={`https://picsum.photos/400/300?random=${Math.floor(
                Math.random() * 1000
              )}`}
              alt="demo/image"
              className="w-[180px] h-[180px] object-cover rounded-full"
            />

            <div className="w-full md:w-[65%] relative">
              <div className="flex flex-col md:flex-row flex-wrap gap-y-2 items-center justify-between relative">
                <FaQuoteRight className=" absolute top-[-550%] md:top-[-150%] left-[0%] text-[2rem] text-[#3B9DF8]" />
                <div className="flex items-center gap-2">
                  <h2 className="text-[1rem] text-[#424242] font-[500]">
                    Jhone Dehon -
                  </h2>
                  <p className="text-[0.9rem] text-[#424242]">
                    CEO of Codesraft
                  </p>
                </div>
                <div className="flex items-center gap-1">
                  <FaStar className="text-[1.1rem] text-[#ffba24]" />
                  <FaStar className="text-[1.1rem] text-[#ffba24]" />
                  <FaStar className="text-[1.1rem] text-[#ffba24]" />
                  <FaStar className="text-[1.1rem] text-[#ffba24]" />
                  <FaRegStar className="text-[#ffba24] text-[1.1rem]" />
                </div>
              </div>
              <h2 className="text-[1.5rem] text-[#424242] font-[500] capitalize mt-3">
                amazing design
              </h2>
              <p className="text-justify text-[#424242] text-[0.9rem] my-3 ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
                nesciunt saepe quam doloremque nulla cumque vero sequi,
                repellendus vel reiciendis? Eos totam quidem ducimus amet, in
                fuga quia minus ab!
              </p>
              <FaQuoteLeft className="absolute bottom-[-10%] right-[0%] text-[2rem] text-[#3B9DF8]" />
            </div>
          </div>
          <div className="w-[600px]  mx-3 border border-[#3B9DF8] shadow-2xl rounded-lg flex flex-col md:flex-row items-center justify-between gap-6 px-6 py-16">
            <img
              src={`https://picsum.photos/400/300?random=${Math.floor(
                Math.random() * 1000
              )}`}
              alt="demo/image"
              className="w-[180px] h-[180px] object-cover rounded-full"
            />

            <div className="w-full md:w-[65%] relative">
              <div className="flex flex-col md:flex-row flex-wrap gap-y-2 items-center justify-between relative">
                <FaQuoteRight className=" absolute top-[-550%] md:top-[-150%] left-[0%] text-[2rem] text-[#3B9DF8]" />
                <div className="flex items-center gap-2">
                  <h2 className="text-[1rem] text-[#424242] font-[500]">
                    Lucy Ardelle -
                  </h2>
                  <p className="text-[0.9rem] text-[#424242] ">
                    CEO of codeforyou
                  </p>
                </div>
                <div className="flex items-center gap-1">
                  <FaStar className="text-[1.1rem] text-[#ffba24]" />
                  <FaStar className="text-[1.1rem] text-[#ffba24]" />
                  <FaStar className="text-[1.1rem] text-[#ffba24]" />
                  <FaStar className="text-[1.1rem] text-[#ffba24]" />
                  <FaRegStar className="text-[#ffba24] text-[1.1rem]" />
                </div>
              </div>
              <h2 className="text-[1.5rem] font-[500] capitalize mt-3">
                Just in time!
              </h2>
              <p className="text-justify text-[0.9rem] my-3 text-[#424242]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
                nesciunt saepe quam doloremque nulla cumque vero sequi,
                repellendus vel reiciendis? Eos totam quidem ducimus amet, in
                fuga quia minus ab!
              </p>
              <FaQuoteLeft className="absolute bottom-[-10%] right-[0%] text-[2rem] text-[#3B9DF8]" />
            </div>
          </div>
          <div className="w-[600px] border border-[#3B9DF8] shadow-2xl rounded-lg flex flex-col md:flex-row items-center justify-between gap-6 px-6 py-16">
            <img
              src={`https://picsum.photos/400/300?random=${Math.floor(
                Math.random() * 1000
              )}`}
              alt="demo/image"
              className="w-[180px] h-[180px] object-cover rounded-full"
            />

            <div className="w-full md:w-[65%] relative">
              <div className="flex flex-col md:flex-row flex-wrap gap-y-2 items-center justify-between relative">
                <FaQuoteRight className=" absolute top-[-550%] md:top-[-150%] left-[0%] text-[2rem] text-[#3B9DF8]" />
                <div className="flex items-center gap-2">
                  <h2 className="text-[1rem] text-[#424242] font-[500]">
                    Henry Thomas -
                  </h2>
                  <p className="text-[0.9rem] text-[#424242]">
                    CEO of Supertel
                  </p>
                </div>
                <div className="flex items-center gap-1">
                  <FaStar className="text-[1.1rem] text-[#ffba24]" />
                  <FaStar className="text-[1.1rem] text-[#ffba24]" />
                  <FaStar className="text-[1.1rem] text-[#ffba24]" />
                  <FaStar className="text-[1.1rem] text-[#ffba24]" />
                  <FaRegStar className="text-[#ffba24] text-[1.1rem]" />
                </div>
              </div>
              <h2 className="text-[1.5rem] text-[#424242] font-[500] capitalize mt-3">
                Tasteful UI/UX design
              </h2>
              <p className="text-justify text-[#424242] text-[0.9rem] my-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
                nesciunt saepe quam doloremque nulla cumque vero sequi,
                repellendus vel reiciendis? Eos totam quidem ducimus amet, in
                fuga quia minus ab!
              </p>
              <FaQuoteLeft className="absolute bottom-[-10%] right-[0%] text-[2rem] text-[#3B9DF8]" />
            </div>
          </div>
        </Marquee>
      </motion.div>
    </div>
  );
};

export default Testimonial;
