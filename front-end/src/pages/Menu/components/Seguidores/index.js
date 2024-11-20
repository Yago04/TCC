import React from "react";
import "./Seguidores.css";

const Followers = () => {
  const followers = [
    { id: 1, name: "@Clebão01", image: "https://img.freepik.com/fotos-gratis/foto-vertical-de-uma-feliz-mulher-de-pele-escura-com-cabelo-encaracolado_273609-15519.jpg?t=st=1732118525~exp=1732122125~hmac=96d1b17acbb019a3b67865de54b70af42a8232e80dec27509480bb05414f9fa4&w=826" },
    { id: 2, name: "@Cleitin23", image: "https://img.freepik.com/fotos-gratis/menina-latina-positiva-apresentando-novo-produto_1262-17503.jpg?t=st=1732118557~exp=1732122157~hmac=bcd19168b3c2a0efacfddf762421e62680f88eb054b6a09bccbe5a649c787e24&w=1380" },
    { id: 3, name: "@Jorge231", image: "https://img.freepik.com/fotos-gratis/aluno-feliz-com-penteado-afro-mostra-dentes-brancos-fica-de-bom-humor-depois-das-aulas_273609-16608.jpg?t=st=1732118579~exp=1732122179~hmac=9ed2b94e38ddef306736efbb0e0312106b8afdd2fac9c39d08a30ea967810310&w=1380"},
  ];

  return (
    <div className="followers-container">
      <h3>Seguidores</h3>
      <div className="followers-list">
        {followers.map((follower) => (
          <div key={follower.id} className="follower-card">
            <img
              src={follower.image}
              alt={follower.name}
              className="follower-image"
            />
            <p className="follower-name">{follower.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Followers;
