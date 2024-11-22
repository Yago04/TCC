import React, { useState } from "react";
import "./PassoaPasso.css";

const PassoaPasso = () => {
  const [passos, setPassos] = useState([
    { id: 1, texto: '' },
   
  ]);

  const adicionarPasso = () => {
    setPassos([
      ...passos,
      { id: passos.length + 1, texto: '' }
    ]);
  };

  const atualizarTexto = (id, novoTexto) => {
    setPassos(
      passos.map(passo => 
        passo.id === id ? { ...passo, texto: novoTexto } : passo
      )
    );
  };

  const excluirPasso = (id) => {
    setPassos(passos.filter(passo => passo.id !== id));
  };

  return (
    <div>
      <div className="Container-PassoaPasso">
        <h2 style={{ fontWeight: 'bold' }}>Passo a Passo</h2>
        <hr className="custom-minor-line"/>
      </div>

      {passos.map(passo => (
        <div key={passo.id} className="passo">
          <span>{passo.id}.</span>
          <textarea
            className="passo-textarea"
            value={passo.texto}
            onChange={(e) => atualizarTexto(passo.id, e.target.value)}
            placeholder="Descreva o passo aqui"
          />
          <button
            className="excluir-passo"
            onClick={() => excluirPasso(passo.id)}
          >
            x
      </button>
      <button className="adicionar-passo" onClick={adicionarPasso}>
        +
          </button>
        </div>
      ))}

    </div>
  );
};

export default PassoaPasso;
