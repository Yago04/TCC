import React from "react";
import './Footer.css'; // Arquivo CSS que criamos
import FooterImagem from '../../assets/img/footer.png';


const Footer = () => {
  return (
    <footer className="footer">
      <div className="container_principal">
        <div className="titulo">
          <p className="footer-text">
            sua <span className="highlight">Refeição</span> tão <span className="highlight">Única</span> quanto você!
          </p>
          <button className="footer-button">Receitas </button>
        </div>
      </div>
      <div className="container_secundario">
        <div className="footer-bottom">
          <div className="social-icons">
            <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noreferrer">
              <i className="fab fa-twitter"></i>
            </a>
          </div>
          <p className="footer-copyright">
            &copy; 2024. All Rights Reserved
          </p>
        </div>
      </div>



    </footer>
  );
};

export default Footer;
