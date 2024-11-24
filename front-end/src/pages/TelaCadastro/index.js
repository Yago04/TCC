import React, { useState } from 'react';
import './TelaCadastro.css';
import Navbar from '../../components/NavBar';
import Footer from '../../components/Footer';

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

    // Verifica se os campos de confirmação de email e senha coincidem
    const confirmEmail = e.target.confirmEmail.value;
    const confirmPassword = e.target.confirmPassword.value;

    if (formData.email !== confirmEmail) {
      alert('Os e-mails não coincidem.');
      return;
    }
    if (formData.password !== confirmPassword) {
      alert('As senhas não coincidem.');
      return;
    }

    try {
      const response = await axios.post('http://localhost:3001/api/users/register', formData);
      if (response.data?.message) {
        alert(response.data.message);
      } else {
        alert("Erro inesperado. Verifique a resposta no console.");
      }
    } catch (error) {
      console.error('Erro ao registrar:', error.response?.data || error.message);
      alert(error.response?.data?.error || 'Erro desconhecido ao registrar.');
    }
  };

  return (
    <div>
      <header>
        <Navbar />
      </header>
      <main className="page-container">
        <h1>Mude seus Hábitos!</h1>
        <h2>Faça seu registro!</h2>

        <form className="form" onSubmit={handleSubmit}>
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
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default TelaCadastro;
