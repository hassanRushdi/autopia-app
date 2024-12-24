import React, { useState } from "react";
import SectionHeading from "./SectionHeading";
import { Banknote } from "lucide-react";
import morni from '../assets/morni.png'

const BookingInfo = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        discountCoupon: ''
      });
    
      const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };
  return (
    <section className="w-[80%] mx-auto py-10">
      <SectionHeading heading="BOOKING INFORMATION" />
      {/* Form */}
      <div className=" p-8  text-white">
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block mb-2 text-sm">First Name</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="w-full p-3 rounded bg-dark-2 focus:outline-none"
                placeholder="First Name"
              />
            </div>

            <div>
              <label className="block mb-2 text-sm">Last Name</label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="w-full p-3 rounded bg-dark-2 focus:outline-none"
                placeholder="Last Name"
              />
            </div>
          </div>

              <label className="block mb-2 text-sm justify-start">Phone Number</label>
          <div className="flex gap-4">
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-1/2 p-3 rounded bg-dark-2 focus:outline-none"
                placeholder="XXXXXXXXXX"
              />
            <button className="px-6 py-3 bg-primary rounded text-dark-1 font-bold border-primary outline-none hover:bg-transparent hover:text-white hover:border  transition-all ease-in-out">
              OTP
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block mb-2 text-sm">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 rounded bg-dark-2 focus:outline-none"
                placeholder="Email"
              />
            </div>

            <div className="flex gap-2">
              <div className="flex-grow">
                <label className="block mb-2 text-sm">Discount Coupon</label>
                <input
                  type="text"
                  name="discountCoupon"
                  value={formData.discountCoupon}
                  onChange={handleChange}
                  className="w-full p-3 rounded bg-dark-2 focus:outline-none"
                  placeholder="Discount Coupon"
                />
              </div>
              <button className="self-end px-6 py-3 border border-primary text-primary rounded font-bold hover:bg-primary hover:text-white transition-colors">
                Apply
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <button className="relative flex items-center gap-2 p-4 rounded-lg bg-dark-2 hover:border-green-500 transition-colors">
                <div className="absolute top-0 left-0 rounded w-full h-2 bg-[#00E30033]"></div>
              <div className="w-6 h-6 rounded-full border-2 border-gray-400"></div>
              <span>Do You Have Voucher Code?</span>
              <span className="ml-auto text-primary"><Banknote /></span>
            </button>

            <button className="relative flex items-center gap-2 p-4 rounded bg-dark-2 hover:border-green-500 transition-colors">
            <div className="absolute top-0 left-0 rounded w-full h-2 bg-[#00E30033]"></div>
              <div className="w-6 h-6 rounded-full border-2 border-gray-400"></div>
              <span>Now It's Easy To Reach Us, Pick The Truck Type</span>
              <span className="ml-auto"><img src={morni} alt="morni" className="w-24 h-20 object-cover" /></span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingInfo;
