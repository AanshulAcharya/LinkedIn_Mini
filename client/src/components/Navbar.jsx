import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();
    const token = localStorage.getItem('token');

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/login');
    };

    return (
        <nav className="navbar bg-white shadow-sm py-2">
            <div className="container-fluid d-flex align-items-center justify-content-between">
                <Link className="navbar-brand fs-4 text-dark" to="/">
                <i className="bi bi-binoculars-fill"></i>
                    MiniLinkedIn
                </Link>
                <div className="d-flex flex-wrap gap-2">
                    {token ? (
                        <>
                            <Link className="btn btn-link text-dark fw-semibold" to="/profile">
                                Profile
                            </Link>
                            <button
                                className="btn btn-outline-dark fw-semibold"
                                onClick={handleLogout}
                            >
                                Logout
                            </button>
                        </>
                    ) : (
                        <>
                            <Link className="btn btn-outline-primary fw-semibold" to="/login">
                                Login
                            </Link>
                            <Link className="btn btn-primary fw-semibold" to="/register">
                                Register
                            </Link>
                        </>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
