// Importing necessary modules from React and ReactDOM
import React from 'react';
import ReactDOM from 'react-dom/client'; // Ensure correct import path
import App from './App.jsx'; // Importing the main App component
import './index.css'; // Importing CSS file for styling

// Rendering the App component to the root element of the HTML document
ReactDOM.createRoot(document.getElementById('root')).render(
  <App />
);
