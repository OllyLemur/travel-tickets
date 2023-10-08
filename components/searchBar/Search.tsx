import React from "react";
import SearchForm from "./SearchForm";
import styles from './search.module.scss'

export default function Search() {
  return (
    <div className={styles.cont}>
      <SearchForm />
    </div>
  );
}
