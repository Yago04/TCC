import React from "react";

const Recipes = () => {
  const recipes = [
    {
      id: 1,
      title: "Torta de Frutas",
      description: "Deliciosa torta com frutas frescas.",
      image: "https://img.freepik.com/fotos-gratis/torta-de-morango-com-creme_2829-8601.jpg?t=st=1732117272~exp=1732120872~hmac=582601366b63fa2c88c6c5129eab7b21036df594998330dfe3f0e05765121dc8&w=1380",
    },
    {
      id: 2,
      title: "Bolo de Chocolate",
      description: "Bolo cremoso com muito chocolate.",
      image: "https://img.freepik.com/fotos-gratis/clode-acima-vista-de-camarao-frito-com-limao-em-cima-da-mesa_140725-11374.jpg?t=st=1732117180~exp=1732120780~hmac=baf36a40987088d7e12d5b24826f1c2395f29a51bf689e4862134713c3ab365e&w=740",
    },
    {
      id: 3,
      title: "Bolo de Chocolate",
      description: "Bolo cremoso com muito chocolate.",
      image: "https://img.freepik.com/fotos-gratis/clode-acima-vista-de-camarao-frito-com-limao-em-cima-da-mesa_140725-11374.jpg?t=st=1732117180~exp=1732120780~hmac=baf36a40987088d7e12d5b24826f1c2395f29a51bf689e4862134713c3ab365e&w=740",
    },
    {
      id: 4,
      title: "Bolo de Chocolate",
      description: "Bolo cremoso com muito chocolate.",
      image: "https://img.freepik.com/fotos-gratis/clode-acima-vista-de-camarao-frito-com-limao-em-cima-da-mesa_140725-11374.jpg?t=st=1732117180~exp=1732120780~hmac=baf36a40987088d7e12d5b24826f1c2395f29a51bf689e4862134713c3ab365e&w=740",
    },
  ];

  // Objeto de estilos
  const styles = {
    container: {
      margin: "20px",
      padding: "20px",
      border: "1px solid #ddd",
      borderRadius: "10px",
      backgroundColor: "#fff",
    },
    list: {
      display: "flex",
      gap: "30px",
      flexWrap: "wrap",
    },
    card: {
      width: "350px",
      height: "350px",
      border: "1px solid #ddd",
      borderRadius: "10px",
      padding: "10px",
      textAlign: "center",
    },
    image: {
      width: "100%",
      height: "250px",
      objectFit: "cover",
      borderRadius: "5px",
    },
    title: {
      fontSize: "16px",
      fontWeight: "bold",
      margin: "10px 0",
    },
    description: {
      fontSize: "14px",
      color: "#555",
    },
  };

  return (
    <div style={styles.container}>
      <h3>Receitas</h3>
      <div style={styles.list}>
        {recipes.map((recipe) => (
          <div key={recipe.id} style={styles.card}>
            <img src={recipe.image} alt={recipe.title} style={styles.image} />
            <h4 style={styles.title}>{recipe.title}</h4>
            <p style={styles.description}>{recipe.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Recipes;
