GitHub Repo Explorer 🚀

A modern and responsive full-stack GitHub Repo Explorer built using React.js, Node.js, and Express.js.
This application allows users to search GitHub profiles, explore repositories, sort repositories, and view detailed GitHub information in a beautiful UI.

🌐 Live Features

✅ Search any GitHub user
✅ View GitHub profile information
✅ Explore repositories
✅ Sort repositories by:

Stars ⭐
Name 📘
Recently Updated ⏳

✅ Responsive modern UI
✅ Invalid username handling
✅ Backend API integration
✅ Dynamic rendering using React Hooks
✅ Repository statistics display
✅ Professional portfolio-ready design

🛠️ Tech Stack
Frontend
React.js
Axios
Vite
Backend
Node.js
Express.js
CORS
API
GitHub REST API
📂 Project Structure
github-repo-explorer
│
├── client
│   ├── src
│   │   ├── components
│   │   │   └── RepoCard.jsx
│   │   ├── App.jsx
│   │   └── main.jsx
│   │
│   └── package.json
│
├── server
│   ├── routes
│   │   └── githubRoutes.js
│   │
│   ├── server.js
│   └── package.json
│
└── README.md
⚙️ Installation & Setup
1️⃣ Clone Repository
git clone YOUR_GITHUB_REPOSITORY_LINK
2️⃣ Navigate to Project
cd github-repo-explorer
🚀 Frontend Setup
Open client folder
cd client
Install dependencies
npm install
Run frontend
npm run dev

Frontend runs on:

http://localhost:5173
🚀 Backend Setup
Open server folder
cd server
Install dependencies
npm install
Run backend
npm run dev

Backend runs on:

http://localhost:5000
🔗 API Endpoint
Get GitHub User Data
GET /api/github/:username
Example
http://localhost:5000/api/github/octocat
✨ Features Implemented
👤 GitHub User Search

Users can search any GitHub username.

📦 Repository Explorer

Displays:

Repository Name
Description
Stars
Forks
Language
Last Updated Date
📊 Sorting

Repositories can be sorted by:

Stars
Name
Recently Updated
❌ Error Handling

Displays beautiful error UI for:

Invalid usernames
API failures
🎨 Modern UI
Dark theme
Responsive design
Professional cards
Hover effects
Modern typography
📸 Screenshots
Home Page
Search GitHub users
Professional hero section
Profile Section
Avatar
Bio
Followers
Following
Repositories
Repository Cards
Repository details
Language
Stars
Forks
Updated date
🧠 Concepts Used
React Hooks
useState
API Fetching
REST API
Express Routing
Backend Proxy
Async/Await
Conditional Rendering
Component Reusability
🔮 Future Improvements
Pagination
GitHub contribution graph
Search history
Dark/Light mode toggle
Repository filtering
AI repository summary
Favorite repositories
👨‍💻 Developed By
Shambhav Kumar 🚀

Passionate Software Engineer focused on:

Full Stack Development
AI/ML
Modern Web Applications
Scalable Software Systems
📜 License

This project is developed for educational and assessment purposes.

⭐ Support

If you like this project, consider giving it a ⭐ on GitHub.