import React from "react";
import styles from "./ActionBar.module.css";
import { FaSearch } from "react-icons/fa";

interface ActionBarProps {
  title: string;
  primaryAction?: React.ReactNode;
  secondaryActions?: React.ReactNode;
  searchValue: string;
  onSearchChange: (value: string) => void;
}

function ActionBar({
  title,
  primaryAction,
  secondaryActions,
  searchValue,
  onSearchChange,
}: ActionBarProps) {
  return (
    <div className={styles.actionBar}>
      <div className={styles.header}>
        <h1>{title}</h1>
      </div>

      <div className={styles.controlsContainer}>
        {" "}
        {primaryAction}
        <div className={styles.searchWrapper}>
          <FaSearch className={styles.searchIcon} />
          <input
            type="text"
            placeholder="Type in to search..."
            value={searchValue}
            onChange={(e) => onSearchChange(e.target.value)}
          />
        </div>
        <div className={styles.actionsWrapper}>{secondaryActions}</div>
      </div>
    </div>
  );
}

export default ActionBar;
