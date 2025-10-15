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
          <Link to="/business" className={styles.businessButton}>
            <FaUserCircle />
            <span>My business</span>
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
