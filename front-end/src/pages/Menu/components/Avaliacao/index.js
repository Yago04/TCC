import React from "react";
import "./Avaliacao.css";

const Reviews = () => {
  const reviews = [
    {
      id: 1,
      userImage: "https://via.placeholder.com/50",
      stars: 5,
      description:
        "Receita incrível! A combinação de sabores é perfeita. Recomendo para quem busca algo prático e delicioso.",
    },
    {
      id: 2,
      userImage: "https://via.placeholder.com/50",
      stars: 4,
      description:
        "Muito bom! Só precisei ajustar o tempo de forno para o meu equipamento. Mesmo assim, ficou ótimo!",
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
    <div className="reviews-container">
      <h3>Avaliações</h3>
      <div className="reviews-list">
        {reviews.map((review) => (
          <div key={review.id} className="review-card">
            <div className="review-header">
              <img
                src={review.userImage}
                alt="Avatar do usuário"
                className="review-avatar"
              />
              {renderStars(review.stars)}
            </div>
            <p className="review-description">{review.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
