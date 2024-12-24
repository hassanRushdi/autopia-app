import React from "react";
import SectionHeading from "./SectionHeading";
import {
  MapPin,
  Car,
  Clock,
  Calendar,
  Ticket,
  Banknote,
  Globe,
  Headset,
} from "lucide-react";

const SummarySection = () => {
  const summaryData = [
    { label: "Service", value: "-", icon: Headset },
    { label: "Car Size", value: "Small", icon: Car },
    { label: "Location", value: "-", icon: MapPin },
    { label: "Additional Services", value: "-", icon: Globe },
    { label: "Date And Time", value: "-", icon: Calendar },
    { label: "Execution Time", value: "5 Hours", icon: Clock },
    {
      label: "Discount Code",
      value: "Discount Coupon Was Not Applied",
      icon: Ticket,
    },
    { label: "Total Price", value: "5 SAR", icon: Banknote },
  ];

  return (
    <section className="w-[80%] mx-auto my-7">
      <SectionHeading heading="SUMMARY & EMPHASIS" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {summaryData.map(({ label, value, icon: Icon }) => (
          <div
            key={label}
            className="bg-dark-2 p-4 rounded-lg flex justify-between items-center"
          >
            <div>
              <p className="text-white mb-2">{label}</p>
              <p
                className={`${
                  value.includes("-") || value.includes(null)
                    ? "text-white"
                    : "text-primary"
                }`}
              >
                {value || "-"}
              </p>
            </div>
            <Icon className="w-6 h-6 text-white" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default SummarySection;
