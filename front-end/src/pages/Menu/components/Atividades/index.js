import React from "react";
import "./Atividades.css";

const Activities = () => {
  const activities = [
    {
        id: 1,
        userImage: "https://img.freepik.com/fotos-gratis/cozinheiro-feliz-colocando-espinafre-no-prato-com-salada_23-2148040247.jpg?t=st=1732119927~exp=1732123527~hmac=827d348a63e1f62dfd5e549009b3be038ec122030271aac2d538e3a6168034e3&w=826",
        stars: 4.5,
        description:
          "Essas estão deliciosas!!! Eu uso tortilhas de farinha maiores para o pessoal aqui. Também uso minha marinada caseira para fajitas e grelho o frango em vez de ferver, o que adiciona muito sabor. Além disso, coloco uma latinha de pimentões verdes, picados e uma colher de creme azedo na mistura.",
      },
      {
        id: 1,
        userImage: "https://img.freepik.com/fotos-gratis/cozinheiro-feliz-colocando-espinafre-no-prato-com-salada_23-2148040247.jpg?t=st=1732119927~exp=1732123527~hmac=827d348a63e1f62dfd5e549009b3be038ec122030271aac2d538e3a6168034e3&w=826",
        stars: 4.5,
        description:
          "Essas estão deliciosas!!! Eu uso tortilhas de farinha maiores para o pessoal aqui. Também uso minha marinada caseira para fajitas e grelho o frango em vez de ferver, o que adiciona muito sabor. Além disso, coloco uma latinha de pimentões verdes, picados e uma colher de creme azedo na mistura.",
      },
    ];

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;

    return (
      <div className="stars">
        {Array.from({ length: fullStars }).map((_, index) => (
          <span key={index}>&#9733;</span>
        ))}
        {halfStar && <span>&#9734;</span>}
      </div>
    );
  };

  return (
    <div className="activities-container">
      <h3>Atividades recentes</h3>
      <div className="activities-list">
        {activities.map((activity) => (
          <div key={activity.id} className="activity-card">
            <div className="activity-header">
              <img
                src={activity.userImage}
                alt="Avatar do usuário"
                className="activity-avatar"
              />
              {renderStars(activity.stars)}
            </div>
            <p className="activity-description">{activity.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Activities;
