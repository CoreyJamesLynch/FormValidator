# Form Validator

## About

- Languages: Javascript, HTML, CSS
- Framework: React
- Library: React Hook Form

## Validations

- Username: is required, must have atleast least 3 characters, cannot be longer than 15 characters, only A-Z a-z characters are valid -> /^[A-Za-z]+$/i

- Email: is required, must be valid i.e. example@example.com -> /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i

- Password: is required, minimum length 6, max length 25, must contain lowercase, uppercase, number and symbol characters -> /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]$/

- Password2: is required, must match Password
