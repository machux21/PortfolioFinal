import React from "react";
import Styles from "./About.module.css";
import { styled } from "@mui/material/styles";
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
import Certificate from "../certificate.png";
import Machux from "../machux.jpg";
import Resume from '../FranciscoMachucaResume.pdf'
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
				<span style={{ fontSize: "25px" }}>
					I am Francisco Machuca, a Full Stack Developer specialized
					in React and Node.js
				</span>
				<h1>Technologies:</h1>
				<Box
					sx={{
						width: "100vw",
						m: { xs: 1, md: 0 },
						display: "flex",
						flexWrap: "wrap",
						justifyContent: "space-around",
						p: {xs: 2, md: 1}
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
							<SiGithub
								style={{ ...iconStyle, color: "white" }}
							/>
						</div>
					</Tooltip>
					<Tooltip title="HTML5">
						<div>
							<SiHtml5
								style={{ ...iconStyle, color: "orange" }}
							/>
						</div>
					</Tooltip>
					<Tooltip title="CSS3">
						<div>
							<SiCss3
								style={{ ...iconStyle, color: "#006fb4" }}
							/>
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
							<SiReact
								style={{ ...iconStyle, color: "#61dbfb" }}
							/>
						</div>
					</Tooltip>
					<Tooltip title="Redux">
						<div>
							<SiRedux
								style={{ ...iconStyle, color: "violet" }}
							/>
						</div>
					</Tooltip>
					<Tooltip title="Material UI">
						<div>
							<SiMaterialui
								style={{ ...iconStyle, color: "blue" }}
							/>
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
							<FaNode
								style={{ ...iconStyle, color: "darkgreen" }}
							/>
						</div>
					</Tooltip>
					<Tooltip title="Express">
						<div>
							<SiExpress
								style={{ ...iconStyle, color: "white" }}
							/>
						</div>
					</Tooltip>
					<Tooltip title="Sequelize">
						<div>
							<SiSequelize
								style={{ ...iconStyle, color: "blue" }}
							/>
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
				<LinkButton href={Resume} download>
					Download Resume
				</LinkButton>
				<Box sx={{ mt: 4 }}>
					<h1>About Me:</h1>
					<Box
						sx={{
							width: "200px",
							height: "200px",
							overflow: "hidden",
							margin: "0 auto",
						}}
					>
						<Tooltip title="This is me at Nahuel Huapi lake, Bariloche, Argentina">
							<img
								style={{
									width: "200px",
									height: "200px",
									margin: "0 auto",
									borderRadius: "100px",
								}}
								src={Machux}
								alt="Francisco"
							/>
						</Tooltip>
					</Box>
					<Box
						sx={{
							backgroundColor: "#15151d",
							fontSize: "25px",
							p: 2,
							width: { xs: "90vw", md: "79vw" },
							margin: "20px auto",
							borderRadius: "7px",
						}}
					>
						<p
							style={{
								fontStyle: "italic",
								textAlign: "justify",
							}}
						>
							"Well, where to start... I'm 21 years old and I'm
							from Argentina. My beginnings in programming were
							thanks to the movie The Social Network. I was
							interested in how a single student with a great idea
							and a computer created a social network that allowed
							us to communicate from anywhere in the world. It
							inspired me so much that I decided to quit my
							medical studies and start studying computer science
							at university. I am now in my second year and five
							months ago I finished the Soy Henry programming
							bootcamp. Thanks to my perseverance and discipline I
							am now a Full Stack Web developer and I am on my way
							to find my great idea to contribute to the world."
						</p>
					</Box>
					<p style={{ fontSize: "25px" }}>
						I show you my certificate of which I am very proud:
					</p>
					<Box
						sx={{
							width: { xs: "80vw", md: "60vw" },
							margin: "10px auto",
						}}
					>
						<img style={{width: "100%", height: "100%"}} src={Certificate} alt="Certificate" />
					</Box>
				</Box>
			</Box>
		</Box>
	);
};

const LinkButton = styled("a")`
  margin: 12px auto;
  text-decoration: none;
  display: block;
  background-color: #357ded;
  color: white;
  width: 180px;
  border-radius: 7px;
  height: 50px;
  line-height: 50px;
  &:hover{
    background-color: lightblue;
  }
`
export default About;
