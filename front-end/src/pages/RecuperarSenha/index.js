import React, { useState } from "react";
import Navbar from "../../components/NavBar";
import Footer from "../../components/Footer";
import { useNavigate } from 'react-router-dom';
import "./RecuperarSenha.css";

const ForgotPassword = () => {
    const [step, setStep] = useState(1); // Estado para controlar o passo atual
    const [email, setEmail] = useState("");
    const [code, setCode] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleSendEmail = () => {
        if (!email) {
            alert("Por favor, insira um e-mail válido!");
            return;
        }
        // Simula envio de e-mail
        alert(`E-mail de recuperação enviado para ${email}`);
        setStep(2); // Avança para o próximo passo
    };

    const handleResetPassword = () => {
        if (!code || !newPassword || !confirmPassword) {
            alert("Por favor, preencha todos os campos!");
            return;
        }
        if (newPassword !== confirmPassword) {
            alert("As senhas não coincidem!");
            return;
        }
        // Simula redefinição de senha
        alert("Senha redefinida com sucesso!");
    };

    return (
        <div>
            <Navbar />
            <div className="forgot-password-container">
                <h2>Esqueceu a senha? Sem problema!</h2>

                {step === 1 && (
                    <div className="forgot-password-card">
                        <p>Encaminharemos um código de confirmação para seu e-mail!</p>
                        <label htmlFor="email">E-mail</label>
                        <input
                            type="email"
                            id="email"
                            placeholder="Digite seu e-mail"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <button className="forgot-password-button" onClick={handleSendEmail}>
                            Enviar
                        </button>
                    </div>
                )}

                {step === 2 && (
                    <div className="forgot-password-card">
                        <p>Coloque o código de validação e a sua senha de escolha.</p>
                        <label htmlFor="code">Código</label>
                        <input
                            type="text"
                            id="code"
                            placeholder="Digite o código de validação"
                            value={code}
                            onChange={(e) => setCode(e.target.value)}
                        />
                        <label htmlFor="newPassword">Nova senha</label>
                        <input
                            type="password"
                            id="newPassword"
                            placeholder="Digite sua nova senha"
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                        />
                        <label htmlFor="confirmPassword">Confirmar senha</label>
                        <input
                            type="password"
                            id="confirmPassword"
                            placeholder="Confirme sua nova senha"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                        <button className="forgot-password-button" onClick={handleResetPassword}>
                            Enviar
                        </button>
                    </div>
                )}
            </div>
            <Footer />
        </div>
    );
};

export default ForgotPassword;
