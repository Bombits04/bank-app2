import React, { useState } from "react";
import "./../../App.css";
import logo from "../../../src/assets/images/logo.png";
import addUserImg from "../../../src/assets/images/add-user.png";
import removeUserImg from "../../../src/assets/images/remove-user.png";
import withdrawImg from "../../../src/assets/images/withdraw.png";
import depositImg from "../../../src/assets/images/deposit.png";
import transferImg from "../../../src/assets/images/transfer.png";
import expensesImg from "../../../src/assets/images/expenses.png";
import backIcon from "../../../src/assets/images/back.png";
import { NavLink } from "react-router-dom";

//page imports
import DepositFund from "../../components/DepositFund/DepositFund";
import TransferFund from "../../components/TransferFund/TransferFund";
import WithdrawFund from "../../components/WithdrawFund/WithdrawFund";
import ExpenseList from "../../components/ExpenseList/ExpenseList";
import ClientData from "../../../src/assets/data/ClientData.json";

function EmployeePage() {
  const [depisOpen, setDepIsOpen] = useState(false);
  const [withIsOpen, setWithIsOpen] = useState(false);
  const [transIsOpen, setTransIsOpen] = useState(false);
  const [expIsOpen, setExpIsOpen] = useState(false);
  const [users, setUsers] = useState(ClientData);

  const updateDeposit = (depReturn) => {
    setUsers(depReturn);
    setDepIsOpen(false);
  };

  const updateWithdraw = (withReturn) => {
    setUsers(withReturn);
    setWithIsOpen(false);
  };

  const updateTransfer = (transReturn) => {
    setUsers(transReturn);
    setTransIsOpen(false);
  };

  return (
    <div className="employee">
      <img src={logo} alt="logo" className="logoInPages"></img>
      <style>{"body { background-color: #124E66; }"}</style>
      <nav>
        <NavLink className="item" to="/">
          <img src={backIcon} alt="back" className="backIcon"></img>
        </NavLink>
      </nav>
      {/* table */}
      <table className="table">
        <tr>
          <th>Client No.</th>
          <th>Client Name</th>
          <th>Available Balance</th>
        </tr>
        <tbody>
          {users.map((clients, index) => (
            <tr key={index}>
              <th>{index + 1}</th>
              <td>{clients.name} </td>
              <td>{clients.balance} </td>
              <td>
                <button class="button">X</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <br></br>
      <hr></hr>
      <br />
      <DepositFund
        handleDeposit={updateDeposit}
        isClient={false}
        ClientData={users}
        depOpen={depisOpen}
        depClose={() => setDepIsOpen(false)}
      ></DepositFund>
      <WithdrawFund
        handleWithdraw={updateWithdraw}
        isClient={false}
        ClientData={users}
        withOpen={withIsOpen}
        withClose={() => setWithIsOpen(false)}
      ></WithdrawFund>
      <TransferFund
        handleTransfer={updateTransfer}
        isClient={false}
        ClientData={users}
        transOpen={transIsOpen}
        transClose={() => setTransIsOpen(false)}
      ></TransferFund>
      <ExpenseList
        isClient={false}
        ClientData={users}
        expOpen={expIsOpen}
        expClose={() => setExpIsOpen(false)}
      ></ExpenseList>

      <div className="flex-parent jc-center">
        <img className="btnleft" src={addUserImg} alt="add user"></img>
        <img
          className="btnleft"
          src={depositImg}
          alt="deposit"
          onClick={() => setDepIsOpen(true)}
        ></img>
        <img
          className="btnleft"
          src={transferImg}
          alt="transfer"
          onClick={() => setTransIsOpen(true)}
        ></img>
      </div>
      <br></br>
      <div className="flex-parent jc-center">
        <img className="btnleft" src={removeUserImg} alt="remove user"></img>
        <img
          className="btnleft"
          src={withdrawImg}
          alt="withdraw"
          onClick={() => setWithIsOpen(true)}
        ></img>
        <img
          onClick={() => setExpIsOpen(true)}
          className="btnleft"
          src={expensesImg}
          alt="withdraw"
        ></img>
      </div>
    </div>
  );
}

export default EmployeePage;
