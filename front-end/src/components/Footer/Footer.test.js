import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Footer from './index';

describe('Footer Component', () => {
  test('Renderiza o footer com os elementos principais', () => {
    render(<Footer />);

    // Verifica o título principal
    expect(screen.getByText(/nutrichef/i)).toBeInTheDocument();

    // Verifica os ícones das redes sociais
    expect(screen.getByLabelText(/instagram/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/facebook/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/twitter/i)).toBeInTheDocument();

    // Verifica o texto de direitos reservados
    expect(screen.getByText(/© 2024\. all rights reserved/i)).toBeInTheDocument();

    // Verifica o título da newsletter
    expect(screen.getByText(/nunca perca uma receita/i)).toBeInTheDocument();

    // Verifica os elementos do formulário de newsletter
    expect(screen.getByPlaceholderText(/email address/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /inscrever/i })).toBeInTheDocument();

    // Verifica o texto explicativo da newsletter
    expect(
      screen.getByText(/se inscreva em nosso newsletter para receber receitas novas e atualizadas/i)
    ).toBeInTheDocument();

    // Verifica os links da linha inferior
    expect(screen.getByText(/termos e condições/i).closest('a')).toHaveAttribute('href', '#');
    expect(screen.getByText(/política de privacidade/i).closest('a')).toHaveAttribute('href', '#');
  });

  test('Permite a inscrição na newsletter', async () => {
    render(<Footer />);
    const user = userEvent.setup();

    // Obtém os elementos do formulário
    const emailInput = screen.getByPlaceholderText(/email address/i);
    const subscribeButton = screen.getByRole('button', { name: /inscrever/i });

    // Digita o email e clica no botão
    await user.type(emailInput, 'teste@email.com');
    expect(emailInput).toHaveValue('teste@email.com');

    await user.click(subscribeButton);
    // Simular comportamento ou mensagem de sucesso pode ser adicionado aqui se necessário.
    // Exemplo:
    // expect(screen.getByText(/inscrição realizada com sucesso/i)).toBeInTheDocument();
  });
});
