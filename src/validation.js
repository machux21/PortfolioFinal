//regex for validation
const regEmail = new RegExp(
	/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
);
//validate function
export default function validation(values) {
	let errors = {};
	if (values.name.length < 5 || values.name.length > 60) {
		errors.name = "Name must contain between 5 and 60 characters";
	}
	if (!regEmail.test(values.email)) {
		errors.email = "Wrong email";
	}
	if (values.message.length < 10 ||values.message.length > 500) {
		errors.message = "Message must contain between 10 and 300 characters";
	}
	return errors;
}

