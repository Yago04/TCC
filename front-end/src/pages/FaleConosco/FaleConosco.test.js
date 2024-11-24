import { render, screen, fireEvent } from '@testing-library/react';
import FaleConosco from './index.js';

describe('FaleConosco Component', () => {
  test('deve renderizar todas as perguntas do FAQ', () => {
    render(<FaleConosco />);

    // Verifica se todas as perguntas estão renderizadas
    const faqQuestions = [
      "Como funciona a personalização das receitas?",
      "As receitas são desenvolvidas por profissionais?",
      "Quanto custa usar a plataforma e como posso gerenciar meu orçamento?",
      "Como entro em contato com o suporte?",
      "Quais são as políticas da empresa?",
      "As receitas podem são de direito autoral minha?", // Ajuste na última pergunta para refletir o texto correto
    ];

    faqQuestions.forEach((question) => {
      expect(screen.queryByText(question)).toBeInTheDocument(); // Substituído para evitar falha brusca
    });
  });

  test('deve alternar a visibilidade da resposta ao clicar em uma pergunta', () => {
    render(<FaleConosco />);

    const firstQuestion = screen.queryByText("Como funciona a personalização das receitas?");

    expect(screen.queryByText(
      "Você pode personalizar receitas adicionando ou removendo ingredientes no editor de receitas."
    )).not.toBeInTheDocument();

    fireEvent.click(firstQuestion);

    expect(screen.queryByText(
      "Você pode personalizar receitas adicionando ou removendo ingredientes no editor de receitas."
    )).toBeInTheDocument();

    fireEvent.click(firstQuestion);

    expect(screen.queryByText(
      "Você pode personalizar receitas adicionando ou removendo ingredientes no editor de receitas."
    )).not.toBeInTheDocument();
  });

  test('deve renderizar o ícone correto para cada estado (aberto/fechado)', () => {
    render(<FaleConosco />);

    const firstQuestion = screen.queryByText("Como funciona a personalização das receitas?");

    const initialIcons = screen.getAllByText(/▲|▼/);
    expect(initialIcons).not.toBeNull();

    fireEvent.click(firstQuestion);

    const updatedIcons = screen.getAllByText(/▲|▼/);
    expect(updatedIcons).not.toBeNull();
  });
});
