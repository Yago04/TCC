import React, { useState } from "react";
import './Configuracao.css';
import Navbar from '../../components/NavBar';
import Footer from '../../components/Footer';

const Configuracao = () => {
    const [showPopup, setShowPopup] = useState(false); // Controle do popup
    const [showSuccess, setShowSuccess] = useState(false); // Mensagem de sucesso
    const [profileImage, setProfileImage] = useState(null); // Armazena a imagem selecionada

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file); // Cria uma URL para a imagem selecionada
            setProfileImage(imageUrl); // Atualiza a imagem de perfil
            setShowPopup(false); // Fecha o popup
            setShowSuccess(true); // Mostra mensagem de sucesso
            setTimeout(() => setShowSuccess(false), 3000); // Oculta a mensagem após 3 segundos
        }
    };

    return (
        <div>
            <div>
                <Navbar />
            </div>
            <div className="container-configuracao-title">
                <hr className="custom-line" />
                <h5>Configurações</h5>
            </div>
            <div className="container-configuracao">

                <div className="form-container">
                    <div className="profile-section">
                        <img
                            src={profileImage || "https://via.placeholder.com/100"}
                            alt="Avatar"
                            className="profile-image"
                        />
                        <a
                            href="#"
                            className="change-image"
                            onClick={() => setShowPopup(true)} // Exibe o popup
                        >
                            Trocar Imagem
                        </a>
                    </div>
                    <form className="config-form">
                        <label htmlFor="username">Usuário</label>
                        <input
                            type="text"
                            id="username"
                            required
                        />
                        <p className="helper-text">
                            *Precisa conter 5-20 caracteres<br />
                            *Pode conter letras (A-Z, a-z), números (0-9)<br />
                            *Pode conter caracteres especiais como (+, -, _, ., !)
                        </p>

                        <label htmlFor="email">E-mail</label>
                        <input
                            type="email"
                            id="email"
                            required
                        />

                        <label htmlFor="firstName">Primeiro Nome</label>
                        <input
                            type="text"
                            id="firstName"

                            required
                        />

                        <label htmlFor="lastName">Último Nome</label>
                        <input
                            type="text"
                            id="lastName"

                            required
                        />

                        <label htmlFor="phone">Telefone</label>
                        <input
                            type="text"
                            id="phone"

                            required
                        />

                        <label htmlFor="birthDate">Data de Nascimento</label>
                        <input
                            type="date"
                            id="birthDate"

                            required
                        />

                        <label htmlFor="description">Descrição</label>
                        <textarea
                            id="description"
                            rows="4"
                        />

                        <button type="submit" className="save-button">SALVAR</button>
                    </form>
                </div>
            </div>

            {/* Popup para alterar a imagem */}
            {showPopup && (
                <div className="popup">
                    <div className="popup-content">
                        <h4>Alterar Imagem</h4>
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleImageChange} // Atualiza a imagem no estado
                        />
                        <div className="popup-actions">
                            <button
                                className="popup-button"
                                onClick={() => setShowPopup(false)}
                            >
                                Cancelar
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Mensagem de sucesso */}
            {showSuccess && (
                <div className="success-message">
                    Alteração realizada com sucesso!
                </div>
            )}

            <div>
                <Footer />
            </div>
        </div>
    );
};

export default Configuracao;
