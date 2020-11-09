# Form Validator

## About

- Languages: Javascript, HTML, CSS
- Framework: React
- Library: React Hook Form

## Validations

- Username: is required, must have atleast least 3 characters, cannot be longer than 15 characters, only A-Z a-z characters are valid -> /^[A-Za-z]+\$/i

- ![alt text](https://giphy.com/gifs/validateform-6EX8xOTPCu2AUwC7PX)
<!-- - <iframe src="https://giphy.com/embed/6EX8xOTPCu2AUwC7PX" width="480" height="270" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/validateform-6EX8xOTPCu2AUwC7PX">via GIPHY</a></p> -->

- Email: is required, must be valid i.e. example@example.com -> /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}\$/i

- Password: is required, minimum length 6, max length 25, must contain lowercase, uppercase, number and symbol characters -> /^(?=._[0-9])(?=._[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]\$/

- Password2: is required, must match Password
