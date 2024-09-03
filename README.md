# Quiz App with AI Integration

# live : https://ai-assesment-thefstack.netlify.app/
please wait for few minute because this project is hosted on render free version in which due to inactivity the instance goes to sleep.

## Overview
This project is a Quiz application with AI integration. The backend is powered by Node.js, Express, and MongoDB, while the frontend is built with Next.js using styled-components.

## Features
- Quiz creation and management via a RESTful API.
- Real-time feedback generation using an AI model.
- Responsive and interactive UI.

## Setup Instructions

### Prerequisites
- Node.js (v14 or higher)
- MongoDB

### Backend Setup
1. Navigate to the `backend` directory.
2. Install dependencies:
    ```bash
    npm install
    ```
3. Create a `.env` file based on the `.env.example`.
    add your DB
    add your HUGGING_FACE_API_KEY 
    add your JWT_SECRET

4. Start the backend server:
    ```bash
    npm start
    ```

### Frontend Setup
1. Navigate to the `frontend` directory.
2. Install dependencies:
    ```bash
    npm install
    ```
4. Start the frontend application:
    ```bash
    npm run dev
    ```

### Running the Application
- Ensure both the backend and frontend are running. Access the application at `http://localhost:3000` and backend at `http://localhost:5000`.


## External Libraries
- **Frontend**:
  - `styled-components` for CSS-in-JS styling.
  - `axios` for making HTTP requests.
  - `react-hook-form` for handling form data.
  
- **Backend**:
  - `mongoose` for MongoDB object modeling.
  - `express` for handling HTTP requests.
  - `bcrypt` for hashing the password.
  - `jsonwebtoken` for generating secure token.


## AI Integration
This project uses [Hugginf Face AI](https://huggingface.co/) to generate feedback based on user quiz responses. There is some limit.



### Registering a User
To register a new user, send a POST request to `/api/auth/register` with the following JSON body:
```json
{
  "name": "User Name",
  "email": "user@example.com",
  "password": "password123"
}

and to login as existing user use email: abc@gmail.com and password: 123456
