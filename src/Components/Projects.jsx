import React from "react";
import Card from "./Card";
import 'animate.css';
const Projects = () => {
	return (
		<div
			className="animate__animated animate__fadeInUp"
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
