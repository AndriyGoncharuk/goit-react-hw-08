import Contact from "./Contact/Contact";
// import { selectVisibleContacts } from "../../redux/selectors";
// import { useSelector } from "react-redux";
import styles from "./ContactList.module.css";

const ContactList = ({ contacts }) => {
  // const contacts = useSelector(selectVisibleContacts);

  return (
    <ul className={styles.list}>
      {contacts.map((contact) => (
        <li key={contact.id}>
          <Contact data={contact} />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
