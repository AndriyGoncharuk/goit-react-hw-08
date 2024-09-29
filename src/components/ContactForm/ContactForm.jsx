import { useDispatch } from "react-redux";
import { addContacts } from "../../redux/contacts/operations";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import styles from "./ContactForm.module.css";

const validationSchema = Yup.object().shape({
  name: Yup.string().min(3).max(50).required("Required"),
  number: Yup.string().min(7).required("Required"),
});

const ContactForm = () => {
  const dispatch = useDispatch();
  const nameFieldId = "name-field";
  const numberFieldId = "number-field";

  const handleSubmit = (values, actions) => {
    dispatch(
      addContacts({
        name: values.name,
        number: values.number,
      })
    );
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{ name: "", number: "" }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form className={styles.form}>
        <label className={styles.label} htmlFor={nameFieldId}>
          Name
        </label>
        <Field
          className={styles.input}
          name="name"
          type="text"
          id={nameFieldId}
        />
        <ErrorMessage className={styles.error} name="name" component="div" />

        <label className={styles.label} htmlFor={numberFieldId}>
          Number
        </label>
        <Field
          className={styles.input}
          name="number"
          type="text"
          id={numberFieldId}
        />
        <ErrorMessage className={styles.error} name="number" component="div" />

        <button className={styles.button} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
