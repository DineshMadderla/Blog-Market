# Blog Project Backend

This is the backend for a blogging platform built using Node.js, Express, and MongoDB. It includes features for user authentication, file uploads, and blog management.

## Features

- **User Authentication**: Secure login and registration using JWT (JSON Web Tokens) and bcrypt for password hashing.
- **File Uploads**: Multer is used for handling multipart form data (file uploads).
- **Cookie Management**: Cookie-parser is used to handle cookies, primarily for user sessions.
- **CORS**: Cross-Origin Resource Sharing is enabled using the `cors` package.
- **Environment Variables**: Configuration managed through environment variables using `dotenv`.

## Technologies

- **Node.js**: JavaScript runtime used for backend development.
- **Express**: Fast and minimalist web framework for Node.js.
- **MongoDB & Mongoose**: MongoDB is the database used for storing blog data. Mongoose is used for object modeling and managing database operations.
- **Multer**: Middleware for handling file uploads.
- **JWT (jsonwebtoken)**: Used for secure authentication and user authorization.
- **bcrypt**: For securely hashing user passwords.

## Prerequisites

Make sure you have the following installed:

- Node.js
- MongoDB

## Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   ```
2. Navigate to the project directory:
     ```bash
    cd blog-backend
   ```
3. Install the required dependencies:
    ```bash
    npm install
    ```

4. Create a .env file and add the following variables:
    ```bash
    PORT=5000
    MONGODB_URI=<Your MongoDB URI>
    JWT_SECRET=<Your JWT Secret Key>

    ```
5. Start the development server:
- For production:

    ```bash
    nodemon index.js
     ```


### Project Structure
```bash
├── images/             # All logic for handling requests and responses
├── models/             # Mongoose schemas and models
├── routes/             # Application routes (user, blog, etc.)
├── .env                # Environment variables
├── index.js            # Entry point of the application
├── package.json        # Project metadata and dependencies
├── READ.md             # Project documentation
├── verifyToken.js      #  authentication
```

## Dependencies 

- bcrypt: ^5.1.0 - Password hashing.

- cookie-parser: ^1.4.6 - Middleware for parsing cookies.

- cors: ^2.8.5 - Middleware for enabling CORS.

- dotenv: ^16.3.1 - Loads environment variables from .env.

- express: ^4.18.2 - Web framework for Node.js.

- jsonwebtoken: ^9.0.1 - Handles JSON Web Tokens for authentication.

- mongoose: ^7.4.1 - MongoDB object modeling for Node.js.

- multer: ^1.4.5-lts.1 - Middleware for handling file uploads.

- path: ^0.12.7 - Utility for working with file paths.

### Contributing

- Feel free to fork this repository, open issues, or submit pull requests to improve this project.


