//CSS IS IN WithdrawFunds.css
import ReactDom from "react-dom";
import React, { useState } from "react";

function TransferFund({
  transOpen,
  transClose,
  ClientData,
  isClient,
  handleTransfer,
}) {
  const [users, setUsers] = useState(ClientData);
  const [amount, setAmount] = useState("");
  const [sender, setSender] = useState(() => (isClient ? "Ariana Grande" : ""));
  const [receiver, setReceiver] = useState("");

  const userExist = (name) => {
    // returns true if name from parameter is already in our users array
    return users.find((user) => user.name === name);
  };

  const findUser = (name) => {
    let foundUser = users.filter((user) => user.name === name);
    // returns the user object that matches the name in our parameter
    return foundUser[0];
  };

  const transferMoney = () => {
    const newAmount = Number(amount);
    if (
      userExist(sender) &&
      userExist(receiver) &&
      sender !== receiver &&
      newAmount > 0
    ) {
      const senderInfo = findUser(sender);
      if (senderInfo.balance >= newAmount) {
        const updateUsers = users.map((user) => {
          if (user.name === sender) {
            console.log(
              `Sender:${sender} Balance: ${user.balance - newAmount}`
            );
            return { ...user, balance: user.balance - newAmount };
          } else if (user.name === receiver) {
            console.log(
              `Receiver:${receiver} Balance: ${user.balance + newAmount}`
            );
            alert("Transfer Success!");
            return { ...user, balance: user.balance + newAmount };
          }

          return user;
        });
        handleTransfer(updateUsers);
        setUsers(updateUsers);
      } else {
        alert("Not enough balance!");
      }
    } else {
      alert("Transaction invalid!");
    }
    setReceiver("");
    setAmount("");

    if (!isClient) {
      setSender("");
    }
  };

  if (!transOpen) return null;
  return ReactDom.createPortal(
    <div className="modal-container">
      <div className="modal-comp-container">
        <div onClick={transClose} className="modal-exit-button">
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
            <span className="montserrat-600">Transfer Funds</span>
          </div>
          <div className="modal-body poppins-light">
            <div className="input-row">
              <span>Sender:</span>
              <input
                value={sender}
                onChange={(event) => setSender(event.target.value)}
                required
                disabled={isClient}
              ></input>
            </div>
            <div className="input-row">
              <span>Receiver:</span>
              <input
                type="text"
                value={receiver}
                onChange={(event) => setReceiver(event.target.value)}
                required
              ></input>
            </div>
            <div className="input-row">
              <span>Amount: </span>
              <input
                type="number"
                onKeyDown={(evt) =>
                  ["e", "E", "+", "-"].includes(evt.key) && evt.preventDefault()
                }
                value={amount}
                onChange={(event) => setAmount(event.target.value)}
                required
              ></input>
            </div>
          </div>
          <div className="modal-footer">
            <button onClick={transferMoney}>Transfer now!</button>
          </div>
        </div>
      </div>
    </div>,

    document.getElementById("portal")
  );
}

export default TransferFund;
