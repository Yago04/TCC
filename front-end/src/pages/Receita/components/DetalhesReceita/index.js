import ReceitaEspecifica from "../ReceitaUso";
import "./detalhesReceita.css";

const DetalhesReceita = () => {
    return (
        <div className="main-detalhes-receita">
            <div className="passos-receita">
                <div className="topo-passos">
                    <h3>PASSO A PASSO</h3>
                </div>
               <ul>
                {ReceitaEspecifica.details.map((step, index) => 
                    <li key={index}>{step}</li>
                )}
               </ul>

            </div>
            <div className="ingredientes-receita">
                <div className="topo-ingredientes">
                    <h3>INGREDIENTES</h3>
                </div>
                <ul>
                    {ReceitaEspecifica.ingredients.map((step, index) => 
                        <li key={index}>{step}</li>
                    )}
                </ul>
            </div>
        </div>
    )
}

export default DetalhesReceita