import React, { useState } from "react";
import Activities from "../Atividades";
import Recipes from "../Receita";
import Reviews from "../Avaliacao";
import Following from "../Seguindo";
import Followers from "../Seguidores";
import "./Profile.css";

const Profile = () => {
    const [activeTab, setActiveTab] = useState("activities"); // Estado para a aba ativa

    const renderTab = () => {
        switch (activeTab) {
            case "activities":
                return <Activities />;
            case "recipes":
                return <Recipes />;
            case "reviews":
                return <Reviews />;
            case "following":
                return <Following />;
            case "followers":
                return <Followers />;
            default:
                return <Activities />;
        }
    };

    return (
        <div>
            <div className="Container-perfil"> 
                <hr className="custom-line" />
                <h5>Perfil</h5>

            </div>

            <div className="profile-container">
                <div className="profile-header">
                    <img
                        src="https://img.freepik.com/fotos-gratis/cozinheiro-feliz-colocando-espinafre-no-prato-com-salada_23-2148040247.jpg?t=st=1732119927~exp=1732123527~hmac=827d348a63e1f62dfd5e549009b3be038ec122030271aac2d538e3a6168034e3&w=826"
                        alt="Avatar do usuário"
                        className="profile-avatar"
                    />
                    <h2>@joaozito</h2>
                    <button className="button">
                        Seguir
                        </button>
                </div>

                <div className="profile-tabs">
                    <ul>
                        <li onClick={() => setActiveTab("activities")}>Atividades</li>
                        <li onClick={() => setActiveTab("recipes")}>Receitas</li>
                        <li onClick={() => setActiveTab("reviews")}>Avaliações</li>
                        <li onClick={() => setActiveTab("following")}>Seguindo</li>
                        <li onClick={() => setActiveTab("followers")}>Seguidores</li>
                    </ul>
                </div>

                <div className="profile-content">{renderTab()}</div>
            </div>
        </div>
    );
};

export default Profile;
