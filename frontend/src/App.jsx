import { BrowserRouter, Route, Routes } from "react-router-dom"
import Category1 from "./components/Category1"
import Login from "./components/Login"
import NavBar from "./components/NavBar"
import Footer from "./components/Footer"
import PasswordRecovery from "./components/PasswordRecovery"
import Register from "./components/Register"
import Cart from "./components/Cart"
import Checkout from "./components/Checkout"
import ProductsContainer from "./components/ProductsContainer"
import ItemDetailContainer from "./components/ItemDetailContainer"
import UserPanel from "./components/UserPanel"
import Contact from "./components/Contact"
import AboutUs from "./components/AboutUs"
import AdminPanel from "./components/AdminPanel"
import CartProvider from './context/CartContext'

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <NavBar />
        <Routes>
          <Route path="/" element={ <Category1 /> } />
          <Route path="/categorias/:categoryId" element={ <ProductsContainer /> } />
          <Route path="/login" element={ <Login /> } />
          <Route path="/recuperarpassword" element={ <PasswordRecovery /> } />
          <Route path="/registro" element={ <Register /> } />
          <Route path="/cart" element={ <Cart /> } />
          <Route path="/checkout" element={ <Checkout /> } />
          <Route path="/productos" element={ <ProductsContainer /> } />
          <Route path='/item/:itemId' element={ <ItemDetailContainer /> } />
          <Route path='/paneldeusuario' element={ <UserPanel /> } />
          <Route path='/paneladministrador' element={ <AdminPanel /> } />
          <Route path="/contacto" element={ <Contact /> } />
          <Route path="/sobrenosotros" element={ <AboutUs /> } />
        </Routes>
        <Footer />
      </CartProvider>
    </BrowserRouter>
  )
}

export default App
