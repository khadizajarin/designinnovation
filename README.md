# React Developer - Web Application Login, Signup, and Dashboard

## Overview
This project involves creating responsive login and signup pages, along with a base dashboard for a web application. The implementation uses Next.js for the React framework and Tailwind CSS for styling, ensuring a modern and responsive design. Form validation is handled using Formik.

## Table of Contents
- [Installation](#installation)
- [Technologies Used](#technologies-used)
- [Features](#features)
- [Responsive Login Page](#responsive-login-page)
- [Responsive Signup Page](#responsive-signup-page)
- [Base Dashboard](#base-dashboard)
- [Design Guidelines](#design-guidelines)
- [Requirements](#requirements)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

## Installation
To get started with the project, follow these steps:

1. Clone the repository:
   ```sh
   git clone https://github.com/khadizajarin/designinnovation
   ```

2. Navigate to the project directory:
   ```sh
   cd designinnovation
   ```

3. Install the dependencies:
   ```sh
   npm install
   ```

4. Run the development server:
   ```sh
   npm run dev
   ```

   The application will be available at `http://localhost:3000`.

## Technologies Used
- **React**: A JavaScript library for building user interfaces.
- **Next.js**: A React framework for server-side rendering and static site generation.
- **Tailwind CSS**: A utility-first CSS framework for rapid UI development.
- **Formik**: A library for building forms in React.
- **Yup**: A JavaScript schema builder for value parsing and validation (used with Formik).

## Features
### Responsive Login Page
- Fields for email/username and password.
- Options for "Forgot Password?" and a link to the Signup page.
- Prominent "Login" button styled with Tailwind CSS utilities.
- Responsive layout for different screen sizes (desktop, tablet, and mobile).
- A "Go to Dashboard" button as there is no functionality to login and navigate to dashboard route.

### Responsive Signup Page
- Fields for username, email, password, and password confirmation.
- "Sign Up" button with appropriate styling.
- Form validation for user inputs.
- Link to the Login page for users who already have an account.
- Responsive design for various devices.
- A "Go to Dashboard" button as there is no functionality to signup and navigate to dashboard route.

### Base Dashboard
- Sidebar for navigation (e.g., Dashboard, Profile, Settings) using Tailwind’s utility classes.
- Header displaying the app name and user profile options.
- Main content area that can be dynamically updated based on user interactions.
- Responsive layout for various screen sizes.
- A "Logout" button as there is no functionality to logout and navigate to login route.

## Design Guidelines
- Aim for a modern, clean design that aligns with current web application standards.
- Utilize Tailwind CSS for styling, focusing on utility-first design principles.
- Follow best practices for React development, including component reusability and state management.

## Requirements
- Proven experience in React development with a strong portfolio.
- Familiarity with Tailwind CSS and its utility classes.
- Experience with responsive design techniques (e.g., CSS Grid, Flexbox).
- Experience with form validation libraries (e.g., Formik, Yup) is a plus.
- Ability to collaborate with UI/UX designers and integrate their designs effectively.

## Deployment
The application is deployed at: [Deployment Link](https://design-innovation-internship-task.netlify.app/)

## Contributing
We welcome contributions from the community. To contribute, please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Open a Pull Request.

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.