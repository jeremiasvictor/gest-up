import { useState } from "react";
import styles from "./Header.module.css";

import ThemeToggle from "../ThemeToggle/ThemeToggle";
import ProfileMenu from "../ProfileMenu/ProfileMenu";

import { FaUser } from "react-icons/fa6";

function Header() {
  const [isProfileMenuOpen, setProfileMenuOpen] = useState(false);

  const handleProfileMenuToggle = () => {
    setProfileMenuOpen((currentValue) => !currentValue);
  };

  const handleLogout = () => {
    setProfileMenuOpen(false);
  };

  return (
    <header className={styles.header}>
      <nav className={styles.navContainer}>
        <div className={styles.headerLeft}>
          <a href="/" className={styles.gestupLogo}>
            <img src="/com-sombra.png" alt="Logo Image" />
          </a>
        </div>

        <div className={styles.headerRight}>
          <ThemeToggle />
          <div className={styles.profileContainer}>
            <button className={styles.user} onClick={handleProfileMenuToggle}>
              <FaUser className={styles.faUser} />
            </button>

            {/* render profileMenu if isProfileMenuOpen = true */}
            {isProfileMenuOpen && <ProfileMenu onLogout={handleLogout} />}
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
