import React from "react";
import { Stack, Box } from "@mui/material";

import { Link } from "react-router-dom";
import Styles from "./Navbar.module.css";
const Navbar = () => {
  return (
    <Box 
      component="nav" 
      sx={{ 
          width: "100vw",
          display: "flex",
          flexDirection: {xs: "column", md: "row"}, 
          justifyContent: {xs: "space-around", md: "space-between"}
        }}>
      <h1>
        <Link to="/">MachuxDEV</Link>
      </h1>

      <Stack direction="row" sx={{margin: {xs: "0 auto"}}} spacing={2}>
        <Link
          style={{ textDecoration: "none", color: "white", fontSize: "20px" }}
          to="/contact"
        >
          <h3>Contact Me</h3>
        </Link>
        <Link
          style={{ textDecoration: "none", color: "white", fontSize: "20px" }}
          to="/projects"
        >
          <h3>Projects</h3>
        </Link>
      </Stack>
    </Box>
  );
};
export default Navbar;
