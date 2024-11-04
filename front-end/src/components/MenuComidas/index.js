import React, { useState } from 'react';
import './MenuComidas.css';


const MenuComidas = () => {
  const [activeTab, setActiveTab] = useState("Todas");

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid justify-content-center">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a
                className={`nav-link ${activeTab === "Todas" ? "active" : ""}`}
                href="#"
                onClick={() => setActiveTab("Todas")}
              >
                Todas
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link ${activeTab === "Café da Manhã" ? "active" : ""}`}
                href="#"
                onClick={() => setActiveTab("Café da Manhã")}
              >
                Café da Manhã
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link ${activeTab === "Almoço" ? "active" : ""}`}
                href="#"
                onClick={() => setActiveTab("Almoço")}
              >
                Almoço
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link ${activeTab === "Lanches Rápidos" ? "active" : ""}`}
                href="#"
                onClick={() => setActiveTab("Lanches Rápidos")}
              >
                Lanches Rápidos
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link ${activeTab === "Bebidas" ? "active" : ""}`}
                href="#"
                onClick={() => setActiveTab("Bebidas")}
              >
                Bebidas
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default MenuComidas;
