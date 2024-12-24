import { Phone } from "lucide-react";
import logo from "../assets/logo.png";
const Header = () => {
  return (
    <section className=" bg-dark-2 py-5 ">
      <div className="flex justify-between w-[80%] mx-auto gap-5">
        {/* Logo */}
        <div>
          <a href="/">
            <img src={logo} alt="logo" className="w-[200px] h-full" />
          </a>
        </div>
        <div className="text-center">
          <div className="flex gap-2">
            <p>HOTLINE NUMBER</p>
            <Phone className="text-primary w-5" />
          </div>
          <p className="text-primary text-lg">9200 35 406</p>
        </div>
      </div>
    </section>
  );
};

export default Header;
