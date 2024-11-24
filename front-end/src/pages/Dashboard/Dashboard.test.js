    import { render, screen } from '@testing-library/react';
    import Dashboard from './index.js';

    // Mock para o ResponsiveContainer
    jest.mock('recharts', () => {
    const OriginalRecharts = jest.requireActual('recharts');
    return {
        ...OriginalRecharts,
        ResponsiveContainer: ({ children }) => <div>{children}</div>, // Mock simples
    };
    });

    describe('Dashboard Component', () => {
    test('deve renderizar o título e os indicadores principais', () => {
        render(<Dashboard />);

        // Verifica se o título do dashboard está presente
        expect(screen.getByText('Dashboard')).toBeInTheDocument();

        // Verifica se os indicadores principais estão presentes
        expect(screen.getByText('2036,67 Kcal')).toBeInTheDocument(); // Média de Calorias
        expect(screen.getByText('-43,44%')).toBeInTheDocument(); // Redução de Consumo
        expect(screen.getByText('61.100 Kcal')).toBeInTheDocument(); // Total Calorias
    });
    });
