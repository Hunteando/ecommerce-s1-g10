import { FaInstagram } from 'react-icons/fa';
import { FaFacebookF } from 'react-icons/fa';
import { FaWhatsapp } from 'react-icons/fa';
import {FaMapMarkedAlt} from 'react-icons/fa';
import { Link } from 'react-router-dom';

import imgLogo from "../images/TortasBibi-Logo_header.png"
const Footer = () => {
    return (
        <div>
            <div className='flexFooter'>
                <div className='footer'>
                    <div className='divLogoFooter'>
                        <img className="imgLogoFooter" src={imgLogo} alt="" />
                    </div>
                    <div className='divFormFooter'>
                        <label className='labelFooter'>Subscribete a nuestras ofertas</label>
                        <input className='inputFooter' type="email" id="email" name="email" required
                            placeholder="Ingresa aqui tu email">
                        </input>
                        <button className="btn bgButton btnFooter">Enviar</button>
                    </div>
                </div>
                <div className='divRedes'>
                    <div className='navFooter'>
                        <div>
                            <Link to='/' className='text-decoration-none'>
                                <span className='linkFooter'>Inicio</span>
                            </Link>
                        </div>
                        <div>
                            <Link to='/productos' className='text-decoration-none'>
                                <span className='linkFooter'>Productos</span>
                            </Link>
                        </div>
                        <div>
                            <Link to='/sobrenosotros' className='text-decoration-none'>
                                <span className='linkFooter'>Sobre Nosotros</span>
                            </Link>
                        </div>
                        <div>
                            <Link to='/contacto' className='text-decoration-none'>
                                <span className='linkFooter'>Contacto</span>
                            </Link>
                        </div>
                    </div>
                    <div className='navFooter'>
                        <div>
                            <a className='linkFooter' target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/tortasbibiymas">
                                <FaInstagram/> Instagram
                            </a>
                        </div>
                        <div>
                            <a className='linkFooter' target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/tortasbibiymas">
                                <FaFacebookF/> Facebook
                            </a>
                        </div>
                        <div>
                            <a className='linkFooter' target="_blank" rel="noopener noreferrer" href="https://walink.co/17b881">
                                <FaWhatsapp /> Whatsapp
                            </a>
                        </div>
                        <div>
                            <a className='linkFooter' target="_blank" rel="noopener noreferrer" href="#">
                                <FaMapMarkedAlt/> Dirección
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className='textFooterBot text-center'>
                <p>Tortas Bibi 2022 - Desarrollado por Equipo 10 Hunteando</p>
            </div>
        </div>
    )
}

export default Footer
