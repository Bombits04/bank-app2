import "./ExpenseList.css";
import React from 'react';

function ExpenseList({expOpen}){
    if (!expOpen) return null
    return(
        "\nExpenses!"
    );
}

export default ExpenseList;