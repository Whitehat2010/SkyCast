import { useState } from "react";
import { Link } from "react-router-dom";
import ExtraNav from "../components/ExtraNav";
const Services = () => {
  const [openbar, setopenbar] = useState(false);
  function openSidebar() {
    if (openbar === true) setopenbar(false);
    else setopenbar(true);
  }
  return (
    <div>
      <ExtraNav a={openSidebar} b={openbar} />
      <div
        className={`${openbar ? "min-h-[20vh] w-full bg-[#303237] translate-y-0 transition-all absolute left-0 right-0" : "translate-y-[-200%] transition-all  absolute left-0 right-0"}`}
      >
        <ul className="text-white leading-[3] text-2xl font-bold text-center">
          <li>
            <Link to="/Home">Home</Link>
          </li>
          <li>
            <Link to="/About">About</Link>
          </li>
          <li>
            <Link to="/Contact">Contact</Link>
          </li>
          <li>
            <Link to="/Services">Services</Link>
          </li>
        </ul>
      </div>

      <div>
        <h1 className="text-5xl font-extrabold font-[cursive] text-center mt-4 mb-15">Our Services</h1>
        <ul className="flex flex-wrap gap-7 p-9">
          <li className="min-h-75 w-87.5 m-auto bg-[#adadad6e]  rounded-2xl">
            <div className="p-2">
              <img
                src="https://images.unsplash.com/photo-1597952681778-21b365d312ca?q=80&w=1025&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="IMG"
                className="rounded-2xl h-65 w-full"
              />
            </div>
            <div className="p-5">
              <h2 className="text-3xl text-center font-extrabold font-[cursive] mt-4 mb-4">
                Wheather Forcasting
              </h2>
              <p className="text-[13px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
                dolorem sint maxime quae odit totam repellendus corrupti enim
                obcaecati nemo ducimus cor0SFWHporis aspernatur nesciunt, beatae
                deleniti saepe ipsum cum harum?
              </p>
            </div>
          </li>
          <li className="min-h-75 w-87.5 m-auto bg-[#adadad6e]  rounded-2xl">
            <div className="p-2">
              <img
                src="https://images.unsplash.com/photo-1508402476522-c77c2fa4479d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="IMG"
                className="rounded-2xl h-65 w-full"
              />
            </div>
            <div className="p-5">
              <h2 className="text-3xl text-center font-extrabold font-[cursive] mt-4 mb-4">
                Space Details
              </h2>
              <p className="text-[13px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
                dolorem sint maxime quae odit totam repellendus corrupti enim
                obcaecati nemo ducimus cor0SFWHporis aspernatur nesciunt, beatae
                deleniti saepe ipsum cum harum?
              </p>
            </div>
          </li>
          <li className="min-h-75 w-87.5 m-auto bg-[#adadad6e]  rounded-2xl">
            <div className="p-2">
              <img
                src="https://images.unsplash.com/photo-1597952681778-21b365d312ca?q=80&w=1025&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="IMG"
                className="rounded-2xl h-65 w-full"
              />
            </div>
            <div className="p-5">
              <h2 className="text-3xl text-center font-extrabold font-[cursive] mt-4 mb-4">
                Wheather Forcasting
              </h2>
              <p className="text-[13px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
                dolorem sint maxime quae odit totam repellendus corrupti enim
                obcaecati nemo ducimus cor0SFWHporis aspernatur nesciunt, beatae
                deleniti saepe ipsum cum harum?
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Services;
