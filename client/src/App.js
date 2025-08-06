import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Home from './pages/HomePage.jsx';
import Login from './pages/LoginPage.jsx';
import Register from './pages/RegisterPage.jsx';
import Profile from './pages/ProfilePage.jsx';

function App() {
    return (
        <>
            <Navbar />
            <div className="container mt-4">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/profile" element={<Profile />} />
                </Routes>
            </div>
        </>
    );
}

export default App;