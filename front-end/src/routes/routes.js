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





const RoutesPath = () => {
   return(
       <Routes>      
           <Route element = { <TelaCadastro/> }  path="/register"/>
           <Route element = {<TelaLogin/>} path="/login"/>
           <Route element = {<RecuperarSenha/>} path="/senha"/>
           <Route element = {<Favoritos/>} path="/favoritos"/>
           <Route element = {<Dashboard/>} path="/dashboard"/>
           <Route element = {<Receita/>} path="/receita"/>
           <Route element = {<Configuracao/>} path="/configuracao"/>
           <Route element = {<Planejamento/>} path="/planejamento"/>
           <Route element = {<Perfil/>} path="/perfil"/>
           <Route element = {<Home/>} path=""/>
          
        
       </Routes>
   )
}

export default RoutesPath;