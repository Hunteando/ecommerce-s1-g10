import { BrowserRouter, Route, Routes } from "react-router-dom"
import Category1 from "./components/Category1"
import Login from "./components/Login"
import NavBar from "./components/NavBar"
import Footer from "./components/Footer"
import PasswordRecovery from "./components/PasswordRecovery"
import Register from "./components/Register"
import Cart from "./components/Cart"

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
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
