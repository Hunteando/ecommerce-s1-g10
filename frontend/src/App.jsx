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

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={ <Category1 /> } />
        <Route path="/login" element={ <Login /> } />
        <Route path="/recuperarpassword" element={ <PasswordRecovery /> } />
        <Route path="/registro" element={ <Register /> } />
        <Route path="/cart" element={ <Cart /> } />
        <Route path="/checkout" element={ <Checkout /> } />
        <Route path="/productos" element={ <ProductsContainer /> } />
        <Route path='/item/:itemId' element={ <ItemDetailContainer /> } />
        <Route path='/paneldeusuario' element={ <UserPanel /> } />
        <Route path="/contacto" element={ <Contact /> } />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
