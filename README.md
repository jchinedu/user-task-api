User Task API
Table of Contents

Introduction

Setup

Prerequisites

Installation

Database Setup

Usage

API Endpoints

Testing

Introduction

The User Task API project provides a RESTful web service for managing users and their tasks. It supports secure user registration and login with JWT access and refresh tokens, allowing users to create, update, retrieve, and delete their tasks efficiently.

Setup
Prerequisites

Ensure you have the following software installed:

Node.js (v16 or later)

MongoDB (Atlas or local)

Postman or any API client for testing

Installation

Clone the repository:

git clone https://github.com/your-username/user-task-api.git


Change into project directory:

cd user-task-api


Install dependencies:

npm install


Create a .env file in the root directory with the following:

PORT=4000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
JWT_REFRESH_SECRET=your_jwt_refresh_secret_key
JWT_EXPIRES_IN=1h
REFRESH_TOKEN_EXPIRES_IN=7d


Start the development server:

npm run dev

Database Setup

Make sure your MongoDB instance is running and accessible via the MONGO_URI provided in .env.

Usage

Access the API endpoints at http://localhost:4000/api/

API Endpoints
User Authentication
Register a user

Endpoint: /api/auth/register

Method: POST

Consumes: application/json

Produces: application/json

Request:

{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123"
}


Response:

{
  "message": "User registered successfully",
  "user": {
    "id": "64f97e87a67dccea2c5e9a3a",
    "name": "John Doe",
    "email": "john@example.com"
  },
  "accessToken": "jwt_access_token_here",
  "refreshToken": "jwt_refresh_token_here"
}

Login user

Endpoint: /api/auth/login

Method: POST

Consumes: application/json

Produces: application/json

Request:

{
  "email": "john@example.com",
  "password": "password123"
}


Response:

{
  "message": "Login successful",
  "user": {
    "id": "64f97e87a67dccea2c5e9a3a",
    "name": "John Doe",
    "email": "john@example.com"
  },
  "accessToken": "jwt_access_token_here",
  "refreshToken": "jwt_refresh_token_here"
}

Refresh access token

Endpoint: /api/auth/refresh-token

Method: POST

Consumes: application/json

Produces: application/json

Request:

{
  "refreshToken": "jwt_refresh_token_here"
}


Response:

{
  "accessToken": "new_jwt_access_token_here"
}

User Endpoints
Get user profile

Endpoint: /api/users/profile

Method: GET

Headers: Authorization: Bearer <access_token>

Produces: application/json

Response:

{
  "id": "64f97e87a67dccea2c5e9a3a",
  "name": "John Doe",
  "email": "john@example.com",
  "createdAt": "2025-10-23T01:01:59.561Z"
}

Search users by name

Endpoint: /api/users/search?name=john

Method: GET

Produces: application/json

Response:

{
  "users": [
    {
      "id": "64f97e87a67dccea2c5e9a3a",
      "name": "John Doe",
      "email": "john@example.com",
      "createdAt": "2025-10-23T01:01:59.561Z"
    }
  ]
}

Task Endpoints
Create a task

Endpoint: /api/tasks

Method: POST

Headers: Authorization: Bearer <access_token>

Consumes: application/json

Produces: application/json

Request:

{
  "title": "Complete project",
  "description": "Finish the API by Friday"
}


Response:

{
  "id": "64fabc87a67dccea2c5e9a3b",
  "title": "Complete project",
  "description": "Finish the API by Friday",
  "status": "pending",
  "userId": "64f97e87a67dccea2c5e9a3a",
  "createdAt": "2025-10-23T05:30:00.000Z"
}

Get tasks with pagination and filtering

Endpoint: /api/tasks

Method: GET

Headers: Authorization: Bearer <access_token>

Query Params:

page (optional, default: 1)

limit (optional, default: 10)

status (optional, pending or done)

Produces: application/json

Response:

{
  "tasks": [
    {
      "id": "64fabc87a67dccea2c5e9a3b",
      "title": "Complete project",
      "description": "Finish the API by Friday",
      "status": "pending",
      "userId": "64f97e87a67dccea2c5e9a3a",
      "createdAt": "2025-10-23T05:30:00.000Z"
    }
  ],
  "page": 1,
  "limit": 10,
  "total": 5
}

Update a task

Endpoint: /api/tasks/:id

Method: PUT

Headers: Authorization: Bearer <access_token>

Consumes: application/json

Produces: application/json

Request:

{
  "status": "done"
}


Response:

{
  "id": "64fabc87a67dccea2c5e9a3b",
  "title": "Complete project",
  "description": "Finish the API by Friday",
  "status": "done",
  "userId": "64f97e87a67dccea2c5e9a3a",
  "createdAt": "2025-10-23T05:30:00.000Z"
}

Delete a task

Endpoint: /api/tasks/:id

Method: DELETE

Headers: Authorization: Bearer <access_token>

Produces: application/json

Response:

{
  "message": "Task deleted successfully"
}

Testing

Use Postman or any API client to test the endpoints.

Register or login to get access and refresh tokens.

Use the access token in the Authorization header for protected routes.

Use the refresh token with /api/auth/refresh-token to get new access tokens.

Test task creation, retrieval, updates, and deletion.

License

MIT License

Contact

Created by [Your Name] – feel free to reach out for questions or collaboration!
