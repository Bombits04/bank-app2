import React, {useState} from "react";

//css
import "./ClientPage.css";

//page imports
import DepositFund from "../../components/DepositFund/DepositFund";
import TransferFund from "../../components/TransferFund/TransferFund";
import WithdrawFund from "../../components/WithdrawFund/WithdrawFund";
import ExpenseList from "../../components/ExpenseList/ExpenseList";
import virtualCard from "../../../src/assets/images/virtual-card.png";

//image imports
import expensesImg from "../../../src/assets/images/expenses.png"
import transferImg from "../../../src/assets/images/transfer.png"
import depositImg from "../../../src/assets/images/deposit.png"
import withdrawImg from "../../../src/assets/images/withdraw.png"
// import logo from "../../../src/assets/images/logo.png";

//back and nav link import
// import backIcon from "../../../src/assets/images/back.png";
// import { NavLink } from 'react-router-dom';

const ClientPage = () => {
    const [depisOpen, setDepIsOpen] = useState(false);
    const [withIsOpen, setWithIsOpen] = useState(false);
    const [transIsOpen, setTransIsOpen] = useState(false);
    const [expIsOpen, setExpIsOpen] = useState(false);
  return (
    
    
    <div className="wrapper">
      <div className="expenses-display">
        <span>Expenses:</span>
        <span>$10000</span>
      </div>
      <div className="bank-card">
        <img className="bank-card-img" src={virtualCard} alt="" />
      </div>
      <div className="available-balance">
        <span>Avilable Balance:</span>
        <span>$10000</span>
      </div>

      <DepositFund depOpen={depisOpen} depClose={(() => setDepIsOpen(false))}></DepositFund>
      <WithdrawFund withOpen={withIsOpen} withClose={(() => setWithIsOpen(false))} ></WithdrawFund>
      <TransferFund transOpen={transIsOpen} transClose={(() => setTransIsOpen(false))}></TransferFund>
      <ExpenseList expOpen={expIsOpen} expClose={(() => setExpIsOpen(false))}></ExpenseList>

      <div className="action-buttons">
        <img onClick={( () => setWithIsOpen(true))} className="action-img" src={withdrawImg} alt="withdraw"></img>
        <img onClick={( () => setTransIsOpen(true))} className="action-img" src={transferImg} alt="transfer"></img>
        <img onClick={( () => setDepIsOpen(true))} className="action-img" src={depositImg} alt="withdraw"></img>
        <img onClick={( () => setExpIsOpen(true))} className="action-img" src={expensesImg} alt="withdraw"></img>
      </div>
    </div>
  );
};

export default ClientPage;
