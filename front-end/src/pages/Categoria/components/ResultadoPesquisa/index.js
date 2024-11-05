
import React, { useState } from 'react'
import './ResultadoPesquisa.css'
import { Card, CardImg, CardBody, CardTitle, CardText, Pagination, PaginationItem, PaginationLink } from 'reactstrap';

const RecipeGrid = ({ recipes = [] }) => { 
  
  const itemsPerPage = 9;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(recipes.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentRecipes = recipes.slice(startIndex, startIndex + itemsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="recipe-grid">
      <div className='container-titleLine'>

      <h2>Receitas ({recipes.length})</h2>
      <hr className="custom-line" />
      </div>
      <div className="row">
        {currentRecipes.map((recipe, index) => (
          <div className="col-md-4" style={{ display:'flex', justifyContent:"center", alignItems:"center"}} key={index}>
            <Card>
              <CardImg top    src={recipe.image} alt={recipe.title} />
              <CardBody>
                <CardTitle tag="h5" style={{textAlign:"center"}}>{recipe.title}</CardTitle>
            
                <CardText style={{textAlign:"center"}}>{recipe.description}</CardText>

                <div className="rating">
                  {'⭐'.repeat(recipe.rating)}
                </div>
              </CardBody>
            </Card>
          </div>
        ))}
      </div>

      
      {totalPages > 1 && ( // Mostrar paginação apenas se houver mais de uma página
        <Pagination aria-label="Page navigation" style= {{justifyContent:"center"}}>
          <PaginationItem disabled={currentPage === 1}>
            <PaginationLink previous onClick={() => handlePageChange(currentPage - 1)} />
          </PaginationItem>
          {Array.from({ length: totalPages }, (_, i) => (
            <PaginationItem active={i + 1 === currentPage} key={i}>
              <PaginationLink onClick={() => handlePageChange(i + 1)}>
                {i + 1}
              </PaginationLink>
            </PaginationItem>
          ))}
          <PaginationItem disabled={currentPage === totalPages}>
            <PaginationLink next onClick={() => handlePageChange(currentPage + 1)} />
          </PaginationItem>
        </Pagination>
      )}
    </div>
  );
};

export default RecipeGrid;
