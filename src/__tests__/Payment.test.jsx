import { render, screen } from '@testing-library/react';
import { PaymentTable } from '../PaymentTable/PaymentTable';

describe('PaymentTable', () => {
    const mockPayments = [
        { date: '2024-01-01', payment: 1000, principal: 700, interest: 300 },
        { date: '2024-02-01', payment: 1000, principal: 710, interest: 290 },
    ];

    test('рендерит заголовки таблицы', () => {
        render(<PaymentTable payments={mockPayments} />);

        expect(screen.getByText(/Дата/i)).toBeInTheDocument();
        expect(screen.getByText(/Сумма платежа/i)).toBeInTheDocument();
    });


    test('отображает сообщение, если нет платежей', () => {
        render(<PaymentTable payments={mockPayments} />);
        const rows = screen.getAllByRole('row');
        expect(rows.length).toBe(1);
    });
});
