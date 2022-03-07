import React from "react";
import Card from "./Card";
import 'animate.css';
const Projects = () => {
	return (
		<div
			style={{
				
				margin: "0 auto",
				width: "90vw",
				display: "inline-flex",
				flexWrap: "wrap",
				//flexDirection: {xs: "column", sm: "column", md: "row"},
				justifyContent: "center",
				marginBottom: "15px"

			}}
		>
			<Card />
			<Card />
			<Card />
			<Card />
			<Card />
		</div>
	);
};

export default Projects;
