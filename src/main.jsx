import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import axios from 'axios';

// Configure axios to include credentials in requests
axios.defaults.withCredentials = true;

// Set base URL for API requests in development
if (import.meta.env.DEV) {
  axios.defaults.baseURL = 'http://localhost:3001';
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
