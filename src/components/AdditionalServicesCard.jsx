import React from "react";

const AdditionalServicesCard = ({ title, price, oldPrice, image }) => {
  return (
    <div className="rounded-3xl shadow-lg p-4 flex flex-col">
      {/* Image */}
      <div
        style={{ backgroundImage: `url(${image})`, backgroundSize: "cover" }}
        className="relative w-full h-[350px] rounded-3xl overflow-hidden flex flex-col"
      >
        <div className="text-center font-bold text-xl p-4 bg-black bg-opacity-70">
          {title}
        </div>
        <div className="absolute top-[20%] left-[-8px] bg-black bg-opacity-70 text-sm px-6 py-2 rounded-md">
          <span>8 Business Hours</span>
        </div>
        <div className="flex flex-col gap-1 items-center justify-center h-full">
          <p className="">
            <span className="text-3xl font-extrabold">{price}</span> SAR
          </p>
          <p className="text-sm font-bold text-center">
            Before <br />{" "}
            <span className="text-red-500 line-through font-normal">
              {oldPrice} SAR
            </span>
          </p>
          <div className="flex items-center  justify-between mt-4 border rounded-lg p-2 cursor-pointer gap-3 ">
            <p className="text-lg font-bold">Select Service</p>
            <p className="text-2xl font-extrabold">+</p>
          </div>
        </div>
        <div className="text-center font-bold text-primary cursor-pointer py-2 mt-auto bg-[#18301F] text-lg rounded-b-3xl transition-all hover:bg-green-700 hover:text-white">
        More Information
      </div>
      </div>
      
    </div>
  );
};

export default AdditionalServicesCard;
