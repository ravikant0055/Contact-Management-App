import React from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css";
const Navbar = () => {
  return (
    <nav>
       <ul>
        <li>
            <Link to="/createcontact">Contact</Link>
            <Link to="/map">Charts/Map</Link>
        </li>
       </ul>
    </nav>
  );
};

export default Navbar;