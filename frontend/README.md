# Blog Project Frontend

This is the frontend for a blogging platform built with React, TailwindCSS, and Vite. The project provides a responsive UI with features like navigation, blog management, and API integration.

## Features

- **User Authentication**: Login Page (/login):  Allows users to log in using their credentials.
- **Register Page**: New users can create an account to access the platform.
- **Blog Management** : 
1. Create Post (/write): Authenticated users can write and submit new blog posts.

2.  Edit Post (/edit/:id): Users can edit their previously submitted posts.

3. Post Details (/posts/post/:id): Displays the full details of a specific blog post, including the title, content, author, and comments.

4. Comment on Posts : the users can leave the comments under the posts.


## Technologies

- **React**: JavaScript library for building user interfaces.
- **React Router**: For handling navigation between different views.
- **TailwindCSS**: Utility-first CSS framework for designing the UI.
- **Vite**: Frontend build tool for fast development and bundling.
- **TypeScript**: Types are added to improve code reliability.

## Prerequisites

Make sure you have the following installed:

- Node.js

## Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>

2. Navigate to the project directory:
     ```bash
    cd frontend
   ```
3. Install the required dependencies:
    ```bash
    npm install
    ```

4. Create a .env file and add the following variables:
    ```bash
   VITE_URL="http://localhost:5000"
   VITE_IF="http://localhost:5000/images/"
    ```
5. Start the development server:
- For production:

    ```bash
    npm run dev
     ```
### Project Structure
```bash
├── public/                # Static assets
├── src/
│   ├── components/        # Reusable UI components
│   ├── context/           # Usercontext 
│   ├── pages/             # Different pages (Home, Blog, EditPost, Login,  etc.)
|   ├──App.css             # Global and component-level styles (using TailwindCSS)
│   ├── App.jsx            # Main application component
│   └── main.jsx           # Entry point for the React application
├──.env                    # Environment variables
├── .eslintrc.js           # ESLint configuration
├── tailwind.config.js     # TailwindCSS configuration
├── vite.config.js         # Vite configuration
├── README.md              # Project documentation
└── package.json           # Package details and scripts
```

## Dependencies 

- axios: ^1.7.7 - For making HTTP requests.

- react: ^18.3.1 - JavaScript library for building user interfaces.

- react-dom: ^18.3.1 - Provides DOM-specific methods for React.

- react-icons: ^4.10.1 - Popular icons for use in React apps.

- react-router-dom: ^6.14.2 - Handles navigation between pages.

- react-scripts: ^5.0.1 - Scripts for creating React apps.

- web-vitals: ^4.2.3 - Provides essential metrics for measuring the performance of the app.

### Contributing

- Feel free to fork this repository, open issues, or submit pull requests to improve this project.
