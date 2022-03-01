import React from "react";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
import Styles from "./Navbar.module.css";
const Navbar = () => {
  return (
    <Box 
      className={Styles.navbar}
      component="nav" sx={{ width: "100vw" }}>
      <h1>
        <Link to="/">MachuxDEV</Link>
      </h1>

      <ul className={Styles.items}>
        <li>
          <Link to="/contact">Contact Me</Link>
        </li>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
      </ul>
    </Box>
  );
};
export default Navbar;
