import React from 'react';

export const PaymentTable = ({ payments }) => {
    return (
        <table>
            <thead>
            <tr>
                <th>Дата</th>
                <th>Сумма платежа, у.е.</th>
            </tr>
            </thead>
            <tbody>
            {payments.map((payment, index) => (
                <tr key={index}>
                    <td>{payment.date}</td>
                    <td>{payment.payment}</td>
                </tr>
            ))}
            </tbody>
        </table>
    );
};


