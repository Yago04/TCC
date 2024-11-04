import React from "react";
import './Categoria.css';
import Navbar from "../../components/NavBar";
import CampoPesquisa from "./components/Campo_Pesquisa";
import Filtro from "./components/Filtro";

const Categorias = () =>{
    return(
        <div>
            <Navbar/> 
        <div>
            <CampoPesquisa/>
        </div>
            <Filtro/>
        </div>
    )
}

export default  Categorias 