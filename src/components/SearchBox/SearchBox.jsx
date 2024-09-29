import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../../redux/filters/slice";

import styles from "./SearchBox.module.css";

const SearchBox = () => {
  const dispatch = useDispatch();
  const filterValue = useSelector((state) => state.filters.filter);

  const selectNameFilter = (event) => {
    const value = event.target.value.trim();
    dispatch(changeFilter(value));
  };

  return (
    <div className={styles.wrapper}>
      <label className={styles.label} htmlFor="filter">
        Find contacts by name
      </label>
      <input
        className={styles.input}
        type="text"
        value={filterValue}
        onChange={selectNameFilter}
      />
    </div>
  );
};

export default SearchBox;
