import React from "react";
import Card from "./Card";
import {Box} from '@mui/material';
import 'animate.css';
const Projects = () => {
	return (

		<Box
			className="animate__animated animate__fadeInUp"
			sx={{
				mt: {xs: 3, md: 4},
				width: "100vw",
				margin: "0 auto",
				overflow: "hidden",
				p:1,
				display: "flex",
				justifyContent: "start",
			}}
		>
			
			<Card />
			<Card />
			<Card />
			<Card />
		</Box>
	);
};

export default Projects;
