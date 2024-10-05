import { Link } from "react-router-dom";

import { AiOutlineHeart, AiOutlineSearch, AiOutlineUser } from "react-icons/ai";
import { IoCartOutline } from "react-icons/io5";
const HeaderComponent = () => {
  return (
    <header>
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-3 gap-8 items-center *:font-poppins mt-3">
          <div className="flex">
            <img src="public/Meubel House_Logos-05.png" alt="Nhshop" />
            <p className="font-bold text-4xl font-montserrat">Furnio</p>
          </div>
          <nav>
            <ul className=" flex justify-center space-x-5 *:font-medium">
              <li className="hover:text-red-500 transition-colors duration-500">
                <Link to="/">Home</Link>
              </li>
              <li className="hover:text-red-500 transition-colors duration-500">
                <Link to="/shop">Shop</Link>
              </li>
              <li className="hover:text-red-500 transition-colors duration-500">
                <Link to="/about">About</Link>
              </li>
              <li className="hover:text-red-500 transition-colors duration-500">
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </nav>
          <div className="space-x-3 flex justify-center ">
            <Link
              to="/auth/login"
              className=" hover:text-red-500 transition-colors duration-500"
            >
              <AiOutlineUser />
            </Link>
            <Link
              to="/search"
              className=" hover:text-red-500 transition-colors duration-500"
            >
              <AiOutlineSearch />
            </Link>
            <Link
              to="/withlist"
              className=" hover:text-red-500 transition-colors duration-500"
            >
              <AiOutlineHeart />
            </Link>
            <Link
              to="/withlist"
              className=" hover:text-red-500 transition-colors duration-500"
            >
              <IoCartOutline />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderComponent;
