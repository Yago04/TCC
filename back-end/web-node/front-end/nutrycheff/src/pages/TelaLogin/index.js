import React, { useState } from 'react';
import Navbar from '../../components/NavBar';
import './TelaLogin.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import GoogleIcon from '../../UI/GoogleIcon';
import Footer from '../../components/Footer';



const TelaLogin = () => {
  const [senhaVisivel, setSenhaVisivel] = useState(false);

  const toggleSenha = () => {
    setSenhaVisivel(!senhaVisivel);
  };

  return (
    <div>
      <header><Navbar /></header>
      <div className='container-principal'>
        <div className='container'>
          <div className='titulo'>
            <h1>Pronto para uma nova receita?</h1>
            <h1>Faça o seu login!</h1>
          </div>

          <div className='container-login'>
            {/* Campo de E-mail */}

            

              <div className='email'>
                <label>E-mail </label>
                <input placeholder='Digite o seu e-mail' type="email" />
              </div>

              {/* Campo de Senha */}
              <div className='senha'>
                <label>Senha</label>
                <div className="input-container">
                  <input
                    type={senhaVisivel ? 'text' : 'password'}
                    className='input-senha'
                    placeholder='********'
                  />
                  <button
                    type="button"
                    className="botao-visualizar"
                    onClick={toggleSenha}
                  >
                    <i className={`fa ${senhaVisivel ? 'fa-eye-slash' : 'fa-eye'}`}></i>
                  </button>
                </div>
              </div>

              {/* Botões de Login */}
              <div className='button-login'>
                <button type='submit'>Login</button>
                <button className='button-login-gg'>
                  <GoogleIcon />
                  Continue com Google
                </button>
              </div>
    
          </div>
        </div>
      </div>
      <div className='footer'>

        <Footer />

      </div>
    </div>
  );
};

export default TelaLogin;
