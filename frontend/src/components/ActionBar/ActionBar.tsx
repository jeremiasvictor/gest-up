import React from "react";
import styles from "./ActionBar.module.css";
import { FaSearch } from "react-icons/fa";

interface ActionBarProps {
  title: string;
  primaryAction?: React.ReactNode;
  secondaryActions?: React.ReactNode;
}

function ActionBar({ title, primaryAction, secondaryActions }: ActionBarProps) {
  return (
    <div className={styles.actionBar}>
      <div className={styles.header}>
        <h1>{title}</h1>
      </div>

      <div className={styles.controlsContainer}>
        {" "}
        {primaryAction}
        <div className={styles.searchWrapper}>
          <input type="text" placeholder="Type in to search..." />
          <FaSearch className={styles.searchIcon} />
        </div>
        <div className={styles.actionsWrapper}>{secondaryActions}</div>
      </div>
    </div>
  );
}

export default ActionBar;
