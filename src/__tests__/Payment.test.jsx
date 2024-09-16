import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // для дополнительных матчеров
import { PaymentTable } from '../PaymentTable/PaymentTable';

describe('PaymentTable', () => {
    const mockPayments = [
        { date: '2024-01-01', payment: 1000, principal: 700, interest: 300 },
        { date: '2024-02-01', payment: 1000, principal: 710, interest: 290 },
    ];

    test('рендерит заголовки таблицы', () => {
        render(<PaymentTable payments={[]} />);

        // Проверяем, что заголовки отображаются
        expect(screen.getByText(/Дата/i)).toBeInTheDocument();
        expect(screen.getByText(/Сумма платежа/i)).toBeInTheDocument();
        expect(screen.getByText(/Основной долг/i)).toBeInTheDocument();
        expect(screen.getByText(/Проценты/i)).toBeInTheDocument();
    });


    test('отображает сообщение, если нет платежей', () => {
        render(<PaymentTable payments={[]} />);

        // Проверяем, что таблица рендерится, но нет строк с платежами
        const rows = screen.getAllByRole('row');
        expect(rows.length).toBe(1); // Должна быть только строка заголовка
    });
});
