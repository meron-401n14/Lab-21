import React from "react";

import { NavLink } from "react-router-dom";

const Header = () => (
  <header>
    <nav>
      <li><NavLink to="/">Home</NavLink> </li>
      <li><NavLink to="/Draw">Draw</NavLink></li>
      <li> <NavLink to="/About">About</NavLink></li>
    </nav>



  </header>
)
    



export default Header;



  