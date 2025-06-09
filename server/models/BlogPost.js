import mongoose from 'mongoose';
import slugify from 'slugify';

const PostSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  slug: {
    type: String,
    unique: true
  },
  content: {
    type: String,
    required: true
  },
  excerpt: {
    type: String,
    required: true
  },
  coverImage: {
    type: String,
    default: '/images/default-cover.jpg'
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  tags: [String],
  published: {
    type: Boolean,
    default: true
  },
  featured: {
    type: Boolean,
    default: false
  },
  viewCount: {
    type: Number,
    default: 0
  }
}, {
  timestamps: true
});

// Create slug from title before saving
PostSchema.pre('save', function(next) {
  if (this.isModified('title') || !this.slug) {
    this.slug = slugify(this.title, { 
      lower: true,
      strict: true
    });
  }
  next();
});

// const Post = mongoose.model('Post', PostSchema);
export default mongoose.models.Post || mongoose.model('Post', PostSchema);