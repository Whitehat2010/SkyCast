import React from "react";
import Logo from "./Logo";
import { Link } from "react-router-dom";
const Sidebar = (f) => {

  let k = f.bh;
 
  return (
    <div
      className={`${k ? "min-w-[40vw] bg-black md:bg-[#adadad32] fixed top-0 left-0 z-100  h-screen md:min-h-[95vh] md:rounded-2xl md:static translate-x-0 md:translate-0 transition md:block p-6 md:transition-none" : "bg-[#adadad32] fixed top-0 left-0 z-100  h-[95vh]  md:static  rounded-2xl md:ml-3 w-[45vh]  translate-x-[-150%] md:translate-0 md:block p-6"}`}
    >
      <ul className="flex flex-col gap-5">
        <Link to="/">
          <li>
            <Logo />
          </li>
        </Link>
        <li className="p-3 bg-[#ffffff11] rounded-xl text-xl pl-5 ">
          <Link to="/">Home</Link>
        </li>
        <li className="p-3 bg-[#ffffff11] rounded-xl text-xl pl-5 ">
          <Link to="/About">About</Link>
        </li>
        <li className="p-3 bg-[#ffffff11] rounded-xl text-xl pl-5 ">
          <Link to="/Services">Services</Link>
        </li>
        <li className="p-3 bg-[#ffffff11] rounded-xl text-xl pl-5 ">
          <Link to="/Contact">Contact</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
