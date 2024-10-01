import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectAuthUser } from "../../redux/auth/selectors";
import { logOut } from "../../redux/auth/operations";
import { FaRegUser } from "react-icons/fa";
import { CiLogout } from "react-icons/ci";
import styles from "./UserMenu.module.css";

export default function UserMenu() {
  const dispatch = useDispatch();
  const user = useSelector(selectAuthUser);
  const navigate = useNavigate();

  const logout = () => {
    dispatch(logOut());
    navigate("/");
  };
  return (
    <div className={styles.box}>
      <h3 className={styles.text}>
        <FaRegUser className={styles.icon} /> {user.name}
      </h3>
      <button type="button" className={styles.btn} onClick={logout}>
        <CiLogout />
        Log Out
      </button>
    </div>
  );
}
