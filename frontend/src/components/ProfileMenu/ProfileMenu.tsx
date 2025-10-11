import { Link } from "react-router-dom";
import styles from "./ProfileMenu.module.css";

import { FaUserCircle, FaSignOutAlt } from "react-icons/fa";

interface ProfileMenuProps {
  onLogout: () => void;
}

function ProfileMenu({ onLogout }: ProfileMenuProps) {
  return (
    <div className={styles.menuContainer}>
      <ul className={styles.menuList}>
        <li>
          <Link to="/companies" className={styles.companiesButton}>
            <FaUserCircle />
            <span>My companies</span>
          </Link>
        </li>
        <li onClick={onLogout} className={styles.logoutButton}>
          <FaSignOutAlt />
          <span>Logout</span>
        </li>
      </ul>
    </div>
  );
}

export default ProfileMenu;
