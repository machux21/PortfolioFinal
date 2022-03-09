import React from "react";
import Styles from "./About.module.css";
import { Box, Tooltip } from "@mui/material";
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
	SiExpress,
} from "react-icons/si";

import { FaNode } from "react-icons/fa";
export const iconStyle = { width: "60px", height: "60px" };
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
					top: { xs: "42%", md: "46%" },

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
					sx={{
						width: "100vw",
						m: { xs: 1, md: 0 },
						display: "flex",
						flexWrap: "wrap",
						justifyContent: "space-around",
					}}
				>
					<Tooltip title="Git">
						<div>
							<SiGit
								style={{ ...iconStyle, color: "orangered" }}
							/>
						</div>
					</Tooltip>

					<Tooltip title="GitHub">
						<div>
						<SiGithub style={{ ...iconStyle, color: "white" }} />
						</div>
					</Tooltip>
					<Tooltip title="HTML5">
						<div>
							
						<SiHtml5 style={{ ...iconStyle, color: "orange" }} />
						</div>
					</Tooltip>
					<Tooltip title="CSS3">
						<div>
						<SiCss3 style={{ ...iconStyle, color: "#006fb4" }} />
						</div>
					</Tooltip>
					<Tooltip title="JavaScript">
						<div>
						<SiJavascript
							style={{ ...iconStyle, color: "yellow" }}
						/>
						</div>
					</Tooltip>

					<Tooltip title="React">
						<div>
						<SiReact style={{ ...iconStyle, color: "#61dbfb" }} />
						</div>
					</Tooltip>
					<Tooltip title="Redux">
						<div>
						<SiRedux style={{ ...iconStyle, color: "violet" }} />
						</div>
					</Tooltip>
					<Tooltip title="Material UI">
						<div>
						<SiMaterialui style={{ ...iconStyle, color: "blue" }} />
						</div>
					</Tooltip>
					<Tooltip title="Styled Components">
						<div>
						<SiStyledcomponents
							style={{ ...iconStyle, color: "pink" }}
						/>
						</div>
					</Tooltip>
					<Tooltip title="NodeJS">
						<div>
						<FaNode style={{ ...iconStyle, color: "darkgreen" }} />
						</div>
					</Tooltip>
					<Tooltip title="Express">
						<div>
						<SiExpress style={{ ...iconStyle, color: "white" }} />
						</div>
					</Tooltip>
					<Tooltip title="Sequelize">
						<div>
						<SiSequelize style={{ ...iconStyle, color: "blue" }} />
						</div>
					</Tooltip>
					<Tooltip title="PostgreSQL">
						<div>
						<SiPostgresql
							style={{ ...iconStyle, color: "lightblue" }}
						/>
						</div>
					</Tooltip>
				</Box>
				<h3>About Me</h3>
				<p>
					I started in this world beacuse I watch the movie The Social
					Media XD
				</p>
				<a href="../FranciscoMachucaResume.pdf" target="_blank">
					Download CV
				</a>
			</Box>
		</Box>
	);
};

export default About;
