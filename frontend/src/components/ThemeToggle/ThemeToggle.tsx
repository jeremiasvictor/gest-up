import React from "react";
import styles from "./ThemeToggle.module.css";

import { useTheme } from "../../contexts/ThemeContext";

import { FaMoon, FaSun } from "react-icons/fa6";

// React.FC is TypeScript typing that indicates a Functional Component
const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  // true if its 'light' and false if its 'dark'
  const isChecked = theme === "light";

  // combine classes dynamically
  const sliderClasses = `${styles.slider} ${
    theme === "light" ? styles.light : ""
  }`;
  const iconWrapperClasses = `${styles.iconWrapper} ${
    theme === "light" ? styles.light : ""
  } ${isChecked ? styles.checked : ""}`;

  return (
    <div className={styles.themeSwitchWrapper}>
      <label className={styles.themeSwitch} htmlFor="theme-checkbox">
        <input
          type="checkbox"
          id="theme-checkbox"
          checked={isChecked}
          onChange={toggleTheme}
        />
        <div className={sliderClasses}>
          <div className={iconWrapperClasses}>
            {theme === "dark" ? <FaMoon /> : <FaSun />}
          </div>
        </div>
      </label>
    </div>
  );
};

export default ThemeToggle;
