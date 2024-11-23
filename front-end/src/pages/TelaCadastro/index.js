import React, { useState } from 'react';
import './TelaCadastro.css';
import Navbar from '../../components/NavBar';
import Footer from '../../components/Footer';
import GoogleIcon from '../../UI/GoogleIcon';
import axios from 'axios';

const TelaCadastro = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    dob: '',
    password: '',
    username: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Log para verificar os dados do formulário
    console.log("Dados do formulário (formData):", formData); // Verifica o que está no estado formData
  
    // Verifica se os campos de confirmação de email e senha coincidem
    if (formData.email !== document.querySelector('input[name="confirmEmail"]').value) {
      alert('Os e-mails não coincidem.');
      return;
    }
    if (formData.password !== document.querySelector('input[name="confirmPassword"]').value) {
      alert('As senhas não coincidem.');
      return;
    }
  
    try {
      // Log para indicar que está iniciando a requisição ao backend
      console.log("Iniciando requisição ao backend...");
  
      // Faz a requisição com o formData original
      const response = await axios.post('http://localhost:3001/api/users/register', formData);
  
      // Log para verificar a resposta completa do axios
      console.log("Resposta do backend:", response); // Verifica a resposta completa
      console.log("Dados retornados pelo backend:", response.data); // Verifica o data retornado pelo backend
  
      // Exibe a mensagem do backend ou avisa se estiver indefinido
      if (response.data && response.data.message) {
        alert(response.data.message);
      } else {
        alert("Resposta do backend não contém 'message'. Verifique a resposta no console.");
      }
    } catch (error) {
      // Log para verificar o erro completo
      console.error('Erro ao registrar (código de status e resposta):', error.response?.status, error.response?.data); // Verifica o status e dados do erro
      alert(error.response?.data?.error || 'Erro desconhecido ao registrar.');
    }
  };
  return (
    <body>
    <div>
      <header>
        <Navbar />
      </header>
      <div className="page-heading ">
        <h1>Mude seus Hábitos!</h1>
        <h2>Faça seu registro!</h2>
      </div>

      <div className="form-container">
        <form className='form' onSubmit={handleSubmit}>
          <div className="form-row">
            <input
              type="text"
              name="firstName"
              placeholder="Primeiro Nome"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="lastName"
              placeholder="Último Nome"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-row">
            <input
              type="email"
              name="email"
              placeholder="E-mail"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="confirmEmail"
              placeholder="Confirme seu E-mail"
              required
            />
          </div>
          <div className="form-row">
            <input
              type="number"
              name="phone"
              placeholder="Telefone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
            <input
              type="date"
              name="dob"
              placeholder="Data de Aniversário"
              value={formData.dob}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-row">
            <input
              type="password"
              name="password"
              placeholder="Senha"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirme sua Senha"
              required
            />
          </div>
          <div className="form-row">
            <input
              type="text"
              name="username"
              placeholder="Nome de Usuário"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="register-button">Registrar</button>
        </form>
      </div>
      <div className='footer'>
        <Footer />
      </div>
    </div>
    </body>
  );
};


export default TelaCadastro;
