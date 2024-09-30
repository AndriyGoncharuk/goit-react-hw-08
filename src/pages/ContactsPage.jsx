import { useDispatch, useSelector } from "react-redux";
import ContactForm from "../components/ContactForm/ContactForm";
import ContactList from "../components/ContactList/ContactList";
import Loader from "../components/Loader/Loader";
import SearchBox from "../components/SearchBox/SearchBox";
import { selectContacts } from "../redux/contacts/selectors";
import { selectVisibleContacts } from "../redux/filters/selectors";
import { useEffect } from "react";
import { fetchContacts } from "../redux/contacts/operations";
import { ImConfused } from "react-icons/im";
import { FaAddressBook } from "react-icons/fa";
import styles from "./ContactPage.module.css";

const ContactsPage = () => {
  const contacts = useSelector(selectVisibleContacts);
  const { loading, error } = useSelector(selectContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <h2 className="title">
        Phonebook <FaAddressBook />
      </h2>
      <div className={styles.wrap}>
        <div>
          <ContactForm />
          <SearchBox />
        </div>
        <div className={styles.wrapContactList}>
          {loading && <Loader />}
          {error && <p>Cant load contacts at the moment</p>}
          {!loading && !error && contacts.length !== 0 ? (
            <ContactList contacts={contacts} />
          ) : (
            <div className="phonebookEmpty">
              <p>The phonebook is empty</p>
              <ImConfused />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ContactsPage;
