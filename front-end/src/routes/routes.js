import React from "react";
import { Route, Routes} from "react-router-dom";
import TelaCadastro from "../pages/TelaCadastro";
import TelaLogin from "../pages/TelaLogin";
import RecuperarSenha from "../pages/RecuperarSenha";
import Favoritos from "../pages/Favoritos";
import Dashboard from "../pages/Dashboard";
import Receita from "../pages/RegistrarReceita";
import Configuracao from "../pages/Configuracao";
import Planejamento from "../pages/planejamento";
import Perfil from "../pages/Menu/app";
import Home from "../pages/Home";
<<<<<<< HEAD
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
import Receita from "../pages/Receita";

=======
>>>>>>> 1ca51c5315b9fd94f11729b67c4cd08e029b4962





const RoutesPath = () => {
   return(
       <Routes>      
           <Route element = { <TelaCadastro/> }  path="/register"/>
           <Route element = {<TelaLogin/>} path="/login"/>
<<<<<<< HEAD
           <Route element = {<ResultadoPesquisa/>}  path=""/>
           <Route element = {<Receita/>} path="/recipe" />

=======
           <Route element = {<RecuperarSenha/>} path="/senha"/>
           <Route element = {<Favoritos/>} path="/favoritos"/>
           <Route element = {<Dashboard/>} path="/dashboard"/>
           <Route element = {<Receita/>} path="/receita"/>
           <Route element = {<Configuracao/>} path="/configuracao"/>
           <Route element = {<Planejamento/>} path="/planejamento"/>
           <Route element = {<Perfil/>} path="/perfil"/>
           <Route element = {<Home/>} path=""/>
          
        
>>>>>>> 1ca51c5315b9fd94f11729b67c4cd08e029b4962
       </Routes>
   )
}

export default RoutesPath;