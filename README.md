# User Task API

## Table of Contents

- [Introduction](#introduction)  
- [Setup](#setup)  
  - [Prerequisites](#prerequisites)  
  - [Installation](#installation)  
  - [Database Setup](#database-setup)  
- [Usage](#usage)  
- [API Endpoints](#api-endpoints)  
  - [User Authentication](#user-authentication)  
    - [Register a User](#register-a-user)  
    - [Login User](#login-user)  
    - [Refresh Access Token](#refresh-access-token)  
  - [User Endpoints](#user-endpoints)  
    - [Get User Profile](#get-user-profile)  
    - [Search Users by Name](#search-users-by-name)  
  - [Task Endpoints](#task-endpoints)  
    - [Create a Task](#create-a-task)  
    - [Get Tasks with Pagination and Filtering](#get-tasks-with-pagination-and-filtering)  
    - [Update a Task](#update-a-task)  
    - [Delete a Task](#delete-a-task)  
- [Testing](#testing)  
- [License](#license)  
- [Contact](#contact)  

---

## Introduction

The User Task API project provides a RESTful web service for managing users and their tasks. It supports secure user registration and login with JWT access and refresh tokens, allowing users to create, update, retrieve, and delete their tasks efficiently.

---

## Setup

### Prerequisites

Ensure you have the following software installed:

- Node.js (v16 or later)  
- MongoDB (Atlas or local)  
- Postman or any API client for testing  

### Installation

Clone the repository:

bash
git clone https://github.com/your-username/user-task-api.git
Change into project directory:

bash
Copy code
cd user-task-api
Install dependencies:

bash
Copy code
npm install
Create a .env file in the root directory with the following:

env
Copy code
PORT=4000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
JWT_REFRESH_SECRET=your_jwt_refresh_secret_key
JWT_EXPIRES_IN=1h
REFRESH_TOKEN_EXPIRES_IN=7d
Start the development server:

bash
Copy code
npm run dev
### Database Setup
Make sure your MongoDB instance is running and accessible via the MONGO_URI provided in .env.

### Usage
Access the API endpoints at:
http://localhost:4000/api/

API Endpoints
User Authentication
Register a User
Endpoint: /api/auth/register
Method: POST
Consumes: application/json
Produces: application/json

Request:

json
Copy code
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123"
}
Response:

json
Copy code
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
Login User
Endpoint: /api/auth/login
Method: POST
Consumes: application/json
Produces: application/json

Request:

json
Copy code
{
  "email": "john@example.com",
  "password": "password123"
}
Response:

json
Copy code
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
Refresh Access Token
Endpoint: /api/auth/refresh-token
Method: POST
Consumes: application/json
Produces: application/json

Request:

json
Copy code
{
  "refreshToken": "jwt_refresh_token_here"
}
Response:

json
Copy code
{
  "accessToken": "new_jwt_access_token_here"
}
User Endpoints
Get User Profile
Endpoint: /api/users/profile
Method: GET
Headers: Authorization: Bearer <access_token>
Produces: application/json

Response:

json
Copy code
{
  "id": "64f97e87a67dccea2c5e9a3a",
  "name": "John Doe",
  "email": "john@example.com",
  "createdAt": "2025-10-23T01:01:59.561Z"
}
Search Users by Name
Endpoint: /api/users/search?name=john
Method: GET
Produces: application/json

Response:

json
Copy code
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
Create a Task
Endpoint: /api/tasks
Method: POST
Headers: Authorization: Bearer <access_token>
Consumes: application/json
Produces: application/json

Request:

json
Copy code
{
  "title": "Complete project",
  "description": "Finish the API by Friday"
}
Response:

json
Copy code
{
  "id": "64fabc87a67dccea2c5e9a3b",
  "title": "Complete project",
  "description": "Finish the API by Friday",
  "status": "pending",
  "userId": "64f97e87a67dccea2c5e9a3a",
  "createdAt": "2025-10-23T05:30:00.000Z"
}
Get Tasks with Pagination and Filtering
Endpoint: /api/tasks
Method: GET
Headers: Authorization: Bearer <access_token>
Query Params:

page (optional, default: 1)

limit (optional, default: 10)

status (optional, pending or done)

Produces: application/json

Response:

json
Copy code
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
Update a Task
Endpoint: /api/tasks/:id
Method: PUT
Headers: Authorization: Bearer <access_token>
Consumes: application/json
Produces: application/json

Request:

json
Copy code
{
  "status": "done"
}
Response:

json
Copy code
{
  "id": "64fabc87a67dccea2c5e9a3b",
  "title": "Complete project",
  "description": "Finish the API by Friday",
  "status": "done",
  "userId": "64f97e87a67dccea2c5e9a3a",
  "createdAt": "2025-10-23T05:30:00.000Z"
}
Delete a Task
Endpoint: /api/tasks/:id
Method: DELETE
Headers: Authorization: Bearer <access_token>
Produces: application/json

Response:

json
Copy code
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
Created by John Chinedu Egeonu – feel free to reach out for questions or collaboration!

