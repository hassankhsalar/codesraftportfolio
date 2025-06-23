import React from "react";
import { IoIosNotificationsOutline } from "react-icons/io";

const ServiceCards = ({ image, label, title }) => {
  return (
    <div className="min-w-[60%] max-w-[100%] relative hover:scale-110 transition-transform ">
      <img
        src={image}
        alt="card"
        className="w-full h-[400px] object-cover rounded-xl"
      />

      <div className="absolute top-3 right-3 bg-blue-500 rounded-full p-2">
        <IoIosNotificationsOutline className="text-white text-[1.4rem]" />
      </div>

      <div className="absolute bottom-0 right-0 left-0 bg-gradient-to-t from-[#000] to-[rgb(0,0,0,0.0001)] p-5 rounded-b-xl">
        <span className="text-[0.8rem] py-1 px-3 bg-blue-500 rounded-full text-white">
          {label}
        </span>
        <h1 className="text-[1.8rem] text-white font-bold leading-[34px] mt-4">
          {title}
        </h1>
      </div>
    </div>
  );
};

export default ServiceCards;
