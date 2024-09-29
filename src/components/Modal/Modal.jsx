import ReactDOM from "react-dom";
import styles from "./Modal.module.css";

const Modal = ({ onClose, onDelete }) => {
  const portalRoot = document.getElementById("portal-root");

  if (!portalRoot) {
    console.error("Portal root not found");

    return null;
  }

  return ReactDOM.createPortal(
    <div className={styles.modal}>
      <button className={styles.btnClose} onClick={onClose}>
        X
      </button>
      <div className={styles.content}>
        <h3 className={styles.modalTitle}>Delete contact?</h3>
        <div className={styles.contentBox}>
          <button className={styles.btn} type="button" onClick={onDelete}>
            Yes
          </button>
          <button className={styles.btn} type="button" onClick={onClose}>
            Cancel
          </button>
        </div>
      </div>
    </div>,
    portalRoot
  );
};

export default Modal;
