import React from "react";
import "./RegistrarReceita.css";
import AdicionarReceita from "./components/AdcionarReceita";
import SearchableComponent from "./components/Categorias";
import Ingredientes from "./components/Ingredientes";
import PassoaPasso from "./components/PassoaPasso";

const RegistrarReceita = () => {
  const handleSalvar = () => {
    // Lógica para salvar a receita
    alert("Receita salva com sucesso!");
  };

  const handleCancelar = () => {
    // Lógica para cancelar a ação
    alert("Ação cancelada.");
  };

  return (
    <div>
      <AdicionarReceita />

      <div>
        <SearchableComponent />
      </div>
      <div>
        <Ingredientes />
      </div>
      <div>
        <PassoaPasso />
      </div>

      <div className="container-salvar-receita">
        <h2 style={{ fontWeight: 'bold' }}>SALVAR A RECEITA</h2>
        <p>
          Ao clicar em salvar, você concorda com nosso{" "}
          <a href="/termos-de-servico" target="_blank" rel="noopener noreferrer">
            termo de serviço
          </a>.
        </p>
        <div className="botoes-salvar-receita">
          <button className="botao-cancelar" onClick={handleCancelar}>
            CANCELAR
          </button>
          <button className="botao-salvar" onClick={handleSalvar}>
            SALVAR
          </button>
        </div>
      </div>
    </div>
  );
};

export default RegistrarReceita;
