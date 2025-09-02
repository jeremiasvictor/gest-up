import React from "react";
import styles from "./ActionBar.module.css";
import { FaSearch } from "react-icons/fa";

interface ActionBarProps {
  title: string;
  children?: React.ReactNode;
}

function ActionBar({ title, children }: ActionBarProps) {
  return (
    <div className={styles.actionBar}>
      <div className={styles.header}>
        <h1>{title}</h1>
      </div>
      <div className={styles.controls}>
        <div className={styles.searchWrapper}>
          <input type="text" placeholder="Type in to search..." />
          <FaSearch className={styles.searchIcon} />
        </div>

        {children}
      </div>
    </div>
  );
}

export default ActionBar;
