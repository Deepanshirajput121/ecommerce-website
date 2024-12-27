import React from 'react';
import ReactDOM from 'react-dom/client'; // use 'react-dom/client' for createRoot
import App from './App';
import { CartProvider } from './Components/CartContext';

const root = ReactDOM.createRoot(document.getElementById('root')); // createRoot instead of render
root.render(
  <CartProvider>
    <App />
  </CartProvider>
);
