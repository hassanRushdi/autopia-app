import { useState } from "react";
import SectionHeading from "./SectionHeading";
import VehicleCard from "./VehicleCard";
import bigCar from "../assets/big-car.png";
import mediumCar from "../assets/medium-car.png";
import smallCar from "../assets/small-car.png";

const VehicleGuide = () => {
  const [selectedSize, setSelectedSize] = useState("SMALL");
  const vehicles = [
    {
      type: "BIG",
      image: bigCar,
    },
    {
      type: "MEDIUM",
      image: mediumCar,
    },
    {
      type: "SMALL",
      image: smallCar,
    },
  ];
  return (
    <section className="w-[80%] mx-auto">
      <SectionHeading
        heading="VEHICLE SIZE"
        subHeading="Please Select Vehicle Size"
      />
      <div className="w-full max-w-5xl mx-auto p-6 flex flex-col">
        <div className="flex gap-4 h-[400px]">
          {vehicles.map((vehicle) => (
            <VehicleCard
              key={vehicle.type}
              type={vehicle.type}
              image={vehicle.image}
              isSelected={selectedSize === vehicle.type}
              onClick={() => setSelectedSize(vehicle.type)}
            />
          ))}
        </div>
        <div className="flex justify-center">
          <button className="btn-alt my-10">Cars Size Guide</button>
        </div>
      </div>
    </section>
  );
};

export default VehicleGuide;
