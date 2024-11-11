import React, { useState } from 'react';
import './RegistrarNoticia.css';
import Footer from '../../components/Footer'

function NewsRegistration() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [categories, setCategories] = useState([]);
  const [newCategory, setNewCategory] = useState('');
  const [photo, setPhoto] = useState(null);
  const [preview, setPreview] = useState(null);

  const addCategory = () => {
    if (newCategory && !categories.includes(newCategory)) {
      setCategories([...categories, newCategory]);
      setNewCategory('');
    }
  };

  const removeCategory = (categoryToRemove) => {
    setCategories(categories.filter((cat) => cat !== categoryToRemove));
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPhoto(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleSave = () => {
    console.log({ title, description, categories, photo });
    setTitle('');
    setDescription('');
    setCategories([]);
    setPhoto(null);
    setPreview(null);
  };

  const handleCancel = () => {
    setTitle('');
    setDescription('');
    setCategories([]);
    setPhoto(null);
    setPreview(null);
  };

  return (
    <div className="news-registration">
      <h2>Registrar Notícia</h2>
      <hr className="custom-line" />
      

      <div>
        <input
          type="text"
          placeholder="Título da notícia"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>

      <div>
        <textarea
          placeholder="Descrição da notícia"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>

      <div>
        <label>Categorias</label>
        <hr className="custom-line" />
    
        <div className="categories">
          {categories.map((category, index) => (
            <span key={index} className="category-tag">
              {category} <button onClick={() => removeCategory(category)}>x</button>
            </span>
          ))}
        </div>
        <input
          type="text"
          placeholder="Ex: Alimentação Saudável"
          value={newCategory}
          onChange={(e) => setNewCategory(e.target.value)}
        />
        <button onClick={addCategory} className="add-category-btn">Adicionar Categoria</button>
      </div>

      <div style={{ marginTop: '20px' }}>
        <div>
          {preview ? (
            <img src={preview} alt="preview" className="photo-preview" />
          ) : (
            <div className="photo-placeholder">?</div>
          )}
        </div>
        <input type="file" onChange={handlePhotoChange} />
      </div>

      <div className="action-buttons">
        <h3>Salvar a Notícia</h3>
        <p>Ao clicar em salvar, você concorda com o nosso <a href="#">termo de serviço</a>.</p>
        <button onClick={handleCancel} className="cancel-btn">Cancelar</button>
        <button onClick={handleSave} className="save-btn">Salvar</button>
      </div>
     

    </div>
  );
}

export default NewsRegistration;
