
import React, {useState} from "react";
import {IoIosSearch} from "react-icons/io";
import {FaDiscord} from "react-icons/fa";
import {TbBrandGithubFilled} from "react-icons/tb";
import {CiMenuFries} from "react-icons/ci";
import { Link } from "react-router-dom";
import { FaLinkedin } from "react-icons/fa6";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <nav className="flex items-center justify-between w-11/12 mx-auto fixed top-0 bg-teal-900 h-16 rounded-2xl px-5 z-50">

            {/* logo */}
            <Link to='/'><img src="logo.png" alt="logo" className="w-[40px] "/></Link>

            {/* nav menus */}
            <ul className="items-center gap-[20px] text-[1rem] text-[#424242] md:flex hidden">
                <li className="hover:border-b-[#3B9DF8] border-b-[2px] border-transparent transition-all duration-500 cursor-pointer text-[#abc2d3] hover:text-[#3B9DF8] capitalize"><Link to='/'>home</Link></li>
                <li className="hover:border-b-[#3B9DF8] border-b-[2px] border-transparent transition-all duration-500 cursor-pointer text-[#abc2d3] hover:text-[#3B9DF8] capitalize"><Link to='/gallery'>Gallery</Link>
                </li>
                <li className="hover:border-b-[#3B9DF8] border-b-[2px] border-transparent transition-all duration-500 cursor-pointer text-[#abc2d3] hover:text-[#3B9DF8] capitalize"><Link to='/contact'>Contact</Link></li>
            </ul>

            {/* search bar and community links */}
            <div className="flex items-center gap-[10px]">
                

                <a target="_blank" href="https://www.linkedin.com/in/salar-hassan-028167217/"><FaLinkedin
                    className="text-[1.6rem] text-[#abc2d3]  cursor-pointer hover:text-[#3B9DF8] transition-all duration-500 "/></a>
                <a target="_blank" href="https://github.com/hassankhsalar"><TbBrandGithubFilled
                    className="text-[1.6rem] text-[#abc2d3] cursor-pointer hover:text-[#3B9DF8] transition-all duration-500"/></a>

                <CiMenuFries
                    className="text-[1.6rem] text-[#abc2d3] cursor-pointer md:hidden flex"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}/>
            </div>

            {/* mobile sidebar */}
            <aside
                className={` ${isMenuOpen ? "translate-x-0 opacity-100 z-20" : "translate-x-[200px] opacity-0 z-[-1]"} md:hidden p-4 text-center absolute top-[60px] bg-slate-700 right-0 w-full sm:w-[300px] rounded-md transition-all duration-300`}>

                <ul className="items-center gap-[20px] text-[1rem] text-white flex flex-col">
                    <li className="hover:border-b-[#3B9DF8] text-[#abc2d3] border-b-[2px] border-transparent transition-all duration-500 cursor-pointer capitalize"><Link to='/'>home</Link></li>
                    <li className="hover:border-b-[#3B9DF8] text-[#abc2d3] border-b-[2px] border-transparent transition-all duration-500 cursor-poin ter capitalize"><Link to='/gallery'>Gallery</Link>
                    </li>
                    <li className="hover:border-b-[#3B9DF8] text-[#abc2d3] border-b-[2px] border-transparent transition-all duration-500 cursor-pointer capitalize"><Link to='/contact'>Contact</Link></li>
                </ul>

            </aside>

        </nav>
    );
};

export default Navbar;
          