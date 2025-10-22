User Task Management API

A Node.js, Express, and MongoDB-based API for managing users and their tasks. Includes authentication and authorization features.

Features

User registration and login using JSON Web Tokens (JWT)

Protected routes using middleware

Full CRUD operations for tasks

Task filtering, pagination, and ownership protection

Integration with MongoDB using Mongoose

Centralized error handling and request logging with Morgan

Tech Stack

Node.js

Express.js

MongoDB with Mongoose

JWT for authentication

Dotenv for environment configuration

API Endpoints

Auth

POST /api/auth/register – Register a new user

POST /api/auth/login – Log in and receive a JWT

Users

GET /api/users/profile – Retrieve the logged-in user’s profile

Tasks

POST /api/tasks – Create a new task

GET /api/tasks – Retrieve all tasks (supports filters and pagination)

PUT /api/tasks/:id – Update an existing task

DELETE /api/tasks/:id – Delete a task

Authentication

Most endpoints require a valid JWT token.
Include it in the request header as follows:
Authorization: Bearer <your_token>



Installation

```bash
git clone https://github.com/jchinedu/user-task-api.git
cd user-task-api
npm install