import React from "react";
import carPhoto from "../assets/car-hero.jpg";

const OfferCard = () => {
  return (
    <section className="container mx-auto w-[80%] py-5 mb-5">
      <div className="relative rounded-lg overflow-hidden">
        <img
          src={carPhoto}
          alt="car offer"
          className="object-cover w-full opacity-50"
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center gap-10 justify-between"> 
          <div className="bg-primary rounded-lg p-8 text-center w-[250px]">
            <h2 className="text-3xl font-bold text-black mb-2 leading-10">
              THE YEAR <br /> END OF <br /> OFFERS
            </h2>
          </div>
          <div className="text-white text-center"> {/* Discount text */}
            <p className="text-3xl font-bold">DISCOUNTS UP TO</p>
            <span className="text-7xl font-extrabold">%40</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfferCard;
