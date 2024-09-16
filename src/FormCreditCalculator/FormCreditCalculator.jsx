import React, { useState } from 'react';
import './formData.css'
 export const FormCreditCalculator = ({ onCalculate }) => {

    const [amount, setAmount] = useState('');
    const [term, setTerm] = useState('');
    const [rate, setRate] = useState('');
    const [startDate, setStartDate] = useState('');
    const [loanType, setLoanType] = useState('annuity');

    const handleSubmit = (e) => {
        e.preventDefault();
        onCalculate(amount, term, rate, startDate, loanType);
    };


    return (
        <form onSubmit={handleSubmit}>
            <label>
                Сумма кредита, y.e :
                <input
                    placeholder='введите значение'
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    required
                />

            </label>

            <label>
                Срок (месяцы):
                <input
                    placeholder='введите значение'
                    type="number"
                    value={term}
                    onChange={(e) => setTerm(e.target.value)}
                    required
                />
            </label>

            <label>
                Процентная ставка (%):
                <input
                    placeholder='введите значение'
                    type="number"
                    value={rate}
                    onChange={(e) => setRate(e.target.value)}
                    required
                />
            </label>

            <label>
                Дата выдачи (1-31):
                <input
                    placeholder='введите значение'
                    type="number"
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                    min="1"
                    max="31"
                    required
                />
            </label>

            <label>
                Тип графика:
                <select value={loanType} onChange={(e) => setLoanType(e.target.value)}>
                    <option value="annuity">Аннуитетный</option>
                    <option value="differentiated">Дифференцированный</option>
                </select>
            </label>

            <button type="submit">Рассчитать</button>
        </form>
    );
};

