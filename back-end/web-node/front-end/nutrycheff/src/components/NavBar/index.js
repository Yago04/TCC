import React, { useState } from 'react';
import './NavBar.css';


const Navbar = () => {
    const  goCadastro = () =>{
        window.location.href = '../../pages/TelaCadastro/'
    }
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(prevState => !prevState);
    };

    return (
        <div className="navbar">
            {/* Menu Icon */}
            <div className="menu-icon" onClick={toggleMenu}>
                <div className={`bar1 ${isMenuOpen ? 'open' : ''}`}></div>
                <div className={`bar2 ${isMenuOpen ? 'open' : ''}`}></div>
                <div className={`bar3 ${isMenuOpen ? 'open' : ''}`}></div>
            </div>

            {/* Logo */}
            <div className="navbar-logo">
                <h1>NUTRICHEF</h1>
            </div>

            {/* Navigation Links */}
            <div className={`navbar-links ${isMenuOpen ? 'show' : ''}`}>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Sobre</a></li>
                    <li><a href="#">Serviços</a></li>
                    <li><a href="#">Contato</a></li>
                </ul>
            </div>

                <div className='search-container'>
                  <input type="text" placeholder="Pesquisar..." className="search-bar" />
                    <span className="search-icon">🔍</span>
                </div>

            <div className="navbar-right">
            
                <a className="icon-button-1" href='/register'>
                   Registrar 
                </a>
                <a className="icon-button-2" href='/login'>
                 Login
                </a>
                <a className="icon-button-3">
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Zm0-108q96-86 158-147.5t98-107q36-45.5 50-81t14-70.5q0-60-40-100t-100-40q-47 0-87 26.5T518-680h-76q-15-41-55-67.5T300-774q-60 0-100 40t-40 100q0 35 14 70.5t50 81q36 45.5 98 107T480-228Zm0-273Z"/></svg>
                </a>
            </div>
        </div>
    );
};

export default Navbar;
