import { useState } from "react";

function AddExpenses(props) {
  const { handleAddExp, newId } = props;

  const [expenseItem, setExpenseItem] = useState("");
  const [expenseAmount, setExpenseAmount] = useState("");

  const addExpense = (event) => {
    const newExpenseObj = {
      item: expenseItem,
      amount: expenseAmount,
      expId: newId,
    };

    console.log(newExpenseObj);
    handleAddExp(newExpenseObj);

    setExpenseItem("");
    setExpenseAmount("");
  };

  return (
    <>
      <input
        value={expenseItem}
        onChange={(e) => setExpenseItem(e.target.value)}
        type="text"
        placeholder="Expense Name"
      />
      <input
        onKeyDown={(evt) =>
          ["e", "E", "+", "-"].includes(evt.key) && evt.preventDefault()
        }
        value={expenseAmount}
        onChange={(e) => setExpenseAmount(e.target.value)}
        type="number"
        placeholder="Expense Amount"
      />
      <button onClick={addExpense}>Add</button>
    </>
  );
}

export default AddExpenses;
