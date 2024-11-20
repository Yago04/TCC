import React from "react";
import "./Seguindo.css"; // Arquivo de estilos

const Following = () => {
  const following = [
    { id: 1, name: "@ChefMaria", image: "https://img.freepik.com/fotos-gratis/cozinheira-de-meia-idade-com-uniforme-de-chef-segurando-a-frigideira-e-a-tampa-na-parede-rosa-isolada-com-espaco-de-copia_141793-36538.jpg?t=st=1732119849~exp=1732123449~hmac=aa0bd47a9dc69619da1a046bc37c9ae15d30662f453722ce18c5256ed43737d3&w=1380" },
    { id: 2, name: "@BakerJohn", image: "https://img.freepik.com/fotos-gratis/cozinheiro-feliz-colocando-espinafre-no-prato-com-salada_23-2148040247.jpg?t=st=1732119927~exp=1732123527~hmac=827d348a63e1f62dfd5e549009b3be038ec122030271aac2d538e3a6168034e3&w=826" },
    { id: 3, name: "@PastryQueen", image: "https://img.freepik.com/fotos-gratis/jovem-cozinheira-satisfeita-vestindo-uniforme-de-chef-segurando-e-cruzando-a-frigideira-com-tampa-na-parede-rosa-isolada-com-espaco-de-copia_141793-36958.jpg?t=st=1732119867~exp=1732123467~hmac=f945d508e9637eead779445e6301bdbdfd5ed05cd37f37d89cfa1c77752b5b18&w=1380" },
  ];

  return (
    <div className="following-container">
      <h3>Seguindo</h3>
      <div className="following-list">
        {following.map((person) => (
          <div key={person.id} className="following-card">
            <img
              src={person.image}
              alt={person.name}
              className="following-image"
            />
            <p className="following-name">{person.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Following;
