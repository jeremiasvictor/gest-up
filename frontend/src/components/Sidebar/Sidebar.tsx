import { NavLink } from "react-router-dom";
import styles from "./Sidebar.module.css";

import { FaBoxOpen, FaGear } from "react-icons/fa6";

function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <nav>
        <h1 className={styles.navTitle}>General</h1>
        <ul className={styles.navList}>
          {/* <li>
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                isActive
                  ? `${styles.navLink} ${styles.activeLink}`
                  : styles.navLink
              }
            >
              <FaLayerGroup />
              <span>Dashboard</span>
            </NavLink>
          </li> */}

          <li>
            <NavLink
              to="/stock"
              className={({ isActive }) =>
                isActive
                  ? `${styles.navLink} ${styles.activeLink}`
                  : styles.navLink
              }
            >
              <FaBoxOpen />
              <span>Stock</span>
            </NavLink>
          </li>

          {/* <li>
            <NavLink
              to="/sales"
              className={({ isActive }) =>
                isActive
                  ? `${styles.navLink} ${styles.activeLink}`
                  : styles.navLink
              }
            >
              <FaCheckToSlot />
              <span>Sales</span>
            </NavLink>
          </li> */}

          {/* <li>
            <NavLink
              to="/clients"
              className={({ isActive }) =>
                isActive
                  ? `${styles.navLink} ${styles.activeLink}`
                  : styles.navLink
              }
            >
              <FaFaceSmile />
              <span>Clients</span>
            </NavLink>
          </li> */}

          <li className={styles.settings}>
            <NavLink
              to="/settings"
              className={({ isActive }) =>
                isActive
                  ? `${styles.navLink} ${styles.activeLink}`
                  : styles.navLink
              }
            >
              <FaGear />
              <span>Settings</span>
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className={styles.sidebarLight}></div>
    </aside>
  );
}

export default Sidebar;
