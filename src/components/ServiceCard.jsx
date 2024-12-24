const ServiceCard = ({ icon: Icon, title, isActive, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`
      flex flex-col items-center justify-center gap-4 px-10 py-6
      rounded-2xl transition-all duration-300 cursor-pointer
      ${
        isActive
          ? "bg-gradient-to-b from-[#00FF00] via-[#00B300] to-[#006600]"
          : "bg-gradient-to-b from-[#004400] via-[#003300] to-[#002200] hover:from-[#005500] hover:via-[#004400] hover:to-[#003300]"
      }
    `}
    >
      <Icon size={32} className="text-white" strokeWidth={1.5} />
      <span className="text-white text-sm text-center font-medium">
        {title}
      </span>
    </div>
  );
};

export default ServiceCard;
