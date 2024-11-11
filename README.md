# calender-zen
# Event Calendar Web Application
This is a web-based calendar application that allows users to create, view, update, and delete events on specific dates. The application features a responsive and user-friendly interface built with Next.js, React, TailwindCSS, and a NestJS backend. Events are stored in an in-memory database for simplicity.

# Features
*.* View a dynamic, interactive calendar with the ability to select dates.
*.* Create new events for selected dates.
*.* View all events for a selected date.
*.* Delete events.
*.* Responsive and modern design with TailwindCSS.
*.* In-memory event storage.

# Tech Stack
*.* Frontend:
   *.* Next.js
   *.* React
   *.* TailwindCSS
   *.* React-Calendar
*.* Backend:
   *.* NestJS
   *.* In-memory database

# Installation and Setup

# Prerequisites
  *.*  Node.js (v14 or higher)
  *.*  npm or yarn package manager
  
# Clone the repository
git clone https://github.com/your-repo-url/event-calendar-app.git
cd event-calendar-app

# Backend Setup (NestJS)
Navigate to the backend directory:
cd backend

# Install dependencies:
npm install
Start the NestJS server:
npm run start:dev
The backend should now be running at http://localhost:3001.

# Frontend Setup (Next.js)

1)Navigate to the frontend directory:
cd frontend

2)Install dependencies:
npm install
Run the development server:
npm run dev
The frontend application should be available at http://localhost:3000.

Environment Variables
To connect the frontend and backend, update your environment variables in the .env files in both directories.

Example .env for frontend:

bash
Copy code
NEXT_PUBLIC_API_URL=http://localhost:3001
Example .env for backend:
PORT=3001

# Usage
Open the application in your browser at http://localhost:3000.
You will see a calendar where you can select any date.
Once a date is selected, you can add an event using the input field.
The events will be displayed for that specific date. You can also delete events.
