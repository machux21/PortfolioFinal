import { useNavigate } from "react-router-dom";
import { useState } from "react";


//regex for validation
const regEmail = new RegExp(
	/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
);
export function validation(values) {
	let errors = {};
	if (values.name.length > 60) {
		errors.name = "Name must contain less than 60 characters";
	}
	if (!regEmail.test(values.email)) {
		errors.email = "Wrong email";
	}
	if (values.message) {
		errors.message = "Message must contain less than 300 characters";
	}
	return errors;
}

export function useForm(initialForm, validation) {
	let navigate = useNavigate();
	const [form, setForm] = useState(initialForm);
	const [errors, setErrors] = useState(initialForm);
	const [loading, setLoading] = useState(false);
	const [response, setResponse] = useState(null);
	const handleChange = (e) => {
		const { name, value } = e.target;
		setForm({ ...form, [name]: value });
	};
	const handleBlur = (e) => {
		handleChange(e);
		setErrors(validation(form));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setLoading(true);
		fetch
			.post("", form)
			.then((res) => res.json())
			.then((res) => {
				setLoading(false);
				setResponse({success: true, message: "Message sent"})
				console.log(res)
			})
			.catch((error) => {
				console.log(error)
				setResponse({success: false, message: "Message not sent"})
			});
		setForm(initialForm);
		setResponse(null);
		setErrors(initialForm);
		navigate("/");
	};

	return {
		form,
		errors,
		loading,
		response,
		handleChange,
		handleBlur,
		handleSubmit,
	};
}
