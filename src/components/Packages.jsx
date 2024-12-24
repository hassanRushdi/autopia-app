import React, { useState } from "react";
import SectionHeading from "./SectionHeading";
import { Car, FileSpreadsheet, Shield, Droplet, Ambulance } from "lucide-react";
import ServiceCard from "./ServiceCard";
import image1 from '../assets/ecb1b09bbeadbe99c4f02b7215c721e9.jpg'
import image2 from '../assets/a47c6bbb69a62e08950e3cd5909dcc44.jpg'
import image3 from '../assets/59aa8aa09140a3106b8f60a32b596891.jpg'
import tabby from '../assets/tabby.jpg'
import tamara from '../assets/tamara.png'
import PackageCard from "./PackageCard";

const Packages = () => {
  const [activeService, setActiveService] = useState("Polishing");
  const services = [
    { title: "Thermal Insulation", icon: FileSpreadsheet },
    { title: "Polishing", icon: Car },
    { title: "Paint Protection Films", icon: Shield },
    { title: "Nanoceramics", icon: Droplet },
    { title: "Packages", icon: Ambulance },
  ];
  const packages = [
    {
      title: "Bright Polishing",
      price: 400,
      oldPrice: 600,
      image: image1,
      warranty: "1 YEAR WARRANTY OR 20000 KM WHICHEVER FIRST.",
      installments: [
        { name: "Tabby", icon: tabby },
        { name: "Tamara", icon: tamara },
      ],
    },
    {
      title: "Autopia Full Polishing",
      price: 1200,
      oldPrice: 1600,
      image: image2,
      warranty: "1 YEAR WARRANTY OR 20000 KM WHICHEVER FIRST.",
      installments: [
        { name: "Tabby", icon: tabby },
        { name: "Tamara", icon: tamara },
      ],
    },
    {
      title: "Aqueous Bright Polishing",
      price: 800,
      oldPrice: 1000,
      image: image3,
      warranty: "1 YEAR WARRANTY OR 20000 KM WHICHEVER FIRST.",
      installments: [
        { name: "Tabby", icon: tabby },
        { name: "Tamara", icon: tamara   },
      ],
    },
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
      {/* Packages */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {packages.map((pkg, index) => (
          <PackageCard key={index} {...pkg} />
        ))}
      </div>
    </section>
  );
};

export default Packages;
