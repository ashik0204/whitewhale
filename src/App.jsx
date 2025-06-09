import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import FeaturesSection from './components/FeaturesSection';
import PricingSection from './components/PricingSection';
import BlogSection from './components/BlogSection';
import ContactSection from './components/ContactSection';
import BeliefsSection from './components/BeliefsSection';
import AdminLogin from './pages/AdminLogin';
import AdminDashboard from './pages/AdminDashboard';
import PostEditor from './pages/PostEditor';
import BlogListPage from './pages/BlogListPage';
import BlogDetail from './pages/BlogDetail';
import HomePage from './pages/HomePage';
import AdminRegister from './pages/AdminRegister';
import './index.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/posts/new" element={<PostEditor />} />
        <Route path="/admin/posts/edit/:id" element={<PostEditor />} />
        <Route path="/blog" element={<BlogListPage />} />
        <Route path="/blog/:slug" element={<BlogDetail />} />
        <Route path="/admin/register" element={<AdminRegister />} />
      </Routes>
    </Router>
  );
}

export default App;
