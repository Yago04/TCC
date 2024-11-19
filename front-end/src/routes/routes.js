import React from "react";
import { Route, Routes} from "react-router-dom";
import TelaCadastro from "../pages/TelaCadastro";
import TelaLogin from "../pages/TelaLogin";
import Home from "../pages/Home";
import Categorias from "../pages/Categoria";
import SobreNos from "../components/SobreNos";
import TextoReceita from "../components/TextoReceitas";
import MenuComidas from "../components/MenuComidas";
import Card from "../components/Card";
import TextoIngredientes from "../components/TextoIngredientes";
import CarouselComidas from "../components/CarouselComidas";
import TextoNoticia from "../components/TextoNoticia";  
import Artigos from "../components/Artigos";
import TextoNutricionista from "../components/NutricionistasRecomendados.txt";
import Nutricionistas from "../components/Nutricionistas";
import Parceiros from "../components/Parceiros";
import Navbar from "../components/NavBar";
import ResultadoPesquisa from "../pages/Categoria";
import Categoria from "../pages/RegistrarReceita";
import Favoritos from "../pages/Dashboard";






const RoutesPath = () => {
   return(
       <Routes>      
           <Route element = { <TelaCadastro/> }  path="/register" />
           <Route element = {<TelaLogin/>} path="/login"/>
           <Route element = {<Favoritos/>}  path=""/>
        
       </Routes>
   )
}

export default RoutesPath;