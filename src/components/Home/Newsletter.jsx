import React from "react";
import {AiOutlineMail} from "react-icons/ai";

const Newsletter = () => {

    return (
        <section className="w-11/12 lg:w-9/12 border-2 border-sky-400 mx-auto rounded-2xl p-[20px] my-20" style={{
    boxShadow: '-10px 10px 25px rgba(14, 165, 233, 0.4)'
  }}>
            <div className="flex lg:flex-row flex-col items-center justify-between gap-[20px]">
                <div className="w-full sm:w-[80%] lg:w-[50%]">
                    <img src="https://i.ibb.co/WkhTsW1/undraw-Mailbox-re-dvds.png" alt="image"
                         className="w-full"/>
                </div>

                <div className="w-full lg:w-[50%]">
                    <b className="text-[1rem] text-slate-500 sm:text-[1.8rem] text-text">Subscribe to my</b>
                    <h1 className="text-[2rem] text-slate-600 sm:text-[3rem] font-[800] capitalize text-text leading-[50px]">newsletter</h1>
                    <p className="text-[1.1rem] text-slate-500 mt-3">Get weekly updates on the newest design
                        stories, case studies and tips right
                        in your mailbox. <b>Subscribe now!</b></p>

                    <form className="mt-5">
                        <div className="relative">
                            <input placeholder="Email Address"
                                   className="w-full text-center py-3 border-slate-700 bg-slate-900 placeholder:text-slate-300 text-white pr-4 pl-14 outline-none focus:ring-0 border rounded-md"/>
                            <AiOutlineMail
                                className="absolute top-[50%] transform translate-y-[-50%] left-3 text-teal-400 text-[1.7rem]"/>
                        </div>

                        <button
                            className="w-full py-3 rounded-md bg-teal-400 hover:bg-teal-600 transition-transform text-white mt-4">Submit
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Newsletter;
                    