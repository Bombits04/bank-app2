//CSS IS IN WithdrawFunds.css
import ReactDom from "react-dom";

function TransferFund({ transOpen, transClose }) {
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
              <input type="number" />
            </div>
            <div className="input-row">
              <span>Receiver:</span>
              <input type="number" min="1" />
            </div>
            <div className="input-row">
              <span>Amount: </span>
              <input type="number" min={0} minLength={5} maxLength={5} />
            </div>
          </div>
          <div className="modal-footer">MODAL FOOTER</div>
        </div>
      </div>
    </div>,

    document.getElementById("portal")
  );
}

export default TransferFund;
