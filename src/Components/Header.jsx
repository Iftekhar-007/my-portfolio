import React from "react";
import { NavLink } from "react-router";

const Header = () => {
  return (
    <div className="bg-[#1B3C53]">
      <div className="navbar w-10/12 mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <a className="text-black">Home1</a>
              </li>

              <li>
                <a className="text-black">Item 3</a>
              </li>
            </ul>
          </div>
          <NavLink
            to="/"
            className="text-2xl font-[philosopher] font-bold text-[#F9F3EF]"
          >
            MD. IFTEKHAR
          </NavLink>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li className="text-[#F9F3EF] text-[16px] font-semibold">
              <a>Home</a>
            </li>

            <li className="text-[#F9F3EF] text-[16px] font-semibold">
              <a>Item 3</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn btn-outline font-[philosopher] text-[#F9F3EF] hover:text-black font-bold ">
            RESUME
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
