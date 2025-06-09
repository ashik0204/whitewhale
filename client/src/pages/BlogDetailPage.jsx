import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

const BlogDetailPage = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const { data } = await axios.get(`/api/blog/${id}`);
        setBlog(data);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch blog post');
        setLoading(false);
      }
    };

    fetchBlog();
  }, [id]);

  if (loading) return <div className="container mt-5">Loading...</div>;
  if (error) return <div className="container mt-5 text-danger">{error}</div>;
  if (!blog) return <div className="container mt-5">Blog post not found</div>;

  return (
    <div className="container mt-5">
      <Link to="/blog" className="btn btn-light mb-4">
        &larr; Back to Blogs
      </Link>
      
      {blog.coverImage && (
        <img 
          src={blog.coverImage} 
          className="img-fluid rounded mb-4" 
          alt={blog.title} 
          style={{ maxHeight: '400px', width: '100%', objectFit: 'cover' }}
        />
      )}
      
      <h1 className="mb-3">{blog.title}</h1>
      
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <span className="text-muted">
            By {blog.author?.username || 'Unknown'} • {new Date(blog.createdAt).toLocaleDateString()}
          </span>
        </div>
        
        <div>
          {blog.tags.map((tag, index) => (
            <span key={index} className="badge bg-secondary me-1">
              {tag}
            </span>
          ))}
        </div>
      </div>
      
      <div className="blog-content mb-5">
        {/* Render content - you might want to use a rich text editor/renderer here */}
        <div dangerouslySetInnerHTML={{ __html: blog.content }} />
      </div>
    </div>
  );
};

export default BlogDetailPage;
