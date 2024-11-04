import './CardsComidas.css';
import Pizza from '../../assets/img/pizza-carousel.jpg';
import Churrasco from '../../assets/img/churrasco-carousel.jpg';
import Burger from '../../assets/img/burger-carousel.jpg';
import Bombom from '../../assets/img/bombom-carousel.jpg';
import Drinks from '../../assets/img/drinks-carousel.jpg';
import Sushi from '../../assets/img/sushi-carousel.jpg';
import Salgados from '../../assets/img/salgados-carousel.jpg';

const CardsComidas = ({name}) => {

    const renderImg = () => {
        switch (name){
            case 'Pizza':
                return <img src={Pizza} alt='img-comida'/>
            case 'Hamburguer':
                return <img src={Burger} alt='img-comida'/>
            case 'Churrasco':
                return <img src={Churrasco} alt='img-comida'/>
            case 'Sushi':
                return <img src={Sushi} alt='img-comida'/>
            case 'Bombom':
                return <img src={Bombom} alt='img-comida'/>
            case 'Drinks' :
                return <img src={Drinks} alt='img-comida'/>
            case 'Salgados':
                return <img src={Salgados} alt='img-comida'/>
            default:
                return null
        }
    }

    return(
        
        <div className='card-comida'>
            <div className='img-comida'>
                {renderImg()}
            </div>
            <h5>{name}</h5>
        </div>
    )
}

export default CardsComidas