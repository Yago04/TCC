import React, { useState } from 'react';
import './Ingrediente.css';

const Ingredientes = () => {
    const [ingredients, setIngredients] = useState([
        { id: 1, name: '', quantity: '' }
    ]);

    const addIngredient = () => {
        setIngredients([...ingredients, { id: Date.now(), name: '', quantity: '' }]);
    };

    const removeIngredient = (id) => {
        setIngredients(ingredients.filter(ingredient => ingredient.id !== id));
    };

    const handleInputChange = (index, event) => {
        const values = [...ingredients];
        values[index][event.target.name] = event.target.value;
        setIngredients(values);
    };

    return (
        <div className='Container-Ingrediente'>
            
                <h2 style={{ fontWeight: 'bold' }}>Ingrediente</h2>
                <hr className="custom-minor-line" />

            <div className='Container-button'>
                <div className="ingredient-list">
                    {ingredients.map((ingredient, index) => (
                        <div key={ingredient.id} className="ingredient-item">
                            <input
                                type="text"
                                name="quantity"
                                value={ingredient.quantity}
                                onChange={(event) => handleInputChange(index, event)}
                                placeholder="Quantidade"
                            />
                            <input
                                type="text"
                                name="name"
                                value={ingredient.name}
                                onChange={(event) => handleInputChange(index, event)}
                                placeholder="Ingrediente"
                            />
                            <button onClick={() => removeIngredient(ingredient.id)} style={{ borderRadius: "5px" }}>X</button>
                        </div>
                    ))}
                <button className="add-ingredient-button" onClick={addIngredient}>
                    + 
                </button>
                </div>
            </div>
        </div>
    );
}

export default Ingredientes;
