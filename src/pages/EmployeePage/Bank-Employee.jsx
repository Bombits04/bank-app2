import React, {useState} from "react";
import './../../App.css';
import logo from "../../../src/assets/images/logo.png";
import addUserImg from "../../../src/assets/images/add-user.png";
import removeUserImg from "../../../src/assets/images/remove-user.png";
import withdrawImg from "../../../src/assets/images/withdraw.png";
import depositImg from "../../../src/assets/images/deposit.png";
import transferImg from "../../../src/assets/images/transfer.png";
import expensesImg from "../../../src/assets/images/expenses.png";
import backIcon from "../../../src/assets/images/back.png";
import { NavLink } from 'react-router-dom';

//page imports
import DepositFund from "../../components/DepositFund/DepositFund";
import TransferFund from "../../components/TransferFund/TransferFund";
import WithdrawFund from "../../components/WithdrawFund/WithdrawFund";
import ExpenseList from "../../components/ExpenseList/ExpenseList";
import ClientData from "../../../src/assets/data/ClientData.json";


function EmployeePage(){
    const [depisOpen, setDepIsOpen] = useState(false);
    const [withIsOpen, setWithIsOpen] = useState(false);
    const [transIsOpen, setTransIsOpen] = useState(false);
    const [expIsOpen, setExpIsOpen] = useState(false);

    const [users, setUsers] = useState(ClientData);
    const [show, setShow] = useState(false);
    const [showDepo, setShowDepo] = useState(false);
    const [showWithdraw, setShowWithdraw] = useState(false);
    const [sender, setSender] = useState("");
    const [receiver, setReceiver] = useState("");
    const [amount, setAmount] = useState("");

    const userExist = (name) => {
        return users.find((user) => user.name === name);
    }

    const findUser = (name) => {
        let foundUser = users.filter((user) => user.name === name);
        return foundUser[0];
    }

    const transferMoney = () => {
        const newAmount = Number(amount);
        if(userExist(sender) && userExist(receiver) && sender !== receiver && newAmount > 0){
        const senderInfo = findUser(sender);
        if(senderInfo.balance >= newAmount){
            const updateUsers = users.map((user) => {
            if(user.name === sender){
                return {...user, balance: user.balance - newAmount};
            } else if(user.name === receiver) {
                return {...user, balance: user.balance + newAmount};
            }
            return user;
            });
            setUsers(updateUsers);
        }
        else {
            alert("Not enough balance!");
        }
        } else {
        alert("Transaction invalid!");
        }
        setSender("");
        setReceiver("");
        setAmount("");
        setShow(false);
    }

    const depositMoney = () => {
        const newAmount = Number(amount);
        if(userExist(sender) && newAmount > 0){
        const senderInfo = findUser(sender);
        if(senderInfo.balance >= newAmount){
            const updateUsers = users.map((user) => {
            if(user.name === sender){
                return {...user, balance: user.balance + newAmount};
            }
            return user;
            });
            setUsers(updateUsers);
        }
        else {
            alert("Not enough balance!");
        }
        } else {
        alert("Transaction invalid!");
        }
        setSender("");
        setAmount("");
        setShowDepo(false);
    }

    const withdrawMoney = () => {
        const newAmount = Number(amount);
        if(userExist(sender) && newAmount > 0){
        const senderInfo = findUser(sender);
        if(senderInfo.balance >= newAmount){
            const updateUsers = users.map((user) => {
            if(user.name === sender){
                return {...user, balance: user.balance - newAmount};
            }
            return user;
            });
            setUsers(updateUsers);
        }
        else {
            alert("Not enough balance!");
        }
        } else {
        alert("Transaction invalid!");
        }
        setSender("");
        setAmount("");
        setShowWithdraw(false);
    }

    return (
        
        <div className="employee">
            <img src={logo} alt='logo' className="logoInPages"></img>
            <style>{'body { background-color: #124E66; }'}</style>
            <nav>
                    <NavLink className='item' to='/'><img src={backIcon} alt='back' className='backIcon'></img></NavLink>
             </nav>
            {/* table */}
            <table className="table">
                <tr>
                    <th>Client No.</th>
                    <th>Client Name</th>
                    <th>Available Balance</th>
                </tr>
                <tbody> 
                        {
                        users.map( (clients, index)=>(
                        <tr key={index}>                 
                        <th>{ index+1}</th>
                        <td>{ clients.name} </td>
                        <td>{ clients.balance} </td>
                        {/* <td><button onClick={handleDelete(current.id)}>X</button></td>             */}
                        </tr>
                            ))
                        }                        
                    </tbody>

            </table>
            <br>
            </br>
        {
        show &&
        (
        <div className="transferForm">
          <form onSubmit={transferMoney}>
            <label>Sender: </label>
            <input type="text" value={sender} onChange={(event) => setSender(event.target.value)} required></input>
            <br />
            <label>Receiver: </label>
            <input type="text" value={receiver} onChange={(event) => setReceiver(event.target.value)} required></input>
            <br />
            <label>Amount: </label>
            <input type="number" onKeyDown={(evt) => ["e", "E", "+", "-"].includes(evt.key) && evt.preventDefault()} value={amount} onChange={(event) => setAmount(event.target.value)} required></input>
            <br />
            <button>Transfer</button>
          </form>
        </div>
        )
        }
            <br/>
        {
        showDepo &&
        (
            <div className="depositForm">
              <form onSubmit={depositMoney}>
                <label>Client Name:</label>
                <input type="text" value={sender} onChange={(event) => setSender(event.target.value)} required></input>
                <br />
                <label>Amount: </label>
                <input type="number" onKeyDown={(evt) => ["e", "E", "+", "-"].includes(evt.key) && evt.preventDefault()} value={amount} onChange={(event) => setAmount(event.target.value)} required></input>
                <br />
                <button>Deposit</button>
              </form>
            </div>
        )
        }
            <br/>
        {
        showWithdraw &&
        (
            <div className="withdrawForm">
              <form onSubmit={withdrawMoney}>
                <label>Client Name:</label>
                <input type="text" value={sender} onChange={(event) => setSender(event.target.value)} required></input>
                <br />
                <label>Amount: </label>
                <input type="number" onKeyDown={(evt) => ["e", "E", "+", "-"].includes(evt.key) && evt.preventDefault()} value={amount} onChange={(event) => setAmount(event.target.value)} required></input>
                <br />
                <button>Withdraw</button>
              </form>
            </div>
        )
        }
      
            <hr></hr>
            <br/>
            <DepositFund isClient={false} ClientData={users} depOpen={depisOpen} depClose={(() => setDepIsOpen(false))}></DepositFund>
            <WithdrawFund isClient={false} ClientData={users} withOpen={withIsOpen} withClose={(() => setWithIsOpen(false))} ></WithdrawFund>
            <TransferFund isClient={false} ClientData={users} transOpen={transIsOpen} transClose={(() => setTransIsOpen(false))}></TransferFund>
            <ExpenseList isClient={false} ClientData={users} expOpen={expIsOpen} expClose={(() => setExpIsOpen(false))}></ExpenseList>

            <div className="flex-parent jc-center">
                <img className="btnleft" src={addUserImg} alt="add user"></img>
                <img className="btnleft" src={depositImg} alt="deposit" onClick={() => setShowDepo(showDepo ? false:true)}></img>
                <img className="btnleft" src={transferImg} alt="transfer" onClick={() => setShow(show ? false:true)}></img>
            </div>
            <br>
            </br>
            <div className="flex-parent jc-center">
                <img className="btnleft" src={removeUserImg} alt="remove user"></img>
                <img className="btnleft" src={withdrawImg} alt="withdraw" onClick={() => setShowWithdraw(showWithdraw ? false:true)}></img>
                <img onClick={( () => setExpIsOpen(true))} className="btnleft" src={expensesImg} alt="withdraw"></img>
            </div>
        </div>
        
    )
}

export default EmployeePage;