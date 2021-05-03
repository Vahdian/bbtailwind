import React from "react";
import { NavLink } from "react-router-dom";
import voodgray from "../../assets/images/voodgraylogo.png";

export default function Navbar() {
  return (
    <div className="flex p-3 bg-white border-b border-gray-200 items-center">
      <div className="w-6/12">
        <img src={voodgray} className="h-10git  ml-4"></img>
      </div>
      <div className="flex justify-around w-6/12 text-gray-600 px-14 items-center">
        <NavLink to="/home" className=" hover:text-yellow-500">
          HOME
        </NavLink>
        <NavLink to="/about-us" className=" hover:text-yellow-500">
          ABOUT US
        </NavLink>
        <NavLink to="/myvood-app" className=" hover:text-yellow-500">
          APP
        </NavLink>
        <NavLink to="/vegan-lifestyle" className=" hover:text-yellow-500">
          VEGAN LIFESTYLE
        </NavLink>
        <NavLink to="/contact" className=" hover:text-yellow-500">
          CONTACT
        </NavLink>
      </div>
    </div>
  );
}
