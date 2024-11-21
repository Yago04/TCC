import React, { useState } from 'react';
import './NavBar.css';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false); // Controle do menu horizontal
    const [isSearchOpen, setIsSearchOpen] = useState(false); // Controle da barra de busca
    const [isDropdownOpen, setIsDropdownOpen] = useState(false); // Controle do menu de usuário
    const [isLoggedIn, setIsLoggedIn] = useState(true); // Estado de login do usuário

    const toggleMenu = () => {
        setIsMenuOpen(prevState => !prevState); // Alterna o estado do menu horizontal
    };

    const toggleSearch = () => {
        setIsSearchOpen(prevState => !prevState); // Alterna o estado da barra de busca
    };

    const toggleDropdown = () => {
        setIsDropdownOpen(prevState => !prevState); // Alterna o menu suspenso do avatar
    };

    const handleLoginLogout = () => {
        setIsLoggedIn(prevState => !prevState); // Alterna entre logado/deslogado
        setIsDropdownOpen(false); // Fecha o menu ao alternar
    };

    return (
        <div className="navbar-principal">
            <div className="navbar-logo">
                <a href="/" className="logo-text">NUTRICHEF</a>
            </div>

           
            <div className="navbar-icons">
                
                <div className="menu-icon" onClick={toggleMenu}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="24px"
                        width="24px"
                        viewBox="0 0 24 24"
                        fill="#ff6f00"
                        className={`menu-svg ${isMenuOpen ? 'open' : ''}`}
                    >
                        {!isMenuOpen ? (
                            <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z" />
                        ) : (
                            <path d="M18.3 5.7l-1.4-1.4L12 9.2 7.1 4.3 5.7 5.7l4.9 4.9-4.9 4.9 1.4 1.4 4.9-4.9 4.9 4.9 1.4-1.4-4.9-4.9z" />
                        )}
                    </svg>
                </div>

                {/* Barra de Pesquisa */}
                <div className={`search-container ${isSearchOpen ? 'active' : ''}`}>
                    <input
                        type="text"
                        className="search-bar"
                        placeholder="Pesquisar..."
                        style={{ display: isSearchOpen ? 'block' : 'none' }}
                    />
                    <div className="search-icon" onClick={toggleSearch}>
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#ff6f00">
                            <path d="M0 0h24v24H0z" fill="none" />
                            <path d="M15.5 14h-.79l-.28-.27a6.518 6.518 0 001.48-5.34C15.24 5.26 13.07 3 10.5 3S5.76 5.26 5.06 7.39c-.41 1.24-.44 2.59-.11 3.85.32 1.25 1.01 2.41 1.94 3.29a6.518 6.518 0 005.34 1.48l.27-.28v-.79l4.25 4.25c.39.39 1.02.39 1.41 0l.09-.09c.39-.39.39-1.02 0-1.41L15.5 14zm-5 0C8.01 14 6 11.99 6 9.5S8.01 5 10.5 5 15 7.01 15 9.5 12.99 14 10.5 14z" />
                        </svg>
                    </div>
                </div>

              
                <div className="favorites-icon">
                    <a href='./favoritos'> 

                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#ff6f00">
                        <path d="M0 0h24v24H0z" fill="none" />
                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                    </svg>

                    </a>
                </div>

                {/* Ícone de Avatar */}
                <div className="user-avatar" onClick={toggleDropdown}>
                    <img
                        src="https://cdn-icons-png.flaticon.com/512/5987/5987462.png"
                        alt="User Avatar"
                        className="avatar-icon"
                    />
                    {isDropdownOpen && (
                        <div className="dropdown-menu">
                            {isLoggedIn ? (
                                <>
                                    <a href="/perfil" className="dropdown-item">Perfil</a>
                                    <a href="/dashboard" className="dropdown-item">Dashboard</a>
                                    <a href="/planejamento" className="dropdown-item">Planejamento</a>
                                    <a href="/receita" className="dropdown-item">Adicionar Receita</a>
                                    <a href="/Configuracao" className="dropdown-item">Configurações</a>
                                    <button
                                        className="dropdown-item logout-button"
                                        onClick={handleLoginLogout}
                                    >
                                        Encerrar Sessão
                                    </button>
                                </>
                            ) : (
                                <>
                                    <a href="/login" className="dropdown-item">Logar</a>
                                    <a href="/register" className="dropdown-item">Registrar</a>
                                </>
                            )}
                        </div>
                    )}
                </div>
            </div>

            {/* Menu Horizontal */}
            <div className={`horizontal-menu ${isMenuOpen ? 'show' : ''}`}>
                <a href="/" className="menu-link">Início</a>
                <a href="/sobre" className="menu-link">Sobre</a>
                <a href="/receitas" className="menu-link">Receitas</a>
                <a href="/contato" className="menu-link">Contato</a>
            </div>
        </div>
    );
};

export default Navbar;
