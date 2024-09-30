import { FaUser } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { useDispatch } from "react-redux";
import {
  deleteContacts,
  updateContact,
} from "../../../redux/contacts/operations";
import { useState } from "react";
import styles from "./Contact.module.css";
import Modal from "../../Modal/Modal";
import toast from "react-hot-toast";
import { CiEdit } from "react-icons/ci";

const Contact = ({ data: { name, number, id } }) => {
  // const { id, name, number } = contact;
  const [isOpen, setIsOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editedName, setEditedName] = useState(name);
  const [editedNumber, setEditedNumber] = useState(number);
  const dispatch = useDispatch();

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  const removeContact = () => {
    dispatch(deleteContacts(id))
      .unwrap()
      .then(() => {
        toast.success("Contact deleted successesfully");
        handleClose();
      });
  };

  const handleEditToggle = () => setIsEditing((prev) => !prev);

  const handleSave = () => {
    dispatch(
      updateContact({
        contactId: id,
        updatedContact: { name: editedName, number: editedNumber },
      })
    )
      .unwrap()
      .then(() => {
        toast.success("Contact updated successfully");
        setIsEditing(false);
      });
  };

  return (
    <div className={styles.box}>
      <ul className={styles.list}>
        <li className={styles.item}>
          <FaUser className={styles.icon} />
          {isEditing ? (
            <input
              type="text"
              value={editedName}
              onChange={(e) => setEditedName(e.target.value)}
              className={styles.input}
              autoFocus
            />
          ) : (
            <p className={styles.text}>{name}</p>
          )}
        </li>
        <li className={styles.item}>
          <FaPhoneAlt className={styles.icon} />
          {isEditing ? (
            <input
              type="text"
              value={editedNumber}
              onChange={(e) => setEditedNumber(e.target.value)}
              className={styles.input}
              autoFocus
            />
          ) : (
            <p className={styles.text}>{number}</p>
          )}
        </li>
      </ul>
      <div className={styles.buttons}>
        {isEditing ? (
          <>
            <button type="button" className={styles.btn} onClick={handleSave}>
              Save
            </button>
            <button
              type="button"
              className={styles.btn}
              onClick={handleEditToggle}
            >
              Cancel
            </button>
          </>
        ) : (
          <>
            <button
              type="button"
              className={styles.btn}
              onClick={removeContact}
            >
              Delete
            </button>
            <button
              type="button"
              className={styles.btn}
              onClick={handleEditToggle}
            >
              Edit <CiEdit />
            </button>
          </>
        )}
      </div>
      {isOpen && <Modal onClose={handleClose} onDelete={removeContact} />}
    </div>
  );
};

export default Contact;
