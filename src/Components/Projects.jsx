import React from "react";
import Card from "./Card";
import data from '../projectsData';
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
		{data.map((d, i)=>(

			<Card 
				key={i} 
				title={d.title}
				longDescription={d.longDescription}
				shortDescription={d.shortDescription}
				coverPage={d.coverPage}
				features={d.features}
				stack={d.stack}
				link={d.link}
				img={d.img}
				/>
			))}
		</div>
	);
};

export default Projects;
