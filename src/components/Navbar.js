import React from "react";

const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-[#fff] shadow-xl px-16">
        <div className="flex-1">
          <a href="/" className="text-2xl font-bold">Afnan Ferdousi</a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1 font-semibold">
            <li>
              <a>About</a>
            </li>
            <li>
              <a>Skills</a>
            </li>
            <li>
              <a>Projects</a>
            </li>
            <li>
              <a>Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
