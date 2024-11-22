import React from "react";
import './CampoPesquisa.css'

const CampoPesquisa = () => {
    return (
        <div className="Container-Pesquisa">

            <div className="Titulo_pesquisa">
                <hr className="custom-line" />
                <h1 className="title">Resultado da pesquisa por</h1>
                <input className="Campo-Resultado" type="Text" placeholder="Banana" ></input>

                <div className="Container-buttons">   
                    <button disabled>200 Receitas</button>
                    <button disabled>500 Postagens</button>
                </div>

                <hr className="custom-line" />
            </div>
        </div>
    )
}

export default CampoPesquisa

