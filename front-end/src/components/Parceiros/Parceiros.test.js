import { render, screen } from '@testing-library/react';
import Parceiros from './index.js';

describe('Parceiros Component', () => {
  test('Renderiza o título da seção', () => {
    render(<Parceiros />);

    // Verifica o título "Parceiros"
    expect(screen.getByText(/parceiros/i)).toBeInTheDocument();
  });

  test('Renderiza a lista de parceiros com todas as imagens', () => {
    render(<Parceiros />);

    // Verifica que as imagens dos parceiros são renderizadas
    const parceirosImages = screen.getAllByRole('img');
    expect(parceirosImages).toHaveLength(4); // Verifica se existem 4 imagens

    // Verifica o atributo alt de cada imagem
    expect(parceirosImages[0]).toHaveAttribute('alt', 'Parceiro 1');
    expect(parceirosImages[1]).toHaveAttribute('alt', 'Parceiro 2');
    expect(parceirosImages[2]).toHaveAttribute('alt', 'Parceiro 3');
    expect(parceirosImages[3]).toHaveAttribute('alt', 'Parceiro 4');
  });

  test('As imagens possuem as URLs corretas', () => {
    render(<Parceiros/>);

    // Verifica que as imagens estão com os src corretos
    const parceirosImages = screen.getAllByRole('img');
    expect(parceirosImages[0]).toHaveAttribute(
      'src',
      'https://cdn.pixabay.com/photo/2016/03/17/07/02/starbucks-1262392_1280.jpg'
    );
    expect(parceirosImages[1]).toHaveAttribute(
      'src',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/McDonald%27s_logo.svg/2560px-McDonald%27s_logo.svg.png'
    );
    expect(parceirosImages[2]).toHaveAttribute(
      'src',
      'https://media-cdn.tripadvisor.com/media/photo-s/26/b8/09/8f/kfc-logo.jpg'
    );
    expect(parceirosImages[3]).toHaveAttribute(
      'src',
      'https://gsobmidia.com.br/uploads/lojas/687/dominos_1602250925.jpg'
    );
  });
});
