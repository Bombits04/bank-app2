import "./DepositFund.css";
import React from 'react';

function DepositFund({depOpen}){
    if (!depOpen) return null

    return(
      "\nDeposit!"
    );
}

export default DepositFund;