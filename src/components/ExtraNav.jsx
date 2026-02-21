import {useState} from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";

const ExtraNav = (props) => {
    
  return (
    <div className="h-[8vh] w-full flex items-center justify-between p-4  text-white">
      <div>
        <Logo />
      </div>
      <ul className="sm:flex gap-6 hidden text-2xl">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/About">About Us</Link>
        </li>
        <li>
          <Link to="/Contact">Contact</Link>
        </li>
        <li>
          <Link to="/Services">Services</Link>
        </li>
      </ul>
      <div className="block sm:hidden text-2xl">
        <button
          onClick={() => {
                      props.a();
                      
          }}
        >
          <span>
            <i className="fa-solid fa-bars "></i>
          </span>
        </button>
      </div>
    </div>
  );
};

export default ExtraNav;
