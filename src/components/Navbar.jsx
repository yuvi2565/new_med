import { Link, NavLink } from "react-router-dom";
import icon from "../assets/icon.png";
export default function Navbar() {
  return (
    <header className=" shadow-black sticky z-50  w-full font-sans">
      <nav className="bg-blue-500 border-gray-200 px-4 lg:px-6 py-2.5">
        <div className="flex flex-wrap justify-between items-center space-x-2 mx-auto max-w-screen-xl">
          <Link to="/" className="flex items-center">
            <img src={icon} style={{ height: 40, width: 40 }} alt="Logo" />
            <span className="font-bold text-white rounded-md px-3 py-2  font-open text-2xl mx-2">
              MedInsight
            </span>
          </Link>
          <div className="flex items-center lg:order-2">
            <Link
              to="/auth"
              className="text-black bg-blue-200 hover:bg-blue-300 font-bold rounded-lg text-sm px-2 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
            >
              Log in
            </Link>
            <Link
              to="#"
              className="text-black bg-blue-200 hover:bg-blue-300 font-bold rounded-lg text-sm px-2 lg:px-5  lg:py-2.5 mr-2 focus:outline-none"
            >
              Get started
            </Link>
          </div>
          <div
            className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                  `block py-2 pr-4 pl-3 duration-200 border-b  text-base font-medium ${
                    isActive ? "text-white" : "text-gray-900"
                  } lg:hover:bg-transparent  lg:border-0  hover:text-white lg:p-0`
                }
                >
                  Home
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/services"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 border-b  text-base font-medium ${
                      isActive ? "text-white" : "text-gray-900"
                    } lg:hover:bg-transparent  lg:border-0  hover:text-white lg:p-0`
                  }
                >
                  Services
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/team"
                  className={({ isActive }) =>
                  `block py-2 pr-4 pl-3 duration-200 border-b  text-base font-medium ${
                    isActive ? "text-white" : "text-gray-900"
                  } lg:hover:bg-transparent  lg:border-0  hover:text-white lg:p-0`
                }
                >
                  About Us
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
