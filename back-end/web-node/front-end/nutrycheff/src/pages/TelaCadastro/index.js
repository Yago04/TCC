import React, { useState } from 'react';
import './TelaCadastro.css';
import Navbar from '../../components/NavBar';
import Footer from '../../components/Footer';
import GoogleIcon from '../../UI/GoogleIcon';


const TelaCadastro = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        confirmEmail: '',
        phone: '',
        birthDate: '',
        password: '',
        confirmPassword: '',
        username: ''
      });

      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value
        });
      };

      const handleSubmit = (e) => {
        e.preventDefault();
        // Form submission logic here
        console.log('Form Data Submitted:', formData);
      };

      return (
        <div>
            <header>
              <Navbar/>
            </header>
            <div className="page-heading">
              <h1>Mude seus Hábitos!</h1>
              <h2>Faça seu registro!</h2>
            </div>

            <div className="form-container">
              <form onSubmit={handleSubmit} className='form'>
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
                    value={formData.confirmEmail}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-row">
                  <input
                    type="text"
                    name="phone"
                    placeholder="Telefone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                  <input
                    type="date"
                    name="birthDate"
                    placeholder="Data de Aniversário"
                    value={formData.birthDate}
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
                    value={formData.confirmPassword}
                    onChange={handleChange}
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
                <button className="google-button">
                <GoogleIcon/> Continue com Google
                </button>
              </form>
          </div>  
          <div className='footer'> 

      <Footer/>

      </div>
        </div>
      );
    };
    

export default TelaCadastro