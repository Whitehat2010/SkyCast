import { useState } from "react";
import Logo from "./Logo";

const Navbar = (g) => {
  let b = g.props;
  let v = g.io;
  return (
    <div className="flex justify-between items-center w-[90%] m-auto p-1 h-15">
      <Logo />
      <ul>
        <li>
          <button
            onClick={() => {
           
              if ( v=== true) {
                b(false);
              } else {
                b(true);
              }
           
            }}
          >
            <span className="text-2xl md:hidden">
              <i className="fa-solid fa-bars "></i>
            </span>
            <span className="text-2xl font-medium hidden md:block">
              About Us
            </span>
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
