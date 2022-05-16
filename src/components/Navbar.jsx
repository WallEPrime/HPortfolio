import React , {useState} from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "../assets/logo.png";
import {Link} from 'react-scroll'

const Navbar = () => {
    const[nav, setNav]=useState(false)
    const handleClick=() => setNav(!nav)
  return (
    <div className="fixed  uppercase w-full h-[85px] flex justify-between items-center px-4 bg-black text-gray-300">
      <div>
        <img src={Logo} alt="Logo" style={{ width: "50px" }} />
      </div>
      {/* Menu */}
      
        <ul className=" hidden md:flex">
          <li>
          <Link  to="home" smooth={true} duration={500} >
          Home
          </Link>
          </li>
          <li>
          <Link  to="about" smooth={true} duration={500} >
          About
          </Link>
          </li>
          <li>
          <Link  to="skill" smooth={true} duration={500} >
          Experience
          </Link>
          </li>
          <li>
          <Link  to="work" smooth={true} duration={500} >
          Work
          </Link>
          </li>
          <li>
          <Link  to="contact" smooth={true} duration={500} >
          Contact
          </Link>
          </li>
        </ul>
      

      {/* Burger */}
      <div  onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes/>}
      </div>

      {/* Mobile */}

      
        
        <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0A192F] flex flex-col justify-center items-center'}>

          <li  className="py-6 text-4xl">
          <Link onClick={handleClick} to="home" smooth={true} duration={500} >
          Home
          </Link>
          </li >
          <li className="py-6 text-4xl">
          <Link  onClick={handleClick} to="about" smooth={true} duration={500} >
          About
          </Link>
          </li>
          <li className="py-6 text-4xl">
          <Link onClick={handleClick}  to="skill" smooth={true} duration={500} >
          Experience
          </Link>
          </li>
          <li className="py-6 text-4xl"> 
          <Link  onClick={handleClick} to="work" smooth={true} duration={500} >
          Work
          </Link>
          </li>
          <li className="py-6 text-4xl"> 
          <Link  onClick={handleClick} to="contact" smooth={true} duration={500} >
          Contact
          </Link>
          </li>
        </ul>
     

      {/* Socials */}

      <div class="hidden"></div>
    </div>
  );
};

export default Navbar;
