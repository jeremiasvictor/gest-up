import React from "react";
import { useTheme } from "../../contexts/ThemeContext";
import "./ThemeToggle.css";
import { FaMoon, FaSun } from "react-icons/fa6";

// React.FC é a tipagem do typescript que indica que é um Funcional Component
const ThemeToggle: React.FC = () => {
  //desestruturação: o hook um objeto com duas propriedades, e coloca cada uma numa constante
  const { theme, toggleTheme } = useTheme();

  // true se for 'light' e false se for 'dark'
  const isChecked = theme === "light";
  return (
    <div className="theme-switch-wrapper">
      {/* label é pra acessibilidade */}
      <label className="theme-switch" htmlFor="theme-checkbox">
        <input
          type="checkbox"
          id="theme-checkbox"
          checked={isChecked}
          onChange={toggleTheme}
        />
        <div className="slider">
          <div className="icon-wrapper">
            {theme === "dark" ? <FaMoon /> : <FaSun />}
          </div>
        </div>
      </label>
    </div>
  );
};

export default ThemeToggle;
