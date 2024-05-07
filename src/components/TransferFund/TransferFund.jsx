import "./TransferFund.css";
import React from 'react';

function TransferFund({transOpen}){
    if (!transOpen) return null
    return(
        "\nTransfer"
    );
}

export default TransferFund;