import "./TopoReceita.css";
import ReceitaEspecifica from "../ReceitaUso";
import Separator from "../../../../components/Separator";

import Avatar from "../../../../assets/icons/user.png";
import Save from "../../../../assets/icons/save.png";
import Download from "../../../../assets/icons/download.png";
import Print from "../../../../assets/icons/impressora.png";
import Share from "../../../../assets/icons/compartilhar.png";
import Cam from "../../../../assets/icons/fotografar.png";
import Clock from "../../../../assets/icons/relogio.png";
import Apple from "../../../../assets/icons/maca.png";
import People from "../../../../assets/icons/pessoas.png";
import Ingredients from "../../../../assets/icons/relogio.png";
import Tags from "../TagsReceita";

const TopoReceita = () => {
  function Avaliacao({ rating }) {
    const totalEstrelas = 5;
    const estrelas = "⭐".repeat(rating) + "★".repeat(totalEstrelas - rating);

    return <span>{estrelas}</span>;
  }

  const BtnAcao = ({ icon }) => (
    <button className="btn-acao">
      <img src={icon} alt="Ícone" />
    </button>
  );

  const BtnFoto = ({ icon }) => (
    <button className="btn-foto">
      <img src={icon} alt="Ícone" />
      <span>FIZ A RECEITA</span>
    </button>
  );

  return (
    <div className="main-topo-receita">
      <div className="topo-receita">
        <h3>{ReceitaEspecifica.title}</h3>
        <div className="rating-receita">
          <Avaliacao rating={ReceitaEspecifica.rating} />
        </div>
      </div>
      <Separator />
      <div className="desc-receita">
        <div className="criador-receita">
          <img src={Avatar} alt="avatar" />
          <h5>Criado por {ReceitaEspecifica.creator}</h5>
        </div>
        <p>"{ReceitaEspecifica.description}"</p>
      </div>
      <div className="botoes-acao">
        <BtnAcao icon={Save} />
        <BtnAcao icon={Download} />
        <BtnAcao icon={Print} />
        <BtnAcao icon={Share} />
        <BtnFoto icon={Cam} />
      </div>
      <div className="infos-receita">
        <div className="divisor-info-receita">
          <div className="info-receita">
            <img src={Clock} alt="relogio" />
            <p>
              Pronto em: <b>{ReceitaEspecifica.time} minutos</b>
            </p>
          </div>
          <div className="info-receita">
            <img src={Apple} alt="maca" />
            <a href="/">Tabela nutricional</a>
          </div>
        </div>
        <div className="divisor-info-receita">
          <div className="info-receita1">
            <img src={People} alt="pessoas" />
            <p>
              Serve: <b>{ReceitaEspecifica.serve} pessoas</b>
            </p>
          </div>
          <div className="info-receita1">
            <img src={Ingredients} alt="pessoas" />
            <p>
              Ingredientes: <b>{ReceitaEspecifica.numIngredients}</b>
            </p>
          </div>
        </div>
      </div>
      <Tags />
      <div className="fotos-receita">
        <div className="foto-receita">
          <img src={ReceitaEspecifica.image} alt="foto"/>
        </div>
      </div>
    </div>
  );
};

export default TopoReceita;
