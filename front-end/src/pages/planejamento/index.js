import React, { useState } from "react";
import './Planejamento.css';
import Footer from '../../components/Footer'
import Navbar from "../../components/NavBar";

const Planejamento = () => {
    const [dropdowns, setDropdowns] = useState({
        preTreino: false,
        cafeManha: false,
        almoco: false,
        lanche: false,
        jantar: false,
    });

    const [popupVisible, setPopupVisible] = useState(false);

    const toggleDropdown = (dropdownName) => {
        setDropdowns((prevState) => ({
            ...prevState,
            [dropdownName]: !prevState[dropdownName],
        }));
    };

    const togglePopup = () => {
        setPopupVisible(!popupVisible);
    };

    return (
        <div>
        <div className="planejamento-container">
            <div>
                <Navbar/>
            </div>
            
            {/* Título */}
            <div className="container-title">
                <hr className="custom-line" />
                <h2>Planejamento Alimentar</h2>
            </div>

            {/* Metas e Objetivos */}
            <div className="metas-objetivos">
                <div className="metas-container">
                    <select id="metas" className="metas-dropdown">
                        <option value="" disabled selected>Metas e Objetivos</option>
                        <option value="emagrecer">Emagrecer</option>
                        <option value="ganhar-peso">Ganhar Peso</option>
                        <option value="manter-peso">Manter Peso</option>
                    </select>

                </div>
            </div>

            {/* Popup */}
            {popupVisible && (
                <div className="popup-overlay" onClick={togglePopup}>
                    <div className="popup-content" onClick={(e) => e.stopPropagation()}>
                        <h3>Informações sobre Metas</h3>
                        <p>Escolha uma meta para personalizar seu planejamento alimentar.</p>
                        <button onClick={togglePopup}>Fechar</button>
                    </div>
                </div>
            )}

            {/* Refeições */}
            <div className="refeicoes">
                <div className="container-title">
                    <h3>Refeições</h3>
                    <hr className="custom-line" />
                </div>

                {/* Pré-Treino */}
                <div className="refeicao-item">
                    <div
                        className="dropdown-header"
                        onClick={() => toggleDropdown("preTreino")}
                    >
                        <button className="popup-icon" onClick={togglePopup}>
                            🛈
                        </button>
                        <span>5:30 - Pré Treino</span>
                        <span className="dropdown-icon">
                            {dropdowns.preTreino ? "▲" : "▼"}
                        </span>

                    </div>
                    {dropdowns.preTreino && (
                        <div className="dropdown-content">
                            <p><strong>Opção 1:</strong> Banana</p>
                            <p><strong>Opção 2:</strong> Ovos</p>
                            <p><strong>Opção 3:</strong> Aveia</p>
                        </div>
                    )}
                </div>

                {/* Café da Manhã */}
                <div className="refeicao-item">
                    <div
                        className="dropdown-header"
                        onClick={() => toggleDropdown("cafeManha")}
                    >
                        <button className="popup-icon" onClick={togglePopup}>
                            🛈
                        </button>
                        <span>07:30 - Café da Manhã</span>
                        <span className="dropdown-icon">
                            {dropdowns.cafeManha ? "▲" : "▼"}
                        </span>
                    </div>
                    {dropdowns.cafeManha && (
                        <div className="dropdown-content">

                            <p><strong>Opção 1:</strong> Pão Integral</p>
                            <p><strong>Opção 2:</strong> Queijo</p>
                            <p><strong>Opção 3:</strong> Suco</p>
                        </div>
                    )}
                </div>

                {/* Almoço */}
                <div className="refeicao-item">
                    <div
                        className="dropdown-header"
                        onClick={() => toggleDropdown("almoco")}
                    >
                        <button className="popup-icon" onClick={togglePopup}>
                            🛈
                        </button>
                        <span>12:30 - Almoço</span>
                        <span className="dropdown-icon">
                            {dropdowns.almoco ? "▲" : "▼"}
                        </span>
                    </div>
                    {dropdowns.almoco && (
                        <div className="dropdown-content">
                            <p><strong>Opção 1:</strong> Arroz</p>
                            <p><strong>Opção 2:</strong> Feijão</p>
                            <p><strong>Opção 3:</strong> Frango</p>
                        </div>
                    )}
                </div>

                {/* Lanche */}
                <div className="refeicao-item">
                    <div
                        className="dropdown-header"
                        onClick={() => toggleDropdown("lanche")}
                    >
                        <button className="popup-icon" onClick={togglePopup}>
                            🛈
                        </button>
                        <span>16:00 - Lanche</span>
                        <span className="dropdown-icon">
                            {dropdowns.lanche ? "▲" : "▼"}
                        </span>
                    </div>
                    {dropdowns.lanche && (
                        <div className="dropdown-content">
                            <p><strong>Opção 1:</strong> Iogurte</p>
                            <p><strong>Opção 2:</strong> Frutas</p>
                            <p><strong>Opção 3:</strong> Barrinha de Cereal</p>
                        </div>
                    )}
                </div>

                {/* Jantar */}
                <div className="refeicao-item">
                    <div
                        className="dropdown-header"
                        onClick={() => toggleDropdown("jantar")}
                    >
                        <button className="popup-icon" onClick={togglePopup}>
                            🛈
                        </button>
                        <span>20:00 - Jantar</span>
                        <span className="dropdown-icon">
                            {dropdowns.jantar ? "▲" : "▼"}
                        </span>
                    </div>
                    {dropdowns.jantar && (
                        <div className="dropdown-content">
                            <p><strong>Opção 1:</strong> Sopa</p>
                            <p><strong>Opção 2:</strong> Omelete</p>
                            <p><strong>Opção 3:</strong> Salada</p>
                        </div>
                    )}
                   
                </div>
            </div>

        </div>
            <div className="container-Footer">
                    <Footer/>
            </div>
        </div>

    
    );
};

export default Planejamento;