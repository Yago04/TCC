import { render, screen } from '@testing-library/react';
import Artigos from './index';

describe('Artigos Component', () => {
  test('Renderiza o artigo principal com informações completas', () => {
    render(<Artigos />);

    // Verifica a imagem do artigo principal
    const mainArticleImage = screen.getByAltText('Notícia principal');
    expect(mainArticleImage).toBeInTheDocument();
    expect(mainArticleImage).toHaveAttribute(
      'src',
      'https://cdn.pixabay.com/photo/2017/08/12/18/59/snack-2635035_1280.jpg'
    );

    // Verifica título, data e subtítulo
    expect(screen.getByText(/Setembro 14, 2024/i)).toBeInTheDocument();
    expect(
      screen.getByText(/Personalização de Refeições: A Revolução na Alimentação Saudável/i)
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        /Descubra como a personalização de receitas está mudando a forma como abordamos a alimentação saudável/i
      )
    ).toBeInTheDocument();
  });

  test('Renderiza todos os artigos menores com informações corretas', () => {
    render(<Artigos />);
  
    // Verifica todas as imagens (incluindo o artigo principal)
    const allImages = screen.getAllByRole('img');
    expect(allImages).toHaveLength(5); // Total de 5 artigos (1 principal + 4 menores)
  
    // Separa as imagens dos artigos menores
    const smallArticleImages = allImages.slice(1); // Ignora o artigo principal
    expect(smallArticleImages).toHaveLength(4); // Deve haver 4 imagens menores
  
    // Verifica os atributos de algumas imagens menores
    expect(smallArticleImages[0]).toHaveAttribute(
      'src',
      'https://cdn.pixabay.com/photo/2016/11/20/09/06/bowl-1842294_1280.jpg'
    );
    expect(smallArticleImages[1]).toHaveAttribute(
      'src',
      'https://cdn.pixabay.com/photo/2019/09/26/18/23/republic-of-korea-4506696_1280.jpg'
    );
  });
  

  test('Verifica que todos os artigos estão renderizados', () => {
    render(<Artigos />);

    // Verifica o número total de artigos renderizados (1 principal + 4 menores)
    const allArticles = screen.getAllByRole('img');
    expect(allArticles).toHaveLength(5); // Total de 5 artigos
  });
});
