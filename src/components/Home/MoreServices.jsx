import React, { useEffect, useState } from "react";
import ServiceCards from "./ServiceCards";


const MoreServices = () => {
  const [services, setServices] = useState([]);
// fetching data from json
  useEffect(() => { fetch("/services.json")
      .then((res) => res.json())
      .then((data) => setServices(data))
  }, []);

  return (
    <div id="services" className="w-11/12 mx-auto py-10">
      <h1 className="text-4xl lg:text-5xl font-bold mb-8 text-center text-slate-700 text-transparent bg-clip-text bg-gradient-to-b from-teal-400 via-teal-600 to-teal-800">All of My Services</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-8 justify-center">
        {/* cycling and mapping data on cards */}
        {services.map((service) => (
          <ServiceCards
            key={service.id}
            image={service.image}
            label={service.label || "Featured"}
            title={service.title}
          />
        ))}
      </div>
    </div>
  );
};

export default MoreServices;
