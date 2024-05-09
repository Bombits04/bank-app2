//CSS IS IN WithdrawFunds.css
import ReactDom from "react-dom";

function TransferFund({transOpen, transClose}){
    if (!transOpen) return null
    return ReactDom.createPortal(
        <div className="modal-container">
          <div className="modal-comp-container">
            <div onClick={transClose} className="modal-exit-button">
              [X]
            </div>
            <div className="modal-item-container">
              <div className="modal-title">Transfer Funds</div>
              <div className="modal-body">MODAL BODY</div>
              <div className="modal-footer">MODAL FOOTER</div>
            </div>
          </div>
        </div>,
    
        document.getElementById("portal")
    );
}

export default TransferFund;