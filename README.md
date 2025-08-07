Mini LinkedIn Community Platform

A full-stack web application where users can register, log in, create and view posts, edit their profile (including profile pictures), and interact in a community-like feed — inspired by LinkedIn.

---
Tech Stack

Frontend:
- React
- Bootstrap (or React-Bootstrap)
- Axios

Backend:
- Node.js
- Express.js
- MongoDB with Mongoose
- JWT for Authentication
- Multer (for image uploads)

---

Features

-  User Authentication (Register / Login using JWT)
-  Protected Routes
-  Create, Read, and Display Posts
-  User Profile Page
  - View and update name and bio
  - View user's own posts
-  Upload and change profile picture
-  Responsive UI (desktop + mobile)

---

Project Structure

Assignment Web 1/
├── client/                  
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── App.js
│   │   └── index.js
│   └── public/
├── server/                  
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/            
│   ├── db.js
│   ├── index.js
│   └── .env
└── README.md

---

Environment Variables

Create a `.env` file in the `server/` folder:

MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/mydb
JWT_SECRET=your_jwt_secret_key
PORT=5000

---

Installation

#1. Clone the Repository

git clone https://github.com/yourusername/mini-linkedin-clone.git
cd mini-linkedin-clone

2. Install Backend Dependencies

cd server
npm install

3. Install Frontend Dependencies

cd ../client
npm install

---

Running the App

Start Backend (Port 5000)

cd server
npm run dev

Start Frontend (Port 3000)

cd client
npm start

---

Profile Picture Upload

- Images are uploaded using `multer` middleware to `/uploads/`.
- Users can update profile pictures from the **Profile Page**.

---

Endpoints (Sample)

| Method | Endpoint                   | Description               |
|--------|----------------------------|---------------------------|
| POST   | /api/auth/register         | Register user             |
| POST   | /api/auth/login            | Login user                |
| GET    | /api/auth/user             | Get current user          |
| PUT    | /api/auth/update           | Update profile (name, bio)|
| POST   | /api/posts/create          | Create a new post         |
| GET    | /api/posts/user            | Get current user's posts  |
| POST   | /api/users/upload-avatar   | Upload profile picture    |

---

Contributing

Feel free to fork and contribute! Suggestions, bug reports, and pull requests are welcome.

---

License

This project is licensed under the MIT License.

---

Acknowledgments

Thanks to the community and tutorials that inspired this project!
