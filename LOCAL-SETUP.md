# Local Development Setup

This document provides step-by-step instructions for setting up and running the White Whaling project locally.

## Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v18 or newer)
- [npm](https://www.npmjs.com/) (comes with Node.js)
- [MongoDB](https://www.mongodb.com/try/download/community) (or access to MongoDB Atlas)

## Setup Steps

### 1. Clone the Repository

If you haven't already, clone the repository:

```bash
git clone <repository-url>
cd my-landing-page
```

### 2. Install Dependencies

Install all necessary dependencies:

```bash
npm install
```

### 3. Set Up Environment Variables

Create a `.env` file in the project root:

```bash
cp .env.example .env
```

Edit the `.env` file to configure:
- MongoDB connection string
- Admin user credentials
- Session secret

### 4. Start MongoDB

If using a local MongoDB installation:

```bash
# Start MongoDB (may vary based on installation)
mongod
```

If using MongoDB Atlas, make sure your connection string in `.env` is correct.

### 5. Initialize the Database (Optional)

Run the database initialization script to create an admin user and sample data:

```bash
node server/scripts/initialize-db.js
```

### 6. Run the Development Servers

Start both the frontend and backend servers:

```bash
npm run dev:full
```

This command runs:
- Frontend: Vite dev server (http://localhost:5173)
- Backend: Node.js API server (http://localhost:3001)

## Access the Application

- **Website:** Open [http://localhost:5173](http://localhost:5173)
- **Admin Dashboard:** Open [http://localhost:5173/admin/login](http://localhost:5173/admin/login)
  - Email: Value from your `ADMIN_EMAIL` env variable (default: admin@whitewhaling.com)
  - Password: Value from your `ADMIN_PASSWORD` env variable (default: adminpassword)

## Development Workflow

- Frontend code is in the `src` directory
- Backend code is in the `server` directory
- API endpoints are proxied through Vite to the backend server

## Troubleshooting

### MongoDB Connection Issues

If you see MongoDB connection errors:
1. Ensure MongoDB is running
2. Check your connection string in `.env`
3. For network issues, try using `127.0.0.1` instead of `localhost`

### Port Conflicts

If ports are already in use:
1. Change the backend port in `.env` (PORT variable)
2. Update the proxy in `vite.config.js` to match the new port

### Authentication Issues

If you can't log in to the admin dashboard:
1. Make sure the database was initialized correctly
2. Try running `node server/scripts/initialize-db.js` again
3. Check the browser console and server logs for errors
