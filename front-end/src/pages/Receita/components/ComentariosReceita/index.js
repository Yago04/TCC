import "./comentariosReceita.css";

import Avatar from "../../../../assets/icons/user.png";
import Like from "../../../../assets/icons/coracao.png";

const ComentariosReceita = () => {
  const Comentario = ({ foto, nome, comentarioFeito, likes }) => (
    <div className="comentario">
      <div className="avatar-comentario">
        <img src={foto} alt="avatar" />
        <a href="/">{nome}</a>
      </div>

      <div className="comentario-texto">
        <p>{comentarioFeito}</p>
      </div>

      <div className="comentario-reacao">
        <button>Responder</button>
        <img src={Like} alt="likes" />
        <span>{likes}</span>
      </div>
    </div>
  );

  return (
    <div className="main-comentarios-receita">
      <div className="topo-comentarios">
        <h1>COMENTÁRIOS</h1>
      </div>
      <div className="criar-comentario">
        <img src={Avatar} alt="avatar" />
        <input type="text" placeholder="Faça um comentário" />
        <button>ENVIAR</button>
      </div>
      <div className="comentarios">
        <Comentario foto={Avatar} nome={"Yago"} comentarioFeito={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}
        likes={"3"}
        />
        <Comentario foto={Avatar} nome={"Matheus"} comentarioFeito={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}
        likes={"5"}
        />
        <Comentario foto={Avatar} nome={"Warlison"} comentarioFeito={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}
        likes={"8"}
        />
       
      </div>
    </div>
  );
};

export default ComentariosReceita;
