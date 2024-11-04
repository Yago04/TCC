import Navbar from '../../components/NavBar'
import './TelaLogin.css'

const TelaLogin = () => {
    return (

        <div>
            <header><Navbar /></header>
            <div className='container-principal'>
                <div className='container'>
                    <div className='titulo'>
                        <h1>login</h1>
                    </div>
                    <div className='container-login'>
                        <div className='email'>
                            <label>Email</label>
                            <input placeholder='email@exemplo.com'></input>
                        </div>
                        
                        <div className='senha'>  
                            <label>Passoword</label><br/>
                            <input placeholder='********'></input>

                            
                    <button>LOGIN</button>
                        </div>
                    </div>
                  
                </div>
            </div>

        </div>

    )
}

export default TelaLogin