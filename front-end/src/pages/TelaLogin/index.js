import React, { useState } from 'react';
import Navbar from '../../components/NavBar';
import './TelaLogin.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import GoogleIcon from '../../UI/GoogleIcon';
import Footer from '../../components/Footer';
import axios from 'axios'; // Importa o axios para fazer requisições

const TelaLogin = () => {
  const [senhaVisivel, setSenhaVisivel] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const toggleSenha = () => {
    setSenhaVisivel(!senhaVisivel);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Evita o comportamento padrão do formulário

    try {
      const response = await axios.post('http://localhost:3001/api/users/login', formData);
      alert(response.data.message);
      // Aqui você pode redirecionar o usuário ou armazenar o token de autenticação se necessário
    } catch (error) {
      console.error('Erro ao fazer login:', error);
      alert(error.response.data.error); // Exibe o erro retornado pelo backend
    }
  };

  return (
    <div>
      <header><Navbar /></header>
      <div className='container-principal'>
        <div className='container-principal-login'>
          <div className='titulo'>
            <h1>Pronto para uma nova receita?</h1>
            <h1>Faça o seu login!</h1>
          </div>

          <div className='container-login'>
            <form onSubmit={handleSubmit} className='form-login'>
              {/* Campo de E-mail */}
              <div className='email'>
                <label>E-mail </label>
                <input
                  placeholder='Digite o seu e-mail'
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Campo de Senha */}
              <div className='senha'>
                <label>Senha</label>
                <div className="input-container">
                  <input
                    type={senhaVisivel ? 'text' : 'password'}
                    className='input-senha'
                    placeholder='********'
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
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
                <button type='submit' href='/Home'>Login</button>
                <button className='button-login-gg'>
                  <GoogleIcon />
                  Continue com Google
                </button>
              </div>
            </form>
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
