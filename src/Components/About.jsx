import React from "react";
import Styles from "./About.module.css";
import { Box } from "@mui/material";
import {
	SiReact,
	SiRedux,
	SiJavascript,
	SiSequelize,
	SiMaterialui,
	SiHtml5,
	SiCss3,
	SiGit,
	SiGithub,
	SiPostgresql,
	SiStyledcomponents,
	SiExpress
} from "react-icons/si";
import {Link} from 'react-router-dom'
import { FaNode } from "react-icons/fa";
export const iconStyle = {width: "60px", height: "60px"}
const About = () => {
	return (
		<Box>
			<div className={Styles.content}>
				<div className={Styles.content__container}>
					<p className={Styles.content__container__text}>Hello</p>

					<ul className={Styles.content__container__list}>
						<li className={Styles.content__container__list__item}>
							World!
						</li>
						<li className={Styles.content__container__list__item}>
							Recruiters!
						</li>
						<li className={Styles.content__container__list__item}>
							Clients!
						</li>
						<li className={Styles.content__container__list__item}>
							Everybody!
						</li>
					</ul>
				</div>
			</div>
			<Box
				sx={{
					position: "absolute",
					top: "50%",
					
					margin: "0 auto",
					textAlign: "center",
				}}
			>
				<h3>
					I am Francisco Machuca, a Full Stack Developer especialized
					in React and React Native
				</h3>
				<p>Technologies</p>
				<Box
					sx={{width: "100vw",display: "flex", flexWrap: "wrap", justifyContent:"space-around"}}
				>
					<SiGit style={{...iconStyle, color: "orangered"}}/>
					<SiGithub style={{...iconStyle, color: "white"}} />
					<SiHtml5 style={{...iconStyle, color: "orange"}}/>
					<SiCss3 style={{...iconStyle, color: "#006fb4"}}/>
					<SiJavascript style={{...iconStyle, color: "yellow"}} />
					<SiReact style={{...iconStyle, color: "#61dbfb"}}/>
					<SiRedux style={{...iconStyle, color: "violet"}}/>
					<SiMaterialui style={{...iconStyle, color: "blue"}}/>
					<SiStyledcomponents style={{...iconStyle, color: "pink"}}/>
					<FaNode style={{...iconStyle, color: "darkgreen"}}/>
					<SiExpress style={{...iconStyle, color: "white"}}/>
					<SiSequelize style={{...iconStyle, color: "blue"}}/>
					<SiPostgresql style={{...iconStyle, color: "lightblue"}}/>
				</Box>
				<h3>About Me</h3>
				<p>
					I started in this world beacuse I watch the movie The Social
					Media XD
				</p>
				<a href="../FranciscoMachucaResume.pdf" target="_blank" download>Download CV</a>
			</Box>
		</Box>
	);
};

export default About;
