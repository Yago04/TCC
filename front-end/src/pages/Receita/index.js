import "./Receita.css";

import Navbar from "../../components/NavBar";
import ComentariosReceita from "./components/ComentariosReceita";
import DetalhesReceita from "./components/DetalhesReceita";
import TopoReceita from "./components/TopoReceita";
import Footer from "../../components/Footer";
import PerfilReceita from "./components/Perfil";
import Sugestoes from "./components/SugestoesReceitas";


const Receita = () => {
  return (
    <div>
      <Navbar />
      <div>
        <TopoReceita />
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <DetalhesReceita />
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <ComentariosReceita />
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <PerfilReceita />
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Sugestoes />
      </div>
      <Footer />
    </div>
  );
};

export default Receita;
