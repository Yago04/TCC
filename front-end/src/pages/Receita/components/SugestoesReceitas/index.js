import "./sugestoes.css"

import Pizza from "../../../../assets/img/pizza-carousel.jpg"
import Sushi from "../../../../assets/img/sushi-carousel.jpg"
import Salgado from "../../../../assets/img/salgados-carousel.jpg"

const Sugestoes = () => {

    const ReceitaSugestao = ({foto, nomeReceita, criador}) => (
        <div className="receita-sugestao">
            <img src={foto} alt="foto-receita"/>
            <p>{nomeReceita}</p>
            <span>By {criador}</span>
        </div>
    );


    return (
        <div className="main-sugestoes">
            <div className="topo-sugestoes">
                <h4>Você também pode gostar</h4>
                
                <a href="/">Veja outras Receitas</a>
            </div>
            <div className="receitas-sugestivas">
                <ReceitaSugestao foto={Pizza} nomeReceita={'Pizza'} criador={'Yaguera'}/>
                <ReceitaSugestao foto={Sushi} nomeReceita={'Sushi'} criador={'Yaguera'}/>
                <ReceitaSugestao foto={Salgado} nomeReceita={'Salgado'} criador={'Yaguera'}/>
            </div>
        </div>
    )
}

export default Sugestoes;