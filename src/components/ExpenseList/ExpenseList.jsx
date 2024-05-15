//CSS IS IN WithdrawFunds.css
import ReactDom from "react-dom";
import "./ExpenseList.css";
import customerData from "../../assets/data/CustomerData.json";
import { useState } from "react";

function ExpenseList({ expOpen, expClose }) {
  const data = customerData.find((data) => data.customerName === "matt");
  const { expenseList } = data;
  const [expense, setExpense] = useState(expenseList);

  const deleteExpense = (Id) => {
    setExpense((oldList) => oldList.filter((exp) => exp.expId !== Id));
    console.log(expense)
  }

  if (!expOpen) return null
  return ReactDom.createPortal(
    <div className="modal-container">
      <div className="modal-comp-container">
        <div onClick={expClose} className="modal-exit-button">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 384 512"
            width="25px"
            height="20px"
          >
            <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
          </svg>
        </div>
        <div className="modal-item-container">
          <div className="modal-title">
            <span className="montserrat-600">Expenses</span>
          </div>
          <div className="modal-body">
            <div className="info-container">
              <div className="budget-disp">Expense Name: </div>
              <div className="expenses-disp">Expenses Total:</div>
            </div>
            <div className="expenses-list">
              <div className="expense-item">
                {
                expense.map((data) => {
                  return(
                  <div key={data.expId}>
                    <svg
                      onClick={() => deleteExpense(data.expId)}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      height="15px"
                      width="15px"
                      fill="#7d041b"
                    >
                      <path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c-9.4 9.4-9.4 24.6 0 33.9l47 47-47 47c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l47-47 47 47c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-47-47 47-47c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-47 47-47-47c-9.4-9.4-24.6-9.4-33.9 0z" />
                    </svg>
                    <span className="item">{data.item}</span>
                    <span className="amount">Php {data.amount}</span>
                  </div>
                  )
                })
                }
              </div>
            </div>
            <div className="expense-add">
              <input type="text" placeholder="Expense Name" />
              <input type="number" placeholder="Expense Amount" />
              <button>Add</button>
            </div>
          </div>
          <div className="modal-footer">MODAL FOOTER</div>
        </div>
      </div>
    </div>,

    document.getElementById("portal")
  );
}

export default ExpenseList;
