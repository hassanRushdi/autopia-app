import React from "react";
import SectionHeading from "./SectionHeading";
import additonalServImg1 from "../assets/interior-detailing.jpg";
import additonalServImg2 from "../assets/removing-thermal.jpg";
import additonalServImg3 from "../assets/engine-wash.jpg";
import additonalServImg4 from "../assets/removing-full.jpg";
import AdditionalServicesCard from "./AdditionalServicesCard";

const AdditionalServices = () => {
  const additionalServices = [
    {
      title: "Interior Detailing",
      price: 80,
      oldPrice: 1000,
      image: additonalServImg1,
    },
    {
      title: "Removing Thermal Tint",
      price: 70,
      oldPrice: 1000,
      image: additonalServImg2,
    },
    {
      title: "Engine Wash",
      price: 90,
      oldPrice: 1000,
      image: additonalServImg3,
    },
    {
      title: "Removing Full PPF",
      price: 90,
      oldPrice: 1000,
      image: additonalServImg4,
    },
  ];
  return (
    <section className="my-10 w-[80%] mx-auto">
      <SectionHeading
        heading="ADDITIONAL SERVICES"
        subHeading="Please Select Additional Services"
      />
      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {additionalServices.map((service, index) => (
            <AdditionalServicesCard key={index} {...service} />
        ))}
      </div>
      {/* Note */}
      <p className="text-xl mt-5">
        <span className="text-primary">*</span> Autopia undertakes that all
        prices of the services provided on our website are identical to the
        prices of the branches and any seasonal discounts are automatically
        added to our website
      </p>
    </section>
  );
};

export default AdditionalServices;
