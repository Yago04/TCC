import React from "react";
import './Categoria.css';
import Navbar from "../../components/NavBar";
import CampoPesquisa from "./components/Campo_Pesquisa";
import ResultadoPesquisa from "./components/ResultadoPesquisa";
import Receitas from "./components/ResultadoPesquisa/receitas";
import Filtro from "./components/Filtro";
import Footer from "../../components/Footer";


const Categorias = () => {
    return (
        <div>
            <Navbar />
            <div>
                <CampoPesquisa />
            </div>
            <Filtro />
            <div>
                <Receitas/>
            </div>
            <div>
                <Footer/>
            </div>
        </div>

    )
}

export default Categorias