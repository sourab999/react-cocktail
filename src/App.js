import { Routes, Route, useNavigate, createSearchParams } from "react-router-dom"

import { NavBar } from "./components/navbar"
import { Products } from "./pages/products"
import { Product } from "./pages/product"
import { Cart } from "./pages/cart"
import { NotFound } from "./pages/not-found"

import { useCart } from './context/cart'
import { Footer } from "./components/Footer/Footer"

function App() {

  // const navigate = useNavigate();
  const { cartItemCount } = useCart()

  // const onSearch = (searchQuery) => {
    // navigate(`/?${createSearchParams({ q: searchQuery })}`)
  // }

  return (
    <>
      <NavBar  cartItemCount={cartItemCount()} />
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/product/:productId" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
