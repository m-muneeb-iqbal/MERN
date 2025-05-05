import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import React from 'react';
import './../../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import './../../../styles/style.css'
import { BrowserRouter} from 'react-router-dom';

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <BrowserRouter>

        </BrowserRouter>
        <App/>
    </StrictMode>
);