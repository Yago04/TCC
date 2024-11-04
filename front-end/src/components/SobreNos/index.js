import React from 'react'
import './SobreNos.css'




const SobreNos = () => {
    return (
        
        <div className="container-grid">
            <div className="main-image-grid">
                <img src="https://cdn.pixabay.com/photo/2024/08/20/13/12/ai-generated-8983262_1280.jpg" alt="Chef preparando comida" />
                <div className="side-images-grid">
                    <img src="https://cdn.pixabay.com/photo/2021/01/01/15/31/sushi-balls-5878892_1280.jpg" alt="Receita 1" />
                    <img src="https://cdn.pixabay.com/photo/2014/10/19/20/59/hamburger-494706_1280.jpg" alt="Receita 2" />
                </div>
            </div>
            <div className="text-content-grid">
                <h1>Profissionais <span className="highlight-grid">criam!</span> <br/> Você <span className="highlight-grid">personaliza!</span></h1>
                <p>
                    Receitas personalizadas, desenvolvidas por <br/> profissionais e feitas sob medida para você.
                </p>
                <ul className="benefits-list-grid">
                    <li><i className="bi bi-clock-history"></i> Receitas rápidas</li>
                    <li><i className="bi bi-cash-stack"></i> Adaptadas ao seu orçamento</li>
                    <li><i className="bi bi-basket3"></i> Sempre ao seu alcance</li>
                    <li><i className="bi bi-person"></i> Planejamentos Individuais</li>
                
                </ul>
           
                <button className="cta-button-grid">Sobre nós</button>
            </div>
        </div>

    );

}

export default SobreNos;