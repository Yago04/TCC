import React from 'react';
import './Parceiros.css';

const Parcerias = [
    { id: 1, img: "https://cdn.pixabay.com/photo/2016/03/17/07/02/starbucks-1262392_1280.jpg" },
    { id: 2, img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/McDonald%27s_logo.svg/2560px-McDonald%27s_logo.svg.png" },
    { id: 3, img: "https://media-cdn.tripadvisor.com/media/photo-s/26/b8/09/8f/kfc-logo.jpg" },
    { id: 4, img: "https://gsobmidia.com.br/uploads/lojas/687/dominos_1602250925.jpg" },
];

const Parceiros = () => {
    return (
        <div>
            <div className="titulo-Parceiro">
                <h1>Parceiros</h1>
            </div>
            <div className="Container-Parceiros">
                {Parcerias.map(parceria => (
                    <div key={parceria.id} className="Parceiro">
                        <img src={parceria.img} alt={`Parceiro ${parceria.id}`} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Parceiros;
