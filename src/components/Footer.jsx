import React from "react";
import { MapPin } from "lucide-react";
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-dark-2 text-white py-10">
      <div className="w-[80%] mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
        <div>
          <img src={logo} alt="logo" className="pb-4" />
          <p className="text-sm leading-relaxed mb-4">
            We are a premium 360 auto detailing studio, offering
            industry-leading services, products, and expertise in car care.
          </p>
          <div className="flex items-center text-sm gap-2 mb-2">
            <MapPin className="w-4 h-4 text-primary" />
            <span>Location</span>
          </div>
          <p className="text-sm mb-4">
            7846 King Saud Road, Southern State District, Dhahran, Saudi Arabia
          </p>
          <div className="flex items-center gap-4"></div>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Company</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-primary transition-colors">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-primary transition-colors">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-primary transition-colors">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-primary transition-colors">
                Booking
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-primary transition-colors">
                Contact Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-primary transition-colors">
                Franchise
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Services</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-primary transition-colors">
                Polishing
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-primary transition-colors">
                Thermal Insulation
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-primary transition-colors">
                Nanoceramics
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-primary transition-colors">
                Paint Protection Films
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-primary transition-colors">
                Other Related Services
              </a>
            </li>
          </ul>
        </div>

        {/* Help Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Help</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-primary transition-colors">
                FAQ
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-primary transition-colors">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-primary transition-colors">
                Terms & Conditions
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className=" w-full h-px bg-white mt-8 text-center text-sm">
      </div>
        <p className="text-center mt-5">&copy; 2024 Autopia. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
