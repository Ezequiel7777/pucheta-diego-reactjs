/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link } from "react-router-dom";
const Nav = ({children}) => {

  return (
    <nav className="bg-emerald-500 border-gray-200 px-2 md:px-4 py-2.5 dark:bg-gray-900">
      <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
        <Link to="/">
          <div className="flex items-center">
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
              Nutrite
            </span>
          </div>
        </Link>
        <div className="flex items-center md:order-2">
          <Link to = "/planes-alimentarios/vegetariano">
        <div className="text-black dark:text-white font-medium rounded-lg text-sm px-4 py-2 md:px-5 md:py-2.5 mr-1 md:mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800">
            Plan Alimentario Vegetariano
          </div>
          </Link>
          <Link to = "/planes-alimentarios/mediterraneo">
          <div className="text-black dark:text-white font-medium rounded-lg text-sm px-4 py-2 md:px-5 md:py-2.5 mr-1 md:mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800">
          Plan Alimentario Mediterraneo
          </div>
          </Link>
          <Link to="/cart">
            { children }
          </Link>
          <button
            data-collapse-toggle="mega-menu"
            type="button"
            className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="mega-menu"
            aria-expanded="false"
          ></button>
        </div>

        <ul className="flex flex-col mt-4 font-medium md:flex-row md:space-x-8 md:mt-0">
          <li></li>
          <li>
            <div className="block py-2 pr-4 pl-3 text-gray-70"></div>
          </li>
          <li></li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
