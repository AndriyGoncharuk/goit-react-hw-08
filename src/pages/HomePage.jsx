import { useSelector } from "react-redux";
import { ImBook } from "react-icons/im";
import { FaAddressCard } from "react-icons/fa";
import { selectAuthIsLoggedIn, selectAuthUser } from "../redux/auth/selectors";
import styles from "./HomePage.module.css";

const HomePage = () => {
  const isLoggedIn = useSelector(selectAuthIsLoggedIn);
  const user = useSelector(selectAuthUser);

  return isLoggedIn ? (
    <div>
      <h1 className="greet">Welcome back, {user.name}!</h1>
      <FaAddressCard className={styles.svg} />
    </div>
  ) : (
    <div>
      <h1 className="greet">Welcome!</h1>
      <ImBook className={styles.svg} />
    </div>
  );
};

export default HomePage;
