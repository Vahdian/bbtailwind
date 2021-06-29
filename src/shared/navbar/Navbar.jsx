import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import voodgray from "../../assets/images/voodgraylogo.png";
import menu from "../../assets/images/burgermenu.svg";
import "../../pages/Landing/LandingPage.css";

export default function Navbar() {
  let [menuChange, setMenuChange] = useState(false);
  function openMenu() {
    if (menuChange === false) {
      setMenuChange(true);
    } else if (menuChange === true) {
      setMenuChange(false);
    }
    if (menuChange) {
      console.log("menu is shown");
    }
    if (!menuChange) {
      console.log("menu is hidden");
    }
  }
  function testFx(){
    console.log("Test")
  }
  return (
    <div>
      <div className="flex p-3 bg-white border-b border-gray-200 items-center hidden sm:flex">
        <div className="w-6/12">
          <img src={voodgray} className="h-10 ml-4" alt="My Vood"></img>
        </div>
        <div className="flex justify-around w-6/12 text-gray-600 px-14 items-center sm:text-medium">
          <NavLink to="/home" className=" hover:text-yellow-500">
            HOME
          </NavLink>
          <NavLink to="/about-us" className=" hover:text-yellow-500">
            ABOUT US
          </NavLink>
          <NavLink to="/app" className=" hover:text-yellow-500">
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
      <div className="flex sm:hidden absolute right-0">
        <img
          src={menu}
          className="p-4 h-16 w-16 z-50"
          onClick={() => openMenu()}
          alt="vegan menu"
        ></img>
      </div>
      <div
        className={
          menuChange
            ? "flex fixed w-full h-full bg-white z-50 flex flex-col text-6xl items-center p-16 text-center justify-between animation-fast font-bold  text-gray-600"
            : "hidden"
        }
      >
        <img
          src={voodgray}
          className="p-4 h-16 w-16 z-50"
          onClick={() => openMenu()}
          alt="vegan menu"
        ></img>
        <NavLink to="/home" className=" hover:text-yellow-500" onClick={()=> openMenu()}>
          HOME<span className="text-yellow-400"
        >.</span>
        </NavLink>
        <NavLink to="/about-us" className=" hover:text-yellow-500" onClick={()=> openMenu()}>
          ABOUT US<span className="text-yellow-400">.</span>
        </NavLink>
        <NavLink to="/app" className=" hover:text-yellow-500" onClick={()=> openMenu()}>
          APP<span className="text-yellow-400">.</span>
        </NavLink>
        <NavLink to="/vegan-lifestyle" className=" hover:text-yellow-500" onClick={()=> openMenu()}>
          VEGAN LIFESTYLE<span className="text-yellow-400">.</span>
        </NavLink>
        <NavLink to="/contact" className=" hover:text-yellow-500" onClick={()=> openMenu()}>
          CONTACT<span className="text-yellow-400">.</span>
        </NavLink>
      </div>
    </div>
  );
}
