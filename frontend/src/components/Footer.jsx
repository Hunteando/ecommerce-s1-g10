import { FaInstagram } from 'react-icons/fa';
import { FaFacebookF } from 'react-icons/fa';
import { FaWhatsapp } from 'react-icons/fa';
import {FaMapMarkedAlt} from 'react-icons/fa';

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
                            placeholder="Ingresa aqui tu email"
                            minLength="4" maxLength="8" size="10">
                        </input>
                        <a href="#" className="btn bgButton btnFooter">Enviar</a>
                    </div>
                </div>
                <div className='divRedes'>
                    <div className='navFooter'>
                        <div><a className='linkFooter' href="#">Inicio</a></div>
                        <div><a className='linkFooter' href="#">Productos</a></div>
                        <div><a className='linkFooter' href="#">Sobre Nosotros</a></div>
                        <div><a className='linkFooter' href="#">Contacto</a></div>
                    </div>
                    <div className='navFooter'>
                        <div><a className='linkFooter' href="#"><FaInstagram/> Instagram </a></div>
                        <div><a className='linkFooter' href="#"><FaFacebookF/> Facebook</a></div>
                        <div><a className='linkFooter' href="#"><FaWhatsapp /> Whatsapp</a></div>
                        <div><a className='linkFooter' href="#"><FaMapMarkedAlt/> Dirección</a></div>
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
