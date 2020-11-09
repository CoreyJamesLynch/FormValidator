# Form Validator

## About

- Languages: Javascript, HTML, CSS
- Framework: React
- Library: React Hook Form

## Validations

![Validate Form Submission](https://media.giphy.com/media/6EX8xOTPCu2AUwC7PX/giphy.gif)

- Username: is required, must have atleast least 3 characters, cannot be longer than 15 characters, only A-Z a-z characters are valid -> /^[A-Za-z]+\$/i

![Validate Form Username](https://media.giphy.com/media/Vatkoa6b9uqHe5k27R/giphy.gif)

- Email: is required, must be valid i.e. example@example.com -> /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}\$/i

![Validate Form Email](https://media.giphy.com/media/a2BLBHmrCjm183J0kh/giphy.gif)

- Password: is required, minimum length 6, max length 25, must contain lowercase, uppercase, number and symbol characters -> /^(?=._[0-9])(?=._[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]\$/

![Validate Form Password](https://media.giphy.com/media/a1BxY5RTwHSfcc4bSz/giphy.gif)

- Password Confirmation: is required, must match Password

![Validate Form Password Confirmation](https://media.giphy.com/media/DV34dUUn9PWuzLqkeV/giphy.gif)
