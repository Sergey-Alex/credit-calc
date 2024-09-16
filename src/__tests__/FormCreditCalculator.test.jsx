import { render, screen, fireEvent } from '@testing-library/react';
import { FormCreditCalculator } from '../FormCreditCalculator/FormCreditCalculator';

test('Отправляем форму, нажимая на кнопку', () => {
    const mockOnCalculate = jest.fn();
    render(<FormCreditCalculator onCalculate={mockOnCalculate} />);
    fireEvent.click(screen.getByRole('button', { name: /Рассчитать/i }));
    expect(mockOnCalculate).toHaveBeenCalledTimes(1);
});
