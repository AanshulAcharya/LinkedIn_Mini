import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Home from './pages/HomePage.jsx';
import Login from './pages/LoginPage.jsx';
import Register from './pages/RegisterPage.jsx';
import Profile from './pages/ProfilePage.jsx';

function App() {
    const location = useLocation();
    const hideNavbar = location.pathname === '/login' || location.pathname === '/register';
    return (
        <>
            {!hideNavbar && <Navbar />}
            <div className={hideNavbar ? '' : 'container mt-4'}>
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