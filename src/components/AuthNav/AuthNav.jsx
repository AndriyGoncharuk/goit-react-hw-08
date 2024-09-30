import classNames from "classnames";
import { NavLink } from "react-router-dom";
import styles from "./AuthNav.module.css";

const getLinkStyle = ({ isActive }) =>
  classNames(styles.link, {
    [styles.isActive]: isActive,
  });

const AuthNav = () => {
  return (
    <div className={styles.box}>
      <NavLink to="/register" className={getLinkStyle}>
        Register
      </NavLink>
      <NavLink to="/login" className={getLinkStyle}>
        Log in
      </NavLink>
    </div>
  );
};

export default AuthNav;
