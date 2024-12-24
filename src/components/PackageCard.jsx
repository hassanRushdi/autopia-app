import { Shield } from "lucide-react";
import React from "react";

const PackageCard = ({
  title,
  price,
  oldPrice,
  image,
  warranty,
  installments,
}) => {
  return (
    <div className="bg-dark-3 text-white rounded-2xl shadow-lg flex flex-col my-5">
      {/* Image */}
      <div className="relative w-full h-48 lg:h-[400px] rounded-md overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover" />
        {/* Badge */}
        <div className="absolute bottom-3 left-[-2px] bg-black bg-opacity-60 text-sm px-2 py-1 rounded-md">
          <span>⏱ Business Hours</span>
        </div>
      </div>

      <div className="px-4 py-6">
        <h3 className="text-xl font-semibold my-3">{title}</h3>
        <div className="flex items-center gap-2">
          <Shield className="text-primary" />
          <p className="text-sm mt-2">{warranty}</p>
        </div>
        <div className="flex items-center text-center justify-between mt-4 border rounded-lg p-3 cursor-pointer ">
          <p className="text-sm font-bold">
            Before <br /> <span className="text-red-500 line-through font-normal">{oldPrice} SAR</span>
          </p>
          <p className="text-2xl font-bold">{price} SAR</p>
          <p className="text-4xl font-extrabold">+</p>
        </div>
        <div className="flex justify-evenly gap-4 mt-5">
          <p className="text-sm pt-2">4 installments</p>
          {installments.map((installment, index) => (
            <img
              key={index}
              src={installment.icon}
              alt={installment.name}
              className="w-[50px] h-[30px] mb-4 rounded-md cursor-pointer"
            />
          ))}
        </div>
      </div>
      <div className="text-center font-bold text-primary cursor-pointer py-2 mt-auto bg-[#18301F] text-lg rounded-b-3xl transition-all hover:bg-green-700 hover:text-white">
        More Information
      </div>
    </div>
  );
};

export default PackageCard;
