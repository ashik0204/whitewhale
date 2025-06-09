import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// Import your existing components
import BlogListPage from './pages/BlogListPage';
import BlogDetailPage from './pages/BlogDetailPage';

function App() {
  return (
    <Router>
      <Routes>
        {/* Your existing routes */}
        <Route path="/blog" element={<BlogListPage />} />
        <Route path="/blog/:id" element={<BlogDetailPage />} />
        {/* Other routes */}
      </Routes>
    </Router>
  );
}

export default App;
