import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './BlogDetail.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

const BlogDetail = () => {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPost = async () => {
      try {
        // Fix: Use correct API path
        const response = await axios.get(`/api/blog/${slug}`);
        setPost(response.data);
      } catch (err) {
        setError('Post not found');
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPost();
  }, [slug]);

  if (isLoading) {
    return (
      <>
        <Header />
        <div className="blog-detail-loading">
          <div className="spinner"></div>
          <p>Loading article...</p>
        </div>
        <Footer />
      </>
    );
  }

  if (error || !post) {
    return (
      <>
        <Header />
        <div className="blog-detail-error">
          <h2>Oops! {error}</h2>
          <p>We couldn't find the article you're looking for.</p>
          <button onClick={() => navigate('/blog')} className="back-to-blog">
            Back to Blog
          </button>
        </div>
        <Footer />
      </>
    );
  }

  // Format the published date
  const formattedDate = new Date(post.publishedAt).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <>
      <Header />
      <main className="blog-detail-container">
        <div className="blog-detail-header">
          <div className="blog-detail-meta">
            <Link to="/blog" className="back-link">
              ← Back to all articles
            </Link>
            <div className="blog-detail-date">{formattedDate}</div>
          </div>
          <h1 className="blog-detail-title">{post.title}</h1>
          <div className="blog-detail-author">
            By {post.author?.username || 'Anonymous'} • {post.readTime || '5 min read'}
          </div>
        </div>

        <div className="blog-detail-featured-image">
          <img 
            src={post.coverImage || post.featuredImage || '/default-blog-image.jpg'} 
            alt={post.title}
            onError={(e) => {
              e.target.src = '/default-blog-image.jpg';
              e.target.onerror = null;
            }}
          />
        </div>

        <article className="blog-detail-content">
          {/* In a real app, you might use a markdown parser here */}
          {post.content.split('\n\n').map((paragraph, idx) => (
            <p key={idx}>{paragraph}</p>
          ))}
        </article>

        <div className="blog-detail-tags">
          {post.tags && post.tags.map((tag, index) => (
            <Link key={index} to={`/blog/tag/${tag}`} className="blog-tag">
              {tag}
            </Link>
          ))}
        </div>

        <div className="blog-detail-share">
          <h3>Share this article</h3>
          <div className="share-buttons">
            <button className="share-twitter">Twitter</button>
            <button className="share-linkedin">LinkedIn</button>
            <button className="share-facebook">Facebook</button>
          </div>
        </div>

        <div className="blog-detail-newsletter">
          <h3>Subscribe to our newsletter</h3>
          <p>Get the latest articles and insights from White Whaling.</p>
          <form className="newsletter-form">
            <input type="email" placeholder="Your email address" className="newsletter-input" />
            <button type="submit" className="newsletter-button">Subscribe</button>
          </form>
          <p className="newsletter-disclaimer">We respect your privacy. No spam, ever.</p>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default BlogDetail;
