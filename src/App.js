import {FormCreditCalculator} from "./FormCreditCalculator/FormCreditCalculator";
import {PaymentTable} from "./PaymentTable/PaymentTable";
import {calculatePayments} from "./utils/calculatePayments";
import {useState} from "react";
import './App.css'

export const App = () =>{


const [payment, setPayment] = useState([])

const handleCalculate = (amount, term, rate, startDate, loanType) => {
    const payments = calculatePayments(amount, term, rate, startDate, loanType);
    setPayment(payments);
};

return (
    <div className="container">
        <h2>Кредитный калькулятор</h2>
        <FormCreditCalculator onCalculate={handleCalculate}/>
        <h3>График платежей</h3>
        <PaymentTable payments={payment}/>
    </div>

)}
