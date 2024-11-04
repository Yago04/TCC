import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from "../components/NavBar";
import TelaCadastro from "../pages/TelaCadastro";
import Home from "../pages/Home"
import TelaLogin from "../pages/TelaLogin";
import Footer from "../components/Footer";


const RoutesPath = () => {
   return(
<<<<<<< HEAD:nutrycheff/back-end/web-node/front-end/nutrycheff/src/routes/routes.js
       <Routes>
         
           <Route element = { <TelaCadastro/> }  path="/register" />
           <Route element = {<TelaLogin/>} path="/login"/>
           <Route element = {<Home/>}  path="/" />
       </Routes>
=======
    <Routes>
        <Route element = { <TelaCadastro/> }  path="/register" />
        <Route element = {<TelaLogin/>} path="/login"/>
        <Route element = { <Home/> }  path="/" />
    </Routes>
>>>>>>> 9bcba835a67b37d591a9a3faeecbf2c7ee3b09ab:nutrycheff/src/routes/routes.js
   )
}

export default RoutesPath;