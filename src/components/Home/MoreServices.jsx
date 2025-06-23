import React, { useEffect, useState } from "react";
import ServiceCards from "./ServiceCards";

const MoreServices = () => {
  const [services, setServices] = useState([]);

  useEffect(() => { fetch("/services.json")
      .then((res) => res.json())
      .then((data) => setServices(data))
  }, []);

  return (
    <div className="w-11/12 mx-auto py-10">
      <h1 className="text-3xl font-bold mb-8 text-center text-slate-700">All of My Services</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-8 justify-center">
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
