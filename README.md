# Timesheet Application

## Introduction

This project is a **Timesheet Management Application** designed to help users log and track their working hours. The primary goal of this project is to work with two different technologies: **C# for backend** and **Vue.js for frontend**. This combination provides a modern, scalable, and efficient stack for web application development.

## Backend - C# with ASP.NET Core

The backend is built using **ASP.NET Core**, a powerful, open-source framework for building web APIs and applications. It provides:

- **RESTful API** to manage timesheets, users, and authentication.
- **Entity Framework Core** as an ORM for database interactions.
- **JWT Authentication** for secure user login and access control.
- **SQL Server** (or PostgreSQL/MySQL) as the database backend.

### Backend Setup

1. Install .NET SDK (version 7 or later): [Download .NET](https://dotnet.microsoft.com/en-us/download)
2. Clone the repository:
   ```sh
   git clone https://github.com/MisterNicoLarson/Timesheet_Front_Back.git
   cd timesheet-app/backend
   ```
3. Install dependencies:
   ```sh
   dotnet restore
   ```
4. Run the application:
   ```sh
   dotnet run
   ```
   The backend will be available at `http://localhost:5000`.

## Frontend - Vue.js

The frontend is developed using **Vue.js (Vue 3)**, a progressive JavaScript framework for building user interfaces. The project utilizes:

- **Vue Router** for navigation.
- **Pinia (or Vuex)** for state management.
- **Axios** for API calls.
- **TailwindCSS** or Vuetify for UI styling.

### Frontend Setup

1. Install **Node.js** (version 16 or later): [Download Node.js](https://nodejs.org/)
2. Navigate to the frontend folder:
   ```sh
   cd ../frontend
   ```
3. Install dependencies:
   ```sh
   npm install
   ```
4. Run the development server:
   ```sh
   npm run dev
   ```
   The frontend will be available at `http://localhost:5173`.

## Deployment

For production deployment:

- **Backend**: Deploy on **Azure, AWS, or a Docker container**.
- **Frontend**: Host on **Netlify, Vercel, or a cloud server (NGINX/Apache)**.

## Future Improvements

- Implement **role-based access control** (Admin, Manager, Employee).
- Add **mobile support** using **Capacitor.js** or **.NET MAUI**.
- Improve **reporting features** for timesheets.

## Contributions

Feel free to fork and submit pull requests. Any feedback is appreciated!

---

**Author**: Nico Larson\
**License**: MIT

