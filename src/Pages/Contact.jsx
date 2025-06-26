import React, { useEffect } from "react";
import banner from "/contact.jpg";
import { Helmet } from "react-helmet-async";

const Contact = () => {

  // since the react-helmet/async is not compatible with react 19, useEffect has been used to force title change
  useEffect(() => {
      document.title = "Codesraft | Contact";
    }, []);

  return (
    <div>

      {/* page title */}
      <Helmet>
        <title>Codesraft | Contact</title>
      </Helmet>

      {/* image */}
      <div>
        <img
          className="max-h-[600px] w-full object-cover"
          src={banner}
          alt=""
        />
      </div>
      <section className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 gap-[30px] shadow-md p-[40px] rounded-xl">
        {/* form area */}
        <form className="w-full">
          <div className="text-gray-800">
            <h1 className="text-[2rem] text-slate-500 font-[600] leading-[35px]">
              Get in <span className="text-teal-400">touch</span>
            </h1>
            <p className="text-[0.9rem] text-slate-400 mt-2 mb-8">
              Let"s align our constellations! Reach out and let the magic of
              collaboration illuminate our skies.
            </p>
          </div>

          <div className="flex sm:flex-row flex-col items-center gap-[20px]">
            <div className="flex flex-col gap-[5px] w-full sm:w-[50%]">
              <input
                type="text"
                placeholder="Your name"
                className="peer bg-white placeholder:text-slate-500 border-gray-300 border rounded-md outline-none px-4 py-3 w-full text-gray-400 transition-colors duration-300"
              />
            </div>

            <div className="flex flex-col gap-[5px] w-full sm:w-[50%]">
              <input
                type="email"
                placeholder="Email address"
                className="peer bg-white placeholder:text-slate-500 border-gray-300 border rounded-md outline-none px-4 py-3 w-full text-gray-400 transition-colors duration-300"
              />
            </div>
          </div>

          <div className="flex flex-col gap-[5px] w-full mt-[20px]">
            <textarea
              placeholder="Write message"
              className="peer bg-white placeholder:text-slate-500  min-h-[200px] border-gray-300 border rounded-md outline-none px-4 py-3 w-full text-gray-400 transition-colors duration-300"
            ></textarea>
          </div>

          <button
            type="submit"
            className=" py-2.5 px-6 bg-teal-600 text-white rounded-md text-[1rem] mt-[10px] w-full"
          >
            Submit
          </button>
        </form>

        {/*  map  */}
        <div className="h-full">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57903.02583821205!2d91.81983571134349!3d24.900058347354335!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375054d3d270329f%3A0xf58ef93431f67382!2sSylhet!5e0!3m2!1sen!2sbd!4v1723916219404!5m2!1sen!2sbd"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full rounded-md"
          ></iframe>
        </div>
      </section>
    </div>
  );
};

export default Contact;
