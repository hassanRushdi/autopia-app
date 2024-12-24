const VehicleCard = ({ type, image, isSelected, onClick, isLast }) => {
  return (
    <div
      onClick={onClick}
      className={`relative cursor-pointer transition-all duration-300 rounded-md ${
        isSelected
          ? `flex-[3] bg-gradient-to-b from-[#00FF00] via-[#00B300] to-[#006600] ${
              isLast ? "rounded-r-[2rem]" : ""
            }`
          : `flex-1 bg-gradient-to-b from-[#004400] via-[#003300] to-[#002200] hover:from-[#005500] hover:via-[#004400] hover:to-[#003300]`
      }`}
    >
      {/* Bottom platform gradient for selected card */}
      {isSelected && (
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-primary" />
      )}

      {/* Content container */}
      <div className="relative h-full flex flex-col">
        {/* Text */}
        <div className="p-8">
          <h3 className="text-white text-xl font-bold tracking-wider">
            {type}
          </h3>
        </div>

        {/* Image container */}
        <div className="mt-auto h-[60%] relative">
          <img
            src={image}
            alt={`${type} vehicle`}
            className={`absolute bottom-0 left-1/2 -translate-x-1/2 object-contain transition-all duration-300 ${
              isSelected ? "w-[90%]" : "w-[85%] opacity-90"
            }`}
          />
        </div>
      </div>
    </div>
  );
};

export default VehicleCard;
