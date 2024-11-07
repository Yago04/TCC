import React from "react";
import './AdicionarReceita.css';

const AdicionarReceita = () => {
    return (
        <div className="Container-flex">
            
            <div className="Container-Adcionar">
                <hr className="custom-line" />
                <h5>Adcionar Receita</h5>
            </div>
            <div className="Container-Receita">
                <input type="text" placeholder="Titulo da Receita"></input>
                <textarea placeholder="Descrição da Receita"/>
            </div>
        </div>
    )
}

export default AdicionarReceita