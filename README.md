# Full-Stack To-Do List Application

This is a full-stack web application built with ReactJS for the frontend and NodeJS for the backend. The application includes user authentication (login/signup) and a simple to-do list with CRUD (Create, Read, Update, Delete) features. Only logged-in users can create and manage their to-do lists. The application is designed to be clean and responsive.

## Features

- User Authentication (Login/Signup)
- Create, Read, Update, and Delete To-Do Items
- Responsive Design
- Data Persistence with MongoDB

## Technologies Used

- Frontend: ReactJS
- Backend: NodeJS, ExpressJS
- Database: MongoDB
- Authentication: JWT (JSON Web Tokens)
- Styling: CSS

## Prerequisites

- Node.js and npm installed
- MongoDB installed and running

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/todo-app.git
cd todo-app

2. Set Up the Backend

Navigate to the backend directory:
cd backend

Install the dependencies:
npm install

Create a .env file in the backend directory and add the following environment variables:
PORT=4000
MONGO_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/todo-app?retryWrites=true&w=majority
JWT_SECRET=your_jwt_secret

Start the backend server:
npm run dev

3. Set Up the Frontend

Navigate to the frontend directory:
cd ../frontend

Install the dependencies:
npm install

Start the frontend development server:
npm start

4. Access the Application
Open your browser and navigate to http://localhost:3000 to access the application.

Project Structure

Backend
server.js: Entry point for the backend server.
models/: Contains Mongoose models for User and Todo.
routes/: Contains Express routes for user authentication and todo operations.
controllers/: Contains controller functions for handling requests.
middleware/: Contains middleware for authentication.

Frontend
src/: Contains the React application source code.
components/: Contains reusable React components.
pages/: Contains page components for different routes.
context/: Contains the AuthContext for managing authentication state.
utils/: Contains utility functions and components like PrivateRoute.
App.js: Main application component.
index.js: Entry point for the React application.

API Endpoints
User Authentication
POST /api/users/register: Register a new user.
POST /api/users/login: Login a user and return a JWT token.
GET /api/users/me: Get the authenticated user's profile.

To-Do Operations
GET /api/todos: Get all to-dos for the authenticated user.
POST /api/todos: Create a new to-do.
PUT /api/todos/:id: Update a to-do.
DELETE /api/todos/:id: Delete a to-do.

Running Tests
To run tests, use the following command:
npm test

Deployment
To deploy the application, follow these steps:
Build the frontend:
cd frontend
npm run build

Deploy the backend and the built frontend to your preferred hosting service (e.g., Heroku, Vercel).
Contributing
Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.
License
This project is licensed under the MIT License.

Acknowledgements
.ReactJS
.NodeJS
.ExpressJS
.MongoDB
.JWT
