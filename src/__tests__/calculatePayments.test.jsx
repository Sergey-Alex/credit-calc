import { isHolidayOrSunday, getNextWorkingDay, calculatePayments } from '../utils/calculatePayments';

const holidays = ['2024-01-01', '2024-01-07'];

describe('isHolidayOrSunday', () => {
    test('должен возвращать true для воскресенья', () => {
        const sunday = new Date('2024-01-07');
        expect(isHolidayOrSunday(sunday)).toBe(true);
    });

    test('должен возвращать true для праздника', () => {
        const holiday = new Date('2024-01-01');
        expect(isHolidayOrSunday(holiday)).toBe(true);
    });

    test('должен возвращать false для рабочего дня', () => {
        const workingDay = new Date('2024-01-03');
        expect(isHolidayOrSunday(workingDay)).toBe(false);
    });
});

describe('getNextWorkingDay', () => {
    test(' проверка пропуска воскресенья и возвращает понедельник ', () => {
        const sunday = new Date('2024-01-07');
        const nextWorkingDay = getNextWorkingDay(sunday);
        expect(nextWorkingDay.toISOString().split('T')[0]).toBe('2024-01-08');
    });

    test('проверка пропуска праздника и возвращает на следующий рабочий день', () => {
        const holiday = new Date('2024-01-01');
        const nextWorkingDay = getNextWorkingDay(holiday);
        expect(nextWorkingDay.toISOString().split('T')[0]).toBe('2024-01-02');
    });
});
    test('рассчитать правильные даты оплаты, избегая праздников и воскресений', () => {
        const amount = 10000;
        const term = 12; //
        const rate = 12; //
        const startDate = 1; //
        const loanType = 'annuity';

        const payments = calculatePayments(amount, term, rate, startDate, loanType);

        payments.forEach((payment) => {
            const paymentDate = new Date(payment.date.split('.').reverse().join('-'));
            expect(isHolidayOrSunday(paymentDate)).toBe(false);
        });
    });

