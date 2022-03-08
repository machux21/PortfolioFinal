import React from "react";
import { Box } from "@mui/material";
import { NavLink } from "react-router-dom";
import "../index.css";
const Navbar = () => {
  return (
    <Box
      sx={{
        p: {md: 2},
        margin: "0 auto",
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        justifyContent: "space-between",
      }}
    >
      <NavLink className={({ isActive }) => isActive ? "title" : "title-inactive"} to="/">
        <span>MachuxDEV</span>
      </NavLink>

      <Box sx={{ display: "flex", justifyContent: "space-around", mx: 2 }}>
        <NavLink
          className={({ isActive }) => isActive ? "active" : "inactive"}
          to="/projects"
        >
          <span>Projects</span>
        </NavLink>
        <NavLink
          className={({ isActive }) => isActive ? "active" : "inactive"}
          to="/contact"
        >
          <span>Contact Me</span>
        </NavLink>
      </Box>
    </Box>
  );
};
export default Navbar;
