import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import './PostEditor.css';

const PostEditor = () => {
  const { id } = useParams();
  const isEditMode = Boolean(id);
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    title: '',
    excerpt: '',
    content: '',
    coverImage: '',
    tags: '',
    readTime: '5 min read',
    status: 'draft'
  });
  
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [isSaving, setIsSaving] = useState(false);
  const [previewUrl, setPreviewUrl] = useState('');
  const [imageFile, setImageFile] = useState(null);

  // Fetch post data if in edit mode
  useEffect(() => {
    if (isEditMode) {
      const fetchPost = async () => {
        setIsLoading(true);
        try {
          // Fix: Use correct API path
          const response = await axios.get(`/api/blog/${id}`, { withCredentials: true });
          const post = response.data;
          setFormData({
            title: post.title,
            excerpt: post.excerpt,
            content: post.content,
            coverImage: post.coverImage,
            tags: post.tags.join(', '),
            readTime: post.readTime,
            status: post.status
          });
          setPreviewUrl(post.coverImage);
        } catch (err) {
          setError('Failed to fetch post data');
          console.error(err);
        } finally {
          setIsLoading(false);
        }
      };
      fetchPost();
    }
  }, [id, isEditMode]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleImageChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    // Store the actual file for later upload
    setImageFile(file);

    // Create a preview URL for the UI
    const reader = new FileReader();
    reader.onloadend = () => {
      setPreviewUrl(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSaving(true);
    setError('');

    try {
      // Convert tags string to array
      const tagsArray = formData.tags
        .split(',')
        .map(tag => tag.trim())
        .filter(tag => tag);

      let imageUrl = formData.coverImage;
      
      // If we have a new image file, upload it first
      if (imageFile) {
        const uploadFormData = new FormData();
        uploadFormData.append('image', imageFile);
        
        // Fix: Use correct API path
        const uploadResponse = await axios.post('/api/upload', uploadFormData, {
          withCredentials: true,
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        });
        
        // Get the URL of the uploaded image from the server response
        imageUrl = uploadResponse.data.imageUrl;
      }

      const postData = {
        ...formData,
        coverImage: imageUrl,
        tags: tagsArray
      };

      if (isEditMode) {
        // Fix: Use correct API path
        await axios.put(`/api/blog/${id}`, postData, { withCredentials: true });
      } else {
        // Fix: Use correct API path
        await axios.post('/api/blog', postData, { withCredentials: true });
      }
      
      navigate('/admin/dashboard');
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to save post');
      console.error(err);
    } finally {
      setIsSaving(false);
    }
  };

  if (isLoading) {
    return (
      <div className="post-editor-loading">
        <div className="spinner"></div>
        <p>Loading post data...</p>
      </div>
    );
  }

  return (
    <div className="post-editor-container">
      <div className="post-editor-header">
        <h1>{isEditMode ? 'Edit Post' : 'Create New Post'}</h1>
        <div className="post-editor-actions">
          <button 
            onClick={() => navigate('/admin/dashboard')}
            className="cancel-button"
          >
            Cancel
          </button>
          <button 
            onClick={handleSubmit}
            className="save-button"
            disabled={isSaving}
          >
            {isSaving ? 'Saving...' : 'Save Post'}
          </button>
        </div>
      </div>

      {error && <div className="post-editor-error">{error}</div>}

      <form className="post-editor-form">
        <div className="form-group">
          <label htmlFor="title">Post Title</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
            placeholder="Enter post title"
          />
        </div>

        <div className="form-group">
          <label htmlFor="excerpt">Excerpt</label>
          <textarea
            id="excerpt"
            name="excerpt"
            value={formData.excerpt}
            onChange={handleChange}
            required
            placeholder="Brief summary of the post"
            rows="3"
          ></textarea>
        </div>

        <div className="form-group">
          <label htmlFor="content">Content</label>
          <textarea
            id="content"
            name="content"
            value={formData.content}
            onChange={handleChange}
            required
            placeholder="Write your post content here..."
            rows="15"
          ></textarea>
        </div>

        <div className="form-group">
          <label htmlFor="coverImage">Featured Image</label>
          <input
            type="file"
            id="coverImage"
            accept="image/*"
            onChange={handleImageChange}
          />
          {previewUrl && (
            <div className="image-preview">
              <img src={previewUrl} alt="Preview" />
            </div>
          )}
        </div>

        <div className="form-row">
          <div className="form-group half">
            <label htmlFor="tags">Tags</label>
            <input
              type="text"
              id="tags"
              name="tags"
              value={formData.tags}
              onChange={handleChange}
              placeholder="Separate tags with commas"
            />
          </div>

          <div className="form-group half">
            <label htmlFor="readTime">Read Time</label>
            <input
              type="text"
              id="readTime"
              name="readTime"
              value={formData.readTime}
              onChange={handleChange}
              placeholder="e.g. 5 min read"
            />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="status">Status</label>
          <select
            id="status"
            name="status"
            value={formData.status}
            onChange={handleChange}
          >
            <option value="draft">Draft</option>
            <option value="published">Published</option>
          </select>
        </div>
      </form>
    </div>
  );
};

export default PostEditor;
