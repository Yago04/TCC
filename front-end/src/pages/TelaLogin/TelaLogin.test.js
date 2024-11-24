import { render, screen, fireEvent } from '@testing-library/react';
import TelaLogin from './index.js';

describe('TelaLogin Component', () => {
  test('deve renderizar os campos de email e senha corretamente', () => {
    // Renderiza o componente
    render(<TelaLogin />);

    // Verifica se o campo de email está presente
    const emailInput = screen.getByPlaceholderText(/E-mail/i);
    expect(emailInput).toBeInTheDocument();

    // Verifica se o campo de senha está presente
    const passwordInput = screen.getByPlaceholderText('********');
    expect(passwordInput).toBeInTheDocument();
  });

  test('deve permitir que os inputs sejam preenchidos', () => {
    // Renderiza o componente
    render(<TelaLogin />);

    // Obtém os campos de email e senha
    const emailInput = screen.getByPlaceholderText(/E-mail/i);
    const passwordInput = screen.getByPlaceholderText('********');

    // Simula o preenchimento dos campos
    fireEvent.change(emailInput, { target: { value: 'usuario@exemplo.com' } });
    fireEvent.change(passwordInput, { target: { value: 'senhaSegura123' } });

    // Verifica os valores
    expect(emailInput.value).toBe('usuario@exemplo.com');
    expect(passwordInput.value).toBe('senhaSegura123');
  });

  test('deve exibir/ocultar senha ao clicar no botão de visualizar', () => {
    // Renderiza o componente
    render(<TelaLogin />);

    // Obtém o campo de senha e o botão de alternância
    const passwordInput = screen.getByPlaceholderText('********');
    const toggleButton = screen.getByRole('button', { name: /visualizar/i });

    // Verifica o tipo inicial do campo de senha
    expect(passwordInput).toHaveAttribute('type', 'password');

    // Simula o clique para mostrar a senha
    fireEvent.click(toggleButton);
    expect(passwordInput).toHaveAttribute('type', 'text');

    // Simula o clique para ocultar a senha novamente
    fireEvent.click(toggleButton);
    expect(passwordInput).toHaveAttribute('type', 'password');
  });
});
