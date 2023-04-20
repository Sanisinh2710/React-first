import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Post from './Component/User-post';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: '/User-post',
    element: <Post />
  },
])

root.render(
  // <React.StrictMode>
  <RouterProvider router={router} />
  // </React.StrictMode>  
);


reportWebVitals();
