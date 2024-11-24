import { render, screen } from '@testing-library/react';
import ListaReceitas from './index.js';

describe('ListaReceitas Component', () => {
  test('Renderiza a lista de receitas corretamente', () => {
    render(<ListaReceitas />);

    // Verifica que todos os cards foram renderizados
    const cards = screen.getAllByRole('img');
    expect(cards).toHaveLength(8); // Total de receitas

    // Verifica alguns títulos de receitas
    expect(screen.getByText(/Torta de banana/i)).toBeInTheDocument();
    expect(screen.getByText(/Bolo de Chocolate/i)).toBeInTheDocument();
    expect(screen.getByText(/Salada Fitness/i)).toBeInTheDocument();
  });

  test('Cada card possui botão "Ver Receita"', () => {
    render(<ListaReceitas />);

    const buttons = screen.getAllByRole('button', { name: /Ver Receita/i });
    expect(buttons).toHaveLength(8); // Um botão por card
  });
});
