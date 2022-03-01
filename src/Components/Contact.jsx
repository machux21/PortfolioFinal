import React from "react";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";


const Contact = () => {
	return (
		<Box
			sx={{
				width: "100vw",
				margin: "0 auto",
			}}
		>
			<Box
				variant="form"
				sx={{
					width: { xs: "90vw", md: "45vw" },
					margin: "0 auto",
					mt: 8,
					display: "flex",
					flexDirection: "column",
					justifyContent: "center",
				}}
			>
				<Input type="text" placeholder="Nombre" required />
				<Input type="email" placeholder="Email" required />
				<Textarea
					name="message"
					cols="30"
					rows="10"
					placeholder="Write your message"
					required
				/>
				<Button type="submit">Send</Button>
			</Box>
		</Box>
	);
};

export default Contact;

//STYLED COMPONENTS
const Input = styled("input")`
	margin: 0;
	margin-bottom: 8px;
	height: 50px;
	font-size: 18px;
	border-radius: 10px;
	padding-left: 20px;
	border: none;
	&:focus {
		outline: none;
		border: 3px solid lightblue;
	}
`;
const Button = styled("button")`
	width: 100%;
	height: 50px;
	margin: 0 auto;
	border: none;
	border-radius: 7px;
	background-color: #357ded;
	color: white;
	transition: 0.2s;
	&:hover {
		background-color: lightblue;
		color: #192a45;
		cursor: pointer;
	}
`;
const Textarea = styled("textarea")`
	border-radius: 10px;
	border: none;
	resize: none;
	padding: 10px;
	margin-bottom: 10px;
	font-family: arial;
	font-size: 16px;
	&:focus {
		outline: none;
		border: 3px solid lightblue;
	}
`;
