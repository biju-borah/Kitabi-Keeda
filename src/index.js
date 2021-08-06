import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { ProductsContextProvider } from './global/ProductsContext';
import { CartContextProvider } from './global/CartContext';


ReactDOM.render(
  <>
  <ProductsContextProvider>
    <CartContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </CartContextProvider>
  </ProductsContextProvider>
  </>,
  document.getElementById('root')
);
