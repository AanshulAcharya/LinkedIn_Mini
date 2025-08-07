import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PostCard from '../components/PostCard';

const Home = () => {
    const [postContent, setPostContent] = useState('');
    const [searchTerm, setSearchTerm] = useState('');
    const [posts, setPosts] = useState([]);



  const fetchPosts = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/posts/all');
      setPosts(response.data);
    } catch (error) {
      console.error("Failed to fetch posts: ", error.response?.data || error.message);
    }
  };

  useEffect(() => {
    fetchPosts(); // Fetch when the component loads
  }, []);

    const handlePost = async () => {
  const token = localStorage.getItem('token'); // Get the token from local storage

  if (!token) {
    console.error("No token found. User not authenticated.");
    return;
  }

  try {
    const response = await axios.post(
      'http://localhost:5000/api/posts/create',
      { content: postContent }, // Send the post data
      {
        headers: {
          'Authorization': `Bearer ${token}`, // Set token in Authorization header
          'Content-Type': 'application/json'
        }
      }
    );
    console.log("Post created:", response.data);
    setPostContent(""); // clear input
    fetchPosts(); // refresh post list
  } catch (error) {
    console.error("POST API Error: ", error.response?.data || error.message);
  }
};
   

    const filteredPosts = posts.filter(post =>
        post.user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.content.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="container my-4">
            {/* Title + Search Bar + Add Post Button */}
            <div className="d-flex justify-content-between align-items-center mb-3">
                <h3 className="fw-bold">Posts</h3>
                <div className="d-flex w-30">
                    <input
                        type="text"
                        className="form-control me-2"
                        placeholder="Search posts..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#postModal"><i className="bi bi-chat-left-fill"></i>
</button>
                </div>
            </div>

            {/* Posts Grid */}
            <div className="row">
                {filteredPosts.map(post => (
                    <div key={post._id} className="col-12 col-sm-6 col-md-4 col-lg-3 mb-3">
                        <PostCard
                            author={post.user.name}
                            content={post.content}
                            timestamp={new Date(post.createdAt).toLocaleString()}
                        />
                    </div>
                ))}
            </div>

            {/* Modal for Adding Post */}
            <div className="modal fade" id="postModal" tabIndex="-1" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content rounded-4">
                        <div className="modal-header">
                            <h5 className="modal-title">Create a Post</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" id="closeModal"></button>
                        </div>
                        <div className="modal-body">
                            <textarea
                                className="form-control"
                                rows="4"
                                placeholder="What's on your mind?"
                                value={postContent}
                                onChange={(e) => setPostContent(e.target.value)}
                            ></textarea>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                            <button type="button" className="btn btn-primary" onClick={handlePost}>Post</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
