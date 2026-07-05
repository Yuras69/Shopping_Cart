import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {Routes, Route, BrowserRouter} from 'react-router-dom'
import Cart from './Pages/Cart'
import Contact from './Pages/Contact'
import Product from './Pages/Product'
import ProductAdd from './Pages/ProductAdd'
import CartProvider from './Context/CartContext'





createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CartProvider>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/Cart" element={<Cart />} />
      <Route path="/Contact" element={<Contact />} />
      <Route path="/Product" element={<Product />} />
      <Route path="/ProductAdd" element={<ProductAdd />} />
    </Routes>
    </BrowserRouter>
    </CartProvider>
  </StrictMode>,
)
