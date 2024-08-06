import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { ThemeContext } from "../App";
import { useAuth } from "../auth";
import { menuOptions } from "../utils";
import Loading from "./Loading";
import NavLogo from "./NavLogo";

const Header = ({ setTheme }) => {
  const theme = useContext(ThemeContext);
  const { isLoggedIn, user, isLoading } = useAuth();
  const [showMenuOpt, setShowMenuOpt] = useState(false);
  if (isLoading) {
    return <p>Loading....</p>;
  }

  return (
    <div className="mb-[4.3rem] ">
      <nav className="bg-[#ffe7e7] dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link
            to="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
           <NavLogo/>
          </Link>
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <div></div>
            {isLoggedIn ? (
              <Link to="/logout">
                <button
                  type="button"
                  className="text-white bg-pink-500 hover:bg-pink-700 md:text-md text-sm  hover:scale-105 duration-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Logout
                </button>
              </Link>
            ) : (
              <Link to="/login">
                <button
                  type="button"
                  className="text-white bg-pink-500 hover:bg-pink-700 md:text-md text-sm hover:scale-105 duration-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg  px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Login
                </button>
              </Link>
            )}
            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-sticky"
              aria-expanded="false"
              onClick={() => setShowMenuOpt(!showMenuOpt)}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          <div
            className={`${
              showMenuOpt ? "block" : "hidden"
            } items-center justify-between w-full md:flex md:w-auto md:order-1`}
            id="navbar-sticky"
          >
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-[#ffe7e7] md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-[#ffe7e7] dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              {menuOptions.map((menu) => {
                return (
                  <li key={menu.opt}>
                    <Link
                      onClick={() => setShowMenuOpt(!showMenuOpt)}
                      to={menu.route}
                      className="block py-2 px-3 text-lg font-semibold text-black hover:scale-[115%]  duration-500 rounded md:bg-transparent md:text-pink-600 md:p-0 md:dark:text-blue-500"
                      aria-current="page"
                    >
                      {menu.opt}
                    </Link>
                  </li>
                );
              })}
              {user?.isAdmin && (
                <li>
                  <Link
                    onClick={() => setShowMenuOpt(!showMenuOpt)}
                    to="/admin"
                    className="block py-2 px-3 text-lg font-semibold text-black hover:scale-[115%]  duration-500 rounded md:bg-transparent md:text-pink-600 md:p-0 md:dark:text-blue-500"
                    aria-current="page"
                  >
                    ADMIN
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
