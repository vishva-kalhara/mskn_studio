# MSKN Studio Overview

Designed to allow users to ask questions about construction, search for relevant answers, and receive suggestions for construction stores and technicians. The backend is built using Node.js, Express, and MySQL, while the frontend leverages React for a seamless user experience.

This project offers user authentication, question management, and the ability to interact with answers while ensuring data integrity and security.

# Features

## User Features

1. Search Functionality:
    - Enter construction-related queries in a search bar.
    - Retrieve relevant answers from the database.

## Admin Features

1. Question Management

    - View a list of all available questions.
    - Submit new questions.

2. Answer Management

    - View answers for specific questions.
    - Submit new answers to existing questions.

3. Authentication
    - **Sign-In:** Authenticate users to access personalized features with username and password.
    - **Password Reset:** Request and reset passwords securely.

# API Endpoints

## Authentication

| Method | Endpoint              | Description         |
| ------ | --------------------- | ------------------- |
| POST   | `/auth/signup`        | Register a new user |
| POST   | `/auth/login`         | Login user          |
| POST   | `/auth/resetPassword` | Reset user password |

## Questions

| Method | Endpoint   | Description                        |
| ------ | ---------- | ---------------------------------- |
| GET    | `/qa`      | Get all questions                  |
| POST   | `/qa`      | Add a new question                 |
| GET    | `/qa/{id}` | Get answers to a specific question |
| POST   | `/qa/{id}` | Add an answer to a question        |

## Answers

| Method | Endpoint        | Description              |
| ------ | --------------- | ------------------------ |
| GET    | `/answers/{id}` | Get a specific answer    |
| PATCH  | `/answers/{id}` | Update a specific answer |
| DELETE | `/answers/{id}` | Delete a specific answer |

# Installation

### Prerequisites

-   `Node.js (v16 or later)`
-   `MySQL Database`
-   `React Development Environment (Node.js setup)`
-   `A package manager like npm, pnpm or yarn`

### DataBase Configuration

    1. Create new Mysql Schema as "mksn_studio_f4"
    2. Restore the dump file "__dir__/db/dump/2024_02_28.sql"
    3. run "npm i"

### Backend Configuration

    1. Open "__dir__/backend/database.js"
    2. Edit the MySql Configuration.
    3. Open "__dir__/backend/config.env" and there are PORT and Base API URL

### Frontend Configuration

    1. Open "__dir__/frontend/.env" and change "VITE_API_URL" according to API url.
    2. Run "npm i"
    3. To Build the Frontend type "npm run build". All the build files goes into "__dir__/frontend/dist"
