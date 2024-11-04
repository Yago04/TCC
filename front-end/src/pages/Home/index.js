import Navbar from '../../components/NavBar';
import './Home.css';
import '../../components/NavBar';
import Carousel from '../../components/Carousel';
import MenuIten from '../../components/MenuItens';
import SobreNos from '../../components/SobreNos';
import TextoReceitas from '../../components/TextoReceitas';
import MenuComidas from '../../components/MenuComidas';
import ListaReceitas from '../../components/Card';
import TextoIngredientes from '../../components/TextoIngredientes';
import Responsive from '../../components/CarouselComidas';
import TextoNoticia from '../../components/TextoNoticia';
import TextoNutricionista from '../../components/NutricionistasRecomendados.txt';
import Artigos from '../../components/Artigos';
import Nutricionistas from '../../components/Nutricionistas';
import Parceiros from '../../components/Parceiros';
import Footer from '../../components/Footer';




const HOME = () => {
  return (
    <div className='cadastro-principal'>
      <div className='caixa_cadastro'>
        <Navbar />
      </div>
      <div>
        <Carousel />
      </div>
      <div>
        <MenuIten />
      </div>
      <div>
        < SobreNos/>
      </div>
      <div>
        <TextoReceitas/>
      </div>
      <div>
        <MenuComidas/>
      </div>
      <div>
        <ListaReceitas/>
      </div>
        <div>
          <TextoIngredientes/>
        </div>
        <div>
          <Responsive/>
        </div>
        <div>
          <TextoNoticia/>
        </div>
        <div>
          <Artigos/>
        </div>
        <div>
          <TextoNutricionista/>
        </div>
        <div>
          <Nutricionistas/>
        </div>
        <div>
          <Parceiros/>
        </div>
        <div>
          <Footer/>
        </div>
    </div>

  )
}

export default HOME