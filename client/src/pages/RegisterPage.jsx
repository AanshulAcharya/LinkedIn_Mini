import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Register = () => {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [bio, setBio] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/api/auth/register', { name, email, password, bio });
            navigate('/login');
        } catch (err) {
            setError('Registration failed. Please try again.');
        }
    };

    return (
        <div className="register-page vh-100 d-flex flex-column">
            {/* Website Logo Link */}
            <div className="p-3">
                <Link to="/" className="fs-3 text-white text-decoration-none">
                <i class="bi bi-binoculars-fill"></i>
                    MiniLinkedIn
                </Link>
            </div>

            {/* Centered Form */}
            <div className="flex-grow-1 d-flex align-items-center justify-content-center">
                <div className="card shadow p-4" style={{ width: '100%', maxWidth: '400px', borderRadius: '20px' }}>
                    <h2 className="text-center mb-4 text-primary fw-bold">Register</h2>
                    {error && <div className="alert alert-danger">{error}</div>}
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label className="form-label">Full Name</label>
                            <input
                                type="text"
                                className="form-control"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                        </div>
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
                        <div className="mb-3">
                            <label className="form-label">Bio <span className="text-muted">(optional)</span></label>
                            <textarea
                                className="form-control"
                                rows="3"
                                value={bio}
                                onChange={(e) => setBio(e.target.value)}
                            ></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary fw-bold w-100 rounded-3">Register</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;
