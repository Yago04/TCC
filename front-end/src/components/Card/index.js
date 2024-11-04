import React from "react";
import './CardComida.css';

const CardComida = ({ receita }) => {
  return (
    <div className="card">
      <div className="card-image">
        <img src={receita.imagem} alt={receita.titulo} />
      </div>
      <div className="category">{receita.titulo}</div>

      <div className="rating">
        {Array(5).fill().map((_, i) => (
          <React.Fragment key={i}>
            <input
              value={5 - i}
              name={`rate-${receita.id}`}
              id={`star-${receita.id}-${5 - i}`}
              type="radio"
              checked={receita.rating === 5 - i}
              readOnly
            />
            <label htmlFor={`star-${receita.id}-${5 - i}`} />
          </React.Fragment>
        ))}
      </div>

      <button className="button-receita">Ver Receita</button>
    </div>
  );
};

const ListaReceitas = () => {
  const receitas = [
    {
      id: 1,
      titulo: "Torta de banana",
      imagem: "https://cdn.pixabay.com/photo/2023/07/20/11/00/pie-8139063_1280.jpg",
      rating: 5,
    },
    {
      id: 2,
      titulo: "Bolo de Chocolate",
      imagem: "https://cdn.pixabay.com/photo/2019/09/02/06/22/chocolate-cake-4446608_1280.jpg",
      rating: 2,
    },
    {
      id: 3,
      titulo: "Salada Fitness",
      imagem: "https://cdn.pixabay.com/photo/2017/09/16/19/21/salad-2756467_1280.jpg",
      rating: 4,
    },
    {
      id: 4,
      titulo: "Carne de porco",
      imagem: "https://cdn.pixabay.com/photo/2022/08/27/14/08/mix-grill-7414547_1280.jpg",
      rating: 4,
    },
    {
      id: 5,
      titulo: "Tábua de Frios",
      imagem: "https://cdn.pixabay.com/photo/2015/02/28/18/09/wurstplatte-653879_1280.jpg ",
      rating: 3,
    },
    {
      id: 6,
      titulo: "Cozumel",
      imagem: "https://cdn.pixabay.com/photo/2017/07/02/15/17/happy-hour-2464683_1280.jpg",
      rating: 1,
    },
    {
      id: 7,
      titulo: "Sanduíche Vegano",
      imagem: "https://cdn.pixabay.com/photo/2022/02/12/21/22/toast-7009956_1280.jpg",
      rating: 2,
    },
    {
      id: 8,
      titulo: "Panqueca",
      imagem: "https://cdn.pixabay.com/photo/2016/11/29/12/15/berries-1869421_1280.jpg",
      rating: 3,
    },
  
    // Adicione mais receitas aqui
  ];

  return (
    <div className="catalogo">
      {receitas.map((receita) => (
        <CardComida key={receita.id} receita={receita} />
      ))}
    </div>
  );
};

export default ListaReceitas;
