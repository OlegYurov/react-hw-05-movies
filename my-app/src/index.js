import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'modern-normalize'
import { BrowserRouter } from 'react-router-dom'
import css from './index.css'



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
     <BrowserRouter basename="/react-hw-05-movies/">
            <App />
    </BrowserRouter>
      
);

