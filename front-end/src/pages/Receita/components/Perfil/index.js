import "./perfil.css";

import Avatar from "../../../../assets/icons/user.png";

const PerfilReceita = () => {
  const nome = "Yago";
  const descricao =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
  const seguidores = '34';
  const receitas = '50';
  const seguindo = '34';

  return (
    <div className="principal-perfil">
      <div className="main-perfil">
        <img src={Avatar} alt="perfil" />
        <div className="acoes-perfil">
          <a href="/">{nome}</a>
          <button>Seguir</button>
        </div>
        <p>{descricao}</p>
      </div>
      <div className="seguidores-perfil">
        <p>{seguidores} Seguidores</p>
        <p>{receitas} Receita</p>
        <p>{seguindo} Seguindo</p>
      </div>
    </div>
  );
};

export default PerfilReceita;
