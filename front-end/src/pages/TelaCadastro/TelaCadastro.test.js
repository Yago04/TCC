import { render, screen } from '@testing-library/react';
import TelaCadastro from './index.js';

describe('TelaCadastro Component', () => {
  test('deve renderizar todos os inputs corretamente', () => {
    render(<TelaCadastro />);

    // Verifica se os campos de input estão no documento
    expect(screen.getByPlaceholderText('Primeiro Nome')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Último Nome')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('E-mail')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Confirme seu E-mail')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Telefone')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Data de Aniversário')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Senha')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Confirme sua Senha')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Nome de Usuário')).toBeInTheDocument();
  });
});
