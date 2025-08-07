import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('http://localhost:5000/api/auth/login', { email, password });
            localStorage.setItem('token', res.data.token);
            navigate('/');
        } catch (err) {
            console.error(err.response ? err.response.data : err.message);
            setError(err.response?.data?.message || 'Login failed. Please try again.');
        }
    };

    return (
        <div className="login-page vh-100 d-flex flex-column">
            {/* Website Logo Link */}
            <div className="p-3">
                <Link to="/" className="fw-bold fs-3 text-white text-decoration-none">
                    MiniLinkedIn
                </Link>
            </div>

            {/* Centered Form */}
            <div className="flex-grow-1 d-flex align-items-center justify-content-center">
                <div className="card shadow p-4" style={{ width: '100%', maxWidth: '400px', borderRadius: '20px' }}>
                    <h2 className="text-center mb-4 text-primary fw-bold">Login</h2>
                    {error && <div className="alert alert-danger">{error}</div>}
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label className="form-label">Email address</label>
                            <input
                                type="email"
                                className="form-control"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Password</label>
                            <input
                                type="password"
                                className="form-control"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                        <button type="submit" className="btn btn-primary fw-bold w-100 rounded-3">Login</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;