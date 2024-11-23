import React from "react";
import "./Footer.css"; // Importa o arquivo CSS para os estilos

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        {/* Esquerda */}
        <div className="footer-left">
          <h2>NUTRICHEF</h2>
          <div className="social-icons">
            <a href="#" aria-label="Instagram">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" aria-label="Facebook">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" aria-label="Twitter">
              <i className="fab fa-twitter"></i>
            </a>
          </div>
          <p>&copy; 2024. All Rights Reserved</p>
        </div>

        {/* Direita */}
        <div className="footer-right">
          <h3>Nunca perca uma receita</h3>
          <div className="newsletter">
            <input type="email" placeholder="Email Address" />
            <button>Inscrever</button>
          </div>
          <p>Se inscreva em nosso newsletter para receber receitas novas e atualizadas</p>
        </div>
      </div>

      {/* Linha inferior com links */}
      <div className="footer-bottom">
        <a href="#">Termos e Condições</a>
        <a href="#">Política de Privacidade</a>
      </div>
    </footer>
  );
};

export default Footer;
