import React from 'react';
import './CaixaArtigo.css'; 

const articles = [
  { imageUrl: "https://cdn.pixabay.com/photo/2017/08/12/18/59/snack-2635035_1280.jpg",date: "Setembro 14, 2024" ,title: "Personalização de Refeições: A Revolução na Alimentação Saudável", subtitle:"Descubra como a personalização de receitas está mudando a forma como abordamos a alimentação saudável. Nossa plataforma permite criar refeições adaptadas ao seu gosto e necessidades nutricionais, trazendo mais sabor e equilíbrio para o seu dia a dia."  },
  { imageUrl: "https://cdn.pixabay.com/photo/2016/11/20/09/06/bowl-1842294_1280.jpg", title: "Economia e Nutrição: Receitas Acessíveis para Todos", date: "Setembro 25, 2024" },
  { imageUrl: "https://cdn.pixabay.com/photo/2019/09/26/18/23/republic-of-korea-4506696_1280.jpg", title: "Acelerando o Tempo de Preparação: Uma Cozinha Eficiente", date: "Setembro 16, 2024" },
  { imageUrl: "https://cdn.pixabay.com/photo/2014/09/15/23/35/soap-447658_960_720.jpg", title: "A Nova Era da Cozinha Personalizada", date: "Agosto 15, 2024" },
  { imageUrl: "https://cdn.pixabay.com/photo/2017/12/05/20/09/pizza-3000274_1280.jpg", title: "A Nova Era da Cozinha Personalizada", date: "Agosto 15, 2024" }
];

const Artigos = () => {
  return (
    <div className="articles-container">
      {/* Título principal */}
      <div className="articles-grid">
        {/* Primeira notícia maior */}
        <div className="main-article">
          <div className="card-principal">
            <img src={articles[0].imageUrl} className="card-img-top" alt="Notícia principal" />
            <div className="card-body">
              <p className="card-text">{articles[0].date}</p>
              <h5 className="card-title">{articles[0].title}</h5>
              <p className="card-text"> {articles[0].subtitle}</p>
            </div>
          </div>
        </div>
        
        {/* Outras notícias menores (3 cards lado a lado) */}
        <div className="small-articles">
          {articles.slice(1).map((article, index) => (
            <div className="small-article" key={index}>
              <div className="card">
                <img src={article.imageUrl} className="card-img-top" alt={`Notícia ${index + 1}`} />
                <div className="card-body">
                  <h5 className="card-title">{article.title}</h5>
                  <p className="card-text">{article.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Artigos;
