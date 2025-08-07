import React, { useState } from 'react';
import PostCard from '../components/PostCard';

const Profile = () => {
    // Dummy User Data (we’ll fetch from API later)
    const user = {
        name: 'Aanshul Acharya',
        email: 'aanshul@example.com',
        bio: 'Full Stack Developer | Building my own LinkedIn!',
        profilePic: 'https://via.placeholder.com/100'  // Placeholder Avatar
    };

    const userPosts = [
        { id: 1, author: user.name, content: 'Excited to launch my Mini LinkedIn!', timestamp: '1 day ago' },
        { id: 2, author: user.name, content: 'Working on profile page layout today.', timestamp: '3 days ago' }
    ];

    return (
        <div className="container my-4">
            {/* Profile Header */}
            <div className="card p-3 mb-4 shadow-sm rounded-4">
                <div className="d-flex align-items-center">
                    <img
                        src={user.profilePic}
                        alt="Profile"
                        className="rounded-circle me-3"
                        style={{ width: '100px', height: '100px', objectFit: 'cover' }}
                    />
                    <div>
                        <h4 className="fw-bold mb-1">{user.name}</h4>
                        <p className="mb-1 text-muted">{user.email}</p>
                        <p className="mb-0">{user.bio}</p>
                    </div>
                    <button className="btn btn-outline-primary ms-auto fw-bold">Edit Profile</button>
                </div>
            </div>

            {/* User’s Posts */}
            <h5 className="mb-3 fw-bold">Your Posts</h5>
            <div className="row">
                {userPosts.map(post => (
                    <div key={post.id} className="col-12 col-sm-6 col-md-4 col-lg-3 mb-3">
                        <PostCard
                            author={post.author}
                            content={post.content}
                            timestamp={post.timestamp}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Profile;
