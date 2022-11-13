import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import imgLogo from "../images/TortasBibi-Logo_header.png"
import banner1 from "../images/banner1.png"
import { Link } from 'react-router-dom'

const NavBar = () => {

    return (
        <>
        <nav className="navbar navbar-expand-lg navbar-dark navbarColor">
            <div className="container-fluid">
                <Link to='/'>
                    <span className="navbar-brand">
                        <img className="imgLogo" src={imgLogo} alt="" />
                    </span>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 fw-bold d-flex gap-4">
                        <li className="nav-item">
                            <Link to='/' className="text-decoration-none">
                                <span className="nav-link text-white" href="#">Inicio</span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white" href="#">Productos</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white" href="#">Contacto</a>
                        </li>
                    </ul>
                    <div className="d-flex gap-3 me-3 divInputs">
                        <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Ingrese su busqueda..." aria-label="Search" />
                            <button className="btn btn-outline-light" type="submit">Buscar</button>
                        </form>
                        <div className="d-flex">
                        <Link to='/login'>
                            <button className="btn btn-outline-light" type="submit">Iniciar sesión</button>
                        </Link>
                        </div>
                        <div className="d-flex pt-2">
                            <FontAwesomeIcon className="colorCart" icon={faShoppingCart} />
                        </div>
                    </div>
                </div>
            </div>
        </nav>
        <div className="banner">
            <img className="bannerImg" src={banner1} alt="" />
        </div>
        </>
    )
}

export default NavBar