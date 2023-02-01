import React from "react";
import { CiSearch } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
import {
  getfilteredComments,
  selectFilterValue,
} from "../../redux/filterSlice";
import styles from "./Filter.module.css";

export const Filter = () => {
  const dispatch = useDispatch();
  // const filter = useSelector(selectFilterValue);
  // console.log("filter: ", filter);

  const changeFilter = (e) => {
    console.log("e: ", e.target.value);
    dispatch(getfilteredComments(e.target.value));
  };

  return (
    <div className={styles.search}>
      <div className={styles.searchWrapper}>
        <CiSearch className={styles.searchIcon} />

        <input
          className={styles.searchInput}
          type="text"
          id="search"
          // value={filter}
          placeholder="Search something.."
          onChange={changeFilter}
        />
      </div>
    </div>
  );
};
