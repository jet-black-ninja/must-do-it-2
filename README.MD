# Must-Do-It

A full-stack To-Do List application with user registration, login, and task management functionality. Built using modern JavaScript technologies and secured with JWT authentication.

## Features

- **User Registration and Login**: Secure user registration and login using JWT (JSON Web Tokens) authentication.
- **Add/Delete Tasks**: Users can add new tasks and delete existing tasks.
- **Retrieve Tasks**: Users can view a list of their tasks.
- **JWT Authentication**: All routes are protected, and only authenticated users can access their data.
- **Database Integration**: Tasks and user information are stored securely in a database.
- **User & Task Security**: Each task is linked to the respective user, ensuring data privacy and security.

## Tech Stack

- **Frontend**:
  - JavaScript (ES6+)
  - CSS
  - React with Redux Toolkit for state management
- **Backend**:
  - Express.js
  - Node.js
- **Authentication**:
  - JWT (JSON Web Tokens)
- **Database**:
  - MongoDB (or any other database you use)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/must-do-it.git
   ```

2. Install Dependencies

   ```bash
   # For the frontend (React)
    cd frontend
    npm install

    # For the backend (Express)
    npm install
    ```

3. Create a .env file in the backend directory and add the following environment variables:

    ```.env
    NODE_ENV = development | production
    PORT = 5000 (optional)
    MONGO_URI=your_mongo_database_uri
    JWT_SECRET=your_jwt_secret
    ```

4. Start the application

   ```bash
   npm start
   ```

## Usage

 - Register: Create a new user account.
 - Login: Access your account by logging in.
 - Add Tasks: Add new tasks to your to-do list.
 - Delete Tasks: Remove completed or unwanted tasks.
 - View Tasks: Retrieve and view your list of tasks

## Live demo

Check out the live version of the app:[Live Demo](must-do-it-2-tupy.vercel.app/)

## License

This project is licensed under the MIT License.
