import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';
import logo from '../../images/logo.svg';


const Header = () => {

    const [hamburger, setHamburger]= useState("");
    const [menu, setMenu]= useState("");
    const [submenu, setSubmenu]= useState("");
    const [scroll, setScroll]=useState("");

    const toggleHamburger = () => {
        if (hamburger === ""){
            setHamburger ("is-active");
            setMenu ("menu-desplegado"); 
        } else{
            setHamburger("");
            setMenu("");
            setSubmenu("");
        }
    }

    const toggleSubmenu = () => {
        if (submenu === ""){
            setSubmenu ("activo");
        } else{
            setSubmenu("");
        }
    }

    window.onscroll = function() {scrollFunction()};
    function scrollFunction(){
        if (document.documentElement.scrollTop > 265){
            setScroll("scroll");
        }else {
            setScroll("");
        }
    }

    return(
        <header className={`${scroll}`}>
            <div className="header-container">
                <button onClick={ toggleHamburger } className={`hamburger hamburger--collapse ${hamburger}`} type="button">
                    <span className="hamburger-box">
                        <span className="hamburger-inner"></span>
                    </span>
                </button>
                <Link to="/" onClick={ () => {setMenu(''); setHamburger(''); setSubmenu('');} }><img src={logo} alt="Logo GreenGardenBARF"/></Link>
                <a href="https://wa.me/573114575267"><i className="fab fa-whatsapp-square" /></a>
            </div>
            <nav className={`menu ${menu}`}>
                <div className="menu-principal-container">
                    <ul className="menu-principal">
                        <li><Link to="/dieta-barf" onClick={ toggleHamburger }>DIETA BARF</Link></li>
                        <li><Link to="/calcula-racion" onClick={ toggleHamburger }>CALCULA RACION</Link></li>
                        <li className={ submenu } onClick={ toggleSubmenu } >PRODUCTOS<i className="fas fa-arrow-down"/></li>
                            <ul className={`submenu ${submenu}`}>
                                <li><Link to="/productos/barf" onClick={ toggleHamburger }>BARF</Link></li>
                                <li><Link to="/productos/snacks" onClick={ toggleHamburger }>SNACKS</Link></li>
                                <li><Link to="/productos/cumpleaños" onClick={ toggleHamburger }>CUMPLEAÑOS</Link></li>
                                <li><Link to="/productos/combos" onClick={ toggleHamburger }>COMBOS</Link></li>
                            </ul>
                        <li><Link to="/nosotros" onClick={ toggleHamburger }>NOSOTROS</Link></li>
                        <li><Link to="/familia-ggb" onClick={ toggleHamburger }>FAMILIA GGB</Link></li>
                    </ul>
                </div>
                <div className={`menu-secundario-container ${submenu}`}>
                    <div className="menu-redes-container">
                        <div className="menu-redes-icono"><a href="https://instagram.com/greengardenbarf"><i className="fab fa-instagram"/></a></div>
                        <div className="menu-redes-icono"><a href="https://es-la.facebook.com/greengardenbarf/"><i className="fab fa-facebook-square"/></a></div>
                        <div className="menu-redes-icono"><a href="https://wa.me/573114575267"><i className="fab fa-whatsapp-square" /></a></div>
                    </div>
                    <hr></hr>
                    <ul className="menu-secundario">
                        <li><Link to="/preguntas-frecuentes" onClick={ toggleHamburger }>PREGUNTAS FRECUENTES</Link></li>
                        <li><Link to="/contacto" onClick={ toggleHamburger }>CONTACTO</Link></li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}

export default Header;