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
          <p>HOTLINE NUMBER</p>
          {/* Icon */}
          <p className="text-primary">9200 35 406</p>
        </div>
      </div>
    </section>
  );
};

export default Header;
