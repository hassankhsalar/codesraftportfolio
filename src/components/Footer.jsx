import React from "react";
import { CgFacebook } from "react-icons/cg";
import { BsGithub, BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-teal-900 boxShadow rounded-xl w-11/12 mx-auto p-6 md:p-9">
      <div className="flex justify-center gap-[30px] flex-wrap w-full sm:px-32">
        <div className="flex justify-center sm:justify-between gap-[30px] w-full flex-wrap">
          <p className="text-[0.9rem] text-[#abc2d3] hover:text-[#3B9DF8] cursor-pointer transition-all duration-200">
            <a href="#services">Service</a>
          </p>
          <p className="text-[0.9rem] text-[#abc2d3] hover:text-[#3B9DF8] cursor-pointer transition-all duration-200">
            <a href="#featured">Featured</a>
          </p>
          <p className="text-[0.9rem] text-[#abc2d3] hover:text-[#3B9DF8] cursor-pointer transition-all duration-200">
            <a
              target="_blank"
              href="https://hassankhsalar-portfolio.netlify.app/"
            >
              Portfolio
            </a>
          </p>
          <p className="text-[0.9rem] text-[#abc2d3]  hover:text-[#3B9DF8] cursor-pointer transition-all duration-200">
            <a
              target="_blank"
              href="https://www.youtube.com/@gripripbangladesh"
            >
              Blog
            </a>
          </p>
          <p className="text-[0.9rem] text-[#abc2d3] hover:text-[#3B9DF8] cursor-pointer transition-all duration-200">
            <Link to="/contact">Contact</Link>
          </p>
        </div>

        <div className="flex items-center flex-wrap gap-[10px] text-[#424242]">
          <a
            href="https://www.facebook.com/protyasha.alixy.5/"
            target="_blank"
            className="text-[1.3rem] p-1.5 cursor-pointer rounded-full hover:text-white hover:bg-[#3B9DF8] text-[#abc2d3] transition-all duration-300"
          >
            <CgFacebook />
          </a>
          <a
            href="https://github.com/hassankhsalar"
            target="_blank"
            className="text-[1.2rem] p-1.5 cursor-pointer rounded-full hover:text-white hover:bg-[#3B9DF8] text-[#abc2d3] transition-all duration-300"
          >
            <BsGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/salar-hassan-028167217/"
            target="_blank"
            className="text-[1.2rem] p-1.5 cursor-pointer rounded-full hover:text-white hover:bg-[#3B9DF8] text-[#abc2d3] transition-all duration-300"
          >
            <BsLinkedin />
          </a>
        </div>

        <div className="border-t border-slate-700 pt-[20px] flex items-center w-full flex-wrap gap-[20px] justify-center">
          <p className="text-[0.8rem] text-slate-400 sm:text-[0.9rem] ">
            © 2025 KHSALAR. All Rights Reserved.{" "}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
