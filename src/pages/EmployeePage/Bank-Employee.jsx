import './../../App.css';
import logo from "../../../src/assets/images/logo.png";
import addUserImg from "../../../src/assets/images/add-user.png";
import removeUserImg from "../../../src/assets/images/remove-user.png";
import withdrawImg from "../../../src/assets/images/withdraw.png"
import depositImg from "../../../src/assets/images/deposit.png"
import transferImg from "../../../src/assets/images/transfer.png"
import expensesImg from "../../../src/assets/images/expenses.png"

function EmployeePage(){
    return (
        <div className="employee">
            <img src={logo} alt='logo' className="logo"></img>
            <style>{'body { background-color: #124E66; }'}</style>
            
            <br>
            </br>
            <br>
            </br>
            <br>
            </br>
            <div className="flex-parent jc-center">
                <img className="btnleft" src={addUserImg} alt="add user"></img>
                <img className="btnleft" src={depositImg} alt="deposit"></img>
                <img className="btnleft" src={transferImg} alt="transfer"></img>
            </div>
            <br>
            </br>
            <div className="flex-parent jc-center">
                <img className="btnleft" src={removeUserImg} alt="remove user"></img>
                <img className="btnleft" src={withdrawImg} alt="withdraw"></img>
                <img className="btnleft" src={expensesImg} alt="expenses"></img>
            </div>
        </div>
        
    )
}

export default EmployeePage;