import React from "react";
import { NavLink } from "react-router-dom";
import Spanish from "../../assets/img/Spanish.png";
import English from "../../assets/img/English Flag.png";
import logo from "../../assets/img/bbwhite2.png";
import "./Navbar.css";

export default function Navbar() {
  return (
    <div>
      <nav className="navbar flex align-center bg-black justify-center sm:justify-between px-20">
        <div className="navbar_1 items-center flex">
          <img
            src={logo}
            alt="BlackBehaviour"
            className="logoENGwhite h-12 m-4"
          />
        </div>
        <div className="navbar_2 flex items-center sm:justify-around p-4 hidden sm:flex">
          <NavLink
            to="/home"
            className="navlink p-4 decoration-none text-white hover:text-custom-yellow"
          >
            HOME
          </NavLink>
          <NavLink
            to="/aboutus"
            className="navlink p-4 decoration-none text-white"
          >
            ABOUT US
          </NavLink>
          <NavLink
            to="/services"
            className="navlink p-4 decoration-none text-white"
          >
            SERVICES
          </NavLink>
          <NavLink
            to="/contact"
            className="navlink p-4 decoration-none text-white"
          >
            CONTACT US
          </NavLink>
          <NavLink to="/homesp">
            {" "}
            <img src={Spanish} alt="Spanish" className="Spanish h-8 m-4" />
          </NavLink>
          <NavLink to="/home">
            {" "}
            <img src={English} alt="English" className="English h-8 m-4" />
          </NavLink>
        </div>
      </nav>
    </div>
  );
}
