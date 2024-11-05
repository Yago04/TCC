import React from 'react';
import RecipeGrid from './index.js';

const ResultadoPesquisa = () => {
    const recipes = [
        { id: 1, title: "Torta de banana",description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis", image: "https://cdn.pixabay.com/photo/2023/07/20/11/00/pie-8139063_1280.jpg", rating: 5 },
        { id: 2, title: "Bolo de Chocolate", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis",image: "https://cdn.pixabay.com/photo/2019/09/02/06/22/chocolate-cake-4446608_1280.jpg", rating: 2 },
        { id: 3, title: "Salada Fitness",description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis", image: "https://cdn.pixabay.com/photo/2017/09/16/19/21/salad-2756467_1280.jpg", rating: 4 },
        { id: 4, title: "Salada Fitness", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis",image: "https://cdn.pixabay.com/photo/2017/09/16/19/21/salad-2756467_1280.jpg", rating: 4 },
        { id: 5, title: "Salada Fitness",description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis", image: "https://cdn.pixabay.com/photo/2017/09/16/19/21/salad-2756467_1280.jpg", rating: 4 },
        { id: 6, title: "Salada Fitness", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis",image: "https://cdn.pixabay.com/photo/2017/09/16/19/21/salad-2756467_1280.jpg", rating: 4 },
        { id: 7, title: "Salada Fitness", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis",image: "https://cdn.pixabay.com/photo/2017/09/16/19/21/salad-2756467_1280.jpg", rating: 4 },
        { id: 8, title: "Salada Fitness", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis",image: "https://cdn.pixabay.com/photo/2017/09/16/19/21/salad-2756467_1280.jpg", rating: 4 },
        { id: 9, title: "Salada Fitness",description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis", image: "https://cdn.pixabay.com/photo/2017/09/16/19/21/salad-2756467_1280.jpg",  rating: 4 },
        { id: 9, title: "Salada Fitness",description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis", image: "https://cdn.pixabay.com/photo/2017/09/16/19/21/salad-2756467_1280.jpg",  rating: 4 },
        // Outros objetos de receita
    ];
 

    return (
        <div>
            <RecipeGrid recipes={recipes} />
        </div>
    );
};

export default ResultadoPesquisa;
