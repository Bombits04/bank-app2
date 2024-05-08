import "./DepositFund.css";
import withdrawImg from "../../../src/assets/images/withdraw.png";
import ReactDom from "react-dom";

function DepositFund({ depOpen, depClose }) {
  if (!depOpen) return null;

  return ReactDom.createPortal(
    <div className="modal-container">
      <div className="modal-comp-container">
        <div onClick={depClose} className="modal-exit-button">
          [X]
        </div>
        <div className="modal-item-container">
          <div className="modal-title">Deposit Funds</div>
          <div className="modal-body">MODAL BODY</div>
          <div className="modal-footer">MODAL FOOTER</div>
        </div>
      </div>
    </div>,

    document.getElementById("portal")
  );
}

export default DepositFund;
