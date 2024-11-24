import { render, screen } from '@testing-library/react';
import SobreNos from './index';

describe('SobreNos Component', () => {
  test('Renderiza as imagens principais corretamente', () => {
    render(<SobreNos />);

    // Verifica a imagem principal
    const mainImage = screen.getByAltText('Chef preparando comida');
    expect(mainImage).toBeInTheDocument();
    expect(mainImage).toHaveAttribute(
      'src',
      'https://cdn.pixabay.com/photo/2024/08/20/13/12/ai-generated-8983262_1280.jpg'
    );

    // Verifica as imagens secundárias
    const sideImages = [
      screen.getByAltText('Receita 1'),
      screen.getByAltText('Receita 2'),
    ];
    expect(sideImages).toHaveLength(2);
    expect(sideImages[0]).toHaveAttribute(
      'src',
      'https://cdn.pixabay.com/photo/2021/01/01/15/31/sushi-balls-5878892_1280.jpg'
    );
    expect(sideImages[1]).toHaveAttribute(
      'src',
      'https://cdn.pixabay.com/photo/2014/10/19/20/59/hamburger-494706_1280.jpg'
    );
  });

  test('Renderiza o texto principal e a chamada para ação (CTA)', () => {
    render(<SobreNos />);

    // Verifica o título
    const title = screen.getByRole('heading', { name: /Profissionais criam! Você personaliza!/i });
    expect(title).toBeInTheDocument();

    // Verifica o parágrafo
    const paragraph = screen.getByText(/Receitas personalizadas, desenvolvidas por profissionais e feitas sob medida para você./i);
    expect(paragraph).toBeInTheDocument();

    // Verifica o botão "Sobre nós"
    const ctaButton = screen.getByRole('button', { name: /Sobre nós/i });
    expect(ctaButton).toBeInTheDocument();
  });

  test('Renderiza a lista de benefícios corretamente', () => {
    render(<SobreNos />);

    // Verifica a lista de benefícios
    const benefits = [
      'Receitas rápidas',
      'Adaptadas ao seu orçamento',
      'Sempre ao seu alcance',
      'Planejamentos Individuais',
    ];

    benefits.forEach((benefit) => {
      expect(screen.getByText(new RegExp(benefit, 'i'))).toBeInTheDocument();
    });
  });
});
