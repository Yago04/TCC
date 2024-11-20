import React, { useState } from "react";
import './FaleConosco.css';
import Navbar from "../../components/NavBar";

const FaleConosco = () => {
    const [activeIndex, setActiveIndex] = useState(null); // Controla qual item está aberto

    const faqItems = [
        {
            question: "Como funciona a personalização das receitas?",
            answer: "Você pode personalizar receitas adicionando ou removendo ingredientes no editor de receitas.",
        },
        {
            question: "As receitas são desenvolvidas por profissionais?",
            answer: "Sim, todas as receitas são elaboradas por chefs profissionais que fazem parte da nossa equipe.",
        },
        {
            question: "Quanto custa usar a plataforma e como posso gerenciar meu orçamento?",
            answer: "A plataforma tem planos gratuitos e pagos. Você pode gerenciar seu orçamento na área de assinaturas.",
        },
        {
            question: "Como entro em contato com o suporte?",
            answer: "Você pode entrar em contato conosco pelo e-mail suporte@nutrychef.com ou pelo chat na plataforma.",
        },
        {
            question: "Quais são as políticas da empresa?",
            answer: "Nossas políticas estão disponíveis na página de Termos e Condições, acessível pelo rodapé do site.",
        },
        {
            question: "As receitas podem são de direito autoral minha?",
            answer: "Sim! Todas as receitas que você criar são de sua autoria, então caso não queira compartilhar, não tem problema!",
        },
    ];

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index); // Abre/fecha o item clicado
    };

    return (
        <div>
            <Navbar />
            <div className="faq-container">
                <h3 className="faq-title">FAQ</h3>
                <div className="faq-list">
                    {faqItems.map((item, index) => (
                        <div
                            key={index}
                            className={`faq-item ${activeIndex === index ? "active" : ""}`}
                        >
                            <div
                                className="faq-question"
                                onClick={() => toggleFAQ(index)}
                            >
                                {item.question}
                                <span className="faq-icon">
                                    {activeIndex === index ? "▲" : "▼"}
                                </span>
                            </div>
                            {activeIndex === index && (
                                <div className="faq-answer">{item.answer}</div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FaleConosco;
