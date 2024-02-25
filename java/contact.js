// const form  = document.getElementById('signup');

// form.addEventListener('submit', (event) => {
//     // handle the form data
// });

// form.addEventListener('submit', (event) => {
//     // stop form submission
//     event.preventDefault();
// });
// form.submit();



// form.elements[0]; // by index
// form.elements['name']; // by name
// form.elements['name']; // by id (name & id are the same in this case)

// form.elements[1]; // by index
// form.elements['email']; //  by name
// form.elements['email']; // by id


// const name = form.elements['name'];
// const email = form.elements['email'];

// // getting the element's value
// let fullName = name.value;
// let emailAddress = email.value;

// show a message with a type of the input
function showMessage(input, message, type) {
	// get the small element and set the message
	const msg = input.parentNode.querySelector("small");
	msg.innerText = message;
	// update the class for the input
	input.className = type ? "success" : "error";
	return type;
}

function showError(input, message) {
	return showMessage(input, message, false);
}

function showSuccess(input) {
	return showMessage(input, "", true);
}

function hasValue(input, message) {
	if (input.value.trim() === "") {
		return showError(input, message);
	}
	return showSuccess(input);
}

function validateEmail(input, requiredMsg, invalidMsg) {
	// check if the value is not empty
	if (!hasValue(input, requiredMsg)) {
		return false;
	}
	// validate email format
	const emailRegex =
		/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

	const email = input.value.trim();
	if (!emailRegex.test(email)) {
		return showError(input, invalidMsg);
	}
	return true;
}

const form = document.getElementById("signup");

const NAME_REQUIRED = "Please enter your name";
const EMAIL_REQUIRED = "Please enter your email";
const EMAIL_INVALID = "Please enter a correct email address format";

form.addEventListener("submit", function (event) {
	// stop form submission
	event.preventDefault();

	// validate the form
	let nameValid = hasValue(form.elements["name"], NAME_REQUIRED);
	let emailValid = validateEmail(form.elements["email"], EMAIL_REQUIRED, EMAIL_INVALID);
	// if valid, submit the form.
	if (nameValid && emailValid) {
		alert("Thank you for Registrating with us. You will get our next newsletter");

	}
});

function showMessage(input, message, type) {
	// get the <small> element and set the message
	const msg = input.parentNode.querySelector("small");
	msg.innerText = message;
	// update the class for the input
	input.className = type ? "success" : "error";
	return type;
}
form.elements[0]; // by index
form.elements['name']; // by name
form.elements['name']; // by id (name & id are the same in this case)

form.elements[1]; // by index
form.elements['email']; //  by name
form.elements['email']; // by id


const name = form.elements['name'];
const email = form.elements['email'];

// getting the element's value
let fullName = name.value;
let emailAddress = email.value;
