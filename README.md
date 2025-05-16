# Job Portal Application (MERN)
![Job Portal](job-portal.png)
A full-stack job portal application where users can find and create jobs. Built with the MERN stack (MongoDB, Express, React, Node.js).

## Features
- User authentication (register, login, logout)
- Browse and search jobs
- Apply for jobs
- Company and job management (admin)
- User profile management

## Project Structure
- `/frontend` - React + Vite frontend
- `/backend` - Express.js backend API

---

## Getting Started

### Prerequisites
- Node.js (v18+ recommended)
- npm or yarn
- MongoDB database (local or Atlas)

### 1. Clone the repository
```bash
git clone https://github.com/sufyansidd19/Job-Portal-Application-MERN-.git
cd Job-Portal-Application-MERN-
```

### 2. Backend Setup
```bash
cd backend
npm install
```

#### Start Backend
```bash
npm run dev
```

### 3. Frontend Setup
```bash
cd ../frontend
npm install
```

#### Start Frontend
```bash
npm run dev
```
The frontend will run on [http://localhost:5173](http://localhost:5173) by default.

---

## Usage
- Visit the frontend URL to register, login, browse jobs, and manage your profile.
- Admin users can manage companies and job postings.

## Tech Stack
- **Frontend:** React, Vite, Tailwind CSS, Redux Toolkit, Radix UI
- **Backend:** Node.js, Express, MongoDB (Mongoose), Cloudinary, JWT Auth

## License
[ISC](LICENSE)
