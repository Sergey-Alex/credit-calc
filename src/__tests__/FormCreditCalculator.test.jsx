import { render, screen, fireEvent } from '@testing-library/react';
import { act } from 'react';
import { FormCreditCalculator } from '../FormCreditCalculator/FormCreditCalculator';

test('обрабатывает ввод данных и вызывает onCalculate с правильными аргументами', () => {
    const mockOnCalculate = jest.fn();

    render(<FormCreditCalculator onCalculate={mockOnCalculate} />);

    act(() => {
        fireEvent.change(screen.getByLabelText(/Сумма кредита:/i), { target: { value: '500000' } });
        fireEvent.change(screen.getByLabelText(/Срок \(месяцы\):/i), { target: { value: '60' } });
        fireEvent.change(screen.getByLabelText(/Процентная ставка/i), { target: { value: '5' } });
        fireEvent.change(screen.getByLabelText(/Дата выдачи/i), { target: { value: '15' } });
        fireEvent.change(screen.getByLabelText(/Тип графика/i), { target: { value: 'differentiated' } });
    });

    fireEvent.click(screen.getByRole('button', { name: /Рассчитать/i }));

    expect(mockOnCalculate).toHaveBeenCalledWith('500000', '60', '5', '15', 'differentiated');
});
