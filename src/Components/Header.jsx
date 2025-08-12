import React from "react";
import { NavLink } from "react-router";
import { Link } from "react-scroll";

// bg-[#1B3C53]

const Header = () => {
  return (
    <div className="bg-base-200 shadow-sm">
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
                <NavLink to="/">Home</NavLink>
              </li>

              <li>
                <Link to="about-me" smooth={true} duration={500} offset={-80}>
                  About Me
                </Link>
              </li>
              <li>
                <Link to="skills" smooth={true} duration={500} offset={-80}>
                  Skills
                </Link>
              </li>
              <li>
                <Link to="projects" smooth={true} duration={500} offset={-80}>
                  Projects
                </Link>
              </li>
              <li>
                <Link to="contact" smooth={true} duration={500} offset={-80}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <NavLink
            to="/"
            className="text-2xl fontcormorand font-bold text-black"
          >
            MD. IFTEKHAR
          </NavLink>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li className="text-black text-[16px] fontcormorand font-semibold">
              <NavLink to="/">Home</NavLink>
            </li>

            <li className="text-black text-[16px] fontcormorand font-semibold">
              <Link to="about-me" smooth={true} duration={500} offset={-80}>
                About Me
              </Link>
            </li>
            <li className="text-black text-[16px] fontcormorand font-semibold">
              <Link to="skills" smooth={true} duration={500} offset={-80}>
                Skills
              </Link>
            </li>
            <li className="text-black text-[16px] fontcormorand font-semibold">
              <Link to="projects" smooth={true} duration={500} offset={-80}>
                Projects
              </Link>
            </li>
            <li className="text-black text-[16px] fontcormorand font-semibold">
              <Link to="contact" smooth={true} duration={500} offset={-80}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn btn-outline fontcormorand text-black hover:text-black font-bold ">
            RESUME
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
