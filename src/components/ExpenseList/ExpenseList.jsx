//CSS IS IN WithdrawFunds.css
import ReactDom from "react-dom";
import "./ExpenseList.css";
// import customerData from "../../assets/data/CustomerData.json";
import { useState } from "react";
import AddExpenses from "../../components/AddExpense/AddExpense";

function ExpenseList({ expOpen, expClose, isClient, ClientData }) {
  // const data = ClientData.find((data) => data.name === "Ariana Grande");
  const [data, setData] = useState(
    ClientData.find((data) => data.name === "Ariana Grande")
  );
  const { expenseList } = data;
  const [expense, setExpense] = useState(expenseList);
  const [count, setCount] = useState(expense.length + 1);
  let sum = 0;
  expense.map((list, i) => (sum = sum + Number(list.amount)));
  const [expenseTotal, setExpenseTotal] = useState(sum);
  const [updatedBalance, setUpdatedBalance] = useState(data.balance - sum);

  const [selectValue, setSelectValue] = useState("");
  const onChange = (e) => {
    const value = e.target.value;
    setSelectValue(value);
    setData(ClientData.find((data) => data.name === selectValue));
    setExpense(data.expenseList);
  };

  const updateValuesDelete = (Id) => {
    // let sum2 = 0;
    let sumarr = 0;
    let amountdeleted = expense.filter((amt) => amt.expId === Id);

    setUpdatedBalance(Number(updatedBalance) + Number(amountdeleted[0].amount));
    // expense.map((list)=>(sum2 = sum2 + Number(list.amount)))

    for (let i = 0; i < expense.length; i++) {
      if (expense[i].expId !== Id) {
        sumarr = sumarr + Number(expense[i].amount);
      }
    }
    setExpenseTotal(sumarr);
  };

  const deleteExpense = (Id) => {
    //remove item
    setExpense((oldList) => oldList.filter((exp) => exp.expId !== Id));

    updateValuesDelete(Id);
  };

  const addExp = (newExp) => {
    let newCount = count + 1;
    setCount(newCount);
    setExpense((oldList) => [...oldList, newExp]);
    setUpdatedBalance(Number(updatedBalance) - Number(newExp.amount));
    setExpenseTotal(expenseTotal + Number(newExp.amount));
    console.log(expense);
  };

  if (!expOpen) return null;
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
            {!isClient && (
              <select
                onChange={onChange}
                name="users"
                id="users"
                className="select-users"
              >
                {ClientData.map((users, i) => {
                  return (
                    <>
                      <option key={i} value={users.name}>
                        {users.name}
                      </option>
                    </>
                  );
                })}
              </select>
            )}
            <div className="info-container">
              <div className="budget-disp">
                Avilable funds: {updatedBalance}
              </div>
              <div className="expenses-disp">
                Expenses Total: {expenseTotal}
              </div>
            </div>
            <div className="expenses-list">
              <div className="expense-item">
                {expense.map((data) => {
                  return (
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
                  );
                })}
              </div>
            </div>
            <div className="expense-add">
              <AddExpenses handleAddExp={addExp} newId={count}></AddExpenses>
            </div>
          </div>
        </div>
      </div>
    </div>,

    document.getElementById("portal")
  );
}

export default ExpenseList;
