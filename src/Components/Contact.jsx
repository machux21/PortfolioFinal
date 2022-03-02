import React, { useState } from "react";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import validation from "../validation";

const initialForm = {
	name: "",
	email: "",
	message: "",
};

const Contact = () => {
	const [form, setForm] = useState(initialForm);
	const [loading, setLoading] = useState(false);
	const [errors, setErrors] = useState(initialForm);
	const [response, setResponse] = useState(null);
	const handleChange = (e) => {
		const { name, value } = e.target;
		setForm({ ...form, [name]: value });
	};
	const handleBlur = (e) => {
		handleChange(e);
		setErrors(validation(form));
	};
	const handleKeyUp = (e) => {
		handleChange(e);
		setErrors(validation(form));
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		setLoading(true);
		fetch("https://formsubmit.co/ajax/ebc7d088d5e53ab272f07a91389e03fa", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Accept: "application/json",
			},
			body: JSON.stringify(form),
		})
			.then((response) => response.json())
			.then((data) => {
				setLoading(false);
				setResponse(data);
				setTimeout(() => {
					setResponse(null);
				}, 5000);
			})
			.catch((error) => console.log(error));

		setForm(initialForm);
		setErrors(initialForm);
	};
	console.log(response);
	return (
		<Box>
			<Box
				sx={{
					width: { xs: "90vw", md: "50vw" },
					margin: "0 auto",
					mt: {xs: 2 , md: 8},
				}}
			>
				<form
					onSubmit={handleSubmit}
					style={{
						width: "100%",
						display: "flex",
						flexDirection: "column",
					}}
				>
					<Input
						type="text"
						name="name"
						placeholder="Name"
						value={form.name}
						onChange={handleChange}
						onKeyUp={handleKeyUp}
						onBlur={handleBlur}
						required
					/>
					{errors.name && <ErrorMessage>{errors.name}</ErrorMessage>}
					<Input
						type="email"
						name="email"
						placeholder="Email"
						value={form.email}
						onChange={handleChange}
						onKeyUp={handleKeyUp}
						onBlur={handleBlur}
						required
					/>
					{errors.email && (
						<ErrorMessage>{errors.email}</ErrorMessage>
					)}
					<Textarea
						cols="30"
						rows="10"
						name="message"
						value={form.message}
						placeholder="Write your message"
						onChange={handleChange}
						onBlur={handleBlur}
						onKeyUp={handleKeyUp}
						required
					/>
					{errors.message && (
						<ErrorMessage>{errors.message}</ErrorMessage>
					)}
					<Button
						disabled={
							Object.entries(errors).length === 0 ? false : true
						}
						type="submit"
					>
						{loading ? "Loading" : "Send"}
					</Button>
				</form>
				{response ? (
					<SuccessfulMessage>
						{response.message}
					</SuccessfulMessage>
				) : null}
			</Box>
		</Box>
	);
};

export default Contact;

//STYLED COMPONENTS
const SuccessfulMessage = styled('div')`
	height: 60px;
	background-color: green;
	color: white;
	padding: 5px;
	border-radius: 8px;
	line-height: 60px;
	text-align: center;
	font-size: 20px;
`
const ErrorMessage = styled("p")`
	background-color: #e62020;
	color: white;
	font-size: 20px;
	border-radius: 10px;
	padding: 4px;
	margin: 5px 0 5px 0;
`;
const Input = styled("input")`
	margin: 0;
	margin-top: 8px;
	height: 50px;
	font-size: 18px;
	border: none;
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
	margin: 10px 0 10px 0;
	border: none;
	border-radius: 7px;
	background-color: #357ded;
	color: white;
	transition: 0.2s;
	&:hover {
		background-color: #5A92ED;
		color: #192a45;
		cursor: pointer;
	}
	&:disabled {
		background-color: lightblue;
		color: grey;
		cursor: auto;
	}
`;
const Textarea = styled("textarea")`
	border-radius: 10px;
	border: none;
	resize: none;
	padding: 10px;
	margin-top: 10px;
	font-family: arial;
	font-size: 16px;
	&:focus {
		outline: none;
		border: 3px solid lightblue;
	}
`;
