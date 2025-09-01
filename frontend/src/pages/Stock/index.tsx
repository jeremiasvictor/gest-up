// import api from "../../services/api";
import ThemeToggle from "../../components/ThemeToggle/ThemeToggle";
import {
  //FaGear,
  FaBars,
  //FaMoon,
  FaUser,
  //FaLayerGroup,
  //FaBoxOpen,
  //FaCheckToSlot,
  //FaFaceSmile,
  //FaEye,
  //FaEyeSlash,
  //FaExpand,
} from "react-icons/fa6";
//import { IoIosNotifications, IoIosArrowDown } from "react-icons/io";

import styles from "./Stock.module.css";

function Stock() {
  return (
    <div className={styles.stockPageContainer}>
      <header>
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
    </div>
  );
}

export default Stock;
