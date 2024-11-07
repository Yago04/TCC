import React, { useState } from "react";
import Select from 'react-select';
import './Categoria.css';

const SearchableComponent = () => {
    const [selectedItems, setSelectedItems] = useState([

    ]);
    const [preparo, setPreparo] = useState('');
    const [cozimento, setCozimento] = useState('');
    const [serve, setServe] = useState('');
    const [porcoes, setPorcoes] = useState('');
    const [foto, setFoto] = useState(null);

    const options = [
        { value: 1, label: 'Mexicana' },
        { value: 2, label: 'Sem glúten' },
        { value: 3, label: 'Sem Lactose' },
        { value: 4, label: 'Vegana' },
        { value: 5, label: 'Italiana' },
        { value: 6, label: 'Picante' }
    ];

    const handleSelectChange = (selectedOptions) => {
        setSelectedItems(selectedOptions || []);
    };

    const handleFotoChange = (e) => {
        setFoto(URL.createObjectURL(e.target.files[0]));
    };

    return (
        <div className="Container-Categoria">
            <h2 style={{ fontWeight: 'bold' }}>Categorias</h2>
            <hr className="custom-minor-line"/>

            <Select
                isMulti
                options={options}
                value={selectedItems}
                onChange={handleSelectChange}
                placeholder="Ex: Picante, Vegana, Italiano..."
                className="select-categories"
                classNamePrefix="select"
            />

            <div className="Container-geral">
                <div className="Container-foto">
                    <input
                        type="file"
                        onChange={handleFotoChange}
                        style={{ display: 'none' }}
                        id="fotoInput"
                    />
                    <label htmlFor="fotoInput" className="foto-label">
                        {foto ? (
                            <img src={foto} alt="Preview" className="foto-preview" />
                        ) : (
                            <div>
                                <span className="foto-placeholder">?</span>
                                <p>Adicione Uma Foto</p>
                            </div>
                        )}
                    </label>
                </div>

                <div className="Container-inputs">
                    <label>Tempo de Preparo</label>
                    <div className="input-group">
                        <input
                            type="number"
                            value={preparo}
                            onChange={(e) => setPreparo(e.target.value)}
                            placeholder="Minutos"
                            className="time-input"
                        />
                        <select className="time-select">
                            <option>Minutos</option>
                            <option>Horas</option>
                        </select>
                    </div>

                    <label>Tempo de Cozimento</label>
                    <div className="input-group">
                        <input
                            type="number"
                            value={cozimento}
                            onChange={(e) => setCozimento(e.target.value)}
                            placeholder="Minutos"
                            className="time-input"
                        />
                        <select className="time-select">
                            <option>Minutos</option>
                            <option>Horas</option>
                        </select>
                    </div>
                    <div>

                        <div className="inputs-rows">
                            <div>
                                <label >Serve</label>
                                <br/>
                                <input
                                    type="number"
                                    value={serve}
                                    onChange={(e) => setServe(e.target.value)}
                                    className="small-input"
                                />
                            </div>
                            <div className="input-porcao">
                                <label>Porções</label>
                                <br/>
                                <input
                                    type="number"
                                    value={porcoes}
                                    onChange={(e) => setPorcoes(e.target.value)}
                                    className="small-input"
                                />
                                <input
                                    type="number"
                                    value={porcoes}
                                    onChange={(e) => setPorcoes(e.target.value)}
                                    className="small-input"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SearchableComponent;
