import React, { useState } from "react";
import SectionHeading from "./SectionHeading";
import { Car, FileSpreadsheet, Shield, Droplet, Ambulance } from "lucide-react";
import ServiceCard from "./ServiceCard";

const Packages = () => {
  const [activeService, setActiveService] = useState("Polishing");
  const services = [
    { title: "Thermal Insulation", icon: FileSpreadsheet },
    { title: "Polishing", icon: Car },
    { title: "Paint Protection Films", icon: Shield },
    { title: "Nanoceramics", icon: Droplet },
    { title: "Packages", icon: Ambulance },
  ];
  return (
    <section className="w-[80%] mx-auto">
      <SectionHeading heading="PACKAGES & SERVICES" />
      {/* Services */}
      <div className="w-full max-w-6xl mx-auto px-4 my-5">
        <div className="grid grid-cols-5 gap-4">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              title={service.title}
              icon={service.icon}
              isActive={activeService === service.title}
              onClick={() => setActiveService(service.title)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Packages;
