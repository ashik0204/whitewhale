import React from 'react';
import './common.css';
import './BlogSection.css';
import aiSalesImage from '../assets/ai-sales.jpeg';
import b2bStrategyImage from '../assets/b2b-strategy.png';
import salesTechImage from '../assets/sales-tech.png';

const BlogSection = () => {
  const [searchterm, setsearchterm] = React.useState("");

  const blogPosts = [
    {
      id: 1,
      title: "How AI is Transforming B2B Lead Qualification",
      excerpt: "Discover how machine learning algorithms are revolutionizing the way sales teams identify and prioritize high-value prospects, reducing waste and accelerating pipeline velocity.",
      image: aiSalesImage,
      date: "May 28, 2025",
      author: "Alex Richardson",
      readTime: "6 min read",
      tags: ["AI", "Lead Generation", "Sales"]
    },
    {
      id: 2,
      title: "The Enterprise Whale-Hunting Playbook",
      excerpt: "Strategic frameworks for landing enterprise accounts that drive exponential growth. Learn the advanced techniques top-performing sales teams use to land 7-figure deals.",
      image: b2bStrategyImage,
      date: "May 15, 2025",
      author: "Sophia Chen",
      readTime: "9 min read",
      tags: ["Enterprise Sales", "Strategy"]
    },
    {
      id: 3,
      title: "Building a Tech Stack That Actually Drives Revenue",
      excerpt: "Most sales tech creates more problems than it solves. Here's how forward-thinking revenue teams are constructing integrated systems that enhance human capabilities rather than replace them.",
      image: salesTechImage,
      date: "May 3, 2025",
      author: "Marcus James",
      readTime: "5 min read",
      tags: ["Technology", "Integration", "ROI"]
    }
  ];
  const filteredBlogPosts = blogPosts.filter(post => post.title.toLowerCase().includes(searchterm.toLowerCase()));
  return (
    <section className="section" id="blog">
      <div className="container">
        <h2>Latest Insights</h2>
        <p className="section-intro">Expert perspectives on revenue acceleration, AI-powered sales, and enterprise growth strategies.</p>
        <input className="search" id="blog-search" type="text" placeholder='Search' onChange={(e) => {setsearchterm(e.target.value)}}/>
        <div className="blog-grid">
          {filteredBlogPosts.map(post => (
            <div key={post.id} className="blog-card">
              <div className="blog-image-container">
                <img src={post.image} alt={post.title} className="blog-image" />
                <div className="blog-tags">
                  {post.tags.map((tag, index) => (
                    <span key={index} className="blog-tag">{tag}</span>
                  ))}
                </div>
              </div>
              <div className="blog-content">
                <h3 className="blog-title">{post.title}</h3>
                <div className="blog-meta">
                  <span className="blog-author">{post.author}</span>
                  <span className="blog-date">{post.date}</span>
                  <span className="blog-read-time">{post.readTime}</span>
                </div>
                <p className="blog-excerpt">{post.excerpt}</p>
                <a href="#" className="blog-read-more">Read More →</a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="blog-cta">
          <h3>Want more insights delivered to your inbox?</h3>
          <div className="newsletter-form">
            <input type="email" placeholder="Your email address" className="newsletter-input" />
            <button className="newsletter-button">Subscribe</button>
          </div>
          <p className="newsletter-disclaimer">We respect your privacy. No spam, ever.</p>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;