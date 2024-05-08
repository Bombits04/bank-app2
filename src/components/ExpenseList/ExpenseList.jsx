import "./ExpenseList.css";
import ReactDom from "react-dom";

function ExpenseList({expOpen, expClose}){
    if (!expOpen) return null
    return ReactDom.createPortal(
        <div className="modal-container">
          <div className="modal-comp-container">
            <div onClick={expClose} className="modal-exit-button">
              [X]
            </div>
            <div className="modal-item-container">
              <div className="modal-title">Expenses</div>
              <div className="modal-body">MODAL BODY</div>
              <div className="modal-footer">MODAL FOOTER</div>
            </div>
          </div>
        </div>,
    
        document.getElementById("portal")
    );
}

export default ExpenseList;