import React, { useState } from 'react';
import './Filtro.css'; // Arquivo CSS para estilização adicional
import { Dropdown, Button, Badge } from 'react-bootstrap';

const FiltrosDeBusca = () => {
    // Estado para armazenar os valores selecionados
    const [filtros, setFiltros] = useState({
        tipoRefeicao: '',
        restricoes: '',
        ingredientes: '',
        metodoPreparo: '',
        velocidadePreparo: '',
        dificuldade: '',
        popularidade: '',
    });

    // Estado para armazenar as tags selecionadas
    const [tags, setTags] = useState([]);

    // Função para atualizar os filtros
    const handleFilterChange = (e) => {
        const { name, value } = e.target;
        setFiltros((prev) => ({ ...prev, [name]: value }));
        if (value) setTags((prev) => [...prev, value]); // Adiciona uma tag
    };

    // Função para limpar os filtros
    const limparFiltros = () => {
        setFiltros({
            tipoRefeicao: '',
            restricoes: '',
            ingredientes: '',
            metodoPreparo: '',
            velocidadePreparo: '',
            dificuldade: '',
            popularidade: '',
        });
        setTags([]); // Limpa as tags
    };

    return (
        <div className="filtros-container">
            <div className='container-filtro-topo'>

                <div className='Titulo-Pesquisa'>
                    <h4>Filtragem De Busca</h4>

                </div>
                    <div className='Filtro_Pesquisa'>
                        <h4>Ranqueado por:</h4>
                        <select name="tipoRefeicao" className="Select-Titulo" onChange={handleFilterChange} value={filtros.tipoRefeicao} >
                            <option value="">Relevância</option>

                        </select>
                    </div>

            </div>


            <div className="filtros-row">
                <select name="tipoRefeicao" onChange={handleFilterChange} className='Selects-Filtro' value={filtros.tipoRefeicao}>
                    <option value="">Tipo De Refeição</option>
                    <option value="Café da Manhã">Café da Manhã</option>
                    <option value="Almoço">Almoço</option>
                    <option value="Jantar">Jantar</option>
                </select>
                <select name="restricoes" onChange={handleFilterChange}  className='Selects-Filtro' value={filtros.restricoes}>
                    <option value="">Restrições</option>
                    <option value="Vegana">Vegana</option>
                    <option value="Sem Glúten">Sem Glúten</option>
                    <option value="Sem Lactose">Sem Lactose</option>
                </select>
                <select name="ingredientes" onChange={handleFilterChange} className='Selects-Filtro' value={filtros.ingredientes}>
                    <option value="">Ingredientes</option>
                    <option value="Banana">Banana</option>
                    <option value="Tomate">Tomate</option>
                    <option value="Queijo">Queijo</option>
                </select>
                <select name="metodoPreparo" onChange={handleFilterChange} className='Selects-Filtro'  value={filtros.metodoPreparo}>
                    <option value="">Método De Preparo</option>
                    <option value="Assado">Assado</option>
                    <option value="Frito">Frito</option>
                    <option value="Cozido">Cozido</option>
                </select>
                <select name="velocidadePreparo" onChange={handleFilterChange} className='Selects-Filtro'  value={filtros.velocidadePreparo}>
                    <option value="">Velocidade De Preparo</option>
                    <option value="Rápido">Rápido</option>
                    <option value="Médio">Médio</option>
                    <option value="Demorado">Demorado</option>
                </select>
                <select name="dificuldade" onChange={handleFilterChange} className='Selects-Filtro' value={filtros.dificuldade}>
                    <option value="">Dificuldade</option>
                    <option value="Fácil">Fácil</option>
                    <option value="Médio">Médio</option>
                    <option value="Difícil">Difícil</option>
                </select>
                <select name="popularidade" onChange={handleFilterChange} className='Selects-Filtro' value={filtros.popularidade}>
                    <option value="">Popularidade</option>
                    <option value="Mais Popular">Mais Popular</option>
                    <option value="Menos Popular">Menos Popular</option>
                </select>
                <select name="popularidade" onChange={handleFilterChange} className='Selects-Filtro' value={filtros.popularidade}>
                    <option value="">Procurar o que colocar</option>
                    <option value="Mais Popular">Mais Popular</option>
                    <option value="Menos Popular">Menos Popular</option>
                </select>
                <br />


            </div>

            <div className="tags-container">
                {tags.map((tag, index) => (
                    <Badge key={index} variant="secondary" className="tag">
                        {tag} <span onClick={() => setTags(tags.filter((t) => t !== tag))}>×</span>
                    </Badge>
                ))}
                {tags.length > 0 && (
                    <Button variant="link" onClick={limparFiltros} className='LinkFiltro'>
                        Limpar
                    </Button>
                )}
            </div>
            <hr className="custom-line" />
        </div>
    );
};

export default FiltrosDeBusca;
