import "bootstrap/dist/css/bootstrap.min.css";   // ✅ Bootstrap styles
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // ✅ JS (includes Popper)

import './styles/custom.css';
import './scripts/script.js';

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
