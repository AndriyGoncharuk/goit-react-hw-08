import { useSelector } from "react-redux";
import notebookSvg from "../assets/notebook.svg";
import reactSvg from "../assets/react.svg";
import { selectAuthIsLoggedIn, selectAuthUser } from "../redux/auth/selectors";

const HomePage = () => {
  const isLoggedIn = useSelector(selectAuthIsLoggedIn);
  const user = useSelector(selectAuthUser);

  return isLoggedIn ? (
    <div>
      <h1 className="greet">Welcome back, {user.name}!</h1>
      <img className="react" src={reactSvg} alt="React" />
    </div>
  ) : (
    <div>
      <h1 className="greet">Welcome!</h1>
      <img className="notebook" src={notebookSvg} alt="Notebook" />
    </div>
  );
};

export default HomePage;
