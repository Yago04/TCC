import { render, screen } from '@testing-library/react';
import Planejamento from './index.js';

describe('Planejamento Component', () => {
  test('deve renderizar o título e as refeições', () => {
    render(<Planejamento />);

    // Verifica se o título está presente
    expect(screen.getByText('Planejamento Alimentar')).toBeInTheDocument();

    // Verifica se as refeições estão presentes
    const refeicoes = [
      '5:30 - Pré Treino',
      '07:30 - Café da Manhã',
      '12:30 - Almoço',
      '16:00 - Lanche',
      '20:00 - Jantar',
    ];

    refeicoes.forEach((refeicao) => {
      expect(screen.getByText(refeicao)).toBeInTheDocument();
    });
  });
});
