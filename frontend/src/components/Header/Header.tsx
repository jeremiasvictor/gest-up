import ThemeToggle from "../ThemeToggle/ThemeToggle";
import { FaBars, FaUser } from "react-icons/fa6";
import styles from "./Header.module.css";

interface HeaderProps {
  onMenuClick?: () => void;
}

function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.navContainer}>
        <div className={styles.headerLeft}>
          <button className={styles.menu}>
            <FaBars className={styles.FaBars} />
          </button>

          <a href="/" className={styles.gestupLogo}>
            <img src="../../../public/com-sombra.png" alt="Logo Image" />
          </a>
        </div>

        <div className={styles.headerRight}>
          <ThemeToggle />
          <button className={styles.user}>
            <FaUser className={styles.faUser} />
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Header;
