const holidays = ['2025-01-01', '2025-01-07', '2025-05-01', '2025-05-09'];// массив для добавления праздничных дат

export const isHolidayOrSunday = (date) => {
    const formattedDate = date.toISOString().split('T')[0];
    const isSunday = date.getDay() === 0;
    const isHoliday = holidays.includes(formattedDate);
    return isSunday || isHoliday;
};

export const getNextWorkingDay = (date) => {
    const newDate = new Date(date);
    while (isHolidayOrSunday(date)) {
        date.setDate(date.getDate() + 1);
    }
    return date;
};

export const calculatePayments = (amount, term, rate, startDate, loanType) => {
    const monthlyRate = parseFloat(rate) / 100 / 12;
    let balance = parseFloat(amount);
    let payments = [];
    let date = new Date();
    date.setDate(1);
    date.setMonth(date.getMonth());
    date.setDate(parseInt(startDate));

    const totalTerm = parseInt(term);


    const annuityPayment = loanType === 'annuity'
        ? (balance * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -totalTerm))
        : 0;

    for (let i = 0; i < totalTerm; i++) {
        let payment, principal, interest;

        if (loanType === 'annuity') {

            interest = balance * monthlyRate;

            principal = annuityPayment - interest;
            payment = annuityPayment;
        } else if (loanType === 'differentiated') {

            principal = amount / totalTerm;
            interest = balance * monthlyRate;
            payment = principal + interest;

            balance -= principal;
        }

        balance -= principal;

        date.setMonth(date.getMonth() + 1);

        const paymentDate = getNextWorkingDay(new Date(date));

        payments.push({
            date: paymentDate.toLocaleDateString('ru-RU'),
            payment: payment.toFixed(2),
            principal: principal.toFixed(2),
        });
    }

    return payments;
};
