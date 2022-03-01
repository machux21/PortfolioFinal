import React from "react";
import Card from "./Card";
import 'animate.css';
const Projects = () => {
	return (
		<div
			className="animate__animated animate__fadeInUp"
			style={{
				display: "flex",
				justifyContent: "start",
			}}
		>
			<Card />
			<Card />
			<Card />
			<Card />
		</div>
	);
};

export default Projects;
