import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Header.module.css";

import ThemeToggle from "../ThemeToggle/ThemeToggle";
import ProfileMenu from "../ProfileMenu/ProfileMenu";
import Modal from "../Modal/Modal";

import { FaUser } from "react-icons/fa6";

function Header() {
  const [isProfileMenuOpen, setProfileMenuOpen] = useState(false);
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const userName = localStorage.getItem("gestup_userName");

  const handleProfileMenuToggle = () => {
    setProfileMenuOpen((currentValue) => !currentValue);
  };

  const executeLogout = () => {
    localStorage.removeItem("gestup_userId");
    localStorage.removeItem("gestup_userName");
    setIsLogoutModalOpen(false);
    setProfileMenuOpen(false);
    navigate("/login");
  };

  const handleOpenLogoutModal = () => {
    setIsLogoutModalOpen(true);
    setProfileMenuOpen(false);
  };

  return (
    <>
      <header className={styles.header}>
        <nav className={styles.navContainer}>
          <div className={styles.headerLeft}>
            <a href="/" className={styles.gestupLogo}>
              <img src="/com-sombra.png" alt="Logo Image" />
            </a>
          </div>

          <div className={styles.headerRight}>
            <ThemeToggle />
            <div ref={menuRef} className={styles.profileContainer}>
              <button
                className={styles.user}
                onClick={() => setProfileMenuOpen((prev) => !prev)}
              >
                <FaUser className={styles.faUser} />
              </button>

              {/* render profileMenu if isProfileMenuOpen = true */}
              {isProfileMenuOpen && (
                <ProfileMenu
                  userName={userName || "user"}
                  onLogout={handleOpenLogoutModal}
                />
              )}
            </div>
          </div>
        </nav>
      </header>

      <Modal
        isOpen={isLogoutModalOpen}
        onClose={() => setIsLogoutModalOpen(false)}
      >
        <h2>Confirm logout</h2>
        <p className={styles.logoutModalP}>Are you sure you want to logout?</p>
        <div className={styles.logoutModalButtons}>
          <button
            onClick={() => setIsLogoutModalOpen(false)}
            className={styles.cancelButton}
          >
            Cancel
          </button>
          <button onClick={executeLogout} className={styles.logoutButton}>
            Logout
          </button>
        </div>
      </Modal>
    </>
  );
}

export default Header;
