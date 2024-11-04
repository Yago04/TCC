import React from "react";
import './Nutricionista.css'


const chefs = [
    { id: 1, name: "Sarah Johson", img: "https://img.freepik.com/fotos-gratis/cozinheiro-que-faz-ok-assina-sobre-fundo-branco_1368-2804.jpg?t=st=1729519991~exp=1729523591~hmac=5deb92d2d1bc7dcff986574f33f670a42f46d10d87b2ec4f7f02a37e6e1d766e&w=740", rating: 3 },
    { id: 2, name: "Johson Sarah", img: "https://img.freepik.com/psd-gratuitas/salientou-vestindo-chefe-uniforme_1154-373.jpg?t=st=1729520080~exp=1729523680~hmac=87efcbf256cd3e416acb31be961a6004ae4a955adf394cfd9418ab6f814d47be&w=740", rating: 5 },
    { id: 3, name: "Cleiton Robson", img: "https://img.freepik.com/fotos-gratis/chefe-fazendo-sinal-italiano_1368-10112.jpg?t=st=1729520138~exp=1729523738~hmac=b8ecd1f1ed753602988265d79704bfcee626f097aa16b86bfc3e17bd99904cb0&w=740", rating: 2 },
    { id: 4, name: "Robson Cleiton", img: "https://img.freepik.com/fotos-premium/um-chef-com-um-chapeu-branco-e-uma-barba-branca_1249303-8297.jpg?w=740", rating: 4 },
  ];

const Nutricionistas = () =>{

    return(
           <div className="chef-container">
      {chefs.map((chef) => (
        <div key={chef.id} className="chef-card">
          <div className="image-container">
            <img src={chef.img} alt={chef.name} className="chef-image" />
          </div>
          <div className="rating">
            {Array(chef.rating)
              .fill()
              .map((_, i) => (
                <span key={i} className="star">⭐</span>
              ))}
          </div>
          <h3 className="chef-name">{chef.name}</h3>
        </div>
      ))}
    </div>
    )
}

export default Nutricionistas