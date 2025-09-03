import React from "react";
import { useTheme } from "../../contexts/ThemeContext";
import { FaMoon, FaSun } from "react-icons/fa6";
import styles from "./ThemeToggle.module.css";

// React.FC é a tipagem do typescript que indica que é um Funcional Component
const ThemeToggle: React.FC = () => {
  //desestruturação: o hook um objeto com duas propriedades, e coloca cada uma numa constante
  const { theme, toggleTheme } = useTheme();

  // true se for 'light' e false se for 'dark'
  const isChecked = theme === "light";

  // combinar as classes dinamicamente
  const sliderClasses = `${styles.slider} ${
    theme === "light" ? styles.light : ""
  }`;
  const iconWrapperClasses = `${styles.iconWrapper} ${
    theme === "light" ? styles.light : ""
  } ${isChecked ? styles.checked : ""}`;

  return (
    <div className={styles.themeSwitchWrapper}>
      {/* label é pra acessibilidade */}
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
