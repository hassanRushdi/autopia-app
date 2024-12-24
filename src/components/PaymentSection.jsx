import React, { useState } from "react";
import SectionHeading from "./SectionHeading";
import { CreditCard, Banknote } from "lucide-react";
import tabby from '../assets/tabby.jpg'
import tamara from '../assets/tamara.png'

const PaymentSection = () => {
  const [selectedMethod, setSelectedMethod] = useState("");
  const paymentOptions = [
    { id: "card", label: "MasterCard / Visa / Apple Pay", icon: CreditCard },
    { id: "tabby", label: "Tabby", logo: tabby },
    { id: "tamara", label: "Tamara", logo: tamara },
    { id: "branch", label: "Payment At The Branch", icon: Banknote },
  ];

  const handleMethodSelect = (methodId) => {
    setSelectedMethod(methodId);
  };

  return (
    <section className="w-[80%] mx-auto my-10">
      <SectionHeading heading="PAYMENT METHOD" />
        <div className="space-y-4">
          {paymentOptions.map((option) => (
            <label
              key={option.id}
              className="flex items-center justify-between p-4 bg-dark-2 rounded-lg cursor-pointer hover:bg-[#003f10] transition-colors"
              onClick={() => handleMethodSelect(option.id)}
            >
              <div className="flex items-center">
                <div className="w-6 h-6 rounded-full border-2 border-white mr-4 flex items-center justify-center">
                  {selectedMethod === option.id && (
                    <div className="w-3 h-3 rounded-full bg-primary"></div>
                  )}
                </div>
                <span className="text-white">{option.label}</span>
              </div>
              {option.icon ? (
                <option.icon className="w-6 h-6 text-white" />
              ) : (
                <img src={option.logo} alt={option.label} className="h-8" />
              )}
            </label>
          ))}
        </div>

        <button className="w-full max-w-md mx-auto mt-8 py-3 bg-primary text-dark-1 rounded-lg font-bold hover:bg-green-600 hover:text-white transition-colors block">
          Confirm Booking & Payment
        </button>
    </section>
  );
};

export default PaymentSection;