import React, { useState } from 'react';
import './Favoritos.css';
import RecipeGrid from '../Categoria/components/ResultadoPesquisa';
import  Navbar  from '../../components/NavBar';
import Footer from '../../components/Footer'


const Favoritos = () => {
    const [activeTab, setActiveTab] = useState('receitas');
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6;

    const receitas = [
        { id: 1, title: 'Torta de Toffee', description: 'Deliciosa torta com sabor de caramelo e cobertura cremosa.', rating: 4, image: 'https://img.freepik.com/fotos-gratis/bolo-de-chocolate_74190-5940.jpg?t=st=1731433847~exp=1731437447~hmac=45836bb8e2715c0aa3a1f76f6a5f794fd6058f0073069b7fb1b97b216f394d55&w=1060' },
        { id: 2, title: 'Bolo de Chocolate', description: 'Um bolo úmido e fofo com intenso sabor de chocolate.', rating: 5, image: 'https://img.freepik.com/fotos-gratis/bolo-de-chocolate_74190-5940.jpg?t=st=1731433847~exp=1731437447~hmac=45836bb8e2715c0aa3a1f76f6a5f794fd6058f0073069b7fb1b97b216f394d55&w=1060' },
        { id: 3, title: 'Empadão de Frango', description: 'Empadão recheado com frango desfiado e temperos especiais.', rating: 4, image: 'https://img.freepik.com/fotos-gratis/bolo-de-chocolate_74190-5940.jpg?t=st=1731433847~exp=1731437447~hmac=45836bb8e2715c0aa3a1f76f6a5f794fd6058f0073069b7fb1b97b216f394d55&w=1060' },
        { id: 4, title: 'Quiche de Espinafre', description: 'Quiche leve e saborosa com espinafre e queijo.', rating: 3, image: 'https://img.freepik.com/fotos-gratis/bolo-de-chocolate_74190-5940.jpg?t=st=1731433847~exp=1731437447~hmac=45836bb8e2715c0aa3a1f76f6a5f794fd6058f0073069b7fb1b97b216f394d55&w=1060' },
        { id: 5, title: 'Tarte de Limão', description: 'Tarte refrescante com sabor cítrico de limão.', rating: 4, image: 'https://img.freepik.com/fotos-gratis/bolo-de-chocolate_74190-5940.jpg?t=st=1731433847~exp=1731437447~hmac=45836bb8e2715c0aa3a1f76f6a5f794fd6058f0073069b7fb1b97b216f394d55&w=1060' },
        { id: 6, title: 'Cheesecake de Morango', description: 'Delicioso cheesecake com cobertura de morango.', rating: 5, image: 'https://img.freepik.com/fotos-gratis/bolo-de-chocolate_74190-5940.jpg?t=st=1731433847~exp=1731437447~hmac=45836bb8e2715c0aa3a1f76f6a5f794fd6058f0073069b7fb1b97b216f394d55&w=1060' },
        { id: 7, title: 'Bolo de Cenoura', description: 'Bolo caseiro com cobertura de chocolate.', rating: 4, image: 'https://img.freepik.com/fotos-gratis/bolo-de-chocolate_74190-5940.jpg?t=st=1731433847~exp=1731437447~hmac=45836bb8e2715c0aa3a1f76f6a5f794fd6058f0073069b7fb1b97b216f394d55&w=1060' },
        { id: 8, title: 'Tarte de Limão', description: 'Tarte refrescante com sabor cítrico de limão.', rating: 4, image: 'https://img.freepik.com/fotos-gratis/bolo-de-chocolate_74190-5940.jpg?t=st=1731433847~exp=1731437447~hmac=45836bb8e2715c0aa3a1f76f6a5f794fd6058f0073069b7fb1b97b216f394d55&w=1060' },
        { id: 9, title: 'Cheesecake de Morango', description: 'Delicioso cheesecake com cobertura de morango.', rating: 5, image: 'https://img.freepik.com/fotos-gratis/bolo-de-chocolate_74190-5940.jpg?t=st=1731433847~exp=1731437447~hmac=45836bb8e2715c0aa3a1f76f6a5f794fd6058f0073069b7fb1b97b216f394d55&w=1060' },
        { id: 10, title: 'Bolo de Cenoura', description: 'Bolo caseiro com cobertura de chocolate.', rating: 4, image: 'https://img.freepik.com/fotos-gratis/bolo-de-chocolate_74190-5940.jpg?t=st=1731433847~exp=1731437447~hmac=45836bb8e2715c0aa3a1f76f6a5f794fd6058f0073069b7fb1b97b216f394d55&w=1060' },
    ];

    const postagens = [
        { id: 1, title: 'Como fazer uma torta perfeita', description: 'Dicas e truques para uma torta deliciosa.', image: 'https://img.freepik.com/fotos-gratis/bolo-de-chocolate_74190-5940.jpg?t=st=1731433847~exp=1731437447~hmac=45836bb8e2715c0aa3a1f76f6a5f794fd6058f0073069b7fb1b97b216f394d55&w=1060' },
        { id: 2, title: 'Os segredos do bolo de chocolate perfeito', description: 'Aprenda a fazer um bolo de chocolate irresistível.', image: 'https://img.freepik.com/fotos-gratis/bolo-de-chocolate_74190-5940.jpg?t=st=1731433847~exp=1731437447~hmac=45836bb8e2715c0aa3a1f76f6a5f794fd6058f0073069b7fb1b97b216f394d55&w=1060' },
        { id: 3, title: 'Receitas para um brunch saudável', description: 'Ideias deliciosas e nutritivas para um brunch em família.', image: 'https://img.freepik.com/fotos-gratis/bolo-de-chocolate_74190-5940.jpg?t=st=1731433847~exp=1731437447~hmac=45836bb8e2715c0aa3a1f76f6a5f794fd6058f0073069b7fb1b97b216f394d55&w=1060' },
        { id: 4, title: '5 maneiras de cozinhar espinafre', description: 'Receitas rápidas e fáceis com espinafre como ingrediente principal.', image: 'https://img.freepik.com/fotos-gratis/bolo-de-chocolate_74190-5940.jpg?t=st=1731433847~exp=1731437447~hmac=45836bb8e2715c0aa3a1f76f6a5f794fd6058f0073069b7fb1b97b216f394d55&w=1060' },
    ];

    const handleTabChange = (tab) => {
        setActiveTab(tab);
        setCurrentPage(1); // Reinicia a página ao trocar de aba
    };

    // Define os itens e a contagem com base na aba ativa
    const items = activeTab === 'receitas' ? receitas : postagens;
    const itemCount = items.length;
    const title = activeTab === 'receitas' ? 'Receitas' : 'Postagens';

    // Configura a paginação
    const totalPages = Math.ceil(itemCount / itemsPerPage);
    const currentItems = items.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

    const handlePageChange = (newPage) => {
        setCurrentPage(newPage);
    };

    return (
        <div>
            <Navbar/>
        
        

            <div className='Container-line'>
                <hr className="custom-line" />
            </div>


          
            <div className="content">
                <RecipeGrid recipes={currentItems} title={title} count={itemCount} /> {/* Passa os dados para o RecipeGrid */}
            </div>

            {/* Navegação da página */}
            {totalPages > 1 && (
                <div className="pagination">
                    <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>Anterior</button>
                    <span>Página {currentPage} de {totalPages}</span>
                    <button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>Próxima</button>
                </div>
            )}
            <div className='container-Footer' style={{ marginTop: "50px"}}>
                <Footer/>
            </div>
        </div>
    );
};

export default Favoritos;
