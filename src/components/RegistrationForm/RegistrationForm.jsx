import styles from "./RegistrationForm.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";
import { register } from "../../redux/auth/operations";
import { selectAuthError } from "../../redux/auth/selectors";

const RegistrationForm = () => {
  const nameField = "name-field";
  const emailField = "email-field";
  const passwordField = "password-field";
  const dispatch = useDispatch();
  const error = useSelector(selectAuthError);

  const RegistrationSchema = Yup.object().shape({
    name: Yup.string()
      .required("Name is required")
      .min(3, "Too Short!")
      .max(50, "Too Long!"),
    email: Yup.string()
      .required("Email is required")
      .min(8, "Password should contain at least 8 symbols")
      .max(50, "Too Long!"),
    password: Yup.string()
      .required("Password is required")
      .email("Password should contain letters, numbers and symbols"),
  });

  const handleSubmit = (values, actions) => {
    dispatch(
      register({
        name: values.name,
        email: values.email,
        password: values.password,
      })
    );
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        password: "",
      }}
      onSubmit={handleSubmit}
      validationSchema={RegistrationSchema}
    >
      <Form className={styles.form}>
        <label className={styles.name} htmlFor={nameField}>
          Name
        </label>
        <Field
          className={styles.field}
          type="text"
          name="name"
          id={nameField}
          placeholder="Please enter your name"
        />
        <ErrorMessage className={styles.error} name="name" component="span" />

        <label className={styles.name} htmlFor={emailField}>
          Email
        </label>
        <Field
          className={styles.field}
          type="text"
          name="email"
          id={emailField}
          placeholder="example@gmail.com"
        />
        <ErrorMessage className={styles.error} name="email" component="span" />

        <label className={styles.name} htmlFor={passwordField}>
          Password
        </label>
        <Field
          className={styles.field}
          type="password"
          name="password"
          id={passwordField}
          placeholder="Please enter the password"
        />
        <ErrorMessage
          className={styles.error}
          name="password"
          component="span"
        />
        <button className={styles.btn} type="submit">
          Register
        </button>

        {error && <p className={styles.error}>Something went wrong {error}</p>}
      </Form>
    </Formik>
  );
};

export default RegistrationForm;
