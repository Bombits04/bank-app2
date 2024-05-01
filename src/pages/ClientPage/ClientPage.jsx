import React from "react";
import withdrawImg from "../../../src/assets/images/withdraw.png"
import depositImg from "../../../src/assets/images/deposit.png"
import transferImg from "../../../src/assets/images/transfer.png"
import expensesImg from "../../../src/assets/images/expenses.png"
import "./ClientPage.css"

const ClientPage = () =>{
    return(
        <div className="wrapper">
            <div className="expenses-display">
                <span>Expenses:</span>
                <span>$10000</span>
            </div>
            <div className="bank-card"></div>
            <div className="available-balance">
                <span>Avilable Balance:</span>
                <span>$10000</span>
            </div>

            <div className="action-buttons">
                <img className="action-img" src={withdrawImg} alt="withdraw"></img>
                <img className="action-img" src={depositImg} alt="deposit"></img>
                <img className="action-img" src={transferImg} alt="transfer"></img>
                <img className="action-img" src={expensesImg} alt="expenses"></img>
            </div>
        </div>
    );
}

export default ClientPage;