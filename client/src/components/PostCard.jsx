import React from 'react';

const PostCard = ({ author, content, timestamp }) => {
    return (
        <div className="card h-100 shadow-sm rounded-4">
            <div className="card-body p-3 d-flex flex-column justify-content-between">
                <div>
                    <h6 className="fw-bold mb-2">{author}</h6>
                    <small className="text-muted">{timestamp}</small>
                </div>
                <p className="mt-3 mb-0">{content}</p>
            </div>
        </div>
    );
};

export default PostCard;