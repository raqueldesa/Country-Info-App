Here’s the complete `README.md` for your "Country Info App," consolidating all the details:

# Country Info App

This project was developed as a technical test. The application provides country-related information by fetching data from an external API. The project is structured with two main parts:

- **Frontend**: Built using Next.js.
- **Backend**: Built using Nest.js.

## Prerequisites

Ensure you have the following installed on your machine:

- [Node.js](https://nodejs.org/en/) (v18.17.0 or later)
- [npm](https://www.npmjs.com/) (Node package manager)

## Installation

Follow the steps below to set up and run the project:

### 1. Clone the repository

```bash
git clone https://github.com/your-repo/Country-Info-App.git
cd Country-Info-App
```

### 2. Install dependencies for both frontend and backend

- Navigate to the `backend` folder and install the dependencies:

  ```bash
  cd backend
  npm install
  ```

- Navigate to the `frontend` folder and install the dependencies:
  ```bash
  cd ../frontend
  npm install
  ```

### 3. Set up environment variables

In both the `frontend` and `backend` directories, you will need to create a `.env` file with the required configuration.

#### Backend (`backend/.env`):

```bash
PORT_BACKEND=6000
```

#### Frontend (`frontend/.env.local`):

```bash
NEXT_PUBLIC_API_HOST=http://localhost
NEXT_PUBLIC_API_PORT=6000
```

### 4. Running the backend

To run the Nest.js backend, navigate to the `backend` folder and execute the following command:

```bash
npm run start
```

The backend will be running on `http://localhost:6000`.

### 5. Running the frontend

To run the Next.js frontend, navigate to the `frontend` folder and execute the following command:

```bash
npm run dev
```

The frontend will be available at `http://localhost:3000`.

### 6. Access the application

Once both the frontend and backend are running:

- Visit `http://localhost:3000` to view the Next.js frontend.
- The frontend will communicate with the backend API to fetch and display country information.

## Project Structure

```
Country-Info-App/
│
├── backend/     # Nest.js backend
└── frontend/    # Next.js frontend
```

## Technologies Used

- **Frontend**: Next.js, React, CSS Modules
- **Backend**: Nest.js, Axios for HTTP requests
- **API Used**: [Nager Date API](https://date.nager.at/)

---

Developed by Raquel de Sá
