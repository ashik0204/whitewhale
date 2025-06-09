import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const BlogListPage = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const { data } = await axios.get('/api/blog');
        setBlogs(data);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch blog posts');
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  if (loading) return <div className="container mt-5">Loading...</div>;
  if (error) return <div className="container mt-5 text-danger">{error}</div>;

  return (
    <div className="container mt-5">
      <h1 className="mb-4">Our Blog</h1>
      
      <div className="row">
        {blogs.length === 0 ? (
          <p>No blog posts yet.</p>
        ) : (
          blogs.map((blog) => (
            <div className="col-md-4 mb-4" key={blog._id}>
              <div className="card h-100">
                {blog.coverImage && (
                  <img 
                    src={blog.coverImage} 
                    className="card-img-top" 
                    alt={blog.title} 
                    style={{ height: '200px', objectFit: 'cover' }}
                  />
                )}
                <div className="card-body">
                  <h5 className="card-title">{blog.title}</h5>
                  <p className="card-text">{blog.summary}</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <small className="text-muted">
                      By {blog.author?.username || 'Unknown'} • {new Date(blog.createdAt).toLocaleDateString()}
                    </small>
                    <Link to={`/blog/${blog._id}`} className="btn btn-primary btn-sm">
                      Read More
                    </Link>
                  </div>
                </div>
                {blog.tags.length > 0 && (
                  <div className="card-footer bg-transparent">
                    {blog.tags.map((tag, index) => (
                      <span key={index} className="badge bg-secondary me-1">
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default BlogListPage;
